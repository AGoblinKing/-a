// run static file server + ws server
import WebSocket, { WebSocketServer } from 'ws';

import { Server } from "node-static"

const file = new Server('./public');

import { createServer } from "http"
import { uuid } from 'uuidv4';
import { ECommand, IMassUpdate } from './message';

const names = ["foo", "bar", "kurt", "russel", "luna", "bear", "ferret", "zebra", "lime", "blue", "orange", "red", "dread", "dead", "donkey", "monkey", "pig", "cow", "chicken", "duck", "goose", "turkey", "rooster", "sheep", "pigeon", "flamingo", "parrot", "owl", "bat", "beetle", "butterfly", "caterpillar", "cicada", , "cricket", "crocodile", "dinosaur", "dolphin", "duckling", "eagle", "elephant", "finch", "fox", "frog", "giraffe", "goat", "gorilla", "hedgehog", "hippo", "horse", "hyena", "iguana", "jaguar", "kangaroo", "koala", "lion", "lizard", "llama", "lynx", "mantis", "mole", "monkey", "mosquito", "mouse", "octopus", "owl", "panda", "penguin", "pig", "pigeon", "rabbit", "rat", "rhino", "rooster", "salamander", "scorpion", "seal", "shark", "sheep", "snake", "spider", "squirrel", "tiger", "turtle", "walrus", "wolf", "zebra", "coral", "azure", "fiery", "cool"]
function RandomName(length = 2) {
    let name = ""
    for (let i = 0; i < length; i++) {
        name += names[Math.floor(Math.random() * names.length)] + "-"
    }

    return name + Math.floor(Math.random() * 1000)
}

const server = createServer((req, res) => {
    req.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(req, res);
    }).resume();
}).listen(8080)

const wss = new WebSocketServer({ server });

const rooms = {}
const passbook = {}

// 15 minutes of no updates before room destroyed
const TTL = 1000 * 60 * 15
class Room {
    guests: Set<WebSocket.WebSocket> = new Set()
    host: WebSocket.WebSocket

    name: string = RandomName()
    password = uuid()

    state = {}

    timeout

    constructor(host: WebSocket.WebSocket) {
        this.host = host
        rooms[this.name] = this
        passbook[this.password] = this
        this.remove = this.remove.bind(this)
        console.log("ROOM", "CREATED", this.name)
    }

    update(data: string) {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(this.remove, TTL)

        const msg = ECommand.UPDATE + data
        for (let g of this.guests) {
            g.send(msg)
        }

        // apply update to state
        const entries = JSON.parse(data) as IMassUpdate
        for (const [key, value] of Object.entries(entries)) {
            if (!this.state[key]) {
                this.state[key] = value
            } else {
                Object.assign(this.state[key], value)
            }
        }
    }

    remove() {
        console.log("ROOM", "REMOVED", this.name)
        this.guests.clear()
        delete rooms[this.name]
        delete passbook[this.password]
    }
}

wss.on('connection', function connection(ws) {
    console.log("new connection")
    ws.on("close", () => {
        console.log("connection closed")
    })

    ws.on('message', function message(data, isBinary) {
        switch ("" + data.slice(0, 3)) {
            default: {
                console.log("" + data.slice(0, 3))

                break
            }
            case ECommand.HOST: {
                // create a room for them
                const r = new Room(ws)
                console.log("HOST", r.name)
                ws.send(ECommand.HOST + r.password + r.name)
                break
            }
            case ECommand.UPDATE: {
                // update their room with the data
                const pass = "" + data.slice(3, 39)
                const room = passbook[pass]

                if (!room) {
                    ws.send(ECommand.ERROR + "UPDATE 404Room does not exist")
                    return
                }
                room.update("" + data.slice(39))
                break
            }
            case ECommand.INPUT:
                // send input data to the room
                break
            case ECommand.JOIN: {
                // join a room, can only join one room
                const room = "" + data.slice(3)
                if (!rooms[room]) {
                    ws.send(ECommand.ERROR + "JOIN 404Room does not exist")
                    return
                }
                rooms[room].guests.add(ws)
                console.log("JOIN", room)

                ws.send(ECommand.UPDATE + JSON.stringify(rooms[room].state))
            }
        }
    });
});
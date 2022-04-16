
import { Value } from "src/value"

type TCommand = [ICommand, any]


export const host = new Value(false)
export const hostid = new Value("")

export const guest = new Value<string>(window.location.search.slice(1))
export const message = new Value<TCommand[]>([])
export const remote = new Value<{ [key: string]: string }>({})

export enum ICommand {
    GLB,
    VRM,
    O3D
}

export function BecomeHost() {
    // peerjs stuff
}

message.on(($mess) => {
    if (!$mess) return
    for (const [command, data] of $mess) {
        Process(command, data)
    }
})

export function Process(command: ICommand, data: any) {
    switch (command) {
        case ICommand.GLB:
            // data is arraybuffer binary of the GLB
            break
        case ICommand.VRM:
            // data is the arraybuffer of the VRM

            break
        case ICommand.O3D:
            // the JSON dump from the scene
            break
    }
}

// handle the remote state being sent from the host's net
AFRAME.registerComponent("guest", {
    init() {
        // attempt to connect using the guest_id
    }
})

host.on(($h) => {
    if (!$h) return

    // start up peerjs

})


export const NetState = {}
export const NextSync = {}

export enum ESync {
    Position = "pos",
    Quaternion = "qut",
    VRM = "vrm",
    Mesh = "mes",
    Light = "lit"
}

AFRAME.registerComponent("host", {
    schema: {
        dynamic: { type: 'bool', default: false },
        sync: { type: 'string', default: "position;quaternion;geometry;material;" },
    },

    init() {
        this.tick = AFRAME.utils.throttleTick(this.tick, 2000, this)
    },

    sync() {
        // update next sync
    },

    tick() {
        if (!this.dynamic) return


        // calculate diff 
        // send to all clients by id
    }
})
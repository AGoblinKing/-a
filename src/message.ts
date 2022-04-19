export interface IUpdate {
    p?: [number, number, number],
    q?: [number, number, number, number],
    v?: boolean,
    s?: [number, number, number],
    vrm?: string
}

export interface IMassUpdate {
    [key: string]: IUpdate
}

export enum ECommand {
    INPUT = "INP",
    UPDATE = "UPD",
    JOIN = "JON",
    HOST = "HST",
    ERROR = "ERR",
    LOG = "LOG"
}

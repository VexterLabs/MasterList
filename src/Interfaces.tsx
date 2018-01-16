export interface ServerCore {
    ip: string;
    hn: string;
    pc: number;
    pm: number;
    gm: string;
    la: string;
    pa: boolean;
    vn: string;
}

export interface ServerFull {
    core: ServerCore;
    ru: ServerRules;
    pl: Array<string>;
    description: string;
    banner: string;
}

export interface ServerRules {
    [key: string]: string;
}

export interface Statistics {
    servers: number;
    players: number;
    playersPerServer: number;
}

export function decodeServerCore(obj: any): ServerCore {
    let ret: ServerCore = {
        ip: obj.ip,
        hn: obj.hn,
        pc: obj.pc,
        pm: obj.pm,
        gm: obj.gm,
        la: obj.la,
        pa: obj.pa,
        vn: obj.vn
    };

    return ret;
}

export function decodeStatistics(obj: any): Statistics {
    let ret: Statistics = {
        servers: obj.servers,
        players: obj.players,
        playersPerServer: obj.players_per_server
    };
    return ret;
}

export function blankServer(): ServerFull {
    let c: ServerCore = {
        ip: "",
        hn: "",
        pc: 0,
        pm: 0,
        gm: "",
        la: "",
        pa: false,
        vn: ""
    };
    let r: ServerFull = {
        core: c,
        ru: {},
        pl: [],
        description: "",
        banner: ""
    };

    return r;
}

export function ipToSlug(ip: string): string {
    return ip.replace(/\./g, "-");
}

export function slugToIP(slug: string): string {
    return slug.replace(/-/g, ".");
}
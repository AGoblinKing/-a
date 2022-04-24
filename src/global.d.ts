
import type AFRAMES from "aframe"
import type { AnimationBlendMode } from "three"
import type Peer from "@types/peerjs"
import type * as THREE_VRM from "three-vrm"
import type * as Kalidokit from "kalidokit"

declare module '*.svelte' {
	export { SvelteComponentDev as default } from 'svelte/internal'
}

declare module '*.glsl' {
	const value: string
	export default value
}

declare module '*.frag' {
	const value: string
	export default value
}

declare module '*.vert' {
	const value: string
	export default value
}

declare module '*.toml' {
	const value: any
	export default value
}

declare global {
	const AFRAME: AFRAMES;
	const Ammo: Ammo;
	const THREE_VRM: THREE_VRM;
	const Kalidokit: Kalidokit;
}

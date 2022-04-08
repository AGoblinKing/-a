import { Matrix4 } from 'three'

export enum ECommand {
	MOVE
}
export enum EArg {
	PAINT,
	POSITION,
	NUMBER,
	SHAPE,
	TEXTURE,
	SCALAR
}

export const ECommandArgs = {
	[ECommand.MOVE]: {
		x: [EArg.POSITION, 'x position'],
		y: [EArg.POSITION, 'y position'],
		z: [EArg.POSITION, 'z position']
	}
}

export enum ESpot {
	NORTH,
	SOUTH,
	WEST,
	EAST,
	FLOOR,
	CEIL,
	PIECE,
	FLOOR2
}

const MBASIS = new Matrix4()
	.identity()
	.makeRotationX(-Math.PI / 2)
	.setPosition(0, -0.5, 0)

export const MATRIX = {
	[ESpot.NORTH]: MBASIS.clone().makeRotationY(Math.PI / 2),
	[ESpot.SOUTH]: MBASIS.clone().makeRotationY(-Math.PI / 2),
	[ESpot.EAST]: MBASIS.clone().makeRotationX(0),
	[ESpot.WEST]: MBASIS.clone().makeRotationX(0),
	[ESpot.CEIL]: MBASIS.clone().makeRotationX(Math.PI),
	[ESpot.FLOOR]: MBASIS,
	[ESpot.PIECE]: MBASIS.clone().makeScale(0, 0, 0),
	[ESpot.FLOOR2]: MBASIS.setPosition(0, -0.25, 0)
}

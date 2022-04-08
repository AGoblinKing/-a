# violent-sequence

A tactical post future strategy game.

## the Board

A a non-sparse voxel grid for the environment based on Uint16 Typed Array Buffers. 256x256x256 Spots are available. This allows for fairly consistent performance and makes for some easy to dev shaders for rendering them.

{`The number of Spots may change! I think this number might be too high already!`}

## Spots

Links to a Paint for each wall, ceiling, floor, and raised floor quad.

## Paint

Provides color, texture, and animation information

## a Piece

- Exists in a spot
- Has a paint.
- Has an inventory of ItemInstance with equipped status

## ItemInstance

- Has a count.
- Has an Item.

## Item

- Has a paint.
- Has a max count.
- Has a flock pattern.
- AUTO. has hooks related to Items.

## AUTO.

AUTO. is the automatic timeline script and virtual machine for `violent-sequence`.

## Pivots

1. If non-sparse is too expensive then sparse voxel grid is pretty straight forward too. This should be simpler and make physics trivially though.
2. Multiplayer is pretty straight forward because of AUTO.

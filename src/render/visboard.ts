import type { Board } from 'src/buffer/board'
import { MATRIX } from 'src/design'
import {
	InstancedMesh,
	Material,
	MeshToonMaterial,
	NearestFilter,
	PlaneBufferGeometry,
	TextureLoader,
	Uniform,
	RepeatWrapping,
	RGBAFormat,
	InstancedBufferAttribute,
	Texture,
	DataTexture,
	Matrix4
} from 'three'

import BoardVert from 'src/shader/board.vert'
import BoardFrag from 'src/shader/board.frag'

import { Paints } from 'src/buffer/paint'

const tex = new TextureLoader().load('/image/patterns.png')
tex.magFilter = NearestFilter
tex.minFilter = NearestFilter
tex.wrapS = tex.wrapT = RepeatWrapping

const $matrix = new Matrix4()

export const PaintsTexture = new DataTexture(Paints, 256, 256, RGBAFormat)

export class VisBoard {
	board: Board

	mesh: InstancedMesh
	mat: Material

	constructor(board: Board) {
		this.board = board
		this.mat = new MeshToonMaterial()

		this.mat.onBeforeCompile = (shader) => {
			shader.uniforms.texmap = new Uniform(tex)
			shader.uniforms.paints = new Uniform(PaintsTexture)

			shader.vertexShader = shader.vertexShader
				.replace('#include <common>', ['#include <common>', BoardVert].join('\n'))
				.replace(
					'#include <project_vertex>',
					[
						'vec4 mvPosition = vec4(transformed, 1.0);',
						'mvPosition = instanceMatrix * mvPosition;',
						'gl_Position = projectionMatrix * modelViewMatrix * BoardVert(mvPosition);'
					].join('\n')
				)

			shader.fragmentShader = shader.fragmentShader
				.replace('#include <common>', ['#include <common>', BoardFrag].join('\n'))
				.replace(
					'vec4 diffuseColor = vec4( diffuse, opacity );',
					'vec4 diffuseColor = BoardFrag(vec4( diffuse, opacity ));'
				)
		}

		this.mesh = new InstancedMesh(
			new PlaneBufferGeometry(1, 1, 1),
			this.mat,
			this.board.spots.length
		)

		this.mesh.geometry.setAttribute('paint', new InstancedBufferAttribute(board.spots, 1))

		// rip through the matrixs and set them to the grid
		for (let i = 0; i < board.spots.length; i++) {
			const ix = Math.floor(i / board.spots.size)

			this.mesh.setMatrixAt(
				i,
				$matrix
					.identity()
					.setPosition(
						(ix % board.base) - board.base / 2,
						Math.floor(ix / board.base) % board.base,
						Math.floor(ix / board.base / board.base) - board.base / 2
					)
					.multiply(MATRIX[i % board.spots.size])
			)
		}

		this.mesh.instanceMatrix.needsUpdate = true
	}
}

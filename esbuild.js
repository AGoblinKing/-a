import esbuild from 'esbuild'
import esbuildSvelte from 'esbuild-svelte'
import sveltePreprocess from 'svelte-preprocess'
import { glsl } from 'esbuild-plugin-glsl'

esbuild
	.build({
		entryPoints: ['src/index.ts'],
		bundle: true,
		watch: process.env.DEV == 1,
		outdir: './public/build',
		plugins: [
			esbuildSvelte({
				preprocess: sveltePreprocess()
			}),
			glsl({
				minify: false
			})
		]
	})
	.catch(() => process.exit(1))

console.log('[esbuild]', process.env.DEV == 1 ? 'WATCHING' : 'BUILDING')

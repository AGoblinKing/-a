import esbuild from 'esbuild'
import esbuildSvelte from 'esbuild-svelte'
import sveltePreprocess from 'svelte-preprocess'
import { glsl } from 'esbuild-plugin-glsl'
import runAll from "npm-run-all"

esbuild
	.build({
		entryPoints: ['src/index.ts' ],
		bundle: true,
		watch: process.env.DEV == 1,
		outdir: './public/build',
		plugins: [
			esbuildSvelte({
				filterWarnings: () => false,
				preprocess: sveltePreprocess()
			}),
			glsl({
				minify: false
			})
		]
	})
	.catch(() => process.exit(1))


esbuild
	.build({
		entryPoints: ['src/test/runner.ts'],
		bundle: true,
		watch: process.env.DEV == 1 ? { 
			onRebuild(error) {
				if(error) return

				runAll(["test"], { stdout: process.stdout, stderr: process.stderr })
			}
		} : false,
		outdir: './debug',
		plugins: [
			esbuildSvelte({
				filterWarnings: () => false,
				preprocess: sveltePreprocess()
			}),
			glsl({
				minify: false
			})
		]
	})
	.catch(() => process.exit(1))

console.log('[esbuild]', process.env.DEV == 1 ? 'WATCHING' : 'BUILDING')

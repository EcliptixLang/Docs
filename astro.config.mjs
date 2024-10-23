import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: [
				"./src/styles/center.css"
			],
			title: 'Ecliptix',
			social: {
				github: 'https://github.com/webwisetech/ecliptix',
			},
			sidebar: [
				{
					label: 'The Beginning',
					items: [
						{ label: 'Installation', slug: 'beginning/install' },
						{ label: 'Hello World', slug: 'beginning/helloworld' },
						{ label: 'Command line', slug: 'beginning/cmdline' },
					],
				},
				{
					label: 'First Leap',
					items: [
						{ label: 'Packages', slug: 'leap/packages' },
						{ label: 'Natives', slug: 'leap/natives' },
						{ label: 'API', slug: 'leap/api' },
					],
				},
				{
					label: 'Basics',
					items: [
						{ label: 'Input', slug: 'basics/input' },
						{ label: 'Output', slug: 'basics/output' },
						{ label: 'Loops', slug: 'basics/loops' },
					]
				},
				{
					label: 'Modding',
					items: [
						{ label: 'First look', slug: 'modding/index' },
						{ label: 'Library API', slug: 'modding/library' }
					]
				}
			],
		}),
	],
});

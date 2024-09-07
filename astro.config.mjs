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
						{ label: 'Console tricks', slug: 'leap/tricks' },
						{ label: 'When and While', slug: 'leap/when-while' },
					],
				},
			],
		}),
	],
});

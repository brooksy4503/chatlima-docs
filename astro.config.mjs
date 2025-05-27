// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	image: {
		service: {
			entrypoint: 'astro/assets/services/noop',
		}
	},
	integrations: [
		starlight({
			title: 'ChatLima Documentation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/brooksy4503/chatlima' }],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'What is ChatLima?', slug: 'introduction/what-is-chatlima' },
						{ label: 'Key Features', slug: 'introduction/key-features' },
					],
				},
				{
					label: 'Getting Started',
					items: [
						{ label: 'Using the Hosted Version', slug: 'getting-started/hosted-version' },
						{ label: 'Running Locally', slug: 'getting-started/running-locally' },
						{ label: 'Setting up your API Key', slug: 'getting-started/api-key-setup' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Starting and Managing Chats', slug: 'guides/managing-chats' },
						{ label: 'Chatting with AI Models', slug: 'guides/chatting-with-models' },
						{ label: 'Searching Your Chats', slug: 'guides/searching-chats' },
						{ label: 'Web-Enabled Search', slug: 'guides/web-search' },
						{ label: 'Copying Text', slug: 'guides/copying-text' },
						{ label: 'Using LaTeX', slug: 'guides/using-latex' },
						{ label: 'Customizing Themes', slug: 'guides/customizing-themes' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

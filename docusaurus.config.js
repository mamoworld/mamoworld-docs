/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'Automation Blocks',
	tagline: 'Easy Automation of Workflows in Adobe After Effects & Premiere Pro',
	url: process.env.AUTOMATION_BLOCKS_DOCS_URL || 'https://docs.mamoworld.com',
	baseUrl: '/automation-blocks/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'mamoworld', // Usually your GitHub org/user name.
	projectName: 'Automation Blocks for Adobe After Effects and Premiere Pro', // Usually your repo name.
	themeConfig: {
		docs: {
			sidebar: {
				hideable: true,
			},
		},
		navbar: {
			title: 'Automation Blocks for Adobe After Effects and Premiere Pro',
			logo: {
				alt: 'Automation Blocks Logo',
				src: 'img/logo.svg',
			},
			items: [{
				href: 'https://mamoworld.com',
				label: 'mamoworld',
				position: 'right',
			}, ],
		},
		footer: {
			style: 'dark',
			links: [],
			copyright: `Copyright © ${new Date().getFullYear()} mamoworld - documentation built with Docusaurus.`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				gtag: {
					trackingID: 'G-DYFXE1G0TP',
					anonymizeIP: true,
				},
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					//   editUrl:
					//     'https://github.com/facebook/docusaurus/edit/master/website/',
					routeBasePath: '/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
	scripts: [
		//require.resolve('./src/components/freezeframe.min.js'),
		//require.resolve('./src/components/myFreezeFrameInit.js'),
		//"https://unpkg.com/freezeframe/dist/freezeframe.min.js"
		{
			src: '/automation-blocks/scripts/freezeframe.min.js',
			async: false,
		},
		{
			src: '/automation-blocks/scripts//myFreezeFrameInit.js',
			async: false,
		},
		{
			src: '/automation-blocks/scripts/retina.min.js',
			async: true,
		},




	],
	plugins: [require.resolve('docusaurus-lunr-search')],
};
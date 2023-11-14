export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Radar Empresarial",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Modelos",
			href: "/models",
		},
		{
			label: "¿Comó lo hacemos?",
			href: "/process"
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Modelos",
			href: "/models",
		},
		{
			label: "¿Comó lo hacemos?",
			href: "/process"
		}
	],
	links: {
		github: "https://github.com/leoar0810/dashboardPF",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};

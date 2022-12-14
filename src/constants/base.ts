export const NAVBAR_CONFIG = {
	title: "Infition.",
	href: "#",
	items: [
		{
			title: "Projects",
			href: "#1",
		},
		{
			title: "Contact",
			href: "#2",
		},
		{
			title: "About",
			href: "#",
			children: [
				{
					title: "Child 1",
					href: "#1",
				},
				{
					title: "Child 2",
					href: "#2",
				},
				{
					title: "Child 3",
					href: "#1",
				},
			],
		},
	],
};
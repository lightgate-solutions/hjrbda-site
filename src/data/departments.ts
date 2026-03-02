/**
 * Leadership and directorates data from the H-JRBDA Service Charter.
 * Four Directorates, each headed by an Executive Director (E.D.).
 * CEO: Managing Director.
 */

export const managingDirector = {
	name: "Engr. Rabiu Suleiman Yusuf",
	title: "Managing Director / CEO",
	qualification: "FNIQS",
	image: "/images/leadership/md.jpg", // placeholder path; replace with actual photo
} as const;

export type DivisionHead = {
	name: string;
	division: string;
};

export type Directorate = {
	slug: string;
	name: string;
	shortDescription: string;
	ed: {
		name: string;
		title: string;
		image: string;
	};
	divisions: DivisionHead[];
};

export const directorates: Directorate[] = [
	{
		slug: "administration-finance",
		name: "Administration and Finance",
		shortDescription:
			"Oversight of administration, general services, personnel, and finance.",
		ed: {
			name: "Hon. Musa Illiyasu Kwankwaso",
			title: "Executive Director (Admin & Finance)",
			image: "/images/leadership/ed-admin.jpg",
		},
		divisions: [
			{ name: "Mohammed S. Musa", division: "General Services Division" },
			{ name: "Atika Mansur Yola", division: "Personnel Division" },
			{ name: "Abubakar Sani Kabara", division: "Finance Division" },
		],
	},
	{
		slug: "planning-design",
		name: "Planning and Design",
		shortDescription:
			"Budget planning, investigation and design, and hydrology.",
		ed: {
			name: "Tijjani Musa Isa",
			title: "Executive Director (Planning & Design)",
			image: "/images/leadership/ed-planning.jpg",
		},
		divisions: [
			{ name: "Adamu Sa'ad Ajingi", division: "Budget & Planning Division" },
			{
				name: "Engr. Nasir El-mansur",
				division: "Investigation & Design Division",
			},
			{ name: "Yahaya Usman", division: "Hydrology Division" },
		],
	},
	{
		slug: "engineering",
		name: "Engineering",
		shortDescription:
			"Construction, operations and maintenance, irrigation, and hydrogeology.",
		ed: {
			name: "Baffa Dandatti Abdulkadir",
			title: "Executive Director (Engineering)",
			image: "/images/leadership/ed-engineering.jpg",
		},
		divisions: [
			{
				name: "Engr. Umar Ibrahim Langen",
				division: "Construction, Operations & Maintenance Division",
			},
			{
				name: "Engr. Abdussalam Ibrahim",
				division: "Irrigation Division",
			},
			{ name: "Yusuf Ibrahim", division: "Hydrogeology Division" },
		],
	},
	{
		slug: "agricultural-services",
		name: "Agricultural Services",
		shortDescription: "Agricultural services and commercial services.",
		ed: {
			name: "Haj. Zainab Ibrahim Gamawa",
			title: "Executive Director (Agricultural Services)",
			image: "/images/leadership/ed-agricultural.jpg",
		},
		divisions: [
			{
				name: "Ayatullahi Salihu",
				division: "Agricultural Services Division",
			},
			{
				name: "Ibrahim Abbas",
				division: "Commercial Services Division",
			},
		],
	},
];

export function getDirectorateBySlug(slug: string): Directorate | undefined {
	return directorates.find((d) => d.slug === slug);
}

export function getDirectorateSlugs(): string[] {
	return directorates.map((d) => d.slug);
}

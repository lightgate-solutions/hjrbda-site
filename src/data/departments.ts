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
	email: "rssgkn@gmail.com",
	phone: "0813 571 5002",
} as const;

export type DivisionHead = {
	name: string;
	division: string;
	phone?: string;
	email?: string;
};

export type Directorate = {
	slug: string;
	name: string;
	shortDescription: string;
	ed: {
		name: string;
		title: string;
		image: string;
		phone?: string;
		email?: string;
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
			phone: "0816 062 6264",
			email: "musailiyasu64@icloud.com",
		},
		divisions: [
			{
				name: "Mohammed S. Musa",
				division: "General Services Division",
				phone: "0703 610 9450",
				email: "sanimuhammad2000@yahoo.com",
			},
			{
				name: "Atika Mansur Yola",
				division: "Personnel Division",
				phone: "0806 812 9196",
				email: "atika@gmail.com",
			},
			{
				name: "Abubakar Sani Kabara",
				division: "Finance Division",
				phone: "0708 372 5068",
				email: "kabarancy@yahoo.com",
			},
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
			phone: "0803 372 7546",
			email: "tijjanimusaisa@yahoo.com",
		},
		divisions: [
			{
				name: "Adamu Sa'ad Ajingi",
				division: "Budget & Planning Division",
				phone: "0803 418 4818",
				email: "adamuajingi01@gmail.com",
			},
			{
				name: "Engr. Nasir El-mansur",
				division: "Investigation & Design Division",
				phone: "0803 682 7972",
				email: "nelmansur70@gmail.com",
			},
			{
				name: "Yahaya Usman",
				division: "Hydrology Division",
				phone: "0803 151 3468",
				email: "yahyasman33@gmail.com",
			},
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
			phone: "0803 817 6890",
			email: "baffa_d@yahoo.com",
		},
		divisions: [
			{
				name: "Engr. Umar Ibrahim Langen",
				division: "Construction, Operations & Maintenance Division",
				phone: "0803 933 0679",
				email: "uilangen@yahoo.com",
			},
			{
				name: "Engr. Abdussalam Ibrahim",
				division: "Irrigation Division",
				phone: "0802 344 7999",
				email: "aiyakasai@gmail.com",
			},
			{
				name: "Yusuf Ibrahim",
				division: "Hydrogeology Division",
				phone: "0803 610 5853",
				email: "y7304grm@yahoo.com",
			},
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
			phone: "0803 306 5380",
			email: "zgamawa@gmail.com",
		},
		divisions: [
			{
				name: "Ayatullahi Salihu",
				division: "Agricultural Services Division",
				phone: "0803 968 5802",
				email: "ayatullahisalihu@gmail.com",
			},
			{
				name: "Ibrahim Abbas",
				division: "Commercial Services Division",
				phone: "0808 297 1164",
				email: "ibrahimabbassanusi@yahoo.com",
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

export type Locale = 'de' | 'tr' | 'en';

export interface HeroStat {
	label: string;
	value: string;
}

export interface HeroContent {
	title: string;
	subtitle: string;
	badge: string;
	description?: string;
	primaryCta: { label: string; href: string };
	secondaryCta: { label: string; href: string };
	stats: HeroStat[];
	visual: {
		image: string;
		alt: string;
		caption: string;
		highlight: string;
	};
}

export interface HomeListItem {
	title: string;
	description: string;
	icon?: string;
	meta?: string;
	media?: string;
}

export interface HomeSection {
	title: string;
	description: string;
	items?: HomeListItem[];
	cta?: { label: string; href: string };
}

export interface HomeContent {
	hero: HeroContent;
	about: HomeSection;
	services: {
		pretitle: string;
		title: string;
		description: string;
		ctaLabel: string;
		items: (HomeListItem & { href: string })[];
	};
	values: {
		title: string;
		description: string;
		items: HomeListItem[];
	};
	spotlight: {
		title: string;
		description: string;
		items: (HomeListItem & { media: string })[];
	};
	references: {
		title: string;
		description: string;
		logos: { name: string; href?: string }[];
	};
	cta: {
		title: string;
		description: string;
		primary: { label: string; href: string };
		secondary: { label: string; href: string };
	};
}

export type HomeContentByLocale = Record<Locale, HomeContent>;

export interface AboutTimelineItem {
	year: string;
	title: string;
	description: string;
}

export interface AboutContent {
	intro: {
		title: string;
		body: string[];
	};
	mission: {
		title: string;
		body: string[];
		values: { title: string; description: string }[];
	};
	timeline: AboutTimelineItem[];
	team: {
		title: string;
		description: string;
		members: {
			name: string;
			role: string;
			bio: string;
			image?: string;
		}[];
	};
	video?: {
		title: string;
		description: string;
		url: string;
	};
}

export type AboutContentByLocale = Record<Locale, AboutContent>;

export interface ServiceDetail {
	id: string;
	title: string;
	description: string;
	outcomes: string[];
}

export interface ProcessStep {
	step: number;
	title: string;
	description: string;
}

export interface ServicesContent {
	intro: {
		title: string;
		description: string;
	};
	capabilities: ServiceDetail[];
	process: ProcessStep[];
	caseHighlights: {
		client: string;
		industry: string;
		summary: string;
		results: string[];
	}[];
}

export type ServicesContentByLocale = Record<Locale, ServicesContent>;

export interface ReferenceCase {
	id: string;
	client: string;
	industry: string;
	year: string;
	summary: string;
	highlights: string[];
}

export interface ReferencesContent {
	intro: {
		title: string;
		description: string;
	};
	filters: { id: string; label: string }[];
	logos: { name: string; image?: string; industry: string; year: string }[];
	cases: ReferenceCase[];
	testimonials: {
		quote: string;
		name: string;
		role: string;
		client: string;
	}[];
}

export type ReferencesContentByLocale = Record<Locale, ReferencesContent>;

export interface JobOpening {
	id: string;
	title: string;
	location: string;
	type: string;
	description: string;
	responsibilities: string[];
	requirements: string[];
	benefits: string[];
}

export interface CareerContent {
	intro: {
		title: string;
		description: string;
	};
	values: { title: string; description: string }[];
	benefits: { title: string; description: string }[];
	openings: JobOpening[];
	emptyState: {
		title: string;
		description: string;
		cta: { label: string; href: string };
	};
}

export type CareerContentByLocale = Record<Locale, CareerContent>;

export interface ContactLocation {
	id: string;
	name: string;
	address: string;
	phone: string;
	email: string;
	hours: string;
	map: {
		lat: number;
		lng: number;
		zoom: number;
	};
}

export interface ContactContent {
	intro: {
		title: string;
		description: string;
	};
	form: {
		title: string;
		description: string;
		privacyNote: string;
		submitLabel: string;
		fields: {
			name: string;
			email: string;
			phone: string;
			company: string;
			message: string;
		};
	};
	locations: ContactLocation[];
	meta: {
		locationsHeading: string;
		socialHeading: string;
		socialDescription: string;
	};
	socials: { label: string; href: string }[];
}

export type ContactContentByLocale = Record<Locale, ContactContent>;

export interface LegalSection {
	title: string;
	content: string[];
}

export interface LegalContent {
	imprint: {
		title: string;
		sections: LegalSection[];
	};
	privacy: {
		title: string;
		sections: LegalSection[];
	};
	cookies: {
		title: string;
		sections: LegalSection[];
	};
}

export type LegalContentByLocale = Record<Locale, LegalContent>;

export type NavKey = 'home' | 'about' | 'services' | 'references' | 'career' | 'contact';

export interface SiteConfig {
	brand: {
		name: string;
		logo: {
			src: string;
			alt: string;
		};
		tagline: string;
	};
	contact: {
		phone: string;
		email: string;
		address: {
			street: string;
			postalCode: string;
			city: string;
			country: string;
		};
	};
	socials: { label: string; href: string }[];
	footer: {
		quickLinks: { href: string; label?: string; key?: NavKey }[];
		legalLinks: { href: string; label: string }[];
		newsletter?: {
			placeholder: string;
			buttonLabel: string;
		};
	};
}

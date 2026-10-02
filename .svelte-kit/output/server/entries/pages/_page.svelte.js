import { a as ensure_array_like, c as stringify, d as clsx, f as escape_html, i as derived, n as attr_style, r as attributes, t as attr_class, u as attr } from "../../chunks/server.js";
import { t as themeState } from "../../chunks/theme.svelte.js";
//#region src/lib/components/Card.svelte
function Card($$renderer, $$props) {
	let { children, class: className = "", interactive = false, $$slots, $$events, ...restProps } = $$props;
	$$renderer.push(`<div${attributes({
		class: `bg-surface-card border border-border-card rounded-2xl p-6 sm:p-7 transition-all duration-200 ${interactive ? "hover:border-sky-400/60 hover:shadow-sm dark:hover:border-sky-500/40" : ""} ${stringify(className)}`,
		...restProps
	})}>`);
	children?.($$renderer);
	$$renderer.push(`<!----></div>`);
}
//#endregion
//#region src/lib/components/FadeIn.svelte
function FadeIn($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children, class: className = "", delay = 0, direction = "up" } = $$props;
		let directionClass = derived(() => direction === "left" ? "fade-in-left" : direction === "right" ? "fade-in-right" : direction === "none" ? "fade-in-none" : "fade-in-up");
		$$renderer.push(`<div${attr_class(`${directionClass()} ${stringify(className)}`)}${attr_style(`animation-delay: ${stringify(delay)}s; animation-play-state: paused;`)}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
	});
}
//#endregion
//#region src/lib/components/SectionTitle.svelte
function SectionTitle($$renderer, $$props) {
	let { title, subtitle, center = false } = $$props;
	$$renderer.push(`<div${attr_class(`mb-10 ${center ? "text-center" : ""}`)}><h2 class="text-2xl sm:text-3xl font-bold text-text-main tracking-tight">${escape_html(title)}</h2> `);
	if (subtitle) $$renderer.push(`<!--[0--><p${attr_class(`text-text-muted text-sm sm:text-base mt-2 max-w-2xl leading-relaxed ${center ? "mx-auto" : ""}`)}>${escape_html(subtitle)}</p>`);
	else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]--></div>`);
}
//#endregion
//#region src/lib/data/resume.ts
var personal = {
	name: "Trần Đăng Quang",
	title: "Technical Lead",
	tagline: "10+ years building cloud-native backends, distributed systems, and payment platforms.",
	email: "trandangquangit@gmail.com",
	phone: "0979667069",
	linkedin: "https://linkedin.com/in/dang-quang-tran-6a49aa15b",
	location: "Ho Chi Minh City, Vietnam"
};
var about = `Hands-on Technical Lead with 10+ years of experience building cloud-native backend platforms, distributed systems, and payment solutions using Node.js, Golang, .NET, and AWS. Led cross-functional development teams on technical architecture, code reviews, engineering standards, and delivery while remaining hands-on in software development. Experienced in international engineering environments, leveraging AI-assisted engineering workflows to improve software quality and developer productivity.`;
var metrics = [
	{
		label: "Peak Concurrency",
		value: "400K+",
		unit: "CCU Handled",
		note: "High-scale OTT streaming platform at VieON"
	},
	{
		label: "Production Experience",
		value: "10+",
		unit: "Years",
		note: "Cloud-native, distributed backends & team leadership"
	},
	{
		label: "Architecture Built",
		value: "0 → 1",
		unit: "Platform",
		note: "Golang microservices, payment gateways & AWS infrastructure"
	},
	{
		label: "Domain Standards",
		value: "PCI DSS",
		unit: "Compliant",
		note: "Idempotent payment systems, banking integrations & security hardening"
	}
];
var experiences = [
	{
		company: "Global Mind Business",
		subtitle: "Agriculture Technology Startup",
		role: "Engineering Manager / Technical Lead",
		period: "Oct 2025 – May 2026",
		location: "Ho Chi Minh City, Vietnam",
		category: "startup",
		tags: [
			"Golang",
			"Microservices",
			"AWS",
			"0-to-1",
			"AI Workflows"
		],
		bullets: [
			"Designed cloud-native backend architecture, engineering standards, and service communication for a 0-to-1 platform.",
			"Led cross-functional development team (backend, web, and mobile), responsible for technical design, code reviews, mentoring, and implementation of critical backend services.",
			"Collaborated with product stakeholders on estimation, delivery planning, and production reliability.",
			"Actively used AI coding assistants (Claude Code, GitHub Copilot, OpenCode, etc.) in daily development and encouraged team adoption."
		],
		stack: "Golang · Microservices · AWS · Docker · CI/CD · gRPC · REST APIs · PostgreSQL · Redis · Observability"
	},
	{
		company: "GOOPAY JSC",
		subtitle: "FUTA Group",
		role: "Software Engineering Team Lead",
		period: "Jul 2024 – Sep 2025",
		location: "Ho Chi Minh City, Vietnam",
		category: "fintech",
		tags: [
			"FinTech",
			"Payment Gateway",
			"PCI DSS",
			"Idempotency",
			"Node.js/Go"
		],
		bullets: [
			"Led backend delivery for payment gateway and digital wallet platforms, covering architecture, code reviews, releases, and production operations.",
			"Designed banking integrations, callback workflows, idempotency, reconciliation, and transaction processing.",
			"Co-led PCI DSS compliance, API hardening, and engineering quality standards."
		],
		stack: "Node.js · Golang · MongoDB · Redis · Payment Systems · PCI DSS · Monitoring & Observability"
	},
	{
		company: "VieON",
		subtitle: "DatViet VAC",
		role: "Backend Manager",
		roleNote: "Promoted from Backend Supervisor",
		period: "May 2020 – Jun 2024",
		location: "Ho Chi Minh City, Vietnam",
		category: "streaming",
		tags: [
			"OTT Streaming",
			"400k+ CCU",
			"Golang",
			"High Availability",
			"Billing"
		],
		bullets: [
			"Led backend engineering for a streaming platform serving 400,000+ concurrent users.",
			"Designed Golang services for payment, billing, reconciliation, promotion, and subscription systems.",
			"Remained hands-on in architecture, code review, performance optimization, and production troubleshooting.",
			"Collaborated with Product and Sales teams delivering technical solution advice, estimations, and architecture recommendations."
		],
		stack: "Golang · Microservices · MySQL · MongoDB · Redis · Distributed Systems · Observability · High-Availability Systems"
	},
	{
		company: "Earlier Experience",
		subtitle: "2012 – 2020",
		role: "Software Engineer",
		period: "2012 – 2020",
		location: "Ho Chi Minh City, Vietnam",
		category: "enterprise",
		tags: [
			".NET",
			"Java",
			"Enterprise",
			"Outsourcing"
		],
		bullets: [
			"Fujinet Systems JSC: Japanese outsourcing environment with structured SDLC, quality standards, and cross-cultural collaboration.",
			"SystemGear Vietnam: Japanese company in Vietnam, applying Japanese software development practices.",
			"Isobar Commerce: Delivered enterprise software for global e-commerce brands.",
			"Galaxy Play: Developed streaming applications."
		],
		stack: ".NET · Java · Salesforce Commerce Cloud · Embedded Systems"
	}
];
var skills = [
	{
		category: "Programming Languages",
		items: [
			"Node.js",
			"Golang",
			".NET",
			"JavaScript",
			"Python",
			"Java"
		]
	},
	{
		category: "Cloud & DevOps",
		items: [
			"AWS",
			"Docker",
			"Kubernetes",
			"CI/CD",
			"Observability"
		]
	},
	{
		category: "Backend & Architecture",
		items: [
			"Microservices",
			"Distributed Systems",
			"REST APIs",
			"gRPC",
			"Event-Driven Architecture",
			"PostgreSQL",
			"Redis",
			"Kafka"
		]
	},
	{
		category: "Leadership",
		items: [
			"Technical Leadership",
			"Code Review",
			"Team Mentoring",
			"Agile/Scrum",
			"Stakeholder Management"
		]
	},
	{
		category: "Data & AI Engineering",
		items: [
			"LLM Integration",
			"AI Engineering",
			"Applied Machine Learning",
			"Data Platform",
			"Operational Analytics"
		]
	},
	{
		category: "Domain Experience",
		items: [
			"Payment Systems",
			"Digital Wallet",
			"PCI DSS Compliance",
			"OTT Streaming Video",
			"e-Commerce",
			"Agriculture Tech",
			"High-Concurrency Systems"
		]
	}
];
var achievements = [
	{
		title: "0-to-1 Golang Microservices Platform",
		tag: "Architecture 0-to-1",
		description: "Designed and implemented a full microservices backend from scratch: authentication, API gateway, service communication, PostgreSQL, Redis, and observability foundations."
	},
	{
		title: "Led 10+ Member Cross-functional Teams",
		tag: "Team Leadership",
		description: "Led engineering teams of more than 10 members across backend, web, and mobile while remaining involved in architecture, implementation review, mentoring, and production troubleshooting."
	},
	{
		title: "400,000+ Concurrent Users Streaming Platform",
		tag: "Scale & Performance",
		description: "Supported backend engineering for a high-concurrency OTT streaming platform with publicly reported peaks exceeding 400,000 concurrent users."
	},
	{
		title: "PCI DSS & Penetration-Test Remediation",
		tag: "FinTech Security",
		description: "Led payment system security remediation for PCI DSS and penetration-test findings, improving API security, transaction reliability, and operational visibility."
	}
];
var education = [{
	degree: "Bachelor's Degree in Information Technology",
	institution: "Vietnam National University HCMC – An Giang University",
	period: "2008 – 2012"
}, {
	degree: "Master's Program in Information Technology (Incomplete)",
	institution: "Vietnam National University HCMC – University of Information Technology",
	period: "2020"
}];
//#endregion
//#region src/lib/components/About.svelte
function About($$renderer) {
	const pillars = [
		{
			title: "Technical Leadership",
			description: "Led cross-functional teams (backend, mobile, web). Hands-on in system design, rigorous code review standards, and engineer mentorship."
		},
		{
			title: "High-Scale Concurrency",
			description: "Designed streaming and billing backends scaling to 400,000+ concurrent users with distributed caching and robust fault-tolerance."
		},
		{
			title: "AI Engineering Workflows",
			description: "Actively applying modern AI coding agents (Claude Code, Copilot, OpenCode) to accelerate development cycles and improve code quality."
		}
	];
	$$renderer.push(`<section id="about" class="py-20 px-6 scroll-mt-20"><div class="max-w-5xl mx-auto">`);
	FadeIn($$renderer, {
		children: ($$renderer) => {
			SectionTitle($$renderer, {
				title: "About Me",
				subtitle: "Hands-on Technical Lead bridging architectural vision, execution speed, and cross-functional leadership."
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> `);
	FadeIn($$renderer, {
		delay: .08,
		children: ($$renderer) => {
			Card($$renderer, {
				class: "mb-6 p-7 sm:p-9",
				children: ($$renderer) => {
					$$renderer.push(`<p class="text-text-sub text-base sm:text-lg leading-relaxed font-normal">${escape_html(about)}</p>`);
				},
				$$slots: { default: true }
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"><!--[-->`);
	const each_array = ensure_array_like(pillars);
	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		let p = each_array[i];
		FadeIn($$renderer, {
			delay: .12 + i * .05,
			children: ($$renderer) => {
				Card($$renderer, {
					class: "h-full p-6",
					children: ($$renderer) => {
						$$renderer.push(`<h3 class="font-semibold text-text-main text-base mb-2">${escape_html(p.title)}</h3> <p class="text-text-muted text-xs sm:text-sm leading-relaxed">${escape_html(p.description)}</p>`);
					},
					$$slots: { default: true }
				});
			},
			$$slots: { default: true }
		});
	}
	$$renderer.push(`<!--]--></div></div></section>`);
}
//#endregion
//#region src/lib/components/Icon.svelte
function Icon($$renderer, $$props) {
	let { name, class: className = "w-4 h-4" } = $$props;
	if (name === "search") $$renderer.push(`<!--[0--><svg aria-hidden="true"${attr_class(clsx(className))} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`);
	else if (name === "copy") $$renderer.push(`<!--[1--><svg aria-hidden="true"${attr_class(clsx(className))} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>`);
	else if (name === "check") $$renderer.push(`<!--[2--><svg aria-hidden="true"${attr_class(clsx(className))} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`);
	else if (name === "sun") $$renderer.push(`<!--[3--><svg aria-hidden="true"${attr_class(clsx(className))} fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><path stroke-linecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>`);
	else if (name === "moon") $$renderer.push(`<!--[4--><svg aria-hidden="true"${attr_class(clsx(className))} fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`);
	else if (name === "hamburger") $$renderer.push(`<!--[5--><svg aria-hidden="true"${attr_class(clsx(className))} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
	else if (name === "close") $$renderer.push(`<!--[6--><svg aria-hidden="true"${attr_class(clsx(className))} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
	else if (name === "email") $$renderer.push(`<!--[7--><svg aria-hidden="true"${attr_class(clsx(className))} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`);
	else if (name === "phone") $$renderer.push(`<!--[8--><svg aria-hidden="true"${attr_class(clsx(className))} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>`);
	else if (name === "linkedin") $$renderer.push(`<!--[9--><svg aria-hidden="true"${attr_class(clsx(className))} fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`);
	else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]-->`);
}
//#endregion
//#region src/lib/components/CommandPalette.svelte
function CommandPalette($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let open = false;
		let query = "";
		let selectedIndex = 0;
		let copiedText = null;
		let copyTimer;
		async function copy(text, label) {
			try {
				await navigator.clipboard.writeText(text);
				copiedText = `Copied ${label}!`;
				clearTimeout(copyTimer);
				copyTimer = setTimeout(() => {
					copiedText = null;
					open = false;
				}, 1e3);
			} catch {}
		}
		function navigateTo(hash) {
			open = false;
			if (hash === "#") {
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
				return;
			}
			const element = document.querySelector(hash);
			if (element) element.scrollIntoView({ behavior: "smooth" });
		}
		let items = derived(() => [
			{
				id: "nav-top",
				title: "Top / Overview",
				category: "Navigation",
				icon: "⚡",
				action: () => navigateTo("#hero")
			},
			{
				id: "nav-about",
				title: "About Trần Đăng Quang",
				category: "Navigation",
				icon: "👤",
				action: () => navigateTo("#about")
			},
			{
				id: "nav-exp",
				title: "Experience & Systems",
				category: "Navigation",
				icon: "💼",
				action: () => navigateTo("#experience")
			},
			{
				id: "nav-skills",
				title: "Skills & Technologies",
				category: "Navigation",
				icon: "🛠️",
				action: () => navigateTo("#skills")
			},
			{
				id: "nav-achieve",
				title: "Key Milestones & Impact",
				category: "Navigation",
				icon: "🏆",
				action: () => navigateTo("#achievements")
			},
			{
				id: "nav-contact",
				title: "Contact Information",
				category: "Navigation",
				icon: "📬",
				action: () => navigateTo("#contact")
			},
			{
				id: "act-email",
				title: `Copy Email: ${personal.email}`,
				category: "Actions",
				icon: "📧",
				action: () => copy(personal.email, "email")
			},
			{
				id: "act-phone",
				title: `Copy Phone: ${personal.phone}`,
				category: "Actions",
				icon: "📱",
				action: () => copy(personal.phone, "phone number")
			},
			{
				id: "act-theme",
				title: `Toggle Theme (Current: ${themeState.current})`,
				category: "Actions",
				icon: themeState.current === "dark" ? "☀️" : "🌙",
				action: () => themeState.toggle()
			},
			{
				id: "soc-linkedin",
				title: "Visit LinkedIn Profile",
				category: "Social",
				icon: "🔗",
				action: () => {
					open = false;
					window.open(personal.linkedin, "_blank", "noopener,noreferrer");
				}
			}
		]);
		let filteredItems = derived(() => {
			const q = query.trim().toLowerCase();
			if (!q) return items();
			return items().filter((item) => item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q));
		});
		if (open) {
			$$renderer.push(`<!--[0--><div class="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-slate-900/40 backdrop-blur-xs" role="dialog" tabindex="-1" aria-modal="true" aria-label="Command palette"><div class="w-full max-w-xl bg-surface-card border border-border-card rounded-2xl shadow-xl overflow-hidden text-text-main" role="region" aria-label="Command palette content"><div class="flex items-center gap-3 px-4 py-3.5 border-b border-border-card bg-surface-muted/40">`);
			Icon($$renderer, {
				name: "search",
				class: "w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0"
			});
			$$renderer.push(`<!----> <input type="text" role="combobox" aria-expanded="true" aria-controls="command-palette-results"${attr("aria-activedescendant", filteredItems()[selectedIndex] ? `cmd-item-${filteredItems()[selectedIndex].id}` : void 0)} placeholder="Type a command or search..."${attr("value", query)} class="w-full bg-transparent text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 placeholder:text-text-muted"/> <kbd class="hidden sm:inline-block px-2 py-0.5 text-xs text-text-muted bg-surface-muted border border-border-card rounded font-mono">ESC</kbd></div> `);
			if (copiedText) $$renderer.push(`<!--[0--><div class="px-4 py-2 bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 text-xs font-mono border-b border-sky-200 dark:border-sky-800 flex items-center justify-between"><span>✓ ${escape_html(copiedText)}</span></div>`);
			else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> <div id="command-palette-results" role="listbox" class="max-h-80 overflow-y-auto p-2 space-y-1">`);
			if (filteredItems().length === 0) $$renderer.push(`<!--[0--><div class="py-8 text-center text-text-muted text-sm">No matching commands found.</div>`);
			else {
				$$renderer.push(`<!--[-1--><!--[-->`);
				const each_array = ensure_array_like(filteredItems());
				for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
					let item = each_array[idx];
					$$renderer.push(`<button${attr("id", `cmd-item-${stringify(item.id)}`)} role="option"${attr("aria-selected", selectedIndex === idx)} type="button"${attr_class(`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${selectedIndex === idx ? "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-medium" : "text-text-sub hover:bg-surface-muted/60"}`)}><div class="flex items-center gap-3 truncate"><span class="text-base">${escape_html(item.icon)}</span> <span class="truncate">${escape_html(item.title)}</span></div> <span class="text-[10px] uppercase font-mono tracking-wider text-text-muted px-2 py-0.5 rounded bg-surface-muted shrink-0">${escape_html(item.category)}</span></button>`);
				}
				$$renderer.push(`<!--]-->`);
			}
			$$renderer.push(`<!--]--></div> <div class="px-4 py-2.5 border-t border-border-card bg-surface-muted/20 text-xs text-text-muted flex items-center justify-between"><div class="flex items-center gap-3"><span>↑↓ navigate</span> <span>↵ select</span></div> <span class="text-text-muted font-mono text-[11px]">Trần Đăng Quang · Technical Lead</span></div></div></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/components/Contact.svelte
function Contact($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<section id="contact" class="py-20 px-6 bg-surface-muted/50 scroll-mt-20"><div class="max-w-5xl mx-auto">`);
		FadeIn($$renderer, {
			children: ($$renderer) => {
				SectionTitle($$renderer, {
					title: "Get in Touch",
					subtitle: "Open to technical leadership, consulting, architecture advisory, and new opportunities.",
					center: true
				});
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">`);
		FadeIn($$renderer, {
			delay: .05,
			children: ($$renderer) => {
				Card($$renderer, {
					class: "h-full p-6 flex flex-col justify-between",
					children: ($$renderer) => {
						$$renderer.push(`<div><div class="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4">`);
						Icon($$renderer, {
							name: "email",
							class: "w-5 h-5"
						});
						$$renderer.push(`<!----></div> <h3 class="text-xs uppercase font-mono tracking-wider text-text-muted mb-1">Email</h3> <a${attr("href", `mailto:${stringify(personal.email)}`)} class="text-sm font-semibold text-text-main hover:text-sky-600 dark:hover:text-sky-400 transition-colors truncate block">${escape_html(personal.email)}</a></div> <div class="pt-6 mt-6 border-t border-border-card flex items-center gap-2"><a${attr("href", `mailto:${stringify(personal.email)}`)} class="flex-1 py-2 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs text-center transition-colors">Send Email</a> <button type="button" title="Copy email address" aria-label="Copy email address" class="p-2 min-w-[36px] min-h-[36px] rounded-lg bg-surface-muted hover:bg-sky-50 dark:hover:bg-sky-950/40 border border-border-card hover:border-sky-300 dark:hover:border-sky-800 text-xs font-mono text-text-main hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center justify-center">`);
						$$renderer.push("<!--[-1-->");
						Icon($$renderer, {
							name: "copy",
							class: "w-4 h-4"
						});
						$$renderer.push(`<!--]--></button></div> `);
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		FadeIn($$renderer, {
			delay: .1,
			children: ($$renderer) => {
				Card($$renderer, {
					class: "h-full p-6 flex flex-col justify-between",
					children: ($$renderer) => {
						$$renderer.push(`<div><div class="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4">`);
						Icon($$renderer, {
							name: "linkedin",
							class: "w-5 h-5"
						});
						$$renderer.push(`<!----></div> <h3 class="text-xs uppercase font-mono tracking-wider text-text-muted mb-1">LinkedIn</h3> <p class="text-sm font-semibold text-text-main truncate">dang-quang-tran</p></div> <div class="pt-6 mt-6 border-t border-border-card"><a${attr("href", personal.linkedin)} target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs transition-colors"><span>Open LinkedIn</span> <span>↗</span></a></div>`);
					},
					$$slots: { default: true }
				});
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		FadeIn($$renderer, {
			delay: .15,
			children: ($$renderer) => {
				Card($$renderer, {
					class: "h-full p-6 flex flex-col justify-between",
					children: ($$renderer) => {
						$$renderer.push(`<div><div class="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4">`);
						Icon($$renderer, {
							name: "phone",
							class: "w-5 h-5"
						});
						$$renderer.push(`<!----></div> <h3 class="text-xs uppercase font-mono tracking-wider text-text-muted mb-1">Phone / Location</h3> <a${attr("href", `tel:${stringify(personal.phone.replace(/[^+\d]/g, ""))}`)} class="text-sm font-semibold text-text-main hover:text-sky-600 dark:hover:text-sky-400 transition-colors block">${escape_html(personal.phone)}</a> <p class="text-xs text-text-muted mt-1">📍 ${escape_html(personal.location)}</p></div> <div class="pt-6 mt-6 border-t border-border-card flex items-center gap-2"><a${attr("href", `tel:${stringify(personal.phone.replace(/[^+\d]/g, ""))}`)} class="flex-1 py-2 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium text-xs text-center transition-colors">Call Phone</a> <button type="button" title="Copy phone number" aria-label="Copy phone number" class="p-2 min-w-[36px] min-h-[36px] rounded-lg bg-surface-muted hover:bg-sky-50 dark:hover:bg-sky-950/40 border border-border-card hover:border-sky-300 dark:hover:border-sky-800 text-xs font-mono text-text-main hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center justify-center">`);
						$$renderer.push("<!--[-1-->");
						Icon($$renderer, {
							name: "copy",
							class: "w-4 h-4"
						});
						$$renderer.push(`<!--]--></button></div> `);
						$$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></div></div></section>`);
	});
}
//#endregion
//#region src/lib/components/Education.svelte
function Education($$renderer) {
	$$renderer.push(`<section id="education" class="py-20 px-6 scroll-mt-20"><div class="max-w-5xl mx-auto">`);
	FadeIn($$renderer, {
		children: ($$renderer) => {
			SectionTitle($$renderer, {
				title: "Education",
				subtitle: "Academic background in computer science and software engineering."
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> <div class="grid sm:grid-cols-2 gap-6"><!--[-->`);
	const each_array = ensure_array_like(education);
	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		let edu = each_array[i];
		FadeIn($$renderer, {
			delay: i * .08,
			children: ($$renderer) => {
				Card($$renderer, {
					class: "h-full p-6 flex flex-col justify-between",
					children: ($$renderer) => {
						$$renderer.push(`<div><span class="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold mb-2 block">${escape_html(edu.period)}</span> <h3 class="text-text-main font-semibold text-base mb-1">${escape_html(edu.degree)}</h3> <p class="text-text-muted text-sm">${escape_html(edu.institution)}</p></div>`);
					},
					$$slots: { default: true }
				});
			},
			$$slots: { default: true }
		});
	}
	$$renderer.push(`<!--]--></div></div></section>`);
}
//#endregion
//#region src/lib/components/Experience.svelte
function Experience($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const filters = [
			{
				key: "all",
				label: "All Projects"
			},
			{
				key: "startup",
				label: "0-to-1 Platform"
			},
			{
				key: "fintech",
				label: "FinTech & Payments"
			},
			{
				key: "streaming",
				label: "High-Scale Streaming"
			},
			{
				key: "enterprise",
				label: "Enterprise"
			}
		];
		let selectedFilter = "all";
		let filteredExperiences = derived(() => experiences.filter((exp) => {
			return true;
		}));
		$$renderer.push(`<section id="experience" class="py-20 px-6 bg-surface-muted/50 scroll-mt-20"><div class="max-w-5xl mx-auto">`);
		FadeIn($$renderer, {
			children: ($$renderer) => {
				SectionTitle($$renderer, {
					title: "Experience & Systems Built",
					subtitle: "10+ years of leading engineering teams and building production-grade distributed architectures."
				});
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		FadeIn($$renderer, {
			delay: .05,
			children: ($$renderer) => {
				$$renderer.push(`<div class="flex flex-wrap items-center gap-2 mb-8"><!--[-->`);
				const each_array = ensure_array_like(filters);
				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let f = each_array[$$index];
					$$renderer.push(`<button type="button"${attr("aria-pressed", selectedFilter === f.key)}${attr_class(`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedFilter === f.key ? "bg-sky-600 text-white shadow-xs" : "bg-surface-card border border-border-card text-text-sub hover:border-sky-300 dark:hover:border-sky-700"}`)}>${escape_html(f.label)}</button>`);
				}
				$$renderer.push(`<!--]--></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> <div class="flex flex-col gap-6"><!--[-->`);
		const each_array_1 = ensure_array_like(filteredExperiences());
		for (let $$index_3 = 0, $$length = each_array_1.length; $$index_3 < $$length; $$index_3++) {
			let exp = each_array_1[$$index_3];
			$$renderer.push(`<div>`);
			Card($$renderer, {
				class: "p-6 sm:p-8",
				children: ($$renderer) => {
					$$renderer.push(`<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4"><div><div class="flex items-center gap-2 flex-wrap"><h3 class="text-xl font-bold text-text-main">${escape_html(exp.company)}</h3> <span class="text-xs font-medium text-text-muted px-2 py-0.5 rounded bg-surface-muted border border-border-card">${escape_html(exp.subtitle)}</span></div> <p class="text-sky-600 dark:text-sky-400 font-medium text-sm mt-1">${escape_html(exp.role)} `);
					if (exp.roleNote) $$renderer.push(`<!--[0--><span class="text-text-muted font-normal ml-2">(${escape_html(exp.roleNote)})</span>`);
					else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></p></div> <div class="text-xs text-text-muted font-mono sm:text-right shrink-0"><p class="font-semibold text-text-sub">${escape_html(exp.period)}</p> <p>${escape_html(exp.location)}</p></div></div> <ul class="space-y-2 mb-5 text-sm text-text-sub leading-relaxed"><!--[-->`);
					const each_array_2 = ensure_array_like(exp.bullets);
					for (let j = 0, $$length = each_array_2.length; j < $$length; j++) {
						let b = each_array_2[j];
						$$renderer.push(`<li class="flex gap-2.5 items-start"><span class="text-sky-500 mt-1 select-none text-xs">•</span> <span>${escape_html(b)}</span></li>`);
					}
					$$renderer.push(`<!--]--></ul> <div class="pt-4 border-t border-border-card text-xs font-mono text-text-muted"><span class="font-semibold text-text-sub mr-2">Stack:</span> <span>${escape_html(exp.stack)}</span></div> `);
					if (exp.tags && exp.tags.length > 0) {
						$$renderer.push(`<!--[0--><div class="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border-card/60"><!--[-->`);
						const each_array_3 = ensure_array_like(exp.tags);
						for (let $$index_2 = 0, $$length = each_array_3.length; $$index_2 < $$length; $$index_2++) {
							let tag = each_array_3[$$index_2];
							$$renderer.push(`<span class="text-xs text-text-main bg-surface-muted border border-border-card px-2.5 py-1 rounded-md">${escape_html(tag)}</span>`);
						}
						$$renderer.push(`<!--]--></div>`);
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]-->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]--></div></div></section>`);
	});
}
//#endregion
//#region src/lib/components/Hero.svelte
function Hero($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<section id="hero" class="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-[85vh] scroll-mt-20">`);
		FadeIn($$renderer, {
			delay: .05,
			children: ($$renderer) => {
				$$renderer.push(`<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-medium mb-6"><span class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span> <span>Available for Technical Lead &amp; Advisory Roles</span></div> <h1 class="text-4xl sm:text-6xl font-bold tracking-tight text-text-main leading-tight mb-4">${escape_html(personal.name)}</h1> <p class="text-xl sm:text-2xl text-sky-600 dark:text-sky-400 font-medium mb-6">${escape_html(personal.title)} <span class="text-text-muted font-normal text-lg sm:text-xl">· Distributed Systems &amp; Cloud-Native</span></p> <p class="text-text-sub text-base sm:text-lg max-w-2xl leading-relaxed mb-10">${escape_html(personal.tagline)} Hands-on engineering leader specializing in high-concurrency systems, payment
			gateways, and modern engineering standards.</p> <div class="flex flex-wrap items-center gap-3 mb-16"><a href="#contact" class="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-xl transition-colors text-sm shadow-xs">Get in Touch</a> <button type="button"${attr("aria-label", "Copy email address")} class="px-5 py-2.5 border border-border-card bg-surface-card hover:bg-surface-muted text-text-main rounded-xl transition-colors text-sm font-mono flex items-center gap-2">`);
				Icon($$renderer, {
					name: "copy",
					class: "w-4 h-4 text-sky-600 dark:text-sky-400"
				});
				$$renderer.push(`<!----> <span>${escape_html("Copy Email")}</span></button> <a href="#experience" class="px-4 py-2.5 text-text-muted hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-sm">View Experience ↓</a></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		FadeIn($$renderer, {
			delay: .15,
			children: ($$renderer) => {
				$$renderer.push(`<div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border-card"><!--[-->`);
				const each_array = ensure_array_like(metrics);
				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let m = each_array[$$index];
					$$renderer.push(`<div class="flex flex-col"><span class="text-3xl font-bold font-mono text-text-main tracking-tight">${escape_html(m.value)}</span> <span class="text-xs font-semibold text-sky-600 dark:text-sky-400 mt-1 uppercase tracking-wider">${escape_html(m.unit)}</span> <span class="text-xs text-text-muted mt-1 leading-snug">${escape_html(m.label)}</span></div>`);
				}
				$$renderer.push(`<!--]--></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----></section>`);
	});
}
//#endregion
//#region src/lib/components/Metrics.svelte
function Metrics($$renderer) {
	$$renderer.push(`<section id="achievements" class="py-20 px-6 bg-surface-muted/50 scroll-mt-20"><div class="max-w-5xl mx-auto">`);
	FadeIn($$renderer, {
		children: ($$renderer) => {
			SectionTitle($$renderer, {
				title: "Key Milestones & Impact",
				subtitle: "Demonstrated impact across high-scale streaming, payment gateways, and technical leadership."
			});
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----> <div class="grid sm:grid-cols-2 gap-6"><!--[-->`);
	const each_array = ensure_array_like(achievements);
	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		let item = each_array[i];
		FadeIn($$renderer, {
			delay: i * .08,
			children: ($$renderer) => {
				Card($$renderer, {
					class: "h-full p-6 sm:p-7 flex flex-col justify-between",
					children: ($$renderer) => {
						$$renderer.push(`<div><span class="inline-block text-xs font-medium text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 px-2.5 py-0.5 rounded-full mb-3">${escape_html(item.tag || "Milestone")}</span> <h3 class="text-text-main font-bold text-lg mb-2">${escape_html(item.title)}</h3> <p class="text-text-sub text-sm leading-relaxed">${escape_html(item.description)}</p></div>`);
					},
					$$slots: { default: true }
				});
			},
			$$slots: { default: true }
		});
	}
	$$renderer.push(`<!--]--></div></div></section>`);
}
//#endregion
//#region src/lib/components/Navbar.svelte
function Navbar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const navLinks = [
			{
				href: "#about",
				label: "About"
			},
			{
				href: "#experience",
				label: "Experience"
			},
			{
				href: "#skills",
				label: "Skills"
			},
			{
				href: "#achievements",
				label: "Highlights"
			},
			{
				href: "#education",
				label: "Education"
			},
			{
				href: "#contact",
				label: "Contact"
			}
		];
		let menuOpen = false;
		let activeSection = "";
		let shortcutKey = "⌘K";
		$$renderer.push(`<header${attr_class(`fixed top-0 left-0 right-0 z-40 transition-all duration-200 bg-transparent`)}><nav class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Main navigation"><a href="#hero" class="flex items-center gap-2 font-semibold text-text-main hover:text-sky-600 dark:hover:text-sky-400 tracking-tight text-base" aria-label="Back to top"><span class="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 font-mono text-sm font-bold">DQ</span> <span class="font-mono text-xs text-text-muted hidden sm:inline">/ tech-lead</span></a> <div class="hidden md:flex items-center gap-6"><ul class="flex items-center gap-6 text-sm text-text-sub font-medium"><!--[-->`);
		const each_array = ensure_array_like(navLinks);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let l = each_array[$$index];
			const isActive = activeSection === l.href.slice(1);
			$$renderer.push(`<li><a${attr("href", l.href)}${attr_class(`transition-colors ${isActive ? "text-sky-600 dark:text-sky-400 font-semibold" : "hover:text-sky-600 dark:hover:text-sky-400"}`)}>${escape_html(l.label)}</a></li>`);
		}
		$$renderer.push(`<!--]--></ul> <div class="flex items-center gap-2 border-l border-border-card pl-5"><button type="button" class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-muted hover:bg-surface-muted/80 border border-border-card text-text-muted hover:text-text-main transition-colors text-xs font-mono"${attr("aria-label", `Open command palette (${stringify(shortcutKey)})`)}>`);
		Icon($$renderer, {
			name: "search",
			class: "w-3.5 h-3.5 text-sky-600 dark:text-sky-400"
		});
		$$renderer.push(`<!----> <span>Search</span> <kbd class="bg-surface-card px-1.5 py-0.5 rounded text-[10px] border border-border-card">${escape_html(shortcutKey)}</kbd></button> <button${attr("aria-label", `Switch to ${themeState.current === "dark" ? "light" : "dark"} mode`)} class="p-2 rounded-lg bg-surface-muted hover:bg-surface-muted/80 border border-border-card text-text-main transition-colors text-sm">`);
		if (themeState.current === "dark") {
			$$renderer.push("<!--[0-->");
			Icon($$renderer, {
				name: "sun",
				class: "w-4 h-4"
			});
		} else {
			$$renderer.push("<!--[-1-->");
			Icon($$renderer, {
				name: "moon",
				class: "w-4 h-4"
			});
		}
		$$renderer.push(`<!--]--></button></div></div> <div class="flex items-center gap-2 md:hidden"><button type="button" aria-label="Search" class="p-2 rounded-lg bg-surface-muted border border-border-card text-sky-600 dark:text-sky-400 text-sm">`);
		Icon($$renderer, {
			name: "search",
			class: "w-4 h-4"
		});
		$$renderer.push(`<!----></button> <button${attr("aria-label", `Switch to ${themeState.current === "dark" ? "light" : "dark"} mode`)} class="p-2 rounded-lg bg-surface-muted border border-border-card text-text-main transition-colors text-sm">`);
		if (themeState.current === "dark") {
			$$renderer.push("<!--[0-->");
			Icon($$renderer, {
				name: "sun",
				class: "w-4 h-4"
			});
		} else {
			$$renderer.push("<!--[-1-->");
			Icon($$renderer, {
				name: "moon",
				class: "w-4 h-4"
			});
		}
		$$renderer.push(`<!--]--></button> <button${attr("aria-expanded", menuOpen)}${attr("aria-label", "Open menu")} class="p-2 rounded-lg bg-surface-muted border border-border-card text-text-main transition-colors">`);
		$$renderer.push("<!--[-1-->");
		Icon($$renderer, {
			name: "hamburger",
			class: "w-5 h-5"
		});
		$$renderer.push(`<!--]--></button></div></nav> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></header>`);
	});
}
//#endregion
//#region src/lib/components/Skills.svelte
function Skills($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let selectedCategory = "All";
		let searchQuery = "";
		const categories = ["All", ...skills.map((s) => s.category)];
		let filteredGroups = derived(() => skills.map((group) => {
			const query = searchQuery.trim().toLowerCase();
			const items = query ? group.items.filter((item) => item.toLowerCase().includes(query)) : group.items;
			if (items.length === 0) return null;
			return {
				...group,
				items
			};
		}).filter(Boolean));
		$$renderer.push(`<section id="skills" class="py-20 px-6 scroll-mt-20"><div class="max-w-5xl mx-auto">`);
		FadeIn($$renderer, {
			children: ($$renderer) => {
				$$renderer.push(`<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">`);
				SectionTitle($$renderer, {
					title: "Skills & Technologies",
					subtitle: "Core programming languages, distributed architecture, cloud infrastructure, and leadership."
				});
				$$renderer.push(`<!----> <div class="w-full sm:w-60 relative shrink-0"><input type="text"${attr("value", searchQuery)} placeholder="Search skills..." class="w-full px-3.5 py-2 pl-9 rounded-xl bg-surface-card border border-border-card text-xs text-text-main placeholder:text-text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus:border-sky-500 transition-colors"/> <div class="absolute left-3 top-2.5 pointer-events-none text-text-muted">`);
				Icon($$renderer, {
					name: "search",
					class: "w-4 h-4 text-text-muted"
				});
				$$renderer.push(`<!----></div> `);
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--></div></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		FadeIn($$renderer, {
			delay: .05,
			children: ($$renderer) => {
				$$renderer.push(`<div class="flex flex-wrap gap-2 mb-8"><!--[-->`);
				const each_array = ensure_array_like(categories);
				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let cat = each_array[$$index];
					$$renderer.push(`<button type="button"${attr("aria-pressed", selectedCategory === cat)}${attr_class(`px-4 py-2 rounded-full text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${selectedCategory === cat ? "bg-sky-600 text-white shadow-xs" : "bg-surface-card border border-border-card text-text-sub hover:border-sky-300 dark:hover:border-sky-700"}`)}>${escape_html(cat)}</button>`);
				}
				$$renderer.push(`<!--]--></div>`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> `);
		if (filteredGroups().length === 0) $$renderer.push(`<!--[0--><div class="text-center py-10 border border-border-card rounded-2xl bg-surface-card text-text-muted text-sm">No technologies match "${escape_html(searchQuery)}"</div>`);
		else {
			$$renderer.push(`<!--[-1--><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
			const each_array_1 = ensure_array_like(filteredGroups());
			for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
				let group = each_array_1[$$index_2];
				$$renderer.push(`<div>`);
				Card($$renderer, {
					class: "h-full p-6 flex flex-col justify-between",
					children: ($$renderer) => {
						$$renderer.push(`<div><h3 class="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4 pb-2 border-b border-border-card flex items-center justify-between"><span>${escape_html(group.category)}</span> <span class="text-text-muted text-[10px] font-normal">${escape_html(group.items.length)}</span></h3> <div class="flex flex-wrap gap-2"><!--[-->`);
						const each_array_2 = ensure_array_like(group.items);
						for (let $$index_1 = 0, $$length = each_array_2.length; $$index_1 < $$length; $$index_1++) {
							let item = each_array_2[$$index_1];
							$$renderer.push(`<span class="text-xs text-text-main bg-surface-muted border border-border-card px-2.5 py-1 rounded-md">${escape_html(item)}</span>`);
						}
						$$renderer.push(`<!--]--></div></div>`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div>`);
			}
			$$renderer.push(`<!--]--></div>`);
		}
		$$renderer.push(`<!--]--></div></section>`);
	});
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer) {
	Navbar($$renderer, {});
	$$renderer.push(`<!----> `);
	CommandPalette($$renderer, {});
	$$renderer.push(`<!----> <main id="content">`);
	Hero($$renderer, {});
	$$renderer.push(`<!----> `);
	About($$renderer, {});
	$$renderer.push(`<!----> `);
	Experience($$renderer, {});
	$$renderer.push(`<!----> `);
	Skills($$renderer, {});
	$$renderer.push(`<!----> `);
	Metrics($$renderer, {});
	$$renderer.push(`<!----> `);
	Education($$renderer, {});
	$$renderer.push(`<!----> `);
	Contact($$renderer, {});
	$$renderer.push(`<!----></main> <footer class="py-12 border-t border-border-card text-xs text-text-muted"><div class="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4"><div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-sky-500"></span> <span class="font-mono text-text-main font-medium">Trần Đăng Quang</span> <span>— Technical Lead</span></div> <div class="font-mono text-[11px] text-text-muted">Built with SvelteKit 5 &amp; Tailwind CSS</div></div></footer>`);
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte.js.map
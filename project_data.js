export const project_data = [
    {
        title: "Tu Bloom Designs: Luxury Floral & Landscape Studio Website",
        image: "tu-bloom-designs.png",
        description:
            "A client website for Tu Bloom Designs, the Official Botanical Artist of the GRAMMY® Awards, built to showcase luxury garden, floral, and interior plantscape design services. Includes a media-featured hero, service breakdowns, a filterable portfolio, client testimonials, and a booking/estimate request flow, delivered on WordPress with Elementor for fast content updates on the client's end.",
        badges: ["WordPress", "Elementor", "Responsive Design", "Client Site"],
        github: null,
        live: "https://www.tubloom.com",
    },
    {
        title: "Scooproomhq: Premium News Aggregation Platform",
        image: "scoop-room.png",
        description:
            "A fast, SEO-friendly newsroom platform with a 3D hero, breaking news ticker, category showcases, instant search, and a full admin CMS, architected to plug into any news aggregator backend via a single REST/service layer with no rebuild required. Built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Three.js / React Three Fiber, with a Prisma + PostgreSQL data model ready to go live.",
        badges: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Three.js", "Prisma", "PostgreSQL"],
        github: "https://github.com/Imohalfreddev/scoop-room",
        live: "https://scooproomhq.com",
    },
    {
        title: "Scooproomhq Admin: Newsroom CMS",
        image: "scoop-room-admin.png",
        description:
            "The private, authenticated control room behind Scooproomhq, a fully separate codebase and deployment with the only write access to the shared database. Handles article creation/editing, categories, media, homepage/hero ordering, notifications, and SEO, protected end to end by session middleware. Kept off the public site and off any public repo by design.",
        badges: ["Next.js", "Prisma", "PostgreSQL", "JWT Auth", "Admin CMS"],
        github: null,
        live: null,
        isPrivate: true,
    },
    {
        title: "Scooproomhq Bot: Breaking News Intelligence Engine",
        image: "scoop-room-bot.png",
        description:
            "A newsroom-intelligence backend that scans trusted Nigerian, African, and global RSS sources around the clock, clusters duplicate coverage of the same story, scores it for confidence, and alerts a Telegram channel only once it's genuinely worth posting, turning six outlets covering one event into a single, ranked alert instead of six pings.",
        badges: ["Node.js", "TypeScript", "Prisma", "PostgreSQL", "Telegram Bot API"],
        github: null,
        live: null,
        isPrivate: true,
    },
    {
        title: "ClientRadar: Real-Time Lead Detection",
        image: "url-shortener.png",
        description:
            "A Node.js/Express backend that scrapes 6 free job boards every 30 minutes and surfaces software engineer postings through a clean REST API. Sources include Remote OK, Remotive, Himalayas, We Work Remotely, Jobicy, and Hacker News, all free, no API key required. Features full-text search, tag and source filtering, pagination, admin scrape triggers, and a scheduler with cron-based polling.",
        badges: ["React", "Node.js", "Express.js", "PostgreSQL", "Docker"],
        github: null,
        live: null,
        isPrivate: true, 
    },
];
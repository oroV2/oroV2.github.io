/**
 * Projects — described at the level given in the resume source documents.
 * Enterprise/client work is presented at a professional, non-confidential level:
 * no credentials, endpoints, hostnames, schemas or proprietary code are published.
 */
export const projects = [
  {
    id: 'pfms-bank-integration',
    name: 'PFMS Bank Integration Services &mdash; CSB Bank &amp; Equitas Bank',
    context: 'IDBI Intech &mdash; two bank clients',
    featured: true,
    purpose:
      'A suite of Spring Boot batch and integration services that connect the Public Financial Management System (PFMS/CPSMS) to two banks &mdash; payment requests and responses, account validation, balances, statements and reconciliation reports.',
    role: 'Senior Executive &mdash; developer of the integration services',
    responsibilities: [
      'Built 20+ independent Spring Boot services (about 52K lines of Java): payment request and response, account validation, acknowledgement reader, pull/push file transfer, transaction balance and history, quarterly interest, DSC enrollment, FCRA account report and NACH file generation.',
      'CSB Bank: integrated through the bank&rsquo;s APIs &mdash; OAuth2 client-credentials tokens, reactive WebClient calls and encrypted request/response payloads.',
      'Equitas Bank: integrated through database linkage, with Oracle-backed payment tables, batch queries and status tracking (initiated, success, rejected).',
      'Processed payment files with XSD validation and XML digital-signature (DSC) verification; scheduled jobs with cron-driven triggers and a toggle to pause them; SFTP transfers and e-mail alerts on failures and reminders.',
      'Added a React screen to fetch bank balances.'
    ],
    platform: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring WebFlux', 'React'],
    database: ['Oracle', 'MySQL'],
    webserver: [],
    security: [
      'OAuth2 client-credentials',
      'AES / RSA encryption',
      'XML digital-signature (DSC) verification',
      'Encrypted configuration passwords'
    ],
    tech: ['Java', 'Spring Boot', 'WebClient', 'Oracle', 'XML / XSD', 'SFTP (JSch)', 'Cron scheduling', 'Logback'],
    impact: [
      'Delivered for two bank clients on the same PFMS payment flow, using two integration styles (API and database linkage).',
      'Reusable service pattern across both banks: scheduler, mail alerts, DB health check and centralised exception handling.'
    ]
  },
  {
    id: 'expenzing-mobile',
    name: 'Expenzing P2P &amp; TEM Mobile Applications',
    context: 'Nexstep Infotech Pvt Ltd (Expenzing)',
    featured: true,
    purpose:
      'Procure-to-Pay and Travel &amp; Expense Management mobile applications, extended with new functionality and hardened against VAPT findings.',
    role: 'Software Engineer — feature development, security remediation and performance work',
    responsibilities: [
      'Implemented multi-attachment functionality across the mobile applications.',
      'Implemented OCR on invoices and expense vouchers.',
      'Added map functionality using Google services.',
      'Delivered UI/UX upgrades across the applications.'
    ],
    platform: ['Java', 'React / CLI', 'React Native', 'Node.js'],
    database: ['MySQL', 'Oracle'],
    webserver: ['JBoss 7.0.1', 'WildFly 23', 'WildFly 26'],
    security: [
      'SSL pinning',
      'JSession usage',
      'Encrypted body passing',
      'Single response service',
      'Multiple login prevention',
      'Broken authentication prevention',
      'Rooted device blocking'
    ],
    tech: [
      'Java',
      'React Native',
      'Node.js',
      'JBoss',
      'WildFly',
      'MySQL',
      'Oracle',
      'OCR',
      'Google Maps services'
    ],
    impact: [
      '5+ project upgrades and client-specific enhancements delivered with cross-functional teams.',
      '20% reduction in repetitive coding effort through reusable encryption utility modules.',
      '15% reduction in system downtime through performance enhancements and product updates.'
    ]
  }
  ,{
    id: 'koshanvaya-erp',
    name: 'Koshanvaya &mdash; Manufacturing &amp; Job-Work ERP',
    context: 'Independent client project &mdash; designed and built solo',
    featured: true,
    purpose:
      'A ledger-first ERP for Indian job-work manufacturers: sales, procurement, job work, stores, quality, production, GST/TDS compliance and the books in one application, so every lot and every rupee is traceable from order to payment.',
    role: 'Sole engineer &mdash; requirements, architecture, database design, backend, front end, CI and deployment',
    responsibilities: [
      'Built a modular monolith (24 domain modules, verified by Spring Modulith): ~29K lines of Java across 351 classes, ~200 REST endpoints and ~30K lines of React + TypeScript.',
      'Designed the ledger core: every business document posts stock movements and balanced journal lines in one transaction; ledgers are append-only, periods can be locked, document numbers are gap-free and posting is idempotent.',
      'Modelled Indian statutory rules as versioned data: GST (CGST/SGST/IGST, reverse charge, exports under LUT), GSTR-1/3B and GSTR-2B reconciliation, TDS, MSME dues and interest, ITC-04 job-work returns.',
      'Delivered BOM costing and MRP, production orders, approvals, budgets, fixed assets, bank reconciliation, partner portals and an installable stores app.',
      'Shipped it end to end: 25 Flyway migrations, GitHub Actions CI against Oracle Database Free, a customer-provisioning CLI, and deployment behind nginx with Let&rsquo;s Encrypt HTTPS and systemd.'
    ],
    platform: ['Spring Boot 4', 'Spring Modulith', 'React', 'TypeScript'],
    database: ['Oracle Database 23ai (Autonomous)'],
    webserver: ['nginx', 'systemd', 'Oracle Linux'],
    security: [
      'Oracle Virtual Private Database tenant isolation (fails closed)',
      'DB triggers enforcing append-only ledgers and period locks',
      'PBKDF2-HMAC-SHA256 (600K iterations) password hashing',
      'Hashed session tokens',
      'Scoped, rate-limited API keys',
      'Role-based desks and partner portals'
    ],
    tech: ['Java', 'Spring Boot', 'Spring Modulith', 'Oracle 23ai', 'Flyway', 'React', 'TypeScript', 'GitHub Actions', 'nginx'],
    impact: [
      '360+ automated tests (API, ledger golden-scenario and module-boundary tests) run in CI.',
      'Worked export order posts 15 documents end to end, passes all 10 ledger-integrity checks and reports a 22.8% order margin (&#8377;95,250 on &#8377;4.18 lakh of export sales).',
      'Built in about a month: 81 commits, 351 Java classes, 25 migrations.'
    ]
  },
  {
    id: 'arthasetu',
    name: 'Arthasetu &mdash; Government Finance Console',
    context: 'Personal design prototype &mdash; <a href="https://arthasetu-ui.pages.dev/applications" rel="noopener">arthasetu-ui.pages.dev</a>',
    featured: false,
    purpose:
      'A console concept that brings PFMS, the Receipts &amp; Payments Portal (RPP), TNPFTS and IFMS Rajasthan into one application launcher. All figures on screen are illustrative fixture data.',
    role: 'Designer and front-end developer',
    responsibilities: [
      'Built a React single-page app with an application launcher, UAT environment indicator, maker role context and global search.',
      'Designed a dark, dense UI system for finance operators, hosted on Cloudflare Pages.'
    ],
    platform: ['React', 'Cloudflare Pages'],
    database: [],
    webserver: [],
    security: ['Maker / checker role context in the UI'],
    tech: ['React', 'JavaScript', 'Cloudflare Pages'],
    impact: ['Live, shareable prototype of a unified public-finance workspace.']
  },
  {
    id: 'blacktech',
    name: 'Black Tech Secure Solutions &mdash; Company Website',
    context: 'Independent project &mdash; <a href="https://blacktechsecuresolutions.in" rel="noopener">blacktechsecuresolutions.in</a>',
    featured: false,
    purpose:
      'The website for a security-first software engineering practice offering web, mobile, enterprise/API, cloud and AI services.',
    role: 'Designer and developer',
    responsibilities: [
      'Designed and built a responsive dark/light site with interactive service and process sections and a project-request form.',
      'Added SEO metadata and Open Graph tags; launched on a custom domain with business email.'
    ],
    platform: ['Web', 'Custom domain'],
    database: [],
    webserver: [],
    security: ['Security-first positioning and secure-by-default practices'],
    tech: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    impact: ['Live company presence with a clear services and capabilities story.']
  }
];

// Newest flagship projects first.
projects.unshift(...projects.splice(2, 1));

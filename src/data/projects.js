/**
 * Projects — described at the level given in the resume source documents.
 * Enterprise/client work is presented at a professional, non-confidential level:
 * no credentials, endpoints, hostnames, schemas or proprietary code are published.
 */
export const projects = [
  {
    id: 'secure-microservices',
    name: 'Secure Microservices Platform',
    context: 'IDBI Intech — built from scratch',
    featured: true,
    purpose:
      'A secure, scalable microservices architecture with LDAP authentication and end-to-end encrypted communication between every service in the platform.',
    role: 'Senior Executive — designed and built the platform from scratch',
    responsibilities: [
      'Built a React.js frontend with LDAP login and AES encryption for secure client-to-server communication.',
      'Implemented a Gateway Server for centralized authentication and call filtering across the platform.',
      'Secured inter-service communication with multi-level JWT-based and database-driven token authentication.',
      'Applied end-to-end AES encryption with PKCS7 padding for data exchange between the Gateway Server, Eureka Server and the microservices.',
      'Leveraged Eureka for service discovery and load balancing to ensure reliability and performance.'
    ],
    platform: ['React.js', 'Spring Boot', 'Java 17', 'Hibernate'],
    database: ['MySQL', 'Oracle'],
    webserver: ['Tomcat'],
    security: [
      'LDAP authentication',
      'AES encryption (PKCS7 padding)',
      'Multi-level JWT authentication',
      'Database-driven token authentication',
      'Gateway call filtering'
    ],
    tech: [
      'React.js',
      'Crypto (AES)',
      'Spring Boot',
      'Spring Cloud Gateway',
      'Eureka',
      'JWT',
      'Hibernate',
      'SQL'
    ],
    impact: [
      '70% improvement in application performance through microservices architecture.',
      '40% increase in enterprise security compliance through LDAP and multi-level JWT authentication.',
      '7+ microservices architected and deployed with Docker and CI/CD pipelines.'
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
];

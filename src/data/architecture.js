/**
 * Architecture of the secure microservices platform.
 * Every node and every edge below is documented in the resume source description
 * of the project ("Secure Micro-services Architecture with LDAP Authentication and
 * Encrypted Communication"). Nothing common-but-undocumented (message brokers,
 * caches, cloud providers, service meshes) has been added.
 */
export const architecture = {
  title: 'Secure microservices architecture',
  source: 'Documented project architecture — Secure Microservices Platform, IDBI Intech',
  note:
    'This diagram reflects the architecture as described in the resume source document. Only components stated there are shown.',
  layers: [
    {
      name: 'Client',
      items: [
        {
          label: 'React.js frontend',
          detail: 'LDAP login screen, AES-encrypted request/response payloads'
        }
      ]
    },
    {
      name: 'Edge',
      items: [
        {
          label: 'Spring Cloud Gateway Server',
          detail: 'Centralised authentication and call filtering for every inbound request'
        }
      ]
    },
    {
      name: 'Platform',
      items: [
        {
          label: 'Eureka Server',
          detail: 'Service discovery and load balancing'
        },
        {
          label: 'Spring Boot microservices',
          detail: '7+ services, each exchanging AES-encrypted data'
        }
      ]
    },
    {
      name: 'Security',
      items: [
        {
          label: 'LDAP authentication',
          detail: 'Enterprise directory login at the edge'
        },
        {
          label: 'Multi-level JWT &amp; database-driven tokens',
          detail: 'Secures inter-service communication'
        },
        {
          label: 'AES encryption (PKCS7)',
          detail: 'End-to-end encrypted data exchange'
        }
      ]
    },
    {
      name: 'Data',
      items: [
        {
          label: 'MySQL / Oracle',
          detail: 'Accessed through Hibernate; hosts the token store'
        }
      ]
    }
  ],
  runtime: ['Java 17', 'Spring Boot', 'Hibernate', 'Tomcat', 'Docker', 'CI/CD pipelines']
};

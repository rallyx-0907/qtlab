// Backup captured before the one-page CV redesign on 2026-07-21.
export const cvData = {
  name: 'QUYET DOAN',
  title: 'DevSecOps Engineer',
  contact: {
    email: 'quniv21@gmail.com',
    phone: '+84 868 260 254',
    location: 'Vietnam',
    linkedin: 'www.linkedin.com/in/quniv',
    github: 'github.com/quniv',
    website: 'https://qtlab.dev/member/quniv',
  },

  summary: `DevSecOps Engineer with 5+ years of technology experience, including 3 years focused on DevOps and cloud infrastructure. Started as a software developer, bringing a developer-first mindset that bridges application delivery and operations. Primarily work with AWS, with hands-on experience in Azure and GCP. Contributed to 10+ projects by architecting CI/CD, improving reliability, optimizing cost, and integrating AI-driven workflows to accelerate deployment troubleshooting and operational automation. Growing toward DevSecOps with active focus on cloud security and secure delivery practices.`,

  skills: [
    {
      group: 'Strong Experience',
      items: [
        { label: 'AWS', detail: 'VPC, EKS, RDS, S3, CloudFront, EC2, ALB, WAF, IAM, Lambda, Step Function, ECS, Secrets Manager, Route53' },
        { label: 'Programming', detail: 'Python, JavaScript, Bash' },
        { label: 'CI/CD', detail: 'GitHub Actions, Bitbucket Pipeline, Azure DevOps Pipeline' },
        { label: 'IaC/GitOps', detail: 'Terraform, ArgoCD, FluxCD' },
        { label: 'Monitoring', detail: 'Grafana, Prometheus, Loki, Uptime Kuma' },
        { label: 'Security Tools', detail: 'AWS WAF, Cloudflare WAF, SonarQube, Keycloak, Infisical Secrets, CrowdSec, Certbot, IAM' },
        { label: 'Database', detail: 'PostgreSQL, MySQL, MongoDB, Qdrant, ChromaDB' },
        { label: 'Self-hosted', detail: 'Nginx, Apache, WordPress, Docker Compose, Dockge, Portainer, Confluent Kafka' },
        { label: 'Other', detail: 'Kubernetes, Docker, AI-assisted engineering workflows, FastAPI, AWS Copilot CLI' },
        { label: 'AI', detail: 'OpenAI/Codex, Anthropic/Claude, Multica-ai, OpenClaw Agent, Hermes Agent'}
      ]
    },
    {
      group: 'Familiar',
      items: [
        { label: 'Azure', detail: 'App Service, Azure OpenAI, API Management, Flexible PostgreSQL, VM, Monitor, EntraID, Container App, Azure Function, PlayFab' },
        { label: 'GCP', detail: 'Cloud Run, Cloud SQL, VM' },
        { label: 'Other', detail: 'Infisical Secrets, DigitalOcean, GitLab, Moodle, PHP, FluxCD, React Native, Apple Store, Google Play Console, Java Quarkus, Java Spring Boot, Airflow, Nginx, Apache, Laravel, Ansible, PM2, Multi EKS cluster on Production.' },
      ]
    },
  ],

  experience: [
    {
      title: 'AI-Augmented Lab - self-employed',
      company: 'qtlab.dev',
      period: 'May 2026 – Present (2 months)',
      description: 'Self-learning and development with AI-assisted workflows, Deep dive into agents and multi-agents systems capabilities.',
      stacks: ['AI Agents', 'Multica', 'Hermes Agents', 'OpenClaw Agents', 'OpenRouter', 'Codex/Claude Code', 'Kubernetes Self-Hosted', 'agentskills', 'kubernetes-reflector/reloader', 'ArgoCD', 'cloudflare-ddns', 'helm', 'Cilium K8s CNI', 'Vagrant', 'ESO/Infisical Secret Manager', 'Chrome Extension', 'Svelte', 'FastAPI', 'PostgreSQL', 'Redis'],
      bullets: [
        'Researching and applying AI capabilities',
        'Developing homelab projects with AI-native workflows and multi-agent systems',
        'Contributed to Open-Source projects: timothymiller/cloudflare-ddns, multica-ai/multica',
        'Inprogress of Learning CKA/CKS certifications'
      ]
    },
    {
      title: 'DevOps Lead',
      company: 'CMC Global',
      period: 'Apr 2026 – May 2026 (2 months)',
      description: 'Focused on cloud infrastructure, delivery automation, and operational reliability',
      stacks: [ 'On-Premise', 'AWS', 'Kubernetes', 'Netdata', 'PostgreSQL Exporter', 'GHES', 'Docmost' ],
      bullets: [
        'Leading 2 DevOps Junior engineers on an on-premise to AWS EKS migration project',
        'Supporting project bidding with technical documentation and task breakdowns',
        'Designing the target architecture and GitHub/AWS delivery workflow',
        'Designing GitHub Enterprise Server (GHES) setup within project scope',
        'Evaluated and adopted self-hosted documentation tools supporting Markdown (Outline, Docmost, MkDocs, BookStack, AppFlowy); adopted Docmost for organizational use',
        'Designed a multi-layer security architecture for a self-hosted hardened Nginx proxy, including Anti-DDoS, rate limiting, GeoIP whitelisting, and CrowdSec Lua Bouncer',
        'Set up an on-premise monitoring system using Prometheus, Grafana, Node Exporter, Netdata, and Postgres Exporter',
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'SmartDev LLC',
      period: 'Jun 2023 – Mar 2026 (2 years 9 months)',
      description: 'Started as Software Developer, Contributed to 10+ projects as a DevOps engineer later on, experienced with wide range of technologies stacks including software development and Cloud/On-Premise operations.',
      stacks: ['AWS Services (EKS, ECS, Lambda, EC2, ALB, VPC, S3, IAM, RDS)', 'Kubernetes (Karpenter, ArgoCD)', 'Terraform', 'SonarQube', 'Keycloak', 'Infisical Secrets', 'Monitoring (Prometheus, Grafana, Loki, Uptime Kuma)', 'Cloudflare WAF'],
      bullets: [
        'Architected as DevOps engineer for 10+ projects, mostly on AWS, with some work on Azure, GCP, DigitalOcean, and VPS',
        'Cost Optimization for cloud projects',
        'Deployed monitoring tools (metrics, logs, health-check, and alerts) for services using Open-source tools (Prometheus, Grafana, Loki, Uptime Kuma, Dozzle, Portainer, ...)',
        'Migrated webapp (includes Databases) from AWS to Digital Ocean to reduce costs',
        'Migrated webapp (includes Databases) from AWS EC2 to AWS EKS to improve scalability and reliability',
        'Maintained multiple projects for years; ',
        'On-call support for Production on-going issues and improve application performance',
        'Provided short-term DevOps support',
        'Protected compromised cloud infrastructures by applying Security tools',
        'Supported Design Disaster Recovery for EKS cluster using Velero',
        'Supported Pre-sale to pull new projects',
      ]
    },
    {
      title: 'Software Developer',
      company: 'SmartDev LLC',
      period: 'Jun 2021 – Jun 2023 (2 years)',
      description: '',
      stacks: ['Java/Spring Boot', 'Python/FastAPI', 'AWS Services (ECS, Lambda, RDS, IAM, S3)', 'Terraform', 'PostgreSQL', 'MongoDB', 'Scrapy', 'Docusign API'],
      bullets: [
        'Automating data processing workflows using Python and Scrapy, working solo with US clients to develop from sratch to delivery',
        'Bot developing to automate NDA signing with Docusign, integrating AI to generate job descriptions',
        'Crawled job data from sites using Scrapy. Analyzing and processing for better structure data.',
        'Working as Java BackEnd for developing in-house projects',
      ]
    },
  ],

  education: 'Da Nang University of Technology — Information Technology, 2017–2021',

  additional: [
    'Languages: English (working level)',
    'Short-term Objective: Security, AI-agumented, DevSecOps, Software Development stacks, and build things',
    'Long-term Goal: Humanoid Robotics, MLOps, and Future Technologies',
  ],
};

export const cvData = {
  name: 'QUYET DOAN',
  title: 'DevSecOps Engineer',
  contact: {
    email: 'quniv21@gmail.com',
    phone: '+84 868 260 254',
    location: 'Vietnam',
    linkedin: 'https://linkedin.com/in/quniv',
    github: 'https://github.com/quniv',
    website: 'https://qtlab.dev/member/quniv',
  },

  summary: `DevSecOps Engineer with 5+ years of technology experience, including 3+ years focused on DevOps and Clouds. Started as a software developer in first two years, primarily work with AWS, and hands-on experience in Azure and GCP. Contributed to 10+ projects by architecting CI/CD, improving reliability, optimizing cost. Currently integrating AI-driven workflows to accelerate working flows. Growing toward DevSecOps with active focus on Security.`,

  skills: [
    {
      group: 'Strong Experience',
      items: [
        { label: 'AWS', detail: 'VPC, EKS, ECS, RDS, S3, CloudFront, EC2, ALB, WAF, IAM, Lambda, ECS, Secrets Manager, Route 53' },
        { label: 'Programming', detail: 'Python, JavaScript, Bash' },
        { label: 'CI/CD', detail: 'GitHub Actions, Bitbucket Pipelines, Azure DevOps Pipelines' },
        { label: 'IaC/GitOps', detail: 'Terraform, ArgoCD, FluxCD' },
        { label: 'Monitoring', detail: 'Grafana, Prometheus, Loki, Uptime Kuma, Dozzle, Netdata' },
        { label: 'Security & Identity', detail: 'AWS WAF, Cloudflare WAF, SonarQube, Keycloak, Infisical, CrowdSec, Certbot, IAM' },
        { label: 'Data', detail: 'PostgreSQL, MySQL, MongoDB, Qdrant, ChromaDB, Redis' },
        { label: 'Platforms & Applications', detail: 'Kubernetes, Docker, FastAPI, AWS Copilot CLI' },
        { label: 'AI-assisted Engineering', detail: 'OpenAI Codex, Anthropic Claude Code, Multica AI, OpenClaw, Hermes Agent' },
      ],
    },
    {
      group: 'Familiar',
      items: [
        { label: 'Azure', detail: 'App Service, Azure OpenAI, API Management, Flexible PostgreSQL, Virtual Machines, Monitor, Entra ID, Container Apps, Azure Functions, PlayFab' },
        { label: 'GCP', detail: 'Cloud Run, Cloud SQL, Compute Engine' },
        { label: 'Other', detail: 'DigitalOcean, GitLab, Moodle, PHP, React Native, App Store, Google Play Console, Quarkus, Spring Boot, Airflow, Laravel, Ansible, PM2, and production multi-cluster EKS' },
      ],
    },
  ],

  experience: [
    {
      id: 'qtlab',
      title: 'AI-Augmented Engineering Lab',
      company: 'qtlab.dev',
      companyUrl: 'https://qtlab.dev/',
      period: 'May 2026 – Present',
      description: 'Self-learning and development with AI-assisted workflows, Deep dive into agents and multi-agents systems capabilities.',
      stacks: ['AI Agents', 'Multica', 'Hermes Agent', 'OpenClaw', 'OpenRouter', 'Codex', 'Claude Code', 'Kubernetes', 'Argo CD', 'Cilium', 'Terraform', 'Infisical', 'Svelte', 'FastAPI', 'PostgreSQL', 'Redis'],
      bullets: [
        'Research and apply AI capabilities to software delivery, infrastructure operations, and engineering workflows',
        'Build homelab projects with AI-native workflows, multi-agent systems, Kubernetes, and GitOps',
        'Contribute to open-source projects: timothymiller/cloudflare-ddns, multica-ai/multica',
        'Prepare for the Certified Kubernetes Administrator (CKA), Certified Kubernetes Security Specialist (CKS) certifications',
      ],
      resume: {
        section: 'selected-work',
        stack: 'Multica AI · Hermes/OpenClaw Agents · OpenRouter · Codex/Claude Code · Kubernetes Self-Hosted · reflector/reloader · Agent Skills · Argo CD · cloudflare-ddns · Helm · Cilium · Vagrant · ESO/Infisical · Chrome Extension · Svelte · FastAPI · PostgreSQL · Redis',
      },
    },
    {
      id: 'cmc-devops-lead',
      title: 'DevOps Lead',
      company: 'CMC Global',
      period: 'Apr 2026 – May 2026',
      description: 'Focused on On-premise/Cloud infrastructures, and leading skills',
      stacks: ['On-premise', 'AWS', 'Kubernetes', 'Prometheus', 'Grafana', 'Netdata', 'PostgreSQL Exporter', 'GHES', 'Docmost'],
      bullets: [
        'Led two junior/middle DevOps engineers on an on-premise-to-AWS EKS migration project',
        'Supported project bids with technical documentation, architecture input, and task breakdowns',
        'Designed the target architecture and GitHub/AWS delivery workflow',
        'Scoped GitHub Enterprise Server (GHES) within project requirements',
        'Evaluated Markdown-compatible self-hosted documentation platforms and adopted Docmost for organizational use',
        'Built on-premise observability using Prometheus, Grafana, Node Exporter, Netdata, and PostgreSQL Exporter',
      ],
      resume: {
        section: 'experience',
        stack: 'On-Premise · AWS · Kubernetes · Netdata · PostgreSQL Exporter · GHES · Docmost',
      },
    },
    {
      id: 'smartdev-devops',
      title: 'DevOps Engineer',
      company: 'SmartDev LLC',
      period: 'Jun 2023 – Mar 2026',
      description: 'Contributed to 10+ projects across software delivery and cloud or on-premise operations, primarily on AWS, and Kubernetes. Focused on CI/CD, IaC, GitOps, observability, and security. Integrated AI-assisted workflows into operational automation.',
      stacks: ['AWS', 'EKS', 'ECS', 'Lambda', 'EC2', 'Karpenter', 'Argo CD', 'Terraform', 'SonarQube', 'Keycloak', 'Infisical', 'Prometheus', 'Grafana', 'Loki', 'Cloudflare WAF'],
      bullets: [
        'Designed and supported cloud infrastructure for 10+ projects, primarily on AWS with additional work across Azure, GCP, DigitalOcean, and VPS environments',
        'Optimized cloud costs through workload sizing, architecture choices, and autoscaling',
        'Deployed metrics, logs, health checks, and alerts using Prometheus, Grafana, Loki, Uptime Kuma, Dozzle, and Portainer',
        'Migrated web applications and databases from AWS to DigitalOcean to reduce operating costs',
        'Migrated web applications and databases from AWS EC2 to AWS EKS to improve scalability and reliability',
        'Maintained long-running projects for multiple years',
        'Provided on-call support for production incidents and application-performance improvements',
        'Provided focused DevOps support for short-term engagements',
        'Hardened compromised cloud infrastructure using platform and application security controls',
        'Supported disaster-recovery design for EKS clusters using Velero',
      ],
      resume: {
        section: 'experience',
        stack: 'AWS (EKS, ECS, Lambda, EC2, ALB, VPC, S3, IAM, RDS) · Kubernetes (Karpenter, Argo CD) · Terraform · SonarQube · Keycloak · Infisical · Monitoring (Prometheus, Grafana, Loki, Uptime Kuma) · Cloudflare WAF',
      },
    },
    {
      id: 'smartdev-software',
      title: 'Software Developer',
      company: 'SmartDev LLC',
      period: 'Jun 2021 – Jun 2023',
      description: 'Built backend applications, crawling data, and automation solutions.',
      stacks: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'AWS ECS', 'Lambda', 'RDS', 'Terraform', 'PostgreSQL', 'MongoDB', 'Scrapy', 'DocuSign API'],
      bullets: [
        'Delivered Python and Scrapy data-processing workflows end to end while working directly with US clients',
        'Built a DocuSign automation bot and integrated AI-assisted job-description generation',
        'Crawled, analyzed, normalized, and persisted job data from multiple sources',
        'Developed Java backend services for internal applications',
      ],
      resume: {
        section: 'experience',
        stack: 'Java/Spring Boot · Python/FastAPI · AWS (ECS, Lambda, RDS, IAM, S3) · Terraform · PostgreSQL · MongoDB · Scrapy · DocuSign API',
      },
    },
  ],

  education: 'Da Nang University of Technology — Information Technology, 2017–2021',

  additional: [
    'Languages: English (working proficiency)',
    'Short-term objective: deepen DevSecOps, security, AI-augmented engineering, and software-development expertise',
    'Long-term goal: explore humanoid robotics, MLOps, and emerging technologies',
  ],

  resume: {
    skills: [
      { label: 'Cloud & Platform', detail: 'EKS, ECS, RDS, S3, EC2, ALB, WAF, IAM, Lambda, ECS, AWS SM, Azure, GCP' },
      { label: 'Containers & GitOps', detail: 'Kubernetes, Docker, Karpenter, Argo CD, Flux CD' },
      { label: 'Infrastructure & Delivery', detail: 'Terraform, GitHub Actions, Azure DevOps, Bitbucket Pipelines' },
      { label: 'Security & Identity', detail: 'Cloudflare WAF, IAM, SonarQube, Keycloak, Github CodeQL, Trivy' },
      { label: 'Observability & Data', detail: 'Prometheus, Grafana, Loki, Netdata, PostgreSQL, MySQL, MongoDB' },
      { label: 'AI-assisted', detail: 'OpenAI Codex, Anthropic Claude, Multica AI, OpenClaw, Hermes Agent' },
    ],
    language: 'English — Working proficiency',
  },
};

// { label: 'Security & Identity', detail: 'AWS WAF, Cloudflare WAF, SonarQube, Keycloak, Infisical, CrowdSec, Certbot, IAM' },

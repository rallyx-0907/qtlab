export const org = {
  name: 'Technology Innovation Labs',
  tagline: 'Building things that actually work.',
  domain: 'qtlab.dev',
  email: 'hello@qtlab.dev',
  github: 'https://github.com/quniv',
  linkedin: 'https://www.linkedin.com/in/qitpy',
  version: 'v0.3.0',
};

export const missions = [
  {
    id: 'human-tech',
    icon: '🤝',
    title: 'Human + Technology',
    body: 'We join hands to build open-source tools and applications that solve real problems in normal life — not just enterprise pipelines.',
  },
  {
    id: 'lab',
    icon: '🔬',
    title: 'Technology Lab',
    body: 'A laboratory for researchers and doers. We experiment with technology that transforms how people work, learn, and build.',
  },
  {
    id: 'doers',
    icon: '⚙️',
    title: 'Small Team. Real Delivery.',
    body: 'A tight group of engineers who work hard, price fairly, and build things that ship. Reputation earned through work, not slides.',
  },
];

export const team = [
  {
    id: 'quyet-doan',
    name: 'Quyet Doan',
    role: 'DevSecOps Engineer',
    avatar: 'images/avatar_022025.jpeg',
    bio: 'Nearly 5 years in technology, 3 focused on cloud infrastructure and delivery. Started as a software developer — still thinks like one. AWS-primary, with hands-on Azure and GCP. Built CI/CD for 10+ projects, hardened cloud environments, and integrated AI-assisted workflows into operational automation.',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Python', 'Security'],
    profileUrl: '/member/quniv',
    links: {
      github: 'https://github.com/qitpydev',
      linkedin: 'https://www.linkedin.com/in/qitpy',
    },
  },
];

export const projects = [
  {
    id: 'qtlab-dev',
    title: 'qtlab.dev',
    status: 'wip',
    description: 'This site — a Svelte 5 org site deployed on Vercel. A lab for experimenting with frontend design under a dark-universe theme.',
    stack: ['Svelte 5', 'Vite', 'Vercel', 'bun'],
    url: 'https://qtlab.dev',
    repo: 'https://github.com/quniv/qtlab',
  },
  {
    id: 'home-argocd',
    title: 'home-argocd',
    status: 'wip',
    description: 'GitOps source of truth for homelab Kubernetes Infrastructure, managed with Argo CD’s App of Apps pattern, declarative applications, and reproducible infrastructure bootstrap.',
    stack: ['Kubernetes', 'Gateway API','Argo CD', 'Helm', 'Cilium', 'Terraform', 'Infisical', 'Vagrant', 'ESO', 'FastAPI', 'PostgreSQL', 'Redis', 'reflector', 'reloader'],
    url: null,
    repo: 'https://github.com/quniv/home-argocd',
  },
  {
    id: 'multica-agents-vm',
    title: 'multica-agents-vm',
    status: 'wip',
    description: 'Applied AI Native working flows with agents - Multica is the future of engineering.',
    stack: ['Terraform', 'KVM/libvirt', 'cloud-init', 'Ubuntu', 'SSH', 'Agent-skills', 'OpenClaw, Hermes Agent', 'Multica AI', 'Codex'],
    url: 'https://multica.qtlab.dev/',
    repo: 'https://github.com/quniv/multica-agents-vm',
  },
  {
    id: 'vvn-ce',
    title: 'vvn-ce',
    status: 'wip',
    description: 'Vocabulary Chrome Extension — look up, save, and review words while browsing. MV3 extension backed by a FastAPI + PostgreSQL + Redis API.',
    stack: ['OpenRouter APIs', 'deepseek-v4-flash', 'Svelte 5', 'Chrome MV3 Extension', 'FastAPI', 'PostgreSQL', 'Redis', 'vDict API', 'K8s-Helm'],
    url: null,
    repo: 'https://github.com/quniv/vvn-ce',
  },
  {
    id: 'veen-news',
    title: 'Veen News',
    status: 'wip',
    description: 'A zero-cost news aggregator that crawls trusted sources daily, uses AI to filter and summarize stories, and publishes a clean digest without ads or noise.',
    stack: ['OpenRouter APIs', 'deepseek-v4-flash', 'Python', 'GitHub Actions'],
    url: 'https://raw.githubusercontent.com/quniv/veen-news/refs/heads/main/data/latest.json',
    repo: 'https://github.com/quniv/veen-news',
  },
  {
    id: 'buildvn',
    title: 'BuildVN',
    status: 'wip',
    description: 'A trust platform for Vietnam\'s startup ecosystem, connecting founders, builders, mentors, and investors through verified profiles and collaboration history.',
    stack: ['Astro', 'Starlight', 'Mermaid', 'MarkdownX', 'Vercel'],
    url: 'https://docs.buildvn.com',
    repo: 'https://github.com/quniv/buildvn',
  },
];

export const services = [
  {
    id: 'devops',
    icon: '🔧',
    title: 'Cloud & DevOps',
    description: 'CI/CD pipelines, cloud architecture (AWS primary), container orchestration with Kubernetes, monitoring with Grafana + Prometheus. You ship faster, we keep it running.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
    highlight: false,
  },
  {
    id: 'devsecops',
    icon: '🛡️',
    title: 'DevSecOps & Hardening',
    description: 'Security baked into delivery: WAF, secrets management, SAST integration, IAM hardening, TLS automation. Small team, big threat surface — we close it.',
    tags: ['Security', 'WAF', 'IAM', 'SAST'],
    highlight: true,
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'AI-Assisted Engineering',
    description: 'Integrate AI-driven workflows into your delivery pipeline — automated troubleshooting, doc generation, operational automation. Not hype. Actual automation.',
    tags: ['AI', 'LLM', 'Automation', 'Python'],
    highlight: false,
  },
  {
    id: 'platform',
    icon: '🚀',
    title: 'Platform Engineering',
    description: 'Internal developer platforms, GitOps with ArgoCD/FluxCD, EKS cluster design, microservice scaffolding. We make your engineers move faster.',
    tags: ['EKS', 'ArgoCD', 'GitOps', 'Platform'],
    highlight: false,
  },
];

export const pricing = [
  {
    id: 'starter',
    label: 'Starter',
    price: 'Contact',
    description: 'Short-term support, one-off setup, or quick CI/CD wiring for small projects.',
    bullets: [
      'CI/CD pipeline setup',
      'Basic cloud configuration',
      'One-time infrastructure review',
    ],
    highlight: false,
  },
  {
    id: 'retainer',
    label: 'Retainer',
    price: 'Contact',
    description: 'Ongoing DevOps support — monitoring, incident response, and monthly improvements.',
    bullets: [
      'Monthly infrastructure maintenance',
      'Monitoring & alerting',
      'Priority response',
      'Architecture reviews',
    ],
    highlight: true,
  },
  {
    id: 'project',
    label: 'Full Project',
    price: 'Contact',
    description: 'End-to-end delivery for a defined scope — architecture design through production.',
    bullets: [
      'Architecture & planning',
      'Build & deploy',
      'Handoff documentation',
      'Post-launch support window',
    ],
    highlight: false,
  },
];

export const labNotes = [
  {
    id: 'lab-001',
    date: '2025-06-01',
    type: 'lab',
    title: 'Why We Use Infisical Over HashiCorp Vault for Small Teams',
    excerpt: "HashiCorp Vault is powerful but operationally heavy for a 3-person team. Here's why we switched to Infisical and what we learned.",
    tags: ['security', 'devops', 'secrets'],
    status: 'draft',
  },
  {
    id: 'lab-002',
    date: '2025-06-04',
    type: 'blog',
    title: 'Building This Site: Svelte 5 and the State-Based Router Pattern',
    excerpt: 'No router library. Just a reactive activeTab variable and conditional rendering. Here\'s how it holds up for a small org site.',
    tags: ['svelte', 'frontend', 'architecture'],
    status: 'draft',
  },
];

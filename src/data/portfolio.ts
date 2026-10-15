// ============================================================================
// All editable content lives in this file. Update values here — no need to
// touch any component to change text, links, or content.
// ============================================================================

export const profile = {
  name: "Ramireddy Pammi",
  role: "DevOps Engineer",
  tagline: "AWS · DevOps · Cloud · Infrastructure · CI/CD · Monitoring",
  badge: "ASPIRING CLOUD & DEVOPS ENGINEER",
  headline: ["BUILD.", "AUTOMATE.", "MONITOR."],
  intro:
    "I am a Developer",
  subIntro:
    "Driven by a passion for **AWS, cloud infrastructure, and automation**, with a focus on building reliable and efficient systems. Continuously exploring modern DevOps practices through hands-on projects, infrastructure as code, and purposeful learning.",
  marquee: [
    "AWS",
    "DEVOPS",
    "DOCKER",
    "TERRAFORM",
    "CI/CD",
    "KUBERNETES",
    "MONITORING",
    "CLOUD",
    "AUTOMATION",
    "GRAFANA",
  ],
};

export const about = {
  eyebrow: "01 / ABOUT",
  heading: "A journey of building and automating.",
  kicker:
    "I'm currently working as a **DevOps Engineer**. Building reliable systems. Automating smarter. Monitoring continuously.",
  paragraphs: [
    "I am a DevOps Engineer focused on AWS cloud infrastructure, automation, CI/CD, containerization, Infrastructure as Code, and monitoring. I enjoy building reliable infrastructure, automating repetitive processes, and improving deployment workflows.",
    "My hands-on work spans EC2, ECS, Lambda, Terraform, Docker, GitHub Actions, and observability stacks like Prometheus, Grafana, and Loki. Rather than stopping at theory, I focus on building practical infrastructure that solves real operational problems.",
    "I'm continuously exploring better ways to automate workflows, streamline deployments, improve reliability, and solve infrastructure challenges — moving closer to becoming a well-rounded, industry-ready Cloud & DevOps Engineer.",
  ],
  closingQuote: "Provision. Automate. Deploy. Monitor. Improve.",
  closingSub: "That's the mindset behind my DevOps journey.",
  stats: [
    { label: "Field", value: "Cloud & DevOps" },
    { label: "Focus", value: "AWS Infrastructure" },
    { label: "Mindset", value: "Always Learning" },
  ],
};

export const skillGroups = [
  {
    name: "AWS / Cloud",
    category: "CLOUD",
    items: [
      "EC2", "S3", "ECR", "ECS", "Lambda", "IAM", "VPC", "CloudWatch", "SNS",
      "Route 53", "WAF", "RDS", "SMS", "Service Discovery", "EBS", "EFS",
    ],
  },
  {
    name: "Infrastructure as Code",
    category: "IaC",
    items: ["Terraform", "Packer"],
  },
  {
    name: "CI/CD",
    category: "AUTOMATION",
    items: ["GitHub Actions", "Jenkins", "YAML", "CI/CD Automation"],
  },
  {
    name: "Containers",
    category: "CONTAINERS",
    items: ["Docker", "Docker Hub", "Amazon ECR", "Amazon ECS", "Amazon EKS"],
  },
  {
    name: "Monitoring",
    category: "OBSERVABILITY",
    items: ["Prometheus", "Grafana", "Loki", "CloudWatch"],
  },
  {
    name: "Programming",
    category: "LANGUAGES",
    items: ["Python", "Bash", "Flask"],
  },
  {
    name: "Databases",
    category: "DATA",
    items: ["MongoDB", "PostgreSQL", "BigQuery"],
  },
  {
    name: "Other",
    category: "MISC",
    items: ["GCP", "Firebase Crashlytics", "Swagger", "Postman"],
  },
];

export const allTechnologies = [
  "AWS", "EC2", "S3", "ECS", "ECR", "Lambda", "IAM", "VPC", "CloudWatch", "SNS",
  "Route 53", "WAF", "RDS", "SMS", "Service Discovery", "EBS", "EFS", "Terraform",
  "Packer", "GitHub Actions", "Jenkins", "YAML", "Docker", "Docker Hub", "Amazon EKS",
  "Prometheus", "Grafana", "Loki", "Python", "Bash", "Flask", "MongoDB", "PostgreSQL",
  "BigQuery", "GCP", "Firebase Crashlytics", "Swagger", "Postman",
];

export const experience = {
  eyebrow: "03 / EXPERIENCE",
  heading: "Where I've put DevOps into practice.",
  role: "DevOps Engineer",
  period: "CURRENT",
  focusIntro: "Focus areas across recent work:",
  focusAreas: [
    "AWS infrastructure",
    "CI/CD pipelines",
    "Docker & containerization",
    "Terraform (IaC)",
    "Monitoring & observability",
    "Grafana & Prometheus",
    "CloudWatch",
    "GitHub Actions",
    "Jenkins",
    "AWS ECS",
    "Infrastructure automation",
  ],
};

export const certifications = {
  eyebrow: "04 / CERTIFICATIONS",
  heading: "Learning validated by practice.",
  items: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "AWS Skill Builder (in progress)",
      link: "#",
    },
    {
      title: "AWS Cloud Learning & Badges",
      issuer: "AWS Skill Builder",
      link: "#",
    },
  ],
};

export const projects = {
  eyebrow: "05 / SELECTED WORK",
  heading: "Infrastructure and pipelines I've built.",
  items: [
    {
      index: "01",
      title: "AWS ALB & Target Group Monitoring",
      description:
        "Built monitoring dashboards for AWS Application Load Balancers and Target Groups using CloudWatch and Grafana. Tracked request count, healthy/unhealthy hosts, response time, HTTP 4xx/5xx errors, and error percentages.",
      tech: ["AWS", "CloudWatch", "Grafana", "Prometheus", "Loki", "Microsoft Teams"],
      link: "#",
    },
    {
      index: "02",
      title: "Prometheus & Grafana Monitoring Infrastructure",
      description:
        "Provisioned monitoring infrastructure using Terraform and Docker. Deployed Prometheus and Grafana and configured metric collection and dashboards.",
      tech: ["Terraform", "GCP", "Docker", "Prometheus", "Grafana"],
      link: "#",
    },
    {
      index: "03",
      title: "Crashlytics Monitoring Pipeline",
      description:
        "Built a monitoring pipeline for Firebase Crashlytics data using BigQuery and Grafana, with reporting and alerting capabilities. Architecture: Firebase Crashlytics → BigQuery → Grafana → Teams.",
      tech: ["Firebase", "BigQuery", "Grafana", "SQL", "Microsoft Teams"],
      link: "#",
    },
    {
      index: "04",
      title: "AWS ECS Service Discovery",
      description:
        "Worked with AWS ECS and Cloud Map service discovery to enable service-to-service communication and dynamic service resolution.",
      tech: ["AWS ECS", "AWS Cloud Map", "Route 53", "Service Discovery"],
      link: "#",
    },
    {
      index: "05",
      title: "CI/CD Automation",
      description:
        "Created CI/CD workflows using GitHub Actions for automated application build, Docker image creation, and deployment workflows.",
      tech: ["GitHub Actions", "Docker", "AWS ECR", "AWS ECS", "YAML"],
      link: "#",
    },
  ],
};

export const education = {
  eyebrow: "06 / EDUCATION",
  heading: "Where the journey started.",
  items: [
    {
      period: "[ADD YEAR]",
      degree: "[ADD DEGREE]",
      field: "",
      institution: "[ADD INSTITUTION]",
      description: "",
    },
  ],
};

export const contact = {
  eyebrow: "07 / CONTACT",
  heading: "KEEP BUILDING.",
  subheading: "Let's connect.",
  body:
    "Exploring **AWS, DevOps & Cloud Automation** through hands-on infrastructure work and continuous learning. Open to opportunities and conversations about cloud & DevOps engineering.",
  closingLine: "Build boldly. Automate relentlessly. Monitor continuously.",
  github: "[ADD GITHUB URL]",
  linkedin: "[ADD LINKEDIN URL]",
  email: "[ADD EMAIL]",
  resume: "/resume/Ramireddy_Pammi_Resume.pdf",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const terminal = {
  title: "pipeline — main",
  lines: [
    { kind: "cmd", text: "terraform apply -auto-approve" },
    { kind: "ok", text: "VPC, ECS cluster, ALB provisioned" },
    { kind: "cmd", text: "docker build && docker push ecr" },
    { kind: "ok", text: "image pushed to Amazon ECR" },
    { kind: "cmd", text: "gh workflow run deploy.yml" },
    { kind: "ok", text: "ECS service updated · 0 downtime" },
    { kind: "ok", text: "Grafana dashboards healthy · alerts armed" },
  ],
};

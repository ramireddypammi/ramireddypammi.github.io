// ============================================================================
// All editable content lives in this file. Source: Resume_Ramireddy_.pdf
// ============================================================================

export const profile = {
  name: "Ramireddy Pammi",
  role: "Cloud & DevOps Engineer",
  photo: "/img/profile.jpg",
  headline: ["I build,", "automate &", "monitor the cloud."],
  status: "Open to DevOps & Cloud roles",
  location: "Hyderabad, Telangana, India",
  subIntro:
    "Enthusiastic and detail-oriented DevOps Engineer with hands-on experience in **AWS Cloud, Docker, Terraform, CI/CD pipelines, and Linux administration**. Skilled in automating infrastructure provisioning, deploying containerized applications, and managing cloud environments using Infrastructure as Code.",
  stats: [
    { value: "1.5+ yrs", label: "Hands-on experience" },
    { value: "4", label: "DevOps projects" },
    { value: "6", label: "Certifications" },
  ],
  marquee: [
    "AWS", "DOCKER", "TERRAFORM", "KUBERNETES", "JENKINS", "GITHUB ACTIONS",
    "ARGO CD", "HELM", "ANSIBLE", "PROMETHEUS", "GRAFANA", "ELK STACK",
  ],
};

export const about = {
  eyebrow: "01 / ABOUT",
  heading: "Scalable, reliable systems — automated end to end.",
  kicker:
    "I'm a **Cloud & DevOps Engineer** at Nextenti Tech, with strong problem-solving and monitoring & logging experience and a passion for building scalable, reliable systems.",
  paragraphs: [
    "Enthusiastic and detail-oriented DevOps Engineer with hands-on experience in AWS Cloud, Docker, Terraform, CI/CD pipelines, and Linux administration. Skilled in automating infrastructure provisioning, deploying containerized applications, and managing cloud environments using Infrastructure as Code (IaC).",
    "Proficient in Python, Git/GitHub, Shell scripting, Kubernetes, Helm, Jenkins, Argo CD, Prometheus, Grafana, ELK stack, Ansible, and AWS services including EC2, S3, ECS, ECR, Lambda, IAM, Load Balancer, and CloudWatch.",
  ],
  closingQuote: "Provision. Automate. Deploy. Monitor. Improve.",
  closingSub: "That's the mindset behind my DevOps journey.",
  stats: [
    { label: "Role", value: "Cloud & DevOps Engineer" },
    { label: "Based in", value: "Hyderabad, India" },
    { label: "Education", value: "B.Tech IT · CGPA 7.1" },
  ],
};

export const skills = {
  eyebrow: "02 / SKILLS",
  heading: "Tools I use to build and ship reliably.",
  groups: [
    {
      name: "AWS Cloud",
      category: "CLOUD",
      items: ["EC2", "S3", "ECS", "ECR", "Lambda", "IAM", "VPC", "Load Balancer", "CloudWatch"],
    },
    {
      name: "Infrastructure as Code",
      category: "IaC",
      items: ["Terraform", "Ansible"],
    },
    {
      name: "CI/CD & GitOps",
      category: "AUTOMATION",
      items: ["GitHub Actions", "Jenkins (Basics)", "Argo CD (Basics, GitOps)", "Git / GitHub"],
    },
    {
      name: "Containers & Orchestration",
      category: "CONTAINERS",
      items: ["Docker", "Kubernetes Basics", "Helm"],
    },
    {
      name: "Monitoring & Logging",
      category: "OBSERVABILITY",
      items: ["Prometheus", "Grafana", "ELK Stack (Elasticsearch)", "Fluent Bit", "CloudWatch"],
    },
    {
      name: "Scripting & Data",
      category: "LANGUAGES",
      items: ["Python Scripting", "Shell Scripting", "SQL", "Flask"],
    },
    {
      name: "Security & Quality",
      category: "DEVSECOPS",
      items: ["SonarQube", "Trivy"],
    },
    {
      name: "Systems & Networking",
      category: "FOUNDATIONS",
      items: ["Linux Administration", "HTTP / HTTPS", "DNS", "TCP/IP", "SSL/TLS"],
    },
  ],
};

export const experience = {
  eyebrow: "03 / EXPERIENCE",
  heading: "Where I've put DevOps into practice.",
  items: [
    {
      role: "Cloud & DevOps Engineer",
      company: "Nextenti Tech Private Limited",
      period: "Sep 2025 – Present",
      location: "Hyderabad, Telangana, India",
      bullets: [
        "Work with AWS Lambda, S3, VPC, IAM, and Load Balancer to support secure, scalable cloud infrastructure.",
        "Apply AWS Solutions Architecture knowledge to streamline cloud operations and infrastructure design.",
        "Collaborate cross-functionally to deliver reliable, production-ready deployments.",
      ],
    },
    {
      role: "Cloud & DevOps Intern",
      company: "Nextenti Tech Private Limited",
      period: "Mar 2025 – Aug 2025",
      location: "Hyderabad, Telangana, India",
      bullets: [
        "Automated application deployment pipelines using Docker, Terraform, and GitHub Actions CI/CD workflows.",
        "Deployed and managed containerized applications on AWS EC2 and ECS; implemented IaC practices on Linux-based servers.",
        "Managed source code using Git/GitHub and collaborated with team members on deployment activities.",
        "Monitored cloud infrastructure using CloudWatch, Prometheus, and Grafana, and improved deployment reliability.",
        "Developed Python automation scripts and gained hands-on experience with AWS EC2, S3, ECR, Lambda, and CloudWatch.",
      ],
    },
  ],
};

export const certifications = {
  eyebrow: "04 / CERTIFICATIONS",
  heading: "Licenses & certifications.",
  items: [
    { title: "Ansible (Level 1)", issuer: "KodeKloud" },
    { title: "Terraform (Level 1)", issuer: "KodeKloud" },
    { title: "Kubernetes (Level 1)", issuer: "KodeKloud" },
    { title: "Docker (Level 1)", issuer: "KodeKloud" },
    { title: "Jenkins (Level 1)", issuer: "KodeKloud" },
    { title: "Git (Level 1)", issuer: "KodeKloud" },
  ],
};

export const projects = {
  eyebrow: "05 / SELECTED WORK",
  heading: "Infrastructure and pipelines I've built.",
  items: [
    {
      index: "01",
      title: "Netflix Clone – CI/CD & Container Deployment",
      bullets: [
        "Deployed a Netflix-clone web application using Docker containers, with automated builds via a Jenkins CI/CD pipeline.",
        "Integrated SonarQube and Trivy into the pipeline for code quality checks and container vulnerability scanning.",
        "Managed source code and pipeline triggers through Git/GitHub for continuous integration on every commit.",
      ],
      tech: ["Docker", "Jenkins", "SonarQube", "Trivy", "Git/GitHub"],
    },
    {
      index: "02",
      title: "AWS Infrastructure Automation",
      bullets: [
        "Provisioned and managed AWS infrastructure, including VPC, EC2, S3, and IAM, using Terraform for Infrastructure as Code.",
        "Automated environment setup and teardown, reducing manual provisioning effort and configuration drift.",
        "Structured Terraform modules for reusability, enabling consistent, repeatable deployments across environments.",
      ],
      tech: ["Terraform", "AWS VPC", "EC2", "S3", "IAM"],
    },
    {
      index: "03",
      title: "Banking Microservices Platform",
      bullets: [
        "Containerized a microservices-based banking application using Docker and deployed it to a Kubernetes cluster.",
        "Configured Kubernetes Deployments, Services, and ConfigMaps to manage service networking and configuration.",
        "Set up monitoring and centralized logging for service health using Prometheus and Grafana.",
      ],
      tech: ["Docker", "Kubernetes", "Prometheus", "Grafana"],
    },
    {
      index: "04",
      title: "Centralized Log Monitoring & Alerting Platform",
      bullets: [
        "Built a Docker-based centralized log monitoring and alerting platform using Flask, Fluent Bit, and Elasticsearch.",
        "Visualized logs and metrics through Grafana dashboards for real-time infrastructure observability.",
        "Configured automated Slack webhook alerts to notify the team of anomalies and system issues.",
      ],
      tech: ["Docker", "Flask", "Fluent Bit", "Elasticsearch", "Grafana", "Slack"],
    },
  ],
};

export const education = {
  eyebrow: "06 / EDUCATION",
  heading: "Where the journey started.",
  items: [
    {
      period: "Passed out 2023",
      degree: "B.Tech",
      field: "Information Technology",
      institution: "Pace Institute Of Technology And Sciences",
      description: "CGPA: 7.1",
    },
  ],
};

export const contact = {
  eyebrow: "07 / CONTACT",
  heading: "KEEP BUILDING.",
  subheading: "Let's connect.",
  body:
    "Passionate about **AWS, DevOps & Cloud Automation** and building scalable, reliable systems. Open to opportunities and conversations about cloud & DevOps engineering.",
  closingLine: "Build boldly. Automate relentlessly. Monitor continuously.",
  linkedin: "https://linkedin.com/in/ramireddy-pammi127/",
  email: "pammiramireddy2002@gmail.com",
  phone: "06281217515",
  resume: "/resume/Ramireddy_Pammi_Resume.pdf",
};

export const terminal = {
  title: "pipeline — main",
  lines: [
    { kind: "cmd", text: "terraform apply -auto-approve" },
    { kind: "ok", text: "VPC, EC2, S3, IAM provisioned" },
    { kind: "cmd", text: "docker build && docker push ecr" },
    { kind: "ok", text: "image pushed to Amazon ECR" },
    { kind: "cmd", text: "gh workflow run deploy.yml" },
    { kind: "ok", text: "ECS service updated · 0 downtime" },
    { kind: "ok", text: "Grafana dashboards healthy · alerts armed" },
  ],
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

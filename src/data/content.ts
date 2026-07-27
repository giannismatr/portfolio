export const profile = {
  name: 'Ioannis Matrozos',
  title: 'IT Support Engineer',
  tagline:
    'Seeking an Azure Administrator role focused on secure, reliable, and well-governed cloud environments.',
  bio: 'Azure-focused IT professional with 3 years of enterprise consulting experience across banking, pharmaceutical, and engineering environments. Hands-on experience managing Microsoft 365 and Microsoft Entra ID, including RBAC, MFA, and Conditional Access policies. Microsoft certified (AZ-104, MS-900, AZ-900) and currently preparing for CompTIA Security+ to deepen my knowledge in security.',
  location: 'Brussels, Belgium',
  email: 'matrozosgiannis1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/giannis-matrozos-45a109264/',
};

export const skills: string[] = [
  'Microsoft Azure',
  'Microsoft Entra ID',
  'RBAC',
  'MFA',
  'Conditional Access',
  'Virtual Networks & VNet Peering',
  'NSGs & NVAs',
  'Microsoft 365',
  'PowerShell',
  'ServiceNow',
  'ITIL Framework',
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'Full-Time IT Support Engineer',
    company: 'Deutsche Bank Belgium',
    period: '01/10/2024 — Present',
    bullets: [
      'Provided dedicated IT support within a regulated financial services environment.',
      'Supported enterprise users with identity, access control, and cloud-based services.',
      'Administered Microsoft 365 and Azure environments, including identity and access management using Microsoft Entra ID.',
      'Managed RBAC assignments, MFA deployment, and Conditional Access policies.',
      'Ensured compliance with security policies and corporate governance standards.',
      'Troubleshot Azure virtual machines, networking issues, and authentication incidents.',
    ],
  },
  {
    role: 'IT Support Engineer — Enterprise Clients',
    company: 'Clients: Biogen, Viatris, Group IPS, Rémy Cointreau',
    period: '2022 — 2024',
    bullets: [
      'Delivered on-site IT support across pharmaceutical, engineering, and manufacturing environments.',
      'Supported Microsoft 365 tenants and user identity lifecycle management.',
      'Assisted with Azure administration tasks including access control and resource troubleshooting.',
      'Operated within ITIL-based incident and change management frameworks.',
      'Collaborated with infrastructure and security teams to maintain operational continuity.',
    ],
  },
];

export type Certification = {
  name: string;
  code: string;
};

export const certifications: Certification[] = [
  { name: 'Microsoft Certified: Azure Administrator Associate', code: 'AZ-104' },
  { name: 'Microsoft Certified: Azure Fundamentals', code: 'AZ-900' },
  { name: 'Microsoft 365 Certified: Fundamentals', code: 'MS-900' },
];

export type ChecklistItem = {
  label: string;
  done: boolean;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  checklist?: ChecklistItem[];
};

export const projects: Project[] = [
  {
    title: 'Microsoft Entra ID Identity & Access Governance Lab',
    description:
      'A hands-on lab simulating enterprise identity governance in Microsoft Entra ID — group management, privileged access, and Conditional Access enforcement.',
    tags: ['Microsoft Entra ID', 'PIM', 'Conditional Access', 'RBAC', 'Access Reviews'],
    checklist: [
      { label: 'Dynamic groups', done: true },
      { label: 'Static business groups', done: true },
      { label: 'Role-assignable groups', done: true },
      { label: 'Privileged Identity Management (PIM)', done: true },
      { label: 'Group-based role assignment', done: true },
      { label: 'Conditional Access (MFA for admins)', done: true },
      { label: 'Access Reviews', done: true },
    ],
  },
  {
    title: 'Multi-VNet Network Architecture Lab',
    description:
      'Designed and deployed multiple Azure Virtual Networks interconnected via VNet peering, implemented custom User Defined Routes (UDRs) to control traffic flow, and deployed Network Virtual Appliances (NVAs) for traffic inspection and routing.',
    tags: ['Azure', 'VNet Peering', 'UDRs', 'NVAs'],
    checklist: [
      { label: 'Multiple Azure Virtual Networks', done: true },
      { label: 'VNet peering', done: true },
      { label: 'Custom User Defined Routes (UDRs)', done: true },
      { label: 'Network Virtual Appliances (NVAs)', done: true },
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor's Degree in Computer Science",
    school: 'Université Catholique de Louvain La Neuve',
    period: '2020 — 2025',
  },
];

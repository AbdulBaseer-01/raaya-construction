/* Careers content, moved verbatim from app/career/page.tsx. */

export type Job = {
  id: number
  title: string
  department: string
  location: string
  type: string
  experience: string
  posted: string
  description: string
  tags: string[]
  urgent: boolean
}

/** Applications go to this address (as on the original page). */
export const CAREERS_EMAIL = 'info@texoprefab.com'

export const departments = ['All', 'Operations', 'Logistics', 'Sales', 'Creative', 'Finance', 'Engineering', 'HR'];
export const jobTypes = ['All Types', 'Full-Time', 'Part-Time', 'Contract'];

export const jobs: Job[] = [
  {
    id: 1,
    title: 'Production Supervisor / Engineer',
    department: 'Operations',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: 'Just posted',
    description:
      'Lead production workflows, ensure quality control, and support modular manufacturing processes in a fast-moving prefab environment.',
    tags: ['Production', 'Manufacturing', 'Quality'],
    urgent: true,
  },
  {
    id: 2,
    title: 'Warehouse & Inventory Manager',
    department: 'Logistics',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: '3 days ago',
    description:
      'Manage inventory, warehouse operations, and material flow for prefab production with accuracy and efficiency.',
    tags: ['Inventory', 'Warehouse', 'Logistics'],
    urgent: false,
  },
  {
    id: 3,
    title: 'Sales Executive',
    department: 'Sales',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: 'Just posted',
    description:
      'Drive business development, manage client relationships, and close sales for modular solutions and prefab projects.',
    tags: ['Sales', 'Business', 'Clients'],
    urgent: false,
  },
  {
    id: 4,
    title: 'CRM & Lead Manager',
    department: 'Sales',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: '5 days ago',
    description:
      'Maintain lead pipelines, optimize CRM workflows, and support sales follow-up across construction and modular accounts.',
    tags: ['CRM', 'Leads', 'Sales'],
    urgent: false,
  },
  {
    id: 5,
    title: 'Video Editor, Shooter & Graphic Designer',
    department: 'Creative',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: '1 week ago',
    description:
      'Create compelling video content, shoot project visuals, and design marketing assets for Texo Prefab World.',
    tags: ['Video', 'Design', 'Creative'],
    urgent: false,
  },
  {
    id: 6,
    title: 'Accountant',
    department: 'Finance',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: '4 days ago',
    description:
      'Handle financial records, billing, vendor payments, and accounting processes for our modular construction business.',
    tags: ['Finance', 'Accounting', 'Billing'],
    urgent: false,
  },
  {
    id: 7,
    title: 'Design Engineer',
    department: 'Engineering',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: '2 days ago',
    description:
      'Develop prefab design drawings, coordinate technical specs, and support modular design execution for projects.',
    tags: ['Design', 'Engineering', 'Drafting'],
    urgent: false,
  },
  {
    id: 8,
    title: 'HR Executive',
    department: 'HR',
    location: 'Hyderabad, TG',
    type: 'Full-Time',
    experience: '2+ years',
    posted: '6 days ago',
    description:
      'Support recruitment, employee engagement, and HR administration for a growing prefab and construction team.',
    tags: ['HR', 'Recruiting', 'People'],
    urgent: false,
  },
];

/**
 * Certifications & Professional Badges – Structured Data
 * Manual update: Add or edit entries as you earn new credentials.
 * Credly profile: https://www.credly.com/users/kiroles-khalaf/badges
 */

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: CertificationCategory;
  issueDate: string;
  verified: boolean;
  imageUrl: string;
  credentialUrl: string;
}

export type CertificationCategory =
  | 'Networking'
  | 'Security'
  | 'Data'
  | 'Development'
  | 'DevOps'
  | 'Cloud'
  | 'All';

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ccna-intro',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    category: 'Networking',
    issueDate: 'May 2024',
    verified: true,
    imageUrl: 'https://images.credly.com/size/200x200/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    credentialUrl: 'https://www.credly.com/users/kiroles-khalaf/badges',
  },
  {
    id: 'ccna-srwe',
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco',
    category: 'Networking',
    issueDate: 'Jan 2025',
    verified: true,
    imageUrl: 'https://images.credly.com/size/200x200/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    credentialUrl: 'https://www.credly.com/users/kiroles-khalaf/badges',
  },
  {
    id: 'ms-sc900',
    title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
    issuer: 'Microsoft',
    category: 'Security',
    issueDate: 'Sep 2024',
    verified: true,
    imageUrl: 'https://images.credly.com/size/200x200/images/be8fcaeb-c769-4858-b567-4cd3097ec21d/SC-900_Microsoft_Security_Compliance_and_Identity_Fundamentals.png',
    credentialUrl: 'https://www.credly.com/users/kiroles-khalaf/badges',
  },
  {
    id: 'sas-data-essentials',
    title: 'Data Literacy Essentials',
    issuer: 'SAS',
    category: 'Data',
    issueDate: 'Sep 2024',
    verified: true,
    imageUrl: 'https://images.credly.com/size/200x200/images/290ecea0-3a09-47c5-b1a3-999798260d16/sas-data-literacy-essentials.png',
    credentialUrl: 'https://www.credly.com/users/kiroles-khalaf/badges',
  },
  {
    id: 'sas-data-practice',
    title: 'Data Literacy in Practice',
    issuer: 'SAS',
    category: 'Data',
    issueDate: 'Sep 2024',
    verified: true,
    imageUrl: 'https://images.credly.com/size/200x200/images/290ecea0-3a09-47c5-b1a3-999798260d16/sas-data-literacy-practice.png',
    credentialUrl: 'https://www.credly.com/users/kiroles-khalaf/badges',
  },
  {
    id: 'html-css-js',
    title: 'HTML, CSS & JavaScript Certification',
    issuer: 'Professional Training Program',
    category: 'Development',
    issueDate: '2023',
    verified: true,
    imageUrl: '',
    credentialUrl: 'https://www.credly.com/users/kiroles-khalaf/badges',
  },
  {
    id: 'depi-devops',
    title: 'Digital Egypt Pioneers Initiative (DEPI) – DevOps Track',
    issuer: 'Ministry of Communications & Information Technology',
    category: 'DevOps',
    issueDate: '2025',
    verified: true,
    imageUrl: 'https://images.credly.com/size/200x200/images/4136ced8-75d5-4afb-8677-40b6236e2672/8-2017-od-badges-2-1200px.png',
    credentialUrl: 'https://www.credly.com/users/kiroles-khalaf/badges',
  },
  {
    id: 'az900',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    category: 'Cloud',
    issueDate: 'In Progress',
    verified: false,
    imageUrl: 'https://images.credly.com/size/200x200/images/be8fcaeb-c769-4858-b567-4cd3097ec21d/azure-fundamentals-600x600.png',
    credentialUrl: 'https://www.credly.com/users/kiroles-khalaf/badges',
  },
  {
    id: 'docker-foundations',
    title: 'Docker Foundations',
    issuer: 'Docker',
    category: 'DevOps',
    issueDate: 'In Progress',
    verified: false,
    imageUrl: '',
    credentialUrl: 'https://www.credly.com/users/kiroles-khalaf/badges',
  },
];

export const CATEGORIES: CertificationCategory[] = [
  'All',
  'Networking',
  'Security',
  'DevOps',
  'Data',
  'Cloud',
  'Development',
];

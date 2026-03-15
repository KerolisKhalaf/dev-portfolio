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
  localImage?: string; // Local image file path in /public
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
    localImage: 'CCNA-_Introduction_to_Networks.png',
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
    localImage: 'CCNA-_Switching-_Routing-_and_Wireless_Essentials.png',
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
    localImage: 'Microsoft Certified Security, Compliance, and Identity Fundamentals.png',
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
    localImage: 'Data Literacy in Practice.png',
  },

  {
    id: 'nti-mean-fullstack',
    title: 'NTI MEAN Stack Full Stack',
    issuer: 'National Telecommunication Institute',
    category: 'Development',
    issueDate: '2025',
    verified: true,
    imageUrl: '',
    credentialUrl: 'https://www.credly.com/users/kiroles-khalaf/badges',
    localImage: 'NTI.png',
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
    localImage: 'Digital Egypt Pioneers Initiative (DEPI) – DevOps Track.png',
  },
  {
    id: 'az900',
    title: 'The Modern Era of Cybersecurity in the Age of AI with Hash',
    issuer: 'Microsoft',
    category: 'Cloud',
    issueDate: '2025',
    verified: true,
    imageUrl: 'https://images.credly.com/size/200x200/images/be8fcaeb-c769-4858-b567-4cd3097ec21d/azure-fundamentals-600x600.png',
    credentialUrl: 'https://www.credly.com/users/kiroles-khalaf/badges',
    localImage: 'Microsoft Certified.png',
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

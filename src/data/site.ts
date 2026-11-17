export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#businesses' },
  { label: 'Education', href: '#recognition' },
  { label: 'Why Work With Me', href: '#leadership' },
  { label: 'Skills & Interests', href: '#media' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anchit-goyal/',
    icon: 'in',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/goyalanchit/',
    icon: 'instagram',
  },
  {
    label: 'Voltare',
    href: 'https://www.voltare.in/',
    icon: 'voltare',
  },
];

export const partnerLogos = [
  {
    name: 'Voltare',
    src: '/voltare-partner-logo.png',
    href: 'https://www.linkedin.com/in/anchit-goyal/',
  },
  {
    name: 'BC Resource Group',
    src: '/bc-resource-group-logo.png',
    href: 'https://www.linkedin.com/in/anchit-goyal/',
  },
  {
    name: 'Blue Whistle',
    src: '/partner-blue-mark.png',
    href: 'https://www.linkedin.com/in/anchit-goyal/',
  },
  {
    name: 'Milky Way Ice creams & Fast food',
    src: '/milky-way-logo.png',
    href: 'https://www.linkedin.com/in/anchit-goyal/',
  },
  {
    name: 'Bank of America',
    src: '/bank-of-america-logo.png',
    href: 'https://www.linkedin.com/in/anchit-goyal/',
  },
];

export const businessHighlights = [
  {
    name: 'Writing & Communication',
    industry: 'Professional strength',
    description:
      'Clear writing and communication, grounded in the ability to organise ideas and share research effectively.',
    role: 'Communication',
    href: 'https://www.linkedin.com/in/anchit-goyal/',
  },
  {
    name: 'Research & Analysis',
    industry: 'Professional strength',
    description:
      'Research and analytical skills developed within a management consulting industry background.',
    role: 'Research',
    href: 'https://www.linkedin.com/in/anchit-goyal/',
  },
  {
    name: 'Economics & Management',
    industry: 'Academic foundation',
    description:
      'Studied Economics and Management at The London School of Economics and Political Science.',
    role: 'LSE graduate',
    href: 'https://www.linkedin.com/in/anchit-goyal/',
  },
];

export const journeySteps = [
  {
    year: 'Industry',
    title: 'Management Consulting',
    body: 'Experienced analyst with a demonstrated background in the management consulting industry.',
  },
  {
    year: 'Education',
    title: 'Economics & Management',
    body: 'Studied Economics and Management at The London School of Economics and Political Science.',
  },
  {
    year: 'Expertise',
    title: 'Research & Communication',
    body: 'Skills include research and analysis, writing and communication, teamwork and leadership.',
  },
];

export const mediaItems = [
  {
    title: 'Writing & Communication',
    category: 'Professional skill',
    description: 'Clear writing and communication are among Anchit’s stated areas of expertise.',
  },
  {
    title: 'Research & Analysis',
    category: 'Professional skill',
    description: 'Research and analysis support his work as an experienced analyst.',
  },
  {
    title: 'Economic & Management Theory',
    category: 'Academic focus',
    description: 'His academic background is in Economics and Management at LSE.',
  },
];

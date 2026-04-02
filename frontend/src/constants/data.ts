import type { NewsItem, CaseItem, ConstitutionLanguage, LegalBook, BareAct } from '@/types';

// ========================
// Home Page Data
// ========================

export const LATEST_NEWS: NewsItem[] = [
  {
    title: "Supreme Court Rules on Right to Privacy Case",
    date: "April 25, 2025",
    snippet: "The Supreme Court delivered a landmark judgment today on the right to privacy case...",
    url: "/news/1",
  },
  {
    title: "New Guidelines for Virtual Court Proceedings Released",
    date: "April 20, 2025",
    snippet: "The Department of Justice has issued new guidelines for virtual court proceedings...",
    url: "/news/2",
  },
  {
    title: "Legal Aid Services Expanded to Rural Areas",
    date: "April 15, 2025",
    snippet: "The Government's initiative to expand legal aid services to rural areas has seen significant progress...",
    url: "/news/3",
  },
];

export const RECENT_CASES: CaseItem[] = [
  {
    title: "State of Maharashtra v. Anand Kumar",
    court: "Supreme Court",
    date: "March 28, 2025",
    snippet: "Judgment on constitutional validity of Section 377 of the IPC...",
    url: "/cases/1",
  },
  {
    title: "Priya Sharma v. Union of India",
    court: "Delhi High Court",
    date: "March 22, 2025",
    snippet: "Case regarding the right to education for underprivileged children...",
    url: "/cases/2",
  },
  {
    title: "ABC Corporation v. Tax Authority",
    court: "Supreme Court",
    date: "March 15, 2025",
    snippet: "Verdict on corporate tax evasion case with significant implications...",
    url: "/cases/3",
  },
];

// ========================
// Library Page Data
// ========================

export const CONSTITUTION_LANGUAGES: ConstitutionLanguage[] = [
  { code: 'en', name: 'English', available: true },
  { code: 'hi', name: 'हिंदी (Hindi)', available: true },
  { code: 'bn', name: 'বাংলা (Bengali)', available: true },
  { code: 'te', name: 'తెలుగు (Telugu)', available: true },
  { code: 'ta', name: 'தமிழ் (Tamil)', available: true },
  { code: 'mr', name: 'मराठी (Marathi)', available: true },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)', available: true },
  { code: 'kn', name: 'ಕನ್ನಡ (Kannada)', available: true },
  { code: 'ml', name: 'മലയാളം (Malayalam)', available: true },
  { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)', available: true },
  { code: 'or', name: 'ଓଡ଼ିଆ (Odia)', available: true },
  { code: 'as', name: 'অসমীয়া (Assamese)', available: true },
  { code: 'ur', name: 'اردو (Urdu)', available: true },
  { code: 'sd', name: 'سنڌي (Sindhi)', available: true },
  { code: 'kok', name: 'कोंकणी (Konkani)', available: true },
];

export const LEGAL_BOOKS: LegalBook[] = [
  {
    title: "Indian Constitutional Law",
    author: "M.P. Jain",
    year: "2022",
    description: "A comprehensive analysis of the Indian Constitution and constitutional law.",
    coverImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3",
  },
  {
    title: "Law of Torts",
    author: "Ratanlal & Dhirajlal",
    year: "2021",
    description: "Classic text on the law of torts in the Indian context.",
    coverImage: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3",
  },
  {
    title: "Criminal Procedure Code",
    author: "K.N. Chandrasekharan Pillai",
    year: "2020",
    description: "Detailed commentary on the Criminal Procedure Code.",
    coverImage: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3",
  },
  {
    title: "The Indian Evidence Act",
    author: "Batuk Lal",
    year: "2021",
    description: "Commentary on the Indian Evidence Act with case references.",
    coverImage: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3",
  },
  {
    title: "Law of Contracts",
    author: "Avtar Singh",
    year: "2023",
    description: "Detailed explanation of contract law principles in India.",
    coverImage: "https://images.unsplash.com/photo-1560184611-44e3dba48541?ixlib=rb-4.0.3",
  },
  {
    title: "Family Law in India",
    author: "Paras Diwan",
    year: "2022",
    description: "Comprehensive coverage of family law across different personal laws.",
    coverImage: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3",
  },
];

export const BARE_ACTS: BareAct[] = [
  { name: "Constitution of India", lastUpdated: "Jan 26, 2023" },
  { name: "Indian Penal Code, 1860", lastUpdated: "Dec 15, 2022" },
  { name: "Code of Criminal Procedure, 1973", lastUpdated: "Nov 30, 2022" },
  { name: "Indian Evidence Act, 1872", lastUpdated: "Oct 10, 2022" },
  { name: "Civil Procedure Code, 1908", lastUpdated: "Sep 05, 2022" },
  { name: "Contract Act, 1872", lastUpdated: "Aug 22, 2022" },
  { name: "Right to Information Act, 2005", lastUpdated: "Jul 18, 2022" },
  { name: "Labour Codes", lastUpdated: "Jun 30, 2022" },
];

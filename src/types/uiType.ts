import type { IconType } from "react-icons";

export interface DarkModeProps {
  onClick: () => void;
  toggleDarkMode: boolean;
}
export interface DarkModeMobileProps {
  onClick: () => void;
  isDarkMode: boolean;
}

export interface MenuResponsiveProps {
  isMenuOpen: boolean;
  isDarkMode: boolean;
  handleDarkModeToggle: () => void;
}

export interface ShapeProps {
  isMenuOpen: boolean;
  onClick: () => void;
}

export interface ToggleBtnProps {
  onClick: () => void;
  isMenuOpen: boolean;
}

export interface IIconBar {
  id: number;
  icon: string;
  title: string;
}

export interface dataHeroImgType {
  id: number;
  img: string;
  contry: string;
  city: string;
}

export interface ProductTour {
  id: number;
  title: string;
  img: string;
  numbers: number;
  time: string;
  price: number;
  discount: number;
}

export interface WhyUsTravelData {
  id: number;
  title: string;
  icon: string;
  description: string;
}
interface BenefitItem {
  id: number;
  benefits: string;
  cont: number;
}

interface Feature {
  id: number;
  icon: IconType;
  title: string;
}

export interface PlanDay {
  id: number;
  title: string;
  description: string;
}

export interface CheckTour {
  id: number;
  description: string;
  features: Feature[];
  planDay: PlanDay[];
}

interface Place {
  id: number;
  img: string;
  title: string;
  description: string;
}

interface TourTerms {
  general: string[];
  cancellation: string[];
  health: string[];
  notes: string[];
}

interface HostTour {
  title: string;
  services: string[];
  conditions: string[];
}

interface Comment {
  id: number;
  userName: string;
  image: string;
  description: string;
  date: string;
}

export interface TourProduct {
  id: number;
  title: string;
  contry: string;
  categoryTour: string;
  isDomestic: boolean;
  img: string[];
  numbers: number;
  time: string;
  price: number;
  discount: number;
  startTour: string;
  endTour: string;
  strength: string;
  benefitsItem: BenefitItem[];
  benefits: BenefitItem[];
  checkTour: CheckTour[];
  place: Place[];
  lows: TourTerms;
  hostTour: HostTour;
  comment: Comment[];
}

export interface TourProductCategory {
  id: number;
  title: string;
  to: string;
}
export interface TourProductProps {
  filteredTours: TourProduct[];
}
export interface CommentUser {
  id: number;
  userName: string;
  name: string;
  image: string;
  description: string;
  date: string;
}
export type UserInteraction = {
  liked: boolean;
  disliked: boolean;
};
export interface FooterMenu {
  id: number;
  title: string;
  to: string;
}
export interface NavReview {
  id: number;
  name: string;
  to: string;
}
export type OutletContext = {
  currentTour: TourProduct;
};
interface TravelAgencySection {
  title: string;
  description?: string;
  items?: string[];
}

export interface TravelAgencyContent {
  header: TravelAgencySection;
  features: TravelAgencySection;
  services: TravelAgencySection;
  aboutUs: TravelAgencySection;
  testimonials: TravelAgencySection;
  callToAction: Omit<TravelAgencySection, "title" | "items"> & {
    text: string;
    linkText: string;
  };
}
export interface CompanyValue {
  id: number;
  title: string;
  description: string;
  icon?: string; // Optional icon class or emoji
}

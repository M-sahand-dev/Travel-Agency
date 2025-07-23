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

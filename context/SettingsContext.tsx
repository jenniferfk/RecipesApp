import { createContext, useState,useContext } from 'react';
import { ReactNode } from 'react';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
  favorites: string[];
  toggleFavorite: (foodName: string) => void;
  isFavorite: (foodName: string) => boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

type ThemeProviderProps = {
    children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState('light');
    const [favorites, setFavorites] = useState<string[]>([]);

  const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleFavorite = (foodName: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(foodName)) {
        return prevFavorites.filter(name => name !== foodName);
      } else {
        return [...prevFavorites, foodName];
      }
    });
  };

  const isFavorite = (foodName: string) => favorites.includes(foodName);
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, favorites, toggleFavorite, isFavorite  }}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeProvider };
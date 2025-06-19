import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { initialPackages, initialBlogPosts } from '../data/initialData';

export interface TourPackage {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  activities: string[];
  image: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  featured: boolean;
}

interface AppState {
  packages: TourPackage[];
  blogPosts: BlogPost[];
  isAdmin: boolean;
}

type Action = 
  | { type: 'ADD_PACKAGE'; payload: TourPackage }
  | { type: 'UPDATE_PACKAGE'; payload: TourPackage }
  | { type: 'DELETE_PACKAGE'; payload: string }
  | { type: 'ADD_BLOG_POST'; payload: BlogPost }
  | { type: 'UPDATE_BLOG_POST'; payload: BlogPost }
  | { type: 'DELETE_BLOG_POST'; payload: string }
  | { type: 'SET_ADMIN'; payload: boolean };

const initialState: AppState = {
  packages: initialPackages,
  blogPosts: initialBlogPosts,
  isAdmin: false,
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'ADD_PACKAGE':
      return { ...state, packages: [...state.packages, action.payload] };
    case 'UPDATE_PACKAGE':
      return {
        ...state,
        packages: state.packages.map(pkg =>
          pkg.id === action.payload.id ? action.payload : pkg
        ),
      };
    case 'DELETE_PACKAGE':
      return {
        ...state,
        packages: state.packages.filter(pkg => pkg.id !== action.payload),
      };
    case 'ADD_BLOG_POST':
      return { ...state, blogPosts: [...state.blogPosts, action.payload] };
    case 'UPDATE_BLOG_POST':
      return {
        ...state,
        blogPosts: state.blogPosts.map(post =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case 'DELETE_BLOG_POST':
      return {
        ...state,
        blogPosts: state.blogPosts.filter(post => post.id !== action.payload),
      };
    case 'SET_ADMIN':
      return { ...state, isAdmin: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
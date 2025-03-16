"use client";

import { ThemeContext } from '@/providers/theme';
import { useContext } from 'react';

export const useTheme = () => useContext(ThemeContext);
export default useTheme;
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';

  isDarkMode = signal<boolean>(this.getStoredTheme());

  constructor() {
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode.update((current) => !current);
    this.applyTheme();
    this.storeTheme();
  }

  private getStoredTheme(): boolean {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(this.THEME_KEY);
      if (stored) {
        return stored === 'dark';
      }
      // Check system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  }

  private storeTheme(): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        this.THEME_KEY,
        this.isDarkMode() ? 'dark' : 'light'
      );
    }
  }

  private applyTheme(): void {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      if (this.isDarkMode()) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    }
  }
}

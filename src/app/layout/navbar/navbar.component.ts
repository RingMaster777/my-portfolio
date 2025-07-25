import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from '../../core/services/theme.services';

interface NavItem {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  mobileMenuOpen = false;
  currentRoute = '';

  navItems: NavItem[] = [
    { label: 'Home', path: '/home', icon: 'fas fa-home' },
    { label: 'About', path: '/about', icon: 'fas fa-user' },
    { label: 'Projects', path: '/projects', icon: 'fas fa-code' },
    { label: 'Resume', path: '/resume', icon: 'fas fa-file-alt' },
    { label: 'Contact', path: '/contact', icon: 'fas fa-envelope' },
  ];

  constructor(public themeService: ThemeService, private router: Router) {}

  ngOnInit(): void {
    // Close mobile menu on route change
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.mobileMenuOpen = false;
      });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}

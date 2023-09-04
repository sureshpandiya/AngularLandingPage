import { Component, OnInit } from '@angular/core';

interface SidebarItem {
  label: string;
  link: string;
  iconClass: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sidebarItems: SidebarItem[] = [
    { label: 'Dashboard', link: '/dashboard', iconClass: 'bx bx-grid-alt' },
    { label: 'Product', link: '/product', iconClass: 'bx bx-box' },
    { label: 'Order list', link: '/orderList', iconClass: 'bx bx-list-ul' },
    { label: 'Analytics', link: '/analytics', iconClass: 'bx bx-pie-chart-alt-2' },
    { label: 'Stock', link: '/stock', iconClass: 'bx bx-coin-stack' },
    { label: 'Total order', link: '/totalOrder', iconClass: 'bx bx-book-alt' },
    { label: 'Team', link: '/team', iconClass: 'bx bx-user' },
    { label: 'Messages', link: '/message', iconClass: 'bx bx-message' },
    { label: 'Favorites', link: '/favorites', iconClass: 'bx bx-heart' },
    { label: 'Settings', link: '/settings', iconClass: 'bx bx-cog' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

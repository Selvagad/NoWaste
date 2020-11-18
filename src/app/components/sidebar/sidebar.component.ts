import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Taux de remplissage",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/webcam",
    title: "Reconnaissance par webcam",
    icon: "icon-camera-18",
    class: ""
  },
  {
    path: "/file",
    title: "Reconnaissance par fichier",
    icon: "icon-image-02",
    class: "" },
  {
    path: "/notifications",
    title: "Description",
    icon: "icon-bell-55",
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",
    icon: "icon-align-center",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}

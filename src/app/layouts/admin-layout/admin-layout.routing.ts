import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { WebcamComponent } from "../../pages/webcam/webcam.component";
import { FileComponent } from "../../pages/file/file.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "webcam", component: WebcamComponent },
  { path: "file", component: FileComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "typography", component: TypographyComponent },
];

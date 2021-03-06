import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { WebcamComponent } from "../../pages/webcam/webcam.component";
import { FileComponent } from "../../pages/file/file.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { NgxGaugeModule } from 'ngx-gauge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxGaugeModule,
    MatSlideToggleModule 
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    WebcamComponent,
    TypographyComponent,
    NotificationsComponent,
    FileComponent,
  ]
})
export class AdminLayoutModule {}

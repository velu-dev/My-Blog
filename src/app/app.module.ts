import { mySkills } from './resume/skills';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialComponent } from './social/social.component';
import { ContactComponent } from './contact/contact.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { ResumeComponent } from './resume/resume.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    SkillsComponent,
    SocialComponent,
    ContactComponent,
    ExperianceComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppBootstrapModule,
    AmChartsModule
  ],
  providers: [mySkills],
  bootstrap: [AppComponent]
})
export class AppModule { }

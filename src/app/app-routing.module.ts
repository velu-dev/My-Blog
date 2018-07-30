import { ContactComponent } from './contact/contact.component';
import { SocialComponent } from './social/social.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperianceComponent } from './experiance/experiance.component';

const routes= [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: DashboardComponent },
  { path: 'education', component: AboutComponent },
  { path: 'experiance', component: ExperianceComponent },
  { path: 'skills',     component: SkillsComponent },
  { path: 'social',     component: SocialComponent },
  { path: 'contact',     component: ContactComponent }

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { AcademicComponent } from './main/academic/academic.component';
import { ProfissionalComponent } from './main/profissional/profissional.component';

const routes: Routes =[
    { path: '', redirectTo: 'profile', pathMatch: 'full'},
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'profile',          component: MainPageComponent},
    { path: 'academic',         component: AcademicComponent},
    { path: 'experience',      component: ProfissionalComponent},
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    }),
    //[Location, {provide: LocationStrategy, useClass: HashLocationStrategy}]
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

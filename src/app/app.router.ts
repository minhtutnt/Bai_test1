import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DetailnewComponent } from './components/detailnew/detailnew.component';


export const router:Routes=[
	{path:'', redirectTo:'home', pathMatch:'full'},
	{path:'about',  component:AboutComponent},
	{path:'home/detailnew',  component:DetailnewComponent},
	{path:'home', component:HomeComponent}
];
export const routes:ModuleWithProviders=RouterModule.forRoot(router);
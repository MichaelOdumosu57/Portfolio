import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
    {
        path:'intro',
        loadChildren: () => import('./intro/intro.module').then(m => m.IntroModule)
    },
    {
        path:'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path:'resume',
        loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)
    },
    {
        path:'testimony',
        loadChildren: () => import('./testimony/testimony.module').then(m => m.TestimonyModule)
    },
    {
        path:'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

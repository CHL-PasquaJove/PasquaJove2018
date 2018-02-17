import { Routes } from '@angular/router';

import { SlidesComponent } from './slides/slides/slides.component';


export const appRoutes: Routes = [
    { path: '', component: SlidesComponent },
    { path: ':form', component: SlidesComponent },
  ];

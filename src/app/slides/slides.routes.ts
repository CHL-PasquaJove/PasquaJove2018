import { Routes } from '@angular/router';

import { SlidesComponent } from './slides/slides.component';


export const slidesRoutes: Routes = [
    { path: '', component: SlidesComponent },
    { path: ':form', component: SlidesComponent },
  ];

import { Routes } from '@angular/router';

import { slidesRoutes } from './slides';
import { responsibleRoutes } from './responsible';


export const appRoutes: Routes = [
    ...responsibleRoutes,
    ...slidesRoutes,
  ];

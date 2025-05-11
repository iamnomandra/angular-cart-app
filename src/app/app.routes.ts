import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LandingComponent } from './components/landing/landing.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'AllProducts',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LandingComponent,
  },
];

// {
//   path: 'checkout',
//   component: CheckoutComponent,
//   canActivate: [authGuard],
//   title: 'Checkout'
// }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'location',
        loadChildren: () => import('../location/location.module').then(m => m.LocationPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'driver-home',
        loadChildren: () => import('../driver-home/driver-home.module').then(m => m.DriverHomePageModule)
      },
      {
        path: 'driver-history',
        loadChildren: () => import('../driver-history/driver-history.module').then(m => m.DriverHistoryPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'order-history',
        loadChildren: () => import('../order-history/order-history.module').then(m => m.OrderHistoryPageModule)
      },
      {
        path: '',
        redirectTo: '/menu/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }

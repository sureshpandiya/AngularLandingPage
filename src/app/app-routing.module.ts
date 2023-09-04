import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/authr/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductComponent } from './component/product/product.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import { AnalyticsComponent } from './component/analytics/analytics.component';
import { StockComponent } from './component/stock/stock.component';
import { TotalOrderComponent } from './component/total-order/total-order.component';
import { TeamComponent } from './component/team/team.component';
import { MessageComponent } from './component/message/message.component';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { SettingsComponent } from './component/settings/settings.component';
import { HeaderComponent } from './component/header/header.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { RegisterComponent } from './component/authr/register/register.component';
// import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'orderList',
    component: OrderListComponent,
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
  {
    path: 'stock',
    component: StockComponent,
  },
  {
    path: 'totalOrder',
    component: TotalOrderComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'message',
    component: MessageComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

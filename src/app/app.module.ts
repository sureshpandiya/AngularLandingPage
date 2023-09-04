import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/authr/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductComponent } from './component/product/product.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import { AnalyticsComponent } from './component/analytics/analytics.component';
import { TeamComponent } from './component/team/team.component';
import { MessageComponent } from './component/message/message.component';
import { FavoritesComponent } from './component/favorites/favorites.component';
import { SettingsComponent } from './component/settings/settings.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { HeaderComponent } from './component/header/header.component';
import { RecentSalesComponent } from './component/dashboard/recent-sales/recent-sales.component';
import { SellingProductComponent } from './component/dashboard/selling-product/selling-product.component';
import { TotalSalesListComponent } from './component/dashboard/total-sales-list/total-sales-list.component';
import { RegisterComponent } from './component/authr/register/register.component';
import { ForgotComponent } from './component/authr/forgot/forgot.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductComponent,
    OrderListComponent,
    AnalyticsComponent,
    TeamComponent,
    MessageComponent,
    FavoritesComponent,
    SettingsComponent,
    SidenavComponent,
    HeaderComponent,
    RecentSalesComponent,
    SellingProductComponent,
    TotalSalesListComponent,
    RegisterComponent,
    ForgotComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

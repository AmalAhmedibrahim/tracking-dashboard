import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardsModule } from '../../shared/cards/cards.module';
import { ProductsService } from 'src/app/services/products/products.service';

@NgModule({
  declarations: [DashboardContainerComponent, DashboardComponent],
  providers: [ProductsService],
  imports: [CommonModule, DashboardRoutingModule, CardsModule],
})
export class DashboardModule {}

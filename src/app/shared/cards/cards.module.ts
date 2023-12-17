import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { StatsCardComponent } from './stats-card/stats-card.component';

@NgModule({
  declarations: [ProfileCardComponent, StatsCardComponent],
  imports: [CommonModule],
  exports: [ProfileCardComponent, StatsCardComponent],
})
export class CardsModule {}

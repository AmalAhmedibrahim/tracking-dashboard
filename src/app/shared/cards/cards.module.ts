import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ProfileCardComponent, StatsCardComponent],
  imports: [CommonModule, PipesModule],
  exports: [ProfileCardComponent, StatsCardComponent],
})
export class CardsModule {}

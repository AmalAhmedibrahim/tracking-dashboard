import { Component, Input, OnInit } from '@angular/core';
import { StatsCard } from '../models/stats-card.interface';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss'],
})
export class StatsCardComponent implements OnInit {
  @Input() cardData: StatsCard;
  constructor() {}

  ngOnInit(): void {}
}

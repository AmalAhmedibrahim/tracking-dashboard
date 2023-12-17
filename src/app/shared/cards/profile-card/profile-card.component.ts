import { Component, Input, OnInit } from '@angular/core';
import { ProfileCard } from '../models/profile-card.interface';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  @Input() cardData: ProfileCard;
  constructor() {}

  ngOnInit(): void {}
}

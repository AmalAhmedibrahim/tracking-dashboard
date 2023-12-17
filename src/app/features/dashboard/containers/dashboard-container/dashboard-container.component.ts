import { take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { ProfileCard } from 'src/app/shared/cards/models/profile-card.interface';
import { StatsCard } from 'src/app/shared/cards/models/stats-card.interface';
@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
})
export class DashboardContainerComponent implements OnInit {
  profileCard: ProfileCard;
  statsCard: StatsCard[] = [];
  constructor(private productsService: ProductsService) {
    this.profileCard = {
      text: 'Report for',
      title: 'Best Sales',
      imgSrc: 'assets/images/card-image.png',
      items: [
        { value: 'Daily', active: false },
        { value: 'Weekly', active: true },
        { value: 'Monthly', active: false },
      ],
    };

    this.statsCard = [
      {
        color: 'var(--orange)',
        tittle: `men's clothing`,
        total: '109.95',
        currency: '$',
        disc: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        statsType: 'InStore',
        statsAmount: '120',
      },
      {
        color: 'var(--blue-200)',
        tittle: `men's clothing`,
        total: '109.95',
        currency: '$',
        disc: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        statsType: 'InStore',
        statsAmount: '120',
      },
      {
        color: 'var(--pink)',
        tittle: `men's clothing`,
        total: '109.95',
        currency: '$',
        disc: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        statsType: 'InStore',
        statsAmount: '120',
      },
      {
        color: 'var(--orange)',
        tittle: `men's clothing`,
        total: '109.95',
        currency: '$',
        disc: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        statsType: 'InStore',
        statsAmount: '120',
      },
      {
        color: 'var(--blue-200)',
        tittle: `men's clothing`,
        total: '109.95',
        currency: '$',
        disc: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        statsType: 'InStore',
        statsAmount: '120',
      },

      {
        color: 'var(--green)',
        tittle: `men's clothing`,
        total: '109.95',
        currency: '$',
        disc: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        statsType: 'InStore',
        statsAmount: '120',
      },
      {
        color: 'var(--dark-purple)',
        tittle: `men's clothing`,
        total: '109.95',
        currency: '$',
        disc: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        statsType: 'InStore',
        statsAmount: '120',
      },
      {
        color: 'var(--yellow)',
        tittle: `men's clothing`,
        total: '109.95',
        currency: '$',
        disc: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        statsType: 'InStore',
        statsAmount: '120',
      },
      {
        color: 'var(--green)',
        tittle: `men's clothing`,
        total: '109.95',
        currency: '$',
        disc: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        statsType: 'InStore',
        statsAmount: '120',
      },
      {
        color: 'var(--dark-purple)',
        tittle: `men's clothing`,
        total: '109.95',
        currency: '$',
        disc: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        statsType: 'InStore',
        statsAmount: '120',
      },
    ];
  }

  ngOnInit(): void {
    this.productsService
      .getAllProduct()
      .pipe(take(1))
      .subscribe((products) => {
        console.log(products);
      });
  }
}

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
  colors: string[];
  constructor(private productsService: ProductsService) {
    this.colors = [
      'var(--orange)',
      'var(--blue-200)',
      'var(--pink)',
      'var(--orange)',
      'var(--blue-200)',
      'var(--green)',
      'var(--dark-purple)',
      'var(--yellow)',
      'var(--green)',
      'var(--dark-purple)',
    ];
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
  }

  ngOnInit(): void {
    this.productsService
      .getAllProduct()
      .pipe(take(1))
      .subscribe((products) => {
        console.log(products);

        products.forEach((p, index) => {
          this.statsCard.push({
            color: this.colors[index],
            title: p.category,
            total: p.price,
            currency: '$',
            disc: p.title,
            statsType: 'InStore',
            statsAmount: '' + p.rating.count,
          });
        });
      });
  }
}

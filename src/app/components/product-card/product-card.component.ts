import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  imports:[RouterLink],
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() image: string | undefined;
  @Input() short_desc: string | undefined;
  @Input() category: string | undefined; 
  @Input() quantity: number | undefined;
  @Input() price: string | undefined; 
  @Input() id: number | undefined;
  @Input() onAdd: any | undefined;

  constructor() {}

  ngOnInit(): void {}
}
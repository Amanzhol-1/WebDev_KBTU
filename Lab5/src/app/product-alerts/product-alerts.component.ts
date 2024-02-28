import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}

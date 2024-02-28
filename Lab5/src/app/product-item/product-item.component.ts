import { Component, Input } from '@angular/core';
import { Product } from '../products';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;
  
  constructor(private productListComponent: ProductListComponent) {}

  likes: number = 0;

  share(product: Product) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.kaspiUrl)}`;
    window.open(telegramUrl, '_blank');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  like() {
    this.likes++;
    this.product.likes = this.likes;
  }
  
  remove() {
    this.productListComponent.removeProduct(this.product);
    this.product = null;
  }
}
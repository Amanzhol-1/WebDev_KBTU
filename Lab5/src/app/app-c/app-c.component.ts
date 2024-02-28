import { Component } from '@angular/core';
import { Category } from '../category';
import { products } from '../products';

@Component({
  selector: 'app-app-c',
  templateUrl: './app-c.component.html',
  styleUrls: ['./app-c.component.css']
})
export class AppCComponent {
  
  curCategory: Category | undefined;
  categoryList: Category[] = [
    { id: 0, name: "a", productList: products.slice(0, 5) },
    { id: 1, name: "b", productList: products.slice(5, 10) },
    { id: 2, name: "c", productList: products.slice(10, 15) },
    { id: 3, name: "d", productList: products.slice(15, 20) },
  ];

  filteredCategories: Category[] = [];

  selectCategory(selected: Category) {
    this.curCategory = selected;
  }

  onSearchChange(event: Event) {
    if (event instanceof InputEvent) {
      const searchTerm = (event.target as HTMLInputElement).value;
      this.filteredCategories = this.categoryList.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}

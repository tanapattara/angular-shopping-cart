import { EventEmitter, Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  event: EventEmitter<null> = new EventEmitter();

  constructor() { }

  notifyDataChange() {
    this.event.emit();
  }

  addToCart(product: Product) {
    this.items.push(product);
    this.notifyDataChange();
  }

  getItems() {
    return this.items;
  }
  getCartItemCount() {
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

import {Component, View, For, If} from 'angular2/angular2';

@Component({
  selector: 'shopping-cart'
})
@View({
  templateUrl: 'cart.html',
  directives: [For, If]
})

export class Cart {
  items: List<Object>;

  constructor() {
    this.items = [];
  }

  addItem(newItem) {
    var existentItems = this.items.filter(function(item) {
      return item.id === newItem.id
    });

    if (existentItems.length) {
      existentItems[0].quantity += 1
    } else {
      newItem.quantity = 1;
      this.items.unshift(newItem);
    }
  }

  removeItem(targetItem) {
    var self = this;

    this.items.forEach(function(item, idx) {
      if (targetItem.id === item.id) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          self.items.splice(idx, 1);
        }
      }
    });
  }

  checkout() {
    this.items = [];
  }

  calculateTotal() {
    var total = 0;

    this.items.forEach(function(item) {
      total += item.price * item.quantity;
    });

    return total;
  }
}


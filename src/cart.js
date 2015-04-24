import {bootstrap, Component, View, For, If} from 'angular2/angular2';

class CatalogService {
  items: List<Object>;

  constructor() {
    this.items = [
    { id: 0, name: 'Ferrari', price: 2e5, photo: 'http://png-1.findicons.com/files/icons/1012/racing_cars/256/ferrari.png', description: 'The nicest car ever!' },
    { id: 1, name: 'Viper', price: 1e5, photo: 'http://findicons.com/files/icons/1012/racing_cars/128/dodge.png', description: 'For you that loves performance.' }
    ];
  }
}

class CartService {
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


@Component({
  selector: 'shopping-cart-app',
  injectables: [
  CatalogService,
  CartService
  ]
})

@View({
  templateUrl: 'catalog.html',
  directives: [For, If]
})

class ShoppingCmp {
  items: List<Object>;

  constructor(catalog:CatalogService, cart:CartService) {
    this.catalog = catalog;
    this.cart = cart;
  }
}


export function main() {
  bootstrap(ShoppingCmp);
}
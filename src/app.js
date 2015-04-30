import {bootstrap, Component, View} from 'angular2/angular2';

import {Catalog} from 'catalog';
import {Cart} from 'cart';

@Component({
  selector: 'shopping-app'
})

@View({
  templateUrl: 'app.html',
  directives: [Catalog, Cart]
})

class ShoppingCmp {
  constructor() {
    this.items = [
      { id: 0, name: 'Ferrari', price: 2e5, photo: 'http://png-1.findicons.com/files/icons/1012/racing_cars/256/ferrari.png', description: 'The nicest car ever!' },
      { id: 1, name: 'Viper', price: 1e5, photo: 'http://findicons.com/files/icons/1012/racing_cars/128/dodge.png', description: 'For you that loves performance.' }
    ];
  }
}

export function main() {
  bootstrap(ShoppingCmp);
}


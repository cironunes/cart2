import {Component, View, For} from 'angular2/angular2';

@Component({
  selector: 'shopping-catalog',
  properties: {
    items: 'items',
    cart: 'cart'
  }
})
@View({
  templateUrl: 'catalog.html',
  directives: [For]
})

export class Catalog {
  items: List<Object>;
}
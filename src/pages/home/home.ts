import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('item') item;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor(public navCtrl: NavController) {

  }

  addItemInBucket(){
    console.log('item is ',this.item.value);
    this.heroes.push(this.item.value);
    this.item.value = '';
  }


}

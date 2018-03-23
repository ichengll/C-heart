import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { OrderPage } from '../order/order';
import { SetPage } from '../set/set';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactPage;
  tab3Root = OrderPage;
  tab4Root = SetPage;

  constructor() {

  }
}

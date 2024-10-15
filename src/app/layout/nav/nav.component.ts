import { Component } from '@angular/core';
import { RoutingModels } from './models/routing.models';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  navLinks: RoutingModels[]=[
    {
      title: 'Home',
       url: '/'
      },
    {
      title: 'About',
       url: '/about'
      },
    {
      title: 'Demo', 
      children:[
        {title: 'Demo1', url: '/demo/demo01'},
        {title: 'Demo2', url: '/demo/demo02'},
        {title: 'Demo3', url: '/demo/demo03'},
        {title: 'Demo4', url: '/demo/demo04'},
      ],
      isVisible: false
    },
      {
        title: 'Exo',
        children:[{
          title:'Timer', url: '/exo/timer'},
          {title:'Shopping', url: '/exo/shopping'},
          {title: 'product', url: 'exo/product'},
          {title: 'formulaire', url: 'exo/formulaire'}
        
        ],
        isVisible: false
      }
  ] 
  toggleVisibility(link: RoutingModels){
    link.isVisible= !link.isVisible
  }
}

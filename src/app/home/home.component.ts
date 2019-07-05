import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'home-tab',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  ngOnInit() {
  
  }
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';
  tabbarStyle: object = { position: 'fixed',
          height: '100%',
          width: '100%',
          top: 0 };
  selectedIndex: number = 1;
  tabBarTabOnPress(pressParam: any) {
    console.log('onPress Params: ', pressParam);
    this.selectedIndex = pressParam.index;
  }
}

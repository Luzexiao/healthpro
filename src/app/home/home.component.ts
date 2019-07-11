import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'home-tab',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit() {

  }
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';
  tabbarStyle: object = {
    position: 'fixed',
    height: '55px',
    width: '100%',
    bottom:0
  };
  selectedIndex: number = 0;
  tabBarTabOnPress(pressParam: any) {
    switch (pressParam.index) {
      case 0:
        this.router.navigate(["home/healthData"]);
        break;
      case 1:
        this.router.navigate(["home/relatives"]);
        break;
      case 2:
        this.router.navigate(["home/userCenter"]);
        break;
    }
    this.selectedIndex = pressParam.index;
  }
}

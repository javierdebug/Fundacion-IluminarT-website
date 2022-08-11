import { Component, OnInit } from '@angular/core';

import { Hero1Component } from '../hero1/hero1.component';
import { Hero2Component } from '../hero2/hero2.component';
import { FeatureComponent } from '../feature/feature.component';
import { FooterComponent } from '../footer/footer.component';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

}

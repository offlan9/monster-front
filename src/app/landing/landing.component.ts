import { Component, OnInit } from '@angular/core';
import {faIcon} from '../faIcon';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  faIcon = faIcon

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../../state/restaurant.model';

@Component({
  selector: 'app-restaurant-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() restaurant: Restaurant;
  constructor() { }

  ngOnInit() {
  }

}

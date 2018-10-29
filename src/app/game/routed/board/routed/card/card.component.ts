import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../../../../shared/model/card.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  toggled = false;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggled = !this.toggled;
    this.card.toggled = this.toggled;
  }

}

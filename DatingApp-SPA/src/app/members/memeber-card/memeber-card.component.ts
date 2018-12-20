import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-memeber-card',
  templateUrl: './memeber-card.component.html',
  styleUrls: ['./memeber-card.component.css']
})
export class MemeberCardComponent implements OnInit {

  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

/**
* Component for hello world challenge
* Holds person object to pass input name data
*/
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  person: Person = {
    name: ''
  };

  constructor() { }

  ngOnInit() {
  }

}

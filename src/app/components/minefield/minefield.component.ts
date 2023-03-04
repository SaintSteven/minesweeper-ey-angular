import { Component } from '@angular/core';

@Component({
  selector: 'app-minefield',
  templateUrl: './minefield.component.html',
  styleUrls: ['./minefield.component.css']
})
export class MinefieldComponent {
  hola: string;
  constructor() {
    this.hola = 'buenos días'
  }
}

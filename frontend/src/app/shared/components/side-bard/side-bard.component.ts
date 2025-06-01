import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bard',
  templateUrl: './side-bard.component.html',
  styleUrls: ['./side-bard.component.css']
})
export class SideBardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openDropdowns: { [key: string]: boolean } = {};

  toggleDropdown(id: string): void {
    this.openDropdowns[id] = !this.openDropdowns[id];
  }

  isOpen(id: string): boolean {
    return this.openDropdowns[id];
  }

}

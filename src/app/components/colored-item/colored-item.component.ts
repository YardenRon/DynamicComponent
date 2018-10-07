import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { CubeComponent } from '../../shared/interfaces/cube.component';

@Component({
  selector: 'colored-item',
  templateUrl: './colored-item.component.html',
  styleUrls: ['./colored-item.component.scss']
})
export class ColoredItemComponent implements CubeComponent, OnInit {

  @Input() data: any;
  @HostBinding('style.flex-grow')
  size: number;

  constructor() { }

  ngOnInit() {
    this.size = this.data.size;
  }

}

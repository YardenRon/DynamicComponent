import { Component, OnInit, Input } from '@angular/core';
import { Cube } from '../shared/models/cube.model';

@Component({
  selector: 'dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.scss']
})
export class DynamicContainerComponent implements OnInit {

  @Input() cubes: Cube[];

  constructor() { }

  ngOnInit() {
  }

}

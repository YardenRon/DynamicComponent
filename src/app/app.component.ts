import { Component, OnInit } from '@angular/core';
import { viewsConfig } from './views-config';
import { View } from './shared/models/view.model';
import { Cube } from './shared/models/cube.model';
import { CubeService } from './shared/services/cube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedViewName: string;
  views: View[];
  cubes: Cube[];

  constructor(private cubeService: CubeService) {}

  ngOnInit(): void {
    this.views = viewsConfig;
    this.cubes = [];
  }

  onViewChange(): void {
    if (this.selectedViewName) {
      this.cubes = this.cubeService.getViewCubes(this.selectedViewName);
    }
  }

}

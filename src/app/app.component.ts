import { Component, OnInit } from '@angular/core';
import { viewsConfig } from './views-config';
import { View } from './shared/models/view.model';
import { Cube } from './shared/models/cube.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedViewName: string;
  selectedView: View;
  views: View[];

  ngOnInit(): void {
    this.views = viewsConfig;
    this.selectedView = this.views[0];
    this.selectedViewName = this.selectedView.name;
  }

  onViewChange(): void {
    alert(this.selectedViewName);
    if (this.selectedViewName) {
      this.selectedView = this.views.filter(view => view.name === this.selectedViewName)[0];
    }
  }

}

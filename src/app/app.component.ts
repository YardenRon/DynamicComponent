import { Component, OnInit } from '@angular/core';
import { viewsConfig } from './views-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectedView: string;
  views: string[];

  ngOnInit(): void {
    this.views = viewsConfig.map(view => view.name);
  }

  onViewChange(): void {
    alert(this.selectedView);
  }
}

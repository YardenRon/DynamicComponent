import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Cube } from '../shared/models/cube.model';
import { DynamicHostDirective } from '../shared/directives/dynamic-host.directive';
import { CubeComponent } from '../shared/interfaces/cube.component';

@Component({
  selector: 'dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.scss']
})
export class DynamicContainerComponent implements OnInit {

  @Input() cubes: Cube[];
  @ViewChild(DynamicHostDirective) dynamicHost: DynamicHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadCubes();
  }

  loadCubes(): void {
    let viewContainerRef = this.dynamicHost.viewContainerRef;
    
    this.cubes.forEach(cube => {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(cube.component);
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<CubeComponent>componentRef.instance).data = cube.data;
    })
  }

}

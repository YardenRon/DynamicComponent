import { Component, OnChanges, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Cube } from '../shared/models/cube.model';
import { DynamicHostDirective } from '../shared/directives/dynamic-host.directive';
import { CubeComponent } from '../shared/interfaces/cube.component';

@Component({
  selector: 'dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.scss']
})
export class DynamicContainerComponent implements OnChanges {

  @Input() cubes: Cube[];
  @ViewChild(DynamicHostDirective) dynamicHost: DynamicHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnChanges(): void {
    this.dynamicHost.viewContainerRef.clear();
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

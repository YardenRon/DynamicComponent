import { Injectable } from '@angular/core';
import { Cube } from '../models/cube.model';
import { viewsConfig } from '../../views-config';
import { ColoredItemComponent } from '../../components/colored-item/colored-item.component';

@Injectable({
  providedIn: 'root'
})
export class CubeService {

  getViewCubes(viewName: string): Cube[] {
    const view = viewsConfig.filter(view => view.name === viewName)[0];
    return view.cubes.map(cubeDetails => new Cube(cubeDetails.component, cubeDetails.data));
  }

}

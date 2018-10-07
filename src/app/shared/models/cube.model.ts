import { Type } from '@angular/core';

export class Cube {
    component: Type<any>;
    data: any;

    constructor(component: Type<any>, data: any) {
        this.component = component;
        this.data = data;
    }
}
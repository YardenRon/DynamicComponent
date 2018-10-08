import { View } from './shared/models/view.model';
import { ColoredItemComponent } from './components/colored-item/colored-item.component';

export const viewsConfig: View[] = [
    {
        name: "view1",
        cubes: [
            {
                component: ColoredItemComponent,
                data: {
                    name: "First Component",
                    color: "red",
                    size: 1
                }
            },
            {
                component: ColoredItemComponent,
                data: {
                    name: "Second Component",
                    color: "blue",
                    size: 1
                }
            },
            {
                component: ColoredItemComponent,
                data: {
                    name: "Third Component",
                    color: "green",
                    size: 1
                }
            }
        ]
    },
    {
        name: "view2",
        cubes: []
    },
    {
        name: "view3",
        cubes: [
            {
                component: ColoredItemComponent,
                data: {
                    name: "Lone Component",
                    color: "blue",
                    size: 1
                }
            }
        ]
    },
    {
        name: "view4",
        cubes: [
            {
                component: ColoredItemComponent,
                data: {
                    name: "Big Component",
                    color: "green",
                    size: 2
                }
            },
            {
                component: ColoredItemComponent,
                data: {
                    name: "Small Component",
                    color: "red",
                    size: 1
                }
            }
        ]
    }
];
import { Route } from "@angular/router";
import { AddProductComponent } from "./add-product.component";

export const productsRoutes: Route[] = [
    {
        path     : '',
        component: AddProductComponent,
     
    }
];

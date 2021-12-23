import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './add-product.component';
import { productsRoutes } from './products.routing';



@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes),
    ReactiveFormsModule,
    SharedModule,
   // NgxPaginationModule,
   // SwiperModule,
   // InputFileModule
  ]
})
export class ProductsModule { }

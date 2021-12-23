import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AddProductComponent } from './add-product.component';
import { productsRoutes } from './products.routing';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppService } from 'app/app.service';
import { ProductoService } from 'app/_services/productos.service';

@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes),
    ReactiveFormsModule,
    SharedModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatRippleModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatStepperModule,
    MatToolbarModule

  ],
  providers: [
      AppService,
      ProductoService

  ]
})
export class AltaAsuntoModule { }

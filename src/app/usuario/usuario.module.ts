import { DragDropModule } from "@angular/cdk/drag-drop";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MAT_DATE_FORMATS } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { RouterModule } from "@angular/router";
import { appRoutes } from "app/app.routing";
import { SharedModule } from "app/shared/shared.module";
import moment from "moment";
import { UsuarioComponent } from "./usuario.component";
import { usuariosRoutes } from "./usuario.routing";
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [ UsuarioComponent ], 
    bootstrap:    [ UsuarioComponent ],
    imports     : [
        RouterModule.forChild(usuariosRoutes),
        DragDropModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatMomentDateModule,
        MatProgressBarModule,
        SharedModule,
        FormsModule,
        MatCardModule,
        MatTableModule,
        
    ],
    providers   : [
        {
            provide : MAT_DATE_FORMATS,
            useValue: {
                parse  : {
                    dateInput: moment.ISO_8601
                },
                display: {
                    dateInput         : 'll',
                    monthYearLabel    : 'MMM YYYY',
                    dateA11yLabel     : 'LL',
                    monthYearA11yLabel: 'MMMM YYYY'
                }
            }
        }
    ],

})
export class UsuariosModule
{
}

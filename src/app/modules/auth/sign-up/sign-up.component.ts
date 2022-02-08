import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { ParametrosRequest } from 'app/_bussines_model/parametros';
import { AutorizacionService } from 'app/_bussines_services/autorizacion-services';
import { emailValidator, matchingPasswords } from '../app-validators';

@Component({
    selector     : 'auth-sign-up',
    templateUrl  : './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignUpComponent implements OnInit {

    parametrosRequest:ParametrosRequest;


    
    @ViewChild('signUpNgForm') signUpNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    registroUsuarioForm: FormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(

        private _autorizacionService:AutorizacionService,
        
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router

    ) { }

    /**
     * On init
     */
    ngOnInit() {

            this.registroUsuarioForm = this._formBuilder.group({
                username  : ['', Validators.required],
                email     : ['', Validators.compose([Validators.required, emailValidator])],
                password  : ['', Validators.compose([Validators.required, Validators.minLength(6)])],
                confirmPassword: ['', Validators.required]
              },{validator: matchingPasswords('password', 'confirmPassword')});

    }

    /**
     * Sign up
     */
     registroUsuario(){

        // Do nothing if the form is invalid
        if ( this.registroUsuarioForm.invalid )
        {
            return;
        }

        // Disable the form
        this.registroUsuarioForm.disable();

        // Hide the alert
        this.showAlert = false;


        this.parametrosRequest = new ParametrosRequest();
        this.parametrosRequest.username = this.registroUsuarioForm.get('username').value;
        this.parametrosRequest.correo = this.registroUsuarioForm.get('email').value;
        this.parametrosRequest.pass = this.registroUsuarioForm.get('password').value;
        


        // Sign up
        this._autorizacionService.registroUsuario(this.parametrosRequest).subscribe(
                (response) => {

                    // Navigate to the confirmation required page
                    this._router.navigateByUrl('/confirmation-required');
                },
                (response) => {

                    // Re-enable the form
                    this.registroUsuarioForm.enable();

                    // Reset the form
                    this.signUpNgForm.resetForm();

                    // Set the alert
                    this.alert = {
                        type   : 'error',
                        message: 'Something went wrong, please try again.'
                    };

                    // Show the alert
                    this.showAlert = true;
                }
            );
    }
}

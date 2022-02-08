import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { ParametrosRequest } from 'app/_bussines_model/parametros';
import { AutorizacionService } from 'app/_bussines_services/autorizacion-services';
import { emailValidator } from '../app-validators';
import Swal from 'sweetalert2';
import { TokenStorageService } from 'app/_bussines_services/token-storage.service';

@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AuthSignInComponent implements OnInit
{

    parametrosRequest:ParametrosRequest;
    inicioSesionForm: FormGroup;
    isLoggedIn = false;
    isLoginFailed = false;
    roles: string[] = [];
    errorMessage = '';




    @ViewChild('signInNgForm') signInNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type   : 'success',
        message: ''
    };

    

    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(

        private _autorizacionService:AutorizacionService,
        private _formBuilder: FormBuilder,
        private tokenStorage: TokenStorageService,
        private _router: Router,   
        
    ) {   }

    /**
     * On init
     */
    ngOnInit(): void
    {
       

        this.inicioSesionForm = this._formBuilder.group({
            'email': ['', Validators.compose([Validators.required, emailValidator])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])] 
          });
    }

    public inicioSesion() {

        if (this.inicioSesionForm.valid) {

            this.parametrosRequest = new ParametrosRequest();
            this.parametrosRequest.correo = this.inicioSesionForm.get('email').value;
            this.parametrosRequest.pass = this.inicioSesionForm.get('password').value;
            this.parametrosRequest.username = 'USER';

            this._autorizacionService.iniciarSesion(this.parametrosRequest).subscribe(
                data => {
        
                if(data.valor == 0){
        
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: data.mensaje ,
                        showConfirmButton: false,
                        timer: 2000
                        })
        
                }else if(data.valor == 1){
        
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: data.mensaje ,
                        showConfirmButton: false,
                        timer: 2000
                        })
        
                }else {
        
                    this.tokenStorage.saveToken(data.token);
                    this.tokenStorage.saveUser(data);
            
                    this.isLoginFailed = false;
                    this.isLoggedIn = true;
                    this.roles = this.tokenStorage.getUser().roles;
                    window.location.reload();
                    
                    this._router.navigate(['/'])
                    
                }
                },
                err => {
        
                this.errorMessage = err.error.message;
                this.isLoginFailed = true;
        
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'ERROR, AL INICIAR SESION!!!' ,
                    showConfirmButton: false,
                    timer: 2000
                    })
                }
            );
            }
      }
}

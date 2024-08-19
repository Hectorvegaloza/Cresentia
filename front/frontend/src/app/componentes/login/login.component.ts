import { Component, inject  } from '@angular/core';
import {
  ReactiveFormsModule,   //// para usar fromularios reactivos en angular
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Credential } from '../../interface/credential';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from '../../service/login.service';
import { ToastrService } from 'ngx-toastr';
import Swal from'sweetalert2';
import { RouterLink } from '@angular/router';
const jwtHelperService = new JwtHelperService();

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink], // este modulo se debe importar
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);
  loginService: LoginService = inject(LoginService);
  toastrService = inject(ToastrService);
  credentialsForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  handleSubmit() {
    
    if (this.credentialsForm.valid) {   /* valida que los datos enviados sean correctos  */
      const username = this.credentialsForm.value.username;
      const password = this.credentialsForm.value.password;
      /* si son validos se debe de validar que sean string y haya datos */
      if (typeof username === 'string' && typeof password === 'string') {
        const credential: Credential = {
          username,
          password,
        };
        
        this.loginService.login(credential).subscribe((response: any) => {
          //console.log('response: ', response);
          //const decoded = jwtHelperService.decodeToken(response.datos);
          //console.log('decoded: ', decoded);
          if (response.resultado === 'bien') {
            localStorage.setItem('token', response.datos);

            if(username==="administrador@gmail.com"&& password==="Clave123@" ){
              this.router.navigateByUrl('/book-form');}
            else{
                     this.router.navigateByUrl('/shop');
                     Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Haz iniciado Sesión",
                      showConfirmButton: false,
                      timer: 1500
                    });
    
            }         

          
        
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Datos erroneos!, Revisa tus credenciales",
            /* footer: '<a href="#">Why do I have this issue?</a>' */
          });
          }
        });
      }
    } else {
      Swal.fire({
        title: "¿Inicias Sesión?",
        text: "Todos los campos son obligatorios",
        icon: "question"
      });
    }
  }
  ngOnInit (){
    localStorage.removeItem("FINAL")
  }
}
/* 
          
         
        });
      }
    } else {
      this.toastrService.info('Credenciales invalidas', '¡Revise los datos de ingreso!', {
        positionClass: 'toast-top-center',
        timeOut: 1000, 
        closeButton: true 
    }); 
    }
  }
}
 */
import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CrearserviceService } from '../../service/crearuser.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-crearcuenta',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crearcuenta.component.html',
  styleUrl: './crearcuenta.component.css'
})
export class CrearcuentaComponent {
  registrationForm: FormGroup;
  registrationSuccess = false;

  toastrservice = inject(ToastrService);
  privateRouter = inject(Router);

  constructor(private CrearserviceService: CrearserviceService, private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', Validators.required],
      contraseniaconfirm: ['', Validators.required],
    });
  }

  onSubmit() {
    const formData = this.registrationForm.value;
    if (this.registrationForm?.valid) {
        this.CrearserviceService.createUser(formData)
          .subscribe((response) => {
            if (response.resultado === 'bien') {
              console.log('User created successfully:', response.datos);
              this.registrationSuccess = true;
              this.toastrservice.success(
                '¡Usuario creado exitosamente!'
              );
              this.privateRouter.navigate(['/login']);
            } else {
              console.error('Error creating user:', response.mensaje);
              console.log('error: ', Error);
              this.toastrservice.error(
              'Hubo un error al crear el usuario'
            );}
          });
    } else {
      // Mostrar una alerta general indicando que el formulario no es válido
      this.toastrservice.error('Por favor, completa todos los campos correctamente.');
    }


  }

}

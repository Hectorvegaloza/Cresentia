import { Component,inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../service/login.service';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crearnombrefoto',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './crearnombrefoto.component.html',
  styleUrl: './crearnombrefoto.component.css'
})
export class CrearnombrefotoComponent {

    
  ngOnInit(){
  }

  url: string = "../../../assets/fondoprofile.png";

  onselectFile(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input && input.files && input.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(input.files[0]);
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.url = (e.target as FileReader).result as string;
      };
    }
  }


  

  toastrService = inject(ToastrService);
  loginService = inject(LoginService);
  adminService = inject(AdminService);
  router: Router = inject(Router); 

  nombre: string = ''; 
  apodo: string = '';
  foto: File | null = null;

  books: any[] = [];
  border: any;

  inputFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.foto = event.target.files[0];
    }
  }

  handleSubmit() {
    if (this.foto) {
      this.adminService
        .createBook(
          this.nombre,
          this.apodo,
          this.foto
        )

        .subscribe({
          next: (response: any) => {
            console.log("respuesta: ", response)
            if (response.resultado == "successful") {
              let timerInterval;
              Swal.fire({
                title: "Creado correctamente",
                html: "Felicidades",
                timer: 3000,
                timerProgressBar: true,
                didOpen: () => {
                  this.router.navigate(['/Crearcuenta'])
                }
              }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                  console.log("I was closed by the timer");
                }
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Se produjo un error al crear el usuario",
               
              });
            }
          },
          error: (error: any) => {
            console.error('Se produjo un error al crear el libro:', error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Se produjo un error al crear el usuario",
             
            });          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios!",
       
      });
    }
  }

/*   handleClickViewBooks() {
    this.router.navigate(['/admin']); 
  }

  handleClickViewBooks1() {
    this.router.navigate(['/home']); 
  }
   */
/*   ngOnInit() {
    const token: any = localStorage.getItem('token');
    if (token) { 
      this.loginService.validateToken(token).subscribe((response: any) => {
        console.log("response: ", response)
        if (response.resultado === 'bien') {
          this.name = response.datos.name;
          this.toastrService.success(`Hola, ${this.name}!`);
        } else {
          this.loginService.logout();
        }
      });
    } else {
      this.loginService.logout();
    }
  } */
}

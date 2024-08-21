import { Component, OnInit, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../service/login.service';
import { AdminService } from '../../service/admin.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';



@Component({
  selector: 'app-leernombre',
  standalone: true,
  imports: [FormsModule, CommonModule, NgxPaginationModule],
  templateUrl: './leernombre.component.html',
  styleUrl: './leernombre.component.css'
})
export class LeernombreComponent implements OnInit{
  

  router: Router = inject(Router); 

  nombre: string = ''; 
  apodo: string = '';
  foto: File | null = null;
  books: any[] = [];
  p: number = 1;


  constructor(
    private toastrService: ToastrService,
    private loginService: LoginService,
    private adminService: AdminService,
/*     private modalService: NgbModal */
  ) {}
  ngOnInit(){
    this.adminService.getuser().subscribe(
      (response) => {
        console.log("response: ", response)
        if (response.datos) {
          this.books = response.datos;
          console.log(this.books);
          // this.setPage(1); .
        } else {
          this.toastrService.error('Se produjo un error al obtener los libros');
          console.error('Error en la respuesta:', response);
        }
      },
     (error: any) => {
        console.error('Se produjo un error al obtener los libros:', error);
        this.toastrService.error('Se produjo un error al obtener los libros');
      }
    );
  }
/*   fetchBooks() {
    this.adminService.getBooks().subscribe({
      next: (response: any) => {
        console.log("response: ", response)
        if (response.resultado === 'successful' && response.datos) {
          this.books = response.datos;
          // this.setPage(1); .
        } else {
          this.toastrService.error('Se produjo un error al obtener los libros');
          console.error('Error en la respuesta:', response);
        }
      },
      error: (error: any) => {
        console.error('Se produjo un error al obtener los libros:', error);
        this.toastrService.error('Se produjo un error al obtener los libros');
      }
    });
  } */
  trackByIndex(index: number, item: any): number {
    return index;
  }

}

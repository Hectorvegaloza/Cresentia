import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  httpClient = inject(HttpClient);

  API_URL = 'http://localhost:3000/perfil';

  createBook(
    nombre: string, 
    apodo: string, 
    foto: File
  ): Observable<any> {
    const formData = new FormData();
    formData.append("nombre", nombre); 
    formData.append("apodo", apodo);
    formData.append("foto", foto);

    console.log('Form data being sent:', {
      nombre, apodo, foto
    });

    return this.httpClient.post(this.API_URL, formData);
  }

  getuser(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }
/* 
  updateBook(id: string, updatedBookData: any): Observable<any> {
    return this.httpClient.put(`${this.API_URL}/${id}`, updatedBookData);
  }

  deleteBook(id: string): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  } */
}
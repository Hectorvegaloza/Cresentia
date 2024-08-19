import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../interface/crearuser.js';

@Injectable({
  providedIn: 'root'
})

export class CrearserviceService {
  constructor(private http: HttpClient) {}

  createUser(userData: UserData) {
    const apiUrl = 'http://localhost:3000/crearcuenta'; 
    return this.http.post<any>(apiUrl, userData);
}

}
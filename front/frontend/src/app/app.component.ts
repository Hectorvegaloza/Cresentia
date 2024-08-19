import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrearcuentaComponent } from "./componentes/crearcuenta/crearcuenta.component";
import { LoginComponent } from './componentes/login/login.component';


import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, CrearcuentaComponent, NgxPaginationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
}

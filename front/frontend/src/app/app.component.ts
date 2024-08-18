import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrearcuentaComponent } from "./componentes/crearcuenta/crearcuenta.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrearcuentaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}

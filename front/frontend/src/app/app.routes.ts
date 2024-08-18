import { Routes } from '@angular/router';
import { CrearcuentaComponent } from './componentes/crearcuenta/crearcuenta.component';
import { LoginComponent } from './componentes/login/login.component';

export const routes: Routes = [
    {path: 'Crearcuenta', title: "Crearcuenta",component: CrearcuentaComponent},
    {path: 'login', title: "login",component: LoginComponent},
/*     {path: '', redirectTo: 'home', pathMatch: 'full'}, //redireccionar un componente al Usuario, cuando no ponga una ruta me redirija a la ruta home
    */ /* {path:'**', title: "page no encontrada", component: PagenofountComponent}//quiero que verifique si esta entrando a otras rutas 
 */
];

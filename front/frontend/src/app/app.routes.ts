import { Routes } from '@angular/router';
import { CrearcuentaComponent } from './componentes/crearcuenta/crearcuenta.component';
import { LoginComponent } from './componentes/login/login.component';
import { EleccionComponent } from './componentes/eleccion/eleccion.component';
import { AntepaginaComponent } from './componentes/antepagina/antepagina.component'; 
import { AntepaginaadultosComponent } from './componentes/antepaginaadultos/antepaginaadultos.component';
import { AntepaginafamiliaComponent } from './componentes/antepaginafamilia/antepaginafamilia.component';


export const routes: Routes = [
    {path: 'Crearcuenta', title: "Crearcuenta",component: CrearcuentaComponent},
    {path: 'login', title: "login",component: LoginComponent},
    {path: 'Elije', title: "Elije",component: EleccionComponent},
    {path: 'Antepagina', title: "Antepagina",component: AntepaginaComponent},
    {path: 'Antepaginaadultos', title: "Antepaginaadultos",component: AntepaginaadultosComponent},
    {path: 'Antepaginafamilia', title: "Antepaginafamilia",component: AntepaginafamiliaComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}, //redireccionar un componente al Usuario, cuando no ponga una ruta me redirija a la ruta home
     /* {path:'**', title: "page no encontrada", component: PagenofountComponent}//quiero que verifique si esta entrando a otras rutas 
 */
];

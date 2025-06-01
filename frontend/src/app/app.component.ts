import { UserInfo } from './service/userInfo.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  user: IUser[]=[
    {
    "id": "u001",
    "nombres": "Ana",
    "apellidos": "Rivas Soto",
    "rut": "13.456.789-0",
    "fechaNacimiento": "1992-07-10",
    "direccion": "Calle Los Pinos 134",
    "comuna": "San Miguel",
    "telefono": "+56912345678",
    "email": "ana.rivas@example.com",
    "fechaRegistro": "2024-05-10",
    "activo": true,
    "tipo": "jefe_programa",
    "credenciales": {
      "usuario": "anar",
      "hashPassword": "hash123"
    },
    "permisos": "editar_programa,ver_reportes",

  },{
    "id": "u002",
    "nombres": "Pedro",
    "apellidos": "Morales Díaz",
    "rut": "17.222.333-1",
    "fechaNacimiento": "1989-11-03",
    "direccion": "Av. Independencia 501",
    "comuna": "Independencia",
    "telefono": "+56998765432",
    "email": "pedro.morales@example.com",
    "fechaRegistro": "2024-06-12T15:45:00Z",
    "activo": false,
    "tipo": "funcionario",
    "credenciales": {
      "usuario": "pedrom",
      "hashPassword": "hash456"
    },
    "permisos": "ver_programa",

  },
  {
    "id": "u003",
    "nombres": "Camila",
    "apellidos": "Fuentes Rojas",
    "rut": "19.999.888-7",
    "fechaNacimiento": "1997-03-25",
    "direccion": "Pasaje Las Palmeras 90",
    "comuna": "La Florida",
    "telefono": "+56966554433",
    "email": "camila.fuentes@example.com",
    "fechaRegistro": "2025-01-20T09:00:00Z",
    "activo": true,
    "tipo": "consulta_general",
    "credenciales": {
      "usuario": "camilaf",
      "hashPassword": "hash789"
    },
    "permisos": "ver_programa",

  }
]


}

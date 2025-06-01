import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];  // Lista de usuarios
  selectedUser: any = null;  // Usuario seleccionado para editar
  isEdit: boolean = false; // Variable para saber si estamos en modo edición

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }


  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error al cargar los usuarios', error);
      }
    );
  }


  saveUser(): void {
    if (this.isEdit) {
      this.updateUser(this.selectedUser.id, this.selectedUser);  // Actualizar usuario
    } else {
      this.createUser(this.selectedUser);  // Crear nuevo usuario
    }
  }


  createUser(user: any): void {
    console.log("Creando usuario:", user);
    this.userService.createUser(user).subscribe(
      (newUser) => {

        if (!this.users.some(u => u.id === newUser.id)) {
          this.users.push(newUser);
        }
        this.resetForm();
      },
      (error) => {
        console.error('Error al crear el usuario', error);
      }
    );
  }


  updateUser(id: number, updatedUser: any): void {
    this.userService.updateUser(id, updatedUser).subscribe(
      (updated) => {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
          this.users[index] = updated;
        }
        this.resetForm();
      },
      (error) => {
        console.error('Error al actualizar el usuario', error);
      }
    );
  }

  // Eliminar un usuario
  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.users = this.users.filter(user => user.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el usuario', error);
      }
    );
  }


  selectUser(user: any): void {
    this.selectedUser = { ...user };
    this.isEdit = true;
  }


  resetForm(): void {
    this.selectedUser = null;
    this.isEdit = false;  
  }

  // Mostrar formulario de nuevo usuario
  createNewUser(): void {
    this.selectedUser = {};  // Limpiar los campos
    this.isEdit = false;  // Habilitar el modo de creación
  }
}

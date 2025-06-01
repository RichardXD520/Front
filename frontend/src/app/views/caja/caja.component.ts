import { Component } from '@angular/core';

interface MovimientoCaja {
  fecha: Date;
  tipo: 'Ingreso' | 'Egreso';
  monto: number;
  descripcion: string;
}

interface Caja {
  id: number;
  abierta: boolean;
  movimientos: MovimientoCaja[];
  fechaApertura: Date;
  fechaCierre?: Date;
  montoApertura: number;
}

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent {
  cajas: Caja[] = [];
  cajaActual: Caja | null = null;

  // Variables para el formulario
  cajaAbierta = false;
  montoApertura: number = 0;
  tipoMovimiento: 'Ingreso' | 'Egreso' = 'Ingreso';
  montoMovimiento: number = 0;
  descripcionMovimiento: string = '';

  abrirCaja() {
    if (this.montoApertura > 0) {
      const nuevaCaja: Caja = {
        id: Date.now(),
        abierta: true,
        movimientos: [{
          fecha: new Date(),
          tipo: 'Ingreso',
          monto: this.montoApertura,
          descripcion: 'Apertura de caja'
        }],
        fechaApertura: new Date(),
        montoApertura: this.montoApertura
      };
      this.cajas.push(nuevaCaja);
      this.cajaActual = nuevaCaja;
      this.cajaAbierta = true;
      this.montoApertura = 0;
    } else {
      alert('Ingrese un monto de apertura válido');
    }
  }

  registrarMovimiento() {
    if (!this.cajaActual || !this.cajaActual.abierta) {
      alert('Debe abrir la caja primero');
      return;
    }
    if (this.montoMovimiento > 0 && this.descripcionMovimiento.trim() !== '') {
      this.cajaActual.movimientos.push({
        fecha: new Date(),
        tipo: this.tipoMovimiento,
        monto: this.montoMovimiento,
        descripcion: this.descripcionMovimiento
      });
      this.montoMovimiento = 0;
      this.descripcionMovimiento = '';
      this.tipoMovimiento = 'Ingreso';
    } else {
      alert('Complete todos los campos del movimiento');
    }
  }

  cerrarCaja() {
    if (!this.cajaActual || !this.cajaActual.abierta) {
      alert('La caja ya está cerrada');
      return;
    }
    this.cajaActual.abierta = false;
    this.cajaActual.fechaCierre = new Date();
    this.cajaAbierta = false;
    this.cajaActual = null;
    alert('Caja cerrada correctamente');
  }

  reabrirCaja(caja: Caja) {
    if (confirm('¿Seguro que desea reabrir esta caja?')) {
      caja.abierta = true;
      caja.fechaCierre = undefined;
      this.cajaActual = caja;
      this.cajaAbierta = true;
    }
  }

  seleccionarCaja(caja: Caja) {
    this.cajaActual = caja;
    this.cajaAbierta = caja.abierta;
  }

  borrarCaja(id: number) {
    this.cajas = this.cajas.filter(caja => caja.id !== id);
    if (this.cajaActual && this.cajaActual.id === id) {
      this.cajaActual = null;
      this.cajaAbierta = false;
    }
  }

  // Para mostrar los movimientos en la tabla
  get movimientos() {
    return this.cajaActual ? this.cajaActual.movimientos : [];
  }

  eliminarMovimiento(index: number) {
    if (!this.cajaActual || !this.cajaActual.abierta) return;
    if (confirm('¿Seguro que desea eliminar este movimiento?')) {
      this.cajaActual.movimientos.splice(index, 1);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  standalone: false
})
export class TareasComponent implements OnInit {

  tareas: any[] = [];

  nuevaTarea = {
    id: 0,
    titulo: '',
    descripcion: '',
    prioridad: '',
    completada: false
  };

  constructor(private tareaService: TareaService,
     private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.cargarTareas();
  }

  cargarTareas() {
    this.tareaService.obtenerTareas().subscribe(data => {
      this.tareas = data;
    });
  }

    async mostrarToast(mensaje: string, color: string = 'success') {
      const toast = await this.toastCtrl.create({
        message: mensaje,
        duration: 1500,
        color: color,
        position: 'bottom'
      });

      await toast.present();
    }

  agregarTarea() {

    if (!this.nuevaTarea.titulo || 
        !this.nuevaTarea.descripcion || 
        !this.nuevaTarea.prioridad) {
      alert('Completa todos los campos');
      return;
    }

    this.nuevaTarea.id = Date.now();

    this.tareaService.crearTarea(this.nuevaTarea).subscribe(() => {
      this.cargarTareas();
      this.nuevaTarea = {
        id: 0,
        titulo: '',
        descripcion: '',
        prioridad: '',
        completada: false
      };
    });
} 

  completar(tarea: any) {
    this.tareaService.completarTarea(tarea.id).subscribe(() => {
      this.cargarTareas();
      this.mostrarToast('Tarea completada ✔', 'success');
    });
  }

  eliminar(tarea: any) {
    this.tareaService.eliminarTarea(tarea.id).subscribe(() => {
      this.cargarTareas();
      this.mostrarToast('Tarea eliminada 🗑', 'danger');
    });
  }
}
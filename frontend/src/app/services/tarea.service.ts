import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  apiUrl = 'http://localhost:8000/tareas';

  constructor(private http: HttpClient) {}

  obtenerTareas() {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearTarea(tarea: any) {
    return this.http.post(this.apiUrl, tarea);
  }

    completarTarea(id: number) {
    return this.http.put(`${this.apiUrl}/${id}`, {});
  }

  eliminarTarea(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
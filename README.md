# 📝 Sistema de Tareas Priorizadas

---

## Tecnologías

### Backend:
- FastAPI
- Python
- Pydantic
- CORS Middleware

### Frontend:
- Ionic
- Angular
- TypeScript
- HttpClient

---

## Requisitos 

- Node.js >= 20.19
- npm >= 9
- Angular CLI compatible

---

## Funcionalidades

### Backend:
- Crear tareas
- Listar tareas ordenadas por prioridad (alta → baja)
- Marcar tareas como completadas
- Eliminar tareas

### Frontend:
- Crear tareas desde formulario
- Visualizar tareas dinámicamente
- Swipe táctil para:
  - ✔ Completar tarea
  - 🗑 Eliminar tarea
- Notificaciones tipo toast

---

##  Accesos del proyecto

### 🔧 Backend (FastAPI)

``` Visual Studio Code Terminal -> New Terminal
cd backend

python -m venv venv

# Activar entorno virtual (Windows)
venv\Scripts\activate

# Instalar dependencias
pip install fastapi uvicorn pydantic

# Ejecutar backend
uvicorn main:app --reload
```
### Acceso backend
- http://127.0.0.1:8000
- http://127.0.0.1:8000/docs

---

###  Frontend (Ionic Angular)

```Visual Studio Code Terminal -> New Terminal
cd frontend
npm install
ionic serve


```

### Acceso frontend:
- http://localhost:8100

### Acceso desde dispositivo móvil (misma red WiFi)
ionic serve --external
- http://TU_IP_LOCAL:8100


### Docker (opcional) 
Este proyecto también puede ejecutarse con Docker.
Requisitos
    Docker instalado
    Docker Compose habilitado

Ejecutar todo el sistema:
docker-compose up --build
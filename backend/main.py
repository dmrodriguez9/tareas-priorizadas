from fastapi import FastAPI
from models import Tarea
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

tareas = []

def ordenar_tareas():
    prioridad_orden = {
        "alta": 1,
        "media": 2,
        "baja": 3
    }
    return sorted(tareas, key=lambda x: prioridad_orden[x.prioridad])

@app.get("/")
def inicio():
    return {"mensaje": "API de tareas funcionando"}

@app.get("/tareas")
def obtener_tareas():
    return ordenar_tareas()

@app.post("/tareas")
def crear_tarea(tarea: Tarea):
    tareas.append(tarea)
    return {"mensaje": "Tarea creada", "tarea": tarea}

@app.put("/tareas/{tarea_id}")
def completar_tarea(tarea_id: int):
    for tarea in tareas:
        if tarea.id == tarea_id:
            tarea.completada = True
            return {"mensaje": "Tarea completada"}
    return {"error": "Tarea no encontrada"}

@app.delete("/tareas/{tarea_id}")
def eliminar_tarea(tarea_id: int):
    global tareas
    tareas = [t for t in tareas if t.id != tarea_id]
    return {"mensaje": "Tarea eliminada"}
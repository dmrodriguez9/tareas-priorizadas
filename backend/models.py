from pydantic import BaseModel
from enum import Enum

class Prioridad(str, Enum):
    alta = "alta"
    media = "media"
    baja = "baja"

class Tarea(BaseModel):
    id: int
    titulo: str
    descripcion: str
    prioridad: Prioridad
    completada: bool = False
from sqlalchemy.orm import Session
from .models import Usuario
from .schemas import UsuarioCreate

def get_usuarios(db: Session):
    return db.query(Usuario).all()

def create_usuario(db: Session, usuario: UsuarioCreate):
    db_usuario = Usuario(**usuario.dict())
    db.add(db_usuario)
    db.commit()
    db.refresh(db_usuario)
    return db_usuario

import { createAction, props } from "@ngrx/store";
import { Payload } from "src/app/models/payload.model";
import { Usuario } from "src/app/models/usuario.model";

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');
export const cargarUsuariosSuccess = createAction(
    '[Usuarios] Cargar Usuarios Success',
    props<{ usuarios: Usuario[] }>()
);
export const cargarUsuariosError = createAction(
    '[Usuarios] Cargar Usuarios Error',
    props<{ payload: Payload }>()
);
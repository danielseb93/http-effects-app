import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Payload } from 'src/app/models/payload.model';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})

export class ListaComponent implements OnInit {
  error: Payload | undefined;
  loading: boolean = false;
  usuarios: Usuario[] = [];
  
  constructor( private store: Store<AppState> ){}

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(({ error, loading, users }) =>{
      this.error = error;
      this.loading = loading;
      this.usuarios = users;
    })
    this.store.dispatch( cargarUsuarios() );
  }
}

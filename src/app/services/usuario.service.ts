import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUserById(id: string) {
    return this.http.get(`${this.url}/users/${id}`)
      .pipe(
        map((res: any) => res['data'])
      );
  }

  getUsers() {
    return this.http.get(`${this.url}/users?page=1&per_page=5&delay=3`)
      .pipe(
        map((res: any) => res['data'])
      );
  }
}
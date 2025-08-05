import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Livro } from '../models/livro.interface';

@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  private readonly _urlApi = environment.urlApi;
  private readonly _http = inject(HttpClient);

  public buscarLivros(): Observable<Livro[]> {
    return this._http.get<Livro[]>(`${this._urlApi}/livros`);
  }

  public buscarLivro(id: number): Observable<Livro> {
    return this._http.get<Livro>(`${this._urlApi}/livros/${id}`);
  }

  public criarLivro(dto: Livro): Observable<Livro> {
    return this._http.post<Livro>(`${this._urlApi}/livros`, dto);
  }

  public atualizarLivro(id: number, dto: Livro): Observable<Livro> {
    return this._http.put<Livro>(`${this._urlApi}/livros/${id}`, dto);
  }

  public removerLivro(id: number): Observable<Livro> {
    return this._http.delete<Livro>(`${this._urlApi}/livros/${id}`);
  }
}

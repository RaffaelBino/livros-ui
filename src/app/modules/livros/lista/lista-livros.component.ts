import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Livro } from '../models/livro.interface';
import { LivrosService } from '../services/livros.service';

@Component({
  selector: 'app-lista-livros',
  imports: [
    CurrencyPipe,
    DatePipe,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.scss',
})
export class ListaLivrosComponent implements OnInit {
  public livros = signal<Livro[]>([]);
  private readonly _livrosService = inject(LivrosService);

  public ngOnInit(): void {
    this._carregarLivros();
  }

  public deletarLivro(id: number) {
    this._livrosService.removerLivro(id).subscribe({
      complete: () => {
        this._carregarLivros();
      },
    });
  }

  private _carregarLivros(): void {
    this._livrosService.buscarLivros().subscribe({
      next: (lista) => this.livros.set(lista),
    });
  }
}

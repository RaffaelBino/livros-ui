import { Component, input, OnInit } from '@angular/core';
import { ComumFormularioComponent } from '../../../shared/comum-formulario/comum-formulario.component';
import { FormularioLivrosComponent } from '../formulario/formulario-livros.component';
import { Livro } from '../models/livro.interface';

@Component({
  selector: 'app-editar-livro',
  imports: [FormularioLivrosComponent],
  templateUrl: './editar-livro.component.html',
  styleUrl: './editar-livro.component.scss',
})
export class EditarLivroComponent
  extends ComumFormularioComponent
  implements OnInit
{
  public idLivro = input<number>();
  public livro!: Livro;

  public ngOnInit(): void {
    this.livrosService.buscarLivro(this.idLivro() ?? NaN).subscribe({
      next: (livro) => (this.livro = livro),
    });
  }

  public editarLivro(livro: Livro): void {
    this.livrosService.atualizarLivro(livro.id ?? NaN, livro).subscribe({
      complete: () => {
        this.router.navigate(['']);
      },
    });
  }
}

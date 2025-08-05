import { Component } from '@angular/core';
import { ComumFormularioComponent } from '../../../shared/comum-formulario/comum-formulario.component';
import { FormularioLivrosComponent } from '../formulario/formulario-livros.component';
import { Livro } from '../models/livro.interface';

@Component({
  selector: 'app-cadastrar-livro',
  imports: [FormularioLivrosComponent],
  templateUrl: './cadastrar-livro.component.html',
  styleUrl: './cadastrar-livro.component.scss',
})
export class CadastrarLivroComponent extends ComumFormularioComponent {
  public cadastrarLivro(livro: Livro): void {
    this.livrosService.criarLivro(livro).subscribe({
      complete: () => {
        this.router.navigate(['']);
      },
    });
  }
}

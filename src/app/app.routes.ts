import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./modules/livros/lista/lista-livros.component').then(
        (c) => c.ListaLivrosComponent
      ),
  },
  {
    path: 'novo-livro',
    loadComponent: () =>
      import('./modules/livros/cadastrar/cadastrar-livro.component').then(
        (c) => c.CadastrarLivroComponent
      ),
  },
  {
    path: 'atualizar-livro/:idLivro',
    loadComponent: () =>
      import('./modules/livros/editar/editar-livro.component').then(
        (c) => c.EditarLivroComponent
      ),
  },
];

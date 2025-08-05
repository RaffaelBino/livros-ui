import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LivrosService } from '../../modules/livros/services/livros.service';
import { Crud } from '../enums/crud.enum';

@Component({
  selector: 'app-comum-formulario',
  template: '',
})
export class ComumFormularioComponent {
  protected readonly crud = Crud;

  protected readonly router = inject(Router);
  protected readonly livrosService = inject(LivrosService);
}

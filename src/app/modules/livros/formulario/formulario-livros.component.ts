import { Component, effect, inject, input, output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Crud } from '../../../shared/enums/crud.enum';
import { Livro } from '../models/livro.interface';

@Component({
  selector: 'app-formulario-livros',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './formulario-livros.component.html',
  styleUrl: './formulario-livros.component.scss',
})
export class FormularioLivrosComponent {
  public operacaoCrud = input.required<Crud>();
  public livro = input<Livro>();
  public submeterFormulario = output<Livro>();

  public crud = Crud;
  public formulario!: FormGroup;

  private readonly _formBuilder = inject(FormBuilder);

  constructor() {
    effect(() => {
      if (this.livro()) {
        this.formulario.patchValue({
          ...this.livro(),
        });
      }
    });
  }

  public ngOnInit() {
    this._criarFormulario();

    if (this.operacaoCrud() === this.crud.EDITAR) {
      this.formulario.setControl('id', new FormControl([null]));
    }
  }

  public onSubmit(): void {
    this.submeterFormulario.emit(this.formulario.getRawValue());
  }

  private _criarFormulario(): void {
    this.formulario = this._formBuilder.group({
      titulo: [null],
      isbn: [null],
      preco: [null],
      dataPublicacao: [null],
      autorId: [crypto.getRandomValues(new Uint32Array(10))[0]],
    });
  }
}

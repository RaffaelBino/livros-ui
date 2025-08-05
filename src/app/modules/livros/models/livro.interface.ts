export interface Livro {
  id: number;
  titulo: string;
  isbn: string;
  preco: number;
  dataPublicacao: string | Date;
  autorId: number;
}

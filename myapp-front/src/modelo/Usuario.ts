export class Usuario {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public senha: string,
    public cpf: string,
    public alterEgo?: string
  ) { }
}
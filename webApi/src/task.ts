export class Cliente {

    private _id: number = 0;
    private _nome: string = "";
    private _endereco: string = "";

    public get id(): number {
        return this._id;
    }
    private set id(value: number) {
        this._id = value;
    }

    public get nome(): string {
        return this._nome;
    }
    private set nome(value: string) {
        this._nome = value;
    }
    
    public get endereco(): string {
        return this._endereco;
    }
    private set endereco(value: string) {
        this._endereco = value;
    }

    constructor(id: number, nome: string, endereco: string) {
        this.validar(id, nome, endereco)
        this.id = id
        this.nome = nome
        this.endereco = endereco
    }

    public update(id: number, nome: string, endereco: string) {
        this.validar(id, nome, endereco)
        this.id = id
        this.nome = nome
        this.endereco = endereco
    }

    private validar(id: number, nome: string, endereco: string) {
        if (id <= 0) {
            throw new Error("O id precisa ser maior que 0");
        }

        if (nome === null || nome === '') {
            throw new Error("O Nome e requerido");
        }

        if (nome.length < 3) {
            throw new Error("O nome deve ter no minimo 3 chars");
        }

        if (nome.length > 100) {
            throw new Error("O nome excedeu 100 chars");
        }
    }

}



export class Projeto {

    private _nome?: string;
    public get nome(): string {
        return this._nome;
    }
    public set nome(v: string) {
        this._nome = v;
    }


    private _data?: Date;
    public get data(): Date {
        return this._data;
    }
    public set data(v: Date) {
        this._data = v;
    }

    private _descricao?: string;
    public get descricao(): string {
        return this._descricao;
    }
    public set descricao(v: string) {
        this._descricao = v;
    }

    private _link?: string;
    public get link() : string {
        return this._link;
    }
    public set link(v : string) {
        this._link = v;
    }

    constructor() {}
    // constructor(p: Projeto) { }

}

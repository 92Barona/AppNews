//Declaramos estructura de la clase noticia
export class New {
    _id: string;
    name: string;
    description: string;
    archived: boolean;
    dateArchived: Date;

    constructor(id: string, name: string, description: string) {
      this._id = id;
      this.name = name;
      this.description = name;
      this.archived = false;
    }
  }

export interface IEntity {
    id?: number;
}

export abstract class Entity implements IEntity {
    public id?: number;
}

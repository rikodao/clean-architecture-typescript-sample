import { IEntity } from 'src/services/entities/Entity';

export interface IRepository  {
    getAll?(): Promise<IEntity[]>;
    create?(user: IEntity): Promise<IEntity>;
    update?(user: IEntity): Promise<IEntity>;
    delete?(id: number): Promise<IEntity>;
}

export abstract class Repository implements IRepository {
    getAll?(): Promise<IEntity[]>;
    create?(user: IEntity): Promise<IEntity>;
    update?(user: IEntity): Promise<IEntity>;
    delete?(id: number): Promise<IEntity>;
}

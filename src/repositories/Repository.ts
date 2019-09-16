import { IEntity } from 'src/entities/Entity';

export interface IRipository  {
    getAll?(): Promise<IEntity[]>;
    create?(user: IEntity): Promise<IEntity>;
    update?(user: IEntity): Promise<IEntity>;
    delete?(id: number): Promise<IEntity>;
}

export abstract class Ripository implements IRipository {
    getAll?(): Promise<IEntity[]>;
    create?(user: IEntity): Promise<IEntity>;
    update?(user: IEntity): Promise<IEntity>;
    delete?(id: number): Promise<IEntity>;
}

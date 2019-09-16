import { IEntity } from 'src/entities/Entity';

export interface IUsecase  {
}

export  abstract class Usecase implements IUsecase{
    constructor(entity: IEntity) {
    }
}

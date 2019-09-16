import { Entity } from '../Entity';

export interface IUser  {
    id?: number;
    name: string;
    email: string;
}

export class UserEntity extends Entity implements IUser {
    public id?: number;
    public name: string;
    public email: string;

    constructor(user: IUser) {
        super()
        this.name = user.name;
        this.email = user.email;
    }
}

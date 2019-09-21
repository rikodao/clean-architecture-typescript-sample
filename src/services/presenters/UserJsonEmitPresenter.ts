import { IUserPresenter } from "../usecases/adapters/presenters/IUserPresenter";
import { UserEntity } from "src/services/entities/User/UserEntity";
import { EventEmitter } from 'events';
export const userListEvent = new EventEmitter;

export class UserJsonEmitPresenter implements IUserPresenter {
    constructor() {
    }


    presentUser(user: UserEntity): void {
        console.log('presentUser',user);
        userListEvent.emit('user', user);
    }
    presentUserList(users: UserEntity[]): void {
        console.log('presentUserList');
        
        userListEvent.emit('userList', users);
    }

}
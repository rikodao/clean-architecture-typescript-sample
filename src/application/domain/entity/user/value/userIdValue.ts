import { v4 as uuidv4 } from 'uuid';
export default class UserIdValue {
    private _id: string
    constructor() {
        this._id = uuidv4()
    }

    public get value(): string {
        return this._id
    }

}
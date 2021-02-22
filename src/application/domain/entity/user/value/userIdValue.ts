import { v4 as uuidv4 } from 'uuid';
export default class UserIdValue {
    private _id: string
    constructor(id?: string) {
        this._id = id || uuidv4()
        if (this._id.length !== 36) {
            throw new Error(`不正なID値です: ${this._id}`);
        }
    }

    public get value(): string {
        return this._id
    }

}
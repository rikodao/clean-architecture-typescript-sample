import Id from "./value/userIdValue";
import Age from "./value/userAgeValue";
import Name from "./value/userNameValue";
import { stringify } from "uuid";
export default class UserEntity {
    private _id: Id
    private _name: Name
    private _age: Age


    constructor(params: { family: string, first: string, age: number }) {
        try {
            this.name = params
            this.age = params.age
        } catch (error) {
            throw error
        }
        this._id = new Id()
    }

    set age(age: number) {
        try {
            this._age = new Age(age)
        } catch (error) {
            throw error
        }
    }

    set name(params: { first: string, family: string }) {
        try {
            this._name = new Name(params)
        } catch (error) {
            throw error
        }
    }

    get value(): { id: string, name: string, age: number } {
        return { id: this._id.value, name: this._name.value, age: this._age.value }
    }
}
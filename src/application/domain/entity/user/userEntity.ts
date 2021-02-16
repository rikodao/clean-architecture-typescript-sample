import Id from "./value/userIdValue";
import Age from "./value/userAgeValue";
import Name from "./value/userNameValue";
import { stringify } from "uuid";
import { UserData } from "../../../types";
export default class UserEntity {
    private _id: Id
    private _familyName: Name
    private _firstName: Name
    private _age: Age


    constructor(params: { familyName: string, firstName: string, age: number }) {
        try {
            this.familyName = params.familyName
            this.firstName = params.firstName
            this.age = params.age
        } catch (error) {
            throw error
        }
        this._id = new Id()
    }

    private set age(age: number) {
        try {
            this._age = new Age(age)
        } catch (error) {
            throw error
        }
    }

    private set firstName(firstName: string) {
        try {
            this._firstName = new Name(firstName)
        } catch (error) {
            throw error
        }
    }

    private set familyName(familyName: string) {
        try {
            this._familyName = new Name(familyName)
        } catch (error) {
            throw error
        }
    }

    get value(): UserData {
        return { id: this._id.value, firstName: this._firstName.value, familyName: this._familyName.value, age: this._age.value }
    }
}
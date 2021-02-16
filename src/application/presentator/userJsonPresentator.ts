import IUserPresentator from "../usecace/interface/presentator/IUserPresentator";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export default class UserJsonPresentator implements IUserPresentator {
    serialize(params: { id: string, firstName: string, familyName: string, age: number } | { id: string, firstName: string, familyName: string, age: number }[]): { name: string, age: number } | { name: string, age: number }[] {
        if (params instanceof Array) {
            return params.map(this._serializeSingleUser)
        }
        return this._serializeSingleUser(params)
    }

    private _serializeSingleUser = (params: { id: string, firstName: string, familyName: string, age: number }): { name: string, age: number } => {
        return {
            name: params.familyName + params.firstName,
            age: params.age
        }
    }
}
import IUserPresentator from "../usecace/interface/presentator/IUserPresentator";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export default class UserJsonPresentator implements IUserPresentator {
    serialize(params: { id: string, name: string, age: number } | { id: string, name: string, age: number }[]): { name: string, age: number } | { name: string, age: number }[] {
        if (params instanceof Array) {
            return params.map(this._serializeSingleUser)
        }
        return this._serializeSingleUser(params)
    }

    private _serializeSingleUser = (params: { id: string, name: string, age: number }): { name: string, age: number } => {
        return {
            name: params.name,
            age: params.age
        }
    }
}
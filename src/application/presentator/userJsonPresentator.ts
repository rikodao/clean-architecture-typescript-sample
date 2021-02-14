export default class UserJsonPresentator {
    private _data: { id: string, name: string, age: number } | { id: string, name: string, age: number }[];
    constructor(data: { id: string, name: string, age: number } | { id: string, name: string, age: number }[]) {
        this._data = data

    }
    serialize(): any {
        if (this._data instanceof Array) {
            return this._data.map(this._serializeSingleUser)
        }
        return this._serializeSingleUser(this._data)
    }

    private _serializeSingleUser = (params: { id: string, name: string, age: number }): { name: string, age: number } => {
        return {
            name: params.name,
            age: params.age
        }
    }
}
export default class UserAgeValue {
    private _age: number
    constructor(_age: number) {
        if (_age < 18) {
            throw new Error("18歳未満はユーザー登録出来ません")
        }
        this._age = _age
    }

    public get value(): number {
        return this._age
    }

}
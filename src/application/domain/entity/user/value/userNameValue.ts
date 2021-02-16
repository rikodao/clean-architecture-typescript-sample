const maxNameLength = 16
export default class UserNameValue {
    private _name: string

    constructor(_name: string) {
        if (_name.length > maxNameLength) {
            throw new Error("名前の上限数を超えています");
        }
        this._name = _name
    }

    public get value(): string {
        return this._name
    }
}
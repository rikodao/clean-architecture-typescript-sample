const maxNameLength = 16
export default class UserNameValue {
    private _family: string
    private _first: string

    constructor(params: { family: string, first: string }) {
        const { first, family } = params
        if (family.length > maxNameLength) {
            throw new Error("名字の上限数を超えています");
        }
        if (first.length > maxNameLength) {
            throw new Error("名前の上限数を超えています");
        }
        this._family = family
        this._first = first
    }
    get value(): string {
        return this._family + this._first
    }
}
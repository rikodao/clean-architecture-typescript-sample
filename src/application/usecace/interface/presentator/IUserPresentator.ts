export default interface IUserPresentator {
    serialize(params: { id: string, firstName: string, familyName: string, age: number } | { id: string, firstName: string, familyName: string, age: number }[]): { name: string, age: number } | { name: string, age: number }[];
}

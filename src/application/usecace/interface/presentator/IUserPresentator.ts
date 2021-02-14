export default interface IUserPresentator {
    serialize(params: { id: string, name: string, age: number } | { id: string, name: string, age: number }[]): { name: string, age: number } | { name: string, age: number }[];
}

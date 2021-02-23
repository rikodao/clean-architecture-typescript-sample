export default interface IDBClient {
  execute(query: string, params?: any): any;
}

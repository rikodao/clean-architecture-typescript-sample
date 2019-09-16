import jsonfile from 'jsonfile';

export class MockRipositoryMock {

    private readonly dbFilePath = 'src/ripositories/MockDb/MockDb.json';

    protected openDb(): Promise<any> {
        return jsonfile.readFile(this.dbFilePath);
    }

    protected saveDb(db: any): Promise<any> {
        return jsonfile.writeFile(this.dbFilePath, db);
    }
}

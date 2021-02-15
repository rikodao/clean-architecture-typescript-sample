import MysqlClient from '../../infrastracture/database/mysqlClient'
test('initialize MysqlClient', async () => {
  const dbClient = new MysqlClient()
  let result = await dbClient.execute("select 1;")
  expect(JSON.stringify(result)).toBe(JSON.stringify([{ "1": 1 }]));
  result = await dbClient.execute("show tables;")
  expect(JSON.parse(JSON.stringify(result))[0].Tables_in_nomura_market).toBe('administrator');
});

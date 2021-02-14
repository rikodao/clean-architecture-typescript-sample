import User from '../../application/domain/entity/user/userEntity'
test('initialize userEntity', () => {
  const user = new User({ age: 18, first: "hoge", family: "fuga" })
  expect(user).toBe(user);
});
test('get value', () => {
  const first = "hoge"
  const family = "fuga"
  const user = new User({ age: 18, first: first, family: family })
  const { age, name, id } = user.value

  expect(age).toBe(18);
  expect(name).toBe(family + first);
  expect(id).toBeTruthy()
});


test('under 18 Error', () => {
  expect(() => new User({ age: 8, first: "hoge", family: "fuga" })).toThrowError(new Error("18歳未満はユーザー登録出来ません"));
});

test('over 32 length name Error', () => {
  expect(() => new User({ age: 8, first: "hoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaage", family: "fuga" })).toThrowError(new Error("名前の上限数を超えています"));
});

test('over 32 length name Error', () => {
  expect(() => new User({ age: 8, first: "hoge", family: "fugaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" })).toThrowError(new Error("名字の上限数を超えています"));
});
import User from '../../application/domain/entity/user/userEntity'
test('initialize userEntity', () => {
  const user = new User({ age: 18, firstName: "hoge", familyName: "fuga" })
  expect(user).toBe(user);
});
test('get value', () => {
  const user = new User({ age: 18, firstName: "hoge", familyName: "fuga" })
  const { age, id } = user.value

  expect(age).toBe(18);
  expect(id).toBeTruthy()
});


test('under 18 Error', () => {
  expect(() => new User({ age: 8, firstName: "hoge", familyName: "fuga" })).toThrowError(new Error("18歳未満はユーザー登録出来ません"));
});

test('over 32 length name Error', () => {
  expect(() => new User({ age: 8, firstName: "hoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaage", familyName: "fuga" })).toThrowError(new Error("名前の上限数を超えています"));
});

test('over 32 length name Error', () => {
  expect(() => new User({ age: 8, firstName: "hoge", familyName: "fugaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" })).toThrowError(new Error("名前の上限数を超えています"));
});
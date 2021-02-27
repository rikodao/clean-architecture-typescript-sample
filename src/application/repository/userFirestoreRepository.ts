import User from '~/application/domain/entity/user/userEntity';
import IUserRepository from '~/application/adaper/application/repository/IUserRepository';
import {injectable} from 'inversify';
import connection from '~/infrastracture/database/firstore/firestoreClient';
import 'reflect-metadata';
type FirestoreUserObject = {
  id: string;
  first: string;
  last: string;
};
@injectable()
export default class UserFirestoreRepository implements IUserRepository {
  private connection: FirebaseFirestore.Firestore;
  constructor() {
    this.connection = connection;
  }
  async getUser(): Promise<User> {
    const snapshot = await this.connection
      .collection('users')
      .doc('alovelace')
      .get();
    const userData: FirestoreUserObject = snapshot.data() as FirestoreUserObject;

    console.log(userData);

    const user = new User({
      id: userData.id,
      age: 22,
      firstName: userData.first,
      familyName: userData.last,
    });
    return user;
  }
}

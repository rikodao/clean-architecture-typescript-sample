import storeResisterService from '~/application/domain/service/storeResisterService';
export default class resisterUserIntaractor {
  _resister: storeResisterService;
  constructor(resister: storeResisterService) {
    this._resister = resister;
  }

  handle() {
    this._resister.resisterUser();
  }
}

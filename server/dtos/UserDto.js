export default class UserDto {
  nickname;
  _id;

  constructor(model) {
    this.nickname = model.nickname;
    this._id = model._id;
  }
}

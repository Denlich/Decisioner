export default class UserDto {
  nickname;
  name;
  surname;
  _id;

  constructor(model) {
    this.nickname = model.nickname;
    this.name = model.name;
    this.surname = model.surname;
    this._id = model._id;
  }
}

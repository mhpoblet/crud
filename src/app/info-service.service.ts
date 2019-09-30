import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './components/info/user1';

@Injectable({
  providedIn: 'root'
})
export class InfoServiceService {

  uri = 'http://localhost:4000/users';

  constructor(private http: HttpClient) { }

  addUser(name, email, birthday, zipcode) {
  const obj = {
    name: name,
    email: email,
    birthday: birthday,
    zipcode: zipcode
  };
  this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
}
  getUsers() {return this.http.get(`${this.uri}`);}

editUser(id) {
  return this.http.get(`${this.uri}/edit/${id}`);
}


updateUser(name, email, birthday, zipcode, id) {

  const obj = {
    name: name,
    email: email,
    birthday: birthday,
    zipcode: zipcode
  };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}

deleteUser(id) {
  return this
            .http
            .get(`${this.uri}/delete/${id}`);
}

}

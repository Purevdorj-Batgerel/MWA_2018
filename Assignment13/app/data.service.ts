import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class DataService {

  constructor(public http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.http.get('https://randomuser.me/api/?results=10');
  }

  isUserExists(uuid: string): boolean {
    const userDataRaw: string = window.localStorage.getItem('data');
    if (userDataRaw == null) {
      return false;
    } else {
      const userData = JSON.parse(userDataRaw);
      for (const user of userData) {
        if (user.login.uuid == uuid) {
          return true;
        }
      }
      return false;
    }
  }

  getUser(uuid: string) {
    const userDataRaw: string = window.localStorage.getItem('data');
    if (userDataRaw == null) {
      return null;
    } else {
      const userData = JSON.parse(userDataRaw);
      for (const user of userData) {
        if (user.login.uuid == uuid) {
          return user;
        }
      }
    }
    return null;
  }
}

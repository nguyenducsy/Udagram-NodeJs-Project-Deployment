import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { ApiService } from '../api/api.service';

const JWT_LOCALSTORE_KEY = 'jwt';
const USER_LOCALSTORE_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>(new User('', ''));
  constructor( private api: ApiService ) {
    this.initToken();
  }

  initToken() {
    const token = localStorage.getItem(JWT_LOCALSTORE_KEY);
    const storedValue = localStorage.getItem(USER_LOCALSTORE_KEY);
    const user = storedValue ? (JSON.parse(storedValue) as User) : null;
    if (token && user) {
      this.setTokenAndUser(token, user);
    }
  }

  setTokenAndUser(token: string, user: User) {
    
    localStorage.setItem(JWT_LOCALSTORE_KEY, token);
    localStorage.setItem(USER_LOCALSTORE_KEY, JSON.stringify(user));
    this.api.setAuthToken(token);
    this.currentUser$.next(user);
  }

  async login(email: string, password: string): Promise<any> {
    return this.api.post('/users/auth/login',
              {email: email, password: password})
              .then((res:any) => {
                this.setTokenAndUser(res.token, res.user);
                return res;
              })
              .catch((e:any) => { throw e; });
      // return user !== undefined;
  }

  logout(): boolean {
    window.localStorage.clear();
    return true;
  }

  register(user: User, password: string): Promise<any> {
    return this.api.post('/users/auth/',
              {email: user.email, password: password})
              .then((res: any) => {
                this.setTokenAndUser(res.token, res.user);
                return res;
              })
              .catch((e:any) => { throw e; });
  }
}

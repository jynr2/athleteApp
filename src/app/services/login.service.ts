import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: User[] = [
    { username: "john_doe", password: "123", role: "admin", name: "John Doe" },
    { username: "maria_sanchez", password: "456", role: "coordinator", name: "Maria Sanchez" }
  ];

  constructor() { }

  public Login(user: User): User {
    return this.GetUser(user);
  }

  private GetUser(user: User): User {
    const userResult = this.users.find(us => us.username == user.username && us.password == user.password);
    if (userResult == null) {
      return null;
    } else {
      this.SaveRoleType(userResult.role, userResult.name)
      return userResult;
    }
  }

  private SaveRoleType(role: string, name: string) {
    localStorage.setItem('name', name)
    localStorage.setItem('role', role);
  }

  public Logout() {
    localStorage.removeItem('role');
  }
}

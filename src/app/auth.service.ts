import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  login(username: string, password: string): boolean {
    // Implement your authentication logic here
    // For now, let's assume a simple check for demo purposes
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getFriendsList(page: number,size: number) {
    return this.http.get<any>(`http://localhost:3000/getFriendsList?page=${page}&size=${size}`);
  }

  getFriendsListByUser(id: any) {
    return this.http.get<any>(`http://localhost:3000/getFriendsListByUser/${id}`);
  }

}

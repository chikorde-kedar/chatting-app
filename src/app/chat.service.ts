import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  //Service method that gets all the chat details from the node server
  getChatByRoom(room) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/chat/' + room).pipe(map((res:Response) => res))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getChat(){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json'})
    };
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/chat/chats', httpOptions).pipe(map((res:Response) => res))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  //Service method that saves all the chat details to the node server
  saveChat(data) {
    return new Promise((resolve, reject) => {
        this.http.post('http://localhost:3000/chat', data).pipe(map((res:Response) => res))
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }
}

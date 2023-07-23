import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button (click)="getApi()">Api İsteği Yap</button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorExample';
  constructor(
    private _http:HttpClient
  ){

  }
  getApi(){
    this._http.get("https://jsonplaceholder.typicode.com/todos").subscribe(res=>{
      console.log(res);
    });
  }
}

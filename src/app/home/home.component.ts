import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

values: any;

  registerMode = false;

  constructor(private  http: HttpClient) { }

  ngOnInit() {

  }

  registerToggle() {

    this.registerMode = true;
  }

  getValues() {
    this.http.get('https://localhost:5001/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

  cancelRegisterMode(registermode: boolean){

    this.registerMode = registermode;
  }
}

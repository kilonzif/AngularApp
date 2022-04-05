import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username:string=""
  password:string=""

  currentValue=""

  getUsername(username:string){
      console.log(username);
      this.currentValue=username;
      // return username;
  }


}

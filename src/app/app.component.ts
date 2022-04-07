import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'HelloApp';

  name:string ="Mary DOE";
  lastName:string ="Bruce";

  getName()
  {
    return this.name;
  }

  obj = {
    name:'Jane',
    age:20
  };

  arr = ['Michelle','Cynthia','James'];


  goals: string[] = ["The","Names"];

  ages: number=24;

  money:number=100;

  today = Date.now();

  oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  firstDate:any = new Date(2022, 1, 1);
  secondDate: any= Date.now();

 diffDays = Math.round(Math.abs((this.firstDate - this.secondDate) / this.oneDay));
 
}

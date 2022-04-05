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


  names: string[] = ["The","Names"];

  ages: number=24;

}

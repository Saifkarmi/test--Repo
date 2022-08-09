import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weka';
  name:string = "Saif";
  salary:number =120;
  age:number =22;
  show:boolean = false;

  handelInputEvent(ev:any)
  {
    alert("change has been done");
    console.log(ev);
    this.name= ev.target.value
    console.log(this.name);
  }

  handelChangeEvent(ev:any)
  {
    if (ev.length > 15 )
    {
      alert("the length is too long");
    this.name= this.name.substring(0,15); 
   }
  }

  ClearAll()
  {
    this.name="";
    this.age = 0;
    this.salary=0;
  }

  hide()
  {
    this.show = !this.show
  }

  course:any [] =[
  {
    id :5,
    name:"API"

  },
{
  id :6,
    name:"ASP.NET"
}]
}

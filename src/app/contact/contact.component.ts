import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  {
  showLabel(event: Event):void{
    let target = event.target as HTMLInputElement;
    let parent = target.parentElement as HTMLDivElement;
    let label = parent.querySelector("label") as HTMLLabelElement;

    if(target.value) label.classList.add("show");
    
    else label.classList.remove("show");
    

  }
  preventReload(event: Event):void{
    event.preventDefault();
  }

}

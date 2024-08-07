import { Component, OnInit} from '@angular/core';
import { StarComponent } from "../star/star.component";
import { query } from 'express';
// import $ from 'jquery';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  constructor() { }
  // ngOnInit(): void {
  //   // $(document).on("click", ".pop-layer", (event) =>{

  //   //   if($(event.target).hasClass("pop-layer")){
  //   //     $(event.target).removeClass("d-flex").addClass("d-none");
  //   //   }
  //   // })
  // }

  closePopLayer(event: Event): void{
    const target = event.target as HTMLDivElement;
    console.log(target);
    if(target.classList.contains("pop-layer")){
      target.classList.replace("d-flex", "d-none");
    }
  }

  showPopLayer(imgSrc: string):void{
    const popLayer = document.querySelector(".pop-layer") as HTMLDivElement;
    const popLayerImg = popLayer.querySelector(".pop-layer img") as HTMLImageElement;
    if(imgSrc){
      popLayerImg.setAttribute("src", imgSrc);
    }
    popLayer.classList.replace("d-none", "d-flex");

  }
  


}



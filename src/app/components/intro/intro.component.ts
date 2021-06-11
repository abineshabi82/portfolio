import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
   public container:any=null;
   public eye:any=null;

  constructor() { }

  ngOnInit(): void {
    this.container=document.querySelector('.intro-container .col-4');
    this.eye=document.querySelector('.b');
    this.container.addEventListener('mousemove',(event:any)=>{
      this.eye.style.transform=`translate(${(((window.innerWidth / 2 - event.pageX)/40)*-1)-12}px,${(((window.innerWidth / 2 - event.pageY)/80)*-1)+6}px)`;
    });

    this.container.addEventListener('mouseenter',()=>{
      this.eye.style.transition="none";
    });

    this.container.addEventListener('mouseout',()=>{
      this.eye.style.transition="all .5s ease";
      this.eye.style.transform="translate(0,0)";
      
    });

  }

}

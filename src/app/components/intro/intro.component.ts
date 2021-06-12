import { Component, OnInit,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit,AfterViewInit {
   public container:any=null;
   public eye:any=null;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.container=document.querySelector('.intro-container .col-4');
     console.log(this.container.offsetWidth);
    let width=this.container.offsetWidth;
    let wWidth=window.innerWidth;
    let adj=0;
    if(wWidth>1400)
      adj=12;
    else if(wWidth>1100)
      adj=9;
    else if(wWidth>800)
      adj=6;
    else if(width>769)
      adj=3;
    else if(wWidth>500)
      adj=0;
      console.log(adj,width);
    this.eye=document.querySelector('.b');
    this.container.addEventListener('mousemove',(event:any)=>{
       this.eye.style.transform=`translate(${(((window.innerWidth/2-event.pageX)/41)*-1)-adj}px,${(((window.innerHeight / 2 - event.pageY)/80)*-1)+1}px)`;
    });


    this.container.addEventListener('mouseenter',()=>{
      this.eye.style.transition="none";
    });

    this.container.addEventListener('mouseout',()=>{
      this.eye.style.transition="all .1s ease";
      this.eye.style.transform="translate(0,0)";
      
    });
  }

  toggleMustag():void{
    const el:any=document.querySelector('.d');
    const mustag:any=document.querySelector('.mustag');
    if(el.style.visibility=="visible"){
      el.style.opacity="0";
    el.style.visibility="hidden";
    el.style.opacity="0";
    mustag.style.background="rgb(254 254 254 / 11%)";
    }
    else{
    el.style.visibility="visible";
    el.style.opacity="1";
    mustag.style.background="#fefefe8a";
    }
  }
  toggleBeard():void{
    const el:any=document.querySelector('.e');
    const beard:any=document.querySelector('.beard');
    if(el.style.visibility=="visible"){
      el.style.opacity="0";
    el.style.visibility="hidden";
    el.style.opacity="0";
    beard.style.background="rgb(254 254 254 / 11%)";
    }
    else{
    el.style.visibility="visible";
    el.style.opacity="1";
    beard.style.background="#fefefe8a";
    }
  }

}

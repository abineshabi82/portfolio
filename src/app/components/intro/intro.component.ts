import { Component, OnInit,AfterViewInit,OnDestroy } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { debounceTime ,filter} from 'rxjs/operators';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit,AfterViewInit,OnDestroy {
  private container:any=null;
  private eye:any=null;
  private introContent:any=null;
  private introImg:any=null;

  constructor(public router:Router) { }

  ngOnInit(): void {
    this.introContent=document.querySelector('.intro-container .intro-content');
    this.introImg=document.querySelector('.intro-container .col-4');
  }

  ngAfterViewInit(){      
    //FOR SLIDELEFT AND DISAPPEAR
    let flag=0;
    this.router.events.subscribe(x=>{
      if(x instanceof NavigationStart && flag==0){
        flag=1;
        let route=x.url.slice(1);
        let body:any=document.querySelector('body');
        if(route=="exp"){
          body.style.background="linear-gradient(180deg, #f7e96d 0%, rgba(255, 243, 144, 1) 65%, #f7e96d 100%)";
        }else if(route=="skill"){
          body.style.background="linear-gradient(180deg, #67cca0 0%, #bcffdc 65%, #67cca0 100%)";
        }else if(route=="work"){
          body.style.background="linear-gradient(180deg, #fd8f8f 0%, #ffb99a 70%, #fd8f8f 99%)";
        }
        this.router.navigate(['intro']);
        let containermain:any=document.querySelector('.intro-container');
        let nav:any=document.querySelector('.navbar');
        this.introContent.style.animation="final-disappear .5s ease-in forwards";
        setTimeout(()=>{
          this.introImg.style.animation="final-disappear .5s ease-in forwards";
          nav.style.zIndex=1;
        },300);
        setTimeout(()=>{
          containermain.classList.add('slide-left');
        },800);
        setTimeout(()=>{
            this.router.navigate([route]);
            nav.style.zIndex=0;
        },1800);
      }
    });


    //FOR EYE MOVEMENT RESPONSIVE
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

  ngOnDestroy(){
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


import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, AfterViewInit {
  private workContent:any=null;
  private workImg:any=null;
  
  private portfolio: any;
  private anime: any;
  private covid: any;
  constructor(public router:Router) {
  }

  ngOnInit(): void {
    this.workContent=document.querySelector('.work-container .work-desc');
    this.workImg=document.querySelector('.work-container .work-img');
  }

  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    let windowHeight=(window.innerHeight || document.documentElement.clientHeight);
    //IMPORTANT CALC
    //  console.log(element,rect.top/2 >= 0,rect.bottom-(windowHeight/2) <= windowHeight);
    return (rect.top/2 >= 0 && rect.bottom-(windowHeight/2) <= windowHeight);  //&& rect.left >= 0 && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  }

  //Image and Content fade in and out
  fadeInOut(){
    this.portfolio = document.querySelector('.portfolio');
    let pFlagOut = true;
    this.anime = document.querySelector('.anime-stream');
    let aFlagOut = true;
    this.covid = document.querySelector('.corona-tracker');
    let cFlagOut = true;
    console.log(this.portfolio);
    let portfolio:any=document.querySelector('.portfolio');
    let animeStream:any=document.querySelector('.anime-stream');
    let covid:any=document.querySelector('.corona-tracker');
    document.querySelector(".work-container")?.addEventListener('scroll', () => {
      // debugger;
      let pVal = this.isInViewport(this.portfolio);
      
      let aVal = this.isInViewport(this.anime);
      let cVal = this.isInViewport(this.covid);
      // console.log(pVal,pFlagOut);
      if (pVal && pFlagOut) {
        console.log("p in");
        pFlagOut = false;
        portfolio.querySelector('.lap').style.transform="translateY(0px) scale(1)";
         portfolio.querySelector('.lap').style.opacity=1;
         portfolio.querySelector('.phone').style.transform="translateX(0px) scale(1)";
         portfolio.querySelector('.phone').style.opacity=1;
         portfolio.querySelector('.tab').style.transform="translateX(0px) scale(1)";
         portfolio.querySelector('.tab').style.opacity=1;

         portfolio.querySelector('.project-content').setAttribute("style","opacity: 1;transform: translateY(0px);");
      }
      else if(!pVal && !pFlagOut) {
        console.log("p out");
        pFlagOut=true;
        portfolio.querySelector('.lap').style.transform="translateY(-50px) scale(.9)";
        portfolio.querySelector('.lap').style.opacity=0;
        portfolio.querySelector('.phone').style.transform="translateX(-30px) scale(.9)";
        portfolio.querySelector('.phone').style.opacity=0;
        portfolio.querySelector('.tab').style.transform="translateX(30px) scale(.9)";
        portfolio.querySelector('.tab').style.opacity=0;
       
        portfolio.querySelector('.project-content').setAttribute("style","opacity: 0;transform: translateY(-50px);");
      }
      if (aVal && aFlagOut) {
        console.log("a in");
        aFlagOut = false;
        animeStream.querySelector('.lap').setAttribute("style","transform: translateY(0px) scale(1); opacity: 1;");
        animeStream.querySelector('.phone').setAttribute("style","transform: translateX(0px) scale(1); opacity: 1;");
        animeStream.querySelector('.tab').setAttribute("style","transform: translateX(0px) scale(1); opacity: 1;");

        animeStream.querySelector('.project-content').setAttribute("style","opacity: 1;transform: translateY(0px);");
      }
      else if(!aVal && !aFlagOut) {
        console.log("a out");
        aFlagOut=true;
        animeStream.querySelector('.lap').setAttribute("style","transform: translateY(-50px) scale(.9); opacity: 0;");
        animeStream.querySelector('.phone').setAttribute("style","transform: translateX(-30px) scale(.9); opacity: 0;");
        animeStream.querySelector('.tab').setAttribute("style","transform: translateX(30px) scale(.9); opacity: 0;");
      
        animeStream.querySelector('.project-content').setAttribute("style","opacity: 0;transform: translateY(-50px);");
      }
      if (cVal && cFlagOut) {
        console.log("c in");
        cFlagOut = false;
        covid.querySelector('.phone').setAttribute("style","transform: translateX(0px) scale(1); opacity: 1;");
        covid.querySelector('.tab').setAttribute("style","transform: translateX(0px) scale(1); opacity: 1;");

        covid.querySelector('.project-content').setAttribute("style","opacity: 1;transform: translateY(0px);");
      }
      else if(!cVal && !cFlagOut) {
        console.log("c out");
        cFlagOut=true;
        covid.querySelector('.phone').setAttribute("style","transform: translateX(-30px) scale(.9); opacity: 0;");
        covid.querySelector('.tab').setAttribute("style","transform: translateX(30px) scale(.9); opacity: 0;");
      
        covid.querySelector('.project-content').setAttribute("style","opacity: 0;transform: translateY(-50px);");
      }
      
    });
  }

  slideLeftDisappear(){
    let flag=0;
    this.router.events.subscribe(x=>{
      if(x instanceof NavigationStart && flag==0){
        flag=1;
        let route=x.url.slice(1);
        let body:any=document.querySelector('body');
        if(route=="exp"){
          body.style.background="linear-gradient(180deg, #f7e96d 0%, rgba(255, 243, 144, 1) 65%, #f7e96d 100%)";
        }else if(route=="intro"){
          body.style.background="linear-gradient(180deg, #7bb0c8 0%, #ace5ff 70%, #7bb0c8 99%)";
        }else if(route=="skill"){
          body.style.background="linear-gradient(180deg, #67cca0 0%, #bcffdc 65%, #67cca0 100%)";
        }
        this.router.navigate(['work']);
        let containermain:any=document.querySelector('.work-container');
        let nav:any=document.querySelector('.navbar');
        this.workContent.style.animation="final-disappear .5s ease-in forwards";
        setTimeout(()=>{
          this.workImg.style.animation="final-disappear .5s ease-in forwards";
          nav.style.zIndex=1;
        },300);
        setTimeout(()=>{
          let container:any =document.querySelector(".work-container");
          container.setAttribute("style","height: calc(100vh) !important");
          containermain.classList.add('slide-left');
        },800);
        setTimeout(()=>{
            this.router.navigate([route]);
            nav.style.zIndex=2;
        },1800);
      }
    });
  }

  ngAfterViewInit() {
    this.slideLeftDisappear();
    this.fadeInOut();
  }


}

import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, AfterViewInit {
  private portfolio: any;
  private anime: any;
  private covid: any;
  constructor() {
  }

  ngOnInit(): void {
  }

  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    let windowHeight=(window.innerHeight || document.documentElement.clientHeight);
    //IMPORTANT CALC
    //  console.log(element,rect.top/2,">="+0,rect.bottom-(windowHeight/2),"<="+windowHeight);
    return (rect.top/2 >= 0 && rect.left >= 0 && rect.bottom-(windowHeight/2) <= windowHeight && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
  }

  ngAfterViewInit() {
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
      let pVal = this.isInViewport(this.portfolio);
      
      let aVal = this.isInViewport(this.anime);
      let cVal = this.isInViewport(this.covid);
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
}

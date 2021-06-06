import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpComponent } from './components/exp/exp.component';
import { IntroComponent } from './components/intro/intro.component';
import { SkillComponent } from './components/skill/skill.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'exp', component: ExpComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'work', component: WorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

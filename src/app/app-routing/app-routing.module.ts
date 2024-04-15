import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from '../pagination/pages/pages.component';
import { SearchComponent } from '../search/search/search.component';

const routes:Routes=[
  {
    path:'getrepos',
    component:PagesComponent
  },
  {
    path:'',
    component: SearchComponent
  }
  
]

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

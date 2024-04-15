import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(
    private apiService: ApiService,private router:Router
  ){}
  Repos:any;
  
  searchUser(username: string) {
    this.apiService.getUser(username).subscribe((data)=>{
      this.Repos=data;
      this.setRepoUrl();
      console.log(this.Repos);
      this.router.navigate(['getrepos'])
    },(error)=>{
      console.log(error);
    })
  }

  setRepoUrl(){
localStorage.setItem('url',JSON.stringify(this.Repos));
  }

}

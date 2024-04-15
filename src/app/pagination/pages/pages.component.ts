import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
constructor(private apiservice:ApiService)
{}

isLoading: boolean = true;
  ngOnInit(): void {
    this.getRepos();
    this.getAdditionalData();
    setTimeout(() => {
      // After data is loaded
      this.isLoading = false;
    }, 2000);
  }

  


  repoUrl:any=localStorage.getItem('url');
  Repopages:any=JSON.parse(this.repoUrl)
  data:any;

  title='pagination';
  REPOS:any;
  page:number=1;
  count:number=this.Repopages.public_repos;
  tableSize:number=10;
  tableSizes:any=[10,15,20];

  getAdditionalData(){
    console.log('Additional data',this.Repopages);
  }

  //get repos
getRepos(){
  console.log('repo url',`${this.Repopages.repos_url}?page=${this.page}&per_page=${this.tableSize}`)
  this.apiservice.getRepos(`${this.Repopages.repos_url}?page=${this.page}&per_page=${this.tableSize}`).subscribe(
    (results)=>{
      this.data=results;
      console.log('results are =',results);
    }
  )
}


//change pagination
onTableDataChange(event:any){
  console.log( 'value',event) 
  this.page=event;

    this.getRepos();
}




isDropdownOpen = false;
// open and close dropdown 
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // set page size
  setPageSize(num:number){
    this.tableSize=num;
    this.toggleDropdown()
    this.getRepos();
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }



  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`)
  }
  

  getRepos(repoUrl:string){
    return this.httpClient.get(`${repoUrl}`)
  }

  getLanguages(url:string){
    return this.httpClient.get(`${url}`)
  }
  




  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}

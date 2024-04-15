import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PagesComponent } from './pagination/pages/pages.component';
import { SearchComponent } from './search/search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent,
      SearchComponent,
      PagesComponent],
    imports:[BrowserModule,
      NgxPaginationModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule,]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fyle-frontend-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fyle-frontend-challenge');
  });

  
});

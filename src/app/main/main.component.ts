import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
     newsData:any
     displayData:any
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    const url="https://newsapi.org/v2/everything?q=tesla&from=2022-01-28&sortBy=publishedAt&apiKey=6f19958a2a494d1991c05fb129b682f7"
    this.http.get(url)
    .subscribe(res=>{
      this.newsData=res;
      if(this.newsData.status="ok"){
        this.displayData=this.newsData.articles
        console.log(this.displayData)
      }
    })
  }

}

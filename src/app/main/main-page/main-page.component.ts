import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  email_page = "https://formspree.io/xpzyzayq";
  to_send = {
    name: "",
    _replyto: "", 
    message: "",
  }
  postId: any;

  focus: any;
  focus1: any;
  
  constructor(private http: HttpClient, public translate: TranslateService) { }

  ngOnInit() {
  }

  send_email(name, email, message) {
    
    this.http.post<any>(this.email_page, 
       { name: name, contact: email, message: message} ).subscribe(data => {
        this.postId = data.id;
    })
  }

}

import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    country: String;
    country_list =  [
        { 'language' : 'PT',
          'logo' : 'brasil.png'
        },
        { 'language' : 'EN',
          'logo' : 'uk.png'
        },
        { 'language' : 'FR',
          'logo' : 'franca.png'
        },
    ]

    constructor(public location: Location, private element : ElementRef, private router: Router, public translate: TranslateService) {
        this.setContry()
        this.sidebarVisible = false;
    }

    private setContry() {
        console.log(this.translate.currentLang)
        if (this.translate.currentLang === 'fr') {
            this.country = 'franca.png';
        } 
        if (this.translate.currentLang === 'pt') {
            this.country = 'brasil.png';
        } 
        if (this.translate.currentLang === 'en') {
            this.country = 'uk.png';
        }
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
      var title = this.location.prepareExternalUrl(this.location.path());
      if(title.charAt(0) === '#'){
          title = title.slice( 1 );
      }
        if( title.includes('profile')) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }

    route(entry) {
        var path = '/' + entry;
        this.router.navigate([path]);
    }

    changeCountry(item) {
        this.country = item;
        if (item === 'brasil.png') {
            this.translate.use('pt');
        }
        if (item === 'uk.png') {
            this.translate.use('en');
        }
        if (item === 'franca.png') {
            this.translate.use('fr');
        }
    }

}

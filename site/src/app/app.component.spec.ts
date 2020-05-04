import { TestBed, async } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import { AppComponent } from './app.component';
import {HttpLoaderFactory} from "./app.module";

const TRANSLATIONS_EN = require('../assets/i18n/en.json');
const TRANSLATIONS_FR = require('../assets/i18n/fr.json');
const TRANSLATIONS_PT = require('../assets/i18n/pt.json');


describe('AppComponent', () => {
  let translate: TranslateService;
  let http: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    http = TestBed.get(HttpTestingController);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
  }));

  it('should load translations', async(() => {
    spyOn(translate, 'getBrowserLang').and.returnValue('en');
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;

    // the DOM should be empty for now since the translations haven't been rendered yet
    expect(compiled.querySelector('h2').textContent).toEqual('');

    http.expectOne('/assets/i18n/en.json').flush(TRANSLATIONS_EN);
    http.expectNone('/assets/i18n/fr.json');

    // Finally, assert that there are no outstanding requests.
    http.verify();

    fixture.detectChanges();
    // the content should be translated to english now
    expect(compiled.querySelector('h2').textContent).toEqual(TRANSLATIONS_EN.HOME.TITLE);

    translate.use('fr');
    http.expectOne('/assets/i18n/fr.json').flush(TRANSLATIONS_FR);

    // Finally, assert that there are no outstanding requests.
    http.verify();

    // the content has not changed yet
    expect(compiled.querySelector('h2').textContent).toEqual(TRANSLATIONS_EN.HOME.TITLE);

    fixture.detectChanges();
    // the content should be translated to french now
    expect(compiled.querySelector('h2').textContent).toEqual(TRANSLATIONS_FR.HOME.TITLE);
  }));
});

import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.scss']
})
export class ProfissionalComponent implements OnInit {
  intro = 'Development of activities related to mechatronic engineering, programming and automation.'
  programming = [
    { 'language' : 'Windows',
      'description' : 'PROFISIONAL.WINDOWS',
      'logo' : 'win.png'
    },
    { 'language' : 'Linux',
      'description' : 'PROFISIONAL.LINUX',
      'logo' : 'linux.png'
    },
    { 'language' : 'Office Pack',
      'description' : 'PROFISIONAL.OFFICE',
      'logo' : '365.png'
    },
    { 'language' : 'Adobe Softwares',
      'description' : 'PROFISIONAL.ADOBE',
      'logo' : 'adobe.jpg'
    },
    { 'language' : 'Python',
      'description' : 'PROFISIONAL.PYTHON',
      'logo' : 'python.png'
    },
    { 'language' : 'Java',
      'description' : 'PROFISIONAL.JAVA',
      'logo' : 'java.png'
    },
    { 'language' : 'C++',
      'description' : 'PROFISIONAL.C',
      'logo' : 'c_plus.png'
    },
    { 'language' : 'Angular',
      'description' : 'PROFISIONAL.ANGULAR',
      'logo' : 'angular.png'
    },
    { 'language' : 'MATLAB',
      'description' : 'PROFISIONAL.MATLAB',
      'logo' : 'matlab.png'
    },
    { 'language' : 'SQL',
      'description' : 'PROFISIONAL.SQL',
      'logo' : 'sql.png'
    },
    { 'language' : 'Assembly',
      'description' : 'PROFISIONAL.ASM',
      'logo' : 'asm.png'
    },
  ]

  automation = [
    { 'title' : 'PROFISIONAL.ROBOT_ARM',
      'image' : 'hook_4.png'
    },
    { 'title' : 'PROFISIONAL.SUMO',
      'image' : 'sumocup_1.png'
    },
    { 'title' : 'PROFISIONAL.PLAT_ELEC',
      'image' : 'autosampler.png'
    },
  ] 
  constructor(private http: HttpClient, public translate: TranslateService) { }

  ngOnInit() {
  }

}

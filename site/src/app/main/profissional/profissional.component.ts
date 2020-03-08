import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.scss']
})
export class ProfissionalComponent implements OnInit {
  intro = 'FUCK'
  programming = [
    { 'language' : 'Windows',
      'description' : 'Accustomed to using the Operating System and developing BAT files',
      'logo' : 'win.png'
    },
    { 'language' : 'Linux',
      'description' : 'Experience using Ubuntu and Debian for professional development',
      'logo' : 'linux.png'
    },
    { 'language' : 'Office Pack',
      'description' : 'Skills with the main tools of the package. Improved practice with excel, word and power point',
      'logo' : 'win.png'
    },
    { 'language' : 'Adobe Softwares',
      'description' : 'Use of software for web development, photo editing, PDFs and creation of 3D models',
      'logo' : 'photo.png'
    },
    { 'language' : 'Python',
      'description' : 'Main programming language. Development of systems back-end using de Flask. Artificial intelligence applications for data processing. Scripts for automating various functions',
      'logo' : 'python.png'
    },
    { 'language' : 'Java',
      'description' : 'Experience with developing interfaces and back-end using Spring, Maven, Apache and JackRabbit.',
      'logo' : 'java.png'
    },
    { 'language' : 'C++',
      'description' : 'Experiences mainly focused on the development of embedded systems',
      'logo' : 'c_plus.png'
    },
    { 'language' : 'Angular',
      'description' : 'Asynchronous web application development',
      'logo' : 'angular.png'
    },
    { 'language' : 'MATLAB',
      'description' : 'Data processing, simulations and creation of interfaces',
      'logo' : 'matlab.png'
    },
    { 'language' : 'SQL',
      'description' : 'aUse of the bank for application development. Filtering data prior to the server',
      'logo' : 'sql.jpg'
    },
    { 'language' : 'Assembly',
      'description' : 'Experience with projects in embedded systems and with logical challenges using the languagea',
      'logo' : 'assembly.png'
    },
  ]

  automation = [
    { 'title' : 'Robotic arm controled by body mouvements',
      'image' : 'hook_4.png'
    },
    { 'title' : 'Robotic arm controled by body mouvements',
      'image' : 'sumocup_1.png'
    },
  ] 
  constructor() { }

  ngOnInit() {
  }

}

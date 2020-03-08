import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent implements OnInit {

  artigos = [
    {'title' : '3D-printed Portable Platform for Mechanized Handling and Injection of Microvolumes Coupled to Electrochemical Detection', 
      'authors' : 'MENDONÇA, DIANDERSON M. H. ; ROCHA, DIEGO P. ; DUTRA, GUSTAVO S. V. ; CARDOSO, RAFAEL M. ; BATISTA, ALEX D. ; RICHTER, EDUARDO M. ; MUNOZ, RODRIGO A. A. ',
      'place' : 'ELECTROANALYSIS',
      'year' : '2019'},
    {'title' : 'Lagrangian formulation applied in a non-linear variant of the Atwood Machine',
      'authors' : 'DUTRA, G. S. V.; SOUZA, G. A.; FIGUEREDO, R. A.',
      'place' : 'Brazilian Society of Computational and Applied Mathematics',
      'year' : '2019'},
    {'title' : 'Tutoria e apoio psico-pedagógico para transformar as dificuldades em oportunidades nos cursos de engenharia',
      'authors' : 'DUTRA, GUSTAVO; SOUZA, ANA MARTA; PEREIRA, GEOVANNE',
      'place' : 'Congresso Brasileiro de Educação em Engenharia (COBENGE)',
      'year' : '2019'},
    {'title' : 'IMPACTS OF THE PROJECT "PRÓ-EXCELÊNCIA" ON THEENGINEERING STUDENTS PERFORMANCES',
      'authors' : 'DUTRA, GUSTAVO; SOUZA, ANA MARTA; ANDRADE, JÉSSICA CRISTIANE',
      'place' : '25th International Congress of Mechanical Engineering',
      'year' : '2019'},
    {'title' : 'THE CONSEQUENCES OF TUTORING AND PSYCHO-PEDAGOGICAL SUPPORT IN THE ENGINEERING EDUCATION',
      'authors' : 'DUTRA, GUSTAVO; SOUZA, ANA MARTA; PEREIRA, GEOVANNE',
      'place' : '25th International Congress of Mechanical Engineering',
      'year' : '2019'},
    {'title' : 'Análise de um pêndulo duplo, com abordagem Lagrangiana e método de Runge-Kutta',
      'authors' : 'DUTRA, G. S. V.; SOUZA, G. A.; SILVA, H. B.; FIGUEREDO, R. A.',
      'place' : 'XVIII SEMAT E VIII SEMEST',
      'year' : '2018'},
    {'title' : 'Dinâmica da máquina de Atwood acoplada a um sistema massa-mola ',
      'authors' : 'DUTRA, G. S. V.; SOUZA, G. A.; SILVA, H. B.; FIGUEREDO, R. A.',
      'place' : 'XVIII SEMAT E VIII SEMEST',
      'year' : '2018'},
    {'title' : 'PROPOSTA DE SISTEMA COMPUTACIONAL PARA O DIMENSIONAMENTO DE CAMES SEGUINDO A ABORDAGEM DE KLOOMOK E R. V. MUFFLEY',
      'authors' : 'BRITO SILVA, HENRIQUE; SOUZA VIEIRA DUTRA, GUSTAVO; DE ALMEIDA SOUZA, GABRIEL',
      'place' : 'XVI Conferência de Estudos em Engenharia Elétrica',
      'year' : '2018'},
    {'title' : 'Desenvolvimento de um Injetor Mecanizado para Sistemas Eletroanalíticos',
      'authors' : 'DUTRA, G. S. V.; MENDONÇA D.; RICHTER E. M.; MUNOZ, R. A. A.',
      'place' : '1ª Mostra de ICs - PETMEC',
      'year' : '2018'}
  ]

  awards = [
    { 'title' : 'Into the 10% best Students on the Mechatronics Course',
      'date' : '2015-2021',
      'promotor' : 'UFU - Universidade Federal de Uberlândia'},
    { 'title' : '11th position out of 97 students',
      'date' : '2019-2021',
      'promotor' : 'ENSMM - École Nationale Supérieure de Mécanique et des Microtechniques de Besançon'},
    { 'title' : 'One of the ten best articles published',
      'date' : '2019',
      'promotor' : 'ABENGE - XLVII Congresso Brasileiro de Educação em Engenharia'},
    { 'title' : 'Best work on the automation and robotics domain',
      'date' : '2018',
      'promotor' : 'PETMEC - Primeira mostra de IC'},
    { 'title' : 'First place at the SUMOCUP 2018',
      'date' : '2018',
      'promotor' : 'Laboratório de Automação, Servomecanismos e Controle (LASEC)'},
    { 'title' : 'Third place at the HOOK - Competition in Biomedical Engineering',
      'date' : '2018',
      'promotor' : 'PET Biomédica'},
    { 'title' : 'First Place at the SUMOCUCP 2017',
      'date' : '2017',
      'promotor' : 'Laboratório de Automação, Servomecanismos e Controle (LASEC)'},
  ]
  teste = 'Gustavo'
  constructor() { }

  ngOnInit() {
  }

}

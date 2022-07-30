import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent implements OnInit {

  artigos = [
    {'title' : 'ACADEMIC.IEEE_ROBOTICS', 
      'authors' : 'SOUZA, G. A. ; DUTRA, GUSTAVO S. V. ; DE SOUZA TAVARES, JOSE J. P. Z.',
      'place' : 'IEEE',
      'year' : '2020',
      'url' : "https://ieeexplore.ieee.org/document/9307058"},
    {'title' : 'ACADEMIC.NUPE', 
      'authors' : 'MENDONÇA, DIANDERSON M. H. ; ROCHA, DIEGO P. ; DUTRA, GUSTAVO S. V. ; CARDOSO, RAFAEL M. ; BATISTA, ALEX D. ; RICHTER, EDUARDO M. ; MUNOZ, RODRIGO A. A. ',
      'place' : 'ELECTROANALYSIS',
      'year' : '2019',
      'url' : "https://onlinelibrary.wiley.com/doi/abs/10.1002/elan.201800834"},
    {'title' : 'ACADEMIC.CNMAC',
      'authors' : 'DUTRA, G. S. V.; SOUZA, G. A.; FIGUEREDO, R. A.',
      'place' : 'ACADEMIC.CNMAC_PLACE',
      'year' : '2019',
      'url'  : ''},
    {'title' : 'ACADEMIC.COBENGE',
      'authors' : 'DUTRA, GUSTAVO; SOUZA, ANA MARTA; PEREIRA, GEOVANNE',
      'place' : 'ACADEMIC.COBENGE_PLACE',
      'year' : '2019',
      'url'  :  'http://www.abenge.org.br/sis_submetidos.php?acao=abrir&evento=COBENGE19&codigo=COBENGE19_00089_00002081.pdf'},
    {'title' : 'ACADEMIC.COBEM_PRO',
      'authors' : 'DUTRA, GUSTAVO; SOUZA, ANA MARTA; ANDRADE, JÉSSICA CRISTIANE',
      'place' : 'ACADEMIC.COBEM_PRO_PLACE',
      'year' : '2019',
      'url'  : 'https://www.researchgate.net/publication/337745958_IMPACTS_OF_THE_PROJECT_PRO-EXCELENCIA_ON_THEENGINEERING_STUDENTS_PERFORMANCES'},
    {'title' : 'ACADEMIC.COBEM_MOT',
      'authors' : 'DUTRA, GUSTAVO; SOUZA, ANA MARTA; PEREIRA, GEOVANNE',
      'place' : 'ACADEMIC.COBEM_MOT_PLACE',
      'year' : '2019',
      'url'  : 'https://www.researchgate.net/publication/337747765_THE_CONSEQUENCES_OF_TUTORING_AND_PSYCHO-PEDAGOGICAL_SUPPORT_IN_THE_ENGINEERING_EDUCATION'},
    {'title' : 'ACADEMIC.SEMAT_PD',
      'authors' : 'DUTRA, G. S. V.; SOUZA, G. A.; SILVA, H. B.; FIGUEREDO, R. A.',
      'place' : 'ACADEMIC.SEMAT_PD_PLACE',
      'year' : '2018',
      'url'  : 'https://drive.google.com/file/d/1FzWd5OYrAB0GlRMHI8aTrfyn1W5a545N/view'},
    {'title' : 'ACADEMIC.SEMAT_AT',
      'authors' : 'DUTRA, G. S. V.; SOUZA, G. A.; SILVA, H. B.; FIGUEREDO, R. A.',
      'place' : 'ACADEMIC.SEMAT_AT_PLACE',
      'year' : '2018',
      'url'  : 'https://drive.google.com/file/d/13bozm4zwB2Re93Y4KhyONEVfpCaORTKI/view'},
    {'title' : 'ACADEMIC.CEEL',
      'authors' : 'BRITO SILVA, HENRIQUE; SOUZA VIEIRA DUTRA, GUSTAVO; DE ALMEIDA SOUZA, GABRIEL',
      'place' : 'ACADEMIC.CEEL_PLACE',
      'year' : '2018',
      'url' : 'https://www.researchgate.net/publication/333691771_PROPOSTA_DE_SISTEMA_COMPUTACIONAL_PARA_O_DIMENSIONAMENTO_DE_CAMES_SEGUINDO_A_ABORDAGEM_DE_KLOOMOK_E_R_V_MUFFLEY'},
    {'title' : 'ACADEMIC.PETMEC',
      'authors' : 'DUTRA, G. S. V.; MENDONÇA D.; RICHTER E. M.; MUNOZ, R. A. A.',
      'place' : 'ACADEMIC.PETMEC_PLACE',
      'year' : '2018'}
  ]

  awards = [
    { 'title' : 'ACADEMIC.BEST',
      'date' : '2015-2021',
      'promotor' : 'ACADEMIC.BEST_PLACE'},
    { 'title' : 'ACADEMIC.ENSMM',
      'date' : '2019-2021',
      'promotor' : 'ACADEMIC.ENSMM_PLACE'},
    { 'title' : 'ACADEMIC.WIN_COBEN',
      'date' : '2019',
      'promotor' : 'ACADEMIC.COBENGE_PLACE'},
    { 'title' : 'ACADEMIC.WIN_PETMEC',
      'date' : '2018',
      'promotor' : 'ACADEMIC.PETMEC_PLACE'},
    { 'title' : 'ACADEMIC.FIRST_SUMOCUP',
      'date' : '2018',
      'promotor' : 'ACADEMIC.SUMOCUP_PLACE'},
    { 'title' : 'ACADEMIC.HOOK',
      'date' : '2018',
      'promotor' : 'ACADEMIC.HOOK_PLACE'},
    { 'title' : 'ACADEMIC.SECOND_SUMOCUP',
      'date' : '2017',
      'promotor' : 'ACADEMIC.SUMOCUP_PLACE'},
  ]

  projects = [
    { 'title' : 'ACADEMIC.PROSS',
      'description' : 'ACADEMIC.PROSS_DESC',
      'date' : 'May 2018 -Dec 2019',
      'promotor' : 'ACADEMIC.BEST_PLACE'},
    { 'title' : 'PROSSIGA - PROCOR',
      'description' : 'ACADEMIC.PROCOR_DESC',
      'date' : 'Aug 2015 - Jul 2016',
      'promotor' : 'ACADEMIC.BEST_PLACE'},
    { 'title' : 'ACADEMIC.MONITORIA',
      'description' : 'ACADEMIC.MONITORIA_DESC',
      'date' : '2015-2019',
      'promotor' : 'ACADEMIC.BEST_PLACE'},
  ]
  teste = 'Gustavo'
  constructor(private http: HttpClient, public translate: TranslateService) { }

  ngOnInit() {
  }

}

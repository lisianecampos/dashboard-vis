import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatOption, MatOptionSelectionChange} from '@angular/material/core';
import {MatSelectChange} from '@angular/material/select';

@Component({
  selector: 'app-topic-filter',
  templateUrl: './topic-filter.component.html',
  styleUrls: ['./topic-filter.component.scss']
})
export class TopicFilterComponent implements OnInit {


  @Output() topicsChanged = new EventEmitter<string[]>();
  topics = new FormControl();
  selectedTopics: string[] = [];
  disabledValues: boolean = false;

  topicsList: string[] = [ 'Selecionar todos',
    'Administração Pública', 'Arte, Cultura e Religião', 'Comunicações', 'Esporte e Lazer', 'Economia', 'Cidades e Desenvolvimento Urbano',
    'Direito Civil e Processual Civil','Direito Penal e Processual Penal', 'Direitos Humanos e Minorias', 'Educação', 'Meio Ambiente e Desenvolvimento Sustentável',
    'Estrutura Fundiária', 'Previdência e Assistência Social', 'Processo Legislativo e Atuação Parlamentar', 'Energia, Recursos Hídricos e Minerais',
    'Relações Internacionais e Comércio Exterior', 'Saúde', 'Defesa e Segurança', 'Trabalho e Emprego','Turismo', 'Viação, Transporte e Mobilidade',
    'Ciência, Tecnologia e Inovação', 'Agricultura, Pecuária, Pesca e Extrativismo','Indústria, Comércio e Serviços','Direito e Defesa do Consumidor',
    'Direito Constitucional','Finanças Públicas e Orçamento','Homenagens e Datas Comemorativas', 'Política, Partidos e Eleições','Direito e Justiça',
    'Ciências Exatas e da Terra','Ciências Sociais e Humanas'
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.topics.value);
  }

  onSelect(topic: MatOptionSelectionChange) {

    // topic.source.select();
    this.selectedTopics.push(topic.source.value);

    this.topicsChanged.emit(this.selectedTopics);
  }

  allTopicsSelected() {
    this.disabledValues = true;

      this.selectedTopics.push('Administração Pública', 'Arte, Cultura e Religião', 'Comunicações', 'Esporte e Lazer', 'Economia', 'Cidades e Desenvolvimento Urbano',
        'Direito Civil e Processual Civil','Direito Penal e Processual Penal', 'Direitos Humanos e Minorias', 'Educação', 'Meio Ambiente e Desenvolvimento Sustentável',
        'Estrutura Fundiária', 'Previdência e Assistência Social', 'Processo Legislativo e Atuação Parlamentar', 'Energia, Recursos Hídricos e Minerais',
        'Relações Internacionais e Comércio Exterior', 'Saúde', 'Defesa e Segurança', 'Trabalho e Emprego','Turismo', 'Viação, Transporte e Mobilidade',
        'Ciência, Tecnologia e Inovação', 'Agricultura, Pecuária, Pesca e Extrativismo','Indústria, Comércio e Serviços','Direito e Defesa do Consumidor',
        'Direito Constitucional','Finanças Públicas e Orçamento','Homenagens e Datas Comemorativas', 'Política, Partidos e Eleições','Direito e Justiça',
        'Ciências Exatas e da Terra','Ciências Sociais e Humanas');

    this.topicsChanged.emit(this.selectedTopics);

  }
  }

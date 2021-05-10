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
  controlDisable: boolean = false;
  allTopicsLabel: string = 'Todos os temas';

  topicSelectAll = 'Selecionar todos';
  topicUnselectAll = 'Remover Seleção';

  topicsList: string[] = [
    'Administração Pública', 'Agricultura, Pecuária, Pesca e Extrativismo', 'Arte, Cultura e Religião', 'Cidades e Desenvolvimento Urbano', 'Ciências Exatas e da Terra',
    'Ciências Sociais e Humanas',
    'Ciência, Tecnologia e Inovação', 'Comunicações', 'Defesa e Segurança', 'Direito Civil e Processual Civil', 'Direito Constitucional',
    'Direito e Defesa do Consumidor', 'Direito e Justiça',
    'Direito Penal e Processual Penal', 'Direitos Humanos e Minorias', 'Economia', 'Educação', 'Energia, Recursos Hídricos e Minerais', 'Esporte e Lazer',
    'Estrutura Fundiária', 'Finanças Públicas e Orçamento',
    'Homenagens e Datas Comemorativas', 'Indústria, Comércio e Serviços', 'Meio Ambiente e Desenvolvimento Sustentável', 'Não Especificado',
    'Política, Partidos e Eleições', 'Previdência e Assistência Social', 'Processo Legislativo e Atuação Parlamentar',
    'Relações Internacionais e Comércio Exterior', 'Saúde', 'Trabalho e Emprego', 'Turismo', 'Viação, Transporte e Mobilidade',
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.topics.value);

    this.topics.setValue([
      // tslint:disable-next-line:max-line-length
      'Administração Pública', 'Agricultura, Pecuária, Pesca e Extrativismo', 'Arte, Cultura e Religião', 'Cidades e Desenvolvimento Urbano', 'Ciências Exatas e da Terra',
      'Ciências Sociais e Humanas',
      'Ciência, Tecnologia e Inovação', 'Comunicações', 'Defesa e Segurança', 'Direito Civil e Processual Civil', 'Direito Constitucional',
      'Direito e Defesa do Consumidor', 'Direito e Justiça',
      'Direito Penal e Processual Penal', 'Direitos Humanos e Minorias', 'Economia', 'Educação', 'Energia, Recursos Hídricos e Minerais', 'Esporte e Lazer',
      'Estrutura Fundiária', 'Finanças Públicas e Orçamento',
      'Homenagens e Datas Comemorativas', 'Indústria, Comércio e Serviços', 'Meio Ambiente e Desenvolvimento Sustentável', 'Não Especificado',
      'Política, Partidos e Eleições', 'Previdência e Assistência Social', 'Processo Legislativo e Atuação Parlamentar',
      'Relações Internacionais e Comércio Exterior', 'Saúde', 'Trabalho e Emprego', 'Turismo', 'Viação, Transporte e Mobilidade',
    ]);

    // topic.source.select();
    this.selectedTopics.concat(this.topicsList);
  }

  onSelect(topic: MatOptionSelectionChange) {

    if (topic.source.selected) {
      this.selectedTopics.push(topic.source.value);

    } else {
      this.selectedTopics = this.selectedTopics.filter(value => value !== topic.source.value)
    }


    this.topicsChanged.emit(this.selectedTopics);
  }

  allTopicsSelected(topic: MatOptionSelectionChange) {

    this.selectedTopics = [];
    if(topic.source.selected){

      this.topicSelectAll = 'Limpar seleção';
    //  topic.source.deselect();

      this.controlDisable = true;

      this.topics.setValue([
        'Administração Pública', 'Agricultura, Pecuária, Pesca e Extrativismo', 'Arte, Cultura e Religião', 'Cidades e Desenvolvimento Urbano', 'Ciências Exatas e da Terra',
        'Ciências Sociais e Humanas',
        'Ciência, Tecnologia e Inovação', 'Comunicações', 'Defesa e Segurança', 'Direito Civil e Processual Civil', 'Direito Constitucional',
        'Direito e Defesa do Consumidor', 'Direito e Justiça',
        'Direito Penal e Processual Penal', 'Direitos Humanos e Minorias', 'Economia', 'Educação', 'Energia, Recursos Hídricos e Minerais', 'Esporte e Lazer',
        'Estrutura Fundiária', 'Finanças Públicas e Orçamento',
        'Homenagens e Datas Comemorativas', 'Indústria, Comércio e Serviços', 'Meio Ambiente e Desenvolvimento Sustentável', 'Não Especificado',
        'Política, Partidos e Eleições', 'Previdência e Assistência Social', 'Processo Legislativo e Atuação Parlamentar',
        'Relações Internacionais e Comércio Exterior', 'Saúde', 'Trabalho e Emprego', 'Turismo', 'Viação, Transporte e Mobilidade',
      ]);

      topic.source.select();
      this.selectedTopics.concat(this.topicsList);
    }
    else {
      this.topicSelectAll = 'Selecionar todos';
      this.controlDisable = false;
      this.topics.setValue([]);
    }
    this.topicsChanged.emit(this.selectedTopics);

  }
}

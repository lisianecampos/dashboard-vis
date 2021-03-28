import {TopicQuantity} from './TopicQuantity';

export class StackedPieChartModel {
  get years(): string[] {
    return this._years;
  }

  set years(value: string[]) {
    this._years = value;
  }

  get topicQuantity(): TopicQuantity[] {
    return this._topicQuantity;
  }

  set topicQuantity(value: TopicQuantity[]) {
    this._topicQuantity = value;
  }
  private _years: string[] = [];
  private _topicQuantity!: TopicQuantity[];

}

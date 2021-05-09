import {TopicQuantity} from './TopicQuantity';

export class TopicQuantityModel {

  private _topicQuantity!: TopicQuantity;
  private _years: string[] = [];

  get topicQuantity(): TopicQuantity {
    return this._topicQuantity;
  }

  set topicQuantity(value: TopicQuantity) {
    this._topicQuantity = value;
  }

  get years(): string[] {
    return this._years;
  }

  set years(value: string[]) {
    this._years = value;
  }
}

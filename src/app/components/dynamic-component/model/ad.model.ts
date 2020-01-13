import { Type } from '@angular/core';

export class AdItem<T> {
  constructor(public component: Type<T>, public data: any) {}
}

import { Injectable } from '@angular/core';

@Injectable()
export class JobchaseViewDataService {

  // temporary
  private _appTitle = "Job Chase";

  constructor() { }

  get appTitle(): string {
    return this._appTitle;
  }

}

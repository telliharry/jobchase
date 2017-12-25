import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class AppConfig {

  // hard-coded, for now.
  private static CONFIG_FILE_PROD = "config.json";
  private static CONFIG_FILE_DEV = "config.dev.json";

  private fileName: string = null;
  private config: { [key: string]: Object } = {};

  // constructor(private http: HttpClient) {  // ???
  constructor(private http: Http) {
  }

  private get configFile(): string {
    if (!this.fileName) {
      if (isDevMode()) {
        this.fileName = AppConfig.CONFIG_FILE_DEV;
      } else {
        this.fileName = AppConfig.CONFIG_FILE_PROD;
      }
    }
    return this.fileName;
  }

  /**
   * Use to get the data found in the second file (config file)
   */
  public get(key: any): (Object | null) {
    // if(this.config) {
    return this.config[key];
    // } else {
    //   return null;
    // }
  }


  public load() {
    return new Promise((resolve, reject) => {
      let request = this.http.get(this.configFile);
      if (request) {  // can request be null???
        console.log("request = " + request.toString());
        request
          .map(response => {
            console.log("response = " + response);
            let json = (response as any).json();
            console.log("json = " + json);
            return json;
          })
          .catch((error: any) => {
            console.error('Error reading ' + this.configFile);
            resolve(error);
            return Observable.throw(error.json().error || 'Server error');
          })
          .subscribe((responseData) => {
            this.config = responseData;
            resolve(true);
          });
      } else {
        console.error('Config file is not valid: ' + this.configFile);
        resolve(true);
      }

    });
  }
}

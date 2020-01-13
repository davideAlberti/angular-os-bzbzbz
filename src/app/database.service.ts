import { Injectable } from '@angular/core';
import xml2js from 'xml2js';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  

@Injectable()
export class DatabaseService {
  constructor(private _http: HttpClient) { } 

  loadXML() {  
    return this._http.get('../assets/dati.xml',  
      {  
        headers: new HttpHeaders()  
          .set('Content-Type', 'text/xml')  
          .append('Access-Control-Allow-Methods', 'GET')  
          .append('Access-Control-Allow-Origin', '*')  
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
        responseType: 'text'  
      })  
  }  
  parseXML(data) {  
    return new Promise(resolve => {  
      var parser = new xml2js.Parser(  
          {  
            trim: true,  
            explicitArray: true  
          });  
      parser.parseString(data, function (err, result) { 
        resolve(result.root.case);  
      });  
    });  
  }  
}
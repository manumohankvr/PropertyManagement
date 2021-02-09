import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProperty } from '../Property/IProperty.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getProperties(SellRent):Observable<IProperty[]>{
    return this.http.get('Data/properties.json').pipe(
      map(data=>{
        const propertiesArray : Array<IProperty>=[];
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent==SellRent){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(protected client: HttpClient) { }


  getAll(): Observable<any> {
    return this.client.get('assets/property.json');
  }

}

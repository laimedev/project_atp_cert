import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(protected client: HttpClient) { }


  getPerson(): Observable<any[]> {
    return this.client.get<any[]>('assets/person.json')
  }

}

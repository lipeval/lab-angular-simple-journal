import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RetrieveEntriesService {

  url = 'http://localhost:3000/journal-entries/';

  constructor(private http: Http) { }

  getEntries(){
    return this.http.get(this.url)
    .pipe(map((res: Response)=>res.json()))
  }

  getSingleEntry(id){
    return this.http.get(this.url + id)
    .pipe(map((res: Response)=>res.json()));

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Construction } from '../model/construction';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Construction[]>{
    return this.http.get<Construction[]>(`${environment.apiUrl}`);
  }

  get(id: number): Observable<Construction>{
    return this.http.get<Construction>(`${environment.apiUrl}/${id}`);
  }

  update(construction: Construction): Observable<Construction>{
    return this.http.patch<Construction>(
      `${environment.apiUrl}/${construction.id}`,
      construction
    );
  }
}

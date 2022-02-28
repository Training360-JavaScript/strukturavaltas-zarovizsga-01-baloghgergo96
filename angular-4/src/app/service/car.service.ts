import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../model/car';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Car[]>{
    return this.http.get<Car[]>(`${environment.apiUrl}`);
  }

  get(id: number): Observable<Car>{
    return this.http.get<Car>(`${environment.apiUrl}/${id}`);
  }

  update(car: Car): Observable<Car>{
    return this.http.patch<Car>(
      `${environment.apiUrl}/${car.id}`,
      car
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { CarService } from 'src/app/service/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss']
})
export class CarEditorComponent implements OnInit {

  cars$: Observable<Car> = this.activatedRoute.params.pipe(
    switchMap( params => this.carService.get(params['id']))
  )

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(car: Car): void {
    this.carService.update(car).subscribe(
      car => this.router.navigate(['/', 'car'])
    )
  }

}

import { Component } from '@angular/core';
import { Actualite } from '../actualite';
import { ActualiteService } from '../services/actualite.service';

@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.component.html',
  styleUrls: ['./actuality.component.css']
})
export class ActualityComponent {

  actualites:Actualite[]=[];

  constructor(private act:ActualiteService){}

  ngOnInit(): void
  {
    this.act.getActualites().subscribe((data) =>(this.actualites=data));
  }
}

// Import statements
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actualite } from 'src/app/actualite';
import { ActualiteService } from 'src/app/services/actualite.service';

@Component({
  selector: 'app-list-actualite',
  templateUrl: './list-actualite.component.html',
  styleUrls: ['./list-actualite.component.css']
})
export class ListActualiteComponent {

  actualites: Actualite[] = [];
  hideForm = true;
  actForm!: FormGroup;
  selectedActualite: Actualite | null = null; // Track selected actualite

  constructor(private act: ActualiteService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.act.getActualites().subscribe((data) => (this.actualites = data));
    this.actForm = this.fb.group({
      nom: ['', Validators.required],
      date: ['', Validators.required],
      desc: ['', Validators.required],
      img: ['', Validators.required]
    });
  }

  public get nom() {
    return this.actForm.get('nom');
  }
  public get date() {
    return this.actForm.get('date');
  }
  public get desc() {
    return this.actForm.get('desc');
  }
  public get img() {
    return this.actForm.get('img');
  }

  AddActualite() {
    this.act.addActualite(this.actForm.value).subscribe(
      data => {
        this.actualites.push(data);
        this.refreshPage();
      }
    );
  }

  ChangeActualite(actualite: Actualite) {
    this.hideForm = false;
    this.selectedActualite = actualite; // Set the selected actualite
    this.actForm.get('nom')?.setValue(actualite.nom);
    this.actForm.get('date')?.setValue(actualite.date);
    this.actForm.get('desc')?.setValue(actualite.description);
    this.actForm.get('img')?.setValue(actualite.img);
  }

  UpdateActualite() {
    if (this.selectedActualite) {
      this.act.updateActualite(this.selectedActualite.id, this.actForm.value).subscribe(() => {
        this.selectedActualite = null; // Reset selected actualite
        this.refreshPage();
      });
    }
  }

  deleteActualite(id: number): void {
    this.act.deleteActualite(id).subscribe(
      () => {
        this.refreshPage();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  changeForm() {
    this.hideForm = !this.hideForm;
    this.selectedActualite = null; // Reset selected actualite
  }

  private refreshPage(): void {
    this.router.navigate(['/'], { skipLocationChange: true }).then(() => {
      this.router.navigate(['/admin/actualites']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { GovernoratesService } from '../../services/governorates.service';
import { IGovernorates } from '../../interface/igovernorates';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-governorates',
  imports: [ReactiveFormsModule , CommonModule , RouterModule],
  templateUrl: './governorates.component.html',
  styleUrl: './governorates.component.scss'
})
export class GovernoratesComponent implements OnInit {
  editModel:boolean =false;
  governoratesList: IGovernorates[] = []

 formGovernorates: FormGroup = new FormGroup({
      id: new FormControl(0),

    nameAr: new FormControl(null, [Validators.required]),
  })

  constructor(private _governoratesService: GovernoratesService) { }
  ngOnInit(): void {
    this.getAllGovernorates()
  }



  /* governoratesForm:FormGroup = new FormGroup({
    id: new FormControl(null),
    nameAr: new FormControl(null, [Validators.required]),

  }) */
  getAllGovernorates() {
    this._governoratesService.getAllGovernorates().subscribe({
      next: (res) => {
        this.governoratesList = res.data;

      },
      error: (err) => {
      }
    })
  }

  addGovernorates() {
    if(this.formGovernorates.valid) {
      if(this.formGovernorates.value.id == 0) {
        this._governoratesService.addGovernorates(this.formGovernorates.value).subscribe({
          next: (res) => {
          this.getAllGovernorates();
          this.formGovernorates.reset();
        },
        error: (err) => {
        }
        })

      } else {
         this._governoratesService.updataGovernorates(this.formGovernorates.value).subscribe({
          next: (res) => {
          this.getAllGovernorates();
          this.formGovernorates.reset();
        },
        error: (err) => {
        }
         })
      }
    }

    }
  editGovernorates(id:number) {
    this._governoratesService.getGovernoratesById(id).subscribe({
      next: (res) => {
        this.formGovernorates.patchValue(res.data);
        this.editModel= true
      },
      error: (err) => {
      }
    })
  }


  deleteGovernorates(id:number) {
    this._governoratesService.deleteGovernorates(id).subscribe({
      next: (res) => {
        this.getAllGovernorates()
      },
      error: (err) => {

      }
    })
  }
}

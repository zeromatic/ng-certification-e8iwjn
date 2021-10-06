import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-zip-form',
  templateUrl: './zip-form.component.html',
  styleUrls: ['./zip-form.component.css']
})
export class ZipFormComponent implements OnInit {

  @Output() zipCodeAdded = new EventEmitter<number>();

  public form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      zip: ["", [Validators.required, Validators.pattern("[0-9]+")]],
    })
  }

  ngOnInit(): void {
  }

  public addZip() {
    if (this.form.valid) {
      this.zipCodeAdded.emit(Number(this.form.get("zip")?.value));
      this.form.reset();
    }
  }

}

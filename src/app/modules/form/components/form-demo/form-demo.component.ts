import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss'],
})
export class FormDemoComponent implements OnInit {
  formGroup = new FormGroup({
    rating: new FormControl({ value: 1, disabled: false }),
  });

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.formGroup.patchValue({ rating: 4 });
    console.log(this.formGroup.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;

  public value: any;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      numberInput: ['', [Validators.required]],
      textInput: ['', []]
    });
  }

  ngOnInit() {}

  onClick() {
    this.value = this.formGroup.value;
    console.log(this.formGroup.valid);
  }
}

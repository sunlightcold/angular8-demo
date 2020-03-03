import { of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { isNull } from 'util';
import { debounceTime, distinctUntilChanged, first, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-custom-form-validator',
  templateUrl: './custom-form-validator.component.html',
  styleUrls: ['./custom-form-validator.component.scss'],
})
export class CustomFormValidatorComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      userName: ['', [Validators.required]],
      userPaw: ['', [Validators.required, Validators.maxLength(10)]],
      webUrl: ['', [Validators.required, this.validateUrl]],
      length: [''],
    });

    // 实例化完成后添加验证
    this.formGroup.get('length').setValidators(this.validateLength(10));
    this.formGroup.get('length').setAsyncValidators(this.asyncValidateUrl());
  }

  resetButton() {
    this.formGroup.reset();
  }

  getStatus() {
    console.log(this.formGroup.valid);
  }

  validateUrl(control: AbstractControl) {
    const value = control.value as string;
    if (isNull(value)) {
      return null;
    }
    console.log(value);
    if (value.startsWith('www') && value.endsWith('.com')) {
      // 通过验证
      return null;
    }
    /** 不通过验证，urlError 为表单错误标示，可以供后期判断错误类型 */
    return { urlError: true };
  }

  validateLength(len: number): ValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value as string;
      if (isNull(value)) {
        return null;
      }

      if (value.length > len) {
        return null;
      }
      return { lenError: true };
    };
  }

  asyncValidateUrl(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        flatMap(() => {
          console.log(control.value);
          return of(null).pipe();
        })
      );
      // const value = control.value;
      // if (isNull(value)) {
      //   return of(null);
      // }
      // if (value.startsWith('www')) {
      //   return of(null);
      // }
      // return of({ urlError: true });
    };
  }
}

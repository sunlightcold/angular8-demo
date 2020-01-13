import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { concat, debounceTime, switchAll, concatAll, take, throttleTime, map, merge } from 'rxjs/operators';
import { Observable, of, combineLatest } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;

  public value: any;

  private number = 1;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      discount: [0, []],
      jprice: [0, []],
      sums: [0, []]
    });

    const discount: Observable<any> = this.formGroup.controls.discount.valueChanges.pipe(map(e => ({ data: e, form: 'discount' })));
    const jprice: Observable<any> = this.formGroup.controls.jprice.valueChanges.pipe(map(e => ({ data: e, form: 'jprice' })));
    const sums: Observable<any> = this.formGroup.controls.sums.valueChanges.pipe(map(e => ({ data: e, form: 'sums' })));

    // tslint:disable-next-line: deprecation
    discount.pipe(merge(jprice, sums)).subscribe(res => {
      console.log(res);
      // tslint:disable-next-line: max-line-length
      this.formGroup.patchValue({ discount: this.number++, jprice: this.number++, sums: this.number++ }, { emitEvent: false });
    });

    this.formGroup.get('discount').valueChanges.subscribe(res => {
      console.log(res);
    });

    // this.autoFormGroup();

    // sums.pipe().subscribe(res => {
    //   this.formGroup.patchValue({ discount: 1, jprice: 1 });
    // });

    // discount.pipe().subscribe(res => {
    //   this.formGroup.patchValue({ jprice: 1, sum: 1 });
    // });

    // jprice.pipe().subscribe(res => {
    //   this.formGroup.patchValue({ discount: 1, sums: 1 });
    // });

    // tslint:disable-next-line: deprecation
    // combineLatest(discount, jprice, sums, (num1, num2, num3) => {
    //   console.log(num1, num2, num3);
    //   return { num1, num2, num3 };
    // }).subscribe(res => {
    //   this.formGroup.patchValue({ discount: 1, sums: 1 });
    // });

    // const source = of(discount, sums, jprice);

    // tslint:disable-next-line: deprecation
    // source.pipe(throttleTime(1000), concatAll()).subscribe(res => {
    //   console.log(res);
    // });
  }

  autoFormGroup() {
    this.formGroup.valueChanges.pipe(take(1)).subscribe({
      complete: () => {
        this.formGroup.patchValue({ discount: ++this.number, jprice: ++this.number });
        this.autoFormGroup();
      }
    });
  }

  ngOnInit() {}

  onClick() {
    this.value = this.formGroup.value;
    console.log(this.formGroup.valid);
  }
}

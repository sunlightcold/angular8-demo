import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, } from '@angular/forms';

@Component({
  selector: 'app-custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomFormControlComponent),
      multi: true,
    },
  ],
})
export class CustomFormControlComponent implements ControlValueAccessor {
  public ratings = [
    {
      stars: 1,
      text: 'must GTFO ASAP',
    },
    {
      stars: 2,
      text: 'meh',
    },
    {
      stars: 3,
      text: "it's ok",
    },
    {
      stars: 4,
      text: "I'd be sad if a black hole ate it",
    },
    {
      stars: 5,
      text: '10/10 would write review on Amazon',
    },
  ];
  public disabled: boolean;
  public ratingText: string;
  public value$: number;

  onChanged: any = () => {};
  onTouched: any = () => {};

  /**
   * 初始化 formControl 时调用，设置 formControl 值时调用
   * @param val control 传入的值
   */
  writeValue(val: number) {
    console.log(val);
    this.value$ = val;
  }

  registerOnChange(fn: any) {
    // console.log(fn);
    // this.onChanged = fn;
  }

  registerOnTouched(fn: any) {
    // console.log(fn);
    // this.onTouched = fn;
  }

  /**
   * 当 formControl 初始化时使用了 disabled 的属性时被调用
   * 当 formControl 的 disabled 状态发生了变化时被调用
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setRating(star: any) {
    if (!this.disabled) {
      this.value$ = star.stars;
      this.ratingText = star.text;
      this.onChanged(star.stars);
      this.onTouched();
    }
  }
}

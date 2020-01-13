import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-enter-todo',
  templateUrl: './enter-todo.component.html',
  styleUrls: ['./enter-todo.component.scss'],
})
export class EnterTodoComponent implements OnInit {
  @Output()
  enterPress = new EventEmitter<string>();

  formControl = new FormControl('', []);

  constructor() {}

  ngOnInit() {}

  onEnterPress() {
    this.enterPress.emit(this.formControl.value);
    this.formControl.setValue('');
  }
}

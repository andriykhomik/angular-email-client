import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() public label: string;
  @Input() public control: FormControl;
  @Input() public inputType: string;

  ngOnInit() {}

  public showErrors(): boolean {
    const { dirty, touched, errors } = this.control;
    return !!(dirty && touched && errors);
  }
}

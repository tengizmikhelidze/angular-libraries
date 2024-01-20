import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-transliteration',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent {
  form: FormGroup = this.fb.group({
    numberInput: [{value: '', disabled: true}]
  })

  constructor(private fb: FormBuilder) {
  }
}

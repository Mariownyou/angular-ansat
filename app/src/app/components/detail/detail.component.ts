import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail = this.detailService.detail
  myForm: FormGroup

  constructor(private detailService: DetailService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      width: [0, [
        Validators.min(50),
        Validators.max(400)
      ]],
      height: [0, [
        Validators.min(50),
        Validators.max(400)
      ]],
    })
  }

  get width() {
    return this.myForm.get('width')
  }

  get height() {
    return this.myForm.get('height')
  }

}

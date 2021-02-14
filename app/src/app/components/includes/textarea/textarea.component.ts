import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  stage = this.detailService.stage
  stageJSON: string = JSON.stringify(this.stage, null, "   ")

  constructor(private detailService: DetailService) { }

  ngOnInit(): void {
    this.stageJSON = JSON.stringify(this.stage, null, "   ")
  }

  submit() {
    console.log(this.detailService.stage, this.stageJSON)
    this.detailService.stage = JSON.parse(this.stageJSON);
    console.log(this.detailService.stage)
  }

}

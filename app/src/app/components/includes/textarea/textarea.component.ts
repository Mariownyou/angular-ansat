import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  stageJSON: string = this.detailService.getStageJson() 

  getStage() {
    this.stageJSON = this.detailService.getStageJson()
  }

  constructor(private detailService: DetailService) { }

  ngOnInit(): void {
  }

  submit() {
    // console.log(this.detailService.stage, this.stageJSON)
    this.detailService.setStage(this.stageJSON);
    // console.log(this.detailService.stage)
  }

}

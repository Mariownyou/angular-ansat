import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Component as C} from '../../models/component' 
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {
  stage = this.detailService.stage
  stageWeight = this.detailService.getStageWeight
  stageComponents = this.detailService.stage.components
  components: Array<C> = [
    {
      detail: {width: 100, height: 100},
      weight: 100,
      thickness: 3,
      type: 'cargo'
    },
    {
      detail: {width: 100, height: 100},
      weight: 100,
      thickness: 3,
      type: 'fuel'
    }
  ]

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  addComponent() {
    this.components.push(this.detailService.component)
  }

  constructor(private detailService: DetailService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  component = this.detailService.component
  types: string[] = [
    'engine',
    'cargo',
    'fuel',
    'other'
  ]

  constructor(private detailService: DetailService) { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit, Inject } from '@angular/core';
import { Component as C } from '../../../models/component'
import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-component-box',
  templateUrl: './component-box.component.html',
  styleUrls: ['./component-box.component.scss']
})
export class ComponentBoxComponent implements OnInit {

  @Input() component: C
  @Input() dragable: boolean = false

  colors = {
    'engine': '#CBCBCB',
    'cargo': '#EFB926',
    'fuel': '#EF265D',
    'other': '#7750E4'
  }

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(Dialog, {
      data: {component: this.component},
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['./component-box.component.scss']
})
export class Dialog {
  component = this.data.component
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  // will log the entire data object
    console.log(this.data)
  }
}
import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

type Teste = {
  image: string
  projectName: string
  projectType: string
}
@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './project-item.component.html'
})
export class ProjectItemComponent {
  @Input() image: string = "";
  @Input() projectName: string = "";
  @Input() projectType: string = "back-end";

  constructor(public dialog: MatDialog) { }

  openDialog() {

    this.dialog.open(DialogBox, {
      data: {
        image: this.image,
        projectName: this.projectName,
        projectType: this.projectType,
      }
    });
  }
}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-box.html',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatButtonModule, NgOptimizedImage]
})
export class DialogBox {
  image: string = "";
  projectType: string = "";
  projectName: string = "";
  constructor(
    public dialogRef: MatDialogRef<DialogBox>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.image = data.image;
      this.projectType = data.projectType;
      this.projectName = data.projectName;
    }
  }

}
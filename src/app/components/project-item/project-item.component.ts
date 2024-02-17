import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
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


@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './project-item.component.html'
})
export class ProjectItemComponent {
  @Input() avatar_url: string = ""
  @Input() name: string = ""
  @Input() language: string = ""
  @Input() url: string = ""
  @Input() description: string = ""

  constructor(public dialog: MatDialog) { }

  openDialog() {

    this.dialog.open(DialogBox, {
      data: {
        image: this.avatar_url,
        name: this.name,
        language: this.language,
      }
    });
  }
}


@Component({
  selector: 'dialog-box',
  templateUrl: 'dialog-box.html',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatButtonModule, NgOptimizedImage]
})
export class DialogBox {
  image: string = "";
  language: string = "";
  name: string = "";
  constructor(
    public dialogRef: MatDialogRef<DialogBox>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.image = data.avatar_url;
      this.language = data.language;
      this.name = data.name;
    }
  }
}
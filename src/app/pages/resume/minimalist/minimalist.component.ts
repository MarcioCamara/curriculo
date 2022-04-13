import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-minimalist',
  templateUrl: './minimalist.component.html',
  styleUrls: ['./minimalist.component.scss']
})
export class MinimalistComponent {
  @Input() resume: any;

  downloadResume(): void {

  }

  printResume(): void {

  }
}

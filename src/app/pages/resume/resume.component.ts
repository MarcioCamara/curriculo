import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  resume: any = {};

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.resume = this.location.getState();
    console.log(this.resume);
  }
}

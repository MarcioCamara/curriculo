import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateResumeComponent } from './generate-resume.component';

describe('GenerateResumeComponent', () => {
  let component: GenerateResumeComponent;
  let fixture: ComponentFixture<GenerateResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

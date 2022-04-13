import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalistComponent } from './minimalist.component';

describe('MinimalistComponent', () => {
  let component: MinimalistComponent;
  let fixture: ComponentFixture<MinimalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

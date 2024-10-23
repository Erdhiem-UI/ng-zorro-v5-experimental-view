import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedComponent } from './segmented.component';

describe('SegmentedComponent', () => {
  let component: SegmentedComponent;
  let fixture: ComponentFixture<SegmentedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegmentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopconfirmComponent } from './popconfirm.component';

describe('PopconfirmComponent', () => {
  let component: PopconfirmComponent;
  let fixture: ComponentFixture<PopconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopconfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

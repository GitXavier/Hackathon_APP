import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilulierNewComponent } from './pilulier-new.component';

describe('PilulierNewComponent', () => {
  let component: PilulierNewComponent;
  let fixture: ComponentFixture<PilulierNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilulierNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilulierNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

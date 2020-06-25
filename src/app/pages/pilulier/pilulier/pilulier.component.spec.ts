import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilulierComponent } from './pilulier.component';

describe('PilulierComponent', () => {
  let component: PilulierComponent;
  let fixture: ComponentFixture<PilulierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilulierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

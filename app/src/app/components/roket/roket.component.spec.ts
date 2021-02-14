import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoketComponent } from './roket.component';

describe('RoketComponent', () => {
  let component: RoketComponent;
  let fixture: ComponentFixture<RoketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

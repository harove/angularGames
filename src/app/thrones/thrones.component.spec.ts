import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThronesComponent } from './thrones.component';

describe('ThronesComponent', () => {
  let component: ThronesComponent;
  let fixture: ComponentFixture<ThronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThronesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

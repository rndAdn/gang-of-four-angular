import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMoveBoardComponent } from './last-move-board.component';

describe('LastMoveBoardComponent', () => {
  let component: LastMoveBoardComponent;
  let fixture: ComponentFixture<LastMoveBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastMoveBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMoveBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

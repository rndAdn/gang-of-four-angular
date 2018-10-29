import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOpenedGameComponent } from './list-opened-game.component';

describe('ListOpenedGameComponent', () => {
  let component: ListOpenedGameComponent;
  let fixture: ComponentFixture<ListOpenedGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOpenedGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOpenedGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

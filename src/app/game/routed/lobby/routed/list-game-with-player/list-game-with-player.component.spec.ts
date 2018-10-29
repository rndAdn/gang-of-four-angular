import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGameWithPlayerComponent } from './list-game-with-player.component';

describe('ListGameWithPlayerComponent', () => {
  let component: ListGameWithPlayerComponent;
  let fixture: ComponentFixture<ListGameWithPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGameWithPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGameWithPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

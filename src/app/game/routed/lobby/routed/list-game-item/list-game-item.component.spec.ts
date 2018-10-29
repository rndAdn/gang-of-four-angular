import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGameItemComponent } from './list-game-item.component';

describe('ListGameItemComponent', () => {
  let component: ListGameItemComponent;
  let fixture: ComponentFixture<ListGameItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGameItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGameItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

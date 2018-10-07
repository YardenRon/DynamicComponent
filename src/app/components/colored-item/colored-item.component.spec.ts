import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredItemComponent } from './colored-item.component';

describe('ColoredItemComponent', () => {
  let component: ColoredItemComponent;
  let fixture: ComponentFixture<ColoredItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoredItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoredItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

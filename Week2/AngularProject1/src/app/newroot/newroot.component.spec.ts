import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrootComponent } from './newroot.component';

describe('NewrootComponent', () => {
  let component: NewrootComponent;
  let fixture: ComponentFixture<NewrootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewrootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

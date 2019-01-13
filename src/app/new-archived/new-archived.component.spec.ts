import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArchivedComponent } from './new-archived.component';

describe('NewArchivedComponent', () => {
  let component: NewArchivedComponent;
  let fixture: ComponentFixture<NewArchivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewArchivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

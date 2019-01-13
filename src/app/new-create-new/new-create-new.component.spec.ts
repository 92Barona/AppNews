import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCreateNewComponent } from './new-create-new.component';

describe('NewCreateNewComponent', () => {
  let component: NewCreateNewComponent;
  let fixture: ComponentFixture<NewCreateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCreateNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCreateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

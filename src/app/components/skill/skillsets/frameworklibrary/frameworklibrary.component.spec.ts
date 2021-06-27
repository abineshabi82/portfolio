import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworklibraryComponent } from './frameworklibrary.component';

describe('FrameworklibraryComponent', () => {
  let component: FrameworklibraryComponent;
  let fixture: ComponentFixture<FrameworklibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworklibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworklibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

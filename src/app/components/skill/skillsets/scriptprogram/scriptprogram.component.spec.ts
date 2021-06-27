import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptprogramComponent } from './scriptprogram.component';

describe('ScriptprogramComponent', () => {
  let component: ScriptprogramComponent;
  let fixture: ComponentFixture<ScriptprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptprogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

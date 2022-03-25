import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessParticipeFormationComponent } from './success-participe-formation.component';

describe('SuccessParticipeFormationComponent', () => {
  let component: SuccessParticipeFormationComponent;
  let fixture: ComponentFixture<SuccessParticipeFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessParticipeFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessParticipeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

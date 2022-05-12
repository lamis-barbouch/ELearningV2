import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormateurComponent } from './quiz-formateur.component';

describe('QuizFormateurComponent', () => {
  let component: QuizFormateurComponent;
  let fixture: ComponentFixture<QuizFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

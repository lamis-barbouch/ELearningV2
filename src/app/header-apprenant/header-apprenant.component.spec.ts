import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderApprenantComponent } from './header-apprenant.component';

describe('HeaderApprenantComponent', () => {
  let component: HeaderApprenantComponent;
  let fixture: ComponentFixture<HeaderApprenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderApprenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

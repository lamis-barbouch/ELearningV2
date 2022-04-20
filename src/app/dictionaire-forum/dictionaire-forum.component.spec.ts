import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaireForumComponent } from './dictionaire-forum.component';

describe('DictionaireForumComponent', () => {
  let component: DictionaireForumComponent;
  let fixture: ComponentFixture<DictionaireForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaireForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaireForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

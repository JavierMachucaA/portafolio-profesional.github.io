import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDescComponent } from './skill-desc.component';

describe('SkillDescComponent', () => {
  let component: SkillDescComponent;
  let fixture: ComponentFixture<SkillDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

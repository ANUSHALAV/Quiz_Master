import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPlayground } from './question-playground';

describe('QuestionPlayground', () => {
  let component: QuestionPlayground;
  let fixture: ComponentFixture<QuestionPlayground>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionPlayground]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionPlayground);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

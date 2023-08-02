import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotWrapperComponent } from './chatbot-wrapper.component';

describe('ChatbotWrapperComponent', () => {
  let component: ChatbotWrapperComponent;
  let fixture: ComponentFixture<ChatbotWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatbotWrapperComponent]
    });
    fixture = TestBed.createComponent(ChatbotWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

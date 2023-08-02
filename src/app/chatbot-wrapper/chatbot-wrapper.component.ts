// chatbot-wrapper.component.ts
import { Component, ViewChild, ViewEncapsulation, AfterViewInit, ElementRef } from '@angular/core';
import { ChatbotComponent } from '../chatbot/chatbot.component';

@Component({
  selector: 'app-chatbot-wrapper',
  template: `
    <div class="chatbot-wrapper">
      <app-chatbot></app-chatbot>
    </div>
  `,
  styleUrls: ['./chatbot-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ChatbotWrapperComponent implements AfterViewInit {
  @ViewChild(ChatbotComponent) chatbotComponent?: ChatbotComponent;

  ngAfterViewInit() {
  }
}

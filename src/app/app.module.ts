import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ChatbotWrapperComponent } from './chatbot-wrapper/chatbot-wrapper.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
    ChatbotWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const wrapperElement = createCustomElement(ChatbotWrapperComponent, { injector: this.injector });
    // Define a unique name for your custom element (e.g., my-chatbot-wrapper)
    customElements.define('my-chatbot-wrapper', wrapperElement);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
    chatMessages: string[] = [];
    userInput: string = '';
  
    sendMessage() {
      if (this.userInput.trim() !== '') {
        this.chatMessages.push(`You: ${this.userInput}`);
        // Add chatbot response logic here
        this.userInput = '';
      }
    }
}

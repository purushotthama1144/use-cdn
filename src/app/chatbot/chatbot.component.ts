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
        console.log("user input" ,this.userInput)
        this.userInput = 'How can i help you ?';
        console.log("my response" ,this.userInput)
      }
    }
}

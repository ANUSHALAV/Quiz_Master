import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizQuestionAnswere {
  private quizQuestionAnswere: any = [
    {
      Id: 1,
      Question: 'What is the capital of India?',
      Options: [
        { Id: 1, Option: 'Mumbai' },
        { Id: 2, Option: 'New Delhi' },
        { Id: 3, Option: 'Kolkata' }
      ],
      Answere: 2
    },
    {
      Id: 2,
      Question: 'Who is known as the Father of the Nation in India?',
      Options: [
        { Id: 1, Option: 'Jawaharlal Nehru' },
        { Id: 2, Option: 'Subhash Chandra Bose' },
        { Id: 3, Option: 'Mahatma Gandhi' }
      ],
      Answere: 3
    },
    {
      Id: 3,
      Question: 'Which planet is known as the Red Planet?',
      Options: [
        { Id: 1, Option: 'Earth' },
        { Id: 2, Option: 'Mars' },
        { Id: 3, Option: 'Jupiter' }
      ],
      Answere: 2
    },
    {
      Id: 4,
      Question: 'Which is the largest ocean in the world?',
      Options: [
        { Id: 1, Option: 'Indian Ocean' },
        { Id: 2, Option: 'Atlantic Ocean' },
        { Id: 3, Option: 'Pacific Ocean' }
      ],
      Answere: 3
    },
    {
      Id: 5,
      Question: 'How many continents are there in the world?',
      Options: [
        { Id: 1, Option: '5' },
        { Id: 2, Option: '6' },
        { Id: 3, Option: '7' }
      ],
      Answere: 3
    },
    {
      Id: 6,
      Question: 'Which is the national animal of India?',
      Options: [
        { Id: 1, Option: 'Lion' },
        { Id: 2, Option: 'Tiger' },
        { Id: 3, Option: 'Elephant' }
      ],
      Answere: 2
    },
    {
      Id: 7,
      Question: 'Which gas is most abundant in the Earth’s atmosphere?',
      Options: [
        { Id: 1, Option: 'Oxygen' },
        { Id: 2, Option: 'Carbon Dioxide' },
        { Id: 3, Option: 'Nitrogen' }
      ],
      Answere: 3
    },
    {
      Id: 8,
      Question: 'Who invented the telephone?',
      Options: [
        { Id: 1, Option: 'Alexander Graham Bell' },
        { Id: 2, Option: 'Thomas Edison' },
        { Id: 3, Option: 'Nikola Tesla' }
      ],
      Answere: 1
    },
    {
      Id: 9,
      Question: 'Which is the smallest prime number?',
      Options: [
        { Id: 1, Option: '0' },
        { Id: 2, Option: '1' },
        { Id: 3, Option: '2' }
      ],
      Answere: 3
    },
    {
      Id: 10,
      Question: 'Which country is known as the Land of the Rising Sun?',
      Options: [
        { Id: 1, Option: 'China' },
        { Id: 2, Option: 'Japan' },
        { Id: 3, Option: 'Thailand' }
      ],
      Answere: 2
    }
  ];


  getQuestionAnswere() {
    return this.quizQuestionAnswere;
  }
}

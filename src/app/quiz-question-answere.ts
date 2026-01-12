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
    },
    {
      Id: 11,
      Question: 'Which is the longest river in the world?',
      Options: [
        { Id: 1, Option: 'Amazon River' },
        { Id: 2, Option: 'Nile River' },
        { Id: 3, Option: 'Yangtze River' }
      ],
      Answere: 2
    },
    {
      Id: 12,
      Question: 'Who wrote the Indian National Anthem?',
      Options: [
        { Id: 1, Option: 'Bankim Chandra Chatterjee' },
        { Id: 2, Option: 'Rabindranath Tagore' },
        { Id: 3, Option: 'Sarojini Naidu' }
      ],
      Answere: 2
    },
    {
      Id: 13,
      Question: 'Which is the largest desert in the world?',
      Options: [
        { Id: 1, Option: 'Sahara Desert' },
        { Id: 2, Option: 'Gobi Desert' },
        { Id: 3, Option: 'Antarctic Desert' }
      ],
      Answere: 3
    },
    {
      Id: 14,
      Question: 'What is the national flower of India?',
      Options: [
        { Id: 1, Option: 'Rose' },
        { Id: 2, Option: 'Lotus' },
        { Id: 3, Option: 'Sunflower' }
      ],
      Answere: 2
    },
    {
      Id: 15,
      Question: 'Which planet is closest to the Sun?',
      Options: [
        { Id: 1, Option: 'Venus' },
        { Id: 2, Option: 'Earth' },
        { Id: 3, Option: 'Mercury' }
      ],
      Answere: 3
    },
    {
      Id: 16,
      Question: 'Who was the first Prime Minister of India?',
      Options: [
        { Id: 1, Option: 'Mahatma Gandhi' },
        { Id: 2, Option: 'Jawaharlal Nehru' },
        { Id: 3, Option: 'Dr. Rajendra Prasad' }
      ],
      Answere: 2
    },
    {
      Id: 17,
      Question: 'Which organ purifies blood in the human body?',
      Options: [
        { Id: 1, Option: 'Heart' },
        { Id: 2, Option: 'Liver' },
        { Id: 3, Option: 'Kidney' }
      ],
      Answere: 3
    },
    {
      Id: 18,
      Question: 'Which is the fastest land animal?',
      Options: [
        { Id: 1, Option: 'Tiger' },
        { Id: 2, Option: 'Cheetah' },
        { Id: 3, Option: 'Leopard' }
      ],
      Answere: 2
    },
    {
      Id: 19,
      Question: 'How many colors are there in a rainbow?',
      Options: [
        { Id: 1, Option: '6' },
        { Id: 2, Option: '7' },
        { Id: 3, Option: '8' }
      ],
      Answere: 2
    },
    {
      Id: 20,
      Question: 'Which is the smallest country in the world?',
      Options: [
        { Id: 1, Option: 'Monaco' },
        { Id: 2, Option: 'Vatican City' },
        { Id: 3, Option: 'Maldives' }
      ],
      Answere: 2
    }

  ];


  getQuestionAnswere() {
    return this.quizQuestionAnswere;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizQuestionAnswere {
  private quizQuestionAnswere: any = [
    {
      Id: 1,
      Question: 'jjflsjdfjalfjlksd1',
      Options: [
        {
          Id: 1,
          Option: 'asdfsf'
        },
        {
          Id: 2,
          Option: "afdsda"
        },
        {
          Id: 3,
          Option: 'jasfkljslk'
        }
      ],
      Answere: 1
    },
    {
      Id: 2,
      Question: 'jjflsjdfjalfjlksd2',
      Options: [
        {
          Id: 1,
          Option: 'asdfsf'
        },
        {
          Id: 2,
          Option: "afdsda"
        },
        {
          Id: 3,
          Option: 'jasfkljslk'
        }
      ],
      Answere: 1
    },
    {
      Id: 3,
      Question: 'jjflsjdfjalfjlksd3',
      Options: [
        {
          Id: 1,
          Option: 'asdfsf'
        },
        {
          Id: 2,
          Option: "afdsda"
        },
        {
          Id: 3,
          Option: 'jasfkljslk'
        }
      ],
      Answere: 1
    },
    {
      Id: 4,
      Question: 'jjflsjdfjalfjlksd4',
      Options: [
        {
          Id: 1,
          Option: 'asdfsf'
        },
        {
          Id: 2,
          Option: "afdsda"
        },
        {
          Id: 3,
          Option: 'jasfkljslk'
        }
      ],
      Answere: 1
    },

  ];

  getQuestionAnswere() {
    return this.quizQuestionAnswere;
  }
}

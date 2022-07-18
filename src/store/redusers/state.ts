const date = new Date().toLocaleDateString()

export const arrayLetters = {
   "Входящие": {
      id: 1,
      letters: [
         {
            id: 1,
            value: "Очень много текста и другой информации...", autor: "German", date: date, chect: false
         },
         {
            id: 2, value: "text2 TRtji jios i hufuwn ncbdhj bjsbfbjbjb bf ",
            autor: "Garry", date: date, chect: false
         },
         {
            id: 3, value: `Lorem ipsum dolor sit amet consectetur, 
         adipisicing elit. Explicabo ea dolores magnam delectus aut!
          A perferendis in, quisquam est dolores debitis! Corporis architecto quia,
           id ratione fugit accusamus eius quidem. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Minima, repellat! Eius dignissimos in, sit earum quibusdam numquam
             inventore reprehenderit aperiam dolore minima voluptas sapiente possimus, provident
              excepturi veniam, aliquam quis!`,
            autor: "Cherry", date: date, chect: false
         },
      ],
      changeFolder: false,
   },
   "Исходящие": {
      id: 2,
      letters: [
         { id: 1, value: "текст", autor: "Black", date: date, chect: false },
         { id: 2, value: "текст2", autor: "White", date: date, chect: false },
         { id: 3, value: "текст3", autor: "Pinc", date: date, chect: false },
      ],
      changeFolder: false,
   },
   "Черновики": {
      id: 3,
      letters: [
         { id: 1, value: "Очень много текста и другой информации...", autor: "German", date: date, chect: false },
         { id: 2, value: "text2 TRtji jios i hufuwn ncbdhj bjsbfbjbjb bf ", autor: "Garry", date: date, chect: false },
         { id: 3, value: "text3", autor: "Cherry", date: date, chect: false },
      ],
      changeFolder: false,
   },
   "Удаленные": {
      id: 4,
      letters: [
         { id: 1, value: "текст", autor: "Black", date: date, chect: false },
         { id: 2, value: "текст2", autor: "White", date: date, chect: false },
         { id: 3, value: "текст3", autor: "Pinc", date: date, chect: false },
         {
            id: 4, value: "Очень много текста и другой информации...",
            autor: "German", date: date, chect: false
         },
         {
            id: 5, value: "text2 TRtji jios i hufuwn ncbdhj bjsbfbjbjb bf ",
            autor: "Garry", date: date, chect: false
         },
         { id: 6, value: "text3", autor: "Cherry", date: date, chect: false },
      ],
      changeFolder: false,
   },
   "Спам": {
      id: 5,
      letters: [
         {
            id: 1, value: "Очень много текста и другой информации...",
            autor: "German", date: date, chect: false
         },
         {
            id: 2, value: "text2 TRtji jios i hufuwn ncbdhj bjsbfbjbjb bf ",
            autor: "Garry", date: date, chect: false
         },
         { id: 3, value: "text3", autor: "Cherry", date: date, chect: false },
      ],
      changeFolder: false,
   },
}
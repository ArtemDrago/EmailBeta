const date = new Date().toLocaleDateString()

export const arrayLetters = {
   "Inbox": {
      id: 1,
      letters: [
         {
            id: 1,
            value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit
             Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis
              alias iste natus minima magnam similique enim labore hic repellat omnis doloremque.`
            , autor: "German", date: date, chect: false, label: false
         },
         {
            id: 2, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
             alias iste natus minima magnam similique enim labore hic repellat omnis
              doloremque.`,
            autor: "Garry", date: date, chect: false, label: false
         },
         {
            id: 3, value: `Lorem ipsum dolor sit amet consectetur, 
         adipisicing elit. Explicabo ea dolores magnam delectus aut!
          A perferendis in, quisquam est dolores debitis! Corporis architecto quia,
           id ratione fugit accusamus eius quidem. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Minima, repellat! Eius dignissimos in, sit earum quibusdam numquam
             inventore reprehenderit aperiam dolore minima voluptas sapiente possimus, provident
              excepturi veniam, aliquam quis!`,
            autor: "Cherry", date: date, chect: false, label: false
         },

         {
            id: 4, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
         alias iste natus minima magnam similique enim labore hic repellat omnis
          doloremque.`, autor: "Black", date: date, chect: false, label: false
         },
         {
            id: 5, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
         alias iste natus minima magnam similique enim labore hic repellat omnis
          doloremque.`, autor: "White", date: date, chect: false, label: false
         },
         {
            id: 6, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
         alias iste natus minima magnam similique enim labore hic repellat omnis
          doloremque.`, autor: "Pinc", date: date, chect: false, label: false
         },
         {
            id: 7, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
            alias iste natus minima magnam similique enim labore hic repellat omnis
             doloremque.`,
            autor: "German", date: date, chect: false, label: false
         },
         {
            id: 8, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
            alias iste natus minima magnam similique enim labore hic repellat omnis
             doloremque.`,
            autor: "Garry", date: date, chect: false, label: false
         },
         {
            id: 9, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
         alias iste natus minima magnam similique enim labore hic repellat omnis
          doloremque.`, autor: "Cherry", date: date, chect: false, label: false
         },
      ],
      changeFolder: false,
   },
   "Outgoing": {
      id: 2,
      letters: [
         {
            id: 1, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
         alias iste natus minima magnam similique enim labore hic repellat omnis
          doloremque.`, autor: "Black", date: date, chect: true, label: false
         },
         {
            id: 2, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
         alias iste natus minima magnam similique enim labore hic repellat omnis
          doloremque.`, autor: "White", date: date, chect: true, label: false
         },
         {
            id: 3, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
         alias iste natus minima magnam similique enim labore hic repellat omnis
          doloremque.`, autor: "Pinc", date: date, chect: true, label: false
         },
      ],
      changeFolder: false,
   },
   "Drafts": {
      id: 3,
      letters: [
         {
            id: 1, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
         alias iste natus minima magnam similique enim labore hic repellat omnis
          doloremque.`, autor: "German", date: date, chect: false, label: false
         },
         {
            id: 2, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
         alias iste natus minima magnam similique enim labore hic repellat omnis
          doloremque.`, autor: "Garry", date: date, chect: false, label: false
         },
         {
            id: 3, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
         alias iste natus minima magnam similique enim labore hic repellat omnis
          doloremque.`, autor: "Cherry", date: date, chect: false, label: false
         },
      ],
      changeFolder: false,
   },
   "Remote": {
      id: 4,
      letters: [
      ],
      changeFolder: false,
   },
   "Spam": {
      id: 5,
      letters: [
         {
            id: 1, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
            alias iste natus minima magnam similique enim labore hic repellat omnis
             doloremque.`,
            autor: "German", date: date, chect: false, label: false
         },
         {
            id: 2, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
            alias iste natus minima magnam similique enim labore hic repellat omnis
             doloremque.`,
            autor: "Garry", date: date, chect: false, label: false
         },
         {
            id: 3, value: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Officiis dolores nostrum, quis numquam nam, fugiat iure ut perspiciatis 
         alias iste natus minima magnam similique enim labore hic repellat omnis
          doloremque.`, autor: "Cherry", date: date, chect: false, label: false
         },
      ],
      changeFolder: false,
   },
}
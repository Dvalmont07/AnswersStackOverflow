const users = [{
    "id": 1,
    "first_name": "Leanne",
    "last_name": "Graham",
    "username": "Leanne.Graham"
  },
  {
    "id": 2,
    "first_name": "Ervin",
    "last_name": "Howell",
    "username": "Ervin.Howell"
  },
  {
    "id": 3,
    "first_name": "Clementine",
    "last_name": "Bauch",
    "username": "Clementine.Bauch"
  },
  {
    "id": 4,
    "first_name": "Patricia",
    "last_name": "Howell",
    "username": "Patricia.Howell"
  },
  {
    "id": 5,
    "first_name": "Patricia",
    "last_name": "Lebsack",
    "username": "Patricia.Lebsack"
  },
  {
    "id": 6,
    "first_name": "Chelsey",
    "last_name": "Dietrich",
    "username": "Chelsey.Dietrich"
  },
  {
    "id": 7,
    "first_name": "Dennis",
    "last_name": "Schulist",
    "username": "Dennis.Schulist"
  },
  {
    "id": 8,
    "first_name": "Kurtis",
    "last_name": "Weissnat",
    "username": "Kurtis.Weissnat"
  },
  {
    "id": 9,
    "first_name": "Nicholas",
    "last_name": "Runolfsdottir",
    "username": "Nicholas.Runolfsdottir"
  },
  {
    "id": 10,
    "first_name": "Glenna",
    "last_name": "Reichert",
    "username": "Glenna.Reichert"
  },
  {
    "id": 11,
    "first_name": "Clementina",
    "last_name": "DuBuque",
    "username": "Clementina.DuBuque"
  },
  {
    "id": 12,
    "first_name": "Dani",
    "last_name": "Reichert",
    "username": "Dani.Reichert"
  }
];

const contacstInfo = [{
    "first_name": "Leanne",
    "last_name": "Graham",
    "email": "Leanne@Graham.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "LeanneGraham.org"
  },
  {
    "first_name": "Ervin",
    "last_name": "Howell",
    "email": "Ervin@Howell.tv",
    "phone": "010-692-6593 x09125",
    "website": "ErvinHowell.net"
  },
  {
    "first_name": "Clementine",
    "last_name": "Bauch",
    "email": "Clementine@Bauch.net",
    "phone": "1-463-123-4447",
    "website": "ClementineBauch.info",
  },
  {
    "first_name": "Patricia",
    "last_name": "Lebsack",
    "email": "Patricia@Lebsack.org",
    "phone": "493-170-9623 x156",
    "website": "PatriciaLebsack.biz"
  },
  {
    "first_name": "Chelsey",
    "last_name": "Dietrich",
    "email": "Chelsey@Dietrich.ca",
    "phone": "(254)954-1289",
    "website": "ChelseyDietrich.info"
  },
  {
    "first_name": "Dennis",
    "last_name": "Schulist",
    "email": "Dennis@Schulist.info",
    "phone": "1-477-935-8478 x6430",
    "website": "DennisSchulist.org"
  },
  {
    "first_name": "Kurtis",
    "last_name": "Weissnat",
    "email": "Kurtis@Weissnat.biz",
    "phone": "210.067.6132",
    "website": "KurtisWeissnat.io"
  },
  {
    "first_name": "Nicholas",
    "last_name": "Runolfsdottir",
    "email": "Nicholas@Runolfsdottir.me",
    "phone": "586.493.6943 x140",
    "website": "NicholasRunolfsdottir.com",
  },
  {
    "first_name": "Glenna",
    "last_name": "Reichert",
    "email": "Glenna@Reichert.io",
    "phone": "(775)976-6794 x41206",
    "website": "GlennaReichert.com"
  },
  {
    "first_name": "Dani",
    "last_name": "Reichert",
    "email": "Dani@Reichert.io",
    "phone": "(775)976-6794 x41206",
    "website": "DaniReichert.com"
  },
  {
    "first_name": "Clementina",
    "last_name": "DuBuque",
    "email": "Clementina@DuBuque.biz",
    "phone": "024-648-3804",
    "website": "ClementinaDuBuque.net"
  }
];
let usersArray = [];

for (let user of users) {

  for (let contact of contacstInfo) {
    let contactInfoUserName = `${contact.first_name}.${contact.last_name}`.toLowerCase();

    if ((user.username.toLowerCase() === contactInfoUserName) && !usersArray.some(user => user.username.toLowerCase() === contactInfoUserName)) {
      usersArray.push(Object.assign(user, contact));
    }
  }
}
console.log('usersArray', usersArray);
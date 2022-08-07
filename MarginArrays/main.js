let usersArray = [];
for (let user of USERS) {

  for (let contact of CONTACTSINFO) {
    let contactInfoUserName = `${contact.first_name}.${contact.last_name}`.toLowerCase();

    if ((user.username.toLowerCase() === contactInfoUserName) && !usersArray.some(user => user.username.toLowerCase() === contactInfoUserName)) {
      usersArray.push(Object.assign(user, contact));
    }
  }
}
console.log('usersArray', usersArray);
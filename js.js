function* getId() {
  while (true) {
    yield Math.random().toString(36).substring(5).toUpperCase();
  }
}

function* getId() {
  while (true) {
    yield Math.floor(Math.random() * (100000 - 10)) + 10;
  }
}


const id = getId()
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)


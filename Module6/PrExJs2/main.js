class StringBuilder {
  constructor(string = '') {
    this.string = string;
  }

  get value() {
    return this.string;
  }

  append(str) {
    this.string += str;
  }

  prepend(str) {
    this.string = str + this.string;
  }

  pad(str) {
    this.string = str + this.string + str;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

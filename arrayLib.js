export class Array {
  constructor(size) {
    this.size = size;
    this.array = [];
    for (let i = 0; i < size; i++) {
      this.array.push(undefined);
    }
  }

  getSize() {
    return this.size;
  }

  get(n) {
    if (n >= this.size || n < 0) {
      throw new ArrayException(`Index ${n} out of range`);
    }
    return this.array[n];
  }

  assign(n, value) {
    if (n >= this.size || n < 0) {
      throw new ArrayException(`Index ${n} out of range`);
    }
    this.array[n] = value;
  }
}

class ArrayException extends Error {
  constructor(message = "") {
    super(message);
    this.name = "ArrayException";
    this.message = message;
  }
}

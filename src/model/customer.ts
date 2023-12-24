export default class Customer {
  #id: string;
  #name: string;
  #age: number | undefined;

  constructor(name: string, age: number | undefined, id: string = "") {
    this.#id = id;
    this.#name = name;
    this.#age = age;
  }

  static empty() {
    return new Customer("", undefined);
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}

class God{
  static create(){
     return [new Man('Adam'), new Woman('Eve')]
  }
}

class Human{
  constructor(name){
    this.name = name
  }
}

class Man extends Human{
  constructor(name){
    super(name)
  }
}

class Woman extends Human{
  constructor(name){
    super(name)
  }
}

// https://www.codewars.com/kata/547274e24481cfc469000416

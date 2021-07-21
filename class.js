class Point{
  constructor(x, y){
    this.x = x;
    this.y = y
  }
}

class Triangle{
  constructor(pointA, pointB, pointC){
    this.pointA = pointA;
    this.pointB = pointB;
    this.pointC = pointC;
  }

  getSide = (point1, point2) => (Math.pow(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2), 0.5).toFixed(2))

  getAllSides = () => {return {AB : this.getSide(this.pointA, this.pointB),
                                BC : this.getSide(this.pointB, this.pointC),
                                CA : this.getSide(this.pointC, this.pointA)}
  }

   getArea = () =>  {
    let result = this.getAllSides();

    if(Number(result.AB) + Number(result.BC) <= Number(result.CA) 
    || Number(result.AB) + Number(result.CA) <= Number(result.BC) 
    || Number(result.BC) + Number(result.CA) <= Number(result.AB)) throw new Error('Sum of 2 sides can not bet less than third side') 
    
    return (0.25 * Math.pow( (Number(result.AB) + Number(result.BC) + Number(result.CA)) 
    * (Number(-result.AB) + Number(result.BC) + Number(result.CA)) 
    * (Number(result.AB) - Number(result.BC) + Number(result.CA)) 
    * (Number(result.AB) + Number(result.BC) - Number(result.CA)) , 0.5)).toFixed(2)
  }
}

// to check
let a = new Point(-1, 3)
let b = new Point(2, 4)
let c = new Point(5, 7)
let triangle = new Triangle(a,b,c)
console.log(triangle.getArea()) // must be 2.97

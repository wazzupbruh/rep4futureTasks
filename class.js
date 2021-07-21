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

  getSide = (point1, point2) => (Math.pow(Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2), 0.5).toFixed(2))

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

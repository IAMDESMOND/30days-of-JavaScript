class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  fullInfo() {
    return `my pets name is ${this.name} and it's ${this.age} yrs old`
  }
}

class Dog extends Animal {
  saySomething() {
    return 'I am a dog.'
  }
  fullInfo(){
    return `my Dogs name is ${this.name} and it's ${this.age} yrs old`
  }
  
}


class Cat extends Animal {
  saySomething() {
    return 'i am a cat'
  }
}

let cap = new Dog('cap', 2)


console.log(cap.fullInfo());
console.log(cap.saySomething());


class Statistics {
  constructor(arr) {
    this.nums = arr
  }
  order(){
    let order = this.nums.sort((x, y) => x - y)
    return order
  }
  count(){
    let count = 0
     this.nums.forEach(a => {
      return count++
    });
    return count
  }
  sum(){
    let sumOfNums = this.order().reduce((acc, curr) => acc + curr)
    return sumOfNums
  }
  min(){
    return this.order()[0]
  }
  max(){
    return this.order()[this.nums.length -1]
  }
  range(){
    return this.max() - this.min()
  }
  mean(){
    let mean = this.sum() / this.nums.length
    return Math.round(mean)
  }
  median(){
    let median
    if (this.nums.length % 2 == 0) {
      median = (this.order()[this.count()/2] + this.order()[this.count()/2 + 1])/ 2
    } else {
      median = this.order()[Math.round(this.count()/2)]
    }
    return median
  }
  mode(){
    let objs= {}
    let max = 0
    let count = 0
    this.order().forEach(function(e) {
      let num = e
      if(!objs[e]) {
        objs[e] = 1
      }else{objs[e]++}
      
      if (count < objs[e]) {
        max = e
        count = objs[e]
      }
    })
  return max
  }
  variance(){
    let sumDiff = 0
    this.order().forEach(num => {
      sumDiff += (num - this.mean()) ** 2
    })
    return sumDiff/ this.count()
  }
  std(){
    return +Math.sqrt(this.variance()).toFixed(2)
  } 
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
let statistics = new Statistics(ages)


console.log(statistics.order());
console.log(statistics.count());
console.log(statistics.min());
console.log(statistics.max());
console.log(statistics.range());
console.log(statistics.mean());
console.log(statistics.median());
console.log(statistics.mode());
console.log(statistics.variance())
console.log(statistics.std())
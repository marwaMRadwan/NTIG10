let x:number|string = 5
x="hh"
x=3.25 

// let x : number | string
// x= 10

// console.log(typeof x)

// x="marwa"
// console.log(typeof x)

// function x(a:number):number{
//     console.log('test')
//     return 1
// }
// let x1=function():void{

// }

// let x2 = ():string => {
// return 'a'
// }

//oop

// class User{
//     // name: string = "a"
//     // age : number = 10
//     // x(){
//     //     console.log('hello')
//     // }
//     private name:string
//     public age: number
//     constructor(name:string, age:number){
//         console.log('without call')
//         this.name = name
//         this.age = age
//     }
//     set _name(value:string){this.name=value}
//     get _name():string{return this.name}
//     show():void{
//         console.log(`user name is ${this.name} and age: ${this.age}`)
//     }
// }
// let omar = new User("omar", 6)
// // console.log(omar.name)
// omar._name = "mory"
// omar.show()

// class User{
//     protected _name:string
//     private _addr: string
//     constructor(name:string, address:string){
//         this._name = name
//         this._addr = address 
//     }
//     set name(value:string) { this._name = value }
//     set addr(value:string) { this._addr = value }
//     get name():string { return this._name }
//     get addr():string { return this._addr }
    
//     show(){
//         console.log('teacher')
//     }

// }

// class Student extends User{
//     private _grades:number[]  = []
//     constructor(name:string, addr:string){
//         super(name, addr)
//     }

//     show(){
//         console.log('student')
//         super.show()
//     }
// }

// const s = new Student('marwa', 'home')
// s.name="test"
// s.show()

// interface data{
//     name:string
//     age:number
//     status:boolean
//     show():void
// }

// let d1 : data ={ name:"marwa", age:36, status:true, show(){console.log('')}}
// class x implements data{
//     name:string=""
//     age:number=0
//     status:boolean=true
//     show():void{}
// }


// abstract class X{
//     abstract test():void

//     test1():void{
//         console.log('test 1')
//     }
// }

// class B extends X{
//     test(){
//         console.log('test')
//     }
// }
/* category, count all categories, add product, add size delete size */

// size => {'xl', 10} {36,50} {'m',30}

interface Sizes{
    size:string|number
    quan: number
}
interface Cats {
    catName:string
    catCode:string
}
class Categories implements Cats {
    catName:string
    catCode:string
    static counter: number = 0
    constructor(catName:string, catCode:string){
        this.catName=catName
        this.catCode=catCode
        Categories.counter++
    }
}
class Product{
    proName:string
    proSizes: Sizes[] = []
    category: Cats
    constructor(proName:string, category:Cats){
        this.proName = proName
        this.category = category
    }
    addSize(size:Sizes){
        this.proSizes.push(size)
    }
}


const p1 = new Product('p1', {catName:"c1",catCode:"25"})

p1.addSize({size:"M", quan:50})

p1.addSize({size:"l", quan:10})
p1.addSize({size:24, quan:20})

console.log(p1)




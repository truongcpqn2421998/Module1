class Animal{
    constructor(_name,_weight) {
        this.name=_name
        this.weight=_weight
    }
    setName(name){
        this.name=name
    }
    setWeight(weight){
        this.weight=weight
    }
    getName(){
        return this.name
    }
    getWeight(){
        return this.weight
    }
    toString(){
        return ('Name: '+this.getName()+' Weight:'+this.getWeight())
    }
}
let objAnimal1= new Animal()
objAnimal1.setName('Elephant')
objAnimal1.setWeight(45.6)
objAnimal1.toString();
console.log(objAnimal1.toString())
let obkAnimal2=new Animal('Dragon',15);
obkAnimal2.setName('Mouse')
console.log(obkAnimal2)
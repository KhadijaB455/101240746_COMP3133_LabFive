export class Customer {

    
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    
    }   
    
    public greeter(): void{
        console.log(`Hello ${this.firstName}, ${this.lastName}, ${this.age}`);

        console.log('Hello from Customer');
    }

        public GetAge(): number {
        console.log(`Age: ${this.age}`);
        return this.age;
    }


}



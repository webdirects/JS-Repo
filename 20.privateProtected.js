// class CoffeeMachine {
//     _waterAmount = 0;

//     set waterAmount(value){
//         if(value < 0) {
//             value = 0;
//         }
//         this._waterAmount = value
//     }

//     get waterAmount(){
//         return this._waterAmount;
//     }

//     constructor(power){
//         this._power = power;
//     }
// }

// let coffeeMachine = new CoffeeMachine(100);

// coffeeMachine.waterAmount = 200;

// Private

class CoffeeMachine {
    #waterLimit = 200;

    #fixWaterAmount(value) {
        if(value < 0) return 0;
        if (value > this.#waterLimit) return this.#waterLimit;
    }

    setWaterAmount(value) {
        this.#waterLimit = this.#fixWaterAmount(value);
    }
}

let coffeeMachine = new CoffeeMachine();

// cant access private from outside the class
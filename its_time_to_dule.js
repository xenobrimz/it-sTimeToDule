class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }

}

class UnitCard extends Card{
    constructor(name, cost, power, resilience){
        super(name,cost);
        this.power = power;
        this.resilience = resilience;
        this.isPlayed = false;
    }

    spawn(){
        this.isplayed == true?console.log((this.name) + ' Has already been played'): console.log(this.name + ' Has been played');     
    }

    attack(target){
        if( !target instanceof UnitCard ) {
            throw new Error( "Target must be a unit!" );
        }
        console.log(`${this.name} attack ${target.name}`)
        target.resilience -= this.power;
        target.resilience <= 0 
            ? console.log(`${this.name} has defeated ${target.name} \n`)
            : console.log(`${this.name} dealt ${power} damage. ${target.name} has ${target.resilience} resilience remaining \n`);
    }

}

class EffectCard extends Card{
    constructor(name, cost, stat, magnitude){
        super(name,cost);
        this.text = "";
        (stat === 'resilience' || stat === 'power') ? this.stat = stat : console.log('Error: wrong stat name');    
        this.magnitude = magnitude;
    }

    displayCard(){
        this.text = this.magnitude > 0 ? `|raise the targets ${this.stat} by ${this.magnitude}|`: `|lower the targets ${this.stat} by ${this.magnitude}|\n`;
        console.log(this.text)
    }

    activateCardEffect(target){
        if( !target instanceof UnitCard ) {
            throw new Error( "Target must be a unit!" );
        }
        console.log(this.name + ' has been played!!!')
        if(this.stat == "resilience")
            console.log((this.magnitude > 0) 
                ? (target.resilience += this.magnitude)? `|raised ${target.name} ${this.stat} by ${this.magnitude}| \n` 
                : (target.resilience += this.magnitude): `|lowerd ${target.name} ${this.stat} by ${this.magnitude}|\n`);
        else if(this.stat == "power"){
            console.log((this.magnitude > 0) 
                ? (target.power += this.magnitude) ? `|raised ${target.name} ${this.stat} by ${this.magnitude}\n` 
                : (target.power += this.magnitude): `|lowerd ${target.name} ${this.stat} by ${this.magnitude}|\n`);
        }
        else{
            throw new Error( "Stat must be 'resilience' or 'power' " );
        }
    }
}







console.log('--[Turn 1]--')
const RedBeltNinja = new UnitCard('Red Belt Ninja', 3, 3, 4)
const BlackBeltNinja = new UnitCard('Black Belt Ninja', 4, 5, 4)

RedBeltNinja.spawn();
const HardAlgorithm = new EffectCard('Hard Algorithim', 2, 'resilience', 3)
HardAlgorithm.activateCardEffect(RedBeltNinja);

BlackBeltNinja.spawn();

console.log('--[Turn 2]--')
const UPR = new EffectCard('Unhandled Promise Rejection', 1, 'resilience', -2)
UPR.activateCardEffect(RedBeltNinja)

console.log('--[Turn 3]--')
const PairProgramming = new EffectCard('Pair Programming', 3, 'power', 2)
PairProgramming.activateCardEffect(RedBeltNinja)

RedBeltNinja.attack(BlackBeltNinja)








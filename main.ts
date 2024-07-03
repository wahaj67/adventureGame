import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class player {
  name: string;
  health: number;
  energy: number;

  constructor(name: string) {
    this.name = name;
    this.health = 100;
    this.energy = 100;
  }

  getName():string {
    return this.name;
  }

  getHealth() :number{
    return this.health;
  }

  getEnergy():number {
    return this.energy;
  }

  decreaseHealth(amount: number):void {
    this.health -= amount;
    if (this.health <= 0) {
      console.log(`${this.name} has been defeated !!>>>Game over:)`);
      rl.close();
    } else {
      console.log(`${this.name} has ${this.health} health remaining`);
    }
  }

  decreaseEnergy(amount: number): void {
    this.energy -= amount;
    if (this.energy <= 0) {
      console.log(`${this.name} has run out of energy! Game over`);
      rl.close();
    } else {
      console.log(`${this.name} has ${this.energy}  energy remaining`);
    }
  }
}
class Monster {
  private name: string;
  private health: number;
  constructor(name: string) {
    this.name = name;
    this.health = 50;
  }
  getMonsterName(): string {
    return this.name;
  }
  getMonsterHealth(): number {
    return this.health;
  }
  attackPlayer(player: player): void {
    const damage = Math.floor(Math.random() * 10 + 2);
    console.log(
      `${this.name} attacks ${player.getName()} for ${damage} damage`
    );
    player.decreaseHealth(damage);
  }
}
const Player = new player("SuperMan");
const monster = new Monster("zoombie");
console.log(`A dangerous ${monster.getMonsterName()} has appeared!!`);
function battle() {
  rl.question("press enter to fight with zoombie", () => {
    const playerAttack = Math.floor(Math.random() * 20 + 1);
    const energyComposition = Math.floor(Math.random() * 10) + 1;
    Player.decreaseEnergy(energyComposition);
    console.log(
      `${Player.getName()} attacks ${monster.getMonsterName()} for ${playerAttack} damage`
    );
    monster.attackPlayer(Player);
    if (Player.getHealth() > 0 && Player.getEnergy() > 0) {
      console.log(`=============================`);
      console.log("Next Round ");
      console.log(`Players Helath: ${Player.getHealth()}`);
      console.log(`Players Energy: ${Player.getEnergy()}`);
      console.log(`Monster Health : ${monster.getMonsterHealth()}`);
      console.log(`==============================`);
      battle();
    } else {
      rl.close();
    }
  });
}
battle();

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.energy = 100;
    }
    getName() {
        return this.name;
    }
    getHealth() {
        return this.health;
    }
    getEnergy() {
        return this.energy;
    }
    decreaseHealth(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            console.log(`${this.name} has been defeated !!>>>Game over:)`);
            rl.close();
        }
        else {
            console.log(`${this.name} has ${this.health} health remaining`);
        }
    }
    decreaseEnergy(amount) {
        this.energy -= amount;
        if (this.energy <= 0) {
            console.log(`${this.name} has run out of energy! Game over`);
            rl.close();
        }
        else {
            console.log(`${this.name} has ${this.energy}  energy remaining`);
        }
    }
}
class Monster {
    constructor(name) {
        this.name = name;
        this.health = 50;
    }
    getMonsterName() {
        return this.name;
    }
    getMonsterHealth() {
        return this.health;
    }
    attackPlayer(player) {
        const damage = Math.floor(Math.random() * 10 + 2);
        console.log(`${this.name} attacks ${player.getName()} for ${damage} damage`);
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
        console.log(`${Player.getName()} attacks ${monster.getMonsterName()} for ${playerAttack} damage`);
        monster.attackPlayer(Player);
        if (Player.getHealth() > 0 && Player.getEnergy() > 0) {
            console.log(`=============================`);
            console.log("Next Round ");
            console.log(`Players Helath: ${Player.getHealth()}`);
            console.log(`Players Energy: ${Player.getEnergy()}`);
            console.log(`Monster Health : ${monster.getMonsterHealth()}`);
            console.log(`==============================`);
            battle();
        }
        else {
            rl.close();
        }
    });
}
battle();

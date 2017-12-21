/**
 * Created by toor on 5/2/17.
 */

let planetArray;

class Planet {
    constructor(x, y, mass) {
        this.location = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = mass;
    }

    applyForce(force) {
        this.acceleration.add(force.div(this.mass));
    }
    disappear(){
        mass=0;
        velocity = createVector(0, 0);
        acceleration = createVector(0, 0);

    }
    merge(other){
        mass+=other.mass;
    }

    // This function takes another planet and applies a force towards this planet
    attract(other) {
        // Create a vector from this planet to the other
        const attraction = p5.Vector.sub(this.location, other.location);

        // Only attract the other planet if it is not touching this planet
        if (attraction.mag() > this.mass + other.mass) {
            // console.log(this.location);
            // Create a force according to Newton's Law of Gravitation: F = (G*m*M) / (r*r)
            const force = (this.mass * other.mass) / attraction.magSq();

            // Create a normalized vector towards the other planet
            attraction.normalize();

            // Multiply it by the force
            attraction.mult(force);

            // Apply the gravitational force
            other.applyForce(attraction);
        }
        else{
            if (mass<other.mass){
                this.merge();
                other.disappear();
            }else{
                other.merge();
                this.disappear();
            }
        }
    }

    render() {
        ellipse(this.location.x, this.location.y, this.mass);
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }
}

function setup() {
    createCanvas(800, 800);
    planetArray = [];
}

function draw() {
    background(255);
    for (let i = 0; i < planetArray.length; i++) {
        planetArray[i].render();

        // Each planet loops over all the other planets and attracts them
        for (let j = 0; j < planetArray.length; j++) {
            if (i !== j) {
                planetArray[i].attract(planetArray[j]);
            }
        }
    }
}

function mousePressed() {
    let p = new Planet(mouseX, mouseY, random(50));
    // console.log(p.location.x);
    planetArray.push(p);
}
// function merge(planet1, planet2){
//   let p = new Planet(planet1.location.x,planet1.location.y,mass1+mass2);
//   planetArray.push(p);
//   planetArray.pop(planet1);
//   planetArray.pop(planet2);
// }
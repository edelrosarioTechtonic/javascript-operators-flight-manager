const { interfaces } = require("mocha");

function Flights() {
    function calculateNumberOfFlights(numOfPassengers, totalCapacity){
        if (numOfPassengers <= 0 || !Number.isInteger(numOfPassengers)){
            throw Error("The number of passengers must be a positive integer value")
        }
        if (totalCapacity <= 0 || !Number.isInteger(totalCapacity)){
            throw Error("The capacity of the flight must be a positive integer value")
        }
        return parseInt((numOfPassengers / totalCapacity) + (numOfPassengers % totalCapacity))
    }

    function checkAircraftRevision(distanceLim, distanceArr){
        let totalDist = distanceArr.reduce((acc, cur) => acc + cur);
        if (totalDist <= (distanceLim/2)){
            return  "The revision needs to be done within the next 3 months"
        }
        if (totalDist <= ((distanceLim * 3)/4)){
            return "The revision needs to be done within the next 2 months"
        }
        if (totalDist <= distanceLim){
            return  "The revision needs to be done within the next month"
        }
        throw Error("The maximum allowed flight distance should be exceeded")

    }
    return {calculateNumberOfFlights, checkAircraftRevision}
}

module.exports = Flights();
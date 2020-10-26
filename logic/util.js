function Util() {
    "use strict";
    function calculateTotalDistributedPassengers(seatDistribution){
        return seatDistribution.vipPassengersWithBusinessSeats +
             seatDistribution.vipPassengersWithEconomySeats +
              seatDistribution.regularPassengersWithBusinessSeats + 
              seatDistribution.regularPassengersWithEconomySeats
    }

    function calculateTotalNumberOfPassengers(numArr){
        return numArr.reduce((acc, cur) => acc + cur);
    }

    function checkInput(input){
        if(input != null || typeof(input) != "number"){
            throw Error("Bad Input")
        }
    }

    function calculateTotalDistance(distArr){
        return distArr.reduce((acc, cur) => { 
            if (cur > 0) return acc + cur
            return acc
        });
    }

    function calculateBonusPoints(distArrBus, distArrEcon, busPtPer, econBonusPer){
        let bonusPts = calculateTotalDistance(distArrBus) * (busPtPer/ 100)
        let econPts = calculateTotalDistance(distArrEcon) * (econBonusPer/ 100)
        return bonusPts + econPts
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers,
            checkInput, calculateTotalDistance, calculateBonusPoints}
}

module.exports = Util();
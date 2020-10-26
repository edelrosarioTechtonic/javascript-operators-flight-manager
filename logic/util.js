function Util() {
    function calculateTotalDistributedPassengers(seatDistribution){
        return seatDistribution.vipPassengersWithBusinessSeats +
             seatDistribution.vipPassengersWithEconomySeats +
              seatDistribution.regularPassengersWithBusinessSeats + 
              seatDistribution.regularPassengersWithEconomySeats
    }

    function calculateTotalNumberOfPassengers(numArr){
        return numArr.reduce((acc, cur) => acc + cur);
    }
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}
}

module.exports = Util();
function Passengers() {
    "use strict";
    function checkFlightCapacity(flightCapacity, passNumArr){
        let totalPass = passNumArr.reduce((acc, cur) => acc + cur);
        if(totalPass <= flightCapacity){
            return totalPass
        }
        throw Error("The capacity of the flight is exceeded")
    }

    function distributeAllSeatsToAllPassengers(numVIP, numReg, numFlights, numBusSeats, numEconSeats){
        let econSeatsAvailable = numFlights * numEconSeats;
        let busSeatsAvailable = numFlights * numBusSeats;
        let vipLeft = numVIP;
        let regLeft = numReg;

        let vipWithBusiness = (vipLeft <= busSeatsAvailable) ? vipLeft : busSeatsAvailable;
        vipLeft = vipLeft - vipWithBusiness;
        busSeatsAvailable = busSeatsAvailable - vipWithBusiness

        let vipWithEcon = (vipLeft <= econSeatsAvailable) ? vipLeft : econSeatsAvailable
        econSeatsAvailable = econSeatsAvailable - vipWithEcon

        let regWithBusiness = (regLeft <= busSeatsAvailable) ? regLeft : busSeatsAvailable
        regLeft = regLeft - regWithBusiness

        let regWithEcon = (regLeft <= econSeatsAvailable) ? regLeft : econSeatsAvailable

        return ({
            vipPassengersWithBusinessSeats: vipWithBusiness,
            vipPassengersWithEconomySeats: vipWithEcon, 
            regularPassengersWithBusinessSeats: regWithBusiness,
            regularPassengersWithEconomySeats: regWithEcon
        });
    }
    return {checkFlightCapacity, distributeAllSeatsToAllPassengers}
}

module.exports = Passengers();


function Prices() {
    "use strict";
    function calculateFinalPrice(basePrice, pasTypeVar, flightTypeVar){
        return basePrice + (basePrice * (pasTypeVar/ 100)) + 
            ((basePrice + (basePrice * (pasTypeVar/ 100))) * (flightTypeVar/100)) 
    }

    function calculateDefaultFinalPrice(basePrice, passType, flightType){
        let passTypeVar = 0
        let flightTypeVar = 0; 
        if (passType.toLowerCase() == "regular") passTypeVar = -5
        else if (passType.toLowerCase() == "vip") passTypeVar = 5
        if(flightType.toLowerCase() == "economy") flightTypeVar = -3
        else if (flightType.toLowerCase() == "business") flightTypeVar = 10

        return calculateFinalPrice(basePrice, passTypeVar, flightTypeVar)
    }

    function calculateTotalFinalPrice(numSeats, passType, flightType, basePrice){
        return numSeats * calculateDefaultFinalPrice(basePrice, passType, flightType)
    }

    return{calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice}
}


module.exports = Prices();
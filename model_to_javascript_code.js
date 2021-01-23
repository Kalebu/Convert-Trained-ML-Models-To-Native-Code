// A simple Javascript function to perform prediction

function score(input)
{
    return (((((((((((((((((0.8166973302490392) + ((input[0]) * (0.035269518507829584))) + ((input[1]) * (0.05203333118549156))) + ((input[2]) * (-0.13217178253938103))) + ((input[3]) * (-0.13136526173536608))) + ((input[4]) * (-0.024875019809902837))) + ((input[5]) * (1.2864103414352563))) + ((input[6]) * (-0.005259373701309709))) + ((input[7]) * (0.005259373701309715))) + ((input[8]) * (-0.11512289603368371))) + ((input[9]) * (0.11512289603368378))) + ((input[10]) * (0.06905305123713898))) + ((input[11]) * (-0.06905305123713898))) + ((input[12]) * (0.021080906307735767))) + ((input[13]) * (-0.02108090630773594))) + ((input[14]) * (-0.14491490189610398))) + ((input[15]) * (0.2189862115713242))) + ((input[16]) * (-0.08599736364921017));
}

let input =  [1.24474546, 1.9817189, -0.55448733, 3.02536229, 0.2732313,
    0.41173269, -0.47234264, 0.47234264, -0.72881553, 0.72881553,
    0.52836225, -0.52836225, -2.54711697, 2.54711697, 1.55889948,
    -0.7820157, -0.70020801];

// perform predition with pure Javascript code
let pred = score(input);

console.log("Prediction results:",Math.round(pred));
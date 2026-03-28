function calculateSimpleInterest(p, r, t) {
    // Formula implementation: SI = (P × R × T) / 100
    // Mathematical calculation in external function returning the result
    return (p * r * t) / 100;
}

function handleCalculate() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    // Multiple input parameters handling
    var interest = calculateSimpleInterest(principal, rate, time);

    document.getElementById("output").innerHTML = "Calculated Simple Interest: " + interest.toFixed(2);
}

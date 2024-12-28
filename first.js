document.getElementById("dahejCalculator").addEventListener("submit", function (e) {
    e.preventDefault();
    const age = parseInt(document.getElementById("age").value);
    const education = document.getElementById("education").value;
    const income = parseInt(document.getElementById("income").value);

    let dowryAmount = 0;

    
    if (education === "bachelor") dowryAmount += 500000;
    if (education === "master") dowryAmount += 1000000;
    if (education === "phd") dowryAmount += 1500000;

    dowryAmount += income ? income * 12 * 0.1 : 0;
    dowryAmount += age < 30 ? 50000 : -50000; 

    document.getElementById("result").innerText = `Estimated Dowry: ₹${dowryAmount}`;
});


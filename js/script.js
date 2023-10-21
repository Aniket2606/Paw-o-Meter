function calculateStressLevel() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const heartRate = parseInt(document.getElementById("heartRate").value);
    const SPressure = parseInt(document.getElementById("SPressure").value);
    const DPressure = parseInt(document.getElementById("DPressure").value);

  
    let stressLevel = "Normal";
    if (temperature > 38.6 || heartRate > 100 || (SPressure >= 140 && DPressure <= 90)) {
        stressLevel = "High";
    }

    const resultdiv = document.getElementById("resultDiv");
    resultdiv.textContent = `Stress Level: ${stressLevel}`;
    // console.log(resultdiv)

    document.getElementById("frm").addEventListener("submit", function(event) {
        event.preventDefault(); 
    });

}
    
let toggleValue = 1;

function changeSlider(value) {
    console.log("Slider changed to:", value);
    // You can add your slider logic here
}

function toggleSlider() {
    changeSlider(toggleValue);
    
    // Corrected toggle logic
    toggleValue = toggleValue === 1 ? 2 : toggleValue === 2 ? 3 : toggleValue === 3 ? 4 : 1;
}

// Infinite loop with a delay
setInterval(toggleSlider, 5000); // Change every 4 seconds


function changeSlider(rangeNumber) {
    let landing = document.getElementById("Landing");
    let ranges = ["RangeFirstBackground", "RangeSecondBackground", "RangeThirdBackground", "RangeFourthBackground", "RangeFifthBackground", "RangeSixthBackground"];
    let buttons = document.querySelectorAll(".Changer");
    
    // Remove all existing range classes
    landing.classList.remove(...ranges);
    
    // Add the selected range class
    landing.classList.add(ranges[rangeNumber - 1]);
    
    // Reset all buttons to black
    buttons.forEach(button => button.style.backgroundColor = "black");
    
    // Change the clicked button's color to white
    document.getElementById(`button${rangeNumber}`).style.backgroundColor = "white";
}

changeSlider(1);


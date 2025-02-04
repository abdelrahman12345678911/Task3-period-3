// Exercise 1: Reverse a String
document.getElementById("reverse-button").addEventListener("click", function() {
    const inputString = document.getElementById("input-string").value;
    const reversedString = inputString.split("").reverse().join("");
    document.getElementById("reversed-string").innerText = reversedString;
});

// Exercise 2: Remove Duplicates
document.getElementById("remove-duplicates-button").addEventListener("click", function() {
    const inputNumbers = document.getElementById("input-numbers").value;
    const numbersArray = inputNumbers.split(",");
    const uniqueNumbers = [...new Set(numbersArray)];
    document.getElementById("unique-numbers").innerText = uniqueNumbers.join(", ");
});

// Exercise 3: Filter Even Numbers
document.getElementById("filter-even-button").addEventListener("click", function() {
    const inputNumbers = document.getElementById("input-numbers-2").value;
    const numbersArray = inputNumbers.split(",");
    const evenNumbers = numbersArray.filter(num => num % 2 === 0);
    document.getElementById("even-numbers").innerText = evenNumbers.join(", ");
});

// Exercise 4: Find Largest Number
document.getElementById("find-largest-button").addEventListener("click", function() {
    const inputNumbers = document.getElementById("input-numbers-3").value;
    const numbersArray = inputNumbers.split(",");
    const largestNumber = Math.max(...numbersArray);
    document.getElementById("largest-number").innerText = largestNumber;
});

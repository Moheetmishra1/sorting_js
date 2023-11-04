var st = prompt("Enter a list of numbers separated by spaces:");
var arr = st.split(" ").map(Number);

// Sort the array in descending order
arr.sort(function(a, b) {
    return b - a;
});

console.log("Sorted Array in Descending Order:", arr);
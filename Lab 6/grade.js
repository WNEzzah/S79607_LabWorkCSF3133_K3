// Error 1 (grade.html, Line 17): onclick="showtable()" uses lowercase "t" instead of "showTable()"
// Error 2 (grade.html, Line 19): Wrong script filename "grades.js" instead of "grade.js"
// Error 3 (grade.js, Line 5): Single "=" assignment (`name = ""`) instead of strict equality `name.trim() === ""`
// Error 4 (grade.js, Line 9): Wrong capitalization `isNan(mark)` instead of `isNaN(mark)`
// Error 5 (grade.js, Line 14): Logical AND `&&` in `mark < 0 && mark > 100` is impossible, should be logical OR `||` (`mark < 0 || mark > 100`)
// Error 6 (grade.js, Line 28): Wrong casing `getElementByID` instead of `getElementById` 
// Error 7 (grade.js, Line 38): Loop starts at `let i = 1` instead of `let i = 0` skipping grade "A"
// Error 8 (grade.js, Line 42): Wrong casing `.innerHtml` instead of `.innerHTML`

// Validates student name and mark, calculates grade, applies grade colour, and displays timestamp
function checkMark() {
    let name = document.forms["gradeForm"]["name"].value.trim();
    let markInput = document.forms["gradeForm"]["mark"].value.trim();
    let resultEl = document.getElementById("result");
    let timeEl = document.getElementById("checkedTime");

    // Validate empty name
    if (name === "") {
        alert("Name must be filled out.");
        return false;
    }

    // Validate empty mark 
    if (markInput === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Validate non-numeric mark
    if (isNaN(markInput)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    let mark = Number(markInput);

    // Validate mark range 0-100
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    // Determine grade and set result text colour by grade
    let grade;
    if (mark >= 80) {
        grade = "A";
        resultEl.style.color = "green";
    } else if (mark >= 65) {
        grade = "B";
        resultEl.style.color = "green";
    } else if (mark >= 50) {
        grade = "C";
        resultEl.style.color = "orange";
    } else {
        grade = "F";
        resultEl.style.color = "red";
    }

    resultEl.innerHTML = name + " got grade " + grade;

    // Display date and time
    timeEl.innerHTML = "Checked on: " + new Date();
    timeEl.style.color = resultEl.style.color;

    return false;
}

// Generates a random whole number 
function randomMark() {
    let randomScore = Math.floor(Math.random() * 101);
    document.getElementById("mark").value = randomScore;
}

// Builds and displays the full grade range table for A, B, C, and F
function showTable() {
    let grades = ["A", "B", "C", "F"];
    let ranges = ["80-100", "65-79", "50-64", "0-49"];
    let tableHTML = "<table>";
    tableHTML += "<tr><th>Grade</th><th>Mark range</th></tr>";

    // Start at index 0
    for (let i = 0; i < grades.length; i++) {
        tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + "</td></tr>";
    }

    tableHTML += "</table>";
    document.getElementById("tableContainer").innerHTML = tableHTML;
}
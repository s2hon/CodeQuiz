const scoreChart = document.getElementById ("scoreChart");
var index = 0;

function printScores() {
    // either get scores from localstorage or set to empty array
    var newScores = JSON.parse(window.localStorage.getItem("newScores")) || [];
    
    // sort highscores by score property in descending order
    if (newScores.length>=2) {
        newScores.sort(function(a, b) {
            return b.score - a.score;
        })
    };
    
    for (i=0; i<newScores.length; i++) {
        index++;
        // create li tag for each high score
        var row = scoreChart.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = index;
        cell2.innerHTML = newScores[index-1].initials;
        cell3.innerHTML = newScores[index-1].score;
    };
}
    
function clearScores() {
    window.localStorage.removeItem("newScores");
    window.location.reload();
}
    
document.getElementById("clear").onclick = clearScores;
    
printScores();
const scoreChart = document.getElementById ("scoreChart");
var index = 0;

renderHighScores();

function renderHighScores() {
    var finalScore = JSON.parse(window.localStorage.getItem("finalScore")) || [];

    if (finalScore.length>=2) {
        finalScore.sort(function(a, b) {
            return b.score - a.score;
        })
    };

    if (finalScore.length !== null) {
        for (i=0; i<finalScore.length; i++) {
            index++;
            // create li tag for each high score
            var row = scoreChart.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = index;
            cell2.innerHTML = finalScore[i].initials;
            cell3.innerHTML = finalScore[i].score;
        };
       
    }
};

function printScores() {
    window.localStorage.getItem("finalScore", JSON.parse(finalScore));


}
    
function clearScores() {
    window.localStorage.removeItem("finalScore");
    window.location.reload();
}
    
document.getElementById("clear").onclick = clearScores;
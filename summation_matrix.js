function myFunc() {
                
    var t1 = document.getElementById("input").value.split("#");
    
    if (t1[0] != parseInt(t1[0]) || t1[1] != parseInt(t1[1]) || t1[2] != parseInt(t1[2]) || t1.length != 3) { 
        alert("Please give valid input... e.g.-3#4#5");
        document.getElementById('input').style.borderColor = "red";

    }
    else if (t1[0] <= 0 || t1[1] <= 0){
        alert("Number of Rows and Column should be greater than 0");
    }
    else{
        let row = t1[0], col = t1[1], val = t1[2];
    
        let a = Array.from(Array(100), () => new Array(100));
        
        subFunc(row, col, val, a);

        var table = "<table>";
        for (let i = 0; i <= row; i++) {
            table += "<tr>";
            for (let j = 0; j <= col; j++){
                table += "<td>" + a[i][j] + "</td>";
            }
            table += "</tr>";
        }
        table += "</table>";
        document.getElementById('input').style.borderColor = "";
        document.getElementById("out").innerHTML = table;

    }
}

function subFunc(row, col, val, a) {

    let rows = 0, cols = 0;    // rows - starting row index , cols - starting column index...
    let sum = 0 , totalSum = 0;     // sum is for rows and columns  ,  totalSum is for total sum of last row and column...
    
    // fo first row
    for(let i = cols; i < col ; i++){
        a[rows][i] = val++;
    }

    // for other rows (from second row till end...)
    for(let i = rows+1; i < row; i++){
        for(let j = 0; j < col; j++ ){
            a[i][j] = a[i-1][j] **2 ;
        }
    }

    //  for row sum...
    for(let k = 0; k < row; k++){
        for(let l = 0; l < col; l++){
            sum += a[k][l];
        }
        a[rows][col] = sum;
        totalSum += sum;
        rows++;
        sum = 0;
    }

    // for colunm sum...
    for (k = 0; k < col; k++) {
        for (l = 0; l < row; l++) {
            sum += a[l][k];
        }
        a[row][cols] = sum;
        totalSum += sum;
        cols++;
        sum = 0;
    }
    a[row][col] = totalSum;
}

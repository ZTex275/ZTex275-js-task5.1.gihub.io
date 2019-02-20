function GameStart() {
  var matrix = [
    ["-","-","-"],
    ["-","-","-"],
    ["-","-","-"]
  ];
  var j,k;

    for(i=2; i<=10; i++){
      if (i % 2 == 0){
        j = prompt ("Ход крестиков! Введите первую координату: ")
        k = prompt ("Ход крестиков! Введите вторую координату: ")
        matrix[j][k] = "x";
        console.log (matrix[0][0] + " " + matrix[0][1] + " " + matrix[0][2] + "\n" + matrix[1][0] + " " + matrix[1][1] + " " + matrix[1][2] + "\n" + matrix[2][0] + " " + matrix[2][1] + " " + matrix[2][2])
  }
  else{
    j = prompt ("Ход ноликов! Введите первую координату: ")
    k = prompt ("Ход ноликов! Введите вторую координату: ")
    matrix[j][k] = "o";
    console.log (matrix[0][0] + " " + matrix[0][1] + " " + matrix[0][2] + "\n" + matrix[1][0] + " " + matrix[1][1] + " " + matrix[1][2] + "\n" + matrix[2][0] + " " + matrix[2][1] + " " + matrix[2][2])
    }

    if (((matrix[0][0]=="x")&&(matrix[0][1]=="x")&&(matrix[0][2]=="x"))||((matrix[1][0]=="x")&&(matrix[1][1]=="x")&&(matrix[1][2]=="x"))||((matrix[2][0]=="x")&&(matrix[2][1]=="x")&&(matrix[2][2]=="x"))||((matrix[0][0]=="x")&&(matrix[1][1]=="x")&&(matrix[2][2]=="x"))||((matrix[0][2]=="x")&&(matrix[1][1]=="x")&&(matrix[2][0]=="x"))||((matrix[0][1]=="x")&&(matrix[1][1]=="x")&&(matrix[2][1]=="x"))||((matrix[0][0]=="x")&&(matrix[1][0]=="x")&&(matrix[2][0]=="x"))){
        alert("Победа крестиков!");
        
        break;}
    if (((matrix[0][0]=="o")&&(matrix[0][1]=="o")&&(matrix[0][2]=="o"))||((matrix[1][0]=="o")&&(matrix[1][1]=="o")&&(matrix[1][2]=="o"))||((matrix[2][0]=="o")&&(matrix[2][1]=="o")&&(matrix[2][2]=="o"))||((matrix[0][0]=="o")&&(matrix[1][1]=="o")&&(matrix[2][2]=="o"))||((matrix[0][2]=="o")&&(matrix[1][1]=="o")&&(matrix[2][0]=="o"))||((matrix[0][1]=="o")&&(matrix[1][1]=="o")&&(matrix[2][1]=="o"))||((matrix[0][0]=="o")&&(matrix[1][0]=="o")&&(matrix[2][0]=="o"))){
        alert("Победа ноликов!");  
        break;}
      }
    }
     
  GameStart()
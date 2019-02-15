function GameStart(){


    var process = 1;
    var matrix = [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]
      ];
      
      while(process>0){
        if (((matrix[0][0]&&matrix[0][1]&&matrix[0][2])||(matrix[1][0]&&matrix[1][1]&&matrix[1][2])||(matrix[2][0]&&matrix[2][1]&&matrix[2][2])||(matrix[0][0]&&matrix[1][1]&&matrix[2][2])||(matrix[0][2]&&matrix[1][1]&&matrix[2][0]))=='x'){
          alert("Победа крестиков!"); 
          process=0;
          break;}

          if (((matrix[0][0]&&matrix[0][1]&&matrix[0][2])||(matrix[1][0]&&matrix[1][1]&&matrix[1][2])||(matrix[2][0]&&matrix[2][1]&&matrix[2][2])||(matrix[0][0]&&matrix[1][1]&&matrix[2][2])||(matrix[0][2]&&matrix[1][1]&&matrix[2][0]))=='o'){
            alert("Победа ноликов!");
            process=0;
            break;}  
      for (var i = 2; i < 10; i++) {
        if (i % 2 == 0) {
        var j = prompt("Ход крестиков! Введите первую координату:")
        var k = prompt("Ход крестиков! Введите вторую координату:")
        matrix[j][k]='х';
        console.log(matrix[0][0] + " " + matrix[0][1] + " " + matrix[0][2] + "\n" + matrix[1][0] + " " + matrix[1][1] + " " + matrix[1][2] + "\n" + matrix[2][0] + " "+matrix[2][1] + " " + matrix[2][2])
      }
     
      else{
        var j = prompt("Ход ноликов! Введите первую координату:")
        var k = prompt("Ход ноликов! Введите вторую координату:")
        matrix[j][k]='о';
        console.log(matrix[0][0] + " " + matrix[0][1] + " " + matrix[0][2] + "\n" + matrix[1][0] + " " + matrix[1][1] + " " + matrix[1][2] + "\n" + matrix[2][0] + " "+matrix[2][1] + " " + matrix[2][2])
        
      }
     }
    }
  }
  GameStart()


    console.clear()

  



      var player = 1;
      var move = function(j,k){
        if(startPosition[j][k] !== ''){
          console.log('ячейка уже занята!');
        }
        else if(player++ % 2){
          startPosition[j][k] = 'X';
        }
        else{
          startPosition[j][k] = 'O';
        }
        return true;
      };
      
      var render = function(){
        for(var i=0; i<3; i++){
          console.log(startPosition[i]);
        }
      };
      
      for(i=0; i<3; i++)  /* проверка строк */
      if(matrix[i][0]==matrix[i][1] &&
         matrix[i][0]==matrix[i][2]) return matrix[i][0];
  
    for(i=0; i<3; i++)  /* проверка столбцов */
      if(matrix[0][i]==matrix[1][i] &&
         matrix[0][i]==matrix[2][i]) return matrix[0][i];
  
    /* проверка диагоналей */
    if(matrix[0][0]==matrix[1][1] &&
       matrix[1][1]==matrix[2][2])
         return matrix[0][0];
  
    if(matrix[0][2]==matrix[1][1] &&
       matrix[1][1]==matrix[2][0])
         return matrix[0][2];
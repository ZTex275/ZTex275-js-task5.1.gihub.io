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

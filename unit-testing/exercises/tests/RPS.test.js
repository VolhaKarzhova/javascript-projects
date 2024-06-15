const whoWon = require('../RPS.js');

describe("whoWon", function () {

    test("Should return 'TIE!' if Player1 and Player2 select the same value", function(){
        let output = whoWon('paper','paper');
        expect(output).toEqual("TIE!");
     });

     test("Should return 'Player 2 wins!' if player1 selects paper and Player2 selects scissors", function(){
        let output = whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
     });

    test("Should return 'Player 2 wins!' if Player1 selects rock and Player2 selects paper", function(){
        let output = whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
     });
     
     test("Should return 'Player 2 wins!' if Player1 selects scissors and Player2 selects rock", function(){
        let output = whoWon('scissors','rock');
        expect(output).toBe("Player 2 wins!");
     });

     test("Should return 'Player 1 wins!' if Player1 selects scissors and Player2 selects paper", function(){
        let output = whoWon('scissors','paper');
        expect(output).toBe("Player 1 wins!");
     });

     test("Should return 'Player 1 wins!' if Player1 selects paper and Player2 selects rock", function(){
        let output = whoWon('paper','rock');
        expect(output).toBe("Player 1 wins!");
     });

     test("Should return 'Player 1 wins!' if Player1 selects rock and Player2 selects scissors", function(){
        let output = whoWon('rock','scissors');
        expect(output).toBe("Player 1 wins!");
     });

     test("Should return 'At least one selection of player is invalid' if Player1 has invalid input", function(){
        let output = whoWon('rocks','scissors');
        expect(output).toBe("At least one selection of player is invalid");
     });

     test("Should return 'At least one selection of player is invalid' if Player2 has invalid input", function(){
        let output = whoWon('rock','scissors1');
        expect(output).toBe("At least one selection of player is invalid");
     });
});


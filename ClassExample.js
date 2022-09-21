let bossSelect = ["Heat Man", "Wood Man", "Air Man", "Quick Man", "Flash Man", "Crash Man", "Metal Man", "Bubble Man"];
megaHP = 5;



function megaManGame(bossSelect, hp){
    let result = true;
    if(bossSelect[1] == "Wood Man"){
        document.getElementById("demo").innerHTML = "Welcome to Mega Man 2!";
    }
    let bossChoice;
    while(bossSelect.length > 0){
        if(bossSelect[0] === undefined){
            break;
        }
        let len = bossSelect.length;
        bossChoice = prompt("Will you fight (1)" + bossSelect[0] + " or (2)" + bossSelect[len - 1] + "? (enter 1 or 2)");
        if(bossChoice == 1){
           result = fight(bossSelect[0], hp, result);
        }else{
            result = fight(bossSelect[len - 1], hp, result);
        }
        if(bossChoice == 1 && result == true){
            bossSelect.shift();
            document.getElementById("demo").innerHTML = "Well done! Onto the next boss!";
        }else if(bossChoice == 2 && result == true){
            bossSelect.pop();
            document.getElementById("demo").innerHTML = "Well done! Onto the next boss!";
        }
        if(result == false){
            document.getElementById("demo").innerHTML = "You were defeated, better luck next time!";
            break;
        }

    }
    if(result == true){
        document.getElementById("demo").innerHTML = "Vitory! Thanks for playing!";
    } else{
        document.getElementById("demo").innerHTML = "Game over. Thanks for playing!";
    }
}

function fight(boss, megaHP, result){
    let hp = megaHP;
    let bossHP = 5;
    let die = 1;
    document.getElementById("demo").innerHTML = "Prepare to fight " + boss + "!";
    while(hp != 0 && bossHP != 0){
        document.getElementById("demo").innerHTML = "Mega Man hits for 1 damage!";
        bossHP = bossHP - 1;
        die = Math.floor(Math.random() * 2);
        if(die == 0){
            document.getElementById("demo").innerHTML ="Oof! Megaman got hit for two hitpoints!";
            hp = hp - 2;
        }else{
            document.getElementById("demo").innerHTML = "Whew! Narrowly dodged the attack.";
        }
    }
    if(hp <= 0){
        return false;
    }else{
        return true;
    }

}

megaManGame(bossSelect, megaHP);
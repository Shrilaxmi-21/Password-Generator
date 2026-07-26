const character = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","(",")","-","_","=","+","{","}",
    "[","]","/","|",":",";","<",">",".","?"];
    let password_el= document.getElementById("password_el") 
    let password_el2= document.getElementById("password_el2")
    function generate()
    {
        let random_r = Math.floor(Math.random()* character.length);
        let rondom_item = character[random_r]
        return rondom_item
    }

    function generate_1(){
        let i =0 ;
        const n = 15;
        pass_1 ="";
        pass_2 ="";

        do{
            pass_1 +=generate();
            pass_2 +=generate();
            i++;

        }
        while(i<n);
        password_el.textContent = pass_1
        password_el2.textContent = pass_2
    }
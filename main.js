const contacts = ["Mario:01","Mina:02","Kero:03"];  

const para = document.querySelector('p');       // inserting constants for html tags like para for paragraph
const input = document.querySelector('input');
const btn = document.querySelector('button');


btn.addEventListener('click',function(){       // adding event listener

    let searchName = input.value.toLowerCase();   // converting search name to lower case and assigning it to variable first
    input.value='';                              // cleaning input area for the next search
    input.focus();                               // focusing on that area as well

    for (let i=0 ; i<searchName.length ; i++){    //repeating the stage on contacts array THEN using break to stop searching
        let splitContact = contacts[i].split(':'); // making array splitContact with 2 values stored inside from main array
        if(splitContact[0].toLowerCase() === searchName){ // [0] is the value of name we assigned to the variable
            para.textContent = splitContact[0] + "\'s number is " + splitContact[1] + "."; //message if success
            break;                                                               // stop search when result is found
        } else{
            para.textContent = "Sorry, not found!"
        }

    }

})
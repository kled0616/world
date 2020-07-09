var name="Tom";
var sum=1+3;
var age=23;

window.onload = function(){

    function sum(a,b) {
        result=a*b;
        return result;
    }


    // age = sum(5,4)
    // alert(age);

    // var age=20;
    // if (age<18){alert("未滿18歲");}
    // else if(age == 18){alert("18歲");}
    // else{alert("超過18歲");}

    // drink = "milk";
    // switch(drink){
    //     case "milk":
    //     console.log("I want " + drink);
    //     break;
    //     case "coffee":
    //     console.log("I want " + drink);
    //     break;
    //     default:
    //     console.log("I want "+"black tea");
    // }



    // var result=0
    // for ( var i=1; i<=5; i++) {
    //     console.log(i);
    //     var result=result+i;
    //     //console.log(result);
    // }

    // var i=0
    // while(i<=20){
    //     var result=result+i;
    //     i++;
    //     console.log(i);
    // }
    // console.log(result);
    

    document.getElementById("Login").addEventListener('mousemove', function() {
        alert('恭喜你中獎!');
        window.location = "login_page.html";

    });

}

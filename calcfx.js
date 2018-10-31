/*
	Casey Chen
	CS 480 - Lab 3
*/

var decCount = 0;

function dispClear()
{
	document.getElementById("errors").innerHTML = "";
	document.getElementById("calcFace").style.color = "#000000";
	document.getElementById("calcFace").value = "";
	
	if (decCount > 0)
	{
		decCount = 0;
	}
}

function dismiss()
{
	document.getElementById("calcFace").style.color = "#FF0000";
	document.getElementById("errors").innerHTML = "";
}

function placeInCalc(value)
{
	document.getElementById("calcFace").style.color = "#000000";
	
	var str = Array.from(document.getElementById("calcFace").value);
	
	if ((str[str.length - 1] == "/" || str[str.length - 1] == "%") && value == "0")
	{
		document.getElementById("errors").innerHTML = "ERROR: Cannot divide or mod by 0.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		return;
	}
	
	if (value == ".")
	{
		decCount++;
	}
	
	document.getElementById("calcFace").value += value;			
}

function calculate()
{
	if (document.getElementById("calcFace").value == "")
	{
		document.getElementById("errors").innerText = "ERROR: Please input an expression to be evaluated.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		return;
	}
	
	var str = Array.from(document.getElementById("calcFace").value);
	var toCheckEnd = str[str.length - 1];
	var toCheckBeg = str[0];
	
	for (var i = 0; i < str.length; i++)
	{
		if (str[i] == "+")
		{
			if (str[i + 1] == "+")
			{
				document.getElementById("errors").innerHTML = "ERROR: There are too many consecutive (+) operations.";
				document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
				
				document.getElementById("calcFace").style.color = "#FF0000";
			}
		}
		else if (toCheckBeg != "-" && str[i] == "-")
		{
			if (str[i + 1] == "-")
			{
				document.getElementById("errors").innerHTML = "ERROR: There are too many consecutive (-) operations.";
				document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
				
				document.getElementById("calcFace").style.color = "#FF0000";
				
				return;
			}
		}
		else if (str[i] == "/")
		{
			if (str[i + 1] == "/")
			{
				document.getElementById("errors").innerHTML = "ERROR: There are too many consecutive (/) operations.";
				document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
				
				document.getElementById("calcFace").style.color = "#FF0000";
				
				return;
			}
		}
		else if (str[i] == "%")
		{
			if (str[i + 1] == "%")
			{
				document.getElementById("errors").innerHTML = "ERROR: There are too many consecutive (%) operations.";
				document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
				
				document.getElementById("calcFace").style.color = "#FF0000";
				
				return;
			}
		}
	}
	
	if (str.length == 2)
	{
		if (toCheckBeg == "(" && toCheckEnd == ")")
		{
			document.getElementById("errors").innerHTML = "ERROR: Please input an expression to be evaluated.";
			document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
			
			document.getElementById("calcFace").style.color = "#FF0000";
			
			return;
		}
		if (toCheckBeg == ")" && toCheckEnd == "(")
		{
			document.getElementById("errors").innerHTML = "ERROR: Parentheses placed in the wrong order.";
			document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
			
			document.getElementById("calcFace").style.color = "#FF0000";
			
			return;
		}
	}

	if (toCheckEnd == "+" || toCheckEnd == "*" || toCheckEnd == "-" || toCheckEnd == "/" || toCheckEnd == "%" || toCheckEnd == "(" || toCheckEnd == ".")
	{
		document.getElementById("errors").innerHTML = "ERROR: Must complete the expression.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		document.getElementById("calcFace").style.color = "#FF0000";
		
		return;
	}
	
	if (toCheckBeg == "*" || toCheckBeg == "/" || toCheckBeg == "%")
	{
		document.getElementById("errors").innerHTML = "ERROR: Cannot have a stray operator to begin an expression.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		document.getElementById("calcFace").style.color = "#FF0000";
		
		return;
	}
	
	if (toCheckBeg == "+" || toCheckBeg == "0" || toCheckBeg == str[1] && isNaN(toCheckBeg))
	{
		str.splice(0, 1);
		
		document.getElementById("calcFace").value = str.join("");
	}
	
	if (toCheckEnd == str[str.length - 2] && isNaN(toCheckEnd))
	{
		str.splice(str.length - 2, str.length - 1);
		
		document.getElementById("calcFace").value = str.join("");
	}
	
	if (!checkForPar())
	{
		document.getElementById("errors").innerHTML = "ERROR: Mismatched parentheses.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		document.getElementById("calcFace").style.color = "#FF0000";
		
		return;
	}
	
	if (!checkForDecimals())
	{
		document.getElementById("errors").innerHTML = "ERROR: Cannot have more than one decimal point in a single number.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		document.getElementById("calcFace").style.color = "#FF0000";
		
		return;
	}

	var result = eval(document.getElementById("calcFace").value);
	
	if (!isFinite(result))
	{
		document.getElementById("errors").innerHTML = "ERROR: Overflow or cannot divide or mod by 0.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		document.getElementById("calcFace").style.color = "#FF0000";
		
		return;
	}
	
	dispClear();
	placeInCalc(result);
	
	document.getElementById("calcFace").style.color = "#0000FF";
}

function checkForPar()
{
	var str = Array.from(document.getElementById("calcFace").value);
	var lPar = 0;
	var rPar = 0;
	
	for (var i = 0; i < str.length; i++)
	{
		if (str[i] == "(")
		{
			lPar++;
		}
		else if (str[i] == ")")
		{
			rPar++;
		}
		else if (str[i] == "(" && str[i + 1] == ")")
		{
			document.getElementById("errors").innerHTML = "ERROR: Must complete the expression.";
			document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
			
			return;
		}
	}
	if (lPar == rPar)
	{
		return true;
	}
	
	return false;
}

function checkForDecimals()
{
	var str = Array.from(document.getElementById("calcFace").value);
	
	if (decCount > 1)
	{
		if (str.indexOf("+") == -1 && str.indexOf("*") == -1 && str.indexOf("-") == -1 && str.indexOf("/") == -1 && str.indexOf("%")== -1)
		{
			return false;
		}
	}
	
	return true;
}

function squareRoot()
{
	if (document.getElementById("calcFace").value == "")
	{
		document.getElementById("errors").innerHTML = "ERROR: Input a number prior to using the &radic; button.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		return;
	}
	
	var initial = eval(document.getElementById("calcFace").value);
	
	if (initial < 0)
	{
		document.getElementById("errors").innerText = "ERROR: No imaginary numbers in this calculator.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		return;
	}
	
	var root = Math.sqrt(initial);
	
	dispClear();
	placeInCalc(root);
	document.getElementById("calcFace").style.color = "#0000FF";
}

function square()
{
	if (document.getElementById("calcFace").value == "")
	{
		document.getElementById("errors").innerHTML = "ERROR: Input a number prior to using the x<sup>2</sup> button.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		return;
	}
	
	var initial = eval(document.getElementById("calcFace").value);
	var result = initial * initial;
	
	dispClear();
	placeInCalc(result);
	document.getElementById("calcFace").style.color = "#0000FF";
}

function backspace()
{
	var str = Array.from(document.getElementById("calcFace").value);
	
	var a = str.pop();
	
	if (a == ".")
	{
		--decCount;
	}
	
	dispClear();
	placeInCalc(str.join(""));
}

function trigFx(fx)
{
	if (document.getElementById("calcFace").value == "")
	{
		document.getElementById("errors").innerText = "ERROR: Input a number prior to using the trig buttons.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		return;
	}
	
	if (!checkForDecimals())
	{
		document.getElementById("errors").innerHTML = "ERROR: Cannot have more than one decimal point in a single number.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		return;
	}
	
	var initial = eval(document.getElementById("calcFace").value);
	var inRad = (initial * Math.PI) / 180;
	
	switch (fx)
	{
		case "sine":
			dispClear();
			placeInCalc(Math.sin(inRad));
			document.getElementById("calcFace").style.color = "#0000FF";
			break;
			
		case "cosine":
			dispClear();
			placeInCalc(Math.cos(inRad));
			document.getElementById("calcFace").style.color = "#0000FF";
			break;
			
		case "tangent":
			dispClear();
			placeInCalc(Math.tan(inRad));
			document.getElementById("calcFace").style.color = "#0000FF";
			break;
	}
}

function fact()
{
	if (document.getElementById("calcFace").value == "")
	{
		document.getElementById("errors").innerText = "ERROR: Input a number prior to using the n! button.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		document.getElementById("calcFace").style.color = "#FF0000";
		
		return;
	}
	
	var n = eval(document.getElementById("calcFace").value);
	var result = 1;
	var neg = 0;
	
	if (n < 0)
	{
		neg = 1;
		
		n = Math.abs(n);
	}
	
	if (n == 0)
	{
		dispClear();
		placeInCalc(result);
		document.getElementById("calcFace").style.color = "#0000FF";
		
		return;
	}
	else if (n >= 1)
	{
		while (n >= 1)
		{
			result *= n;
			
			n--;
		}
		
		if (neg == 1)
		{
			result *= -1;
		}
	}
	else
	{
		result = Math.sqrt((2 * n + (1 / 3)) * Math.PI) * Math.pow(n, n) * Math.pow(Math.E, -1 * n);
	}

	dispClear();
	placeInCalc(result);
	document.getElementById("calcFace").style.color = "#0000FF";
}

function reciprocal()
{
	if (document.getElementById("calcFace").value == "")
	{
		document.getElementById("errors").innerText = "ERROR: Input a number prior to using the reciprocal button.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		document.getElementById("calcFace").style.color = "#FF0000";
		
		return;
	}
	
	var initial = eval(document.getElementById("calcFace").value);
	
	if (initial == 0)
	{
		document.getElementById("errors").innerHTML = "ERROR: Cannot divide or mod by 0.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		document.getElementById("calcFace").style.color = "#FF0000";
		
		return;
	}
	
	var result = 1 / initial;
	
	dispClear();
	placeInCalc(result);
	document.getElementById("calcFace").style.color = "#0000FF";
}
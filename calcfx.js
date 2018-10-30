var decCount = 0;

function dispClear()
{
	document.getElementById("errors").innerHTML = "";
	document.getElementById("calcFace").value = "";
}

function dismiss()
{
	document.getElementById("errors").innerHTML = "";
}

function placeInCalc(value)
{
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

	if (toCheckEnd == "+" || toCheckEnd == "*" || toCheckEnd == "-" || toCheckEnd == "/" || toCheckEnd == "%" || toCheckEnd == "(" || toCheckEnd == ".")
	{
		document.getElementById("errors").innerHTML = "ERROR: Must complete the expression.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		return;
	}
	
	if (toCheckBeg == "*" || toCheckBeg == "/" || toCheckBeg == "%")
	{
		document.getElementById("errors").innerHTML = "ERROR: Cannot have a stray operator to begin an expression.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		return;
	}
	
	if (toCheckBeg == "+")
	{
		str.splice(0, 1);
		
		document.getElementById("calcFace").value = str.join("");
	}
	
	if (!checkForPar())
	{
		document.getElementById("errors").innerHTML = "ERROR: Mismatched parentheses.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		return;
	}
	
	if (!checkForDecimals())
	{
		return;
	}

	var result = eval(document.getElementById("calcFace").value);
	
	if (!isFinite(result))
	{
		document.getElementById("errors").innerHTML = "ERROR: Cannot divide or mod by 0.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		return;
	}
	
	dispClear();
	placeInCalc(result);
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
	
	if (decCount > 1 && 
		str.indexOf("+") == -1 && str.indexOf("*") == -1 && str.indexOf("-") == -1 && str.indexOf("/") == -1 && str.indexOf("%")== -1)
	{
		document.getElementById("errors").innerHTML = "ERROR: Cannot have more than one decimal point in a single number.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
	
		return false;
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
}

function backspace()
{
	var str = Array.from(document.getElementById("calcFace").value);
	
	var a = str.pop();
	
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
		return;
	}
	
	var initial = eval(document.getElementById("calcFace").value);
	
	switch (fx)
	{
		case "sine":
			dispClear();
			placeInCalc(Math.sin(initial));
			break;
			
		case "cosine":
			dispClear();
			placeInCalc(Math.cos(initial));
			break;
			
		case "tangent":
			dispClear();
			placeInCalc(Math.tan(initial));
			break;
	}
}

function fact()
{
	if (document.getElementById("calcFace").value == "")
	{
		document.getElementById("errors").innerText = "ERROR: Input a number prior to using the n! button.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
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
		
		return;
	}
	else if (n >= 1)
	{
		while (n >= 1)
		{
			result *= n;
			
			n--;
		}
	}
	else
	{
		result = Math.sqrt((2 * n + (1 / 3)) * Math.PI) * Math.pow(n, n) * Math.pow(Math.E, -1 * n);
		
		if (neg == 1)
		{
			result *= -1;
		}
	}

	dispClear();
	placeInCalc(result);
}

function reciprocal()
{
	if (document.getElementById("calcFace").value == "")
	{
		document.getElementById("errors").innerText = "ERROR: Input a number prior to using the reciprocal button.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		return;
	}
	
	var initial = eval(document.getElementById("calcFace").value);
	
	if (initial == 0)
	{
		document.getElementById("errors").innerHTML = "ERROR: Cannot divide or mod by 0.";
		document.getElementById("errors").innerHTML += " <a href='javascript:dismiss()'>DISMISS</a>";
		
		return;
	}
	
	var result = 1 / initial;
	
	dispClear();
	placeInCalc(result);
}
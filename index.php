<!--
	CASEY CHEN
	CS 480 - Lab 3
//-->
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="/styles/main.css">
		<title>
			JavaScript Calculator : Casey Chen
		</title>
		<script src="/scripts/calcfx.js"></script>
		<link rel="stylesheet" href="/styles/jscalc.css" />
	</head>
<body>
	<div class="header">
		<?php include($_SERVER["DOCUMENT_ROOT"]."/includes/header.php"); ?>
	</div>
	<div class="content">
		<h2>JavaScript Calculator</h2>
		<table style="width: 50%" id="calcTbl">
			<tr>
				<td style="text-align: center" colspan="5">
					<input type="text" id="calcFace" disabled />
				</td>
			</tr>
			<tr class="trBtns">
				<td>
					<input type="button" value="%" class="calcBtns opsBtn" onclick="placeInCalc('%')" />
				</td>
				<td>
					<input type="button" value="&radic;" class="calcBtns" onclick="squareRoot()" />
				</td>
				<td>
					<input type="button" value="x²" class="calcBtns" onclick="square()" />
				</td>
				<td>
					<input type="button" value="1/x" class="calcBtns" onclick="reciprocal()" />
				</td>
				<td>
					<input type="button" value="&pi;" class="calcBtns" onclick="placeInCalc('3.1415926535')" />
				</td>
			</tr>
			<tr class="trBtns">
				<td>
					<input type="button" value="c" class="calcBtns" onclick="dispClear()" />
				</td>
				<td>
					<input type="button" value="(" class="calcBtns" onclick="placeInCalc('(')" />
				</td>
				<td>
					<input type="button" value=")" class="calcBtns" onclick="placeInCalc(')')" />
				</td>
				<td>
					<input type="button" value="/" class="calcBtns opsBtn" onclick="placeInCalc('/')" />
				</td>
				<td>
					<input type="button" value="sin" class="calcBtns" onclick="trigFx('sine')" />
				</td>
			</tr>
			<tr class="trBtns">
				<td>
					<input type="button" value="7" class="calcBtns" onclick="placeInCalc('7')" />
				</td>
				<td>
					<input type="button" value="8" class="calcBtns" onclick="placeInCalc('8')" />
				</td>
				<td>
					<input type="button" value="9" class="calcBtns" onclick="placeInCalc('9')" />
				</td>
				<td>
					<input type="button" value="*" class="calcBtns opsBtn" onclick="placeInCalc('*')" />
				</td>
				<td>
					<input type="button" value="cos" class="calcBtns" onclick="trigFx('cosine')" />
				</td>
			</tr>
			<tr class="trBtns">
				<td>
					<input type="button" value="4" class="calcBtns" onclick="placeInCalc('4')" />
				</td>
				<td>
					<input type="button" value="5" class="calcBtns" onclick="placeInCalc('5')" />
				</td>
				<td>
					<input type="button" value="6" class="calcBtns" onclick="placeInCalc('6')" />
				</td>
				<td>
					<input type="button" value="-" class="calcBtns opsBtn" onclick="placeInCalc('-')" />
				</td>
				<td>
					<input type="button" value="tan" class="calcBtns" onclick="trigFx('tangent')" />
				</td>
			</tr>
			<tr class="trBtns">
				<td>
					<input type="button" value="1" class="calcBtns" onclick="placeInCalc('1')" />
				</td>
				<td>
					<input type="button" value="2" class="calcBtns" onclick="placeInCalc('2')" />
				</td>
				<td>
					<input type="button" value="3" class="calcBtns" onclick="placeInCalc('3')" />
				</td>
				<td>
					<input type="button" value="+" class="calcBtns opsBtn" onclick="placeInCalc('+')" />
				</td>
				<td>
					<input type="button" value="n!" class="calcBtns" onclick="fact()" />
				</td>
			</tr>
			<tr class="trBtns">
				<td>
					<input type="button" value="del" class="calcBtns" onclick="backspace()" />
				</td>
				<td>
					<input type="button" value="0" class="calcBtns" onclick="placeInCalc('0')" />
				</td>
				<td>
					<input type="button" value="." class="calcBtns" onclick="placeInCalc('.')" />
				</td>
				<td colspan="2">
					<input type="button" value="=" class="calcBtns" onclick="calculate()" />
				</td>
			</tr>
		</table>
		<span style="color: #FF0000; font-weight: bold; width: 100%; text-align: center" id="errors">&nbsp;</span>
	</div>
	<div class="footer">
		<?php include($_SERVER["DOCUMENT_ROOT"]."/includes/footer.php"); ?>
	</div>
</body>
</html>

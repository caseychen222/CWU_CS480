<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="/styles/main.css">
		<title>
			JavaScript Calculator : Casey Chen
		</title>
		<script>
			function dispClear()
			{
				document.getElementById("calcFace").value = "";
			}
			
			function placeInCalc(value)
			{
				document.getElementById("calcFace").value += value;
			}
			
			function calculate()
			{
				var result = eval(document.getElementById('calcFace').value);
				
				document.getElementById("calcFace").value = result;
			}
			
			function squareRoot()
			{
				var initial = eval(document.getElementById('calcFace').value);
				var root = Math.sqrt(eval);
				
				document.getElementById("calcFace").value = root;
			}
		</script>
		<style>
			.calcBtns
			{
				width: 100%;
				height: auto;
				font-size: 3em;
				text-align: center;
				background: #FFE533;
			}
		</style>
	</head>
<body>
	<div class="header">
		<?php include($_SERVER["DOCUMENT_ROOT"]."/includes/header.php"); ?>
	</div>
	<div class="content">
		<h2>JavaScript Calculator</h2>
		<table style="width: 50%; border: 2% solid #000000">
			<tr>
				<td style="text-align: center" colspan="4">
					<input type="text" id="calcFace" style="text-align: right; font-size: 3em; width: 100%" disabled value="1+2" />
				</td>
			</tr>
			<tr>
				<td>
					<input type="button" value="%" class="calcBtns" />
				</td>
				<td>
					<input type="button" value="sqrt" class="calcBtns" onclick="squareRoot()" />
				</td>
				<td>
					<input type="button" value="sq" class="calcBtns" />
				</td>
				<td>
					<input type="button" value="a" class="calcBtns" />
				</td>
			</tr>
			<tr>
				<td>
					<input type="button" value="C" class="calcBtns" onclick="dispClear()" />
				</td>
				<td>
					<input type="button" value="(" class="calcBtns" onclick="placeInCalc('(')" />
				</td>
				<td>
					<input type="button" value=")" class="calcBtns" onclick="placeInCalc(')')" />
				</td>
				<td>
					<input type="button" value="/" class="calcBtns" onclick="placeInCalc('/')" />
				</td>
			</tr>
			<tr>
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
					<input type="button" value="*" class="calcBtns" onclick="placeInCalc('*')" />
				</td>
			</tr>
			<tr>
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
					<input type="button" value="-" class="calcBtns" onclick="placeInCalc('-')" />
				</td>
			</tr>
			<tr>
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
					<input type="button" value="+" class="calcBtns" onclick="placeInCalc('+')" />
				</td>
			</tr>
			<tr>
				<td>
					<input type="button" value="a" class="calcBtns" />
				</td>
				<td>
					<input type="button" value="0" class="calcBtns" onclick="placeInCalc('0')" />
				</td>
				<td>
					<input type="button" value="." class="calcBtns" onclick="placeInCalc('.')" />
				</td>
				<td>
					<input type="button" value="=" class="calcBtns" onclick="calculate()" />
				</td>
			</tr>
		</table>
	</div>
	<div class="footer">
		<?php include($_SERVER["DOCUMENT_ROOT"]."/includes/footer.php"); ?>
	</div>
</body>
</html>
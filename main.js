$(document).ready(function(){
	var x = 43;
	var y = 30;
	var z = 45;
	var k = 24;
	let interval;
	interval = setInterval(myTimer, 2000);
	var key;
	$("#x_v").val(x);
	$("#y_v").val(y);
	$("#z_v").val(z);
	$("#k_v").val(k);
	let flag = 0;
	function myTimer () {
		flag = flag + 1;
		key = Math.floor(Math.random() * 10);
		if (flag > 3)
		{
			$(".modal_p").empty();
			$(".x").css("background-color", "white");
			$(".y").css("background-color", "white");
			$(".z").css("background-color", "white");
			$(".k").css("background-color", "white");
		}
		if (key == 0)
			key = 1;
		else {
			if ( (x - key) < 0 || (y - key) < 0 || (z - key) < 0 || (k - key) < 0 ) {
				congratulation();
			}

			else {
				if (key % 2 == 1)
				{
					$("#p_n1").val("A");
					$("#p_n2").val(key);
					x = x - key;
					y = y - key;
					z = z - key;
					console.log("x:" + x + "y" + y + "z " + z );
					$("#x_v").val(x);
					$("#y_v").val(y);
					$("#z_v").val(z);
				}
				else {
					$("#p_n1").val("B");
					$("#p_n2").val(key);
					x = x - key;
					y = y - key;
					k = k - key;
					$("#x_v").val(x);
					$("#y_v").val(y);
					$("#k_v").val(k);
				}
			}
		}
	}
	function congratulation() {
	 	clearInterval(interval);
	 	if (( x - key) < 0) {
	 		$(".x").css("background-color", "yellow");
	 	}
	 	if (( y - key) < 0) {
	 		$(".y").css("background-color", "yellow");
	 	}
	 	if (( z - key) < 0) {
	 		$(".z").css("background-color", "yellow");
	 	}
	 	if (( k - key) < 0) {
	 		$(".k").css("background-color", "yellow");
	 	}
	}
	$(".btn").click(function() {
		x = x + Number($("#x_i").val());
		y += Number($("#y_i").val());
		z += Number($("#z_i").val());
		k += Number($("#k_i").val());
		$("#x_v").val(x);
		$("#y_v").val(y);
		$("#z_v").val(z);
		$("#k_v").val(k);
		$(".modal_p").append("Successfully pushed!");
		interval = setInterval(myTimer, 2000);
	})
});
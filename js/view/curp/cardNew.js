<!-- TOPBAR -->
<script type="text/javascript">
var link = "";
if (MCOW.Session.Response.param["type"] == "scenario") {
	link = "/Curp/scenarioEdit?MCOW-transition=out&course=" + MCOW.Session.Response.param["course"]["id"];
}
else {
	link = "/Curp/courseEdit?MCOW-transition=out&course=" + MCOW.Session.Response.param["course"]["id"];
}
var color = MCOW.Session.Response.param["color"]
var colorname = "";
if (color == "orange") { colorname = "Teaching"; }
if (color == "blue") { colorname = "Learning"; }
if (color == "green") { colorname = "Outcome"; }
if (color == "grey") { colorname = "Task"; }
var text = "";
if (MCOW.Session.Response.param["type"] == "scenario") {
	text = "Discuss random card for course " + MCOW.Session.Response.param["course"]["title"];
}
else {
	/*text = "Add new " + colorname + " card to week " + MCOW.Session.Response.param["course"]["currentWeek"] + " of course " + MCOW.Session.Response.param["course"]["title"];*/
	text = "Add new " + colorname + " card to week " + MCOW.Session.Response.param["course"]["currentWeek"];
}
var html = "";
html = html + "<div class='curp-header-name'>";
// chevron_left
html = html + "<i data='" + link + "' class='mcow-touchable material-icons curp-link-data'>&#xE5CB;</i>";
html = html + "</div>";
html = html + "<div class='curp-header-course'>";
html = html + text;
html = html + "</div>";
MCOW.Util.setHTML("topbar",html);
document.getElementById("topbar").classList.add("courseBar");
</script>

<!-- PAGE CONTENT -->
<div id="content">
	<section style="height:100%;width:100%;background:#f5f5f5;padding-top:10px;">	
		<div class="curp-content-card-container" id="CARDNEW-SCRIPT-CARDS">
		</div>
		<script type="text/javascript">
			var html = "";
			var color = MCOW.Session.Response.param["color"];
			var course = MCOW.Session.Response.param["course"]["id"];
			if (MCOW.Session.Response.param["type"] == "scenario") {
					html = html + "<div class='curp-content-card-item " + color + "-card'>";
					html = html + "<a class='mcow-touchable curp-link-data' data='/Curp/cardNew?course=" + course + "&color=" + color + "&card=" + MCOW.Session.Response.param["random"] + "&type=scenario" + "&MCOW-transition=out&MCOW-redirect=" + encodeURIComponent("/Curp/scenarioEdit?MCOW-reload=1&course=" + course) + "'>" + MCOW.Session.Response.param["cards"][MCOW.Session.Response.param["random"]] + "</a>";
					html = html + "</div>";
			}
			else {
				for (var i=0;i<MCOW.Session.Response.param["cards"].length;i++) {
					html = html + "<div class='curp-content-card-item " + color + "-card'>";
					html = html + "<a class='mcow-touchable curp-link-data' data='/Curp/cardNew?course=" + course + "&color=" + color + "&card=" + i + "&MCOW-transition=out&MCOW-redirect=" + encodeURIComponent("/Curp/courseEdit?MCOW-reload=1&course=" + course) + "'>" + MCOW.Session.Response.param["cards"][i] + "</a>";
					html = html + "</div>";
				}
			}
			MCOW.Util.setHTML("CARDNEW-SCRIPT-CARDS",html);
		</script>

	</section>
</div>


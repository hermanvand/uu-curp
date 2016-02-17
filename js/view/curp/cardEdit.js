<!-- TOPBAR -->
<script type="text/javascript">
var link = "";
if (MCOW.Session.Response.param["type"] == "scenario") {
	link = "/Curp/scenarioEdit?MCOW-transition=out&course=" + MCOW.Session.Response.param["course"]["id"];
}
else {
	link = "/Curp/courseEdit?MCOW-transition=out&course=" + MCOW.Session.Response.param["course"]["id"];
}
var text = "";
if (MCOW.Session.Response.param["type"] == "scenario") {
	var currentCard = MCOW.Session.Response.param["course"]["wildcards"][MCOW.Session.Response.param["cardId"]]
	text = "Edit scenario: " + currentCard["title"];
}
else {
	var currentWeek = MCOW.Session.Response.param["course"]["currentWeek"];
	var currentCard = MCOW.Session.Response.param["course"]["weeks"][currentWeek-1]["cards"][MCOW.Session.Response.param["cardId"]]
	text= "Edit description of " + currentCard["title"];

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
		<div class="curp-content-card-edit" id="CARDEDIT-SCRIPT-DESCRIPTION">
		</div>
		<script type="text/javascript">
			if (MCOW.Session.Response.param["type"] == "scenario") {
				var currentCard = MCOW.Session.Response.param["course"]["wildcards"][MCOW.Session.Response.param["cardId"]]
				var html = "<form name='cardEditForm' onsubmit='if (MCOW.Config[\"target\"] == \"phonegap\") { cordova.plugins.Keyboard.close(); }; return false'><table>";
				var html = html + "<tr><td>Note</td><td><textarea class='form-focus' rows='10' cols='80' name='description'>" + currentCard["description"] + "</textarea></td></tr>";
				var html = html + "<tr><td></td><td><button class='mcow-touchable curp-link-data' data='/Curp/cardEdit?course=" + MCOW.Session.Response.param["course"]["id"] + "&card=" + MCOW.Session.Response.param["cardId"] + "&type=scenario" + "&MCOW-transition=out&MCOW-redirect=" + encodeURIComponent("/Curp/scenarioEdit?MCOW-reload=1&course=" + MCOW.Session.Response.param["course"]["id"]) + "'>Change</a></td></tr>";
				var html = html + "</table></form>";
			}
			else {
				var currentWeek = MCOW.Session.Response.param["course"]["currentWeek"];
				var currentCard = MCOW.Session.Response.param["course"]["weeks"][currentWeek-1]["cards"][MCOW.Session.Response.param["cardId"]]
				var html = "<form name='cardEditForm' onsubmit='if (MCOW.Config[\"target\"] == \"phonegap\") { cordova.plugins.Keyboard.close(); }; return false'><table>";
				var html = html + "<tr><td>Description</td><td><textarea class='form-focus' rows='10' cols='80' name='description'>" + currentCard["description"] + "</textarea></td></tr>";
				var html = html + "<tr><td></td><td><button class='mcow-touchable curp-link-data' data='/Curp/cardEdit?course=" + MCOW.Session.Response.param["course"]["id"] + "&card=" + MCOW.Session.Response.param["cardId"] + "&MCOW-transition=out&MCOW-redirect=" + encodeURIComponent("/Curp/courseEdit?MCOW-reload=1&course=" + MCOW.Session.Response.param["course"]["id"]) + "'>Change</a></td></tr>";
				var html = html + "</table></form>";
			}
			MCOW.Util.setHTML("CARDEDIT-SCRIPT-DESCRIPTION",html);
		</script>	
	</section>
</div>


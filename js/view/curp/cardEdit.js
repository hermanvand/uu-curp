<header id="header">
	<section>
	</section>
</header>	
<div id="content">
	<section>
		<div class="plus-small close" id="CARDEDIT-SCRIPT-CLOSE">
		</div>
		<script type="text/javascript">
			if (MCOW.Session.Response.param["type"] == "scenario") {
				var html = "<a href='/Curp/scenarioEdit?MCOW-transition=out&course=" + MCOW.Session.Response.param["course"]["id"] + "'>x</a>";
			}
			else {
				var html = "<a href='/Curp/courseEdit?MCOW-transition=out&course=" + MCOW.Session.Response.param["course"]["id"] + "'>x</a>";
			}
			MCOW.Util.setHTML("CARDEDIT-SCRIPT-CLOSE",html);
		</script>	

		<div class="close-header" id="CARDEDIT-SCRIPT-TITLE">
		</div>
		<script type="text/javascript">
			if (MCOW.Session.Response.param["type"] == "scenario") {
				var currentCard = MCOW.Session.Response.param["course"]["wildcards"][MCOW.Session.Response.param["cardId"]]
				var html = "Edit scenario: " + currentCard["title"];
			}
			else {
				var currentWeek = MCOW.Session.Response.param["course"]["currentWeek"];
				var currentCard = MCOW.Session.Response.param["course"]["weeks"][currentWeek-1]["cards"][MCOW.Session.Response.param["cardId"]]
				var html = "Edit description of " + currentCard["title"];
			}
			MCOW.Util.setHTML("CARDEDIT-SCRIPT-TITLE",html);
		</script>	
		<br clear="all">

		<div class="curp-content-card-edit" id="CARDEDIT-SCRIPT-DESCRIPTION">
		</div>
		<script type="text/javascript">
			if (MCOW.Session.Response.param["type"] == "scenario") {
				var currentCard = MCOW.Session.Response.param["course"]["wildcards"][MCOW.Session.Response.param["cardId"]]
				var html = "<form name='cardEditForm' onsubmit='if (MCOW.Config[\'target\'] == \'phonegap\') { cordova.plugins.Keyboard.close(); }; return false'><table>";
				var html = html + "<tr><td>Note</td><td><textarea class='form-focus' rows='10' cols='80' name='description'>" + currentCard["description"] + "</textarea></td></tr>";
				var html = html + "<tr><td></td><td><a href='/Curp/cardEdit?course=" + MCOW.Session.Response.param["course"]["id"] + "&card=" + MCOW.Session.Response.param["cardId"] + "&type=scenario" + "&MCOW-transition=out&MCOW-redirect=" + encodeURIComponent("/Curp/scenarioEdit?MCOW-reload=1&course=" + MCOW.Session.Response.param["course"]["id"]) + "'>Ok</a></td></tr>";
				var html = html + "</table></form>";
			}
			else {
				var currentWeek = MCOW.Session.Response.param["course"]["currentWeek"];
				var currentCard = MCOW.Session.Response.param["course"]["weeks"][currentWeek-1]["cards"][MCOW.Session.Response.param["cardId"]]
				var html = "<form name='cardEditForm'><table>";
				var html = html + "<tr><td>Description</td><td><textarea class='form-focus' rows='10' cols='80' name='description'>" + currentCard["description"] + "</textarea></td></tr>";
				var html = html + "<tr><td></td><td><a href='/Curp/cardEdit?course=" + MCOW.Session.Response.param["course"]["id"] + "&card=" + MCOW.Session.Response.param["cardId"] + "&MCOW-transition=out&MCOW-redirect=" + encodeURIComponent("/Curp/courseEdit?MCOW-reload=1&course=" + MCOW.Session.Response.param["course"]["id"]) + "'>Ok</a></td></tr>";
				var html = html + "</table></form>";
			}
			MCOW.Util.setHTML("CARDEDIT-SCRIPT-DESCRIPTION",html);
		</script>	
	</section>
</div>
<aside id="sidebar">
	<section>
		<p>
			This is the sidebar, for additional information.
		</p>
	</section>
</aside>
<footer id="footer">
	<section>
		<p>
			&copy; herman
		</p>
	</section>
</footer>

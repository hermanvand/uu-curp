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
		
		<div class="close-header" id="CARDNEW-SCRIPT-WEEK">
		</div>
		<script type="text/javascript">
			if (MCOW.Session.Response.param["type"] == "scenario") {
				var html = "Discuss random card for course " + MCOW.Session.Response.param["course"]["title"];
			}
			else {
				var html = "Add new card to week " + MCOW.Session.Response.param["course"]["currentWeek"] + " of course " + MCOW.Session.Response.param["course"]["title"];
			}
			MCOW.Util.setHTML("CARDNEW-SCRIPT-WEEK",html);
		</script>	
		<br clear="all">
		
		<div class="curp-content-card-container" id="CARDNEW-SCRIPT-CARDS">
		</div>
		<script type="text/javascript">
			var html = "";
			var color = MCOW.Session.Response.param["color"];
			var course = MCOW.Session.Response.param["course"]["id"];
			if (MCOW.Session.Response.param["type"] == "scenario") {
					html = html + "<div class='curp-content-card-item " + color + "-card'>";
					html = html + "<a href='/Curp/cardNew?course=" + course + "&color=" + color + "&card=" + MCOW.Session.Response.param["random"] + "&type=scenario" + "&MCOW-transition=out&MCOW-redirect=" + encodeURIComponent("/Curp/scenarioEdit?MCOW-reload=1&course=" + course) + "'>" + MCOW.Session.Response.param["cards"][MCOW.Session.Response.param["random"]] + "</a>";
					html = html + "</div>";
			}
			else {
				for (var i=0;i<MCOW.Session.Response.param["cards"].length;i++) {
					html = html + "<div class='curp-content-card-item " + color + "-card'>";
					html = html + "<a href='/Curp/cardNew?course=" + course + "&color=" + color + "&card=" + i + "&MCOW-transition=out&MCOW-redirect=" + encodeURIComponent("/Curp/courseEdit?MCOW-reload=1&course=" + course) + "'>" + MCOW.Session.Response.param["cards"][i] + "</a>";
					html = html + "</div>";
				}
			}
			MCOW.Util.setHTML("CARDNEW-SCRIPT-CARDS",html);
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

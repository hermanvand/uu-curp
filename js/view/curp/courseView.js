<header id="header">
	<section>
		<div class="curp-header-name">
			<img border="0" src="gfx/curp/curp-logo.png" height="30px"/>
		</div>
		<div class="curp-header-curriculum" id="COURSEVIEW-SCRIPT-PERIOD">
		</div>
		<script type="text/javascript">
			var html = MCOW.Session.Response.param["currentPeriod"];
			MCOW.Util.setHTML("COURSEVIEW-SCRIPT-PERIOD",html);
		</script>	
		<div class="curp-header-course" id="COURSEVIEW-SCRIPT-COURSE">
		</div>
		<script type="text/javascript">
			var html = "Course: " + MCOW.Session.Response.param["course"]["title"] + " (<a href='/Curp/home?MCOW-transition=left'>switch</a>)";
			html = html + "<a class='first-item' href='/Curp/courseEdit?MCOW-transition=left&course=" + MCOW.Session.Response.param["course"]["id"] + "'>Edit</a>";
			html = html + " | <a class='active' href='/Curp/courseView?course=" + MCOW.Session.Response.param["course"]["id"] + "'>View & Play</a>";
			html = html + " | <a href='/Curp/courseShare?course=" + MCOW.Session.Response.param["course"]["id"] + "'>Share</a>";
			MCOW.Util.setHTML("COURSEVIEW-SCRIPT-COURSE",html);
		</script>	
	</section>
</header>	
<div id="content">
	<div class="curp-content-left">
	</div>

	<div class="curp-content-center">
		<div class="curp-content-course-container" id="COURSEVIEW-SCRIPT-CARDS">
		</div>
		<script type="text/javascript">
			var html= "";
			html = html + "<p>View";
			html = html + " | <a href='/Curp/scenarioEdit?MCOW-transition=none&course=" + MCOW.Session.Response.param["course"]["id"] + "'>Play</a></p>";
			for (var i=0;i<MCOW.Session.Response.param["course"]["weeks"].length;i++) {
				html = html + "<p class='plus-small'>Wk " + (i+1) + "</p>";
				for (var j=0;j<MCOW.Session.Response.param["course"]["weeks"][i]["cards"].length;j++) {
					var color = MCOW.Session.Response.param["course"]["weeks"][i]["cards"][j]["color"];
					var title = MCOW.Session.Response.param["course"]["weeks"][i]["cards"][j]["title"];
					var description = MCOW.Session.Response.param["course"]["weeks"][i]["cards"][j]["description"];

					html = html + "<div class='curp-content-course-item " + color + "-line'>";
					html = html + "<div class='curp-content-course-item-title " + color + "-card'>";
					html = html + title;
					html = html + "</div>";
					html = html + "<div class='curp-content-course-item-description'>";
					html = html + description;
					html = html + "</div>";
					html = html + "</div>";
				}
			}
			MCOW.Util.setHTML("COURSEVIEW-SCRIPT-CARDS",html);
		</script>
	</div>

	<div class="curp-content-right">
	</div>
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

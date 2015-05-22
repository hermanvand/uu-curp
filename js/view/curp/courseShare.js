<header id="header">
	<section>
		<div class="curp-header-name">
			<img border="0" src="gfx/curp/curp-logo.png" height="30px"/>
		</div>
		<div class="curp-header-curriculum" id="COURSESHARE-SCRIPT-PERIOD">
		</div>
		<script type="text/javascript">
			var html = MCOW.Session.Response.param["currentPeriod"];
			MCOW.Util.setHTML("COURSESHARE-SCRIPT-PERIOD",html);
		</script>	
		<div class="curp-header-course" id="COURSESHARE-SCRIPT-COURSE">
		</div>
		<script type="text/javascript">
			var html = "Course: " + MCOW.Session.Response.param["course"]["title"] + " (<a href='/Curp/home?MCOW-transition=left'>switch</a>)";
			html = html + "<a class='first-item' href='/Curp/courseEdit?MCOW-transition=left&course=" + MCOW.Session.Response.param["course"]["id"] + "'>Edit</a>";
			html = html + " | <a href='/Curp/courseView?MCOW-transition=left&course=" + MCOW.Session.Response.param["course"]["id"] + "'>View & Play</a>";
			html = html + " | <a class='active' href='/Curp/courseShare?course=" + MCOW.Session.Response.param["course"]["id"] + "'>Share</a>";
			MCOW.Util.setHTML("COURSESHARE-SCRIPT-COURSE",html);
		</script>	
	</section>
</header>	
<div id="content">
	<div class="curp-content-center">

		<div class="curp-content-left">
		</div>

		<div class="curp-content-course-container" id="COURSESHARE-SCRIPT-CARDS">
		</div>
		<script type="text/javascript">
			var html = "";
			html = html + "<p class='plus-small'>Tasklist</p>";
			html = html + "<table class='curp-content-course-table'>";
			html = html + "<thead>";
			html = html + "<tr><th>Week</th><th>Item</th><th>Type</th><th>Topic</th></tr>";
			html = html + "</thead>";
			html = html + "<tbody>";
			var lastI = 0;
			for (var i=0;i<MCOW.Session.Response.param["course"]["weeks"].length;i++) {
				if ( i > lastI) {
					lastI = i;
					html = html + "<tr><td class='curp-content-course-table-seperator' colspan='4'></td></tr>";
				}
				for (var j=0;j<MCOW.Session.Response.param["course"]["weeks"][i]["cards"].length;j++) {
					var title = MCOW.Session.Response.param["course"]["weeks"][i]["cards"][j]["title"];
					var description = MCOW.Session.Response.param["course"]["weeks"][i]["cards"][j]["description"];
				
					html = html + "<tr>";
					html = html + "<td>" + (i+1) + "</td>";
					html = html + "<td>" + (j+1) + "</td>";
					html = html + "<td>" + title + "</td>";
					html = html + "<td>" + description + "</td>";
					html = html + "</tr>";
				}
			}
			html = html + "</tbody>";
			html = html + "</table>";
			MCOW.Util.setHTML("COURSESHARE-SCRIPT-CARDS",html);
		</script>
	</div>

	<div class="curp-content-right">
		<p class="curp-section-header">Share options</p>
		<div class="curp-content-card-list" id="COURSESHARE-SCRIPT-LINKS">
		</div>
		<script type="text/javascript">
			var html = "";
			html = html + "<button class='curp-share-json'>JSON</button>";
			html = html + "<button class='curp-share-csv'>CSV</button>";
			MCOW.Util.setHTML("COURSESHARE-SCRIPT-LINKS",html);
		</script>
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

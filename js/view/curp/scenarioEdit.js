<header id="header">
	<section>
		<div class="curp-header-name">
			<img border="0" src="gfx/curp/curp-logo.png" height="30px"/>
		</div>
		<div class="curp-header-curriculum" id="SCENARIOEDIT-SCRIPT-PERIOD">
		</div>
		<script type="text/javascript">
			var html = MCOW.Session.Response.param["currentPeriod"];
			MCOW.Util.setHTML("SCENARIOEDIT-SCRIPT-PERIOD",html);
		</script>	
		<div class="curp-header-course" id="SCENARIOEDIT-SCRIPT-COURSE">
		</div>
		<script type="text/javascript">
			var html = "Course: " + MCOW.Session.Response.param["course"]["title"] + " (<a href='/Curp/home?MCOW-transition=left'>switch</a>)";
			html = html + "<a class='first-item' href='/Curp/courseEdit?course=" + MCOW.Session.Response.param["course"]["id"] + "'>Edit</a>";
			html = html + " | <a class='active' href='/Curp/courseView?course=" + MCOW.Session.Response.param["course"]["id"] + "'>View & Play</a>";
			html = html + " | <a href='/Curp/courseShare?course=" + MCOW.Session.Response.param["course"]["id"] + "'>Share</a>";
			MCOW.Util.setHTML("SCENARIOEDIT-SCRIPT-COURSE",html);
		</script>	
	</section>
</header>	
<div id="content">
	<div class="curp-content-center">

		<div class="curp-content-left">
		</div>

		<div class="curp-content-course-container" id="SCENARIOEDIT-SCRIPT-CARDS" style='position:relative;'>
		</div>
		<script type="text/javascript">
			var html= "";
			html = html + "<p><a href='/Curp/courseView?MCOW-transition=none&course=" + MCOW.Session.Response.param["course"]["id"] + "'>View</a>";
			html = html + " | Play</p>";
			html = html + "<p class='plus-small'>Scenario's</p>";
			for (var i=0;i<MCOW.Session.Response.param["course"]["wildcards"].length;i++) {
				var color = MCOW.Session.Response.param["course"]["wildcards"][i]["color"];
				var title = MCOW.Session.Response.param["course"]["wildcards"][i]["title"];
				var description = MCOW.Session.Response.param["course"]["wildcards"][i]["description"];

				html = html + "<div class='mcow-touchable curp-content-course-item " + color + "-line' style='position:relative;'>";
				html = html + "<div class='curp-content-course-item-title " + color + "-card'>";
				html = html + title;
				html = html + "</div>";
				html = html + "<div class='curp-content-course-item-description'>";
				html = html + description;
				html = html + "</div>";
				html = html + "<div class='menu' tabindex='-1'>";
				html = html + "<div class='close menu-cancel'>x</div><br clear='all'>";
				html = html + "<div class='menu-container'><ul class='menu-list' data-card='" + i + "'>";
				html = html + "<li class='menu-item curp-content-scenario-item-edit'>Edit</li>";
				html = html + "<li class='menu-item curp-content-scenario-item-delete'>Delete</li>";
				html = html + "</ul></div>";
				html = html + "</div>";
				html = html + "</div>";
			}
			MCOW.Util.setHTML("SCENARIOEDIT-SCRIPT-CARDS",html);
		</script>
	</div>

	<div class="curp-content-right">
		<p class="curp-section-header">Random card</p>
		<div class="curp-content-card-list" id="SCENARIOEDIT-SCRIPT-LINKS">
		</div>
		<script type="text/javascript">
			var html = "";
			html = html + "<div class='curp-content-card pink-card'><a href='/Curp/cardNew?course=" + MCOW.Session.Response.param["course"]["id"] + "&color=pink&type=scenario'>Inclusivity</a></div>";
			MCOW.Util.setHTML("SCENARIOEDIT-SCRIPT-LINKS",html);
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

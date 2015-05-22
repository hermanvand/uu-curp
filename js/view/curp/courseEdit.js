<header id="header">
	<section>
		<div class="curp-header-name">
			<img border="0" src="gfx/curp/curp-logo.png" height="30px"/>
		</div>
		<div class="curp-header-curriculum" id="COURSEEDIT-SCRIPT-PERIOD">
		</div>
		<script type="text/javascript">
			var html = MCOW.Session.Response.param["currentPeriod"];
			MCOW.Util.setHTML("COURSEEDIT-SCRIPT-PERIOD",html);
		</script>	
		<div class="curp-header-course" id="COURSEEDIT-SCRIPT-COURSE">
		</div>
		<script type="text/javascript">
			var html = "Course: " + MCOW.Session.Response.param["course"]["title"] + " (<a href='/Curp/home?MCOW-transition=left'>switch</a>)";
			html = html + "<a class='first-item active' href='/Curp/courseEdit?course=" + MCOW.Session.Response.param["course"]["id"] + "'>Edit</a>";
			html = html + " | <a href='/Curp/courseView?course=" + MCOW.Session.Response.param["course"]["id"] + "'>View & Play</a>";
			html = html + " | <a href='/Curp/courseShare?course=" + MCOW.Session.Response.param["course"]["id"] + "'>Share</a>";
			MCOW.Util.setHTML("COURSEEDIT-SCRIPT-COURSE",html);
		</script>	
	</section>
</header>	
<div id="content">
	<div class="curp-content-left">
		<p class="curp-section-header">Set week</p>
		<div class="curp-content-week-container" id="COURSEEDIT-SCRIPT-WEEKS" style='position:relative;'>
		</div>
		<script type="text/javascript">
			var html= "";
			for (var i=0;i<MCOW.Session.Response.param["course"]["weeks"].length;i++) {
				var t=i*70;
				var l=10;
				if (i == MCOW.Session.Response.param["course"]["currentWeek"] - 1) {
					html = html + "<div class='mcow-touchable curp-content-week-item-selected' data-week='" + (i+1) + "' style='position:absolute;top:" + t + "px;left:" + l + "px;'>"+(i+1);
				}
				else {
					html = html + "<div class='mcow-touchable curp-content-week-item' data-week='" + (i+1) + "' style='position:absolute;top:" + t + "px;left:" + l + "px;'>"+(i+1);
				}
				html = html + "<div class='menu' tabindex='-1'>";
				html = html + "<div class='close menu-cancel'>x</div><br clear='all'>";
				html = html + "<div class='menu-container'><ul class='menu-list' data-week='" + (i+1) + "'>";
				if (i != 0) {
					html = html + "<li class='menu-item curp-content-week-item-up'><nobr>Move up</nobr></li>";
				}
				if (i != MCOW.Session.Response.param["course"]["weeks"].length-1) {
					html = html + "<li class='menu-item curp-content-week-item-down'><nobr>Move down</nobr></li>";
				}
				html = html + "<li class='menu-item curp-content-week-item-delete'>Delete</li>";
				html = html + "</ul></div>";
				html = html + "</div>";
				html = html + "</div>";
			}
			html = html + "<button class='plus-small curp-week-new' style='position:absolute;top:" + (t + 70) + "px;left:" + l + "px;'>+</button>";
			MCOW.Util.setHTML("COURSEEDIT-SCRIPT-WEEKS",html);
		</script>
	</div>
	<div class="curp-content-center">
		<div class="curp-content-course-container" id="COURSEEDIT-SCRIPT-CARDS" style='position:relative;'>
		</div>
		<script type="text/javascript">
			var html= "";
			var currentWeek = MCOW.Session.Response.param["course"]["currentWeek"];
			if (currentWeek != 0) {
				html = html + "<p class='plus-small'>Wk " + currentWeek + "</p>";
				for (var i=0;i<MCOW.Session.Response.param["course"]["weeks"][currentWeek-1]["cards"].length;i++) {
					var t=70 + (i*120);
					var l=10;
					var color = MCOW.Session.Response.param["course"]["weeks"][currentWeek-1]["cards"][i]["color"];
					var title = MCOW.Session.Response.param["course"]["weeks"][currentWeek-1]["cards"][i]["title"];
					var description = MCOW.Session.Response.param["course"]["weeks"][currentWeek-1]["cards"][i]["description"];

					html = html + "<div class='mcow-touchable curp-content-course-item " + color + "-line' style='position:relative;'>";
					//html = html + "<div class='mcow-touchable curp-content-course-item " + color + "-line' style='position:absolute;top:" + t + "px;left:" + l + "px;'>";
					html = html + "<div class='curp-content-course-item-title " + color + "-card'>";
					html = html + title;
					html = html + "</div>";
					html = html + "<div class='curp-content-course-item-description'>";
					html = html + description;
					html = html + "</div>";
					html = html + "<div class='menu' tabindex='-1'>";
					html = html + "<div class='close menu-cancel'>x</div><br clear='all'>";
					html = html + "<div class='menu-container'><ul class='menu-list' data-card='" + i + "'>";
					if (i != 0) {
						html = html + "<li class='menu-item curp-content-course-item-up'><nobr>Move up</nobr></li>";
					}
					if (i != MCOW.Session.Response.param["course"]["weeks"][currentWeek-1]["cards"].length-1) {
						html = html + "<li class='menu-item curp-content-course-item-down'><nobr>Move down</nobr></li>";
					}
					html = html + "<li class='menu-item curp-content-course-item-edit'>Edit</li>";
					html = html + "<li class='menu-item curp-content-course-item-delete'>Delete</li>";
					html = html + "</ul></div>";
					html = html + "</div>";
					html = html + "</div>";
				}
			}
			MCOW.Util.setHTML("COURSEEDIT-SCRIPT-CARDS",html);
		</script>
	</div>
	<div class="curp-content-right">
		<p class="curp-section-header">Choose card</p>
		<div class="curp-content-card-list" id="COURSEEDIT-SCRIPT-LINKS">
		</div>
		<script type="text/javascript">
			var html = "";
			html = html + "<div class='curp-content-card orange-card'><a href='/Curp/cardNew?course=" + MCOW.Session.Response.param["course"]["id"] + "&color=orange'>Teaching</a></div>";
			html = html + "<div class='curp-content-card blue-card'><a href='/Curp/cardNew?course=" + MCOW.Session.Response.param["course"]["id"] + "&color=blue'>Learning</a></div>";
			html = html + "<div class='curp-content-card green-card'><a href='/Curp/cardNew?course=" + MCOW.Session.Response.param["course"]["id"] + "&color=green'>Outcome</a></div>";
			html = html + "<div class='curp-content-card grey-card'><a href='/Curp/cardNew?course=" + MCOW.Session.Response.param["course"]["id"] + "&color=grey'>Task</a></div>";
			MCOW.Util.setHTML("COURSEEDIT-SCRIPT-LINKS",html);
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

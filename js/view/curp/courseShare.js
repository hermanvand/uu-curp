<!-- TOPBAR -->
<script type="text/javascript">
var html = "";
html = html + "<div class='curp-header-name'>";
// menu
html = html + "<i class='mcow-touchable material-icons curp-header-left-open'>&#xE5D2;</i>";
html = html + "</div>";
html = html + "<div class='curp-header-course'>";
html = html + MCOW.Session.Response.param["course"]["title"];
html = html + "</div>";
html = html + "<div class='curp-header-curriculum'>";
html = html + MCOW.Session.Response.param["currentPeriod"];
html = html + "</div>";
MCOW.Util.setHTML("topbar",html);
document.getElementById("topbar").classList.add("courseHeader");
</script>

<!-- PAGE CONTENT -->
<div id="content">
		<div class="curp-content-left">
			<p class="curp-section-header">Download options</p>
			<div class="curp-content-card-list" id="COURSESHARE-SCRIPT-LINKS">
			</div>
			<script type="text/javascript">
				var html = "";
				html = html + "<button class='curp-share-json' style='display: block; margin:10px;'>show JSON</button>";
				html = html + "<button class='curp-share-csv' style='display: block; margin:10px;'>show CSV</button>";
				html = html + "<button class='curp-share-social' style='display: block; margin:10px;'>share CSV</button>";
				MCOW.Util.setHTML("COURSESHARE-SCRIPT-LINKS",html);
			</script>
		</div>

		<div class="curp-content-course-container" id="COURSESHARE-SCRIPT-CARDS">
		</div>
		<script type="text/javascript">
			var html = "";
			html = html + "<p>Tasklist</p>";
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

<!-- LEFTNAV -->
<script type="text/javascript">
var html = "";
html = html + "<div id='leftnavMenu' class='visible'>";
// menu
html = html + "<i class='mcow-touchable material-icons curp-header-left-close'>&#xE5D2;</i>";
html = html + "<img border='0' src='gfx/curp/curp-logo.png' height='30px' style='padding-left:10px;'/>";
html = html + "<ul>";
// home, edit, visibility, slideshow, file_download
html = html + "<li><i class='material-icons'>&#xE88A;</i><span class='mcow-touchable curp-link-nav' data='/Curp/home'>Cursus overzicht</span></li>";
html = html + "<li><i class='material-icons'>&#xE3C9;</i><span class='mcow-touchable curp-link-nav' data='/Curp/courseEdit?course=" + MCOW.Session.Response.param["course"]["id"] + "'>Edit</span></li>";
html = html + "<li><i class='material-icons'>&#xE8F4;</i><span class='mcow-touchable curp-link-nav' data='/Curp/courseView?course=" + MCOW.Session.Response.param["course"]["id"] + "'>View</span></li>";
html = html + "<li><i class='material-icons'>&#xE41B;</i><span class='mcow-touchable curp-link-nav' data='/Curp/scenarioEdit?MCOW-transition=none&course=" + MCOW.Session.Response.param["course"]["id"] + "'>Play</sapn></li>";
html = html + "<li><i class='material-icons'>&#xE2C4;</i><span class='mcow-touchable curp-link-nav' data='/Curp/courseShare?course=" + MCOW.Session.Response.param["course"]["id"] + "'>Download</span></li>";
html = html + "</ul>";
html = html + "</div>";
MCOW.Util.setHTML("leftnav",html);
</script>

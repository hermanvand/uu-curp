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

<!-- FLOATING ACTION BUTTON -->
<script type="text/javascript">
var html = "";
// add_circle
html = html + "<i class='mcow-touchable curp-header-right-open material-icons md-48'>&#xE147;</i>";
MCOW.Util.setHTML("actionbutton",html);
document.getElementById("actionbutton").classList.add("editButton");
document.getElementById("actionbutton").style.top = "100px";
document.getElementById("actionbutton").style.right = "30px";
document.getElementById("actionbutton").style.left = "auto";
</script>

<!-- PAGE CONTENT -->
<div id="content">
		<div class="curp-content-course-container-full" id="SCENARIOEDIT-SCRIPT-CARDS" style='position:relative;'>
		</div>
		<script type="text/javascript">
			var html= "";
			html = html + "<p>Play with scenario's</p>";
			for (var i=0;i<MCOW.Session.Response.param["course"]["wildcards"].length;i++) {
				var color = MCOW.Session.Response.param["course"]["wildcards"][i]["color"];
				var title = MCOW.Session.Response.param["course"]["wildcards"][i]["title"];
				var description = MCOW.Session.Response.param["course"]["wildcards"][i]["description"];

				html = html + "<div class='mcow-touchable curp-content-course-item' style='position:relative;'>";

				// the card
				html = html + "<div class='curp-content-course-item-text " + color + "-card'>";
				html = html + "<div class='curp-content-course-item-title'>";
				html = html + title;
				html = html + "</div>";
				html = html + "<div class='curp-content-course-item-description'>";
				html = html + description;
				html = html + "</div>";
				html = html + "<div class='curp-content-course-item-actions' data-card='" + i + "'>";
				html = html + "<span data='/Curp/cardEdit?type=scenario&course=" + MCOW.Session.Response.param['course']['id'] + "&card=" + i + "' class='mcow-touchable curp-link-data'>edit</span>";
				html = html + "&nbsp;&nbsp;&nbsp; <span class='mcow-touchable curp-content-scenario-item-delete'>delete</span>";
				html = html + "</div>";
				html = html + "</div>";

				// the side actions
				html = html + "<div class='curp-content-course-item-actions2' data-card='" + i + "'>";
				html = html + "</div>";

				html = html + "</div>";
			}
			MCOW.Util.setHTML("SCENARIOEDIT-SCRIPT-CARDS",html);
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

<!-- RIGHTNAV -->
<script type="text/javascript">
var html = "";
html = html + "<div id='rightnavMenu' class='visible'>";
// cancel
html = html + "<i class='mcow-touchable material-icons curp-header-right-close' style='float:right'>&#xE5C9;</i>";
html = html + "Choose random card";
html = html + "<div class='curp-content-card-list'>";
html = html + "<div class='curp-content-card pink-card'><a class='mcow-touchable curp-link-right' data='/Curp/cardNew?course=" + MCOW.Session.Response.param["course"]["id"] + "&color=pink&type=scenario'>Inclusivity</a></div>";
html = html + "</div>";
html = html + "</div>";
MCOW.Util.setHTML("rightnav",html);
</script>

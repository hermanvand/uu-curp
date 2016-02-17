<!-- TOPBAR -->
<script type="text/javascript">
var html = "";
html = html + "<div class='curp-header-name'>";
// chevron_left
html = html + "<i data='/Curp/home?MCOW-transition=out' class='mcow-touchable material-icons curp-link-data'>&#xE5CB;</i>";
html = html + "</div>";
html = html + "<div class='curp-header-course'>";
html = html + "Edit name of course in " + MCOW.Session.Response.param["currentPeriod"];
html = html + "</div>";
MCOW.Util.setHTML("topbar",html);
document.getElementById("topbar").classList.add("courseBar");
</script>

<!-- PAGE CONTENT -->
<div id="content">
	<section style="height:100%;width:100%;background:#f5f5f5;padding-top:10px;">
		<div class="curp-content-course-new" id="COURSEEDITNAME-SCRIPT-NAME">
		</div>
		<script type="text/javascript">
			var html = "";
			html = "<form name='courseEditNameForm' onsubmit='if (MCOW.Config[\"target\"] == \"phonegap\") { cordova.plugins.Keyboard.close(); }; return false'><table>";
			html = html + "<tr><td>Type new name of course </td><td><input class='mcow-clickable' type='text' name='name' value='" + MCOW.Session.Response.param["title"] + "'></td></tr>";
			html = html + "<tr><td></td><td><button class='mcow-touchable curp-link-data' data='/Curp/courseEditName?course=" + MCOW.Session.Response.param["course"]["id"] + "&MCOW-transition=out&MCOW-redirect=" + encodeURIComponent("/Curp/home") + "'>Change</a></td></tr>";
			html = html + "</table></form>";
			MCOW.Util.setHTML("COURSEEDITNAME-SCRIPT-NAME",html);
		</script>	
	</section>
</div>


<!-- TOPBAR -->
<script type="text/javascript">
var html = "";
html = html + "<div class='curp-header-name'>";
// chevron_left
html = html + "<i data='/Curp/home?MCOW-transition=out' class='mcow-touchable material-icons curp-link-data'>&#xE5CB;</i>";
html = html + "</div>";
html = html + "<div class='curp-header-course'>";
html = html + "Add new course to " + MCOW.Session.Response.param["currentPeriod"];
html = html + "</div>";
MCOW.Util.setHTML("topbar",html);
document.getElementById("topbar").classList.add("courseBar");
</script>

<!-- PAGE CONTENT -->
<div id="content">
	<section style="height:100%;width:100%;background:#f5f5f5;padding-top:10px;">
		<div class="curp-content-course-new">
			<!-- 1. first run model, second mcow-transition-out on the view & third redirect -->
			<form name="courseNewForm" onsubmit="if (MCOW.Config['target'] == 'phonegap') { cordova.plugins.Keyboard.close(); }; return false"><table>
			<tr><td>Type name of new course</td><td><input class="mcow-clickable" type="text" name="name"></td></tr>
			<tr><td></td><td><button class="mcow-touchable curp-link-data" data="/Curp/courseNew?MCOW-transition=out&MCOW-redirect=/Curp/home">Create</a></td></tr>
			</table></form>
		</div>
	</section>
</div>

<!-- TOPBAR -->
<script type="text/javascript">
var html = "";
html = html + "<div class='curp-header-name'>";
html = html + "<img border='0' src='gfx/curp/curp-logo.png' height='30px'/>";
html = html + "</div>";
MCOW.Util.setHTML("topbar",html);
document.getElementById("topbar").classList.add("homeBar");
</script>

<!-- FLOATING ACTION BUTTON -->
<script type="text/javascript">
var html = "";
// add_circle
html = html + "<i data='/Curp/courseNew' class='mcow-touchable curp-link-data material-icons md-48'>&#xE147;</i>";
MCOW.Util.setHTML("actionbutton",html);
document.getElementById("actionbutton").classList.add("homeButton");
document.getElementById("actionbutton").style.top = "46px";
document.getElementById("actionbutton").style.left = "80%";
</script>

<!-- PAGE CONTENT -->
<div id="content">
	<section style="padding-top:10px;">
		<div class="curp-header-curriculum-selection" id="HOME-SCRIPT-SELECT">
		</div>
		<script type="text/javascript">
			var html = "Periode <select class='curp-curriculum-selection mcow-clickable' name='period'>";
			for (var i=0;i<MCOW.Session.Response.param["periods"].length;i++) {
				var selected = "";
				if (MCOW.Session.Response.param["periods"][i] == MCOW.Session.Response.param["currentPeriod"]) {
					selected = "SELECTED";
				}
				html = html + "<option " + selected + ">" + MCOW.Session.Response.param["periods"][i] + "</option>";
			}
			html = html + "</select>";
			MCOW.Util.setHTML("HOME-SCRIPT-SELECT",html);
		</script>	
	</section>
	<section>
		<div class="curp-content-curriculum-container" id="HOME-SCRIPT-COURSES">
		</div>
		<script type="text/javascript">
			var html = "";
			for (var i=0;i<MCOW.Session.Response.param["courses"].length;i++) {
				html = html + "<div class='mcow-touchable curp-content-curriculum-item' data-course='" + MCOW.Session.Response.param["courses"][i]["id"] + "' style='position:relative;'>";
				html = html + "<div class='curp-content-curriculum-item-title'>";
				html = html + MCOW.Session.Response.param["courses"][i]["title"];
				html = html + "</div>";
				html = html + "<div class='curp-content-curriculum-item-actions' data-course='" + MCOW.Session.Response.param["courses"][i]["id"] + "'>";
				// edit
				html = html + "<i data='/Curp/courseEditName?course=" + MCOW.Session.Response.param['courses'][i]['id'] + "' class='material-icons md-light mcow-touchable curp-link-data' style='float:left'>&#xE3C9;</i>";
				// delete
				html = html + "<i class='material-icons md-light mcow-touchable curp-content-curriculum-item-delete'>&#xE872;</i>";
				html = html + "</div>";
				html = html + "</div>";
			}
			MCOW.Util.setHTML("HOME-SCRIPT-COURSES",html);
		</script>	
	</section>
</div>

<header id="header">
	<section>
		<div class="curp-header-name">
			<img border="0" src="gfx/curp/curp-logo.png" height="30px"/>
		</div>
		<div class="curp-header-curriculum" id="HOME-SCRIPT-SELECT">
		</div>
		<script type="text/javascript">
			var html = "<select class='curp-curriculum-selection mcow-clickable' name='period'>";
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
</header>	
<div id="content">
	<section>
		<div class="curp-content-curriculum-container" id="HOME-SCRIPT-COURSES">
		</div>
		<script type="text/javascript">
			var html = "";
			for (var i=0;i<MCOW.Session.Response.param["courses"].length;i++) {
				html = html + "<div class='mcow-touchable curp-content-curriculum-item' data-course='" + MCOW.Session.Response.param["courses"][i]["id"] + "' style='position:relative;'>";
				html = html + MCOW.Session.Response.param["courses"][i]["title"];
				html = html + "<div class='menu' tabindex='-1'>";
				html = html + "<div class='close menu-cancel'>x</div><br clear='all'>";
				html = html + "<div class='menu-container'><ul class='menu-list' data-course='" + MCOW.Session.Response.param["courses"][i]["id"] + "'>";
				html = html + "<li class='menu-item curp-content-curriculum-item-edit'>Edit</li>";
				html = html + "<li class='menu-item curp-content-curriculum-item-delete'>Delete</li>";
				html = html + "</ul></div>";
				html = html + "</div>";
				html = html + "</div>";
			}
			MCOW.Util.setHTML("HOME-SCRIPT-COURSES",html);
		</script>	
		<p>
			<a class="plus" href="/Curp/courseNew">+</a>
		</p>
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

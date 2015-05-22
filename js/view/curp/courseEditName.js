<header id="header">
	<section>
	</section>
</header>	
<div id="content">
	<section>
		<div class="plus-small close"><a href="/Curp/home?MCOW-transition=out">x</a></div>

		<div class="close-header" id="COURSEEDITNAME-SCRIPT-PERIOD">
		</div>
		<script type="text/javascript">
			var html = "Edit name of course in " + MCOW.Session.Response.param["currentPeriod"];
			MCOW.Util.setHTML("COURSEEDITNAME-SCRIPT-PERIOD",html);
		</script>	
		<br clear="all">

		<div class="curp-content-course-new" id="COURSEEDITNAME-SCRIPT-NAME">
		</div>
		<script type="text/javascript">
			var html = "";
			html = "<form name='courseEditNameForm'><table>";
			html = html + "<tr><td>Name</td><td><input class='mcow-clickable' type='text' name='name' value='" + MCOW.Session.Response.param["title"] + "'></td></tr>";
			html = html + "<tr><td></td><td><a href='/Curp/courseEditName?course=" + MCOW.Session.Response.param["course"]["id"] + "&MCOW-transition=out&MCOW-redirect=" + encodeURIComponent("/Curp/home") + "'>Ok</a></td></tr>";
			html = html + "</table></form>";
			MCOW.Util.setHTML("COURSEEDITNAME-SCRIPT-NAME",html);
		</script>	
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

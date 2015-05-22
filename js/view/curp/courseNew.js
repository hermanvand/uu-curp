<header id="header">
	<section>
	</section>
</header>	
<div id="content">
	<section>
		<!-- 2. only mcow-transition-out on the view -->
		<div class="plus-small close"><a href="/Curp/home?MCOW-transition=out">x</a></div>

		<div class="close-header" id="COURSENEW-SCRIPT-PERIOD">
		</div>
		<script type="text/javascript">
			var html = "Add new course to " + MCOW.Session.Response.param["currentPeriod"];
			MCOW.Util.setHTML("COURSENEW-SCRIPT-PERIOD",html);
		</script>	
		<br clear="all">

		<div class="curp-content-course-new">
			<!-- 1. first run model, second mcow-transition-out on the view & third redirect -->
			<form name="courseNewForm" onsubmit="if (MCOW.Config['target'] == 'phonegap') { cordova.plugins.Keyboard.close(); }; return false"><table>
			<tr><td>Name</td><td><input class="mcow-clickable" type="text" name="name"></td></tr>
			<tr><td></td><td><a href="/Curp/courseNew?MCOW-transition=out&MCOW-redirect=/Curp/home">Ok</a></td></tr>
			</table></form>
		</div>
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

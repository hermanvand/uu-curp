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
		<div class="curp-content-left">
			<div class="curp-section-header">
				<!--create_new_folder-->
				<i class='material-icons mcow-touchable curp-week-new' style='float:right;'>&#xE2CC;</i>
				Edit a week
			</div>
			<div class="curp-content-week-container" id="COURSEEDIT-SCRIPT-WEEKS" style='position:relative;'>
			</div>
			<script type="text/javascript">
				var html= "";
				for (var i=0;i<MCOW.Session.Response.param["course"]["weeks"].length;i++) {
					if (i == MCOW.Session.Response.param["course"]["currentWeek"] - 1) {
						html = html + "<div class='mcow-touchable curp-content-week-item-selected' data-week='" + (i+1) + "'>";

						// a single delete button
						//html = html + "<i class='material-icons mcow-touchable curp-content-week-item-delete' style='float:right;padding:10px;'>delete</i>";
						
						// the collapsed menu
						html = html + "<div class='curp-content-week-item-less' id='curp-content-week-item-less-" + (i+1) + "' data-week='" + (i+1) + "'>";
						// expand_more
						html = html + "<i class='material-icons mcow-touchable curp-content-week-item-setmore' style='float:right;padding:10px;'>&#xE5CF;</i>";
						html = html + "<div style='padding:10px;padding-left:20px;'>" + (i+1)+"</div>";
						html = html + "</div>";
						
						// the expanded menu
						html = html + "<div class='curp-content-week-item-more' id='curp-content-week-item-more-" + (i+1) + "' data-week='" + (i+1) + "'>";
						// expand_less
						html = html + "<i class='material-icons mcow-touchable curp-content-week-item-setless' style='float:right;padding:10px;'>&#xE5CE;</i>";
						html = html + "<div style='padding:10px;padding-left:20px;'>" + (i+1)+"</div>";
						if (i != 0) {
							html = html + "<div class='curp-content-week-item-more-element mcow-touchable curp-content-week-item-up'> move up </div>";
						}
						if (i != MCOW.Session.Response.param["course"]["weeks"].length-1) {
							html = html + "<div class='curp-content-week-item-more-element mcow-touchable curp-content-week-item-down'> move down </div>";
						}
						
						// the delete menu item
						html = html + "<div class='curp-content-week-item-more-element mcow-touchable curp-content-week-item-delete'> delete </div>";
						html = html + "</div>";

						html = html + "</div>";
					}
					else {
						html = html + "<div class='mcow-touchable curp-content-week-item-unselected' data-week='" + (i+1) + "'>";

						html = html + "<div style='padding:10px;padding-left:20px;'>" + (i+1)+"</div>";
						html = html + "</div>";
						
						html = html + "</div>";
					}							
				}
				MCOW.Util.setHTML("COURSEEDIT-SCRIPT-WEEKS",html);
			</script>
		</div>
	
		<div class="curp-content-course-container" id="COURSEEDIT-SCRIPT-CARDS" style='position:relative;'>
		</div>
		<script type="text/javascript">
			var html= "";
			var currentWeek = MCOW.Session.Response.param["course"]["currentWeek"];
			if (currentWeek != 0) {
				for (var i=0;i<MCOW.Session.Response.param["course"]["weeks"][currentWeek-1]["cards"].length;i++) {
					var color = MCOW.Session.Response.param["course"]["weeks"][currentWeek-1]["cards"][i]["color"];
					var title = MCOW.Session.Response.param["course"]["weeks"][currentWeek-1]["cards"][i]["title"];
					var description = MCOW.Session.Response.param["course"]["weeks"][currentWeek-1]["cards"][i]["description"];

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
					html = html + "<span data='/Curp/cardEdit?course=" + MCOW.Session.Response.param['course']['id'] + "&card=" + i + "' class='mcow-touchable curp-link-data'>edit</span>";
					html = html + " &nbsp;&nbsp;&nbsp; "
					html = html + "<span class='mcow-touchable curp-content-course-item-delete'>delete</span>";
					html = html + "</div>";
					html = html + "</div>";
					
					// the side actions
					html = html + "<div class='curp-content-course-item-actions2' data-card='" + i + "'>";
					// folder
					html = html + "<i class='material-icons mcow-touchable curp-header-dialog-open'>&#xE2C7;</i>";
					html = html + "<br />";
					if (i != 0) {
						// arrow upward 
						html = html + "<i class='material-icons mcow-touchable curp-content-course-item-up'>&#xE5D8;</i>";
						html = html + "<br />";
					}
					if (i != MCOW.Session.Response.param["course"]["weeks"][currentWeek-1]["cards"].length-1) {
						// arrow_downward
						html = html + "<i class='material-icons mcow-touchable curp-content-course-item-down'>&#xE5DB;</i>";
						html = html + "<br />";
					}
					html = html + "</div>";
					
					html = html + "</div>";
				}
			}
			MCOW.Util.setHTML("COURSEEDIT-SCRIPT-CARDS",html);
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
html = html + "Choose card";
html = html + "<div class='curp-content-card-list'>";
html = html + "<div class='curp-content-card orange-card'><a class='mcow-touchable curp-link-right' data='/Curp/cardNew?course=" + MCOW.Session.Response.param["course"]["id"] + "&color=orange'>Teaching</a></div>";
html = html + "<div class='curp-content-card blue-card'><a class='mcow-touchable curp-link-right' data='/Curp/cardNew?course=" + MCOW.Session.Response.param["course"]["id"] + "&color=blue'>Learning</a></div>";
html = html + "<div class='curp-content-card green-card'><a class='mcow-touchable curp-link-right' data='/Curp/cardNew?course=" + MCOW.Session.Response.param["course"]["id"] + "&color=green'>Outcome</a></div>";
html = html + "<div class='curp-content-card grey-card'><a class='mcow-touchable curp-link-right' data='/Curp/cardNew?course=" + MCOW.Session.Response.param["course"]["id"] + "&color=grey'>Task</a></div>";
html = html + "</div>";
html = html + "</div>";
MCOW.Util.setHTML("rightnav",html);
</script

<!-- DIALOG -->
<script type="text/javascript">
var html = "";
html = html + "<div class='curp-content-week-dialog-content'>";
html = html + "<div class='curp-content-week-dialog-title'>";
html = html + "Move card to another week";
html = html + "</div>";
html = html + "<div id='dialogOptions' class='curp-content-week-dialog-options' data-card='' data-week='" + MCOW.Session.Response.param["course"]["currentWeek"] + "'>";

html = html + "<form name='weekSelectForm' onsubmit='return false;'>";
for (var i=0;i<MCOW.Session.Response.param["course"]["weeks"].length;i++) {
	if (i == MCOW.Session.Response.param["course"]["currentWeek"] - 1) {
		html = html + "<div class='mcow-touchable curp-content-week-dialog-unselected' data-week='" + (i+1) + "'>";
		html = html + "<input id='dialogInput" + (i+1) + "' type='radio' name='week' value='" + (i+1) + "' checked='checked'>" + (i+1) + "</input>";
		html = html + "</div>";		
	}
	else {
		html = html + "<div class='mcow-touchable curp-content-week-dialog-unselected' data-week='" + (i+1) + "'>";
		html = html + "<input id='dialogInput" + (i+1) + "' type='radio' name='week' value='" + (i+1) + "'>" + (i+1) + "</input>";
		html = html + "</div>";		
	}							
}
html = html + "</form>";

html = html + "</div>";
html = html + "<div class='curp-content-week-dialog-actions' data-card='" + i + "'>";
html = html + "<span class='mcow-touchable curp-header-dialog-close'>cancel</span>";
html = html + " &nbsp;&nbsp;&nbsp; "
html = html + "<span class='mcow-touchable curp-header-dialog-ok'>ok</span>";
html = html + "</div>";
html = html + "</div>";
MCOW.Util.setHTML("dialog",html);
</script>

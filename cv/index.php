<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">

	<head>
		<link rel="stylesheet" type="text/css" href="resources/css/main.css" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="icon" type="image/png" href="../resources/images/dkfavicon.png" />
		<title>David Kendall | CV</title>
	</head>

	<?php

	require 'resources/Parsedown.php';

	$Parsedown = new Parsedown();

	$string = file_get_contents("./resources/cv.json");
	$cv = json_decode($string, false);

	?>
	
	<body>
		<div id="header">
			<div id="logo-wrapper">
				<div id="logo">
					<img src="../resources/images/blank-box.png" />
				</div>
				<div id="logo-text-wrapper">
					<h1>David Kendall</h1>
					<h3>CV</h3>
				</div>
			</div>
			<div id="navigation">
				<ul>

					<li>
						<h2><a href="http://blog.davidskendall.co.uk" title="View my ramblings around projects I've released and code I want to share">Blog</a></h2>
					</li>
					<li>
						<h2><a href="../projects" title="View personal projects that I've released">Projects</a></h2>
					</li>
					<li class="navigation-selection">
						<h2>CV</h2>
					</li>
				</ul>
			</div>
		</div>
		<div id="body">
			<h5 class="intro">Below is my experience in a traditional CV format. It is also available in <a href="./resources/cv.pdf" title="View my CV in PDF format">downloadable</a> form.</h5>
			<h3>Profile</h3>
			<?php echo $Parsedown->text($cv->Profile); ?>
			<h3>Skills</h3>
			<div id="skills-container">
				<div class="skill-panel">
					<ul>
						<?php $skillSize = sizeof($cv->Skills);
						for ($i = 0; $i < $skillSize; $i++) {
							if ($i % 2 == 0) {
								echo "<li><p id=\"{$cv->Skills[$i]->Id}\" onclick=\"highlightSkill(this.id)\">{$cv->Skills[$i]->Skill}</p></li>\n";
							}
						}
						?>
					</ul>
				</div>
				<div class="skill-panel">
					<ul>
						<?php $skillSize = sizeof($cv->Skills);
						for ($i = 0; $i < $skillSize; $i++) {
							if ($i % 2 == 1) {
								echo "<li><p id=\"{$cv->Skills[$i]->Id}\" onclick=\"highlightSkill(this.id)\">{$cv->Skills[$i]->Skill}</p></li>\n";
							}
						}
						?>
					</ul>
				</div>
			</div>
			<h3>Employment</h3>
			<?php foreach ($cv->Employment as $item) {

				echo "<h4>{$item->Role} - {$item->Employer}</h4>\n";
				$start = date('M Y', strtotime($item->Start));
				$end = "Present";

				if (is_null($item->End) == false)
				{
					$end = date('M Y', strtotime($item->End));
				}

				echo "<h5>{$start} - {$end}</h5>\n";

				echo "<ul>\n";

				foreach ($item->Duties as $duty) {
					$convertedDuty = $Parsedown->text($duty->Duty);
					
					echo "<li class=\"employment-task\">";

					foreach ($duty->Skills as $skill) {
						echo "<div class=\"skill-{$skill}\">";
					}

					echo $convertedDuty;

					foreach ($duty->Skills as $skill) {
						echo "</div>";
					}

					echo "</li>\n";
				}

				echo "</ul>\n";

			} ?>
			<h3>Education</h3>
			<?php foreach ($cv->Education as $item) {

				echo "<h4>{$item->Establishment} - {$item->Course}</h4>\n";
				echo "<h5>{$item->Start} - {$item->End}</h5>\n";
				echo "<p>{$item->Description}</p>\n";

			} ?>
			<h3>Personal Accomplishments</h3>
			<ul>
				<?php foreach ($cv->PersonalAccomplishments as $item) {
					$convertedItem = $Parsedown->text($item->Accomplishment);
					echo "<li><p>{$convertedItem}</p></li>\n";
				}

				?>
			</ul>
			<h3>Personal Interests</h3>
			<ul>
				<?php foreach ($cv->Interests as $item) {
					$convertedItem = $Parsedown->text($item);
					echo "<li><p>{$convertedItem}</p></li>\n";
				}

				?>
			</ul>
		</div>
		<div id="footer">
			<p>&copy; David Kendall <?php echo date("Y"); ?></p>
			<div id="social-wrapper">
				<div class="social-item">
					<a href="https://github.com/BottlecapDave" title="View my public profile on GitHub"><img src="../resources/images/social/github.png" alt="Github icon" /></a>
				</div>
				<div class="social-item">
					<a href="https://www.linkedin.com/in/david-kendall-90a86225/" title="See me on LinkedIn"><img src="../resources/images/social/linkedin.png" alt="LinkedIn icon" /></a>
				</div>
				<div class="social-item">
					<a href="https://twitter.com/BottlecapDave" title="Follow me on Twitter"><img src="../resources/images/social/twitter.png" alt="Twitter icon" /></a>
				</div>
				<div class="social-item">
					<a href="https://account.xbox.com/en-GB/Profile?gamerTag=DSK%20UK" title="View my gaming profile on Xbox Live"><img src="../resources/images/social/xbox.png" alt="Xbox icon" /></a>
				</div>
				<div class="social-item">
					<a href="https://www.youtube.com/user/BottlecapDave" title="View my YouTube channel"><img src="../resources/images/social/youtube.png" alt="YouTube icon" /></a>
				</div>
			</div>
			<p>Social media icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>
		</div>
	</body>

	<script type="text/javascript" src="./resources/highlight.js"></script>
</html>
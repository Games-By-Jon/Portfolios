// Projects scripts
$(document).ready(function() {
	$('#VigilanteJustace') .hide();
	$('a#triggerVigilanteJustace').click(function() {
		// Hides any other sections open
		$('#SpaceEscape') .hide();
		$('#LevelDesignProject') .hide();
		$('#DirectX11Project') .hide();
		$('#Callofduty') .hide();
		$('#RPGMaker') .hide();

		$('#VigilanteJustace') .slideToggle(500);
		e.preventDefault()
	});
});

$(document).ready(function() {
	$('#SpaceEscape') .hide();
	$('a#triggerSpaceEscape').click(function() {
		// Hides any other sections open
		$('#VigilanteJustace') .hide();
		$('#LevelDesignProject') .hide();
		$('#DirectX11Project') .hide();
		$('#Callofduty') .hide();
		$('#RPGMaker') .hide();
		$('#SpaceEscape') .slideToggle(500);
		e.preventDefault()
	});
});

$(document).ready(function() {
	$('#LevelDesignProject') .hide();
	$('a#triggerLevelDesignProject').click(function() {
		// Hides any other sections open
		$('#SpaceEscape') .hide();
		$('#VigilanteJustace') .hide();
		$('#DirectX11Project') .hide();
		$('#Callofduty') .hide();
		$('#RPGMaker') .hide();
		$('#LevelDesignProject') .slideToggle(500);
		e.preventDefault()
	});
});

$(document).ready(function() {
	$('#DirectX11Project') .hide();
	$('a#triggerDirectX11Project').click(function() {
		// Hides any other sections open
		$('#SpaceEscape') .hide();
		$('#LevelDesignProject') .hide();
		$('#VigilanteJustace') .hide();
		$('#Callofduty') .hide();
		$('#RPGMaker') .hide();
		$('#DirectX11Project') .slideToggle(500);
		e.preventDefault()
	});
});

$(document).ready(function() {
	$('#Callofduty') .hide();
	$('a#triggerCallofduty').click(function() {
		// Hides any other sections open
		$('#SpaceEscape') .hide();
		$('#LevelDesignProject') .hide();
		$('#DirectX11Project') .hide();
		$('#VigilanteJustace') .hide();
		$('#RPGMaker') .hide();
		$('#Callofduty') .slideToggle(500);
		e.preventDefault()
	});
});

$(document).ready(function() {
	$('#RPGMaker') .hide();
	$('a#triggerRPGMaker').click(function() {
		// Hides any other sections open
		$('#SpaceEscape') .hide();
		$('#LevelDesignProject') .hide();
		$('#DirectX11Project') .hide();
		$('#Callofduty') .hide();
		$('#VigilanteJustace') .hide();
		$('#RPGMaker') .slideToggle(500);
		e.preventDefault()
	});
});

// ArtWork scripts
$(document).ready(function() {
	$('#Concept') .hide();
	$('a#triggerConcept').click(function() {
		$('#Concept') .slideToggle(500);
		e.preventDefault()
	});
});

$(document).ready(function() {
	$('#Random') .hide();
	$('a#triggerRandom').click(function() {
		$('#Random') .slideToggle(500);
		e.preventDefault()
	});
});

$(document).ready(function() {
	$('#Modeling') .hide();
	$('a#triggerModeling').click(function() {
		$('#Modeling') .slideToggle(500);
		e.preventDefault()
	});
});
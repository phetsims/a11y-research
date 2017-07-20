// Javascript from Pickering Menu Button
	   	
		//For Example 1
	   (function() {
	   	// get the button and menu nodes
	   	var button = document.querySelector('[aria-label="Sim tools and links"] button');
	   	var menu = button.nextElementSibling;

	   	// set initial (closed menu) states
	   	button.setAttribute('aria-expanded', 'false');
	   	button.hidden = false;
	   	menu.hidden = true;
	   	button.addEventListener('click', function() {

	   	// toggle menu visibility
	   	var expanded = this.getAttribute('aria-expanded') ==='true';
	   	this.setAttribute('aria-expanded', String(!expanded));
	   	menu.hidden = expanded;
	     });
	   })();
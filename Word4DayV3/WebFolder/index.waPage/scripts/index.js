
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem1 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		// Students Menu Item
		$$('menuItem1').setTextColor('orange');
		$$('menuItem1').setBackgroundColor('white');
		$$('menuItem2').setTextColor('black');
		$$('menuItem2').setBackgroundColor("white");
		$$('menuItem3').setTextColor('black');
		$$('menuItem3').setBackgroundColor('white');
		$$('menuItem4').setTextColor('black');
		$$('menuItem4').setBackgroundColor('white');
		//alert('ouch');   
		$$('mainComponent').loadComponent('/views/students.waComponent'); //should load up wordgroups
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		// Word Groups Menu Item
		//$$('menuItem2').setState('active');	// ends up this does not work
		//need to put in a function to reset all the menus back to normal
		$$('menuItem1').setTextColor('black');
		$$('menuItem1').setBackgroundColor('white');
		$$('menuItem2').setTextColor('orange');
		$$('menuItem2').setBackgroundColor("white");
		$$('menuItem3').setTextColor('black');
		$$('menuItem3').setBackgroundColor('white');
		$$('menuItem4').setTextColor('black');
		$$('menuItem4').setBackgroundColor('white');
		//alert('ouch');   
		$$('mainComponent').loadComponent('/views/wordgroups.waComponent'); //should load up wordgroups
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
// @endregion
};// @endlock

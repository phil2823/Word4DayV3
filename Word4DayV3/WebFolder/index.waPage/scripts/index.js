
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem5 = {};	// @menuItem
	var menuItem4 = {};	// @menuItem
	var menuItem3 = {};	// @menuItem
	var menuItem1 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuItem5.click = function menuItem5_click (event)// @startlock
	{// @endlock
		// system menu item (Aztec only) pop an error if not aztec
		$$('menuItem1').setTextColor('black');
		$$('menuItem1').setBackgroundColor('white');
		$$('menuItem2').setTextColor('black');
		$$('menuItem2').setBackgroundColor("white");
		$$('menuItem3').setTextColor('black');
		$$('menuItem3').setBackgroundColor('white');
		$$('menuItem4').setTextColor('black');
		$$('menuItem4').setBackgroundColor('white');
		$$('menuItem5').setTextColor('blue');
		alert('Warning: a check will go in here for Aztec Login only');   
		$$('mainComponent').loadComponent('/views/system.waComponent'); //should load up system
	};// @lock

	menuItem4.click = function menuItem4_click (event)// @startlock
	{// @endlock
		// reports Menu Item
		$$('menuItem1').setTextColor('black');
		$$('menuItem1').setBackgroundColor('white');
		$$('menuItem2').setTextColor('black');
		$$('menuItem2').setBackgroundColor("white");
		$$('menuItem3').setTextColor('black');
		$$('menuItem3').setBackgroundColor('white');
		$$('menuItem4').setTextColor('orange');
		$$('menuItem4').setBackgroundColor('white');
		$$('menuItem5').setTextColor('black');
		//alert('ouch');   
		$$('mainComponent').loadComponent('/views/reports.waComponent'); //should load up reports
	};// @lock

	menuItem3.click = function menuItem3_click (event)// @startlock
	{// @endlock
		// Curricula Menu Item
		$$('menuItem1').setTextColor('black');
		$$('menuItem1').setBackgroundColor('white');
		$$('menuItem2').setTextColor('black');
		$$('menuItem2').setBackgroundColor("white");
		$$('menuItem3').setTextColor('orange');
		$$('menuItem3').setBackgroundColor('white');
		$$('menuItem4').setTextColor('black');
		$$('menuItem4').setBackgroundColor('white');
		$$('menuItem5').setTextColor('black');
		//alert('ouch');   
		$$('mainComponent').loadComponent('/views/curr.waComponent'); //should load up curricula
	};// @lock

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
		$$('menuItem5').setTextColor('black');
		//alert('ouch');   
		$$('mainComponent').loadComponent('/views/students.waComponent'); //should load up students
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
		$$('menuItem5').setTextColor('black');
		//alert('ouch');   
		$$('mainComponent').loadComponent('/views/wordgroups.waComponent'); //should load up wordgroups
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem5", "click", menuItem5.click, "WAF");
	WAF.addListener("menuItem4", "click", menuItem4.click, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
// @endregion
};// @endlock

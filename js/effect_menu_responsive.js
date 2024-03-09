

document.addEventListener('DOMContentLoaded', function(){
	var menu_effect = document.querySelector('.menu-effect'),
	node = document.querySelector('.node'),
	menu_content = document.querySelector('.menu-content'),
	menu_bg = document.querySelector('.menu-bg'),
	icon_x = document.querySelector('.icon-x');
	//console.log(icon_x);

	node.onclick = function(){
		menu_content.classList.add('menu-content_visible');
		 //console.log(menu_content);
		menu_bg.classList.add('bg_visible');
		//console.log(menu_bg);
	}

	icon_x.onclick = function(){
		menu_content.classList.remove('menu-content_visible');
		menu_bg.classList.remove('bg_visible');
	}
}, false)
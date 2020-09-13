/* DATA CONTROLLER */
const dataController = (() => {
	const templates = {
		blog:
			'<div class="blog-template"><!-- NAVBAR --><nav><h1>My Blog</h1><ul><li><a href="#">Home</a></li><li><a href="#">Categories</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul></nav><!-- LATEST BLOGS CONTAINER --><section class="latest-blogs-container"><h2>Latest Blogs</h2><ul><li class="card-blog-item"><img src="https://via.placeholder.com/150" alt="Blog Image" /><div class="card-info"><h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3><div class="card-user-info"><div><img src="https://via.placeholder.com/25"alt="User Image"/><p>User Name</p></div><p>&#9787; 4 min read</p></div></div></li><li class="card-blog-item"><img src="https://via.placeholder.com/150" alt="Blog Image" /><div class="card-info"><h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3><div class="card-user-info"><div><img src="https://via.placeholder.com/25"alt="User Image"/><p>User Name</p></div><p>&#9787; 7 min read</p></div></div></li><li class="card-blog-item"><img src="https://via.placeholder.com/150" alt="Blog Image" /><div class="card-info"><h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3><div class="card-user-info"><div><img src="https://via.placeholder.com/25"alt="User Image"/><p>User Name</p></div><p>&#9787; 3 min read</p></div></div></li></ul></section><!-- CURRENT BLOG CONTAINER --><section class="current-blog-container"><img class="main-blog-image"src="https://via.placeholder.com/640x480"alt="Main Blog Image"/><h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</h2><div class="blog-user-info"><div><img src="https://via.placeholder.com/25" alt="User Image" /><p>User Name</p></div><p>&#9787; 3 min read</p></div><div class="blog-text-container"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sitamet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sitamet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation. Lorem ipsum dolor sit amet,consectetur adipisicing elit, tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div></section></div>',
		landingPage:
			'<div class="landing-page-template"><!-- NAVBAR --><nav><div><h1>Landing Page</h1><ul><li><a href="#">Features</a></li><li><a href="#">Innovations</a></li><li><a href="#">Prices</a></li><li><a href="#">Testimonials</a></li></ul></div></nav><!-- HEADER SECTION --><header><div class="content"><div class="header-info"><h1>Landing Page is the best solution for you</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi.</p><a href="#">Download App</a></div><div class="header-image"><img src="https://via.placeholder.com/250x350"alt="Header Image"/></div></div></header><!-- FEATURES SECTION --><section class="features-container"><div class="content"><div class="features-info"><h2>Awesome Features</h2><hr /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><div class="features-content"><div class="first-info"><div><h3>Simple & Clean</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div><div><h3>Cross Browser Support</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div></div><div class="image"><img src="https://via.placeholder.com/250x350"alt="Feature Image"/></div><div class="second-info"><div><h3>Responsive Design</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div><div><h3>Diferent Colors</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div></div></div></div></section><!-- INNOVATIONS SECTION --><section class="innovation-container"><div class="content"><div class="info"><h2>Touch Innovations</h2><hr /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><img src="https://via.placeholder.com/350x250"alt="Innovations Image"/><a href="#">Download App</a></div></section><!-- PRICES SECTION --><section class="prices-container"><div class="content"><div class="info"><h2>Our Prices</h2><hr /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><div class="prices-content"><ul><li><h3>Basic</h3><div class="price-text"><h3>$0.95</h3><p>per month</p></div><div class="benefits"><p>Enhanced Security</p><p>No Time Tracking</p><p>Enhanced Security</p></div><a href="#">BUY NOW</a></li><li><h3>Basic</h3><div class="price-text"><h3>$0.95</h3><p>per month</p></div><div class="benefits"><p>Enhanced Security</p><p>No Time Tracking</p><p>Enhanced Security</p></div><a href="#">BUY NOW</a></li><li><h3>Basic</h3><div class="price-text"><h3>$0.95</h3><p>per month</p></div><div class="benefits"><p>Enhanced Security</p><p>No Time Tracking</p><p>Enhanced Security</p></div><a href="#">BUY NOW</a></li><li><h3>Basic</h3><div class="price-text"><h3>$0.95</h3><p>per month</p></div><div class="benefits"><p>Enhanced Security</p><p>No Time Tracking</p><p>Enhanced Security</p></div><a href="#">BUY NOW</a></li></ul></div></div></section><!-- TESTIMONIALS SECTION --><section class="testimonials-container"><div class="content"><div class="title"><h2>What People Say About Us</h2><hr /></div><div class="testimonial"><img src="https://via.placeholder.com/100x100"alt="Testimonial Image"/><p class="name">Person Name</p><p class="person-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.</p><hr /></div></div></section></div>',
	};

	const data = {
		currentTemplate: "blog",
	};

	return {
		getData: () => {
			return data;
		},
		getTemplates: () => {
			return templates;
		},
	};
})();

/* UI CONTROLLER */
const UIController = (() => {
	const DOMStrings = {
		currentTemplateE: "currentTemplate",
		templateContainerE: "templateContainer",
	};

	return {
		getDOM: () => {
			return DOMStrings;
		},
	};
})();

/* MAIN CONTROLLER */
const controller = ((UI, DATA) => {
	const DOM = UI.getDOM();
	const allData = DATA.getData();
	const temp = DATA.getTemplates();

	/* ADD DOM EVENTS */
	const addEvents = () => {
		document
			.getElementById(DOM.currentTemplateE)
			.addEventListener("change", (e) => {
				allData.currentTemplate = e.target.value;
				changeTemplate(allData.currentTemplate);
			});
	};

	/* CHANGE TEMPLATE */
	const changeTemplate = (name) => {
		const container = document.getElementById(DOM.templateContainerE);
		container.innerHTML = "";

		container.innerHTML = temp[name];
	};

	return {
		init: () => {
			console.log("App has started...");
			document.getElementById(DOM.currentTemplateE).value =
				allData.currentTemplate;
			changeTemplate(allData.currentTemplate);
			addEvents();
		},
	};
})(UIController, dataController);

controller.init();

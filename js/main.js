/* DATA CONTROLLER */
const dataController = (() => {
	const templates = {
		blog: {
			htmlText:
				'<div class="blog-template"><!-- NAVBAR --><nav><h1>My Blog</h1><ul><li><a href="#">Home</a></li><li><a href="#">Categories</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul></nav><!-- LATEST BLOGS CONTAINER --><section class="latest-blogs-container"><h2>Latest Blogs</h2><ul><li class="card-blog-item"><img src="https://via.placeholder.com/150" alt="Blog Image" /><div class="card-info"><h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3><div class="card-user-info"><div><img src="https://via.placeholder.com/25"alt="User Image"/><p>User Name</p></div><p>&#9787; 4 min read</p></div></div></li><li class="card-blog-item"><img src="https://via.placeholder.com/150" alt="Blog Image" /><div class="card-info"><h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3><div class="card-user-info"><div><img src="https://via.placeholder.com/25"alt="User Image"/><p>User Name</p></div><p>&#9787; 7 min read</p></div></div></li><li class="card-blog-item"><img src="https://via.placeholder.com/150" alt="Blog Image" /><div class="card-info"><h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3><div class="card-user-info"><div><img src="https://via.placeholder.com/25"alt="User Image"/><p>User Name</p></div><p>&#9787; 3 min read</p></div></div></li></ul></section><!-- CURRENT BLOG CONTAINER --><section class="current-blog-container"><img class="main-blog-image"src="https://via.placeholder.com/640x480"alt="Main Blog Image"/><h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</h2><div class="blog-user-info"><div><img src="https://via.placeholder.com/25" alt="User Image" /><p>User Name</p></div><p>&#9787; 3 min read</p></div><div class="blog-text-container"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sitamet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sitamet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation. Lorem ipsum dolor sit amet,consectetur adipisicing elit, tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div></section></div>',
			domElements: [
				{
					name: "background-color",
					index: 0,
				},
				{
					name: "decoration-color",
				},
				{
					name: "latest-blogs-background",
				},
				{
					name: "latest-blogs-color",
				},
				{
					name: "blog-card-background",
				},
				{
					name: "blog-card-color",
				},
				{
					name: "main-blog-text-color",
				},
				{
					name: "main-blog-info-background",
				},
				{
					name: "main-blog-info-color",
				},
			],
		},
		landingPage: {
			htmlText:
				'<div class="landing-page-template"><!-- NAVBAR --><nav><div><h1>Landing Page</h1><ul><li><a href="#">Features</a></li><li><a href="#">Innovations</a></li><li><a href="#">Prices</a></li><li><a href="#">Testimonials</a></li></ul></div></nav><!-- HEADER SECTION --><header><div class="content"><div class="header-info"><h1>Landing Page is the best solution for you</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi.</p><a href="#">Download App</a></div><div class="header-image"><img src="https://via.placeholder.com/250x350"alt="Header Image"/></div></div></header><!-- FEATURES SECTION --><section class="features-container"><div class="content"><div class="features-info"><h2>Awesome Features</h2><hr /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><div class="features-content"><div class="first-info"><div><h3>Simple & Clean</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div><div><h3>Cross Browser Support</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div></div><div class="image"><img src="https://via.placeholder.com/250x350"alt="Feature Image"/></div><div class="second-info"><div><h3>Responsive Design</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div><div><h3>Diferent Colors</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div></div></div></div></section><!-- INNOVATIONS SECTION --><section class="innovation-container"><div class="content"><div class="info"><h2>Touch Innovations</h2><hr /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><img src="https://via.placeholder.com/350x250"alt="Innovations Image"/><a href="#">Download App</a></div></section><!-- PRICES SECTION --><section class="prices-container"><div class="content"><div class="info"><h2>Our Prices</h2><hr /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><div class="prices-content"><ul><li><h3>Basic</h3><div class="price-text"><h3>$0.95</h3><p>per month</p></div><div class="benefits"><p>Enhanced Security</p><p>No Time Tracking</p><p>Enhanced Security</p></div><a href="#">BUY NOW</a></li><li><h3>Basic</h3><div class="price-text"><h3>$0.95</h3><p>per month</p></div><div class="benefits"><p>Enhanced Security</p><p>No Time Tracking</p><p>Enhanced Security</p></div><a href="#">BUY NOW</a></li><li><h3>Basic</h3><div class="price-text"><h3>$0.95</h3><p>per month</p></div><div class="benefits"><p>Enhanced Security</p><p>No Time Tracking</p><p>Enhanced Security</p></div><a href="#">BUY NOW</a></li><li><h3>Basic</h3><div class="price-text"><h3>$0.95</h3><p>per month</p></div><div class="benefits"><p>Enhanced Security</p><p>No Time Tracking</p><p>Enhanced Security</p></div><a href="#">BUY NOW</a></li></ul></div></div></section><!-- TESTIMONIALS SECTION --><section class="testimonials-container"><div class="content"><div class="title"><h2>What People Say About Us</h2><hr /></div><div class="testimonial"><img src="https://via.placeholder.com/100x100"alt="Testimonial Image"/><p class="name">Person Name</p><p class="person-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.</p><hr /></div></div></section></div>',
			domElements: [
				{
					name: "navbar-background",
					index: 0,
				},
				{
					name: "navbar-color",
				},
				{
					name: "header-background",
				},
				{
					name: "header-color",
				},
				{
					name: "features-background",
				},
				{
					name: "features-color",
				},
				{
					name: "innovations-background",
				},
				{
					name: "innovations-color",
				},
				{
					name: "prices-background",
				},
				{
					name: "prices-color",
				},
				{
					name: "testimonials-background",
				},
				{
					name: "testimonials-color",
				},
				{
					name: "alternative-color",
				},
			],
		},
	};

	const data = {
		currentTemplate: "blog",
		currentColors: ["#E6AF2E", "#A3320B", "#6B0504", "#000000", "#ffffff"],
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
		elementsContainer: "elementsList",
		colorsE: ".buttonSelector",
		colorInputsE: ".colorInput",
	};

	return {
		getDOM: () => {
			return DOMStrings;
		},
		changeTemplate: (name, templates) => {
			const container = document.getElementById(DOMStrings.templateContainerE);
			container.innerHTML = "";
			container.innerHTML = templates[name].htmlText;
		},
		addDOMElements: (dataArr) => {
			const container = document.getElementById(DOMStrings.elementsContainer);
			container.innerHTML = "";

			dataArr.forEach((e) => {
				const li = document.createElement("li");
				li.innerHTML = `<p>${e.name}</p> <button type="button">1</button>`;
				container.appendChild(li);
			});
		},
		changeColors: (dataArr) => {
			const colors = document.querySelectorAll(DOMStrings.colorsE);
			const colorsArr = Array.prototype.slice.call(colors);
			colorsArr.forEach((e, i) => {
				e.style.background = dataArr[i];
			});
		},
		getColorInputs: () => {
			return Array.prototype.slice.call(
				document.querySelectorAll(DOMStrings.colorInputsE)
			);
		},
		validHex: (text) => {
			return /^#[0-9A-F]{6}$/i.test(text);
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
				UI.changeTemplate(allData.currentTemplate, temp);
				UI.addDOMElements(temp[allData.currentTemplate].domElements);
			});

		const colInputs = UI.getColorInputs();

		colInputs.forEach((e) => {
			e.addEventListener("keyup", (input) => {
				if (UI.validHex(input.target.value)) {
					allData.currentColors[input.target.id] = input.target.value;
					UI.changeColors(allData.currentColors);
				}
			});
		});
	};

	return {
		init: () => {
			console.log("App has started...");
			document.getElementById(DOM.currentTemplateE).value =
				allData.currentTemplate;
			UI.changeTemplate(allData.currentTemplate, temp);
			UI.addDOMElements(temp[allData.currentTemplate].domElements);
			addEvents();
			UI.changeColors(allData.currentColors);
		},
	};
})(UIController, dataController);

controller.init();

/* DATA CONTROLLER */
const dataController = (() => {
	const templates = {
		blog: {
			htmlText:
				'<div class="blog-template background-color"><!-- NAVBAR --><nav class="background-color decoration-color"><h1 class="nav-color">My Blog</h1><ul><li><a class="nav-color" href="#">Home</a></li><li><a class="nav-color" href="#">Categories</a></li><li><a class="nav-color" href="#">About</a></li><li><a class="nav-color" href="#">Contact</a></li></ul></nav><!-- LATEST BLOGS CONTAINER --><section class="latest-blogs-background latest-blogs-container"><h2 class="latest-blogs-color">Latest Blogs</h2><ul><li class="blog-card-background card-blog-item decoration-color"><img src="https://via.placeholder.com/150" alt="Blog Image" /><div class="card-info"><h3 class="blog-card-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3><div class="card-user-info"><div><img src="https://via.placeholder.com/25"alt="User Image"/><p class="blog-card-color">User Name</p></div><p class="blog-card-color">&#9787; 4 min read</p></div></div></li><li class="blog-card-background card-blog-item decoration-color"><img src="https://via.placeholder.com/150" alt="Blog Image" /><div class="card-info"><h3 class="blog-card-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3><div class="card-user-info"><div><img src="https://via.placeholder.com/25"alt="User Image"/><p class="blog-card-color">User Name</p></div><p class="blog-card-color">&#9787; 7 min read</p></div></div></li><li class="blog-card-background card-blog-item decoration-color"><img src="https://via.placeholder.com/150" alt="Blog Image" /><div class="card-info"><h3 class="blog-card-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3><div class="card-user-info"><div><img src="https://via.placeholder.com/25"alt="User Image"/><p class="blog-card-color">User Name</p></div><p class="blog-card-color">&#9787; 3 min read</p></div></div></li></ul></section><!-- CURRENT BLOG CONTAINER --><section class="current-blog-container"><img class="main-blog-image"src="https://via.placeholder.com/640x480"alt="Main Blog Image"/><h2 class="main-blog-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</h2><div class="blog-user-info main-blog-info-background"><div><img src="https://via.placeholder.com/25" alt="User Image" /><p class="main-blog-info-color">User Name</p></div><p class="main-blog-info-color">&#9787; 3 min read</p></div><div class="blog-text-container"><p class="main-blog-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sitamet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation.</p><p class="main-blog-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation.</p><p class="main-blog-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.</p><p class="main-blog-text-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sitamet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation. Lorem ipsum dolor sit amet,consectetur adipisicing elit, tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p></div></section></div>',
			domElements: [
				{
					name: "background-color",
					index: 1,
					type: "bg",
				},
				{
					name: "nav-color",
					index: 5,
					type: "color",
				},
				{
					name: "decoration-color",
					index: 2,
					type: "pseudoelement",
					styles: [
						[
							{
								content: "",
								position: "relative",
								width: "50%",
								height: "3px",
								bottom: "0",
								"margin-top": "10px",
								"border-radius": "3px",
								selector: ".blog-template nav::after",
							},
						],
						[
							{
								content: "",
								width: "80px",
								height: "10px",
								position: "absolute",
								top: "0",
								left: "0",
								"border-radius": "5px 0 5px 0",
								selector:
									".blog-template .latest-blogs-container ul .decoration-color::after",
							},
							{
								content: "",
								width: "10px",
								height: "80px",
								position: "absolute",
								top: "0",
								left: "0",
								"border-radius": "5px 0 5px 0",
								selector:
									".blog-template .latest-blogs-container ul .decoration-color::before",
							},
						],
					],
				},
				{
					name: "latest-blogs-background",
					index: 3,
					type: "bg",
				},
				{
					name: "latest-blogs-color",
					index: 1,
					type: "color",
				},
				{
					name: "blog-card-background",
					index: 5,
					type: "bg",
				},
				{
					name: "blog-card-color",
					index: 1,
					type: "color",
				},
				{
					name: "main-blog-text-color",
					index: 2,
					type: "color",
				},
				{
					name: "main-blog-info-background",
					index: 3,
					type: "bg",
				},
				{
					name: "main-blog-info-color",
					index: 4,
					type: "color",
				},
			],
		},
		landingPage: {
			htmlText:
				'<div class="landing-page-template"><!-- NAVBAR --><nav class="navbar-background"><div><h1 class="navbar-color">Landing Page</h1><ul><li><a class="navbar-color" href="#">Features</a></li><li><a class="navbar-color" href="#">Innovations</a></li><li><a class="navbar-color" href="#">Prices</a></li><li><a class="navbar-color" href="#">Testimonials</a></li></ul></div></nav><!-- HEADER SECTION --><header class="header-background"><div class="content"><div class="header-info"><h1 class="header-color">Landing Page is the best solution for you</h1><p class="header-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi.</p><a class="alternative-background header-color" href="#">Download App</a></div><div class="header-image"><img src="https://via.placeholder.com/250x350"alt="Header Image"/></div></div></header><!-- FEATURES SECTION --><section class="features-container features-background"><div class="content"><div class="features-info"><h2 class="features-color">Awesome Features</h2><hr class="features-color" /><p class="features-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><div class="features-content"><div class="first-info"><div><h3 class="features-color">Simple & Clean</h3><p class="features-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div><div><h3 class="features-color">Cross Browser Support</h3><p class="features-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div></div><div class="image"><img src="https://via.placeholder.com/250x350"alt="Feature Image"/></div><div class="second-info"><div><h3 class="features-color">Responsive Design</h3><p class="features-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div><div><h3 class="features-color">Diferent Colors</h3><p class="features-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div></div></div></div></section><!-- INNOVATIONS SECTION --><section class="innovations-background innovation-container"><div class="content"><div class="info"><h2 class="innovations-color">Touch Innovations</h2><hr class="innovations-color" /><p class="innovations-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><img src="https://via.placeholder.com/350x250"alt="Innovations Image"/><a class="alternative-background innovations-color" href="#">Download App</a></div></section><!-- PRICES SECTION --><section class="prices-background prices-container"><div class="content"><div class="info"><h2 class="prices-color">Our Prices</h2><hr class="prices-color" /><p class="prices-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><div class="prices-content"><ul><li class="alternative-background"><h3 class="prices-color">Basic</h3><div class="price-text"><h3 class="prices-color">$0.95</h3><p class="prices-color">per month</p></div><div class="benefits"><p class="prices-color">Enhanced Security</p><p class="prices-color">No Time Tracking</p><p class="prices-color">Enhanced Security</p></div><a class="alternative-background prices-color" href="#">BUY NOW</a></li><li class="alternative-background"><h3 class="prices-color">Basic</h3><div class="price-text"><h3 class="prices-color">$0.95</h3><p class="prices-color">per month</p></div><div class="benefits"><p class="prices-color">Enhanced Security</p><p class="prices-color">No Time Tracking</p><p class="prices-color">Enhanced Security</p></div><a class="alternative-background prices-color" href="#">BUY NOW</a></li><li class="alternative-background"><h3 class="prices-color">Basic</h3><div class="price-text"><h3 class="prices-color">$0.95</h3><p class="prices-color">per month</p></div><div class="benefits"><p class="prices-color">Enhanced Security</p><p class="prices-color">No Time Tracking</p><p class="prices-color">Enhanced Security</p></div><a class="alternative-background prices-color" href="#">BUY NOW</a></li><li class="alternative-background"><h3 class="prices-color">Basic</h3><div class="price-text"><h3 class="prices-color">$0.95</h3><p class="prices-color">per month</p></div><div class="benefits"><p class="prices-color">Enhanced Security</p><p class="prices-color">No Time Tracking</p><p class="prices-color">Enhanced Security</p></div><a class="alternative-background prices-color" href="#">BUY NOW</a></li></ul></div></div></section><!-- TESTIMONIALS SECTION --><section class="testimonials-background testimonials-container"><div class="content"><div class="title"><h2 class="testimonials-color">What People Say About Us</h2><hr class="testimonials-color" /></div><div class="testimonial"><img src="https://via.placeholder.com/100x100"alt="Testimonial Image"/><p class="name testimonials-color">Person Name</p><p class="person-text testimonials-color">Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.</p></div></div></section></div>',
			domElements: [
				{
					name: "navbar-background",
					index: 1,
					type: "bg",
				},
				{
					name: "navbar-color",
					index: 2,
					type: "color",
				},
				{
					name: "header-background",
					index: 2,
					type: "bg",
				},
				{
					name: "header-color",
					index: 1,
					type: "color",
				},
				{
					name: "features-background",
					index: 1,
					type: "bg",
				},
				{
					name: "features-color",
					index: 5,
					type: "color",
					hr: {
						index: 1,
					},
				},
				{
					name: "innovations-background",
					index: 2,
					type: "bg",
				},
				{
					name: "innovations-color",
					index: 1,
					type: "color",
					hr: {
						index: 1,
					},
				},
				{
					name: "prices-background",
					index: 1,
					type: "bg",
				},
				{
					name: "prices-color",
					index: 5,
					type: "color",
					hr: {
						index: 1,
					},
				},
				{
					name: "testimonials-background",
					index: 2,
					type: "bg",
				},
				{
					name: "testimonials-color",
					index: 1,
					type: "color",
					hr: {
						index: 1,
					},
				},
				{
					name: "alternative-background",
					index: 3,
					type: "bg",
					borderColor: {
						index: [2, 4, 6, 8],
					},
				},
			],
		},
	};

	const data = {
		currentTemplate: "blog",
		currentColors: ["#7d5a5a", "#f3e1e1", "#f1d1d1", "#000000", "#ffffff"],
	};

	return {
		getData: () => {
			return data;
		},
		getTemplates: () => {
			return templates;
		},
		setIndexData: (name, newIndex) => {
			let objInfo;
			templates[data.currentTemplate].domElements.forEach((e) => {
				if (e.name === name) {
					e.index = newIndex;
					objInfo = e;
				}
			});

			return objInfo;
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
		mobileElementsBtn: "mobileElementsBtn",
		mobileElementsUI: ".mobile-elements",
		closeElementsBtn: "close-elements",
		mobileAboutBtn: "mobileAboutBtn",
		mobileAboutUI: ".mobile-about",
		closeAboutBtn: "closeAbout",
		mobileElementsList: "mobileElementsList",
		allElementsList: ".allElement",
		scrollE: ".template-container div",
		scrollColorE: ".color-selector-container",
	};

	const changeColors = (index, colorsArr, elements, info) => {
		let stylesText = "";
		elements.forEach((e, i) => {
			switch (info.type) {
				case "bg":
					let check = false;

					if (info.hasOwnProperty("borderColor")) {
						info.borderColor.index.forEach((el) => {
							if (i === el) {
								e.style.borderColor = colorsArr[index - 1];
								check = true;
							}
						});

						if (!check) e.style.background = colorsArr[index - 1];
					} else {
						e.style.background = colorsArr[index - 1];
					}
					break;
				case "color":
					if (info.hasOwnProperty("hr")) {
						if (i === info.hr.index) {
							e.style.background = colorsArr[index - 1];
						} else {
							e.style.color = colorsArr[index - 1];
						}
					} else {
						e.style.color = colorsArr[index - 1];
					}
					break;
				case "pseudoelement":
					let obj;
					let obj2;

					if (i === 0) {
						allChilds = document.querySelectorAll("style");
						if (allChilds.length > 0) {
							let body = document.querySelector("body");
							body.removeChild(body.childNodes[body.childNodes.length - 1]);
						}

						obj = info.styles[0][0];
						stylesText = ` ${obj.selector} { content: ""; position: ${
							obj.position
						}; width: ${obj.width}; height: ${obj.height}; bottom: ${
							obj.bottom
						}; margin-top: ${obj["margin-top"]}; border-radius: ${
							obj["border-radius"]
						}; background: ${
							colorsArr[index - 1]
						}; transition: 0.3s all ease-in;}`;
					} else if (i === 1) {
						obj = info.styles[1][0];
						obj2 = info.styles[1][1];
						stylesText += ` ${obj.selector} { content: ""; position: ${
							obj.position
						}; width: ${obj.width}; height: ${obj.height}; top: ${
							obj.top
						}; left: ${obj.left}; border-radius: ${
							obj["border-radius"]
						}; background: ${
							colorsArr[index - 1]
						}; transition: 0.3s all ease-in;}`;
						stylesText += ` ${obj2.selector} { content: ""; position: ${
							obj2.position
						}; width: ${obj2.width}; height: ${obj2.height}; top: ${
							obj2.top
						}; left: ${obj2.left}; border-radius: ${
							obj2["border-radius"]
						}; background: ${
							colorsArr[index - 1]
						}; transition: 0.3s all ease-in;}`;
						let sheet = document.createElement("style");
						sheet.innerHTML = stylesText;
						document.body.appendChild(sheet);
					}
					break;
			}
		});
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

			const mobileContainer = document.getElementById(
				DOMStrings.mobileElementsList
			);
			mobileContainer.innerHTML = "";
			const crossBtn = document.createElement("button");
			crossBtn.innerHTML = "&#10006;";
			crossBtn.id = "close-elements";

			dataArr.forEach((e) => {
				const li = document.createElement("li");
				li.innerHTML = `<p>${e.name}</p> <button onclick="UIController.changeIndexUI(this, dataController.setIndexData, dataController.getData().currentColors)" class="allElement" type="button">1</button>`;
				container.appendChild(li);
				mobileContainer.appendChild(li.cloneNode(true));
			});

			mobileContainer.insertAdjacentElement("afterbegin", crossBtn);
			crossBtn.addEventListener("click", () => {
				document.querySelector(DOMStrings.mobileElementsUI).style.display =
					"none";
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
		setIndexE: (arr) => {
			const all = Array.from(
				document.querySelectorAll(DOMStrings.allElementsList)
			);

			const allSize = all.length / 2;

			all.forEach((e, i) => {
				i < allSize
					? (e.textContent = arr[i].index)
					: (e.textContent = arr[i - allSize].index);
			});
		},
		changeIndexUI: (e, setIndex, colors) => {
			let currentIndex = parseInt(e.innerHTML);
			const limit = 5;
			const elementName = e.parentNode.firstChild.innerHTML;
			currentIndex = currentIndex === limit ? 1 : ++currentIndex;
			e.innerHTML = currentIndex.toString();
			elementInfo = setIndex(elementName, currentIndex);
			const elementsArr = Array.from(
				document.querySelectorAll("." + elementInfo.name)
			);
			console.log(e, setIndex, colors);
			changeColors(currentIndex, colors, elementsArr, elementInfo);
		},
		updateElementsColor: (dataObj, templatesObj) => {
			templatesObj[dataObj.currentTemplate].domElements.forEach((e) => {
				let allElements = Array.from(document.querySelectorAll("." + e.name));
				changeColors(e.index, dataObj.currentColors, allElements, e);
			});
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
		const templateContainerE = document.getElementById(DOM.currentTemplateE);

		templateContainerE.addEventListener("change", (e) => {
			allData.currentTemplate = e.target.value;
			UI.changeTemplate(allData.currentTemplate, temp);
			UI.addDOMElements(temp[allData.currentTemplate].domElements);
			UI.setIndexE(temp[allData.currentTemplate].domElements);
			UI.updateElementsColor(allData, temp);
			scrollEvent();
		});

		scrollEvent();

		const colInputs = UI.getColorInputs();

		colInputs.forEach((e) => {
			e.addEventListener("keyup", (input) => {
				if (UI.validHex(input.target.value)) {
					allData.currentColors[input.target.id] = input.target.value;
					UI.changeColors(allData.currentColors);
					UI.updateElementsColor(allData, temp);
				}
			});
		});

		document
			.getElementById(DOM.mobileElementsBtn)
			.addEventListener("click", () => {
				document.querySelector(DOM.mobileElementsUI).style.display = "block";
			});

		document
			.getElementById(DOM.closeElementsBtn)
			.addEventListener("click", () => {
				document.querySelector(DOM.mobileElementsUI).style.display = "none";
			});

		document
			.getElementById(DOM.mobileAboutBtn)
			.addEventListener("click", () => {
				document.querySelector(DOM.mobileAboutUI).style.display = "block";
			});

		document.getElementById(DOM.closeAboutBtn).addEventListener("click", () => {
			document.querySelector(DOM.mobileAboutUI).style.display = "none";
		});
	};

	const scrollEvent = () => {
		let scrollTimeout;
		const templateE = document.getElementById(DOM.currentTemplateE);
		const colorsE = document.querySelector(DOM.scrollColorE);

		document.querySelector(DOM.scrollE).addEventListener("wheel", () => {
			templateE.style.opacity = "0.3";
			colorsE.style.opacity = "0.3";
			this.clearTimeout(scrollTimeout);

			scrollTimeout = setTimeout(() => {
				templateE.style.opacity = "1";
				colorsE.style.opacity = "1";
			}, 400);
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
			UI.setIndexE(temp[allData.currentTemplate].domElements);
			UI.updateElementsColor(allData, temp);
		},
	};
})(UIController, dataController);

controller.init();

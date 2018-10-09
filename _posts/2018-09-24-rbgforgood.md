---
layout: post
title:  "RGB for Good"
date:   2018-09-24 19:18:20
image: https://storage.googleapis.com/codeandfood/work/rbgforgood/rbgforgood_thumbnail.jpg
desc: A mobile WebAR experience that lets you keep RBG fit, rested, and on top of her game so she can keep going for years to come.
categories: [code, work]
---

<div class="project-description">
	<h2>RBG for Good</h2>
	<div class="desc">
		<span><strong>Date:</strong> September 2018</span>
		<span><strong>Client:</strong> <a href="https://www.rockthevote.org/" target="_blank">Rock the Vote</a></span>
		<span><strong>Role/Team:</strong> Developer</span>
		<span><strong>Press:</strong> <a href="https://adage.com/creativity/work/firstborn-rbg-good/949431" target="_blank">Ad Age</a>, <a href="https://www.campaignlive.com/article/firstborn-creates-ruth-bader-ginsburg-webar-experience/1494018" target="_blank">Campaign US</a></span>
		<span><strong><a href="https://rbgforgood.com/" target="_blank">SEE IT LIVE</a></strong> (Full Experience on Mobile)</span>
	</div>
	<div class="desc">
		<span><strong>Tools Used:</strong></span>
		<ul>
			<li>JavaScript &ndash; Vanilla, ES6</li>
			<li>ThreeJS</li>
			<li>GSAP</li>
			<li>SVG Animation</li>
			<li>SCSS/CSS &ndash; Flexbox</li>
		</ul>
	</div>
</div>

<div class="project-image">
	<img class="is--no-border" src="https://storage.googleapis.com/codeandfood/work/rbgforgood/rbgforgood.png" alt="RBG For Good Monitor" />
</div>

<p>Firstborn created a mobile WebAR experience, "RBG for Good", for National Voter Registration Day on Sept. 25. Instead of telling American citizens to vote through <a href="https://www.rockthevote.org/" target="_blank">Rock the Vote</a> (because if you haven't heard, <strong>YOUR VOTE MATTERS</strong>), this experience lets users to have Justice Ruth Bader Ginsburg right from their smartphone. What is unique about this AR project is that people do not need to download anything to experience it. The experience can be accessed on a browser.</p>

<div class="project-image project-image--3">
	<img src="https://storage.googleapis.com/codeandfood/work/rbgforgood/rbgforgood_loading_01.png" alt="RBG For Good Loading #1" />
	<img src="https://storage.googleapis.com/codeandfood/work/rbgforgood/rbgforgood_loading_02.png" alt="RBG For Good Loading #2" />
	<img src="https://storage.googleapis.com/codeandfood/work/rbgforgood/rbgforgood_loading_03.png" alt="RBG For Good Loading #3" />
</div>

<p>My role as a developer was to finish the landing page for both mobile and desktop in 2 days including the QA and testing. Mobile version has more complicated features such as a slider indicator and SVG shutter animation. A slider indicator was used during waiting time for our 3D models to load. We displayed an introduction to our game as the waiting indicator.</p>

<p>Since the desktop version is a simple static single page, I also kept the mobile version as a single page, but used <i>fixed</i> position for the slider indicator to give the illusion that what the user is seeing is separate from its initial landing page.</p>

<div class="project-image">
	<iframe height='500' scrolling='no' title='Shutter Animation' src='//codepen.io/jeesunikim/embed/PyJNXq/?height=500&theme-id=0&default-tab=js,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/jeesunikim/pen/PyJNXq/'>Shutter Animation</a> by Jeesun Kim (<a href='https://codepen.io/jeesunikim'>@jeesunikim</a>) on <a href='https://codepen.io'>CodePen</a>.
	</iframe>
</div>

<p>Our Technical Director suggested, "It would be cool if we had a camera shutter animation as a transition from the slider to the WebAR experience." Having read <i><strong>SVG Animations</strong></i> by Sarah Drasner, I took this moment as an opportunity to apply what I have learned from the book in this project. First, I drew a vector closed camera shutter state (the end frame) in Illustrator and then applied <i>transform-origin</i> to create an opened shutter state in GSAP. By having both the initial (opened shutter) and the ending frame (closed shutter), I was able to create a shutter animation using TweenMax's <i>fromTo</i>.</p>

<p>When I had some free time at work after the site had already launched, I replaced the static hero image on the desktop version with the 3D model using ThreeJS' <a href="https://threejs.org/docs/#examples/loaders/GLTFLoader" target="_blank">GLTFLoader</a>. Our 3D technical artist had already provided multiple animations within the gltf file, so it was straight forward to implement it. I wanted users to play with our 3D Justice Ginsburg model by clicking and dragging the model across the screen.</p>
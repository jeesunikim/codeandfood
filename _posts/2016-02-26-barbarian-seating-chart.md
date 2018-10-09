---
layout: post
title:  "Barbarian Seating Chart"
date:   2016-02-26
image: https://storage.googleapis.com/codeandfood/work/tbg/superdesk-thumbnail.png
desc: A seating chart for the Barbarian Group's Superdesk. Built on MEAN stack.
categories: [code, work]
---

<div class="project-description">
	<h2>Barbarian Seating Chart</h2>
	<div class="desc">
		<span><strong>Date:</strong> February 2016</span>
		<span><strong>Type:</strong> Side Project</span>
		<span><strong>Role/Team:</strong> Lead Developer</span>
		<span><strong>Code Source:</strong> <a href="https://github.com/jeesunikim/superdesk" target="_blank">Github</a></span>
	</div>
	<div class="desc">
		<span><strong>Tools Used:</strong></span>
		<ul>
			<li>MongoDB</li>
			<li>Express</li>
			<li>AngularJS</li>
			<li>Gulp</li>
		</ul>
	</div>
</div>

<div class="project-image">
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/superdesk.png" alt="The Barbarian Group Default Image" />
</div>

<p>I built a basic seating chart for the Barbarian Group using the MEAN stack as an independent project as a student at Fullstack Academy. The majority of the functionality (and refactoring work) present today was done after I left Fullstack.</p>

<p>For our independent projects at Fullstack, the question "what app do you want to build?", was always hard to answer because it seemed like there is already an app for everything. When I did think of one, most of the time I realized someone else had already built it.</p>

<p>BUT - no one had built a seating chart app for the Superdesk.</p>

<p>The Barbarian Group's <a href="http://www.architectmagazine.com/technology/detail/innovative-detail-the-superdesk-at-the-barbarian-group-office_o" target="_blank">Superdesk</a> is pretty famous in the agency and architecture world for its concept, design, and frankly, its massiveness.</p>

<div class="project-image inline">
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/desk-01.png" alt="TBG Desk News #1" />
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/desk-03.png" alt="TBG Desk News #2" />
</div>

<p>The problem is, the maze of curves, swoops, and ramps of the desk can make it confusing for new Barbarians when it comes to finding conference rooms, departments, or even people.</p>

<div class="project-image">
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/new-people.jpg" alt="new people and their seating map" />
	<p>(This picture isn't a setup. <u>It's real</u>)</p>
</div>

<p>
	This project is where I learned the most about the MEAN stack. As a member of group projects at Fullstack I always felt like a contributor, but at times I questioned how I would stand on my own - in this case the project was all on me. Under tight time constraints, students were instructed to meet the goal of finishing the project on time, which means that oftentimes checking best practices were put aside for later in favor of working code now. The following are some examples of the refactoring I did after I graduated to implement some of the best practices that were initially left out.</p>

<div class="project-image inline">
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/http-01.png" alt="http request wrong way" />
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/http-02.png" alt="http request correct way" />
</div>

<p>The code on the left is the code I wrote as a student. I pretty much put everything in the controller. My controllers at that time were big giant blocks of code without much modularity. I didn't use service at all for no other reason than it worked fine putting them in the controller. But as I read more about angular patterns, I learned that any shared requests that will be used through out the app need to be put in service, in this case, $http requests.</p>

<p>Another problem was the frequent use of $rootScope.</p>

<div class="project-image">
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/avoid-rootscope-01.png" alt="avoid rootscope #1" />
</div>

<p>$rootScope is like using '!important' in CSS. It just overwrites everything. This may be okay if it's being used once or twice - but in this project, I used it way too frequently throughout my code as can be seen from the code above.</p>

<div class="project-image inline">
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/factory-service.png" alt="factory service" />
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/avoid-rootscope-02.png" alt="avoid rootscope #2" />
</div>

<p>The correct way to do this is, again, to put all the shared functionalities in service. That way later when we need to debug the code, we know where to go.</p>

<p>The following code adds SVG dots into HTML and save its x &amp; y coordination and radius into the backend (Mongo), and list all of the dots in HTML via ng-repeat</p>

<div class="project-image inline">
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/add-dot-01.png" alt="add dot #1" />
	<img src="https://storage.googleapis.com/codeandfood/work/tbg/add-dot-02.png" alt="add dot #2" />
</div>

<p>To protect the Barbarians' privacy, instead of using real names, I used the names of the characters of Mad Men. I am working on deploying this app via google cloud platform. Meanwhile, you can either install it and interact with it following README on my <a href="https://github.com/jeesunikim/superdesk" target="_blank">github</a> or if you are not a developer, enjoy the video below.</p>

<div class="project-image">
	<iframe src="https://player.vimeo.com/video/179829826" width="100%" height="522" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
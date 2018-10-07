---
layout: post
title:  "Samsung Upgrade Program"
date:   2016-07-31 19:18:20
image: https://storage.googleapis.com/codeandfood/work/samsung/samsung-upgrade-program/sup-thumbnail.png
desc: A static landing page written in HTML and SCSS. The sole page function comes from Bootstrap.
categories: [code, work]
---

<div class="project-description">
	<h2>Samsung Upgrade Program</h2>
	<div class="desc">
		<span><strong>Date:</strong> July 2016</span>
		<span><strong>Client:</strong> Samsung</span>
		<span><strong><a href="http://www.samsung.com/us/explore/samsung-upgrade-program/" target="_blank">Currently Live</a></strong></span>
	</div>
	<div class="desc">
		<span><strong>Tools Used:</strong></span>
		<ul>
			<li>JavaScript/jQuery</li>
			<li>Bootstrap (Collapse.js)</li>
			<li>Handlebars.js</li>
			<li>SCSS</li>
			<li>Gulp</li>
		</ul>
	</div>
</div>

<div class="project-image">
	<img src="https://storage.googleapis.com/codeandfood/work/samsung/samsung-upgrade-program/samsung-upgrade-program.png" alt="Samsung Upgrade Program Default Image" />
</div>

<p>Samsung Upgrade Program is a static landing page that is written in HTML and SCSS. It has bootstrap's <a href="http://v4-alpha.getbootstrap.com/components/collapse/" target="_blank">Collapse</a> component for the FAQs module. It wasn't difficult to build. The difficulty was introduced when the client asked us to remove tagging in the expanded state.</p> 

<p>This is a simple task - but I kept getting a conflict when I edited bootstrap's code. I thought of removing the bootstrap javascript and start building my own collapse javascript function from scratch. Given the deadline, I kept the bootstrap and tested each function in Bootstrap's collapse component until I ended up with a result the client was happy with.</p>


<div class="project-image">
	<img src="https://storage.googleapis.com/codeandfood/work/samsung/samsung-upgrade-program/faq.gif" alt="Samsung Upgrade Program FAQ" />
</div>

<p>I used to think that Bootstrap was a hindrance to learning because it makes everything so easy. But going through its code line by line, I appreciated its structure and learned how to use OOP better.</p>
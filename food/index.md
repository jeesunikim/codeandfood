---
layout: default
title: food
---
<ul class="posts">
	{% for post in site.posts %}
	{% if post.hidden != true %}
	{% if post.category contains 'food' %}
	<li class="post {{post.category}}">
		<a href="{{ post.url }}">
			<span class="post-image centered" style="background-image: url('{{ post.image }}')"></span>
		</a>
		<div class="post-desc">
			<a href="{{ post.url }}">{{ post.title }}</a>
			<p>{{ post.desc }}</p>
		</div>
	</li>
	{% endif %}
	{% endif %}
	{% endfor %}
</ul>
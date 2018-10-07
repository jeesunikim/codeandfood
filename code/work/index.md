---
layout: default
title: work
---
<ul class="posts">
{% for post in site.posts %}
  	{% if post.categories contains 'work' %}
  <li class="post {{post.categories}}" data-title="{{post.title}}" data-url="{{post.url}}">
  	<a href="{{ post.url }}">
      <span class="post-image" style="background-image: url('{{ post.image }}')"></span>
    </a>
    <div class="post-desc">
      <a href="{{ post.url }}">{{ post.title }}</a>
      <p>{{ post.desc }}</p>
    </div>
  </li>
  {% endif %}
{% endfor %}
</ul>
---
layout: page
title: Blog Index
permalink: /blog/
---

{% assign posts = site.posts %}
{% for post in posts %}
<article class="post-preview">
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <div class="post-meta">{{ post.date | date: "%-d %B %Y" }}</div>
  {% if post.description %}<p>{{ post.description }}</p>{% endif %}
</article>
{% endfor %}

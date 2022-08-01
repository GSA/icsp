---
title: Policies
permalink: /policies/
layout: page
section: policies
---
{% assign pages = site.pages | where: "section", "policies" | where_exp: "permalink", "item.permalink != '/policies/'"%}
{% for page in pages %}
{% unless page.permalink %}
<h3>{{ page.title }}</h3>
<p>{{ page.content | render }}</p>
{% endunless %}
{% endfor %}
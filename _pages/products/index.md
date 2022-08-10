---
title: Products
layout: page
section: products
permalink: /products/
skip: true
---
{% assign pages = site.pages | where: "section", "products" %}
{% for page in pages %}{% unless page.skip %}
<h3 class="bg-primary text-white radius-lg padding-1 font-sans-xs">{{ page.title }}</h3>
{{ page.content | render }}
{% endunless %}
{% endfor %}
---
layout: default
title: Aktualności
---

<div class="container pt-navbar">
    <ul>
    {% for post in site.posts %}
        <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
    {% endfor %}
    </ul>
</div>
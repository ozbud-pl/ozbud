---
layout: default
title: Realizacje
---

<div class="container text-dark text-center text-uppercase mt-4 pt-navbar">
    <div class="container">
        <h1>Mieszkaniowe</h1>
            {% for mieszkaniowe in site.mieszkaniowe limit: 4%}
                {% if mieszkaniowe.title != "Mieszkaniowe" %}
                    <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                    <img class="img-fluid" src="{{ site.baseurl }}/assets/img/400x300{{ mieszkaniowe.feat-img }}">
                    <a href="{{ site.baseurl }}{{ mieszkaniowe.url }}">{{ mieszkaniowe.title }}</a>
                    </div>
                {% endif %}
            {% endfor %}
    </div>
        <div class="container">
        <h1>Przemysłowe</h1>
    </div>
        <div class="container">
        <h1>Zabytki</h1>
    </div>
        <div class="container">
        <h1>Obiekty Publiczne</h1>
    </div>
</div>
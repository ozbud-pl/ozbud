---
layout: default
title: Realizacje
---

<div class="container-fluid no-padding text-dark text-center text-uppercase mt-4 pt-navbar">
    <div class="container-fluid">
        <h1>Mieszkaniowe</h1>
        <div class="row">
            {% for mieszkaniowe in site.mieszkaniowe limit: 4%}
                {% if mieszkaniowe.title != "Mieszkaniowe" %}  
                    <div class="col-xl-3 col-md-6 col-12">
                        <div class="grd">
                            <a href="{{ site.baseurl }}{{ mieszkaniowe.url }}">
                            <picture>
                                <source srcset="{{ site.baseurl }}/assets/img/800x600{{ mieszkaniowe.feat-img }}" media="(min-width: 1400px)">
                                <img class="img-fluid w-100 rounded-top" src="{{ site.baseurl }}/assets/img/800x600{{ mieszkaniowe.feat-img }}" style="object-fit: cover;">
                            </picture>
                            <h5 class="capitalize text-dark pt-2 pb-3">{{ mieszkaniowe.title }}</h5>
                            </a>
                        </div>
                    </div>
                {% endif %}
            {% endfor %}
        </div>
    </div>
        <div class="container-fluid div-contrast text-white">
        <h1>Przemysłowe</h1>
        <div class="row">
            {% for przemyslowe in site.przemyslowe limit: 4%}
                {% if przemyslowe.title != "przemyslowe" %}
                    <div class="col-xl-3 col-md-6 col-12">
                        <div class="grd-dark">
                            <a href="{{ site.baseurl }}{{ przemyslowe.url }}">
                            <picture>
                                <source srcset="{{ site.baseurl }}/assets/img/800x600{{ przemyslowe.feat-img }}" media="(min-width: 1400px)">
                                <img class="img-fluid w-100 rounded-top" src="{{ site.baseurl }}/assets/img/800x600{{ przemyslowe.feat-img }}" style="object-fit: cover;">
                            </picture>
                            <h5 class="capitalize text-white pt-2 pb-3">{{ przemyslowe.title }}</h5>
                            </a>
                        </div>
                    </div>
                {% endif %}
            {% endfor %}
        </div>
    </div>
    <div class="container-fluid">
        <h1>Zabytki</h1>
            {% for zabytki in site.zabytki limit: 4%}
                {% if zabytki.title != "zabytki" %}
                    <div class="col-xl-3 col-md-6 col-12">
                        <div class="grd">
                            <a href="{{ site.baseurl }}{{ zabytki.url }}">
                            <picture>
                                <source srcset="{{ site.baseurl }}/assets/img/800x600{{ zabytki.feat-img }}" media="(min-width: 1400px)">
                                <img class="img-fluid w-100 rounded-top" src="{{ site.baseurl }}/assets/img/800x600{{ zabytki.feat-img }}" style="object-fit: cover;">
                            </picture>
                            <h5 class="capitalize text-dark pt-2 pb-3">{{ zabytki.title }}</h5>
                            </a>
                        </div>
                    </div>
                {% endif %}
            {% endfor %}
        </div>
    <div class="container-fluid div-contrast text-white">
        <h1>Obiekty Publiczne</h1>
        {% for publiczne in site.publiczne limit: 4%}
                {% if publiczne.title != "publiczne" %}
                    <div class="col-xl-3 col-md-6 col-12">
                        <div class="grd-dark">
                            <a href="{{ site.baseurl }}{{ zabytki.url }}">
                            <picture>
                                <source srcset="{{ site.baseurl }}/assets/img/800x600{{ zabytki.feat-img }}" media="(min-width: 1400px)">
                                <img class="img-fluid w-100 rounded-top" src="{{ site.baseurl }}/assets/img/800x600{{ zabytki.feat-img }}" style="object-fit: cover;">
                            </picture>
                            <h5 class="capitalize text-white pt-2 pb-3">{{ zabytki.title }}</h5>
                            </a>
                        </div>
                    </div>
                {% endif %}
        {% endfor %}
    </div>
</div>
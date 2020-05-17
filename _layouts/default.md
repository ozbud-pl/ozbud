<!DOCTYPE html>
<html lang="{{ site.lang | default: "pl" }}">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <title>{{ page.title }} - {{ site.title }}</title>
    <link rel="stylesheet" href="{{site.baseurl}}/assets/css/main.css">
    <link rel="stylesheet" href="https://use.typekit.net/lif4sjl.css">
    <!--- FAVICON --->
    <link rel="apple-touch-icon" sizes="180x180" href="{{site.baseurl}}/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="{{site.baseurl}}/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="{{site.baseurl}}/favicon-16x16.png">
    <link rel="manifest" href="{{site.baseurl}}/site.webmanifest">
    <link rel="mask-icon" href="{{site.baseurl}}/safari-pinned-tab.svg" color="#9d9c9d">
    <meta name="msapplication-TileColor" content="#9d9c9d">
    <meta name="theme-color" content="#9d9c9d">
    {% seo %}
  </head>
  <body>
    {% include navbar.html %}
    {{ content}}
    {% include footer.html %}
  </body>
</html>

<!DOCTYPE html>
<html lang="{{ site.lang | default: "pl" }}">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <title>{{ page.title }} - {{ site.title }}</title>
    <link rel="stylesheet" href="{{ "/assets/css/main.css" | relative_url }}">
    <link rel="stylesheet" href="https://use.typekit.net/lif4sjl.css">
    {% seo %}
  </head>
  <body>
    {% include navbar.html %}
    {{ content}}
    {% include footer.html %}
  </body>
</html>

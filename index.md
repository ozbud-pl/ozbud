---
layout: default
title: OZBUD
---

<div class="container-fluid no-padding">
  
  <!-- CAROUSEL -->
  {% include carousel.html %}

  <!-- CONTENTS -->
  <!-- FILARY -->
  <div class="container-fluid text-dark p-0">
    <div class="container pt-4 pb-4">
      <div class="row">
        <div class="col-md-4 col-12 grid-item p-3">
          <div class="row">
            <div class="col-xl-3 col-md-12 grid-item">
              <i class="fa fa-award fa-3x pb-4"></i>
            </div>
            <div class="col-xl-9 col-md-12 grid-item">
              <h2 class="text-uppercase">Jakość</h2>
              <p>Dzięki zastosowaniu sprawdzonych materiałów i technologii jako generalny wykonawca jesteśmy w stanie zagwarantować najwyższą jakość na rynku.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12 grid-item p-3">
          <div class="row">
            <div class="col-xl-3 col-md-12 grid-item">
              <i class="far fa-money-bill-alt fa-3x pb-4"></i>
            </div>
            <div class="col-xl-9 col-md-12 grid-item">
              <h2 class="text-uppercase">Cena</h2>
              <p>Proponujemy technologie zamienne, odpowiadające indywidualnym oczekiwaniom inwestora przy zachowaniu minimalnej ceny.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12 grid-item p-3">
          <div class="row">
            <div class="col-xl-3 col-md-12 grid-item">
              <i class="fa fa-stopwatch fa-3x pb-4"></i>
            </div>
            <div class="col-xl-9 col-md-12 grid-item">
              <h2 class="text-uppercase">Czas</h2>
              <p>Rozumiemy, że czas to podstawa udanej organizacji przy realizacji obiektów budowlanych. Dla nas opóźnienia nie wchodzą w rachubę.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ZAKRES DZIAŁALNOŚCI -->
  <div class="container-fluid div-contrast p-0">
    <div class="container text-white text-center pt-4 pb-4">
    <h1 class="text-uppercase">Zakres Działalności</h1>
    <p>Projekty od budowy hal przemysłowych po remonty i renowacje realizujemy jako Generalny Wykonawca w zakresie budownictwa kubaturowego wraz z sieciami oraz przyłączami. W naszym przedsiębiorstwie posiadamy departamenty, które odpowiadają za realizację różnych obiektów budowlanych. Realizując inwestycje dla zamawiającego polegamy na sieci zaufanych podwykonawców i dostawców, z którymi współpracujemy od wielu lat.</p>
    </div>
  </div>
  <div class="container-fluid text-dark">
    <div class="row">
      <div class="col-xl-8 col-md-6 no-padding">
        <picture>
          <source srcset="{{ site.baseurl }}/assets/img/1000x400/hala-poczta-polska.jpg" media="(min-width: 1500px)">
          <source srcset="{{ site.baseurl }}/assets/img/1000x600/hala-poczta-polska.jpg" media="(min-width: 1270px)">
          <source srcset="{{ site.baseurl }}/assets/img/1000x800/hala-poczta-polska.jpg" media="(min-width: 1010px)">
          <img class="img-fluid d-block w-100" src="{{ site.baseurl }}/assets/img/600x800/hala-poczta-polska.jpg" alt="hala-poczta-polska">
        </picture>
      </div>
      <div class="col-xl-4 col-md-6 text-center p-3">
        <h3>Budujemy dla przemysłu</h3>
        <p class="text-justify">Nasze standardy jakościowe spełniaj wymagania najbardziej wymagajcych klientów z sektora przemysłowego. Dzięki umiejętności prowadzenie plac budowlanych na czynnych obiektach, od lat współpracujemy z parterami takimi jak Volvo czy Bombardier. Dopasujemy się do każdego środowiska pracy.</p>
        <h3>Certyfikowany partner Astron</h3>
        <p class="text-justify mb-0">Jako certyfikowany partner firmy ASTRON® dostarczającej systemowe konstrukce stalowe proponujemy rozwiązania charakteryzujące się długą żywotnością oraz atrakcyjną ceną. Zaawansowane metody obliczeniowe oraz zautomatyzowany proces produkcji elementów stalowych gwarantują optymalne wykorzystanie stali.</p>
      </div>
      </div>
    </div>
  </div>
  <div class="container-fluid div-contrast text-white">
    <div class="row">
      <div class="col-xl-4 col-md-6 text-center p-3">
        <h3>Budujemy dla przemysłu</h3>
        <p class="text-justify">Nasze standardy jakościowe spełniaj wymagania najbardziej wymagajcych klientów z sektora przemysłowego. Dzięki umiejętności prowadzenie plac budowlanych na czynnych obiektach, od lat współpracujemy z parterami takimi jak Volvo czy Bombardier. Dopasujemy się do każdego środowiska pracy.</p>
        <h3>Certyfikowany partner Astron</h3>
        <p class="text-justify mb-0">Jako certyfikowany partner firmy ASTRON® dostarczającej systemowe konstrukce stalowe proponujemy rozwiązania charakteryzujące się długą żywotnością oraz atrakcyjną ceną. Zaawansowane metody obliczeniowe oraz zautomatyzowany proces produkcji elementów stalowych gwarantują optymalne wykorzystanie stali.</p>
      </div>
      <div class="col-xl-8 col-md-6 no-padding">
        <picture>
          <source srcset="{{ site.baseurl }}/assets/img/1000x400/hala-poczta-polska.jpg" media="(min-width: 1500px)">
          <source srcset="{{ site.baseurl }}/assets/img/1000x600/hala-poczta-polska.jpg" media="(min-width: 1270px)">
          <source srcset="{{ site.baseurl }}/assets/img/1000x800/hala-poczta-polska.jpg" media="(min-width: 1010px)">
          <img class="img-fluid d-block w-100" src="{{ site.baseurl }}/assets/img/600x800/hala-poczta-polska.jpg" alt="hala-poczta-polska">
        </picture>
      </div>
    </div>
  </div>
  <div class="container-fluid div-contrast text-white p-0">
    <div class="container text-center text-uppercase">
      <h1 class="pt-4">Aktualności</h1>
      <div class="row">
        {% for post in site.posts limit: 3 %}
          <div class="col-md-4 col-12 grid-item p-3">
            <div class="grd-dark">
              <a href="{{ site.baseurl }}{{ post.url }}">
                <picture>
                  <source srcset="{{ site.baseurl }}/assets/img/800x600{{ post.feat-img }}" media="(min-width: 1400px)">
                  <source srcset="{{ site.baseurl }}/assets/img/600x600{{ post.feat-img }}" media="(min-width: 768px)">
                  <img class="img-fluid w-100 rounded-top" src="{{ site.baseurl }}/assets/img/800x600{{ post.feat-img }}" style="object-fit: cover;">
                </picture>
                <h5 class="capitalize text-white pt-3 pb-4 pl-3 pr-3">{{ post.title }}</h5>
              </a>
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
  <div class="container text-dark text-center text-uppercase mt-4">
    <h1>Zaufali Nam</h1>
  </div>
  <!-- SLIDER -->
  {% include slider.html %}
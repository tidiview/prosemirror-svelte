<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 1 -->

<article>
  <h1 class="yellow"><ruby style="color:#555;" lang="fr">Triptyque de Jean le Baptiste et de Jean l'Évangéliste<rt style="color:#999;" lang="nl">Triptiek van Johannes de Doper en Johannes de Evangelist</rt></ruby></h1>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, le triptyque ouvert, Musée Memling, Hôpital Saint-Jean, Bruges" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, le triptyque ouvert, Musée Memling, Hôpital Saint-Jean, Bruges" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_0-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1920.jpg 1920w"></picture><figcaption>le triptyque ouvert</figcaption>
  </figure>
  
  <section><article>
    <h2 class="yellow">une œuvre majeure d'Hans Memling</h2>
    <section><article>
      <h3 class="yellow">le triptyque de l'hôpital Saint-Jean de Bruges depuis le XV<sup>ème</sup> siècle</h3>
      <section><article>
        <div class="notices yellow">
          <p>Ce triptyque a été conçu et réalisé pour le maître-autel de la nouvelle abside de l'église de l'ancien hôpital Saint-Jean de Bruges construite en <time datetime="1473">1473</time>-<time datetime="1474">74</time>, où il se trouve toujours.</p>
          <p>Le cadre porte en latin l'inscription «<ruby lang="fr">ŒUVRE<rp>(</rp><rt lang="la">OPVs</rt><rp>)</rp>&#160;<rp>(</rp><rt lang="la">&#160;</rt><rp>)</rp>D'HANS<rp>(</rp><rt lang="la">IOHANNIS</rt><rp>)</rp>&#160;<rp>(</rp><rt lang="la">&#160;</rt><rp>)</rp>MEMLING<rp>(</rp><rt lang="la">MEMLING</rt><rp>)</rp></ruby>», première signature connue du peintre, et une date: «<time datetime="1479">1479</time>».</p>
          <p>Il comporte un panneau central, qu'encadrent deux volets à droite et à gauche fixés par des charnières.</p>
          <p>Les personnages représentés sont un tout petit peu moins grands que grandeur nature.</p>
          <p>L'œuvre est de premier abord, de part sa taille, très impressionnante.</p>
        </div>
      </article></section>
    </article></section>
    
    <section><article>
      <h3 class="yellow">à propos de cet article</h3>
      <section><article>
        <h4 class="yellow">objectifs de cet article</h4>
        <section><article>
          <div class="notices yellow">
            <p>L'article que nous rédigeons se donne pour objectif de dépasser ce premier regard:</p>
            <ol>
              <li>nous décrivons en détails les quantités de petites scènes que Memling a disposés dans le paysage au moyen de <span style="color: #e6a64d;">reproductions de qualité</span> <a href="#note-1" title="note-1" id="renvoi-note-1"><sup style="color:#555;">note 1</sup></a>,</li>
              <li>les relions aux sources, quelles soient textuelles ou picturales, dont il est raisonnable de penser qu'elles ont directement inspiré Memling,</li>
              <li>reconstituons un récit qui rende compte de sa cohérence autant que de son unité,</li>
              <li>mettons à disposition les textes dont nous faisons état afin de permettre de juger de nos choix.</li>
            </ol>
            <p>Par là, nous devrions permettre au lecteur de se rendre plus familier de la société de Bruges à la fin du XV<sup>ème</sup> siècle, notamment:
            <ul>
              <li>du merveilleux chrétien de l'ouvrage de Jacques de Voragine, <cite>La Légende Dorée</cite>,</li>
              <li>de la sensibilité de ce courant de réforme religieuse, la “<ruby lang="fr">dévotion<rp>(</rp><rt lang="la">devotio</rt><rp>)</rp>&#160;<rp>(</rp><rt lang="la">&#160;</rt><rp>)</rp>moderne<rp>(</rp><rt lang="la">moderna</rt><rp>)</rp></ruby>”,</li>
              <li>de l'opulence économique, de la magnificience sociale urbaines du Duché de Bourgogne.</li>
            </ul>
            <p>Notre but aura été atteint si le lecteur se trouve en position de <span style="color: #e6a64d;">mesurer et ainsi d'approfondir lui-même sa perception</span> d'une œuvre dont nous pensons qu'elle mérite de retenir l'attention <span style="color: #e6a64d;">tant est grand l'éclat de sa présence</span>.</p>
          </div>
        </article></section>
      </article></section>

      <section><article>
        <h4 class="yellow">plan de cet article</h4>
        <section><article>
          <p>Dans les pages qui suivent, nous présentons les différents aspects cette œuvre:</p>
          <ol>
            <li>d'abord par une <a href="#presentation-photographique" title="presentation-photographique" id="renvoi-presentation-photographique" class="yellow">présentation photographique de l'œuvre dans son espace d'exposition</a>, la nouvelle abside de l'église de l'hôpital,</li>
            <li>puis par une <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:2#description" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:2#description" class="yellow">description détaillée de ce qu'elle représente</a>,</li>
            <li>enfin par la <a href="/docs/fr/bruges/hopital-saint-jean/sint-jean/page:16#mise-en-relation" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:16#mise-en-relation" id="renvoi-mise-en-relation" class="yellow">mise en relation des différents éléments de l'image avec les différents textes</a> sur lesquels il est raisonnable de penser que le peintre lui-même s'est fondé afin de concevoir sa représentation des sujets religieux.</li>
          </ol>
        </article></section>
      </article></section>
    </article></section>
  </article></section>

  <hr>

  <section><article>
    <h2 id="presentation-photographique" class="yellow">présentation photographique de l'œuvre dans son espace d'exposition</h2>
    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, vue de l'espace d'exposition depuis l'entrée de l'église de l'hôpital Saint-Jean, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, vue de l'espace d'exposition depuis l'entrée de l'église de l'hôpital Saint-Jean, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1920.jpg 1920w"></picture><figcaption>Vue de l'espace d'exposition depuis l'entrée de l'église de l'hôpital Saint-Jean</figcaption>
    </figure>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, vue de l'espace d'exposition depuis l'entrée de l'église de l'hôpital Saint-Jean, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, vue de l'espace d'exposition depuis l'entrée de l'église de l'hôpital Saint-Jean, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1920.jpg 1920w"></picture><figcaption>Vue de l'espace d'exposition depuis l'intérieur de l'église de l'hôpital Saint-Jean</figcaption>
    </figure>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, vue de l'espace d'exposition depuis l'entrée de l'église de l'hôpital Saint-Jean, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, vue de l'espace d'exposition depuis l'entrée de l'église de l'hôpital Saint-Jean, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1920.jpg 1920w"></picture><figcaption>Vue de l'espace du triptyque depuis l'abside de l'église de l'hôpital Saint-Jean</figcaption>
    </figure>
  </article></section>
</article>

<hr>

<nav>
  <h3 id="table-des-matieres" class="yellow">table des matières</h3>
  <ol>
    <li><a href="#presentation-photographique" title="présentation photographique" class="yellow">présentation photographique de l'œuvre dans son espace d'exposition</a></li>
    <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:2#description" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:2#description" class="yellow">description de l'œuvre</a>
      <ul>
        <li><a href="/docs/fr/bruges/hoptal-saint-jean/saint-jean/page:2#couronnement" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:2#couronnement" class="yellow">le couronnement de la vierge</a></li>
        <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#catherine-d-alexandrie" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#catherine-d-alexandrie" class="yellow">catherine d'alexandrie</a></li>
        <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#les-deux-jean" title="https//francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#les-deux-jean" class="yellow">les deux jean</a>
          <ul>
            <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#jean-le-baptiste-2" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#jean-le-baptiste-2" class="yellow">jean le baptiste</a></li>
            <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jeanpage:3#jean-l-evangeliste-3" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#jean-l-evangeliste-3" class="yellow">jean l'évangéliste</a></li>
            <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-e-jean" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean" class="yellow">le nom «jean», son lien avec l'institution, son étymologie</a></li>
          </ul>
        </li>
        <li><a href="/docs/fr/bruges/hopita-saint-jean/saint-jean/page:3#barbe" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#barbe" class="yellow">barbe la grande martyre</a></li>
        <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:4#conversation" title="https://francois-viit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:4#conversation" class="yellow">une conversation sacrée</a></li>
        <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:4#devotion-moderne" title="htps://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:4#devotion-moderne" class="yellow"><ruby lang="fr">dévotion<rp>(</rp><rt lang="la">devotio</rt><rp>)</rp>&#160;<rp>(</rp><rt lang="la">&#160;</rt><rp>)</rp>moderne<rp>(</rp><rt lang="la">moderna</rt><rp>)</rp></ruby></a></li>
        <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jeanpage:4#dispositif-architectural" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:4#dispositif-architectural" class="yellow">le dispositif architectural</a></li>
        <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:5#organsation-du-recit" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:5#organisation-du-recit" class="yellow">organisation du récit</a></li>
        <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:6#legendes" title="https//francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:6#legendes" class="yellow">légendes de jean le baptiste et jean l'évangéliste</a>
          <ul>
            <li><a href="/docs/fr/bruges/hoital-saint-jean/saint-jean/page:6#legende-de-jean-le-baptiste" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:6#legende-de-jean-le-baptiste" class="yellow">légende de jean le baptiste</a></li>
            <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:10#legede-de-jean-l-evangeliste" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:10#legende-de-jean-l-evangeliste" class="yellow">légende de jean l’évangéliste</a></li>
          </ul></li>
        <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:15#posiion-fermee" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:15#position-fermee" class="yellow">présentation des donateurs: le tryptique fermé</a></li>
      </ul>
    </li>
    <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:16#mise-en-relation" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:16#mise-en-relation" class="yellow">différents textes à l'origine des scènes représentées</a>
      <ul>
        <li><a href=/docs/fr/bruges/hopital-saint-jean/saint-jean/page:16#cath-selon-legende" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:16#cath-selon-legende" class="yellow">catherine d'alexandrie selon <cite>la légende dorée</cite></a></li>
        <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:17#barb-selon-legende" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:17#barbe-selon-legende" class="yellow">barbe la grande martyre selon <cite>la légende dorée</cite></a></li>
        <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jeanpage:18#jean-selon-legende" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:18#jean-selon-legende" class="yellow">jean l'évangéliste selon <cite>la légende dorée</cite> chapître 9</a></li>
        <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jeanpage:19#jean-selon-legende-2" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:19#jean-selon-legende-2" class="yellow">jean l'évangéliste selon <cite>la légende dorée</cite> chapître 65</a></li>
        <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:20#apocaypse" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse" class="yellow">vision du trône du dieu et de la cour céleste: le vivant sur le trône et l'agneau</a></li>
      </ul>
    </li>
  </ol>
</nav>

<hr>

<aside>
  <section><article>
    <h3 id="a-propos-de-cet-article" class="yellow">références de cet article</h3>
    <section><article>
      <p>Pour réaliser cet article, nous sommes redevables de travaux de référence, particulièrement ceux de <a href="#de-vos-1" id="renvoi-de-vos-1" class="yellow">Dirk DE VOS, “Hans Memling - L'œuvre complète”</a> et <a href="#de-vos-2" id="de-vos-2" class="yellow">“Hans Memling”</a>.</p>
    </article></section>

    <section><article>
      <h4 id="de-vos" class="yellow">références des livres cités de Dirk DE VOS:</h4>
      <section><article>
        <ul>
          <li>en français:
            <table>
              <thead>
              <tr>
              <th><span hidden="">hidden</span></th>
              <th><span hidden="">hidden</span></th>
              <th><span hidden="">hidden</span></th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td>Titre</td>
              <td>Paru en</td>
              <td>ISBN-10</td>
              </tr>
              <tr>
              <td>Hans Memling: l'œuvre complète</td>
              <td>1994</td>
              <td>2-226-06992-5</td>
              </tr>
              <tr>
              <td>Hans Memling: catalogue</td>
              <td>1994</td>
              <td>90-5544-028-0</td>
              </tr>
              </tbody>
            </table>
          </li>
          <li>en anglais:
            <table>
              <thead>
              <tr>
              <th><span hidden="">hidden</span></th>
              <th><span hidden="">hidden</span></th>
              <th><span hidden="">hidden</span></th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td>Titre</td>
              <td>Paru en</td>
              <td>ISBN-10</td>
              </tr>
              <tr>
              <td>Hans Memling: The Complete Works</td>
              <td>1994</td>
              <td>0810936496</td>
              </tr>
              <tr>
              <td>Hans Memling: Catalogue</td>
              <td>1994</td>
              <td>9055440299</td>
              </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </article></section>
      <footer>
        <p><a href="#renvoi-de-vos-1" title="renvoi-de-vos-1">↑ retour cette page</a> <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:2#renvoi-de-vos-2" title="renvoi-de-vos-2">↑ retour page 2</a></p>
      </footer>
    </article></section>

    <section><article>
      <h4 id="lorentz" class="yellow">références du livre cité de Philippe LORENTZ:</h4>
      <section><article>
        <div class="notices yellow">
          <ul>
            <li>en français:
              <table>
                <thead>
                <tr>
                <th><span hidden="">hidden</span></th>
                <th><span hidden="">hidden</span></th>
                <th><span hidden="">hidden</span></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>Titre</td>
                <td>Paru en</td>
                <td>ISBN-10</td>
                </tr>
                <tr>
                <td>Hans Memling au Louvre (exposition, Musée du Louvre, Salle de la Chapelle, aile Sully, 18 Mai-14 Août 1995)</td>
                <td>1995</td>
                <td>2-7118-3275-9</td>
                </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
      </article></section>
      <footer>
        <p><a href="#renvoi-lorentz-1" title="renvoi-de-vos-1">↑ retour cette page</a> <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#renvoi-lorentz-2" title="renvoi-lorentz-2">↑ retour page 3</a></p>
      </footer>
    </article></section>

    <hr>

    <section><article>
      <header>
        <p><a href="#renvoi-note-1" title="renvoi note-1" id="note-1">note 1:</a></p>
      </header>
      <p>les reproductions de l'œuvre que nous mettons à disposition du public sont à notre connaissance les meilleures actuellement existantes en dehors d'ouvrages professionnels: elles nous ont demandé un énorme travail du fait de la faiblesse de l'intensité et du jaune de l'éclairage de l'espace d'exposition du Musée Memling de Bruges à l'heure où cet article a été rédigé (<time datetime="2018">2018</time>).</p>
      <footer>
        <p><a href="#renvoi-note-1" title="renvoi note-1">↑ retour au texte</a></p>
      </footer>
    </article></section>
  </article></section>
</aside>

<!-- Page 2 --><hr>

<article>
  <h2 id="description" class="yellow">description de l'œuvre</h2>
  <section><article>
    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, vue du triptyque ouvert, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, vue du triptyque ouvert, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1920.jpg 1920w"></picture><figcaption>vue du triptyque ouvert</figcaption>
    </figure>

    <section><article>
      <p>Nous décrivons d'abord ce que <span style="color: #e6a64d;">l'œuvre représente</span> et pour cela suivons <span style="color: #e6a64d;">le chemin du regard</span>, commençant par la <span style="color: #e6a64d;">scène principale</span>, au centre du panneau central.</p>
    </article></section>
  
    <h3 id="couronnement" class="yellow">le couronnement de la vierge</h3>
    <section><article>

      <section><article>
        <p>Au centre, <span style="color:#e6a64d;">la Vierge</span> trône sur un siège d'or devant un tissu broché sous un baldaquin de velours rouge.</p>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, “la Vierge et l'enfant Jésus”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, la “Vierge et l'enfant Jésus”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “la Vierge et l'enfant Jésus”</figcaption>
      </figure>

      <section><article>
        <p>Elle <span style="color: #e6a64d;">est couronnée “Reine du ciel” par deux petits anges bleus foncés</span> qui voltigent au-dessus d'elle.</p>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, deux anges portent la couronne de la Vierge, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, deux anges portent la couronne de la Vierge, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1920.jpg 1920w"></picture><figcaption>détail du panneau central, deux anges portent la Couronne de la Vierge</figcaption>
      </figure>
    </article></section>

    <section><article>
      <h3 class="yellow">l'enfant Jésus</h3>

      <section><article>
        <p>Sur ses genoux, <span style="color: #e6a64d;">l'enfant Jésus</span>, assis, tient une pomme de sa main gauche, et passe de sa main droite <span style="color: #e6a64d;">un anneau</span> d'or au doigt d'<span style="color: #e6a64d;">une femme</span>, en bas à gauche de la vierge, sur le devant.</p>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, l'enfant Jésus, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, l'enfant Jésus, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1920.jpg 1920w"></picture><figcaption>détail du panneau central, l'enfant Jésus</figcaption>
      </figure>
    </article></section>
  <section><article>
</article>

<!-- Page 3 --><hr>

<article>
  <section><article>
    <h3 id="catherine-d-alexandrie" class="yellow">catherine d'alexandrie</h3>
    <section><article>
      <h4 class="yellow">catherine d'alexandrie dans la scène du panneau central</h4>
      <section><article>
        <p>C'est <a href="https://fr.wikipedia.org/wiki/Catherine_d'Alexandrie" title="https://fr.wikipedia.org/wiki/Catherine_d'Alexandrie" class="yellow">Catherine d'Alexandrie</a>, que l'on reconnaît à <span style="color: #e6a64d;">l'épée</span> et <span style="color: #e6a64d;">la roue brisée</span>, <span style="color: #e6a64d;">les instruments de son martyre</span> que l'on voit à ses pieds.</p>
      </article></section>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Catherine d'Alexandrie, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Catherine d'Alexandrie, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.jpg 1920w"></picture><figcaption>Catherine d'Alexandrie</figcaption>
      </figure>
    </article></section>

    <section><article>
      <h4 class="yellow">catherine d'alexandrie, sa réalité historique</h4>
      <section><article>
        <p><a href="https://fr.wikipedia.org/wiki/Catherine_d'Alexandrie" title="https://fr.wikipedia.org/wiki/Catherine_d'Alexandrie" id="catherine-d-alexandrie-2" class="yellow">Catherine d'Alexandrie</a> est, depuis la fin du XIII<sup style="color:#555;">ème</sup> siècle, une sainte très populaire dont la légende, rapportée par <a href="https://fr.wikipedia.org/wiki/Jacques_de_Voragine" title="https://fr.wikipedia.org/wiki/Jacques_de_Voragine" class="yellow">Jacques De Voragine</a> dans le <span style="color: #e6a64d;">chapître 168</span> de la <a href="https://fr.wikipedia.org/wiki/La_Légende_dorée" title="https:/fr.wikipedia.org/wiki/La_Légende_dorée" class="yellow">“<cite>La Légende Dorée</cite>”</a>, intitulé <a href="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:6" title="https://francois-vidit.om/docs/fr/saint-jean/page:6" class="yellow">“sainte Catherine”</a> est passionnant.</p>
        <ul>
          <li>Lire le <a href="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:16" title="https://francois-vidit.com/docs/fr/saint-jean/page:16" class="yellow">texte de la Légende de Catherine d'Alexandrie selon le chapître 168 de <cite>La Légende Dorée</cite></a>.</li>
        </ul>
        <p>Il est tout à fait probable que Memling se soit fondé sur ce texte.</p>
        <p>Les historiens modernes estiment que Catherine d'Alexandrie n'a pas réellement existé <sup id="page-3-fnref1:1"><a href="#page-3-fn:1" class="footnote-ref">note 1</a></sup>. L'église catholique elle-même le reconnaît: son culte a été retiré du calendrier général en <time datetime="1970">1970</time> <sup id="fnref1:2"><a href="#fn:2" class="footnote-ref">note 2</a></sup>.</p>
      </article></section>
    </article></section>

    <section><article>
      <h4 class="yellow">catherine d'alexandrie, sa légende au XV<sup>ème</sup> siècle</h4>
      <section><article>
        <p>Selon sa légende, <span style="color: #e6a64d;">Catherine</span> est une <span style="color: #e6a64d;">patricienne</span> connue pour son <span style="color: #e6a64d;">exceptionnelle éducation</span>, sa très <span style="color: #e6a64d;">grande beauté</span>.</p>
        <p>Elle aurait vécu à Alexandrie au III<sup>ème</sup> ou au IV<sup>ème</sup> siècle.</p>
        <p>Elle <span style="color: #e6a64d;">défie</span> l'empereur romain de l'époque <a href="https://fr.wikipedia.org/wiki/Maxence_(empereur_romain)" title="https://fr.wikipedia.org/wiki/Maxence_(empereur_romain)" class="yellow">Maxence</a> qui contraint alors sous la menace les chrétiens à l'abjuration publique.</p>
        <p>Maxence se trouve surpris face cette femme extraordinaire, qui le vexe, l'humilie par la pertinence de sa conversation.</p>
        <p>Il peine à maintenir sa dignité et, vaincu au terme d'un long combat spirituel plein de rebondissements, lui propose de l'épouser.</p>
        <p>Catherine, au nom de sa foi, refuse et choisit de subir le martyre.
        Au moment de son exécution, la voix de Jésus lui-même se serait alors fait entendre du ciel pour lui dire:</p>
        <blockquote cite="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:17#barbe-selon-legende">
          <p><span style="color: #e6a64d;"><q>Viens, ma bien-aimée, ma belle!</q></span></p>
        <p>Du fait de cette présence de sainte Catherine aux côtés de la Vierge et de l'enfant Jésus au centre du panneau central intérieur, le triptyque a quelques fois été appelé <span style="color: #e6a64d;">“le mariage mystique de sainte Catherine”</span> <sup id="page-3-fnref1:5"><a href="#page-3-fn:5" class="footnote-ref">note 3</a></sup>.</p>
        </blockquote>
      </article></section>
    </article></section>
  </article></section>
    
  <section><article>
    <h3 id="les-deux-jean" class="yellow">les deux jean</h3>
    <section><article>
      <h4 class="yellow">deux jumeaux: jean le baptiste, jean l'évangéliste</h4>
      <section><article>
        <p>Mais plus que Catherine d'Alexandrie, <span style="color: #e6a64d;">deux hommes</span>, <span style="color: #e6a64d;">sont les personnages principaux</span> de l'œuvre par:</p>
        <ol>
          <li>les nombreux détails qui racontent leurs deux légendes sur toute l'étendue intérieure du triptyque <span style="color: #999;">(panneau central, volets droite et gauche)</span>,</li>
          <li>tous deux sont appelés <span style="color: #e6a64d;">«Jean»</span>, ce qui, en creux, matérialise dans l'œuvre <span style="color: #e6a64d;">l'institution commanditaire</span>, <span style="color: #e6a64d;">l'Hôpital Saint-Jean de Bruges</span> et justifie l'appellation officielle actuelle, <span style="color: #e6a64d;"><cite>Triptyque de Jean le Baptiste et de Jean l'Évangéliste</cite></span>.</li>
        </ol>
        <p>ils se tiennent comme <span style="color: #e6a64d;">deux jumeaux</span>, debouts, à droite et à gauche, de part et d'autre de la vierge, en encadrement, sur le derrière.</p>
      </article></section>
    </article></section>

    <section><article>
      <h4 id="jean-le-baptiste-2" class="yellow">jean le baptiste</h4>
      <section><article>
        <p>Sur le derrière, à gauche, la présence d'un <span style="color: #e6a64d;">agneau blanc</span> nous permet d'identifier <span style="color: #e6a64d;">l'homme portant la</span> magnifique <span style="color: #e6a64d;">tunique violette</span> comme <a href="https://fr.wikipedia.org/wiki/Jean_le_Baptiste" title="https://fr.wikipedia.org/wiki/Jean_le_Baptiste" id="jean-le-baptiste" class="yellow">Jean le Baptiste</a>.</p>
        <p>L'agneau rappelle la parole que Jean le Baptiste adressa à ses disciples pour <span style="color: #e6a64d;">annoncer</span> la venue de <span style="color: #e6a64d;">Jésus dans le monde</span> <span style="color: #999;">(Jean, chapître 1 verset 29)</span>:</p>
        <blockquote>
          <p class="conversation"><span style="color: #e6a64d;"><ruby style="color:#e6a64d;" lang="fr">Voici&#160;l'agneau&#160;de&#160;dieu<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="la">Ecce&#160;agnus&#160;dei</rt><rp>)</rp></ruby></span>.</p>
        </blockquote>
        <p>Jean le Baptiste désigne aussi de son bras droit l'enfant Jésus.</p>
      </article></section>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Jean le Baptiste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Jean le Baptiste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1920.jpg 1920w"></picture><figcaption>Jean le Baptiste</figcaption>
      </figure>
      <section><article>
        <p>L'agneau est aussi un symbole nouveau propre à la foi chrétienne.</p>
        <p>Au contraire de l'ancienne foi hébraïque où, pour plaire à dieu, il faut lui sacrifier des animaux, le christianisme naissant affirme que <span style="color: #e6a64d;">le seul véritable sacrifice qui plaît à dieu</span> est celui que <span style="color: #e6a64d;">le croyant lui fait de lui-même</span>, à l'imitation de Jésus et en référence à cette parole du prophète <a href="https://fr.wikipedia.org/wiki/Isaïe" title="https://fr.wikipedia.org/wiki/Isaïe" id="isaie" class="yellow">Isaïe</a> <span style="color: #999;">(Isaïe, chapître 53 verset 7)</span>:</p>
        <blockquote cite="https://www.aelf.org/bible/Is/53">
          <span style="color: #e6a64d;">«Maltraité, il s’humilie, il n’ouvre pas la bouche: comme <span style="text-decoration: underline;">un agneau</span> conduit à l’abattoir.»</span>
        </blockquote>
        <p>Sous sa tunique violette, se trouve <span style="color: #e6a64d;">une autre tunique</span>, brune claire, que le texte nous précise être de <span style="color: #e6a64d;">poil de chameau</span> <span style="color: #999;">(Marc chapître 1 verset 6)</span>, à l'imitation du vêtement de poil du prophète <a href="https://fr.wikipedia.org/wiki/Élie" title="https://fr.wikipedia.org/wiki/Élie" id="elie" class="yellow">Élie</a> <span style="color: #999;">(2 Rois chapître 1 verset 8)</span>.</p>
        <p>Ce même vêtement de poil fait aussi référence à un épisode de <a href="https://fr.wikipedia.org/wiki/Livre_de_la_Genèse" title="https://fr.wikipedia.org/wiki/Livre_de_la_Genèse" class="yellow">le Livre de la Génèse</a> <span style="color: #999;">(Gn 27:1-40)</span> durant lequel <a href="https://fr.wikipedia.org/wiki/Jacob" title="https://fr.wikipedia.org/wiki/Jacob" id="jacob" class="yellow">Jacob</a>, sur l'indication de sa mère <a href="https://fr.wikipedia.org/wiki/Rébecca_(Bible)" title="https://fr.wikipedia.org/wiki/Rébecca_(Bible)" id="rebecca" class="yellow">Rebecca</a>, se fait passer pour son frère <a href="https://fr.wikipedia.org/wiki/Ésaü" title="https://fr.wikipedia.org/wiki/Ésaü" id="esau" class="yellow">Ésaü</a> qui est très <span style="color: #e6a64d;">poilu</span>, auprès de son père aveugle, <a href="https://fr.wikipedia.org/wiki/Isaac" title="https://fr.wikipedia.org/wiki/Isaac" id="isaac" class="yellow">Isaac</a>, en revêtant un <span style="color: #e6a64d;">vêtement de poil</span>.</p>
        <p>Sa ruse lui permet d'être indûment béni et de devenir ainsi l'unique hértier à la place d'Ésaü.</p>
        <p>Cette tunique est aussi un signe de domination de l'animalité: dans le cas de Jean le Baptiste, le chameau étant un animal qui permet de traverser le désert, de domination l'animalité par l'ascèse.</p>
      </article></section>
    </article></section>

    <section><article>
      <h4 id="jean-l-evangeliste-3" class="yellow">jean l'évangéliste</h4>
      <section><article>
        <p>De l'autre côté, à droite, <span style="color: #e6a64d;">un autre homme</span> debout, habillé comme un prêtre, de <span style="color: #e6a64d;">rouge</span>, fait de sa main droite le signe de croix sur <span style="color: #e6a64d;">une coupe</span>, dans laquelle il y a un <span style="color: #e6a64d;">serpent</span>: c'est <a href="https://fr.wikipedia.org/wiki/Jean_(apôtre)" title="https://fr.wikipedia.org/wiki/Jean_(apôtre)" id="jean-l-evangeliste-4" class="yellow">Jean l'Évangéliste</a>.</p>
      </article></section>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Jean l'Évangéliste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Jean l'Évangéliste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>Jean l'Évangéliste</figcaption>
      </figure>
      <section><article>
        <p>Nous reconnaissons <a href="https://fr.wikipedia.org/wiki/Jean_(apôtre)" title="https://fr.wikipedia.org/wiki/Jean_(apôtre)" id="jean-l-evangeliste" class="yellow">Jean l'Évangéliste</a> à un épisode du <span style="color: #999;">chapître 9</span> de <a href="https://fr.wikipedia.org/wiki/La_Légende_drée" title="https://fr.wikipedia.org/wiki/La_Légende_dorée" id="legende-doree-3" class="yellow"><cite>La Légende Dorée</cite></a>.</p>
        <ul>
          <li>lire le <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" title="https://francois-vidit.comdocs/fr/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" id="renvoi-aristodeme" class="yellow">texte de la <cite>Légende de Jean l'Évangéliste</cite> selon le chapître 9 de <cite>La Légende Dorée</cite></a>.</li>
        </ul>
        <p>Jean l'Évangéliste y affronte <span style="color: #e6a64d;">Aristodème</span>, prêtre du temple de Diane en Asie <span style="color: #999;">(sans doute Éphèse)</span>, qui le défie publiquement de <span style="color: #e6a64d;">boire</span> une <span style="color: #e6a64d;">coupe empoisonnée</span>.</p>
        <p>Celui-ci fait, comme Memling le représente, le <span style="color: #e6a64d;">signe de croix</span>, boit la coupe mais le poison ne lui fait aucun mal.</p>
        <p>Le <span style="color: #e6a64d;">serpent</span> évoque aussi une parole que Jésus adresse à <a href="https://fr.wikipedia.org/wiki/Nicodème" title="https://fr.wikipedia.org/wiki/Nicodème" id="nicodeme" class="yellow">Nicodème</a> <span style="color: #999;">(Jean 3,14)</span>:</p>
        <blockquote cite="https://www.aelf.org/bible/Jn/3#right-col">
          <p><span style="color: #e6a64d;">Comme Moïse a élevé le serpent dans le désert, il faut que le fis de l'homme soit élevé, afin que quiconque croit ait, en lui, la vie éternelle</span>.</p>
        </blockquote>
      </article></section>
    </article></section>
    
    <section><article>
      <h4 id="le-nom-de-jean" class="yellow">le nom «jean», son étymologie</h4>
      <section><article>
        <h5 class="yellow">l'étymologie du nom «jean» en hébreu</h5>
        <section><article>
          <p>L'étymologie du prénom «Jean» vient de l'hébreu «<ruby style="color:#e6a64d;" lang="fr">Yo<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">יו</rt><rp>)</rp>kha<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">ח</rt><rp>)</rp>nan<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">נן</rt><rp>)</rp></ruby>», dont la prononciation est:</p>
          <p><audio controls title="prononciation de Yokhanan en hébreu"><source src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/prononciation-yokhanan.mp3" type="audio/mpeg">Your browser does not support the audio tag.</audio></p>
          <p>qui signifie littéralement «<ruby style="color:#e6a64d;" lang="fr">dieu<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">Yo</rt><rp>)</rp></ruby>» est «<ruby style="color:#e6a64d;" lang="fr">grâce<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">khanan</rt><rp>)</rp></ruby>» ou «<ruby style="color:#e6a64d;" lang="fr">miséricorde<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">khanan</rt><rp>)</rp></ruby>».</p>
          <p>Comme «dieu» veut dire aussi en hébreu «ce qui est», «Jean» signifie également <span style="color: #e6a64d;">«celui en qui est»</span> la <span style="color: #e6a64d;">«grâce»</span> ou  la <span style="color: #e6a64d;">«miséricorde»</span>.</p>
          <p>Si <span style="color: #e6a64d;">ce prénom</span> a été porté par plusieurs personnages mineurs de l'histoire du peuple hébreu, il n'<span style="color: #e6a64d;">est devenu</span> très <span style="color: #e6a64d;">populaire</span> qu'après l'apparition du christianisme, <span style="color: #e6a64d;">dans le monde chrétien</span>, à la suite du rôle très important que chacun d'eux accomplit, rôles que nous détaillons bientôt en suivant le récit de la narration picturale de chacune de leur légende à travers les différentes scènes du triptyque.</p>
        </article></section>
      </article></section>
    </article></section>
  </article></section>

  <section><article>
    <h3 id="barbe" class="yellow">barbe la grande martyre</h3>
    <section><article>
      <h4 class="yellow">barbe la grande martyre dans la scène du panneau central</h4>
      <section><article>
        <p>De l'autre côté de la vierge, sur le devant, à droite, <span style="color: #e6a64d;">une autre femme</span>, vétue d'<span style="color: #e6a64d;">une magnifique tunique de laine verte</span> telle que seule Bruges en produisait au XV<sup style="color:#555;">ème</sup> siècle, <span style="color: #e6a64d;">lit</span>.</p>
        <p>Sa présence répond à celle de <a href="#catherine-d-alexandrie" class="yellow">Catherine d'Alexandrie</a> sur le devant de l'autre côté.</p>
        <p>Derrière elle, <span style="color: #e6a64d;">une tour tabernacle en pierre blanche</span> nous indique qu'il s'agit de <a href="https://fr.wikipedia.org/wiki/Barbe_la_grande_martyre" title="https://fr.wikipedia.org/wiki/Barbe_la_grande_martyre" id="barbe-la-grande-martyre" class="yellow">Barbe la grande martyre</a> <sup id="fnref1:3"><a href="#fn:3" class="footnote-ref">note 4</a></sup>.</p>
      </article></section>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Barbe la grande martyre, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Barbe la grande martyre, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.jpg 1920w"></picture><figcaption>Barbe la grande martyre</figcaption>
      </figure>
    </article></section>

    <section><article>
      <h4 class="yellow">barbe la grande martyre, sa réalité historique</h4>
      <section><article>
        <p>Comme pour <a href="#catherine-d-alexandrie" class="yellow">Catherine d'Alexandrie</a>, les historiens modernes doutent de la réalité de son existence et son nom a également été retiré du calendrier général <sup id="fnref2:2"><a href="#fn:2" class="footnote-ref">note 2</a></sup>; le texte sur lequel Memling s'est fondé pour la représenter ne fait pas non plus partie de <a href="https://fr.wikipedia.org/wiki/La_Légende_dorée" title="https://fr.wikipedia.org/wiki/La_Légende_dorée" id="legende-doree-2" class="yellow"><cite>La Légende Dorée</cite></a> mais, comme d'autres textes, y a été ajouté ensuite.</p>
        <ul>
          <li>Lire le <a href="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:7" title="https://francois-vidit.com/docs/fr/saint-jean/page:7" class="yellow">texte <cite href="https://francois-vidit.com/docs/fr/saint-jean/page:7">Légende de Barbe la grande martyre</cite> ajouté à <cite>La Légende Dorée</cite></a>.</li>
        </ul>
      </article></section>
    </article></section>

    <section><article>
      <h4 class="yellow">barbe la grande martyre, sa légende au XV<sup>ème</sup></h4>
      <section><article>
        <p>Selon sa légende, Barbe habite <a href="https://fr.wikipedia.org/wiki/Nicomédie" title="https://fr.wikipedia.org/wiki/Nicomédie" id="nicomedie" class="yellow">Nicomédie</a>, capitale de l'ancienne province de <a href="https://fr.wikipedia.org/wiki/Bithynie" title="https://fr.wikipedia.org/wiki/Bithynie" id="bithynie" class="yellow">Bithynie</a> et qui se trouve située dans le nord de la Turquie actuelle et donne sur la Mer Noire.
        Barbe a le défaut d'être belle .., tellement belle, que très jeune, <span style="color: #e6a64d;">son père l'enferme dans une tour</span>!</p>
        <p>Le texte nous apprend que Barbe sent alors <span style="color: #e6a64d;">«le néant des choses terrestres»</span> et commence à se préoccuper <span style="color: #e6a64d;"><q>des choses célestes</q></span>.
        Bien que cela soit interdit à son époque, elle se détourne peu à peu des dieux romains et écrit secrètement au plus célèbre chrétien d'<a href="https://fr.wikipedia.org/wiki/Alexandrie" title="https://fr.wikipedia.org/wiki/Alexandrie" id="alexandrie" class="yellow">Alexandrie</a> en Égypte, <a href="https://fr.wikipedia.org/wiki/Origène" title="https://fr.wikipedia.org/wiki/Origène" class="yellow">Origène</a>
        Celui-ci lui répond, la fortifie dans sa foi naissante, la visite et lui donne clandestinemnt le <span style="color: #e6a64d;">baptème</span>.</p>
        <p>Publiquement <span style="color: #e6a64d;">dénoncée</span> ensuite pour avoir refusé de sacrifier aux dieux, elle subit le martyre.
        La voix de Jésus se serait alors fait entendre du ciel:</p>
        <blockquote cite="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:17#barbe-selon-legende">
          <p><span style="color: #e6a64d;">Viens, ma bien-aimée; repose-toi dans la demeure de mon père lui est dans le ciel</span>.</p>
        </blockquote>
        <p>Son propre père lui tranche la tête.</p>
      </article></section>
    </article></section>

    <section><article>
      <h4 class="yellow">l'hostie au travers de la tour de barbe la grande martyre</h4>
      <section><article>
        <p>À travers les entrelacs de la tour placée derrière elle, <span style="color: #e6a64d;">une hostie</span> apparaît dans <span style="color: #e6a64d;">un cylindre de verre</span> monté sur un croissant de lune doré.</p>
      </article></section>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-840.webp 840w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, l'hostie dans la tour tabernacle de Barbe la grande martyre, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, l'hostie dans la tour tabernacle de Barbe la grande martyre, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-840.jpg 840w"></picture><figcaption>à travers les entrelacs de sa tour, une hostie apparaît dans un cylindre de verre monté sur un croissant de lune doré</figcaption>
      </figure>
      <section><article>
        <p>L'<span style="color: #e6a64d;">hostie</span> est un des attribut de la sainte; c'est aussi un lien avec le reste du panneau qui en fait apparaître d'autres aspects sous forme d'une <span style="color: #e6a64d;"><q>conversation sacrée</q></span>.</p>
      </article></section>
    </article></section>
  </article></section>
</article>

<hr>

<aside>
  <article>
    <section><article>
      <div class="footnotes">
        <ol>
          <li id="page-3-fn:1"><p>Nous suivons les références données dans l'article «Catherine d'Alexandrie» de Wikipedia (date de consultation: 15 août 2018), à savoir:</p>
            <ul>
              <li>Gustave Bardy: Catherine d’Alexandrie. In: Dictionnaire d’histoire et de géographie ecclésiastiques, vol 11, Paris 1949, pp 1503–1505, ici: 1504.</li>
              <li>Christine Walsh: The Cult of St Katherine of Alexandria in Early Medieval Europe, Aldershot 2007, p. 3–26;</li>
              <li>Michael Deakin: Hypatia of Alexandria, Mathematician and Martyr, Amherst (New York) 2007, p. 135, 202;</li>
              <li>Maria Dzielska: Hypatia of Alexandria, Cambridge (Massachusetts) 1995, p. 21;</li>
              <li>Christian Lacombrade: Hypatia. In: Reallexikon für Antike und Christentum, vol 16, Stuttgart 1994, pp 956–967, ici: 966;</li>
            </ul>
          </li>
        </ol>
      </div>
      <footer>
        <p><a href="#page-3-fnref1:1" rev="footnote" class="footnote-backref">retour au texte ↩</a></p>
      </footer>
    </article></section>

    <section><article>
      <div class="footnotes">
        <ol start="2">
          <li id="page-3-fn:2">
            <p>Nous suivons les références données dans l'article «Catherine d'Alexandrie» de Wikipedia (date: 15 août 2018), à savoir:</p>
            <blockquote cite="https://fr.wikipedia.org/wiki/Catherine_d'Alexandrie#Réalité_historique_et_dévotion">
              <p>«Certains saints peuvent être populaires, en raison des légendes qui se sont créées autour de leurs noms, sans qu'on puisse même garantir qu'ils aient existé, tels saint Christophe, sainte Barbara, sainte Catherine d'Alexandrie, sainte Philomène. Ils ont été supprimés du calendrier général: le peuple chrétien ne peut être invité à une prière officielle que dans la vérité».</p>
            </blockquote>
            <p><cite>Conférence de présentation du nouveau calendrier romain</cite> par l'abbé Pierre JOUNEL, professeur à l'institut supérieur de liturgie de l'Institut catholique de Paris, rapporteur du groupe d'étude qui a préparé la réforme du calendrier, faite à Rome le <time datetime="1969-05-09">9 mai 1969</time>.</p>
          </li>
        </ol>
      </div>
      <footer><p><a href="#page-3-fnref2:2" rev="footnote" class="footnote-backref">retour au texte ↩</a></p></footer>
    </article></section>

    <section><article>
      <div class="footnotes">
        <ol start="3">
          <li id="page-3-fn:5">
            <p>comme, par exemple dans <a href="https://fr.wikipedia.org/wiki/Le_Mariage_mystique_de_sainte_Catherine_(Hans_Memling)" title="https://fr.wikipedia.org/wiki/Le_Mariage_mystique_de_sainte_Catherine_(Hans_Memling)">ce piètre article Wikipedia</a></p>
          </li>
        </ol>
      </div>
      <footer><p><a href="#page-3-fnref1:5" rev="footnote" class="footnote-backref">retour au texte ↩</a></p></footer>
    </article></section>

    <section><article>
      <div class="footnotes">
      <ol start="4">
        <li id="page-3-fn:3">
          <p>Barbe la grande martyre est aussi connue comme “sainte Barbe”.</p>
        </li>
      </ol>
      </div>
      <footer><p><a href="#page-3-fnref1:3" rev="footnote" class="footnote-backref">retour au texte ↩</a></p></footer>
    </article></section>
  </article>
</aside>

<!-- Page 4 --><hr>

<article>
  <section><article>
    <h3 id="conversation" class="yellow">une conversation sacrée autour de la Vierge Marie et l'enfant Jésus</h3>
    <section><article>
      <h4 class="yellow">la conversation sacrée dans la scène du panneau central</h4>
      <section><article>
        <p>Au couronnement de <a href="https://fr.wikipedia.org/wiki/Marie_(mère_de_Jésus)" title="https://frwikipedia.org/wiki/Marie_(mère_de_Jésus)" id="marie-mere-de-jesus" class="yellow">Marie</a>, la présence <span style="color: #e6a64d;">deux</span> à <span style="color: #e6a64d;">deux</span> de <a href="#catherine-d-alexandrie" title="Catherine d'Alexandrie" class="yellow">Catherine</a> et <a href="#barbe" class="yellow">Barbe</a>, de <a href="#jean-le-baptiste-2" title="Jean le Baptiste" id="jean-le-baptiste-3" class="yello">Jean le Baptiste</a> et <a href="#jean-l-evangliste-3" title="Jean l'Évangéliste" id="jean-l-evangeliste-5" class="yellow">Jean l'Évangéliste</a> ajoute une <q><ruby style="color:#e6a64d;" lang="fr">conversation&#160;sacrée<rp>(</rp><rt style="font-size:70%;letter-spacing: 1px;color:#e6a64d;" lang="it">sacra&#160;conversazione</rt><rp>)</rp></ruby></q>, c'est-à-dire une <span style="color: #e6a64d;">réunion de saints</span> autour de la vierge.</p>
      </article></section>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, une conversation sacrée autour de la Vierge Marie et l'enfant Jésus, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, une conversation sacrée autour de la Vierge Marie et l'enfant Jésus, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1920.jpg 1920w"></picture><figcaption>vue du panneau central, une conversation sacrée autour de la Vierge Marie et l'enfant Jésus</figcaption>
      </figure>
    </article></section>

    <section><article>
      <h4 class="yellow">les deux servants d'autels dans la scène du panneau central</h4>
      <section><article>
        <p>Cet esprit de <span style="color: #e6a64d;">communion</span> se trouve renforcé par la présence:</p>
        <ul>
          <li>à gauche de la vierge d'<span style="color: #e6a64d;">un servant d'autel</span> qui joue d'un petit <span style="color: #e6a64d;">orgue</span> assis,</li>
          <li>à droite d'<span style="color: #e6a64d;">un autre</span> agenouillé qui lui présente <span style="color: #e6a64d;">un livre</span>.</li>
        </ul>
      </article></section>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, les deux servants d'autel, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, les deux servants d'autel, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1920.jpg 1920w"></picture><figcaption>détails du panneau central, les deux servants d'autel</figcaption>
      </figure>
    </article></section>
  </article></section>

  <section><article>
    <h3 class="yellow">La conversation sacrée, expression remarquable de la “<ruby lang="fr">dévotion<rp>(</rp><rt lang="la">devotio</rt><rp>)</rp>&#160;<rp>(</rp><rt lang="la">&#160;</rt><rp>)</rp>moderne<rp>(</rp><rt lang="la">moderna</rt><rp>)</rp></ruby>”</h3>
    <section><article>
      <h4 class="yellow">symétrie, simplicité, distinction de la disposition des protagonistes</h4>
      <section><article>
        <h5 class="yellow">symétrie, simplicité</h5>
          <section><article>
            <p>À la symétrie et à la simplicité des positions les unes par rapport aux autres dans la largeur s'accorde à la forme du tryptique.</p>
          </article></section>

        <h5 class="yellow">distinction</h5>
        <section><article>
          <p>La hauteur et la profondeur s'organisent autour de la <span style="color: #e6a64d;">distinction hommes femmes</span>:</p>
          <ul>
            <li>sur le <span style="color: #e6a64d;">devant</span> en bas, <span style="color: #e6a64d;">deux femmes</span>,</li>
            <li>sur le <span style="color: #e6a64d;">derrière</span> en haut, <span style="color: #e6a64d;">deux hommes</span>.</li>
          </ul>
          <p>L'<span style="color: #e6a64d;">insondabilité</span> et le <span style="color: #e6a64d;">mystère</span> en profondeur et hauteur répond à la <span style="color: #e6a64d;">symétrie</span> et la <span style="color: #e6a64d;">simplicité</span> des positions en largeur.</p>
        </article></section>
      </article></section>
    </article></section>

    <section><article>
      <h4 class="yellow">ressemblances des physionomies, variétés des âges représentés</h4>
      <section><article>
        <p>Les personnages représentés semblent de <span style="color: #e6a64d;">la même famille</span> et sont <span style="color: #e6a64d;">de tous âges</span>:</p>
        <ul>
          <li>nouveau né,</li>
          <li>petit enfant,</li>
          <li>enfant,</li>
          <li>adolescent,</li>
          <li>jeune homme,</li>
          <li>femme,</li>
          <li>mère,</li>
          <li>homme,</li>
          <li>homme et femme âgés.</li>
        </ul>
        <p>La <span style="color: #e6a64d;">ressemblance</span> des physionomies et la <span style="color: #e6a64d;">variété</span> des âges <span style="color: #e6a64d;">unifie</span> l'ensemble.</p>
      </article></section>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, de gauche à droite: ressemblances des physionomies, variétés des âges représentés, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, de gauche à droite: ressemblances des physionomies, variétés des âges représentés, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1920.jpg 1920w"></picture><figcaption>détails du panneau central, de gauche à droite: ressemblances des physionomies, variétés des âges représentés</figcaption>
      </figure>
    </article></section>

    <section><article>
      <h4 class="yellow">la <ruby lang="fr">dévotion<rp>(</rp><rt lang="la">devotio</rt><rp>)</rp>&#160;<rp>(</rp><rt lang="la">&#160;</rt><rp>)</rp>moderne<rp>(</rp><rt lang="la">moderna</rt><rp>)</rp></ruby>, mouvement de réforme de la foi chrétienne de la société flamande du XV<sup>ème</sup> siècle</h4>
      <section><article>
        <p>Nous pensons que cet <span style="color: #e6a64d;">équilibre</span> est une caractéristique remarquable de la société flamande du XV<sup>ème</sup> siècle dans laquelle a vécu Memling.</p>
        <p>Le très important mouvement de réforme de la foi chrétienne de cette époque, que les historiens appellent <q><a href="https://fr.wikipedia.org/wiki/Devotio_moderna" title="https://fr.wikipedia.org/wiki/Devotio_moderna" id="devotio-moderna" class="yellow"><ruby lang="fr">dévotion<rp>(</rp><rt lang="la">devotio</rt><rp>)</rp>&#160;<rp>(</rp><rt lang="la">&#160;</rt><rp>)</rp>moderne<rp>(</rp><rt lang="la">moderna</rt><rp>)</rp></ruby></a></q>, éclaire cette transparence simple familière de l'espace représenté.</p>
      </article></section>
      <footer>
        <ul>
          <li>pour en savoir plus: <a href="#note-devotion-moderne" title="note présentation du mouvement “dévotion moderne”" id="renvoi-devotion-moderne" class="yellow">la “<ruby lang="fr">dévotion<rp>(</rp><rt lang="la">devotio</rt><rp>)</rp>&#160;<rp>(</rp><rt lang="la">&#160;</rt><rp>)</rp>moderne<rp>(</rp><rt lang="la">moderna</rt><rp>)</rp></ruby>” comme mouvement religieux historique du XV<sup>ème</sup> siècle</a></li>
        </ul>
      </footer>
    </article></section>

    <section><article>
      <h4 class="yellow">la <ruby lang="fr">dévotion<rp>(</rp><rt lang="la">devotio</rt><rp>)</rp>&#160;<rp>(</rp><rt lang="la">&#160;</rt><rp>)</rp>moderne<rp>(</rp><rt lang="la">moderna</rt><rp>)</rp></ruby>, conversion essentielle universelle, simple, pure, transparente</h4>
      <section><article>
        <section><article>
          <p>En Flandres, à l'époque de Memling, un livre de piété chrétienne, <span style="color: #e6a64d;"><cite><a href="https://fr.wikipedia.org/wiki/L'Imitation_de_Jésus-Christ" title="https://fr.wikipedia.org/wiki/L'Imitation_de_Jésus-Christ" id="imitation-de-jesus-christ" class="yellow"><ruby lang="fr">L'Imitation&#160;de<rp>(</rp><rt lang="la">De&#160;imitatione</rt><rp>)</rp>&#160;Jésus-Christ<rp>(</rp><rt lang="la">Christi</rt><rp>)</rp></ruby></a></cite></span>, qui est un énorme succès d'édition <sup id="fnref1:4"><a href="#fn:4" class="footnote-ref">note 1</a></sup>, nous permet aujourd'hui de nous représenter ce qu'a pu être “<ruby lang="fr">dévotion<rp>(</rp><rt lang="la">devotio</rt><rp>)</rp>&#160;<rp>(</rp><rt lang="la">&#160;</rt><rp>)</rp>moderne<rp>(</rp><rt lang="la">moderna</rt><rp>)</rp></ruby>”.</p>
        </article></section>

        <section><article>
          <h5 class="yellow">texte extrait de <cite>L'Imitation de Jésus-Christ</cite></h5>
          <header>
            <p>On peut y lire par exemple <sup id="page-4-fnref1:5"><a href="#fn:4" class="footnote-ref">note 2</a></sup>:</p>
          </header>
          <article>
            <ol class="doc">
              <li value="1">L'être humain s'élève au-dessus de la terre sur deux ailes, la <span style="color: #b37319;">simplicité</span> et la <span style="color: #b37319;">pureté</span>.</li>
              <li>La simplicité doit être dans l'<span style="color: #b37319;">intention</span>, et la pureté dans l'<span style="color: #b37319;">affection</span>.</li>
              <li>La simplicité <span style="color: #9c6416;">cherche</span> dieu, la pureté le <span style="color: #9c6416;">trouve</span> et le <span style="color: #9c6416;">goûte</span>.</li>
              <li>Nulle bonne œuvre ne vous sera difficile, si vous êtes libre au-dedans de toute affection déréglée.</li>
              <li value="15">Si vous ne voulez que ce que dieu veut et ce qui est utile au prochain, vous jouirez de la <span style="color: #9c6416;">liberté intérieure</span>.</li>
              <li>Si votre cœur était droit, alors toute créature vous serait un <span style="color: #9c6416;">miroir de vie</span> et un <span style="color: #9c6416;">livre rempli de saintes instructions</span>.</li>
              <li>Il n'est point de créature si petite et si vile qui ne présente quelque <span style="color: #9c6416;">image de la bonté de dieu</span>.</li>
              <li>Si vous aviez en vous assez d'<span style="color: #9c6416;">innocence</span> et de <span style="color: #9c6416;">pureté</span>, vous verriez tout <span style="color: #9c6416;">sans obstacle</span>.</li>
              <li>Un cœur pur pénètre le ciel et l'enfer.</li>
              <li value="10">Chacun juge des choses du dehors selon ce qu'il est au-dedans de lui-même.</li>
              <li>S'il est quelque joie dans le monde, le cœur pur la possède.</li>
              <li>Et s'il y a des angoisses et des tribulations, avant tout elles sont connues de la mauvaise conscience.</li>
              <li value="13">Comme le fer mis au feu perd sa rouille et devient tout étincelant, ainsi celui qui se donne sans réserve à dieu se dépouille de sa langueur et se change en un être nouveau.</li>
            </ol>
          </article>
        </article></section>

        <section><article>
          <p>Dans la scène représentée par Memling, la conversation sacrée fonctionne selon les termes du texte cité plus haut comme <q><span style="color: #e6a64d;">livre rempli de saintes instructions</span></q> simples, pures, en accord avec le dispositif architural.</p>
        </article></section>
      </article></section>
    </article></section>
  </article></section>
  
  <section><article>
    <h3 id="dispositif-architectural" class="yellow">le dispositif architectural représenté dans le panneau central</h3>
    <section><article>
      <h4 class="yellow">la <ruby lang="fr">dévotion<rp>(</rp><rt lang="la">devotio</rt><rp>)</rp>&#160;<rp>(</rp><rt lang="la">&#160;</rt><rp>)</rp>moderne<rp>(</rp><rt lang="la">moderna</rt><rp>)</rp></ruby>, mode de relation entre les protagonistes de la scène représentée et spectateurs</h4>
      <section><article>
        <p>La disposition des lieux représentés, l'abside d'une église, permet au dispositif architectural de fonctionner aussi par rapport aux spectateurs du triptyque.</p>
        <p>Nous qui regardons le tableau nous trouvons de fait dans l'espace du tableau, partie de la conversation sacrée, en présence des protagonistes de la scène représentée, dans ce rapport d'altérité simple, transparente, familière.</p>
        <p>De ce point de vue, l'œuvre de Memling fonctionne comme <span style="color: #e6a64d;">miroir de vie</span>:</p>
        <ul>
          <li>d'un côté les spectateurs du triptyque, que ce soient malades de l'Hôpital Saint-Jean à l'époque de Memling ou nous aujourd'hui <span style="color: #e6a64d;">«<em>conversent</em>»</span> avec les figures représentées,</li>
          <li>de l'autre celles-ci <span style="color: #e6a64d;">«<em>s'actualisent</em>»</span> ici et maintenant, comme Brugeoises et Brugeois de <time datetime="1479">1479</time> ou visiteurs du Musée Memling du XXI<sup>ème</sup> siècle.</li>
        </ul>
      </article></section>
    </article></section>

    <section><article>
      <h4 class="yellow">la <ruby lang="fr">dévotion<rp>(</rp><rt lang="la">devotio</rt><rp>)</rp>&#160;<rp>(</rp><rt lang="la">&#160;</rt><rp>)</rp>moderne<rp>(</rp><rt lang="la">moderna</rt><rp>)</rp></ruby>, cristallisation du merveilleux de Bruges au XV<sup>ème</sup> siècle</h4>
      <section><article>
        <p>Enfin, la disposition exemplaire d'une représentation où les personnages sont parés des plus belles réalisations vestimentaires de la Bruges du XV<sup>ème</sup> siècle, cristallise le sentiment de <em>merveilleux</em>.</p>
        <p><span style="color: #e6a64d;">simplicité, évidence, idéalité spirituelles produisent</span> aussi de <em>manière continue</em> <span style="color: #e6a64d;">sophistication et opulence matérielles</span>.</p>
        <p><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:1#de-vos" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:1#de-vos" id="renvoi-de-vos-2" class="yellow">Dirk DE VOS</a> évoque:</p>
        <blockquote>
          <p class="conversation"><span style="color: #e6a64d;">«un monde de vierges vêtues de brocart d'or, de soie et d'hermine, couronnes dorées et de pierres précieses rares»</span> où <span style="color: #e6a64d;">«l'enfant Jésus fait signe»</span> aux malades dans une <span style="color: #e6a64d;">«atmosphère empreinte de profonde sérénité»</span>.</p>
        </blockquote>
        <p>De fait, à Bruges au XV<sup>ème</sup> siècle, simplicité et l'évidence ne connaissant pas de limites, mènent <em>merveilleusement</em> au divin.</p>
      </article></section>
    </article></section>

    <section><article>
      <h4 class="yellow">l'influence de Van Eyck sur le dispositif architural</h4>
      <section><article>
        <p>Memling se laisse guider de manière incontestable par cette œuvre de <a href="https://fr.wikipedia.org/wiki/Jan_van_Eyk" title="https://fr.wikipedia.org/wiki/Jan_van_Eyck" id="jan-van-eyck" class="yellow">Jan VAN EYCK</a> peinte en <time datetime="1436">1436</time> qu'il connaît et va admirer dans la <a href="https://fr.wikipedia.org/wiki/Cathédrale_Saint-Donatien_de_Bruges" title="http://fr.wikipedia.org/wiki/Cathédrale_Saint-Donatien_de_Bruges" id="cathedrale-saint-donatien" class="yellow">cathédrale Saint-Donatien</a>: <a href="https://fr.wikipedia.org/wiki/La_Vierge_au_chanoine_Van_der_Paele" title="https://fr.wikipedia.org/wiki/La_Vierge_auchanoine_Van_der_Paele" id="van-der-paele" class="yellow">“<ruby lang="fr">la&#160;Vierge&#160;au&#160;chanoine&#160;Van&#160;der&#160;Paele<rp>(</rp><rt lang="nl">Madonna&#160;met&#160;kanunnik&#160;Joris&#160;vn&#160;der&#160;Paele</rt><rp>)</rp></ruby>”</a>.</p>
      </article></section>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-640.jpg" title="Jan VAN EYCK, “la Vierge au chanoine Van der Paele”, Musée Groeninge, Bruges (Brugge)" alt="Jan VAN EYCK, “la Vierge au chanoine Van der Paele”, Musée Groeninge, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1920.jpg 1920w"></picture><figcaption>Jan VAN EYCK, <ruby lang="fr">la&#160;Vierge&#160;au&#160;chanoine&#160;van&#160;der&#160;Paele<rp>(</rp><rt style="color:#999;font-size: 70%;letter-spacing: 2px;" lang="nl">Madonna&#160;met&#160;kanunnik&#160;Joris&#160;van&#160;der&#160;Paele</rt><rp>)</rp></ruby>, Musée Groeninge, Bruges</figcaption>
      </figure>
    </article></section>

    <section><article>
      <h4 class="yellow">l'innovation de Memling sur le dispositif architural par rapport à Van Eyck</h4>
      <section><article>
        <p>Comme dans de nombreuses autres de ses œuvres, Memling enlève à l'abside <span style="color: #e6a64d;">murs</span>, <span style="color: #e6a64d;">fenêtres</span> et rend <span style="color: #e6a64d;">continu le regard vers l'extérieur</span>.</p>
      </article></section>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, vue du panneau central, le Couronnement de la Vierge, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, vue du panneau central, le Couronnement de la Vierge, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1920.jpg 1920w"></picture><figcaption>vue d'ensemble du panneau central</figcaption>
      </figure>
      <section><article>
        <p>Six colonnes marbrées de rouge et de brun sont disposées en demi-cercle sur un carrelage et doublées à l'extérieur par un deuxième demi-cercle de pilastres fasciculés gris foncé.
        Leurs bases sont reliées par la ligne du bord du dallage qui fait figurer au sol un polygone.</p>
        <p>Les minces ouvertures verticales entre les colonnes donnent sur un <span style="color: #e6a64d;">paysage visuellement continu avec des ruines et des bâtiments</span>, ouvert sur le lointain, horizon et infini.</p>
      </article></section>
    </article></section>
  </article></section>
</article>

<aside>
  <h3 id="note">Notes</h3>
  <section><article>
    <h4 id="note-devotion-moderne">la <ruby lang="fr">dévotion<rp>(</rp><rt lang="la">devotio</rt><rp>)</rp>&#160;<rp>(</rp><rt lang="la">&#160;</rt><rp>)</rp>moderne<rp>(</rp><rt lang="la">moderna</rt><rp>)</rp></ruby></h4>
    <section><article>
      <div class="notices yellow">
      <p>Né un peu plus au nord dans les Pays-Bas actuels, dans la région d'Utrecht à la fin du XIV<sup style="color:#e6a64d;">ème</sup> et au début du XV<sup style="color:#e6a64d;">ème</sup> siècle, la <ruby lang="fr">dévotion<rp>(</rp><rt lang="la">devotio</rt><rp>)</rp>&#160;<rp>(</rp><rt lang="la">&#160;</rt><rp>)</rp>moderne<rp>(</rp><rt lang="la">moderna</rt><rp>)</rp></ruby> est initiée par un homme, <a href="https://fr.wikipedia.org/wiki/Gérard_Groote" title="https://fr.wikipedia.org/wiki/Gérard_Groote" id="gerard-groote" class="yellow">Gérard Groote</a>, qui critique la piété de son temps, la juge trop austère et trop éloignée du monde
      En réaction, il exhorte le croyant à laisser le christ habiter au plus profond de lui-même.
      Cette présence du christ a vocation selon lui à produire de la simplicité.
      Le croyant peut alors exercer une action conforme à la vertu à laquelle la foi l'appelle, de manière naturelle, là où il se trouve.</p>
      </div>
      <footer>
        <ul>
          <li>retour au texte <a href="#renvoi-devotion-moderne" title="renvoi mouvement">«<ruby lang="fr">dévotion<rp>(</rp><rt lang="la">devotio</rt><rp>)</rp>&#160;<rp>(</rp><rt lang="la">&#160;</rt><rp>)</rp>moderne<rp>(</rp><rt lang="la">moderna</rt><rp>)</rp></ruby>»</a> ...une présentation détaillée de ce mouvement se trouve en note ↑</a></li>
        </ul>
      </footer>
    </article></section>

    <hr>

    <section><article>
      <div class="footnotes">
        <ol>
          <li id="fn:4">
            <p>Nous suivons les références données dans l'article «l'Imitation de Jésus-Christ» de Wikipedia (date de consultation: 21 août 2018), à savoir:</p>
            <ul>
              <li>Yann Sordet, Un succès de librairie européen: l'Imitatio Christi (1470-1850), Paris, Bibliothèque Mazarine; Editions des cendres, 2012, 195 p. (ISBN 979-10-90853-01-0), p. 11.</p></li>
            </ul>
            <p>D'après les spécialistes, son auteur est un moine: <a href="https://fr.wikipedia.org/wiki/Thomas_a_Kempis" title="https://fr.wikipedia.org/wiki/Thomas_a_Kempis">Thomas A KEMPIS</a>.</p>
          </li>
        </ol>
      </div>
      <footer>
        <ul>
          <li><a href="#fnref1:4" rev="footnote" class="footnote-backref">retour au texte ↩</a></li>
        </ul>
      </footer>
    </article></section>

    <hr>

    <section><article>
      <div class="footnotes">
        <ol>
          <li id="page-4-fn:5">
            <p>source: <cite>L'imitation de notre Seigneur Jésus Christ</cite>, trad. de F. de Lamennais, Éd. Arts et Métiers graphiques, Paris, 1946, p. 59-60, II, 4, 1-2 (partie II, chapitre 4, paragraphes 1 et 2).</p>
            <p>D'après les spécialistes, son auteur est un moine: <a href="https://fr.wikipedia.org/wiki/Thomas_a_Kempis" title="https://fr.wikipedia.org/wiki/Thomas_a_Kempis">Thomas A KEMPIS</a>.</p>
          </li>
        </ol>
      </div>
      <footer>
        <ul>
          <li><a href="#page-4-fnref1:5" rev="footnote" class="footnote-backref">retour au texte ↩</a></li>
        </ul>
      </footer>
    </article></section>
  </article></section>
</aside>

<!-- Page 5 --><hr>

<article>
  <h3 id="organisation-du-recit" class="yellow">organisation du récit pictural des légendes de Jean le Baptiste, Jean l'Évangéliste, de l'Hôpital Saint-Jean</h3>
  <section><article>
    <h4 class="yellow">quantité de petites scènes</h4>
    <p>Le récit s'organise autour de quantité de <span style="color: #e6a64d;">petites scènes</span></p>
    <ul>
      <li>contant <span style="color: #e6a64d;">les deux légendes</span>,
        <ul>
          <li>de Jean le Baptiste,</li>
          <li>et Jean l'Évangéliste,</li>
        </ul>
      </li>
      <li>et représentant <span style="color: #e6a64d;">la place de la Grue</span> de Bruges liée au commanditaire, l'Hôpital Saint-Jean.</li>
    </ul>
  </article></section>

  <section><article>
    <h4 class="yellow">le récit débute par les chapiteaux de colonnes</h4>
    <section><article>
      <p>Les deux légendes débute spatialement avec les <span style="color: #e6a64d;">scènes sculptées</span> situés au-dessus de chaque saint au niveau des <span style="color: #e6a64d;">chapiteaux de colonnes</span>.</p>
    </article></section>
    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, de gauche à droite: les 4 châpiteaux, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, de gauche à droite: les 4 châpiteaux, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1920.jpg 1920w"></picture><figcaption>détails du panneau central, de gauche à droite: les 4 châpiteaux</figcaption>
    </figure>
  </article></section>

  <section><article>
    <h4 class="yellow">le récit se poursuit de petites scènes dans le lointain</h4>
    <section><article>
      <p>Cette manière d'ordonner la composition qui se retrouve dans de nombreuses autres œuvres de Memling reprend les techniques de mise en page de l'enluminure <sup id="fnref1:6"><a href="#fn:6" class="footnote-ref">note 1</a></sup>: les différentes scènes sont étagées jusqu'à un horizon placé très haut.</p>
      <p>De <span style="color: #e6a64d;">petites scènes</span> prennent place dans le lointain <span style="color: #e6a64d;">à l'intérieur des différents cadrages</span> opérés par les colonnes.</p>
    </article></section>
    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, “ouverture sur le lointain”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, “ouverture sur le lointain”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1920.jpg 1920w"></picture><figcaption>détails du panneau central, “ouverture sur le lointain”<br>à gauche, les scènes de la légende de Jean le Baptiste, à droite, celles de Jean l'Évangéliste</figcaption>
    </figure>
  </article></section>

  <section><article>
    <h4 class="yellow">le récit se conclut sur chacun des deux volets intérieurs</h4>
    <section><article>
      <p>Le récit des deux légendes se poursuit ensuite sur chacun des deux volets intérieurs.</p>
    </article></section>
    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, les 2 volets intérieurs: à gauche, Jean le Baptiste décapité sur ordre d'Hérode, à droite, Jean l'Évangéliste à Patmos, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, les 2 volets intérieurs: à gauche, Jean le Baptiste décapité sur ordre d'Hérode, à droite, Jean l'Évangéliste à Patmos, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1920.jpg 1920w"></picture><figcaption>les 2 volets intérieurs: au premier plan à gauche, Jean le Baptiste décapité sur ordre d'Hérode, à droite, Jean l'Évangéliste à Patmos</figcaption>
    </figure>
    <section><article>
      <p>Sur chaque volet, un épisode forme <span style="color: #e6a64d;">une scène principale au premier plan</span>, complétée dans le récit par de <span style="color: #e6a64d;">petites scènes dans le lointain</span>.</p>
      <ul>
        <li>à gauche, <span style="color: #e6a64d;">Jean le Baptiste</span> vient d'être décapité sur ordre d'<span style="color: #e6a64d;">Hérode</span>,</li>
        <li>à droite, <span style="color: #e6a64d;">Jean l'Évangéliste</span> reçoit «dévoilement» du texte de l'Apocalypse à <span style="color: #e6a64d;">Patmos</span>.</li>
      </ul>
    </article></section>
  </article></section>

  <section><article>
    <h4 class="yellow">la place de la Grue, symbolise l'hôpital Saint-Jean</h4>
    <section><article>
      <p>La vue de la <ruby style="color:#e6a64d;" lang="fr">place&#160;de&#160;la&#160;Grue<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 1px;" lang="nl">Kraanplaats</rt><rp>)</rp></ruby> et de <span style="color: #e6a64d;">l'église Saint-Jean</span>, à l'arrière-plan à droite de la draperie d'honneur derrière la vierge, derrière Jean l'Évangéliste se rapporte directement aux <span style="color: #e6a64d;">religieux</span> dirigeant l'hôpital <span style="color: #e6a64d;">commanditaires de l'œuvre</span> et à <span style="color: #e6a64d;">l'histoire</span> de l'institution commanditaire.</p>
    </article></section>
    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, vue de la place de la Grue et l'église saint-Jean, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, vue de la place de la Grue et l'église saint-Jean, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1920.jpg 1920w"></picture><figcaption>détail du panneau central, vue de la place de la Grue et l'église Saint-Jean</figcaption>
    </figure>
    <section><article>
      <p><span style="color: #e6a64d;">Deux frères de l'hôpital</span> sont ainsi représentés en train de <span style="color: #e6a64d;">mesurer le vin de bordeaux</span> importé arrivant à Bruges.</p>
      <p>Cela nous rappelle que l'hôpital s'était vu confié vers <time datetime="1300">1300</time> par la ville une <span style="color: #e6a64d;">charge communale</span>, le <span style="color: #e6a64d;">«droit de jauger»</span> dont il tenait ses revenus.</p>
    </article></section>
  </article></section>
</article>

<hr>

<aside>
  <article>
    <div class="footnotes">
    <ol>
      <li id="fn:6">
        <p>notes:</p>
        <p>«à l'époque où l'artiste s'établit à Bruges, la ville est l'un des principaux centres de production de livres enluminés des Pays-Bas bourguignons </p>
        <p>(...)</p>
        <p>Memling comptait parmi ses relations brugeoises un miniaturiste: <a href="https://fr.wikipedia.org/wiki/Willem_Vrelant" title="https://fr.wikipedia.org/wiki/Willem_Vrelant">Willem Vrelant</a>.
        À la tête de la plus prolifique officine de la ville, Vrelant était, comme Memling, un immigrant.
        Originaire d'Utrecht, il est mentionné au sein de la guilde des libraires de Bruges de <time datetime="1454">1454</time> à sa mort en <time datetime="1481">1481</time>.
        Habitant tous deux dans la Sint-Jorisstraat, Vrelant et Memling étaient presque des voisins.</p>
        <p>(...)</p>
        <p>Si l'on se place du point de vue d'une représentation spatiale visuellement convaincante, le rapport entre les deux figures du premier plan et le reste du tableau (... une) incohérence régit le rapport entre la figure principale et le bois du plan intermédiaire.</p>
        <p>(...)</p>
        <p>On retrouve d'une œuvre à l'autre le même étagement cumulatif des différentes zones du paysage jusqu'à un horizon placé très haut (...) chez Vrelant»</p>
      </li>
    </ol>
    </div>
    <footer>
      <p>source: ouvrage de Philippe LORENTZ référencé en <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean#lorentz" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean#lorentz" id="renvoi-lorentz-2" class="yellow">bibliographie</a>.</p>
      <p>&#160;<a href="#fnref1:6" rev="footnote" class="footnote-backref">retour au texte ↩</a></p>
    </footer>
  </article>
</aside>

<!-- Page 6 --><hr>

<article>
<h3 id="legendes" class="yellow">scènes des légendes de Jean le Baptiste et Jean l'Évangéliste selon <cite>La Légende Dorée</cite></h3>
<section><article>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1280.webp 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1600.webp 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, les 2 volets intérieurs: à gauche, Jean le Baptiste décapité sur ordre d'Hérode, à droite, Jean l'Évangéliste à Patmos, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, les 2 volets intérieurs: à gauche, Jean le Baptiste décapité sur ordre d'Hérode, à droite, Jean l'Évangéliste à Patmos, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-840.jpg 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1280.jpg 1280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1600.jpg 1600w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1920.jpg 1920w"></picture><figcaption>les 2 volets intérieurs: au premier plan à gauche, Jean le Baptiste décapité sur ordre d'Hérode, à droite, Jean l'Évangéliste à Patmos</figcaption>
  </figure>
  <section><article>
    <section><article>
      <p>Nous suivons ici chacun des <span style="color: #e6a64d;">deux récits</span> sur lesquels Memling s'est sans doute fondé, suivant ce que rapporte <a href="https://fr.wikipedia.org/wiki/Jacques_de_Voragine" title="https://fr.wikipedia.org/wiki/Jacques_de_Voragine" id="jacques-de-voragine" class="yellow">Jacques de Voragine</a> dans <a href="https://fr.wikipedia.org/wiki/La_Légende_dorée" title="https://fr.wikipedia.org/wiki/La_égende_dorée" id="legende-doree" class="yellow"><cite>la Légende Dorée</cite></a>.</p>
    </article></section>

    <section><article>
      <p>Comme, dans les scène qu'a peinte Memling, ces textes sont fidèlement représentés, nous invitons les personnes qui qui souhaiteraient ressentir plus profondément la relation du triptyque aux différents texte à les lire directement:</p>
      <ul>
        <li>lire le <a href="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:18" title="https://francois-vidit.com/docs/fr/saint-jean/page:18" class="yellow">texte original de la <cite>Légende de Jean l'Évangéliste</cite> selon le chapître 9 de <cite>La Légende Dorée</cite></a>,</li>
        <li>lire le <a href="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:19" title="https://francois-vidit.com/docs/fr/saintjean/page:19" class="yellow">texte original de la <cite>Légende de Jean l'Évangéliste</cite> devant la Porte Latine selon le chapître 65 de <cite>La Légende Dorée</cite></a>.</li>
      </ul>
    </article></section>
  </article></section>

  <section><article>
    <h4 id="legende-de-jean-le-baptiste" class="yellow">scènes de <cite>la légende de Jean le Baptiste</cite> selon <cite>La Légende Dorée</cite></h4>
    <section><article>
      <section><article>
        <p>Nous commençons par Jean le Baptiste qui, au niveau de la chronologie, précède Jean l'Évangéliste.</p>
        <p>En haut et à gauche de l'arrière-plan du panneau central et sur le volet intérieur gauche apparaissent des scènes de <span style="color: #e6a64d;">sa vie</span> et de <span style="color: #e6a64d;">son martyre</span>.</p>
      </article></section>
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, “ouverture sur le lointain de la moitié gauche”: scènes de la légende de Jean le Baptiste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, “ouverture sur le lointain de la moitié gauche”: scènes de la légende de Jean le Baptiste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1920.jpg 1920w"></picture><figcaption>détails du panneau central, “ouverture sur le lointain de la moitié gauche”: scènes de la légende de Jean le Baptiste</figcaption>
      </figure>
    </article></section>

    <section><article>
      <h5 class="yellow">Jean le Baptiste selon les documents d'histoire</h5>
      <p>Sur le plan historique, Jean est décrit comme un <span style="color: #e6a64d;">prédicateur</span> juif en <a href="https://fr.wikipedia.org/wiki/Galilée_(région)" title="https://fr.wikipedia.org/wiki/Galilée_(région)" id="galilee" class="yellow">Galilée</a> de cette époque de <a href="https://fr.wikipedia.org/wiki/Jésus_de_Nazareth" title="https://fr.wikipedia.org/wiki/Jésus_de_Nazareth" id="jesus-denazareth" class="yellow">Jésus de Nazareth</a> selon le témoignage de <a href="https://fr.wikipedia.org/wiki/Flavius_Josèphe" title="https://fr.wikipedia.org/wiki/Flavius_Josèphe" id="flavius-josephe" class="yellow">Flavius Josèphe</a>, historien romain de confession juive du 1<sup style="color:#555;">er</sup> siècle <span style="color: #999;"><a href="https://fr.wikpedia.org/wiki/Antiquités_judaïques" title="https://fr.wikipedia.org/wiki/Antiquités_judaïques" id="antiquites-judaiques" class="yellow">(<cite>Antiquités judaïques</cite></a>, livre XVIII, chap.5, 118)</span>.</p>
      <p>La Galilée de l'époque est une province de l'empire romain qui connaît de nombreuses révoltes.</p>
      <p>Sa population, majoritairement juive, est très croyante;
      les écrits bibliques annoncent la venue d'un envoyé de dieu dont l'action permettra au peuple juif de recouvrer son indépendance et son organisation religieuse, notamment de reconstruire le <a href="https://fr.wikipedia.org/wiki/Temple_de_Salomon" title="https://fr.wikipedia.org/wiki/Temple_de_Salomon" id="temple-de-salomon" class="yellow">temple de Salomon</a> à Jérusalem.</p>
    </article></section>

    <section><article>
      <h5 class="yellow">Jean le Baptiste selon les textes de la foi chrétienne</h5>
      <section><article>
        <p>Sur le plan de la foi chrétienne, <span style="color: #e6a64d;">Jean</span> est, selon <cite>l'évangile de Luc</cite> <span style="color: #999;">(chap.1,5-25)</span>, <span style="color: #e6a64d;">le fils de</span> <a href="https://fr.wikipedia.org/wiki/Zacharie_(père_de_Jean_le_Baptiste)" title="https://fr.wikipedia.org/wiki/Zacharie_(père_de_Jean_le_Baptiste)" id="zaccharie" class="yellow">Zaccharie</a>, un vieux prêtre juif de la campagne galiléenne.</p>
        <p>Dieu annonce à Zacharie par <a href="https://fr.wikipedia.org/wiki/Gabriel_(archange)" title="https://fr.wikipedia.org/wiki/Gabriel_(archange)" id="archange-gabriel" class="yellow">l'archange Gabriel</a> la naissance de Jean, alors que Zaccharie a été choisi par hasard pour se rendre à Jérusalem et qu'il prie dans le temple.</p>
      </article></section>

      <section><article>
        <h6 class="yellow">Scène de l'apparition de Gabriel à Zaccharie sur le chapiteau de gauche</h6>
        <section><article>
          <p>C'est ce que Memling le représente sur le chapiteau de gauche.</p>
        </article></section>
        <figure>
          <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-280.webp 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-380.webp 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-480.webp 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-640.webp 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-840.webp 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1280.webp 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1600.webp 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, chapiteau de colonne, “l'apparition de l'Archange Gabriel à Zaccharie”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, chapiteau de colonne, “l'apparition de l'Archange Gabriel à Zaccharie”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-280.jpg 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-380.jpg 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-480.jpg 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-640.jpg 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-840.jpg 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1280.jpg 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1600.jpg 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1920.jpg 1920w"></picture><figcaption>détail du panneau central, chapiteau de colonne, “l'apparition de l'archange Gabriel à Zaccharie”. L'archange lui annonce la naissance prochaine d'un fils, il en perd la parole.</figcaption>
        </figure>
        <section><article>
          <p>Le texte indique que Zaccharie en perd la parole.</p>
        </article></section>
      </article></section>

      <section><article>
        <h6 class="yellow">Scène de la naissance de Jean sur le chapiteau de droite</h6>

        <section><article>
          <p>Sa naissance est représentée sur le chapiteau placé à droite.</p>
        </article></section>

        <figure>
          <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-280.webp 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-380.webp 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-480.webp 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-640.webp 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-840.webp 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1280.webp 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1600.webp 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, chapiteau de colonne, “Naissance de Jean le Baptiste”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, chapiteau de colonne, “Naissance de Jean le Baptiste”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-280.jpg 280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-380.jpg 380w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-480.jpg 480w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-640.jpg 640w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-840.jpg 840w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1280.jpg 1280w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1600.jpg 1600w,
          https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1920.jpg 1920w"></picture><figcaption>détail du panneau central, chapiteau de colonne, “Naissance de Jean le Baptiste”</figcaption>
        </figure>
      </article></section>

      <section><article>
        <h6 class="yellow">Choix du nom de Jean par Zaccharie</h6>

        <section><article>
          <p>Le nom de ce fils, «Jean», est lui aussi un des enjeux du récit <span style="color: #999;">(Luc chapître 1, versets 59 à 63)</span>:</p>
          <blockquote cite="https://www.aelf.org/bible/Lc/1#right-col">
            <p>«Le huitième jour, ils vinrent pour la circoncision de l’enfant, et ils voulaient l’appeler Zaccharie, du nom de son père. Mais sa mère prit la parole, et dit:</p>
            <p><span style="color: #e6a64d;"><q>Non, il s'appelera Jean</q></span>.</p>
            <p>On lui dit:</p>
            <p><span style="color: #e6a64d;"><q>Personne dans ta famille ne porte ce nom-là!</q></span></p>
            <p><span style="color: #999;">(…)</span>.</p>
            <p>Zacharie se fit donner une tablette sur laquelle il écrivit:</p>
            <p><span style="color: #e6a64d;"><q>Jean est son nom</q></span>».</p>
          </blockquote>
          <p>Du point de vue de la foi, <span style="color: #e6a64d;">Jean le Baptiste vient</span> donc <span style="color: #e6a64d;">au monde selon de la volonté de dieu</span>.</p>
        </article></section>
      
      </article></section>
    </article></section>
  </article></section>
</article></section>
</article>

<!-- Page 7 --><hr>

<article>
  <section><article>
    <h6 class="yellow">Scène de l'ascèse de Jean dans le lointain du panneau central</h6>

    <section><article>
      <p>Il mène ensuite une vie exemplaire d'ascète <q>dans le désert</q> <span style="color: #999;">(Luc 1,80)</span>.</p>
      <p>Memling transpose cette scène dans la forêt.</p>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, “Jean le Baptiste priant dans la forêt”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, “Jean le Baptiste priant dans la forêt”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “Jean le Baptiste priant dans la forêt”</figcaption>
    </figure>
  </article></section>

  <section><article>
    <h6 class="yellow">Scène de l'apostolat de Jean dans le lointain du panneau central</h6>

    <section><article>
      <p>On le voit également <q>proclamer un baptême de conversion pour le pardon des péchés</q> <span style="color: #999;">(Luc chapître 3, verset 3)</span>.</p>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, “Jean le Baptiste proclamant un baptême de conversion pour le pardon des péchés”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, “Jean le Baptiste proclamant un baptême de conversion pour le pardon des péchés”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “Jean le Baptiste proclamant un baptême de conversion pour le pardon des péchés”</figcaption>
    </figure>

    <section><article>
      <p>Jean innove dans le judaïsme de son époque:</p>
      <p>il préconise le pardon des péchés non plus par le sacrifice d'animaux au temple par crémation, mais par <span style="color: #e6a64d;">“baptême”</span>, c'est-à-dire, selon l'étymologie de ce mot, <span style="color: #e6a64d;">“immersion”</span> dans l'eau.</p>
    </article></section>
  </article></section>

  <section><article>
    <h6 class="yellow">Scène de Jean le Baptiste baptisant Jésus sur les rives du Jourdain dans le lointain du volet intérieur gauche</h6>
    
    <section><article>
      <p>Selon les écrits bibliques, il <span style="color: #e6a64d;">annonce la venue de l'envoyé de dieu</span> en la personne de <a href="https://fr.wikipedia.org/wiki/Jésus_de_Nazareth" title="https://fr.wikipedia.org/wiki/Jésus_de_Nazareth" class="yellow">Jésus de Nazareth</a>, un de ses contemporains.</p>
      <p>Il la reconnaît par un baptème dans les eaux du <a href="https://fr.wikipedia.org/wiki/Joudain" title="https://fr.wikipedia.org/wiki/Jourdain" id="jourdain" class="yellow">Jourdain</a>: cette scène apparaît en haut du volet intérieur gauche.</p>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/bapt%C3%A8me-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur gauche, “Jean le Baptiste baptisant Jésus sur les bords du Jourdain”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur gauche, “Jean le Baptiste baptisant Jésus sur les bords du Jourdain”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur gauche, “Jean le Baptiste baptisant Jésus sur les bords du Jourdain”</figcaption>
    </figure>

    <section><article>
      <p>Sur l'autre rive, <span style="color: #e6a64d;">Jean le Baptiste</span> présente Jésus des mots <q><ruby style="color:#e6a64d;" lang="fr">Voici&#160;l'agneau&#160;de&#160;dieu<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="la">Ecce&#160;agnus&#160;dei</rt><rp>)</rp></ruby></q> à ses deux premiers disciples <a href="https://fr.wikipedia.org/wiki/André_(apôtre)" title="https://fr.wikipedia.org/wiki/André_(apôtre)" id="andre" class="yellow">André</a> et <a href="https://fr.wikipedia.org/wiki/Jean_(apôtre)" title="https://fr.wikipedia.org/wiki/Jean_(apôtre)" id="jean-l-apotre" class="yello">Jean l'Apôtre</a>; ceux-ci se joignent à lui.</p>
    </article></section>
  </article></section>

  <section><article>
    <h6 class="yellow">Scène de l'arrestation de Jean dans le lointain du panneau central</h6>
    <section><article>
      <p>À partir de là, son histoire est tragique.</p>
      <p>En effet, <a href="https://fr.wikipedia.org/wiki/Hérode_Antipas" title="https://fr.wikipedia.org/wiki/Hérode_Antipas" id="herode-antipas" class="yellow">Hérode Antipas</a>, le tétrarque, c'est-à-dire gouverneur militaire romain, de Galilée et de Pérée, se marie à “la femme de <a href="https://fr.wikipedia.org/wiki/Hérode_Boëthos" title="https://fr.wikipedia.org/wiki/Hérode_Boëthos" id="herde-boethos" class="yellow">son frère Philippe</a>”, <a href="https://fr.wikipedia.org/wiki/Hérodiade" title="https://fr.wikipedia.org/wiki/Hérodiade" id="herodiade">Hérodiade</a> <span style="color: #999;">(Marc chap.6,17)</span>;</p>
      <p>comme la foi judaïque regarde tout mariage avec la femme de son frère comme une <span style="color: #e6a64d;"><q>souillure</q></span> et <span style="color: #e6a64d;">l'interdit</span> <span style="color: #999;">(Lévitique chap.18,16; chap.20,21)</span>, Jean, en tant que figure du mouvement religieux indépendantiste judaïque, prend position: il condamne Hérode publiquement.</p>
      <p><span style="color: #e6a64d;">Hérode craint</span> que cela ne suscite <q><span style="color: #e6a64d;">une révolte</span>, la foule semblant prête à suivre en tout les conseils de cet homme</q>.</p>
      <p>il aime donc mieux s'emparer de lui avant que quelque trouble se produise à cause de lui, que d'avoir à se repentir plus tard si un mouvement avait lieu <span style="color: #999;">(<cite>Antiquités judaïques</cite>, livre XVIII, chap.5,118)</span> <sup id="page-7-fnref1:2"><a href="#page-7-fn:2" class="footnote-ref">note 1</a></sup>.</p>
      <p>En cas de troubles causés par les partisans de Jean, Hérode devait répondre de la situation aux autorités romaines, qui pouvait le destituer:</p>
      <p>il donne donc <span style="color: #e6a64d;">“l’ordre d’arrêter Jean”</span> <span style="color: #999;">(Marc chap.6,17)</span>.</p>
    </article></section>
    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, “Arrestation de Jean le Baptiste par ordre d'Hérode Antipas”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, “Arrestation de Jean le Baptiste par ordre d'Hérode Antipas”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “Arrestation de Jean le Baptiste par ordre d'Hérode Antipas”</figcaption>
    </figure>
    <section><article>
      <p>Sur le panneau central au-dessus de l'agneau blanc, <span style="color: #e6a64d;">Jean est emmené</span> de force en direction de la prison sur le volet de gauche de l'actuelle ville de <a href="https://fr.wikipedia.org/wiki/Macheronte" title="https://fr.wikipedia.org/wiki/Macheronte" id="macheronte" class="yellow"><ruby style="color:#e6a64d;" lang="fr">Machéronte<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="la">μάχαιρα</rt><rp>)</rp></ruby></a>, dont l'éthymologie en grec ancien signifie “épée” et qui se situe dans l'actuelle Jordanie.</p>
    </article></section>
  </article></section>
</article>

<hr>

<aside>
  <article>
    <div class="footnotes">
    <ol>
      <li id="fn:2">
        <p>note:</p>
        <p>pour information, cette citation est au passé, je la transpose au présent.</p>
      </li>
    </ol>
    </div>
    <footer>
      <p><a href="#page-7-fnref1:2" rev="footnote" class="footnote-backref">retour au texte ↩</a></p>
    </footer>
  </article>
</aside>

<!-- Page 8 --><hr>

<article>
  <section><article>
    <h6 class="yellow">Vue d'ensemble du volet intérieur gauche</h6>

    <section><article>
      <p>L'action se poursuit sur le volet intérieur gauche.</p>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, vue du volet intérieur gauche, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, vue du volet intérieur gauche, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1920.jpg 1920w"></picture><figcaption>Le volet intérieur gauche</figcaption>
    </figure>
  </article></section>

  <section><article>
    <h6 class="yellow">Scène de la danse de Salomé représentée dans le palais d'Hérode, volet intérieur gauche</h6>

    <section><article>
      <p>Pour réussir à faire mourir Jean sans provoquer de mouvement de troubles de ses partisans, <span style="color: #e6a64d;">Hérode imagine une mise en scène</span>.</p>
      <p>“Le jour de son anniversaire”, il organise <q>un dîner pour ses dignitaires</q>, chefs de l’armée et notables de la Galilée.</p>
      <p>La fille d’Hérodiade, <a href="https://fr.wikipedia.org/wiki/Salomé_(fille_d'Hérodiade)" title="https://fr.wikipedia.org/wiki/Salomé_(fille_d'Hérodiade)" id="salome" class="yellow">Salomé</a> fait “son entrée” et danse.</p>
      <p>La <span style="color: #e6a64d;">“Danse de Salomé”</span> prend place dans une salle de la tour du palais d'Hérode en haut à gauche du volet gauche, dont Memling a éventré le mur afin de montrer la scène.</p>
      <p>Au-dessus, des statues installées dans des niches représentent un homme nu entre deux femmes nues, figures païennes: elles qualifient la nature adultère du lieu et du comportement d’Hérode.</p>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 77px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur gauche, “Arrestation de Jean le Baptiste par ordre d'Hérode Antipas”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur gauche, “Arrestation de Jean le Baptiste par ordre d'Hérode Antipas”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur gauche, la “Danse de Salomé”</figcaption>
    </figure>
  </article></section>

  <section><article>
    <p>La mise en scène se poursuit</p>
    <p>Hérode fait mine que sa danse lui a plu. <span style="color: #e6a64d;">Pour se dégager de la responsabilité de la mort de Jean</span>, dit <span style="color: #999;">(Marc, chapître 6, versets 22 à 24)</span>:</p> 
    <blockquote cite="https://www.aelf.org/bible/Mc/6#right-col">
      <ol class="doc">
        <li value="22">
          <p class="conversation">
            <span style="color: #e6a64d;">“Tout ce que tu me demanderas, je te le donnerai, même si c’est la moitié de mon royaume.”</span>.
          </p>
        </li>
        <li value="23">
          <p>Salomé sort pour dire à sa mère:</p>
          <p class="conversation">
            <span style="color: #e6a64d;">“qu’est-ce que je vais demander?”</span>»
          <p>Hérodiade répond:</p>
          <p class="conversation">
            <span style="color: #e6a64d;">“la tête de Jean, celui qui baptise”</span>.
          </p>
        </li>
        <li value="24">
          <p>Aussitôt la jeune fille s’empresse de retourner auprès du roi, et lui fait cette demande:</p>
          <p class="conversation">
            <span style="color: #e6a64d;">“Je veux que, tout de suite, tu me donnes sur un plat la tête de Jean le Baptiste”</span>.
          </p>
        </li>
      </ol>
    </blockquote>
    <p><span style="color: #999;">(Marc, chapître 6, versets 24 à 29)</span></p>
    <p>Ainsi, Hérode peut apparaître mettre à mort Jean contre son gré.</p>
    <p>La preuve que tout ce récit est bien une mise en scène destinée à permettre de mettre à mort Jean sans provoquer une révolte des partisans de Jean, c'est, comme l'explique Jacques de Voragine, que si Salomé demande à Hérode <span style="color: #e6a64d;">“la mort de son père <a href="https://fr.wikipedia.org/wiki/Hérode_Boëthos" title="https://fr.wikipedia.org/wiki/Hérode_Boëthos" id="herode-boethos-2" class="yellow">Philippe</a> ou de sa mère <a href="https://fr.wikipedia.org/wiki/Hérodiade" title="https://fr.wikipedia.org/wiki/Hérodiade" id="herodiade-2" class="yello">Hérodiade</a>”</span>, Hérode ne peut y consentir <span style="color: #999;">(<cite>La Légende dorée</cite> chapître 121, I. <sup id="page-8-fnref1:1"><a href="#page-8-fn:1" class="footnote-rf">note 1</a></sup>)</span>.</p>
    <p>La mise en scène a bien pour seul but de ne pas faire porter la responsabilité de la mise à mort de Jean à Hérode en le présentant faussement aux yeux de l'histoire comme accédant à cette demande contre sa volonté.</p>
  </article></section>

  <section><article>
    <h6 class="yellow">Scène de la décollation de Jean dans la cour du palais d'Hérode, du volet intérieur gauche</h6>
    <section><article>
      <p>L'histoire s'accomplit donc, tragique.</p>
      <p>Un garde va <q>décapiter Jean dans la prison</q> <span style="color: #999;">(Marc, chapître 6, versets 28)</span>.</p>
    </article></section>
    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur gauche, “Décollation de Jean le Baptiste”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur gauche, “Décollation de Jean le Baptiste”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur gauche, “Décollation de Jean le Baptiste”</figcaption>
    </figure>
  </article></section>
</article>

<hr>

<aside>
  <article>
    <div class="footnotes">
      <ol>
        <li id="page-8-fn:1">
        <p>propos de <a href="https://fr.wikipedia.org/wiki/Jérôme_de_Stridon" title="https://fr.wikipedia.org/wiki/Jérôme_de_Stridon" id="saint-jerome" class="yellow">saint Jérôme</a> rapportés par Jacques de Voragine.</p>
        </li>
      </ol>
    </div>
    <footer>
      <p><a href="#page-8-fnref1:1" rev="footnote" class="footnote-backref">retour au texte ↩</a></p>
    </footer>
  </article>
</aside>

<!-- Page 9 --><hr>

<article>
  <section><article>
    <h6 class="yellow">Détail de la décollation de Jean le Baptiste, volet intérieur gauche</h6>

    <section><article>
      <p>Memling a agrandit la scène au premier plan du volet gauche: nous nous trouvons dans <span style="color: #e6a64d;">la cour intérieure du palais d'Hérode</span>.</p>
      <p>Le lieu d'exécution de la forteresse est relié au palais par <span style="color: #e6a64d;">un escalier</span> dans le fond.</p>
      <p><span style="color: #e6a64d;">Le bourreau</span> est représenté de dos déposant <span style="color: #e6a64d;">la tête dans le plat</span> que lui présente une <a href="https://fr.wikipedia.org/wiki/Salomé_(fille_d'Hérodiade)" title="https://fr.wikipedia.org/wiki/Salomé_(fille_d'Hérodiade)" id="salome-3" class="yellow">Salomé</a> à peine émue.</p>
  </article></section>
    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur gauche, “la tête de Jean le Baptiste”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, ��Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur gauche, “la tête de Jean le Baptiste”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur gauche, “la tête de Jean le Baptiste”</figcaption>
    </figure>

    <section><article>
      <p>À la gauche du bourreau représenté de dos, sont les deux disciples <a href="https://fr.wikipedia.org/wiki/André_(apôtre)" title="https://fr.wikipedia.org/wiki/André_(apôtre)" id="andre-2" class="yellow">André</a> et <a href="https://fr.wikipedia.org/wiki/Jean_(apôtre)" title="https://fr.wikipedia.org/wiki/Jean_(apôtre)" id="jean-l-apotre-2" class="yello">Jean l'Apôtre</a>.</p>
    </article></section>
  </article></section>

  <section><article>
    <h6 class="yellow">Inspiration de Memling sur Van Der Weyden pour la scène de la décollation de Jean le Baptiste, volet intérieur gauche</h6>

    <section><article>
      <p>Les historiens de l'art ont identifié dans les positions du bourreau et de Salomé <span style="color: #e6a64d;">une reprise par Memling d'une scène</span> de son maître, <a href="https://fr.wikipedia.org/wiki/Rogier_van_der_Weyden" title="https://fr.wikipedia.org/wiki/Rogier_van_der_Weyden" id="rogier-van-der-weyden" class="yellow">Rogier VAN DER WEYDEN</a>, alors qu'il était son assistant à Bruxelles.</p>
      <p>Il s'agit du <span style="color: #e6a64d;"><cite>Tryptique de saint Jean</cite></span> peint vers <time datetime="1450">1450</time>-<time datetime="1455">55</time> qui se trouve aujourd'hui à la <a href="https://fr.wikipedia.org/wiki/Gemäldegalerie_(Berlin)" title="https://fr.wikipedia.org/wiki/Gemäldegalerie_(Berlin)" id="gemaldegalerie" class="yellow"><ruby lang="fr">Galerie&#160;de&#160;peintures<rp>(</rp><rt lang="de">Gemäldegalerie</rt><rp>)</rp></ruby></a> des <a href="https://fr.wikipedia.org/wikiMusées_d'État_de_Berlin" title="https://fr.wikipedia.org/wiki/Musées_d'État_de_Berlin" id="musees-d-etat-de-berlin" class="yellow"><ruby lang="fr">Musées&#160;d'état&#160;de&#160;Berlin<rp>(</rp><rt lang="de">Staatliche&#160;Museen&#160;zu&#160;Berlin</rt><rp>)</rp></ruby></a> <span style="color: #999;">(inv. n°534B)</span>, ci-dessous.</p>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.jpg" title="Rogier VAN DER WEYDEN, “Triptyque de saint Jean”, détail du volet intérieur gauche, “Décollation de Jean le Baptiste”, Galerie de peintures, Musées d'État de Berlin, Berlin" alt="Rogier VAN DER WEYDEN, “Triptyque de saint Jean”, détail du volet intérieur gauche, “Décollation de Jean le Baptiste”, Galerie de peintures, Musées d'État de Berlin, Berlin" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur gauche, “Décollation de Jean le Baptiste”</figcaption>
    </figure>
  </article></section>

  <section><article>
    <h6 class="yellow">Scène du déterrement et de la crémation du corps de Jean le Baptiste dans le lointain, panneau central intérieur</h6>
    <section><article>
      <p>Le récit de Marc se poursuit: <span style="color: #e6a64d;"><q>Ayant appris cela, les disciples de Jean vinrent prendre son corps et le déposèrent dans un tombeau</q></span> <span style="color: #999;">(Marc,chapître 6, verset 29)</span>.</p>
      <p>D'après la tradition, celui-ci aurait été emmené loin des territoires contrôlés par Hérode Antipas, en Cisjordanie à <ruby style="color:#e6a64d;" lang="fr">Sébastée<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="grc">Σεβαστή</rt><rp>)</rp></ruby>, l'actuel village de <a href="https://fr.wikipedia.org/wiki/Sebastia" title="https://fr.wikipedia.org/wiki/Sebastia" id="sebastia" class="yellow"><ruby lang="fr">Sebastia<rp>(</rp><rt lang="ar">سبسطية</rt><rp>)</rp></ruby></a> et enterré auprès des prophètes <a href="https://fr.wikipedia.org/wiki/Élisée" title="https://fr.wikipedia.org/wiki/Élisée" id="elisee" class="yellow">Élisée</a> et <a href="https://fr.wikipedia.org/wiki/Abdias" title="https://fr.wikipedia.org/wiki/Abdias" id="abdias" class="yellow">Abdias</a>.</p>
      <p>Sur la gauche du panneau central, à droite, derrière Jean le Baptite, Memling a fait apparaître cette dernière scène de sa légende.</p>
      <p>Comme ses miracles ne cessaient de se produire sur le lieu de sépulture de Jean, pour combattre la foi chrétienne naissante, <a href="https://fr.wikipedia.org/wiki/Julien_(empereur_romain)" title=" https://fr.wikipedia.org/wiki/Julien_(empereur_romain)" id="julien-l-apostat" class="yellow">l'empereur romain Julien l'Apostat</a> ordonne de déterrer le corps, de le brûler et disperser ses cendres à travers champs.</p>
    </article></section>

    <figure>
      <picture><source sizes="(maxwidth: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, “le corps de Jean le Baptiste déterré et brûlé sur ordre de l'empereur Julien l'Apostat”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, “le corps de Jean le Baptiste déterré et brûlé sur ordre de l'empereur Julien l'Apostat”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “le corps de Jean le Baptiste déterré et brûlé sur ordre de l'empereur Julien l'Apostat”</figcaption>
    </figure>
  </article></section>

  <section><article>
    <h6 class="yellow">Détail du mur dans lequel est caché la tête de Jean le Baptiste, panneau central intérieur</h6>
    <section><article>
      <p>Mais les choses ne se passent pas comme prévu.</p>
      <p>Selon la légende, la tête aurait été ensevelie séparément par <span style="color: #e6a64d;">un potier de la ville d'Émesse</span>, l'actuelle <a href="https://fr.wikipedia.org/wiki/Homs" title="https://fr.wikipedia.org/wiki/Homs" id="homs" class="yellow"><ruby lang="fr">Homs<rp>(</rp><rt lang="ar">حمص</rt><rp>)</rp></ruby></a> en Syrie, puis serait apparue à <a href="https://fr.wikipedia.org/wiki/Marcel_d'pamée" title="https://fr.wikipedia.org/wiki/Marcel_d'Apamée" id="saint-marcel" class="yellow">saint Marcel</a> qui la découvre en suivant une étoile <span style="color: #999;">(<cite>La Légende dorée</cite> chapître 121, III.)</span>.</p>
      <p>Sa tête apparaît donc plus bas dans <span style="color: #e6a64d;">l'ouverture du mur</span>, derrière <span style="color: #e6a64d;">une pierre</span>.</p>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, “la tête de Jean le Baptiste dans l'ouverture d'un mur”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, “la tête de Jean le Baptiste dans l'ouverture d'un mur”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “la tête de Jean le Baptiste dans l'ouverture d'un mur”</figcaption>
    </figure>
    
    <section><article>
      <p>Ainsi se termine le récit de la légende de Jean le Baptiste selon <cite>La Légende Dorée</cite>.</p>
    </article></section>
  </article></section>
</article>

<!-- Page 10 --><hr>

<article>
  <h4 class="yellow" id="légende-de-jean-l’évangéliste">scènes de la légende de Jean l’Évangéliste selon <cite>La Légende Dorée</cite> et <cite>L'Apocalypse</cite></h4>
  <section><article>
    <h5 class="yellow">précisions sur Jean l’Évangéliste selon <cite>La Légende Dorée</cite> et <cite>L'Apocalypse</cite></h5>
    <section><article>

      <section><article>
        <p>Sur le panneau central en haut et à droite de l'arrière plan apparaissent des scènes de la légende de Jean l'Évangéliste.</p>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, “ouverture sur le lointain de la moitié droite”: scènes de la légende de Jean l'Évangéliste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, “ouverture sur le lointain de la moitié droite”: scènes de la légende de Jean l'Évangéliste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1920.jpg 1920w"></picture><figcaption>détails du panneau central, “ouverture sur le lointain de la moitié droite”: scènes de la légende de Jean l'Évangéliste</figcaption>
      </figure>

      <section><article>
        <p>À la différence de Jean le Baptiste, sur le plan historique, <span style="color: #e6a64d;">il n'existe aucun document historique</span> autre que ceux issus de la foi chrétienne.</p>
        <p>Selon ces documents, pour les spécialistes modernes, <span style="color: #e6a64d;">Jean l'Évangéliste peut désigner trois personnages historiques distincts</span>:</p>
        <ol>
          <li><a href="https://fr.wikipedia.org/wiki/Jean_(apôtre)" title="https://fr.wikipedia.org/wiki/Jean_(apôtre)" class="yellow">Jean “l'Apôtre”</a> qui apparaît dans les évangiles de Marc, Luc, Mathieu et les Actes des Apôtres,</li>
          <li><a href="https://fr.wikipedia.org/wiki/Évangile_selon_Jean#Le_«_disciple_bien-aimé_»" title="https://fr.wikipedia.org/wiki/Évangile_selon_Jean#Le_«_disciple_bien-aimé_»" id="disciple-que-jesus-aimait" class="yellow">le disciple que Jésus aimait</a> rédacteur de l'évangile dit “de Jean”,</li>
          <li><a href="https://fr.wikipedia.org/wiki/ean_de_Patmos" title="https://fr.wikipedia.org/wiki/Jean_de_Patmos" id="jean-de-patmos" class="yellow">Jean “de Patmos”</a> rédacteur de l'Apocalypse.</li>
        </ol>
        <p>Nous synthétisons les différences qui permettent de distinguer ces personnages ci-dessous.</p>
      </article></section>
    </article></section>

    <section><article>
      <h5 class="yellow">Jean “l'Apôtre”</h5>

      <section><article>
        <ul>
          <li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:8#aristodeme" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:8#aristodeme" id="jean-l-apotre-3" class="yellow">Jean “l'Apôtre”</a> est l'<span style="color: #e6a64d;">un des deux «fils de <a href="https://fr.wikipedia.org/wiki/Zébédée" title="https://fr.wikipeia.org/wiki/Zébédée" id="zebedee" class="yellow">Zébédée</a>»</span> <span style="color: #999;">(Marc chapter 3 versets 16 à 19, Mathieu chapître 10 versets 2 à 5 et Luc chapître 6 versets 13 à 16)</span>.</li>
          <li>Son frère est <a href="htps://fr.wikipedia.org/wiki/Jacques_de_Zébédée" title="https://fr.wikipedia.org/wiki/https://fr.wikipedia.org/wiki/Jacques_de_Zébédée" id="jacques-le-majeur" class="yellow">Jacques dit «le Majeur»</a>.</li>
          <li>Jésus les appellent les <span style="color: #e6a64d;"><q>fils du tonnerre</q></span> <span style="color: #999;">(Marc chapître 3 verset 17)</span>.</li>
          <li>Comme son frère et deux autres apôtres, <a href="https://fr.wikipedia.org/wiki/Pierre_(apôtre)" title="https://fr.wikipedia.org/wiki/Pierre_(apôtre)" id="simon-pierre" class="yellow">Simon-Pierre</a> et <a href="https://fr.wikipedia.org/wiki/André_(apôtre)" title="https://fr.wikipedia.org/wiki/André_(apôtre)" class="yellow">André</a>, c'est <span style="color: #e6a64d;">un des pêcheurs du lac de Tibériade</span> qui abandonne ses filets pour suivre Jésus.</li>
          <li>À partir de là, il est témoin:
            <ul>
              <li>de la <a href="https://fr.wikipedia.org/wiki/Transfiguration_(christianisme)" title="https://fr.wikipedia.org/wiki/Transfiguration_(christianisme)" id="transfiguration" class="yellow">transfiguration de Jésus</a> <span style="color: #999;">(Marc chapître 9 verset 2, Mathieu chapître 17 verset 1 et Luc chapître 9 verset 28)</span>,</li>
              <li>de la <a href="https://fr.wikipedia.org/wiki/Guériso_de_la_belle-mère_de_Pierre" title="https://fr.wikipedia.org/wiki/Guérison_de_la_belle-mère_de_Pierre" id="guerison-de-la-belle-mere-de-pierre" class="yellow">guérison de la belle-mère de Simon-Pierre</a> <span style="color: #999;">(Marc 1.29)</span>,</li>
              <li>de la guérison de la <a href="https://fr.wikipedia.org/wiki/File_de_Jaïre" title="https://fr.wikipedia.org/wiki/Fille_de_Jaïre" id="fille-de-jaire" class="yellow">fille de Jaïre</a> le chef de la synagogue <span style="color: #999;">(Marc 5.37 et Luc 8.51)</span>,</li>
              <li>est présent avec son frère au moment où Jésus est tené de renoncer dans le <a href="https://fr.wikipedia.org/wiki/Agonie_dans_le_jardin_des_oliviers" title="https://fr.wikipedia.org/wiki/Agonie_dans_le_jardin_des_oliviers" id="agonie-dans-le-jardin-des-oliviers" class="yellow">jardin des Oliviers</a> <span style="color: #999;">(Marc chapître 13 verset 3)</span>, mais il s'endort <span style="color: #999;">(Marc chapître 14 verset 33)</span>.</li>
            </ul>
          </li>
        </ul>
      </article></section>
    </article></section>

    <section><article>
      <h5 id="disciple-que-jesus-aimait-2" class="yellow">le disciple que Jésus aimait</h5>

      <section><article>
        <ul>
          <li><p><a href="https://fr.wikipedia.org/wiki/Évangile_selon_Jean#Le_«_disciple_bien-aimé_»" title="https://fr.wikipedia.org/wiki/Évangile_selon_Jean#Le_«_disciple_bien-aimé_»" id="disciple-que-jesus-aimait-3" class="yellow">Le disciple que Jésus aimait</a> n'apparaît qu'à la fin de l'évangile dit “de Jean” <span style="color: #999;">(Jean chapître 21 verset 20; verset 24)</span>:</p>
          <blockquote cite="https://www.aelf.org/bible/Jn/21#right-col">
            <ol class="doc">
              <li value="20">
                “s’étant retourné, Pierre aperçoit, marchant à leur suite, <span style="color: #e6a64d;text-decoration: underline;"><em>le disciple que Jésus aimait</em></span>.”
              </li>
              <li><span style="color: #999;">(…)</span></li>
              <li value="24">
                “C’est <span style="color: #e6a64d;">ce disciple qui témoigne</span> de ces choses <span style="color: #e6a64d;">et qui les a écrites</span>.”
              </li>
            </ol>
          </blockquote>
          <p>Aucun élément du texte ne permet de le nommer “Jean” donc l'apellation “évangile de Jean” ne peut être juste: en toute rigueur, ce devrait être l' “évangile du disciple que Jésus aimait”.</p>
          <p>C'est un personnage tout à fait extraordinaire: c'est un disciple de Jésus parmi d'autres auquel tout lecteur peut s'identifier, il est aimé de Jésus lui-même et se trouve donc plus proche de lui que n'importe qui d'autre.</p>
          <p>Il n'hésite d'ailleurs pas, juste après l'extrait précédent, à donner son opinion <span style="color: #999;">(Jean chapître 21 verset 25)</span>:</p>
          <blockquote cite="https://www.aelf.org/bible/Jn/21#right-col">
            <ol class="doc">
              <li value="25">
                <p>“Il y a encore beaucoup d’autres choses que Jésus a faites; et s’il fallait écrire chacune d’elles, <span style="color: #e6a64d;"><span style="text-decoration: underline;">je</span> pense que</span> le monde entier ne suffirait pas pour contenir les livres que l’on écrirait.”</p>
              </li>
            </ol>
          </blockquote>
          </li>
          <li>
            <p>Jésus lui-même, à l'occasion d'une question de Pierre, émet un souhait quant à son destin lors de la Cène <span style="color: #999;">(Jean chapître 21, versets 21 à 22)</span>:</p>
            <blockquote cite="https://www.aelf.org/bible/Jn/21#right-col">
              <ol class="doc">
                <li value="21">
                  <p>Pierre, voyant donc ce disciple, dit à Jésus:</p>
                  <p class="conversation">“Et lui, Seigneur, que lui arrivera-t-il?”</p>
                </li>
                <li value="22">
                  <p>Jésus lui répond:</p>
                  <p class="conversation">“Si <span style="color: #e6a64d;">je veux qu’il demeure jusqu’à ce que je vienne</span>, que t’importe?”.</p>
                </li>
              </ol>
            </blockquote>
          </li>
          <li>
            <p>C'est également lui qui <q cite="https://www.aelf.org/bible/Jn/21#right-col">couché sur le sein de Jésus</q>, lui demande qui va le trahir <span style="color: #999;">(Jean chapître 13 versets 23 à 26)</span>.</p>
          </li>
          <li>
            <p>Lors de la crucifixion, Jésus lui confie sa propre mère, en disant <span style="color: #999;">(Jean chapître 19 versets 26 à 27)</span>:</p>
            <blockquote cite="https://www.aelf.org/bible/Jn/21#right-col">
              <ol class="doc">
                <li value="26">
                  <p class="conversation">
                    “Femme, voici ton fils.”
                  </p>
                </li>
                <li value="27">
                  <p>Puis il dit au disciple:</p>
                  <p class="conversation">
                    “Voici ta mère.”
                  </p>
                </li>
              </ol>
            </blockquote>
          </li>
          <li>
            <p>Quand Marie-Madeleine découvre le tombeau vide, elle court le dire au <q>disciple bien-aimé</q> et à Pierre; il est le premier à atteindre le tombeau <span style="color: #999;">(Jean chapître 20 versets 2 à 8)</span>.</p>
          </li>
          <li>
            <p>C'est encore lui qui le premier reconnaît Jésus au lac de Tibériade après sa résurrection <span style="color: #999;">(Jean chapître 21 verset 7)</span>.</p>
          </li>
        </ul>
      </article></section>
    </article></section>

    <section><article>
      <h5 id="jean-de-patmos-2" class="yellow">Jean de Patmos</h5>

      <section><article>
        <ul>
          <li>
            <p><a href="https://fr.wikipedia.org/wiki/Jean_de_Patmos" title="https://fr.wikipedia.org/wiki/Jean_de_Patmos" id="jean-de-patmos-3" class="yellow">Jean de Patmos</a> apparaît au début du texte de l'Apocalypse qui le présente comme:</p>
            <blockquote>
              <p><span style="color: #e6a64d">“serviteur” à qui dieu a fait connaître</span> <span style="color: #999;">(…)</span> “par l'envoi de son ange” <span style="color: #999;">(…)</span> <span style="color: #e6a64d;">“ce qui doit bientôt advenir”</span> <span style="color: #999;">(…)</span> “aux sept Églises qui sont en Asie Mineure” <span style="color: #999;">(Ap 1.1-9)</span>.</p>
            </blockquote>
          </li>
        </ul>
      </article></section>
    </article></section>

    <section><article>
      <h5 class="yellow">la représentation de Jean l'Évangéliste selon Memling par rapport à <cite>La Légende dorée</cite></h5>

      <section><article>
        <p>La représentation de Jean l'Évangéliste suit globalement le récit établit par Jacques de Voragine dans les <span style="color: #e6a64d;">chapîtres 9</span> et <span style="color: #e6a64d;">65</span> de <cite>La Légende dorée</cite>.</p>
        <ul>
          <li>lire le <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:18#jean-selon-legende" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:18#jean-selon-legende" class="yellow">texte du chapître 9 <cite>La Légende dorée</cite> de Jacques de Voragine</a>.</li>
          <li>lire le <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:19#jean-selon-legende-2" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:19#jean-selon-legende-2" class="yellow">texte du chapître 65 de <cite>La Légende dorée</cite> de Jacques de Voragine</a>.</li>
        </ul>
      </article></section>
    </article></section>

    <section><article>
      <h5 id="jean-a-la-porte-latine" class="yellow">Jean l'Évangéliste ébouillanté sur ordre de l'empereur Domitien devant la Porte Latine à Rome</h5>

      <section><article>
        <p>Le récit débute sur le panneau central <span style="color: #999;">(chap. 65)</span> <sup id="page-10-fnref1:1"><a href="#page-10-fn:1" class="footnote-ref">note 1</a></sup>:</p>
        <ol class="doc">
          <li>«<span style="color: #e6a64d;">Jean</span> préchait à Éphèse lorsqu'il est arrêté par le proconsul et invité à sacrifier aux dieux.</li>
          <li>Comme il refuse, il est jeté en prison; on envoie alors à <span style="color: #e6a64d;">l'empereur Domitien</span> une lettre le désignant comme magicien sacrilège, contempteur des dieux et adorateur du crucifié.</li>
          <li>Sur ordre de Domitien, Jean est ensuite conduit à Rome où, après lui avoir coupé les cheveux par dérision, devant la <span style="color: #e6a64d;">porte</span> de la ville qu'on appelle «<span style="color: #e6a64d;">latine</span>», on le flagelle et on le jette dans un chaudron d'huile bouillante sous lequel brûlait un feu ardent».</li>
        </ol>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, “Ébouillantement de Jean l'Évangéliste sur ordre de l'empereur Domitien devant la Porte Latine à Rome et départ en l'exil sur l'île de Patmos”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, “Ébouillantement de Jean l'Évangéliste sur ordre de l'empereur Domitien devant la Porte Latine à Rome et départ en l'exil sur l'île de Patmos”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1920.jpg 1920w"></picture><figcaption>détails du panneau central, “Ébouillantement de Jean l'Évangéliste sur ordre de l'empereur Domitien devant la Porte Latine à Rome et départ en l'exil sur l'île de Patmos”</figcaption>
      </figure>

      <section><article>
        <ol class="doc">
          <li>«Mais Jean ne ressentit aucune douleur et en sortit tout à fait indemne, non pas brûlé mais oint.
          À cette vue, Domitien fut stupéfié et craignit de le mettre à mort.
          Aussi, à cet endroit, les chrétiens ont-ils construit une église, et ce jour est-il fêté solennellement comme celui du martyre de Jean».</li>
        </ol>
        <p>La représentation de Memling fait apparaître à l'horizon à gauche, cette <span style="color: #e6a64d;">église</span>, à droite, le <span style="color: #e6a64d;">Colisée de Rome</span> et la <span style="color: #e6a64d;">Porte Latine</span>.</p>
        <ol class="doc">
          <li>«L'empereur, constatant qu'il ne renonçait pas à la prédication, l'exila dans <span style="color: #e6a64d;">l'île de Patmos</span>», <span style="color: #999;">(le départ pour Patmos apparaît au milieu: quelques hommes montent dans un bateau)</span> «où, dans la solitude, il écrivit <span style="color: #e6a64d;"><cite>L'Apocalypse</cite></span>» <span style="color: #999;">(chap. 9)</span>.</li>
        </ol>
      </article></section>
    </article></section>

    <section><article>
      <h5 class="yellow">Vue d'ensemble du volet intérieur droit: Jean témoigne de <cite>L'Apocalypse</cite> à Patmos</h5>

      <section><article>
        <p>Le volet intérieur droit est entièrement consacré aux visions que Jean eut à Patmos <sup id="page-10-fnref1:2"><a href="#page-10-fn:2" class="footnote-ref">note 2</a></sup>.</p>
        <p>La représentation de Memling est particulièrement remarquable car s'il existe de nombreuses représentations de <cite>L'Apocalypse</cite> comme une succession de tableaux, en revanche il n'en existe que très peu qui assument une unité de l'espace de la représentation.</p>
        <p>Et pour cause: le récit de Jean de Patmos présente une complexité remarquable.</p>
        <p>Et pourtant, Memling réussit le tour de force de rendre l'espace de représentation aussi crédible, complexe surnaturellement que le récit.</p>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, le volet intérieur droit, “Jean l'Évangéliste à Patmos”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, le volet intérieur droit, “Jean l'Évangéliste à Patmos”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1920.jpg 1920w"></picture><figcaption>le volet intérieur droit, “Jean l'Évangéliste à Patmos”.<br>“Aussitôt je fus saisi en esprit. 
        Voici qu’un trône était là dans le ciel (…) Devant le trône, il y a comme une mer, aussi transparente que du cristal”, <cite>Apocalypse</cite>, du chapître 4 verset 2 au chapître 6 verset 1</figcaption>
      </figure>

      <section><article>
        <p>Memling représente l'apôtre, assis sur un rocher de forme circulaire, l'île de Patmos au milieu de la mer Égée.</p>
        <p>Il tient dans sa main une plume et un canif, sur ses genoux on voit un cahier.</p>
        <p>Jean est représenté alors qu'il n'a encore même commencé d'écrire, <span style="color: #e6a64d;">sur le vif</span>, dans le moment même où il est saisi par l'<span style="color: #e6a64d;">“Apocalypse”</span>, qui signifie en grec ancien <span style="color: #e6a64d;">“dévoilement”</span>.</p>
        <p>Ses visions apparaissent au-dessus de lui dans le ciel, sur l'eau et sur la terre toute proche sur tout le reste du volet.</p>
      </article></section>
    </article></section>

    <section><article>
      <h5 class="yellow">Vision du trône de dieu, de la cour céleste et de l'agneau - <cite>Apocalypse</cite>, du chapître 4 verset 2 au chapître 6 verset 1</h5>

      <section><article>
        <section><article>
          <p>Nous faisons le choix de suivre le récit <sup id="fnref1:3"><a href="#fn:3" class="footnote-ref">note 3</a></sup> que Jean l'Évangéliste lui-même fait du dévoilement dans le texte de <cite>L'Apocalypse</cite>.</p>
          <p>Celui-ci débute sur le haut à gauche du volet</p>
          <p>La représentation qu'en fait Memling se trouve ainsi placée directement en regard du texte.</p>
        </article></section>

        <section><article>
          <ol class="doc">
            <li>chapître 4</li>
            <li value="02">je fus saisi en <span style="color: #e6a64d;">esprit</span>.
            Voici qu’un <span style="color: #e6a64d;">trône</span> était là dans le <span style="color: #e6a64d;">ciel</span>, et sur le trône siégeait <span style="color: #e6a64d;">quelqu’un</span>.</li>
            <li value="03">Celui qui siège a l’aspect d’une pierre de jaspe ou de cornaline;
            il y a, tout autour du trône, <span style="color: #e6a64d;">un arc-en-ciel</span>, avec des reflets d’émeraude <sup id="fnref1:4"><a href="#fn:4" class="footnote-ref">note 4</a></sup>.</li>
            <li value="04">Tout autour de ce trône, vingt-quatre trônes, où siègent <span style="color: #e6a64d;">vingt-quatre anciens</span> portant des vêtements blancs et, sur leurs têtes, des couronnes d’or.</li>
            <li value="05">Et du trône sortent des éclairs, des fracas, des coups de tonnerre, et sept torches enflammées brûlent devant le trône:
            ce sont les sept esprits de dieu.</li>
            <li value="06">Devant le trône, il y a comme une mer, aussi transparente que du cristal.</li>
          </ol>
        </article></section>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, le volet intérieur droit, “vision du trône de dieu, de la cour céleste et de l'agneau”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, le volet intérieur droit, “vision du trône de dieu, de la cour céleste et de l'agneau”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1920.jpg 1920w"></picture><figcaption>le volet intérieur droit, “vision du trône de dieu, de la cour céleste et de l'agneau”, <cite>Apocalypse</cite>, du chapître 4 verset 2 au chapître 6 verset 1</figcaption>
      </figure>

      <section><article>
        <ol class="doc">
          <li value="07">Le premier vivant ressemble à un <span style="color: #e6a64d;">lion</span>, le deuxième vivant ressemble à un <span style="color: #e6a64d;">jeune taureau</span>, le troisième vivant a comme un <span style="color: #e6a64d;">visage d’homme</span>, le quatrième vivant ressemble à un <span style="color: #e6a64d;">aigle</span> en plein vol.</li>
          <li value="08">
            <p>Les quatre vivants ont chacun <span style="color: #e6a64d;">six ailes</span>, avec des yeux innombrables tout autour et au-dedans.
            Jour et nuit, ils ne cessent de dire:</p>
              <p class="conversation"><q>Saint! saint! saint, le seigneur dieu, le souverain de l’univers, celui qui était, qui est et qui vient.</q></p>
          </li>
          <li><span style="color: #999;">(…)</span></li>
          <li>chapître 5</li>
          <li value="01">J’ai vu, dans la main droite de celui qui siège sur le trône, un <span style="color: #e6a64d;">livre</span> en forme de rouleau, écrit au-dedans et à l’extérieur, scellé de <span style="color: #e6a64d;">sept sceaux</span>.</li>
          <li><span style="color: #999;">(…)</span></li>
          <li value="06">Et j’ai vu, entre le trône, les quatre vivants et les anciens, un <span style="color: #e6a64d;">agneau debout</span>, comme égorgé; ses cornes étaient au nombre de sept, ainsi que ses yeux, qui sont les sept esprits de dieu envoyés sur toute la terre.</li>
          <li value="07">Il s’avança et prit le livre dans la main droite de celui qui siégeait sur le trône.</li>
          <li><span style="color: #999;">(…)</span></li>
        </ol>
      </article></section>
    </article></section>
  </article></section>
</article>

<hr>

<aside>
  <article>
  <div class="footnotes">
    <ol>
      <li id="page-10-fn:1">
        <p>la citation qui suit est au passé; pour information, je la transpose ici au présent.</p>
      </li>
    </ol>
    </div>
    <footer>
      <p><a href="#page-10-fnref1:1" rev="footnote" class="footnote-backref">retour au texte ↩</a></p>
    </footer>
  </article>
  <article>
    <div class="footnotes">
    <ol start="2">
      <li id="page-10-fn:2">
        <p>les passages du texte de l'Apocalypse qui se rapporte au volet de droite se trouve <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:10#apocalypse" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:10#apocalypse">ici</a></p>
      </li>
    </ol>
    </div>
    <footer>
      <p><a href="#page-10-fnref1:2" rev="footnote" class="footnote-backref">retour au texte ↩</a></p>
    </footer>
  </article>
  <article>
    <div class="footnotes">
    <ol start="3">
      <li id="page-10-fn:3">
        <p>Le texte de l'Apocalypse s'adresse aux «sept églises qui sont en Asie Mineure» (<q>Éphèse, Smyrne, Pergame, Thyatire, Sardes, Philadelphie et Laodicée</q>, Apocalypse 1.4) dans le langage symbolique des Écritures judaïques.</p>
        <p>Il exhorte à une réalité transcendante devant leurs permettre de surmonter non seulement les persécutions, quelles soient romaines ou judaïques, mais aussi leurs propres insuffisance <span style="color: #999;">(<cite>Apocalypse</cite> chap.2-3)</span> grâce à l'espérance nouvelle dans le christ à la fin des temps.</p>
      </li>
    </ol>
    </div>
    <footer>
      <p><a href="#page-10-fnref1:3" rev="footnote" class="footnote-backref">retour au texte ↩</a></p>
    </footer>
  </article>
  <article>
    <div class="footnotes">
    <ol start="4">
      <li id="page-10-fn:4">
        <p>nous faisons le choix de remplacer le terme <q>halo de lumière</q> par <q>arc-en-ciel</q> qui correspond à la représentation de Memling étant donné la note de la traduction œuménique de la bible (Édition avril 1989, p.1799, note w.) <q>le même mot grec désigne aussi l'arc-en-ciel, ou encore une auréole</q>.</p>
      </li>
    </ol>
    </div>
    <footer>
      <p><a href="#page-10-fnref1:4" rev="footnote" class="footnote-backref">retour au texte ↩</a></p>
    </footer>
  </article>
</aside>

<!-- Page 11 --><hr>

<article>
  <h5 class="yellow">Les quatre cavaliers de <cite>L'Apocalypse</cite></h5>
  <section><article>

    <section><article>
      <h6 class="yellow">premier sceau: le cheval blanc - <cite>Apocalypse</cite>, chapître 6 verset 2</h6>
      <section><article>
        <section><article>
          <p>Le récit se poursuit entre l'arc-en-ciel et Jean.</p>
        </article></section>

        <section><article>
          <ol class="doc">
            <li>chapître 6</li>
            <li value="01">
              <p>Alors j’ai vu: quand l’agneau ouvrit l’un des sept sceaux, j’entendis l’un des quatre vivants dire d’une voix de tonnerre:</p>
              <p class="conversation">
                “Viens!”
              </p>
            </li>
            <li value="02">Alors j’ai vu: et voici un <span style="color: #e6a64d;">cheval blanc</span>; celui qui le montait tenait un <span style="color: #e6a64d;">arc</span>, une <span style="color: #e6a64d;">couronne</span> lui fut donnée, et il sortit vainqueur, pour vaincre à nouveau.</li>
          </ol>
        </article></section>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “le cheval blanc”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “le cheval blanc”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/1er-cavalier-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “le cheval blanc”.<br>
        “celui qui le montait tenait un arc, une couronne lui fut donnée, et il sortit vainqueur, pour vaincre à nouveau”, <cite>Apocalypse</cite>, chapître 6 verset 2</figcaption>
      </figure>
    </article></section>

    <section><article>
      <h6 class="yellow">second sceau: le cheval rouge feu - <cite>Apocalypse</cite>, chapître 6 versets 3 à 4</h6>

      <section><article>
        <ol class="doc">
          <li value="03">Et quand il ouvrit le deuxième sceau, j’entendis le deuxième vivant qui disait:</p>
            <p class="conversation">
              “Viens!”
            </p>
          </li>
          <li value="04">Alors sortit un autre <span style="color: #e6a64d;">cheval</span>, <span style="color: #e6a64d;">rouge feu</span>; à celui qui le montait il fut donné d’enlever la paix à la terre, pour que les gens s’entretuent, et une grande <span style="color: #e6a64d;">épée</span> lui fut donnée.</li>
        </ol>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “le cheval rouge feu”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “le cheval rouge feu”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/2eme-cavalier-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “le cheval rouge feu”.<br>
        “celui qui le montait il fut donné d’enlever la paix à la terre, pour que les gens s’entretuent, et une grande épée lui fut donnée”, <cite>Apocalypse</cite>, chapître 6 versets 3 à 4</figcaption>
      </figure>
    </article></section>
    
    <section><article>
      <h6 class="yellow">troisième sceau: le cheval noir - <cite>Apocalypse</cite>, chapître 6 versets 5 à 6</h6>

      <section><article>
        <ol class="doc">
          <li value="05">
            <p>Et quand il ouvrit le troisième sceau, j’entendis le troisième vivant qui disait:</p>
            <p class="conversation">
              “Viens!”
            </p>
          <p>Alors j’ai vu: et voici un <span style="color: #e6a64d;">cheval noir</span>; celui qui le montait tenait à la main une <span style="color: #e6a64d;">balance</span>.</p>
          </li>
          <li value="06">
          <p>Et j'entendis comme une voix au milieu des quatre vivants; elle disait:</p>
            <p class="conversation">
              “Un denier, la mesure de blé! Un denier, les trois mesures d’orge! Ne fraude pas sur l’huile et sur le vin!”
            </p>
          </li>
        </ol>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “le cheval noir”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “le cheval noir”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “le cheval noir”.<br>“celui qui le montait tenait à la main une balance”, <cite>Apocalypse</cite>, chapître 6 versets 5 à 6</figcaption>
      </figure>
    </article></section>
    
    <section><article>
      <h6 class="yellow">quatrième sceau: le cheval verdâtre - <cite>Apocalypse</cite>, chapître 6 versets 7 à 8</h6>

      <section><article>
        <ol class="doc">
          <li value="07">
          <p>Et quand il ouvrit le quatrième sceau, j’entendis la voix du quatrième vivant qui disait:</p>
          <p class="conversation">
            “Viens!”
          </p>
          </li>
          <li value="08">Alors j’ai vu: et voici un <span style="color: #e6a64d;">cheval verdâtre</span>; celui qui le montait se nomme <span style="color: #e6a64d;">la mort</span>, et le <span style="color: #e6a64d;">séjour des morts</span> l’accompagnait.</li>
          <li>Et il leur fut donné pouvoir sur un quart de la terre pour tuer par le glaive, par la famine et par la peste, et par les fauves de la terre.</li>
          <li><span style="color: #999;">(…)</span></li>
        </ol>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “le cheval verdâtre, la mort, le séjour des morts”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “le cheval verdâtre, la mort, le séjour des morts”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “le cheval verdâtre, la mort, le séjour des morts”.<br>“celui qui le montait se nomme la mort, et le séjour des morts l’accompagnait”, <cite>Apocalypse</cite>, chapître 6 versets 7 à 8</figcaption>
      </figure>
    </article></section>
    
    <section><article>
      <h6 class="yellow">paysage autour des quatre cavaliers - <cite>Apocalypse</cite>, chapître 6 versets 14 à 17</h6>

      <section><article>
        <ol class="doc">
          <li value="14">Le ciel se retira comme un livre qu’on referme; toutes les montagnes et les îles furent déplacées.</li>
          <li value="15"><span style="color: #e6a64d;">Les rois de la terre et les grands, les chefs d’armée, les riches et les puissants, tous les esclaves et les hommes libres allèrent se cacher dans les cavernes et les rochers des montagnes</span>.</li>
          <li value="16"><p>Et ils disaient aux montagnes et aux rochers:</p>
            <p class="conversation">“Tombez sur nous, et cachez-nous du regard de celui qui siège sur le trône et aussi de la colère de l’agneau.”</p>
          </li>
          <li value="17">
            <p class="conversation">Car il est venu, le grand jour de leur colère, et qui pourrait tenir?</p>
          </li>
        </ol>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “le paysage autour des quatre cavaliers”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “le paysage autour des quatre cavaliers”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “le paysage autour des quatre cavaliers”, <cite>Apocalypse</cite>, chapître 6 versets 14 à 17</figcaption>
      </figure>
    </article></section>
  </article></section>
</article>

<!-- Page 12 --><hr>

<article>
  <section><article>
    <h5 class="yellow">les anges du septième sceau - <cite>Apocalypse</cite>, chapître 8 versets 1 à 2</h5>

    <section><article>
      <ol class="doc">
        <li>chapître 8</li>
        <li value="01">Quand il ouvrit le septième sceau, il y eut dans le ciel un silence d’environ une demi-heure.</li>
        <li value="02">Et j’ai vu les <span style="color: #e6a64d;">sept anges</span> qui se tiennent devant dieu: il leur fut donné <span style="color: #e6a64d;">sept trompettes</span>.</li>
      </ol>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “les anges du septième sceau”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “les anges du septième sceau”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “les anges du septième sceau”, <cite>Apocalypse</cite>, chapître 8 versets 1 à 2</figcaption>
    </figure>
  </article></section>

  <section><article>
    <h5 class="yellow">l'ange de l'autel - <cite>Apocalypse</cite>, chapître 8 versets 3 à 5</h5>

    <section><article>
      <ol class="doc">
        <li value="03">Un autre ange vint se placer près de l’autel; il portait un <span style="color: #e6a64d;">encensoir d’or</span>; il lui fut donné quantité de parfums pour les offrir, avec les prières de tous les saints, sur <span style="color: #e6a64d;">l’autel d’or</span> qui est devant le trône.</li>
      </ol>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “l'ange de l'autel”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “l'ange de l'autel”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “l'ange de l'autel”, <cite>Apocalypse</cite>, chapître 8 versets 3 à 5</figcaption>
    </figure>

    <section><article>
      <ol class="doc">
        <li value="04">Et par la main de l’ange monta devant dieu la fumée des parfums, avec les prières des saints.</li>
        <li value="05">Puis l’ange prit l’encensoir et le remplit du feu de l’autel; il le jeta sur la terre: il y eut des coups de tonnerre, des fracas, des éclairs et un tremblement de terre.</li>
      </ol>
    </article></section>
  </article></section>

  <section><article>
    <h5 class="yellow">chute de la grande montagne embrasée - <cite>Apocalypse</cite>, chapître 8 versets 6 à 9</h5>

    <section><article>
      <ol class="doc">
        <li value="06">Puis les sept anges qui avaient les sept trompettes se préparèrent à en sonner.</li>
        <li value="07">Le premier sonna de la trompette: il y eut de la grêle et du feu mêlés de sang, qui furent jetés sur la terre, et le tiers de la terre brûla, le tiers des arbres brûlèrent, toute l’herbe verte brûla.</li>
        <li value="08">Le deuxième ange sonna de la trompette: dans la mer fut jetée comme <span style="color: #e6a64d;">une grande montagne embrasée</span>, et le tiers de la mer fut changé en sang;</li>
        <li value="09">dans la mer, le tiers des créatures vivantes mourut, et <span style="color: #e6a64d;">le tiers des bateaux fut détruit</span>.</li>
      </ol>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “chute de la grande montagne embrasée, le tiers des bateaux détruits”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “chute de la grande montagne embrasée, le tiers des bateaux détruits”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “chute de la grande montagne embrasée, le tiers des bateaux détruits”, <cite>Apocalypse</cite>, chapître 8 versets 6 à 9</figcaption>
    </figure>
  </article></section>

  <section><article>
    <h5 class="yellow">la chute de l'étoile “absinthe” - <cite>Apocalypse</cite>, chapître 8 versets 10 à 12</h5>

    <section><article>
      <ol class="doc">
        <li value="10">Le troisième ange sonna de la trompette: du ciel tomba <span style="color: #e6a64d;">une grande étoile qui flambait comme une torche</span>; elle tomba sur le tiers des fleuves et sur les sources des eaux.</li>
      </ol>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “la chute de l'étoile «Absinthe»”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “la chute de l'étoile «Absinthe»”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “la chute de l'étoile «absinthe»”.<br>“du ciel tomba une grande étoile qui flambait comme une torche (…) le tiers des eaux devint de l’absinthe: beaucoup de gens moururent à cause des eaux devenues amères”, <cite>Apocalypse</cite>, chapître 8 versets 10 à 12</figcaption>
    </figure>

    <section><article>
      <ol class="doc">
        <li value="11">L’étoile se nomme “<span style="color: #e6a64d;">absinthe</span>”, et le tiers des eaux devint de l’absinthe: beaucoup de gens moururent à cause des eaux devenues amères.</li>
        <li value="12">Le quatrième ange sonna de la trompette: le tiers du soleil fut frappé, et le tiers de la lune et le tiers des étoiles; ainsi chacun d’entre eux fut obscurci d’un tiers, le jour perdit le tiers de sa clarté et, de même, la nuit.</li>
      </ol>
    </article></section>
  </article></section>

  <section><article>
    <h5 class="yellow">le vol de l'aigle - <cite>Apocalypse</cite>, chapître 8 verset 13</h5>
    <section><article>
      <ol class="doc">
        <li value="13"><p>Alors j’ai vu: et j’entendis <span style="color: #e6a64d;">un aigle</span> qui volait en plein ciel, disant d’une voix forte:</p>
          <p class="conversation"><q style="quotes: '«' '»';">Malheur! Malheur! Malheur pour ceux qui habitent la terre, car la trompette, encore, doit retentir quand les trois anges sonneront!</q></p>
        </li>
      </ol>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “le vol de l'aigle”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “le vol de l'aigle”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “le vol de l'aigle”, <cite>Apocalypse</cite>, chapître 8 verset 13</figcaption>
    </figure>
  </article></section>
</article>

<!-- Page 13 --><hr>

<article>
  <section><article>
    <h5 class="yellow">la sortie vers la terre des sauterelles - <cite>Apocalypse</cite>, chapître 9</h5>
    <section><article>

      <section><article>
        <ol class="doc">
          <li>chapître 9</li>
          <li value="01">Le cinquième ange sonna de la trompette, et j’ai vu une étoile qui était tombée du ciel sur la terre: c’est à elle que fut donnée la clé du <span style="color: #e6a64d;">puits de l’abîme</span>.</li>
          <li value="02">Elle ouvrit le puits de l’abîme, et du puits monta <span style="color: #e6a64d;">une fumée comme celle d’une grande fournaise</span>; le soleil et l’air furent obscurcis par la fumée du puits,</li>
          <li value="03">Et de la fumée sortirent vers la terre des <span style="color: #e6a64d;">sauterelles</span>; un pouvoir leur fut donné, pareil au pouvoir des scorpions de la terre.</li>
        </ol>
      </article></section>
      
      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “la sortie vers la terre des sauterelles”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “la sortie vers la terre des sauterelles”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “la sortie vers la terre des sauterelles”, <cite>Apocalypse</cite>, chapître 9</figcaption>
      </figure>

      <section><article>
        <ol class="doc">
          <li value="04">Il leur fut dit de ne pas faire de mal à l’herbe de la terre, ni à la verdure, ni à aucun arbre, mais seulement aux hommes, ceux qui n’ont pas sur le front la marque du sceau de dieu.</li>
          <li value="05">Il leur fut donné, non pas de les tuer, mais de les tourmenter pendant cinq mois d’un tourment comme celui qu’inflige le scorpion quand il pique un homme.</li>
          <li value="06">En ces jours-là, les hommes chercheront la mort et ne la trouveront pas; ils désireront mourir et la mort les fuira.</li>
          <li value="07">Ces sortes de <span style="color: #e6a64d;">sauterelles</span> ressemblent à des chevaux équipés pour la guerre; elles ont comme des couronnes d’or sur la tête, et un visage comme un visage humain,</li>
          <li value="08">Elles ont des cheveux comme des cheveux de femmes, leurs dents sont comme celles des lions.</li>
          <li value="09">Elles ont des poitrails comme des cuirasses de fer, et le bruit de leurs ailes est comme celui de chars à plusieurs chevaux courant au combat.</li>
          <li value="10">Elles ont des queues comme des scorpions, et des dards venimeux.</li>
          <li>Dans leur queue se trouve le pouvoir de faire du mal aux hommes pendant cinq mois.</li>
          <li value="11">Elles ont comme roi l’ange de l’abîme; il se nomme en hébreu ”Abaddôn” et en grec ”Apollyôn” (c’est-à-dire: Destructeur).</li>
        </ol>
      </article></section>
    </article></section>

    <section><article>
      <h5 class="yellow">l'ange descendu du ciel - <cite>Apocalypse</cite>, chapître 10 versets 1 à 3</h5>

      <section><article>
        <ol class="doc">
          <li>chapître 10</li>
          <li value="01">Et j’ai vu un autre <span style="color: #e6a64d;">ange</span>, plein de force, descendre du ciel, ayant <span style="color: #e6a64d;">une nuée pour manteau</span>, et sur la tête <span style="color: #e6a64d;">un arc-en-ciel</span>; son visage était comme <span style="color: #e6a64d;">le soleil</span>, et ses jambes comme <span style="color: #e6a64d;">des colonnes de feu</span>.</li>
          <li value="02">Il tenait à la main <span style="color: #e6a64d;">un petit livre ouvert</span>.</li>
          <li>Il posa le pied droit sur la mer, et le gauche sur la terre;</li>
          <li value="03">il cria d’une voix forte, comme un lion qui rugit.
          Et quand il cria, les sept tonnerres parlèrent, faisant résonner leur voix.</li>
        </ol>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “l'ange descendu du ciel”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “l'ange descendu du ciel”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “l'ange descendu du ciel”<br>“une nuée pour manteau, et sur la tête un arc-en-ciel; son visage était comme le soleil, et ses jambes comme des colonnes de feu. Il tenait à la main un petit livre ouvert. Il posa le pied droit sur la mer, et le gauche sur la terre”, <cite>Apocalypse</cite>, chapître 10 versets 1 à 3</figcaption>
      </figure>
    </article></section>

    <section><article>
      <h5 class="yellow">le ciel de l'Apocalypse - <cite>Apocalypse</cite>, chapître 10 versets 3 à 6</h5>

      <section><article>
        <ol class="doc">
          <li value="04"><p>Et quand les sept tonnerres eurent parlé, j’allais me mettre à écrire; mais j’entendis une voix venant du ciel qui disait:</p>
            <p class="conversation">“Ce que viennent de dire les sept tonnerres, garde-le scellé, ne l’écris pas!”</p>
          </li>
          <li value="05">Et l’ange que j’avais vu debout sur la mer et sur la terre leva la main droite vers le ciel;</li>
          <li value="06"><p>il fit un serment par celui qui est vivant pour les siècles des siècles, celui qui a créé le ciel et tout ce qu’il contient, la terre et tout ce qu’elle contient, la mer et tout ce qu’elle contient. Il déclara:</p>
            <p class="conversation">“Du temps, il n’y en aura plus!”</p>
          </li>
        </ol>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “le ciel de l'Apocalypse”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “le ciel de l'Apocalypse”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “le ciel de l'Apocalypse”, <cite>Apocalypse</cite>, chapître 10 versets 3 à 6</figcaption>
      </figure>
    </article></section>

    <section><article>
      <h5 class="yellow">la femme et le dragon - <cite>Apocalypse</cite>, chapître 12 versets 1 à 4</h5>

      <section><article>
        <ol class="doc">
          <li>chapître 12</li>
          <li value="01">Un grand signe apparut dans le ciel: <span style="color: #e6a64d;">une femme</span>, ayant le soleil pour manteau, la lune sous les pieds, et sur la tête une couronne de douze étoiles.</li>
          <li value="02">Elle est enceinte, elle crie, dans les douleurs et la torture d’un enfantement.</li>
          <li value="03">Un autre signe apparut dans le ciel: <span style="color: #e6a64d;">un grand dragon</span>, rouge feu, avec sept têtes et dix cornes, et, sur chacune des sept têtes, un diadème.</li>
          <li value="04">Sa queue, entraînant le tiers des étoiles du ciel, les précipita sur la terre. Le dragon vint se poster devant la femme qui allait enfanter, afin de dévorer l’enfant dès sa naissance.</li>
        </ol>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “la femme et le dragon”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “la femme et le dragon”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “la femme et le dragon”, <cite>Apocalypse</cite>, chapître 12 versets 1 à 4</figcaption>
      </figure>
    </article></section>

    <section><article>
      <h5 class="yellow">combat de saint michel, du dragon et de leurs anges: chute du dragon et de ses anges - <cite>Apocalypse</cite>, chapître 12 versets 5 à 9</h5>

      <section><article>
        <ol class="doc">
          <li value="05">Or, elle mit au monde un fils, un enfant mâle, celui qui sera le berger de toutes les nations, les conduisant avec un sceptre de fer. L’enfant fut enlevé jusqu’auprès de dieu et de son trône,</li>
          <li value="06">et la femme s’enfuit au désert, où dieu lui a préparé une place, pour qu’elle y soit nourrie pendant mille deux cent soixante jours.</li>
          <li value="07">Il y eut alors un combat dans le ciel: Michel, avec ses anges, dut combattre le dragon.</li>
          <li>Le dragon, lui aussi, combattait avec ses anges,</li>
          <li value="08">mais il ne fut pas le plus fort; pour eux désormais, nulle place dans le ciel.</li>
          <li value="09">Oui, il fut rejeté, le grand dragon, le serpent des origines, celui qu’on nomme diable et Satan, le séducteur du monde entier.</li>
          <li>Il fut jeté sur la terre, et ses anges furent jetés avec lui.</li>
        </ol>
      </article></section>

      <figure>
        <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-280.webp 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-380.webp 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-480.webp 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-640.webp 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-840.webp 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1280.webp 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1600.webp 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “combat de saint michel, du dragon et de leurs anges: chute du dragon et de ses anges”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “combat de saint michel, du dragon et de leurs anges: chute du dragon et de ses anges”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-280.jpg 280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-380.jpg 380w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-480.jpg 480w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-640.jpg 640w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-840.jpg 840w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1280.jpg 1280w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1600.jpg 1600w,
        https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “combat de saint michel, du dragon et de leurs anges: chute du dragon et de ses anges”, <cite>Apocalypse</cite>, chapître 12 versets 5 à 9</figcaption>
      </figure>
    </article></section>
  </article></section>
</article>

<!-- Page 14 --><hr>

<article>
  <section><article>
    <h5 class="yellow">la femme reçoit deux aîles de grand aigle pour échapper au dragon - <cite>Apocalypse</cite>, chapître 12 versets 10 à 14</h5>
    <section><article>
      <ol class="doc">
        <li value="10">Alors j’entendis dans le ciel une voix forte, qui proclamait: «Maintenant voici le salut, la puissance et le règne de notre dieu, voici le pouvoir de son christ!</li>
        <li>Car il est rejeté, l’accusateur de nos frères, lui qui les accusait, jour et nuit, devant notre dieu.</li>
        <li value="11">Eux-mêmes l’ont vaincu par le sang de l’agneau, par la parole dont ils furent les témoins; détachés de leur propre vie, ils sont allés jusqu’à mourir.</li>
        <li value="12">Cieux, soyez donc dans la joie, et vous qui avez aux cieux votre demeure!</li>
        <li>Malheur à la terre et à la mer: le diable est descendu vers vous, plein d’une grande fureur; il sait qu’il lui reste peu de temps.»</li>
        <li value="13">Et quand le <span style="color: #e6a64d;">dragon</span> vit qu’il était jeté sur la terre, il se mit à poursuivre la <span style="color: #e6a64d;">femme</span> qui avait mis au monde l’enfant mâle.</li>
        <li value="14">Alors furent données à la femme les <span style="color: #e6a64d;">deux ailes du grand aigle</span> pour qu’elle s’envole au désert, à la place où elle doit être nourrie pour un temps, deux temps et la moitié d’un temps, loin de la présence du Serpent.</li>
      </ol>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “la femme reçoit deux aîles de grandes ailes pour échapper au dragon”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “la femme reçoit deux aîles de grandes ailes pour échapper au dragon”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “la femme reçoit deux aîles de grandes ailes pour échapper au dragon”, <cite>Apocalypse</cite>, chapître 12 versets 10 à 14</figcaption>
    </figure>
  </article></section>

  <section><article>
    <h5 class="yellow">Fin des visions de Jean à Patmos, poursuite du récit de la légende de Jean l'Évangéliste selon le chapître 9 de <cite>La Légende Dorée</cite></h5>
    <section><article>
      <p>Du point de vue de la narration construite par Memling, les visions de l'Apocalypse s'arrêtent là.</p>
      <p>La vie de Jean l'Évangéliste se poursuit, après Patmos, sur le panneau central, selon La Légende de Jean l'Évangéliste telle qu'elle est racontée dans le chapître 9 de <cite>La Légende Dorée</cite>.</p>
    </article></section>
  </article></section>

  <section><article>
    <h5 class="yellow">résurrection de Drusiane - <cite>La Légende Dorée</cite>, chapître 9</h5>

    <section><article>
      <p>Le récit de la légende de Jean l'Évangéliste se poursuit sur le panneau central intérieur, dans le lointain droit</p>
      <p>Selon <cite>La Légende Dorée</cite>, Jean retourne ensuite à à Éphèse, où il ressuscite Drusiane ainsi que Memling le représente sur un chapiteau.</p>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, chapiteau de colonne, “résurrection de Drusiane”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, chapiteau de colonne, “résurrection de Drusiane”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1920.jpg 1920w"></picture><figcaption>détail du panneau central, chapiteau de colonne, “résurrection de Drusiane”, <cite>La Légende Dorée</cite>, chapître 9</figcaption>
    </figure>
  </article></section>

  <section><article>
    <h5 class="yellow">baptème de Craton - <cite>La Légende Dorée</cite>, chapître 9</h5>
    
    <section><article>
      <p>Tout à fait à l'arrière, il baptise le philosophe converti Craton dans le petit édifice à coupole.</p>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, “baptème de Craton”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, “baptème de Craton”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “baptème de Craton”, <cite>La Légende Dorée</cite></figcaption>
    </figure>
  </article></section>

  <section><article>
    <h5 class="yellow">chapiteau du miracle de la coupe de poison - <cite>La Légende Dorée</cite>, chapître 9</h5>

    <section><article>
      <p>Il boit la coupe empoisonnée sans subir le moindre mal.</p>
    </article></section>

    <figure>
      <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-280.webp 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-380.webp 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-480.webp 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-640.webp 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-840.webp 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1280.webp 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1600.webp 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, chapiteau de colonne, “chapiteau du miracle de la coupe de poison”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, chapiteau de colonne, “chapiteau du miracle de la coupe de poison”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-280.jpg 280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-380.jpg 380w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-480.jpg 480w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-640.jpg 640w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-840.jpg 840w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1280.jpg 1280w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1600.jpg 1600w,
      https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1920.jpg 1920w"></picture><figcaption>détail du panneau central, chapiteau de colonne, “chapiteau du miracle de la coupe de poison”, <cite>La Légende Dorée</cite>, chapître 9</figcaption>
    </figure>
  </article></section>
</article>

<!-- Page 15 --><hr>

<article>
  <figure>
    <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-280.webp 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-380.webp 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-480.webp 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-640.webp 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-1280.webp 1280w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-840.jpg" title="Hans MEMLING, Triptyque de Jean-Baptiste et de Jean l'Évangéliste fermé, Musée Memling, Hôpital Saint-Jean, Bruges" alt="Hans MEMLING, Triptyque de Jean-Baptiste et de Jean l'Évangéliste fermé, Musée Memling, Hôpital Saint-Jean, Bruges" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-280.jpg 280w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-380.jpg 380w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-480.jpg 480w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-640.jpg 640w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-840.webp 840w,
    https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-1280.webp 1280w"></picture><figcaption>le triptyque fermé</figcaption>
  </figure>
  <h3 id="position-fermee" class="yellow">présentation des donateurs: le triptyque fermé</h3>

  <section><article>
    <section><article>
      <p>Les revers des volets s'ornent des portraits des donateurs agenouillés et accompagnés de leurs saints patrons debouts.</p>
      <p>Ils sont représentés dans des niches peu profondes.</p>
      <p>Tous ont été identifiés.</p>
    </article></section>

    <section><article>
      <section><article>
        <p>Sur volet gauche, depuis la gauche:</p>
        <ul>
          <li>Debout, <span style="color: #e6a64d;">sainte Agnès</span>, reconnaissable à l'agneau en bas sur le côté gauche,</li>
          <li>Agenouillée devant, <span style="color: #e6a64d;">Agnès CASEMBROOD</span> agenouillée.</li>
        </ul>
      </article></section>
      <section><article>
        <p>à la droite du volet gauche:</p>
        <ul>
          <li>Debout, <span style="color: #e6a64d;">sainte Claire</span> porte l'encensoir,</li>
          <li>protège sœur <span style="color: #e6a64d;">Claire VAN HULSEN</span>, agenouillée devant.</li>
        </ul>
      </article></section>
      <section><article>
          <p>Sur le volet droit, depuis la gauche:</p>
          <ul>
            <li>Debout, <span style="color: #e6a64d;">saint Jacques de Compostelle</span> vêtu en pélerin,</li>
            <li>agenouillé devant, <span style="color: #e6a64d;">Jacob DE KEUNINC</span></li>
          </ul>
      </article></section>
      <section><article>
        <p>à la droite du volet droit:</p>
        <ul>
          <li><span style="color: #e6a64d;">saint Antoine abbé</span>, que l'on reconnaît grâce à sa crosse et au porcelet,</li>
          <li>patron d'<span style="color: #e6a64d;">Antoine SEGHERS</span>, maître de l'hôpital.</li>
        </ul>
      </article></section>
    </article></section>

    <section><article>
      <p>Le triptyque fut probablement commandé avant <time datetime="1475">1475</time>, puisque c'est au cours de cette année-là que mourut Antoine SEGHERS.</p>
      <p>Il fut placé au-dessus du maître-autel en <time datetime="1479">1479</time>.</p>
    </article></section>
  </article></section>
</article>

<!-- Page 16 -->

<!-- Page 17 -->

<!-- Page 18 -->

<!-- Page 19 -->

<!-- Page 20 -->
`;

  let focusEditor;
  let showEditorState = true;
  let editorState = createExtendedThreeRichTextEditor(html);

  function handleChange(event) {
    editorState = event.detail.editorState;
  }

  function clearEditor(event) {
    editorState = clear(editorState);
    focusEditor();
  }

  function resetEditor(event) {
    editorState = createExtendedThreeRichTextEditor(html);
    focusEditor();
  }

  function showHtml(event) {
    alert(toHTML(editorState));
  }

  function showText(event) {
    alert(toPlainText(editorState));
  }

  onMount(() => focusEditor());

</script>

<ProsemirrorEditor
  {editorState}
  bind:focus={focusEditor}
  on:change={handleChange}
  placeholder="Go ahead and edit me!"/>

<div class="controls">
  <button on:click={clearEditor}>Clear</button>
  <button on:click={resetEditor}>Reset</button>
  <button on:click={showHtml}>Show HTML</button>
  <button on:click={showText}>Show Text</button>
</div>

<p>
  <label>Show serialized editor state
    <input type="checkbox" bind:checked={showEditorState}/>
  </label>
</p>

<p>
  information about html <a href='https://www.w3schools.com/tags/tag_ruby.asp' rel="nofollow external" target="_blank"><code>ruby</code></a> tag.
</p>

{#if showEditorState}
<pre>{JSON.stringify(toJSON(editorState), null, 2)}</pre>
{/if}
<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<div id="aboutmainblock">
<div class="pure-g about-div">
<div id="about_photo" class="block pure-u-4-7 size-4-7 responsive-container">

<figure>
  <picture><source media="(min-width: 959px)" sizes="43vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-840.webp 840w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1280.webp 1280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1600.webp 1600w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1920.webp 1920w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-2240.webp 2240w" type="image/webp"><source media="(min-width: 767px)" sizes="80vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-840.webp 840w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1280.webp 1280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1600.webp 1600w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1920.webp 1920w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-2240.webp 2240w" type="image/webp"><source sizes="100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-840.webp 840w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-1280.webp 1280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-1600.webp 1600w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-1920.webp 1920w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-2240.webp 2240w" type="image/webp"><source media="(min-width: 959px)" sizes="43vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-840.jpg 840w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1920.jpg 1920w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-2240.jpg 2240w"><source media="(min-width: 767px)" sizes="80vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-840.jpg 840w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-1920.jpg 1920w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-2240.jpg 2240w"><img src="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel-840.jpg" alt="devant le Mont-Saint-Michel en 2013" title="François VIDIT devant le Mont-Saint-Michel en 2013" class="verticalcenter" sizes="100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-840.jpg 840w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-1920.jpg 1920w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/01.photo_nom/francois_mtstmichel_focus-2240.jpg 2240w"></picture><figcaption>Il y a 8 ans.</figcaption>
</figure>

</div>
<div id="about_name" class="block pure-u-3-7">

<hgroup>
<h1><span title="Prénom" style="color:#000e5f;letter-spacing: 0px;word-break:keep-all;">François</span> <span style="color:#000e5f;letter-spacing: 0px;word-break:keep-all;" title="Nom">VIDIT</span></h1>
<h2>guide-interprète de Paris</h2>
</hgroup>

<p><span title="Prénom">François</span>, comme prénom, se prononce: <span title="prononciation du prénom « François »">[fʁɑ̃.swɑ]</span></p>
<p><audio controls="1" title="prononciation du prénom « François »" alt="" id="audio0"><source src="https://francois-vidit.com/user/sites/profile/pages/01.home/02.nom/Francois.mp3" type="audio/mp3">Your browser does not support the audio tag.</audio></p>

<p><span title="Nom">VIDIT</span>, ici le nom, se prononce: <span title="prononciation du nom de famille « VIDIT »">[vidi]</span></p>
<tr>
<p><audio controls="1" title="prononciation du nom de famille « VIDIT »" alt="" id="audio1"><source src="https://francois-vidit.com/user/sites/profile/pages/01.home/02.nom/VIDIT.mp3" type="audio/mp3">Your browser does not support the audio tag.</audio></p>

<p><span style="color:#000e5f">François VIDIT est </span> <span title="Profession" style="color:#000e5f">guide-interprète japonais</span><span style="color:#000e5f"> à </span><span style="color:#000e5f">Paris</span><span style="color:#000e5f">. Depuis plus de <time datetime="P15Y">15 ans</time>, il exerce sous diverses formes, du guidage touristique, conseil interculturel, interprétariat consécutif, à la traduction.</span></p>

</div>
</div>

<div class="pure-g about-div">
<div id="about_age" class="block pure-u-1-6 size-1-6" style="border-style: none;padding-top: 0px;margin-bottom: 0px;">     
</div>

<div id="about_parisien" class="block pure-u-5-6">

<h2>Un Parisien ayant fait escale à <span title="Tokyo">Tōkiō</span></h2>

<p>Comme ses parents, François VIDIT est Parisien.</p>
<p>Il découvre la culture japonaise grâce au <a href="https://fr.wikipedia.org/wiki/Go_(jeu)" title="https://fr.wikipedia.org/wiki/Go_(jeu)">jeu de go</a> et commence à en apprendre la langue, en autodidacte, à l'âge de dix-sept ans.</p>
<p>Un diplôme de l'<a href="https://www.google.fr/maps/place/E.N.S.A.P.L.V : École Nationale Supérieure d'Architecture de Paris La Villette/@48.8936163,2.378878,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66dd283e5884d:0x9d97e01a0a060349!8m2!3d48.8936128!4d2.3810667" title="https://www.google.fr/maps/place/E.N.S.A.P.L.V.">École Nationale d'Architecture de Paris-La Villette</a> en poche, il part au Japon.</p>
<p>Il intègre une <a href="http://www.garde-intl.com/" title="http://www.garde-intl.com/">entreprise</a> de conception et de réalisation de réseaux commerciaux de marques de luxe dans les plus grandes villes japonaises dans le prestigieux quartier d'<a href="https://www.google.fr/maps/place/Minamiaoyama, Minato-ku, Tokyo 107-0062, Japon/@35.6645978,139.7148829,15.75z/data=!4m5!3m4!1s0x60188b6254cc464f:0x99773132a4b583e6!8m2!3d35.6653189!4d139.7149995" title="https://www.google.fr/maps/place/Minamiaoyama">Aoyama</a> à <a href="#fn:1" class="footnote-ref">Tōkiō</a>.</p>
<p>De retour en France, il change de profession et devient interprète.</p>

<aside>
<p><i>Tōkiō</i>: cette orthographe est rare, mais c'est la transgraphie française régulière; elle date de la fin du dix-neuvième siècle; elle a encore cours officiellement, par exemple dans certains actes officiels dont on souhaite marquer le caractère solennel; à la différence de la transgraphie anglaise actuelle, elle reflète fidèlement la prononciation originale en indiquant les nuances de prononciation par accentuation; transgraphie anglaise: Tokyo.</p>
<p class="puce"><a href="#fnref1:1"> retour au texte ↩</a></p>
</aside>

</div>
</div>

<div class="pure-g about-div">
<div id="about_guider" class="block pure-u-3-4">
<h2>guider, c'est partager!</h2>
<p>Se confronter à des visages différents, éprouver le caractère solennel de la rencontre, se trouver en dehors des habitudes, et par là sentir se manifester une humanité nouvelle en soi-même, intimement et mystérieusement.</p>
<p>Par là, avoir la chance de se trouver sans cesse défait de nombre de préjugés, plus universel à soi-même à la rencontre de l'humanité et du monde.</p>
</div>

<div id="about_autoportrait" class="block pure-u-1-4 size-1-4 responsive-container" style="margin-left: 0px">

<figure>
  <picture><source media="(min-width: 959px)" sizes="19vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.webp 840w" type="image/webp"><source media="(min-width: 767px)" sizes="80vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.webp 840w" type="image/webp"><source sizes="97vw, 100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.webp 840w" type="image/webp"><source media="(min-width: 959px)" sizes="19vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.jpg 840w"><source media="(min-width: 767px)" sizes="80vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.jpg 840w"><img src="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.jpg" alt="autoportrait, 1995" title="autoportrait de François VIDIT, 1995" class="verticalcenter" sizes="97vw, 100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/06.autoportrait_philosophy/autoportrait1930-840.jpg 840w"></picture><figcaption>Par autoportrait, 25 ans auparavant.</figcaption>
</figure>

</div>
</div>

<div class="pure-g about-div">
<div id="about_aquarelle" class="block pure-u-1-3 size-1-3 responsive-container">

<figure>
  <picture><source media="(min-width: 959px)" sizes="25vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.webp 840w" type="image/webp"><source media="(min-width: 767px)" sizes="80vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.webp 840w" type="image/webp"><source sizes="97vw, 100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.webp 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.webp 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.webp 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.webp 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.webp 840w" type="image/webp"><source media="(min-width: 959px)" sizes="25vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.jpg 840w"><source media="(min-width: 767px)" sizes="80vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.jpg 840w"><img src="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.jpg" alt="aquarelle, 2003" title="aquarelle de François VIDIT, 2003" class="verticalcenter" sizes="97vw, 100vw" srcset="https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-280.jpg 280w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-380.jpg 380w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-480.jpg 480w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-640.jpg 640w,
  https://francois-vidit.com/user/sites/profile/pages/01.home/07.aquarel_rireki/aquarel_rireki-840.jpg 840w"></picture><figcaption>Par aquarelle, 17 ans auparavant.</figcaption>
</figure>

</div>
                            
<div id="about_rireki" class="block pure-u-2-3" style="margin-left: 0px">

<h2>Cursus professionnel</h2>

<ol class="year">
  <li>
    <span class="year-width"><time datetime="1999">1999</time>:</span>&nbspObtention du Certificat de Compétence en Langue Japonaise <a href="http://www.jlpt.jp/e/index.html" title="http://www.jlpt.jp/e/index.html">Niveau 3</a> de l'<a id="fnref1:1" href="#fn:1">Association of International Education, Japan</a>
  </li>
  <li>
    <span class="year-width"><time datetime="2003">2003</time>:</span>&nbspAdmis au <abbr title="huitième">8<suli>ème</suli></abbr> <a href="http://www.kanken.or.jp/bjt/english/" title="http://www.kanken.or.jp/bjt/english/">Test de compétence en japonais des affaires</a> <a id="fnref1:2" href="#fn:2"><abbr title="Japanese Listening and Reading Test">JLRT</abbr></a> <a id="fnref1:3" href="#fn:3"><abbr title="Japanese External Trade Organization">JETRO</abbr></a>
  </li>
  <li><span class="year-width"><time datetime="2011">2011</time>:</span>&nbspObtention du titre de <a href="http://www.entreprises.gouv.fr/tourisme/metiers/guide-conferencier" title="http://www.entreprises.gouv.fr/tourisme/metiers/guide-conferencier">Guide-Interprète National</a> à l'<a href="https://www.google.fr/maps/place/Université Toulouse - Jean Jaurès/@43.5779941,1.3996184,17z/data=!3m1!4b1!4m5!3m4!1s0x12aeba4c48abb62d:0xaa534804f879cf3b!8m2!3d43.5779941!4d1.4018071" title="https://www.google.fr/maps/place/Université+Toulouse+-+Jean+Jaurès"><span style="font-variant: small-caps;">Université Toulouse-Jean Jaurès</span></a>
  </li>
</ol>

<aside>
  <p id="fn:1" class="no-puce"><i>Association of International Education, Japan</i>: association japonaise d'enseignement international, Japon&nbsp;<a href="#fnref1:1">↩</a></p>
  <p id="fn:2" class="no-puce"><i><abbr title="Japanese Listening and Reading Test">JLRT</abbr></i>: Japanese Listening and Reading Test, en français test de compréhension orale et écrite&nbsp;<a href="#fnref1:2">↩</a></p>
  <p id="fn:3" class="no-puce"><i><abbr title="Japanese External Trade Organization">JETRO</abbr></i>: Japanese External Trade Organization, en français Organisation Japonaise du Commerce Extérieur&nbsp;<a href="#fnref1:3">↩</a></p>
</aside>

<div class="pure-g about-div">
<div id="about_hyoshiki" class="block pure-u-2-3">

<h2>informations pratiques</h2>

<p><span style="min-width: 260px;"><abbr title="numéro">n°</abbr> d'imma<wbr>tri<wbr>cu<wbr>lation profes<wbr>sion<wbr>nelle: </span><wbr>GC1375538P</p>
<p><span style="min-width: 260px;float: left;">affi<wbr>liation: </span><wbr><a href="http://www.agij-paris.com/" title="http://www.agij-paris.com/"><abbr title="Association des Guide-Interprètes de langue Japonaise">AGIJ</abbr></a></p>
<p><span style="width: 260px;float: left;">autres lan<wbr>gues parlées: </span><wbr>anglais, espagnol</p>
<p><span style="width: 260px;float: left;">aire d'exer<wbr>cice: </span><wbr><a href="https://www.google.fr/maps/place/France/@46.1279326,-2.2764268,6z/data=!3m1!4b1!4m5!3m4!1s0xd60a02933785731:0x6bfd3f96c747d9f7!8m2!3d46.227638!4d2.213749" title="https://www.google.fr/maps/place/France/">France</a>, <a href="https://www.google.fr/maps/place/Bruges, Belgique/@51.2605832,3.0820626,11z/data=!3m1!4b1!4m5!3m4!1s0x47c350d0c11e420d:0x1aa2f35ac8834df7!8m2!3d51.209348!4d3.2246995" title="https://www.google.fr/maps/place/Bruges,+Belgique/">Bruges</a></p>
<p><span style="width: 260px;float: left;">adresse: </span><wbr><a href="#map" title="#map">10, rue Théophraste Renaudot Paris <abbr title="quinze">XV</abbr></a></p>
<p><span style="width: 260px;float: left;">contact: </span><wbr><a href="http://www.francois-vidit.com/fr#contact" title="https://www.francois-vidit.com/fr#contact">ici</a></p>
</div>
</div>

<div id="about_map" class="block pure-u-1-3 size-1-3 responsive-container" style="margin-left: 0px;">
</div>
</div>
</div>

</article>
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
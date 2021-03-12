<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 1 -->

<div id="body-inner">
<h1 class="yellow"><ruby style="color:#555;" lang="fr">Triptyque de Jean le Baptiste et de Jean l'Évangéliste<rt style="color:#999;" lang="nl">Triptiek van Johannes de Doper en Johannes de Evangelist</rt></ruby></h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_0-1920.jpg 1920w"></picture><figcaption>le triptyque ouvert</figcaption></figure>
<div class="notices yellow">
<p>Ce triptyque a été conçu et réalisé pour le maître-autel de la nouvelle abside de l'église de l'ancien hôpital Saint-Jean de Bruges construite en 1473-74, où il se trouve toujours.<br>
Le cadre porte en latin l'inscription «<ruby lang="fr">ŒUVRE<rp>(</rp><rt lang="la">OPVs</rt><rp>)</rp>&nbsp;<rp>(</rp><rt lang="la">&nbsp;</rt><rp>)</rp>D'HANS<rp>(</rp><rt lang="la">IOHANNIS</rt><rp>)</rp>&nbsp;<rp>(</rp><rt lang="la">&nbsp;</rt><rp>)</rp>MEMLING<rp>(</rp><rt lang="la">MEMLING</rt><rp>)</rp></ruby>», première signature connue du peintre, et une date: «1479».<br>
Il comporte un panneau central, qu'encadrent deux volets à droite et à gauche fixés par des charnières.<br>
Les personnages représentés sont un tout petit peu moins grands que grandeur nature.<br>
Dans les pages qui suivent, nous présentons les différents aspects cette œuvre afin d'en permettre une compréhension approfondie:</p>
<ol>
<li>d'abord par une <a href="#presentation-photographique" title="presentation-photographique" id="renvoi-presentation-photographique" class="yellow">présentation photographique de l'œuvre dans son espace d'exposition</a>, la nouvelle abside de l'église de l'hôpital,</li>
<li>puis parune <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:2#description" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:2#description" class="yellow">description détaillée de ce qu'elle représente</a>,</li>
<li>enfin par la <a href="/docs/fr/bruges/hopital-saint-jean/sint-jean/page:16#mise-en-relation" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:16#mise-en-relation" id="renvoi-mise-en-relation" class="yellow">mise en relation des différents éléments de l'image avec les différents textes</a> sur lesquels il est raisonnable de penser que le peintre lui-ême s'est fondé afin de concevoir sa représentation des sujets religieux. </li>
</ol>
</div>
<p><br></p>
<h2 id="a-propos-de-cet-article" class="yellow">à propos de cet article</h2>
<p>Pour réaliser cet article, nous sommes redevables de travaux de référence, particulièrement ceux de <a href="#de-vos-1" id="renvoi-de-vos-1" class="yellow">Dirk DE VOS, “Hans Memling - L'œuvre complet”</a> et <a href="#de-vos-2" id="renvoi-de-vos-2" class="yellow">“Hans Memling”</a>.<br>
Notre but n'st toutefois pas de produire ici une  interprétation de l'œuvre mais plutôt <span style="color: #e6a64d;">une desciption</span> et à travers elle de mettre à disposition les éléments qui permettent de s'en saisir: <span style="color: #e6a64d;">des reproductions de qualité</span> <a href="#note-1" title="note-1" id="renvoi-note-1"><sup style="color:#555;">1</sup></a> , <span style="color: #e6a64d;">les principales sources de l'œuvre</span>, quelles soient textuelles ou picturales, ce qui aujourd'hui, même dans le cas d'ouvrages papier spécialisés disponibles par exemple dans des bibliothèques, ne se fait trop souvent que par renvoi ou sous-entendu.<br>
Notre but aura été atteint si le lecteur se trouve en position de <span style="color: #e6a64d;">mesurer et ainsi d'approfondir lui-même sa perception</span> d'une œuvre dont nous pensons qu'elle mérite de retenir l'attention <span style="color: #e6a64d;">tant est grand l'éclat de sa présence</span>.</p>
<p><br></p>
<div class="notices yellow">
<h3 id="table-des-matieres" class="yellow">table des matières</h3>
<ol>
<li><a href="#presentation-photographique" title="présentation photographique" class="yellow">présentation photographique de l'œuvre dans son espace d'exposition</a></li>
<li><a href=/docs/fr/bruges/hopital-saint-jean/saint-jean/page:2#description" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:2#description" class="yellow">description de l'œuvre</a>
<ul>
<li><a href="/docs/fr/bruges/hoptal-saint-jean/saint-jean/page:2#couronnement" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:2#couronnement" class="yellow">le couronnement de la vierge</a></li>
<li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#catherine-d-alexandrie" tile="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#catherine-d-alexandrie" class="yellow">catherine d'alexandrie</a></li>
<li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#les-deux-jean" title="https//francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#les-deux-jean" class="yellow">les deux jean</a>
<ul><li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#jean-le-baptiste-2" title="ttps://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#jean-le-baptiste-2" class="yellow">jean le baptiste</a></li>
<li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jeanpage:3#jean-l-evangeliste-3" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#jean-l-evangeliste-3" class="yellow">jean l'évangéliste</a></li>
<li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-e-jean" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean" class="yellow">le nom «jean», son lien avec l'institution, son étymologie</a></li></ul></li>
<li><a href="/docs/fr/bruges/hopita-saint-jean/saint-jean/page:3#barbe" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#barbe" class="yellow">barbe la grande martyre</a></li>
<li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:4#conversation" title="https://francois-viit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:4#conversation" class="yellow">une conversation sacrée</a></li>
<li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:4#devotion-moderne" title="htps://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:4#devotion-moderne" class="yellow">la dévotion moderne</a></li>
<li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jeanpage:4#dispositif-architectural" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:4#dispositif-architectural" class="yellow">le dispositif architectural</a></li>
<li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:5#organsation-du-recit" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:5#organisation-du-recit" class="yellow">organisation du récit</a></li>
<li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:6#legendes" title="https//francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:6#legendes" class="yellow">légendes de jean le baptiste et jean l'évangéliste</a><ul>
<li><a href="/docs/fr/bruges/hoital-saint-jean/saint-jean/page:6#legende-de-jean-le-baptiste" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:6#legende-de-jean-le-baptiste" class="yellow">légende de jean le baptiste</a></li>
<li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:10#legede-de-jean-l-evangeliste" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:10#legende-de-jean-l-evangeliste" class="yellow">légende de jean l’évangéliste</a></li></ul></li>
<li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:15#posiion-fermee" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:15#position-fermee" class="yellow">présentation des donateurs: le tryptique fermé</a></li>
</ul></li>
<li><a href=/docs/fr/bruges/hopital-saint-jean/saint-jean/page:16#mise-en-relation" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:16#mise-en-relation" class="yellow">différents textes à l'origine des scènes représentées</a>
<ul>
<li><a href=/docs/fr/bruges/hopital-saint-jean/saint-jean/page:16#cath-selon-legende" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:16#cath-selon-legende" class="yellow">catherine d'alexandrie selon la légende dorée</a></li>
<li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:17#barb-selon-legende" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:17#barbe-selon-legende" class="yellow">barbe la grande martyre selon la légende dorée</a></li>
<li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jeanpage:18#jean-selon-legende" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:18#jean-selon-legende" class="yellow">jean l'évangéliste selon la légende dorée chapître 9</a></li>
<li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jeanpage:19#jean-selon-legende-2" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:19#jean-selon-legende-2" class="yellow">jean l'évangéliste selon la légende dorée chapître 65</a></li>
<li><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:20#apocaypse" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:20#apocalypse" class="yellow">vision du trône du dieu et de la cour céleste: le vivant sur le trône et l'agneau</a></li>
</ul></li
</ol>
</div>
<p>
			</p></div>
			

			<br>
						<div id="body-inner">
				<p></p>
<h2 id="presentation-photographique" class="yellow">présentation photographique de l'œuvre dans son espace d'exposition</h2>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_1-1920.jpg 1920w"></picture><figcaption>Vue de l'espace d'exposition depuis l'entrée de l'église de l'hôpital Saint-Jean</figcaption></figure>
<p><br></p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_2-1920.jpg 1920w"></picture><figcaption>Vue de l'espace d'exposition depuis l'intérieur de l'église de l'hôpital Saint-Jean</figcaption></figure>
<p><br></p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/01.saint-jean_1/saint-jean_3-1920.jpg 1920w"></picture><figcaption>Vue de l'espace du triptyque depuis l'abside de l'église de l'hôpital Saint-Jean</figcaption></figure>
<p>
			</p></div>

			<br>
						<div id="body-inner">
				<p></p>
<div class="notices yellow">
<h3 id="de-vos" class="yellow">références des livres cités de Dirk DE VOS:</h3>
<ul>
<li>en français:
<pre id="de-vos-1"><table>
<thead>
<tr>
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
<td>Hans Memling: l'œuvre complet</td>
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
</pre></li>
<li>en anglais:
<pre id="de-vos-2"><table>
<thead>
<tr>
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
</pre>
<p><a href="#renvoi-de-vos-1" title="renvoi-de-vos-1">↑ retour cette page</a> <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:2#renvoi-de-vos-2" title="renvoi-de-vos-2">↑ retour page 2</a></p></li>
</ul>
</div>
<div class="notices yellow">
<h3 id="lorentz" class="yellow">références du livre cité de Philippe LORENTZ:</h3>
<pre id="lorents-1"><table>
<thead>
<tr>
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
</pre>
<p><a href="#renvoi-lorentz-1" title="renvoi-de-vos-1">↑ retour cette page</a> <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#renvoi-lorentz-2" title="renvoi-lorentz-2">↑ retour page 3</a></p>
</div>
<p><br></p>
<hr>
<p><a href="#renvoi-note-1" title="renvoi note-1" id="note-1">note:</a><br>
les reproductions de l'œuvre que nous mettons à disposition du public sont à notre connaissance les meilleures actuellement existantes en dehors d'ouvrages professionnels: elles nous ont demandé un énorme travail du fait de la faiblesse de l'intensité et du jaune de l'éclairage actuel.<br>
<a href="#renvoi-note-1" title="renvoi note-1">↑ retour au texte</a> </p>
			</div>

<!-- Page 2 --><hr>

<div id="body-inner">
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/saint-jean_4-1920.jpg 1920w"></picture><figcaption>vue du triptyque ouvert</figcaption></figure>
<p>Nous décrivons d'abord ce que <span style="color: #e6a64d;">l'œuvre représente</span> et pour cela suivons <span style="color: #e6a64d;">le chemin du regard</span>, commençant par la <span style="color: #e6a64d;">scène principale</span>.</p>
<h2 id="description" class="yellow">description de l'œuvre</h2>
<h3 id="couronnement" class="yellow">le couronnement de la vierge</h3>
<p>Au centre, <span style="color:#e6a64d;">la Vierge</span> trône sur un siège d'or devant un tissu broché sous u baldaquin de velours rouge.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/vierge-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “la Vierge et l'enfant Jésus”</figcaption></figure>
<p>Elle <span style="color: #e6a64d;">est couronnée “Reine du ciel” par deux petits anges bleus foncés</span> qui voltigent au-dessus d'elle.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/deux-anges-1920.jpg 1920w"></picture><figcaption>détail du panneau central, deux anges portent la Couronne de la Vierge</figcaption></figure>
<p>Sur ses genoux, <span style="color: #e6a64d;">l'enfant Jésus</span>, assis, tient une pomme de sa main gauche, et passe de sa main droite <span style="color: #e6a64d;">un anneau</span> d'or au doigt d'<span style="color: #e6a64d;">une femme</span>, en bas à gauche de la vierge, sur le devant.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/02.saint-jean_2/enfant-jesus-1920.jpg 1920w"></picture><figcaption>détail du panneau central, l'enfant Jésus</figcaption></figure>
</div>

<!-- Page 3 --><hr>

<div id="body-inner">
<p><span style="color: #e6a64d;">L'épée</span> et <span style="color: #e6a64d;">la roue brisée</span> que l'on voit à ses pieds sont <span style="color: #e6a64d;">les instruments de son martyre</span>: c'est <a href="https://fr.wikipedia.org/wiki/Catherine_d'Alexandrie" title="https://fr.wikipedia.org/wiki/Catherine_d'Alexandrie" class="yellow">Catherine d'Alexandrie</a>.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset=
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.jpg 1920w"></picture><figcaption>Catherine d'Alexandrie</figcaption></figure>
<h3 id="catherine-d-alexandrie" class="yellow">catherine d'alexandrie</h3>
<p><a href="https://fr.wikipedia.org/wiki/Catherine_d'Alexandrie" title="https://fr.wikipedia.org/wiki/Catherine_d'Alexandrie" id="catherine-d-alexandrie-2" class="yellow">Catherine d'Alexandrie</a> était, depuis la fin du XIII<sup style="color:#555;">ème</sup> siècle, une sainte très populaire dont la légende, rapportée pa  <a href="https://fr.wikipedia.org/wiki/Jacques_de_Voragine" title="https://fr.wikipedia.org/wiki/Jacques_de_Voragine" class="yellow">Jacques De Voragine</a> dans le <span style="color: #e6a64d;">chapître 168</span> de la <a href="https://fr.wikipedia.org/wiki/La_Légende_dorée" title="https:/fr.wikipedia.org/wiki/La_Légende_dorée" class="yellow">“La Légende Dorée”</a>, intitulé <a href="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:6" title="https://francois-vidit.om/docs/fr/saint-jean/page:6" class="yellow">“sainte Catherine”</a> est passionnant. Nous le reproduisons <a href="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:6" titl="https://francois-vidit.com/docs/fr/saint-jean/page:6" class="yellow">ici</a>.<br>
Il est tout à fait probable que Memling se soit fondé sur ce texte.
Bien que leshistoriens modernes estiment que Catherine d'Alexandrie n'a pas réellement existé <sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">1</a></sup> et que son culte ait été retiré du calendrier général de l'église catholique en 1970 <sup id="fnref1:2"><a href="#fn:2" class="footnote-ref">2</a></sup>, selon sa légende, <span style="color: #e6a64d;">Catherine</span> est une <span style="color: #e6a64d;">patricienne</span> connue pour son <span style="color: #e6a64d;">exceptionnelle éducation</span> et sa très <span style="color: #e6a64d;">grande beauté</span>, qui aurait vécu à Alexandrie au III<sup style="color:#555;">ème</sup> ou au IV<sup style="color:#555;">ème</sup> siècles.<br>
Elle y <span style="color: #e6a64d;">défie</span> l'empereur romain de l'époque <a href="https://fr.wikipedia.org/wiki/Maxence_(empereur_romain)" title="https://fr.wikipedia.org/wiki/Maxence_(empereur_romain)" class="yellow">Maxence</a> qui contraint alors sous la menace les chrétiens à l'abjuration publique.
Maxence est surpris de trouver cette femme exceptionnelle fac à lui mais il relève le défi et, vaincu au terme d'un long combat spirituel plein de rebondissements, lui propose de l'épouser.
Catherine, au nom de sa foi, refuse et choisit de subir le martyre.
Au moment de son exécution, la voix de Jésus lui-même se serait alors fait entendre du ciel pour lui dire:
<span style="color: #e6a64d;">«Viens, ma bien-aimée, ma belle!»</span></p>
<p>Du fait de la présence de sainte Catherine, le triptyque a quelques fois été appelé <span style="color: #e6a64d;">“le mariage mystique de sainte Catherine”</span> <sup id="fnref1:5"><a href="#fn:5" class="footnote-ref">3</a></sup>.
Ce sont en fait <span style="color: #e6a64d;">deux hommes</span>, qui <span style="color: #e6a64d;">sont les personnages principaux</span> par la quantité de scènes qui relatent leur histoire: ils se tiennent comme <span style="color: #e6a64d;">deux jumeaux</span>, debouts, à droite et à gauche de part et d'autre de la vierge sur le derrière.</p>
<h3 id="les-deux-jean" class="yellow">les deux jean</h3>
<h4 id="jean-le-baptiste-2" class="yellow">jean le baptiste</h4>
<p>Sur le derrière, à gauche, la présence de <span style="color: #e6a64d;">l'agneau blanc</span> nous permet d'identifier <span style="color: #e6a64d;">l'homme portant la</span> magnifique <span style="color: #e6a64d;">tunique violette</span> comme <a href="https://fr.wikipedia.org/wiki/Jean_le_Baptiste" title="https://fr.wikipedia.org/wiki/Jean_le_Baptiste" id="jean-le-baptiste" class="yellow">Jean le Baptiste</a>.
Celle-ci rappelle la parole qu'il adressa à ses disciples pour <span style="color #e6a64d;">annoncer</span> la venue de <span style="color: #e6a64d;">Jésus dans le monde</span> <span style="color: #999;">(Jean, 1.29)</span>: <span style="color: #e6a64d;">«<ruby style="color:#e6a64d;" lang="fr">Voici&nbsp;l'agneau&nbsp;de&nbsp;dieu<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="la">Ecce&nbsp;agnus&nbsp;dei</rt><rp>)</rp></ruby>»</span>.
De fait Jean désigne aussi de son bras droit l'enfant Jésus.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-le-baptiste-1920.jpg 1920w"></picture><figcaption>Jean le Baptiste</figcaption></figure>
<p>L'agneau est ici un symbole nouveau propre à la foi chrétienne.<br>
Au contraire de l'ancienne foi hébraïque où, pour plaire à dieu, il fallait lui sacrifier des animaux, le christianisme affirme que <span style="color: #e6a64d;">le seul véritable sacrifice qui plaît à dieu</span> est celui que <span style="color: #e6a64d;">le croyant lui fait de lui-même</span>, à l'imitation de Jésus et en référence à cette parole du prophète <a href="https://fr.wikipedia.org/wiki/Isaïe" title="https://fr.wikipedia.org/wiki/Isaïe" id="isaie" class="yellow">Isaïe</a> <span style="color: #999;">(Isaïe, 53-7)</span>:
<span style="color: #e6a64d;">«Maltraité, il s’humilie, il n’ouvre pas la bouche: comm <span style="text-decoration: underline;">un agneau</span> conduit à l’abattoir».</span></p>
<p>Sous sa tunique violette, se trouve <span style="color: #e6a64d;">une autre tunique</span>, brune claire, que le texte nous précise être de <span style="color: #e6a64d;">poil de chameau</span> <span style="color: #999;">(Marc 1:6)</span>, à l'imitation du vêtement de poil du prophète <a href="https://fr.wikipedia.org/wiki/Élie" title="https://fr.wikipedia.org/wiki/Élie" id="elie" class="yellow">Élie</a> <span style="color: #999;">(2 Rois 1:8)</span>.<br>
Ce même vêtement de poil fait aussi référence à un épisode de la Génèse <span style="color #999;">(Gn 27:1-40)</span> durant lequel <a href="https://fr.wikipedia.org/wiki/Jacob" title="https://fr.wikipedia.org/wiki/Jacob" id="jacob" class="yellow">Jacob</a>, sur l'indication de sa mère <a href="https://fr.wikipedia.org/wiki/Rébecca_(Bible)" title="https://fr.wikipedia.org/wiki/Rébecca_(Bible)" id=rebecca" class="yellow">Rebecca</a>, se fait passer pour son frère <a href="https://fr.wikipedia.org/wiki/Ésaü" title="https://fr.wikipedia.org/wiki/Ésaü" id="esau" class="yellow>Ésaü</a> qui est très <span style="color: #e6a64d;">poilu</span>, auprès de son père aveugle, <a href="https://fr.wikipedia.org/wiki/Isaac" title="ttps://fr.wikipedia.org/wiki/Isaac" id="isaac" class="yellow">Isaac</a>, en revêtant un <span style="color: #e6a64d;">vêtement de poil</span>. Sa ruse lui permet d'être indûment béni et de devenir ainsi l'unique hértier à la place d'Ésaü. Cette tunique est aussi un signe de domination de l'animalité, et dans le cas de Jean le Baptiste, le chameau étant un animal qui permet de traverser le désert, de domination l'animalité par l'ascèse.</p>
<p>De l'autre côté, à droite, <span style="color: #e6a64d;">un autre homme</span> debout, habillé comme un prêtre, de <span style="color: #e6a64d;">rouge</span>, fait de sa main droite le signe de croix sur <span style="color: #e6a64d;">une coupe</span>, dans laquelle il y a un <span style="color: #e6a64d;">serpent</span>: c'est <a href="https://fr.wikipedia.org/wiki/Jean_(apôtre)" title="https://fr.wikipedia.org/wiki/Jean_(apôtre)" id="jean-l-evangeliste-4" class="yellow">Jean l'Évangéliste</a>. </p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" rcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>Jean l'Évangéliste</figcaption></figure>
<h4 id="jean-l-evangeliste-3" class="yellow">jean l'évangéliste</h4>
<p>Nous reconnaissons <a href="https://fr.wikipedia.org/wiki/Jean_(apôtre)" title="https://fr.wikipedia.org/wiki/Jean_(apôtre)" id="jean-l-evangeliste" class="yellow">Jean l'Évangéliste</a> à un épisode du <span style="color: #999;">chapître 9</span> de la <a href="https://fr.wikipedia.org/wiki/La_Légende_drée" title="https://fr.wikipedia.org/wiki/La_Légende_dorée" id="legende-doree-2" class="yellow">“Légende Dorée”</a>, que nous rapportons <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" title="https://francois-vidit.comdocs/fr/bruges/hopital-saint-jean/saint-jean/page:18#aristodeme" id="renvoi-aristodeme" class="yellow">ici</a>.<br>
Jean y affronte <span style="color: #e6a64d;">Aristodème</span>, prêtre du temple de Diane en Asie <span style="color: #999;">(san doute Éphèse)</span>, qui le défie publiquement de <span style="color: #e6a64d;">boire</span> une <span style="color: #e6a64d;">coupe empoisonnée</span>.
Celui-ci fait, comme Memling le représente, le <span style="color: #e6a64d;">signe de croix</span>, boit la coupe mais le poison ne lui fait aucun mal.<br>
Le <span style="color: #e6a64d;">serpent</span> évoque aussi une parole que Jésus adresse à <a href="https://fr.wikipedia.org/wiki/Nicodème" title="https://fr.wikipedia.org/wiki/Nicodème" id="nicodeme" class="yellow">Nicodème</a> <span style="color: #999;">(Jean 3,14)</span> <span style="color: #e6a64d;">«Comme Moïse a élevé le serpent dans le désert, il faut que le fis de l'homme soit élevé, afin que quiconque croit ait, en lui, la vie éternelle»</span>.</p>
<h4 id="le-nom-de-jean" class="yellow">le nom «jean», son lien avec l'institution, son étymologie</h4>
<p>Les nombreux détails qui racontent leurs deux légendes sur toute l'étendue intérieure du triptyque en font les <span style="color: #e6a64d;">personnages principaux</span>.
Tous deux sont appelés <span style="color: #e6a64d;">«Jean»</span>, ce qui, en creux, matérialise dans l'œuvre <span style="color: #e6a64d;">l'institution commanditaire</span>, <span style="color: #e6a64d;">l'Hôpital Saint-<span style="text-decoration: underline;">Jean</span> de Bruges</span> et justifie l'appellation officielle actuelle, <span style="color: #e6a64d;">“Triptyque de Jean le Baptiste et de Jean l'Évangéliste”</span>.</p>
<p>L'étymologie du prénom «Jean» vient de l'hébreu «<ruby style="color:#e6a64d;" lang="fr">Yo<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">יו</rt><rp>)</rp>kha<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">ח</rt><rp>)</rp>nan<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">נן</rt><rp>)</rp></ruby>», dont la prononciation est:<br>
</p><div style="text-align: center;"><audio controls="1" title="prononciation de Yokhanan en hébreu" alt="ici"><source src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/prononciation-yokhanan.mp3">Your browser does not support the audio tag.</audio></div><br>
qui signifie littéralement «<ruby style="color:#e6a64d;" lang="fr">dieu<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">Yo</rt><rp>)</rp></ruby>» est «<ruby style="color:#e6a64d;" lang="fr">grâce<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">khanan</rt><rp>)</rp></ruby>» ou «<ruby style="color:#e6a64d;" lang="fr">miséricorde<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="he">khanan</rt><rp>)</rp></ruby>».
Comme «dieu» veut dire aussi en hébreu «ce qui est», cela signifie également <span style="color: #e6a64d;">«celui en qui est»</span> la <span style="color: #e6a64d;">«grâce»</span> ou  la <span style="color: #e6a64d;">«miséricorde»</span>.<br>
Si <span style="color: #e6a64d;">ce prénom</span> a été porté par plusieurs personnages mineurs de l'histoire du peuple hébreu, il n'<span style="color: #e6a64d;">est devenu</span> très <span style="color: #e6a64d;">populaire</span> qu'après l'apparition du christianisme, <span style="color: #e6a64d;">dans le monde chrétien</span>, à la suite du rôle très important que chacun d'eux accomplit, rôles que nous détaillons bientôt.<p></p>
<p>De l'autre côté de la vierge, sur le devant, à droite, <span style="color: #e6a64d;">une autre femme</span>, vétue d'<span style="color: #e6a64d;">une magnifique tunique de laine verte</span> telle que seule Bruges en produisait au XV<sup style="color:#555;">ème</sup> siècle, <span style="color: #e6a64d;">lit</span>.
Sa présence répond à celle de <a href="#catherine-d-alexandrie" class="yellow">Catherine d'Alexandrie</a> sur le devant de l'autre côté.
Derrière elle, <span style="color: #e6a64d;">une tour tabernacle en pierre blanche</spa> nous indique qu'il s'agit de <a href="https://fr.wikipedia.org/wiki/Barbe_la_grande_martyre" title="https://fr.wikipedia.org/wiki/Barbe_la_grande_martyre" id="barbe-la-grande-martyre" class="yellow">Barbe la grande martyre</a> <sup id="fnref1:3"><a href="#fn:3" class="footnote-ref">4</a></sup>.</p
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.jpg 1920w"></picture><figcaption>Barbe la grande martyre</figcaption></figure>
<h3 id="barbe" class="yellow">barbe la grande martyre</h3>
<p>Comme pour <a href="#catherine-d-alexandrie" class="yellow">Catherine d'Alexandrie</a>, les historiens modernes doutent de la réalité de son existence et son nom a également été retiré du calendrier général <supid="fnref2:2"><a href="#fn:2" class="footnote-ref">2</a></sup>; le texte sur lequel Memling s'est fondé pour la représenter ne fait pas non plus partie de la <a href="https://fr.wikipedia.org/wiki/La_Légende_dorée" title="https://fr.wikipedia.org/wiki/La_Légende_dorée" id="legende-doree-2" class="yellow">Légende Dorée</a> mais, comme d'autres textes, y a été ajouté ensuite.
Nous le reproduisons dans son intégralité <a href="ttps://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:7" title="https://francois-vidit.com/docs/fr/saint-jean/page:7" class="yellow">ici</a>.<br>
Selon sa légende, Barbe habite <a href="https://fr.wikipedia.org/wiki/Nicomédie" title="https://fr.wikipedia.org/wiki/Nicomédie" id="nicomeie" class="yellow">Nicomédie</a>, capitale de l'ancienne province de <a href="https://fr.wikipedia.org/wiki/Bithynie" title="https://fr.wikipedia.org/wiki/Bithynie" id="bithynie class="yellow">Bithynie</a> et qui se trouve située dans le nord de la Turquie actuelle et donne sur la Mer Noire.
Barbe a le défaut d'être blle .., tellement belle, que très jeune, <span style="color: #e6a64d;">son père l'enferme dans une tour</span>!<br>
Le texte nous apprend que Barbe sent alors <span style="color: #e6a64d;">«le néant des choses terrestres»</span> et commence à se préoccuper <span style="color: #e6a64d;">«des choses célestes»</span>.
Bien que cela soit interdit à son époque, elle se détourne peu à peu des dieux romains et écrit secrètement au plus célèbre chrétien d'<a href="https://fr.wikipedia.org/wiki/Alexandrie" title="https://fr.wikipedia.org/wiki/Alexandrie" id="alexandrie" class="yellow">Alexandrie</a> en Égypte, <a href="https://fr.wikipedia.org/wiki/Origène" title="https://fr.wikipedia.org/wiki/Origène" class="yellow">Origène</a>
Celui-ci lui répond, la fortifie dans sa foi naissante, la visite et lui donne clandestinemnt le <span style="color: #e6a64d;">baptème</span>.<br>
Publiquement <span style="color: #e6a64d;">dénoncée</span> ensuite pour avoir refusé de sacrifier aux dieux, elle subit le martyre.
La voix de Jésus se serait alors fait entendre du ciel:
<span style="color: #e6a64d;">«Viens, ma bien-aimée; repose-toi dans la demeure de mon père qui est dans le ciel»</span>.<br>
Son propre père lui tranche la tête. </p>
<p>À travers les entrelacs de la tour, <span style="color: #e6a64d;">une hostie</span> apparaît dans <span style="color: #e6a64d;">un cylindre de verre</span> monté sur un croissant de lune doré.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-840.webp 840w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, l'hostie dans la tour tabernacle de Barbe la grande martyre, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, l'hostie dans la tour tabernacle de Barbe la grande martyre, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/tabernacle-840.jpg 840w"></picture><figcaption>à travers les entrelacs de sa tour, une hostie apparaît dans un cylindre de verre monté sur un croissant de lune doré</figcaption></figure>
<p>L'<span style="color: #e6a64d;">hostie</span> est un des attribut de la sainte; c'est aussi un lien avec le reste du panneau qui en fait apparaître d'autres aspects sous forme d'une <span style="color: #e6a64d;">«conversation sacrée»</span>.</p>
</div>

<br>
<div id="body-inner">
<div class="footnotes">
<hr>
<ol>
<li id="fn:1">
<p>Nous suivons les références données dans l'article «Catherine d'Alexandrie» de Wikipedia (date: 15 août 2018), à savoir:  </p>
<ul>
<li>Gustave Bardy: Catherine d’Alexandrie. In: Dictionnaire d’histoire et de géographie ecclésiastiques, vol 11, Paris 1949, pp 1503–1505, ici: 1504.</li>
<li>Christine Walsh: The Cult of St Katherine of Alexandria in Early Medieval Europe, Aldershot 2007, p. 3–26;  </li>
<li>Michael Deakin: Hypatia of Alexandria, Mathematician and Martyr, Amherst (New York) 2007, p. 135, 202;  </li>
<li>Maria Dzielska: Hypatia of Alexandria, Cambridge (Massachusetts) 1995, p. 21;  </li>
<li>Christian Lacombrade: Hypatia. In: Reallexikon für Antike und Christentum, vol 16, Stuttgart 1994, pp 956–967, ici: 966;</li>
</ul>
<p><a href="#fnref1:1" rev="footnote" class="footnote-backref">↩</a></p>
</li>
<li id="fn:2">
<p>Nous suivons les références données dans l'article «Catherine d'Alexandrie» de Wikipedia (date: 15 août 2018), à savoir:
«Certains saints peuvent être populaires, en raison des légendes qui se sont créées autour de leurs noms, sans qu'on puisse même garantir qu'ils aient existé, tels saint Christophe, sainte Barbara, sainte Catherine d'Alexandrie, sainte Philomène. Ils ont été supprimés du calendrier général: le peuple chrétien ne peut être invité à une prière officielle que dans la vérité».<br>
Conférence de présentation du nouveau calendrier romain par l'abbé Pierre JOUNEL, professeur à l'institut supérieur de liturgie de l'Institut catholique de Paris, rapporteur du groupe d'étude qui a préparé la réforme du calendrier, faite à Rome le 9 mai 1969.&nbsp;<a href="#fnref1:2" rev="footnote" class="footnote-backref">↩</a> <a href="#fnref2:2" rev="footnote" class="footnote-backref">↩</a></p>
</li>
<li id="fn:5">
<p>comme, par exemple dans <a href="https://fr.wikipedia.org/wiki/Le_Mariage_mystique_de_sainte_Catherine_(Hans_Memling)" title="https://fr.wikipedia.org/wiki/Le_Mariage_mystique_de_sainte_Catherine_(Hans_Memling)">ce piètre article Wikipedia</a>&nbsp;<a href="#fnref1:5" rev="footnote" class="footnote-backref">↩</a></p>
</li>
<li id="fn:3">
<p>Barbe la grande martyre est aussi connue comme “sainte Barbe”.&nbsp;<a href="#fnref1:3" rev="footnote" class="footnote-backref">↩</a></p>
</li>
</ol>
</div>
</div>

<!-- Page 4 --><hr>

<div id="body-inner">
<h3 id="conversation" class="yellow">une conversation sacrée</h3>
<p>Au couronnement de <a href="https://fr.wikipedia.org/wiki/Marie_(mère_de_Jésus)" title="https://frwikipedia.org/wiki/Marie_(mère_de_Jésus)" id="marie-mere-de-jesus" class="yellow">Marie</a>, la présence <span style="color: #e6a64d;">deux</span> à <span style="color: #e6a64d;">deux</span> de <a href="#catherine-d-alexandrie" itle="Catherine d'Alexandrie" class="yellow">Catherine</a> et <a href="#barbe" class="yellow">Barbe</a>, de <a href="#jean-le-baptiste-2" title="Jean le Baptiste" id="jean-le-baptiste-3" class="yello">Jean le Baptiste</a> et <a href="#jean-l-evangliste-3" title="Jean l'Évangéliste" id="jean-l-evangeliste-4" class="yellow">Jean l'Évangélist</a> ajoute une «<ruby style="color:#e6a64d;" lang="fr">conversation&nbsp;sacrée<rp>(</rp><rt style="font-size:70%;letter-spacing: 1px;color:#e6a64d;" lang="it">sacra&nbsp;conversazione</rt><rp>)</rp></ruby>», c'est-à-dire une <span style="color: #e6a64d;">réunion de saints</span> autour de la vierge.  </p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, une sainte conversation, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, une sainte conversation, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/sainte-conversation-1920.jpg 1920w"></picture><figcaption>vue du panneau central, une sainte conversation</figcaption></figure>
<p>Cet esprit de <span style="color: #e6a64d;">communion</span> se trouve renforcé par la présence à gauche de la vierge d'<span style="color: #e6a64d;">un servant d'autel</span> qui joue d'un petit <span style="color: #e6a64d;">orgue</span> assis, et à droite d'<span style="color: #e6a64d;">un autre</span> agenouillé qui lui présente <span style="color: #e6a64d;">un livre</span>.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/servants-vis-a-vis-1920.jpg 1920w"></picture><figcaption>détails du panneau central, les deux servants d'autel</figcaption></figure>
<p>La symétrie et à la simplicité des positions les unes par rapport aux autres dans la largeur s'accorde à la forme du tryptique.<br>
La hauteur et la profondeur s'organisent autour de la <span style="color: #e6a64d;">distinction hommes femmes</span>: sur le <span style="color: #e6a64d;">devant</span> en bas, <span style="color: #e6a64d;">deux femmes</span>, sur le <span style="color: #e6a64d;">derrière</span> en haut, <span style="color: #e6a64d;">deux hommes</span>.<br>
L'<span style="color: #e6a64d;">insondabilité</span> et le <span style="color: #e6a64d;">mystère</span> en profondeur et hauteur répond à la <span style="color: #e6a64d;">symétrie</span> et la <span style="color: #e6a64d;">simplicité</span> des positions en largeur.<br>
Les personnages représentés semblent de <span style="color: #e6a64d;">la même famille</span> et sont <span style="color: #e6a64d;">de tous âges</span>:
nouveau né, petit enfant, enfant, adolescent, jeune homme, femme, mère, homme, homme et femme mûrs.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/air-de-famille-1920.jpg 1920w"></picture><figcaption>détails du panneau central, de gauche à droite: ressemblances des physionomies, variétés des âges représentés</figcaption></figure>
<p>La <span style="color: #e6a64d;">ressemblance</span> des physionomies et la <span style="color: #e6a64d;">variété</span> des âges <span style="color: #e6a64d;">unifie</span> l'ensemble.<br>
Nous pensons que cet <span style="color: #e6a64d;">équilibre</span> est une caractéristique remarquable de la société dans laquelle a vécu Memling et que le très important mouvement de réforme de la foi chrétienne de cette époque, que les historiens appellent «<a href="https://fr.wikipedia.org/wiki/Devotio_moderna" title="https://fr.wikipedia.org/wiki/Devotio_moderna" id="devotio-moderna" class="yellow"><ruby lang="fr">dévotion<rp>(</rp><rt lang="la">devotio</rt><rp>)</rp>&nbsp;<rp>(</rp><rt lang="la">&nbsp;</rt><rp>)</rp>moderne<rp>(</rp><rt lang="la"moderna</rt><rp>)</rp></ruby></a>», ne peut être passé sous silence afin de mieux saisir ce point.<br>
<span style="color: #999;">(une présentation historique détaillée de la “dévotion moderne” se trouve <a href="#note-devotion-moderne" title="note présentation du mouvement «dévotion moderne»" id="renvoi-devotion-moderne" class="yellow">ici</a>)</span></p>
<h3 id="devotion-moderne" class="yellow">la dévotion moderne</h3>
<p>En Flandres, à l'époque de Memling, pour un livre de piété chrétienne, <span style="color: #e6a64d;">“<a href="https://fr.wikipedia.org/wiki/Gérard_Groote" title="https://fr.wikipedia.org/wiki/Gérard_Groote" id="imitation-de-jesus-christ" class="yellow"><ruby lang="fr">L'Imitation&nbsp;de<rp>(</rp><rt lang="la">De&nbsp;imitatione</rt><rp>)</rp>&nbsp;Jésus-Christ<rp>(</rp><rt lang="la">Christi</rt><rp>)</rp><ruby></a>”</span>, est un énorme succès d'édition <sup id="fnref1:4"><a href="#fn:4" class="footnote-ref">1</a></sup>.<br>
On peut y lire:  </p>
<div class="notices yellow">
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="#e6a64d" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
L'être humain s'élève au-dessus de la terre sur deux ailes, la <span style="color: #b37319;">simplicité</span> et la <span style="color: #b37319;">pureté</span>.<br>
La simplicité doit être dans l'<span style="color: #b37319;">intention</span>, et la pureté dans l'<span style="color: #b37319;">affection</span>.<br>
La simplicité <span style="color: #9c6416;">cherche</span> dieu, la pureté le <span style="color: #9c6416;">trouve</span> et le <span style="color: #9c6416;">goûte</span>.<br>
Nulle bonne œuvre ne vous sera difficile, si vous êtes libre au-dedans de toute affection déréglée.<br>
Si vous ne voulez que ce que dieu veut et ce qui est utile au prochain, vous jouirez de la <span style="color: #9c6416;">liberté intérieure</span>.<br>
Si votre cœur était droit, alors toute créature vous serait un <span style="color: #9c6416;">miroir de vie</span> et un <span style="color: #9c6416;">livre rempli de saintes instructions</span>.<br>
Il n'est point de créature si petite et si vile qui ne présente quelque <span style="color: #9c6416;">image de la bonté de dieu</span>.<br>
Si vous aviez en vous assez d'<span style="color: #9c6416;">innocence</span> et de <span style="color: #9c6416;">pureté</span>, vous verriez tout <span style="color: #9c6416;">sans obstacle</span>.<br>
Un cœur pur pénètre le ciel et l'enfer.<br>
Chacun juge des choses du dehors selon ce qu'il est au-dedans de lui-même.<br>
S'il est quelque joie dans le monde, le cœur pur la possède.<br>
Et s'il y a des angoisses et des tribulations, avant tout elles sont connues de la mauvaise conscience.<br>
Comme le fer mis au feu perd sa rouille et devient tout étincelant, ainsi celui qui se donne sans réserve à dieu se dépouille de sa langueur et se change en un être nouveau.
<span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="#e6a64d" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
</div>
<p>Dans l'œuvre de Memling, la conversation sacrée fonctionne selon ces principes, par rapport aux spectateurs comme <span style="color: #e6a64d;">«miroir de vie»</span>: d'un côté les malades <span style="color: #e6a64d;">«conversent»</span> avec les figures représentées, de l'autre celles-ci <span style="color: #e6a64d;">«apparaissent»</span> ici et maintenant, comme Brugeoises et Brugeois de 1479.<br>
L'œuvre fonctionne comme aussi comme <span style="color: #e6a64d;">«livre rempli de saintes instructions»</span>: <span style="color: #e6a64d;">simplicité et évidence spirituelles produisent</span> de manière merveilleuse et continue <span style="color: #e6a64d;">sophistication et opulence matérielles</span>.<br>
<a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:1#de-vos" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:1#de-vos" id="renvoi-de-vos-2" class="yellow">Dirk DE VOS</a> évoque: <span style="color: #e6a64d;">«un monde de vierges vêtues de brocart d'or, de soie et d'hermine, couronnes dorées et de pierres précieses rares»</span> où <span style="color: #e6a64d;">«l'enfant Jésus fait signe»</span> aux malades dans une <span style="color: #e6a64d;">«atmosphère empreinte de profonde sérénité»</span>.
De fait, simplicité et l'évidence ne connaissent pas de limites et mènent au divin.</p>
<h3 id="dispositif-architectural" class="yellow">le dispositif architectural</h3>
<p>Memling se laisse guider de manière incontestable par cette œuvre de <a href="https://fr.wikipedia.org/wiki/Jan_van_Eyk" title="https://fr.wikipedia.org/wiki/Jan_van_Eyck" id="jan-van-eyck" class="yellow">Jan VAN EYCK</a> peinte en 1436 qu'il connaît et va admirer dans la <a href="https://fr.wikipedia.org/wiki/Cathédrale_Saint-Donatien_de_Bruges" title="http://fr.wikipedia.org/wiki/Cathédrale_Saint-Donatien_de_Bruges" id="cathedrale-saint-donatien" class="yellow">cathédrale Saint-Donatien</a>: <a href="https://fr.wikipedia.org/wiki/La_Vierge_au_chanoine_Van_der_Paele" title="https://fr.wikipedia.org/wiki/La_Vierge_auchanoine_Van_der_Paele" id="van-der-paele" class="yellow">“<ruby lang="fr">la&nbsp;Vierge&nbsp;au&nbsp;chanoine&nbsp;Van&nbsp;der&nbsp;Paele<rp>(</rp><rt lang="nl">Madonna&nbsp;met&nbsp;kanunnik&nbsp;Joris&nbsp;vn&nbsp;der&nbsp;Paele</rt><rp>)</rp></ruby>”</a>.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/van-der-paele-1920.jpg 1920w"></picture><figcaption>Jan VAN EYCK, <ruby lang="fr">la&nbsp;Vierge&nbsp;au&nbsp;chanoine&nbsp;van&nbsp;der&nbsp;Paele<rp>(</rp><rt style="color:#999;font-size: 70%;letter-spacing: 2px;" lang="nl">Madonna&nbsp;met&nbsp;kanunnik&nbsp;Joris&nbsp;van&nbsp;der&nbsp;Paele</rt><rp>)</rp></ruby>, Musée Groeninge, Bruges</figcaption></figure>
<p>Comme dans de nombreuses autres de ses œuvres, Memling enlève à l'abside <span style="color: #e6a64d;">murs</span>, <span style="color: #e6a64d;">fenêtres</span> et rend <span style="color: #e6a64d;">continu le regard vers l'extérieur</span>.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/04.saint-jean_4/saint-jean_5-1920.jpg 1920w"></picture><figcaption>vue d'ensemble du panneau central</figcaption></figure>
<p>Six colonnes marbrées de rouge et de brun sont disposées en demi-cercle sur un carrelage et doublées à l'extérieur par un deuxième demi-cercle de pilastres fasciculés gris foncé.
Leurs bases sont reliées par la ligne du bord du dallage qui fait figurer au sol un polygone.<br>
Les minces ouvertures verticales entre les colonnes donnent sur un <span style="color: #e6a64d;">paysage visuellement continu avec des ruines et des bâtiments</span>, ouvert sur le lointain, horizon et infini.</p>
</div>

<div id="body-inner">
<h3 id="note">Note</h3>
<h4 id="note-devotion-moderne">la dévotion moderne</h4>
<div class="notices yellow">
<p>Né un peu plus au nord dans les Pays-Bas actuels, dans la région d'Utrecht à la fin du XIV<sup style="color:#e6a64d;">ème</sup> et au début du XV<sup style="color:#e6a64d;">ème</sup> siècle, la dévotion moderne est initié par un homme, <a href="https://fr.wikipedia.org/wiki/Gérard_Groote" title="https://fr.wikipedia.org/wiki/Gérard_Groote" id="gerard-groote" class="yellow">Gérard Groote</a>, qui critique la piété de son temps, la juge trop austère et trop éloignée du monde
En réaction, il exhorte le croyant à laisser le christ habiter au plus profond de lui-même.
Cette présence du christ a vocation selon lui à produire de la simplicité.
Le croyant peut alors exercer une action conforme à la vertu à laquelle la foi l'appelle, de manière naturelle, là où il se trouve.  </p>
<hr>
<ul>
<li>retour au texte <a href="#renvoi-devotion-moderne" title="renvoi mouvement «dévotion moderne»">«Une présentation détaillée de ce mouvement se trouve en note» ↑</a></li>
</ul>
</div>
<p><br></p>
<div class="footnotes">
<hr>
<ol>
<li id="fn:4">
<p>Nous suivons les références données dans l'article «l'Imitation de Jésus-Christ» de Wikipedia (date: 21 août 2018), à savoir:<br>
・ Yann Sordet, Un succès de librairie européen: l'Imitatio Christi (1470-1850), Paris, Bibliothèque Mazarine; Editions des cendres, 2012, 195 p. (ISBN 979-10-90853-01-0), p. 11.<br>
D'après les spécialistes, son auteur est un moine: <a href="https://fr.wikipedia.org/wiki/Thomas_a_Kempis" title="https://fr.wikipedia.org/wiki/Thomas_a_Kempis">Thomas A KEMPIS</a>. &nbsp;<a href="#fnref1:4" rev="footnote" class="footnote-backref">↩</a></p>
</li>
</ol>
</div>
</div>

<!-- Page 5 --><hr>

<div id="body-inner">
<h3 id="organisation-du-recit" class="yellow">organisation du récit</h3>
<p>Le récit s'organise autour de quantité de <span style="color: #e6a64d;">petites scènes</span> contant <span style="color: #e6a64d;">les deux légendes</span> de Jean le Baptiste et Jean l'Évangéliste et représentant <span style="color: #e6a64d;">la place de la Grue</span> de Bruges liée à l'Hôpital Saint-Jean.<br>
Les deux légendes débute spatialement avec les <span style="color: #e6a64d;">scènes sculptées</span> situés au-dessus de chaque saint au niveau des <span style="color: #e6a64d;">chapiteaux de colonnes</span>.  </p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/4-chapiteaux-1920.jpg 1920w"></picture><figcaption>détails du panneau central, de gauche à droite: les 4 châpiteaux</figcaption></figure>
<p>Cette manière d'ordonner la composition qui se retrouve dans de nombreuses autres œuvres de Memling reprend les techniques de mise en page de l'enluminure <sup id="fnref1:6"><a href="#fn:6" class="footnote-ref">1</a></sup>: les différentes scènes sont étagées jusqu'à un horizon placé très haut.</p>
<p>De <span style="color: #e6a64d;">petites scènes</span> prennent place dans le lointain <span style="color: #e6a64d;">à l'intérieur des différents cadrages</span> opérés par les colonnes.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/paysage-1920.jpg 1920w"></picture><figcaption>détails du panneau central, “ouverture sur le lointain”<br>à gauche, les scènes de la légende de Jean le Baptiste, à droite, celles de Jean l'Évangéliste</figcaption></figure>
<p>Le récit des deux légendes se poursuit ensuite dans chacun des deux volets intérieurs.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/2-volets-1920.jpg 1920w"></picture><figcaption>les 2 volets intérieurs: au premier plan à gauche, Jean le Baptiste décapité sur ordre d'Hérode, à droite, Jean l'Évangéliste à Patmos</figcaption></figure>
<p>Sur chaque volet, un épisode forme <span style="color: #e6a64d;">une scène principale au premier plan</span>, complétée dans le récit par de <span style="color: #e6a64d;">petites scènes dans le lointain</span>.</p>
<ul>
<li>à gauche, <span style="color: #e6a64d;">Jean le Baptiste</span> vient d'être décapité sur ordre d'<span style="color: #e6a64d;">Hérode</span>,</li>
<li>à droite, <span style="color: #e6a64d;">Jean l'Évangéliste</span> reçoit « dévoilement » du texte de l'Apocalypse à <span style="color: #e6a64d;">Patmos</span>.</li>
</ul>
<p>La vue de la <ruby style="color:#e6a64d;" lang="fr">place&nbsp;de&nbsp;la&nbsp;Grue<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 1px;" lang="nl">Kraanplaats</rt><rp>)</rp></ruby> et de <span style="color: #e6a64d;">l'église Saint-Jean</span>, à l'arrière-plan à droite de la draperie d'honneur derrière la vierge, derrière Jean l'Évangéliste se rapporte directement aux <span style="color: #e6a64d;">religieux</span> dirigeant l'hôpital <span style="color: #e6a64d;">commanditaires de l'œuvre</span> et à <span style="color: #e6a64d;">l'histoire</span> de l'institution.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/05.saint-jean_5/place-de-la-grue-1920.jpg 1920w"></picture><figcaption>détail du panneau central, vue de la place de la Grue et l'église Saint-Jean</figcaption></figure>
<p><span style="color: #e6a64d;">Deux frères de l'hôpital</span> sont ainsi représentés en train de <span style="color: #e6a64d;">mesurer le vin de bordeaux</span> importé arrivant à Bruges.<br>
Cela nous rappelle que l'hôpital s'était vu confié vers 1300 par la ville une <span style="color: #e6a64d;">charge communale</span>, le <span style="color: #e6a64d;">«droit de jauger»</span> dont il tenait ses revenus.</p>
</div>

<div id="body-inner">
<div class="footnotes">
<hr>
<ol>
<li id="fn:6">
<p>«à l'époque où l'artiste s'établit à Bruges, la ville est l'un des principaux centres de production de livres enluminés des Pays-Bas bourguignons (...)<br>
Memling comptait parmi ses relations brugeoises un miniaturiste: <a href="https://fr.wikipedia.org/wiki/Willem_Vrelant" title="https://fr.wikipedia.org/wiki/Willem_Vrelant">Willem Vrelant</a>.
À la tête de la plus prolifique officine de la ville, Vrelant était, comme Memling, un immigrant.
Originaire d'Utrecht, il est mentionné au sein de la guilde des libraires de Bruges de 1454 à sa mort en 1481.
Habitant tous deux dans la Sint-Jorisstraat, Vrelant et Memling étaient presque des voisins. (...)<br>
Si l'on se place du point de vue d'une représentation spatiale visuellement convaincante, le rapport entre les deux figures du premier plan et le reste du tableau (... une) incohérence régit le rapport entre la figure principale et le bois du plan intermédiaire (...)<br>
On retrouve d'une œuvre à l'autre le même étagement cumulatif des différentes zones du paysage jusqu'à un horizon placé très haut (...) chez Vrelant»<br>
(cité de l'ouvrage de Philippe LORENTZ référencé en <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean#lorentz" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean#lorentz" id="renvoi-lorentz-2" class="yellow">bibliographie</a>).&nbsp;<a href="#fnref1:6" rev="footnote" class="footnote-backref">↩</a></p>
</li
</ol>
</div>
</div>

<!-- Page 6 --><hr>

<div id="body-inner">
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/2-volets-1920.jpg 1920w"></picture><figcaption>les 2 volets intérieurs: au premier plan à gauche, Jean le Baptiste décapité sur ordre d'Hérode, à droite, Jean l'Évangéliste à Patmos</figcaption></figure>
<h3 id="legendes" class="yellow">légendes de Jean le Baptiste et Jean l'Évangéliste</h3>
<p>Nous suivons ici chacun de <span style="color: #e6a64d;">deux récits</span> sur lesquels Memling s'est sans doute fondé tels que <a href="https://fr.wikipedia.org/wiki/Jacques_de_Voragine" title="https://fr.wikipedia.org/wiki/Jacques_de_Voragine" id="jacques-de-voragine" class="yellow">Jacques de Voragine</a> les rapporte dans la <a href="https://fr.wikipedia.org/wiki/La_Légende_dorée" title="https://fr.wikipedia.org/wiki/La_égende_dorée" id="legende-doree" class="yellow">Légende Dorée</a>.<br>
Pour qu'il soit possible de s'y référer, ces textes ont été placé à la suite de la description <a href="https:/francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:18" title="https://francois-vidit.com/docs/fr/saint-jean/page:18" class="yellow">ici</a> et <a href="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:19" title="https://francois-vidit.com/docs/fr/saintjean/page:19" class="yellow">ici</a>.</p>
<h4 id="legende-de-jean-le-baptiste" class="yellow">légende de Jean le Baptiste</h4>
<p>Nous commençons par Jean le Baptiste qui, au niveau de la chronologie, précède Jean l'Évangéliste.<br>
En haut et à gauche de l'arrière-plan du panneau central et sur le volet intérieur gauche apparaissent des scènes de <span style="color: #e6a64d;">sa vie</span> et de <span style="color: #e6a64d;">son martyre</span>.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/paysage-gauche-1920.jpg 1920w"></picture><figcaption>détails du panneau central, “ouverture sur le lointain de la moitié gauche”: scènes de la légende de Jean le Baptiste</figcaption></figure>
<p>Sur le plan historique, Jean est décrit comme un <span style="color: #e6a64d;">prédicateur</span> juif en <a href="https://fr.wikipedia.org/wiki/Galilée_(région)" title="https://fr.wikipedia.org/wiki/Galilée_(région)" id="galilee" class="yellow">Galilée</a> de cette époque de <a href="https://fr.wikipedia.org/wiki/Jésus_de_Nazareth" title="https://fr.wikipedia.org/wiki/Jésus_de_Nazareth" id="jesus-denazareth" class="yellow">Jésus de Nazareth</a> selon le témoignage de <a href="https://fr.wikipedia.org/wiki/Flavius_Josèphe" title="https://fr.wikipedia.org/wiki/Flavius_Josèphe"id="flavius-josephe" class="yellow">Flavius Josèphe</a>, historien romain de confession juive du 1<sup style="color:#555;">er</sup> siècle (<span style="color: #999;"><a href="https://fr.wikpedia.org/wiki/Antiquités_judaïques" title="https://fr.wikipedia.org/wiki/Antiquités_judaïques" id="antiquites-judaiques" class="yellow">“Antiquités judaïques”</a>, livre XVIII, chap.5, 118)</span>.<br>
La Galilée de l'époque est une province de l'empire romain qi connaît de nombreuses révoltes.<br>
Sa population, majoritairement juive, est très croyante;
les écrits bibliques annoncent la venue d'un envoyé de dieu dont l'action permettra au peuple juif de recouvrer son indépendance et son organisation religieuse, notamment de reconstruire le <a href="https://fr.wikipedia.org/wiki/Temple_de_Salomon" title="https://fr.wikipedia.org/wiki/Temple_de_Salomon" id="temple-de-salomon" class="yellow">temple de Salomon</a> à Jérusalem.</p>
<p>Sur le plan de la foi chrétienne, <span style="color: #e6a64d;">Jean</span> est, selon l'évangile de Luc <span tyle="color: #999;">(chap.1,5-25)</span>, <span style="color: #e6a64d;">le fils de</span> <a href="https://fr.wikipedia.org/wiki/Zacharie_(père_de_Jean_le_Baptiste)" title="https://fr.wikipedia.org/wiki/Zacharie_(père_de_Jean_le_Baptiste)" id="zaccharie" class="yellow">Zaccharie</a>, un vieux prêtre juif de la campagne galiléenne auquel dieu lui-même annonce par <a href="https://fr.wikipedia.org/wiki/Gabriel_(archange)" itle="https://fr.wikipedia.org/wiki/Gabriel_(archange)" id="archange-gabriel" class="yellow">l'archange Gabriel</a> la naissance de Jean alors qu'il a été choisi par hasard pour se rendre à Jérusalem et qu'il prie dans le temple.<br
C'est ainsi que Memling le représente sur le chapiteau de gauche. </p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-1-1920.jpg 1920w"></picture><figcaption>détail du panneau central, chapiteau de colonne, “l'apparition de l'archange Gabriel à Zaccharie”. L'archange lui annonce la naissance prochaine d'un fils, il en perd la parole.</figcaption></figure>
<p>Le texte indique que Zaccharie en perd la parole.<br>
Sa naissance est représentée sur le chapiteau placé à droite.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/06.saint-jean_6/chapiteau-2-1920.jpg 1920w"></picture><figcaption>détail du panneau central, chapiteau de colonne, “Naissance de Jean le Baptiste”</figcaption></figure>
<p>Le nom de ce fils, «Jean», est lui aussi un des enjeux du récit <span style="color: #999;">(Luc 1,59-63)</span>:<br>
«Le huitième jour, ils vinrent pour la circoncision de l’enfant, et ils voulaient l’appeler Zacharie, du nom de son père. Mais sa mère prit la parole, et dit:
<span style="color: #e6a64d;">"Non, il s'appelera Jean"</span>.
On lui dit:
<span style="color: #e6a64d;">"Personne dans ta famille ne porte ce nom-là!"</span> <span style="color: #999;">(…)</span>.
Zacharie se fit donner une tablette sur laquelle il écrivit:
<span style="color: #e6a64d;">"Jean est son nom"</span>».</p>
</div>

<!-- Page 7 --><hr>

<div id="body-inner">
<p>Du point de vue de la foi, <span style="color: #e6a64d;">Jean le Baptiste vient</span> donc <span style="color: #e6a64d;">au monde selon de la volonté de dieu</span>.<br>
Il mène ensuite une vie exemplaire d'ascète «dans le désert» <span style="color: #999;">(Luc 1,80)</span>.
Memling transpose cette scène dans la forêt.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/priere-dans-le-desert-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “Jean le Baptiste priant dans la forêt”</figcaption></figure>
<p>On le voit également «proclamer un baptême de conversion pour le pardon des péchés» <span style="color: #999;">(Luc 3,03)</span>.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/proclamation-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “Jean le Baptiste proclamant un baptême de conversion pour le pardon des péchés”</figcaption></figure>
<p>Jean innove dans le judaïsme de son époque:
il préconise le pardon des péchés non plus par le sacrifice d'animaux au temple par crémation, mais par <span style="color: #e6a64d;">«baptême»</span>, c'est-à-dire, selon l'étymologie de ce mot, <span style="color: #e6a64d;">«immersion»</span> dans l'eau.<br>
Selon les écrits bibliques, il <span style="color: #e6a64d;">annonce la venue de l'envoyé de dieu</span> en la personne de <a href="https://fr.wikipedia.org/wiki/Jésus_de_Nazareth" title="https://fr.wikipedia.org/wiki/Jésus_de_Nazareth" class="yellow">Jésus de Nazareth</a>, un de ses contemporains.<br>
Il la reconnaît par un baptème dans les eaux du <a href="https://fr.wikipedia.org/wiki/Joudain" title="https://fr.wikipedia.org/wiki/Jourdain" id="jourdain" class="yellow">Jourdain</a>: cette scène apparaît en haut du volet intérieur gauche.</p>
<figure><picure><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/baptème-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur gauche, “Jean le Baptiste baptisant Jésus sur les bords du Jourdain”</figcaption></figure>
<p>Sur l'autre rive, <span style="color: #e6a64d;">Jean le Baptiste</span> présente Jésus des mots «<ruby style="color:#e6a64d;" lang="fr">Voici&nbsp;l'agneau&nbsp;de&nbsp;dieu<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="la">Ecce&nbsp;agnus&nbsp;dei</rt><rp>)</rp></ruby>» à ses deux premiers disciples <a href="https://fr.wikipedia.org/wiki/André_(apôtre)" title="https://fr.wikipedia.org/wiki/André_(apôtre)" id="andre" class="yellow">André</a> et <a href="https://fr.wikipedia.org/wiki/Jean_(apôtre)" title="https://fr.wikipedia.org/wiki/Jean_(apôtre)" id="jean-l-apotre" class="yello">Jean (l'Apôtre)</a>; ceux-ci se joignent à lui.</p>
<p>À partir de là, son histoire est tragique:
le tétrarquede Galilée et de Pérée, <a href="https://fr.wikipedia.org/wiki/Hérode_Antipas" title="https://fr.wikipedia.org/wiki/Hérode_Antipas" id="herode-antipas" class="yellow">Hérode Antipas</a> se marie à «la femme de <a href="https://fr.wikipedia.org/wiki/Hérode_Boëthos" title="https://fr.wikipedia.org/wiki/Hérode_Boëthos" id="herde-boethos" class="yellow">son frère Philippe</a> (<a href="https://fr.wikipedia.org/wiki/Hérodiade" title="https://fr.wikipedia.org/wiki/Hérodiade" id="herodiade">Hérodiade</a)» <span style="color: #999;">(Marc chap.6,17)</span>;
comme la foi judaïque regarde tout mariage avec la femme de son frère comme une <span style="color: #e6a64d;">«souillure»</span> et <span style="color: #e6a64d;">l'interdit</span> <span style="color: #999;">(Lévitique chap.18,16; chap.20,21)</span>, Jean le condamne publiquement.<br>
<span style="color: #e6a64d;">Hérode craint</span> que cela ne suscite «<span style="color: #e6a64d;">une révolte</span>, la foule semblant prête à suivre en tout les conseils de cet homme.
Il aime donc mieux s'emparer de lui avant que quelque trouble se produise à cause de lui, que d'avoir à se repentir plus tard si un mouvement avait lieu» <span style="color: #999;">(“Antiquités judaïques”, livre XVIII, chap.5,118)</span> <sup id="fnref1:2"><a href="#fn:2" class="footnote-ref">1</a></sup>.<br>
En cas de troubles causés par les partisans de Jean, Hérode devait répondre de la situation aux autorités romaines, qui pouvait le destituer:<br>
il donne <span style="color: #e6a64d;">«l’ordre d’arrêter Jean»</span> <span style="color: #999;">(Marc chap.6,17)</span>.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/07.saint-jean_7/arrestation-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “Arrestation de Jean le Baptiste par ordre d'Hérode Antipas”</figcaption></figure>
<p>Sur le panneau central au-dessus de l'agneau blanc, <span style="color: #e6a64d;">Jean est emmené</span> de force en direction de la prison sur le volet de gauche de l'actuelle ville de <a href="https://fr.wikipedia.org/wiki/Macheronte" title="https://fr.wikipedia.org/wiki/Macheronte" id="macheronte" class="yellow"><ruby style="color:#e6a64d;" lang="fr">Machéronte<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="la">μάχαιρα</rt><rp>)</rp</ruby></a>, dont l'éthymologie en grec ancien signifie «épée» et qui se situe dans l'actuelle Jordanie.</p>
</div>

<br>
<div id="body-inner">
<div class="footnotes">
<hr>
<ol>
<li id="fn:2">
<p>pour information, cette citation est au passé, je la transpose au présent.&nbsp;<a href="#fnref1:2" rev="footnote" class="footnote-backref">↩</a></p>
</li>
</ol>
</div>
</div>
<br>

<!-- Page 8 --><hr>

<div id="body-inner">
<p>L'action se poursuit sur le volet intérieur gauche.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/saint-jean_sans-cadre-1920.jpg 1920w"></picture><figcaption>Le volet intérieur gauche</figcaption></figure>
<p>Pour réussir à faire mourir Jean sans provoquer de mouvement de troubles de ses partisans, <span style="color: #e6a64d;">Hérode imagine une mise en scène</span>:
«le jour de son anniversaire», il organise «un dîner pour ses dignitaires, pour les chefs de l’armée et pour les notables de la Galilée.<br>
La fille d’Hérodiade <a href="https://fr.wikipedia.org/wiki/Salomé_(fille_d'Hérodiade)" title="https://fr.wikipedia.org/wiki/Salomé_(fille_d'Hérodiade)" id="salome" class="yellow">Salomé</a>» fait «son entrée» et danse.</p>
<figure><picture><source sizes="(max-width: 77px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/salome-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur gauche, la “Danse de Salomé”</figcaption></figure>
<p>La <span style="color: #e6a64d;">“Danse de Salomé”</span> prend place dans une tour du palais en haut à gauche du volet gauche.
Au-dessus, des statues installées dans des niches représentent un homme nu entre deux femmes nues, figures païennes qui font allusion au comportement adultère d’Hérode.</p>
<p>Hérode fait mine que sa danse lui a plu et, <span style="color: #e6a64d;">pour se dégager de la responsabilité de la mort de Jean</span>, dit:<br>
«"<span style="color: #e6a64d;">Demande-moi ce que tu veux</span>, et je te le donnerai, même si c’est la moitié de mon royaume"» <span style="color: #999;">(Marc, chap.6,21-22)</span>.<br>
Salomé sort «pour dire à sa mère: <span style="color: #e6a64d;">"qu’est-ce que je vais demander?"</span>» Hérodiade répond: «<span style="color: #e6a64d;">"la tête de Jean, celui qui baptise"</span>. Aussitôt la jeune fille» s’empresse «de retourner auprès du roi, et lui» fait «cette demande: <span style="color: #e6a64d;">"Je veux que, tout de suite, tu me donnes sur un plat la tête de Jean le Baptiste"</span>. <span style="color: #999;">(Marc, chap.6,24-29)</span><br>
La preuve que tout ce récit est bien une mise en scène c'est que si Salomé demande à Hérode <span style="color: #e6a64d;">«la mort de son père <a href="https://fr.wikipedia.org/wiki/Hérode_Boëthos" title="https://fr.wikipedia.org/wiki/Hérode_Boëthos" id="herode-boethos-2" class="yellow">Philippe</a> ou de sa mère <a href="https://fr.wikipedia.org/wiki/Hérodiade" title="https://fr.wikipedia.org/wiki/Hérodiade" id="herodiade-2" class="yello">Hérodiade</a>»</span>, Hérode ne peut y consentir <span style="color: #999;">(Légende dorée chap.121,I. <sup id="fnref1:1"><a href="#fn:1" class="footnote-rf">1</a></sup> )</span>.  </p>
<p>Un garde va «décapiter Jean dans la prison» <span style="color: #999;">(Marc, chap.6,22-23)</span>.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/08.saint-jean_8/decollation-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur gauche, “Décollation de Jean le Baptiste”</figcaption></figure>
<div class="footnotes">
<hr>
<ol>
<li id="fn:1">
<p>propos de <a href="https://fr.wikipedia.org/wiki/Jérôme_de_Stridon" title="https://fr.wikipedia.org/wiki/Jérôme_de_Stridon" id="saint-jerome" class="yellow">saint Jérôme</a> rapportés par Jacques de Voragine.&nbsp;<a href="#fnref1:1" rev="footnote" class="footnote-backref">↩</a></p>
</li
</ol>
</div>
</div>

<!-- Page 9 --><hr>

<div id="body-inner">
<p>Memling a agrandit la scène au premier plan du volet gauche dans <span style="color: #e6a64d;">la cour intérieure</span>, lieu d'exécution de la prison auquel on accède par <span style="color: #e6a64d;">un escalier</span> partant du palais;
à gauche sont les deux disciples <a href="https://fr.wikipedia.org/wiki/André_(apôtre)" title="https://fr.wikipedia.org/wiki/André_(apôtre)" id="andre-2" class="yellow">André</a> et <a href="https://fr.wikipedia.org/wiki/Jean_(apôtre)" title="https://fr.wikipedia.org/wiki/Jean_(apôtre)" id="jean-l-apotre-2" class="yello">Jean (l'Apôtre)</a>.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" rcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur gauche, “la tête de Jean le Baptiste”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur gauche, “la tête de Jean le Baptiste”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/tete_de_baptiste-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur gauche, “la tête de Jean le Baptiste”</figcaption></figure>
<p><span style="color: #e6a64d;">Le bourreau</span> est représenté de dos déposant <span style="color: #e6a64d;">la tête dans le plat</span> que lui présente une <a href="https://fr.wikipedia.org/wiki/Salomé_(fille_d'Hérodiade)" title="https://fr.wikipedia.org/wiki/Salomé_(fille_d'Hérodiade)" id="salome-3" class="yellow">Salomé</a> à peine émue.<br>
Les historiens de l'art ont identifié dans les positions du bourreau et de Salomé <spanstyle="color: #e6a64d;">une reprise par Memling d'une scène analogue</span> qui figure dans une œuvre de son maître alors qu'il était l'assistant de ce peintre à Bruxelles, <a href="https://fr.wikipedia.org/wiki/Rogier_van_der_Weyden" title="https://fr.wikipedia.org/wiki/Rogier_van_der_Weyden" id="rogier-van-der-weyden" class="yellow">Rogier VAN DER WEYDEN</a>.
Il s'agit du <span style="color: #e6a64d;">“Tryptique de saintJean”</span> peint vers 1450-55 qui se trouve à la <a href="https://fr.wikipedia.org/wiki/Gemäldegalerie_(Berlin)" title="https://fr.wikipedia.org/wiki/Gemäldegalerie_(Berlin)" id="gemaldegalerie" class="yellow"><ruby lang="fr">Galerie&nbsp;de&nbsp;peintures<rp>(</rp><rt lang="de">Gemäldegalerie</rt><rp>)</rp></ruby></a> des <a href="https://fr.wikipedia.org/wikiMusées_d'État_de_Berlin" title="https://fr.wikipedia.org/wiki/Musées_d'État_de_Berlin" id="musees-d-etat-de-berlin" class="yellow"><ruby lang="fr">Musées&nbsp;d'état&nbsp;de&nbsp;Berlin<rp>(</rp><rt lang="de">Staatliche&nbsp;Museen&nbsp;zu&nbsp;Berlin</rt><rp>)</rp></ruby></a> <span stle="color: #999;">(inv. n°534B)</span>.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.jpg" title="Rogier VAN DER WEYDEN, “Triptyque de saint Jean”, détail du volet intérieur gauche, “Décollation de Jean le Baptiste”, Galerie de peintures, Musées d'État de Berlin, Berlin" alt="Rogier VAN DER WEYDEN, “Triptyque de saint Jean”, détail du volet intérieur gauche, “Décollation de Jean le Baptiste”, Galerie de peintures, Musées d'État de Berlin, Berlin" class="class-40-img" ean="" le="" baptistesizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/triptyque-saint-jean-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur gauche, “Décollation de Jean le Baptiste”</figcaption></figure>
<p>Le récit de Marc se poursuit <span style="color: #999;">(Marc,-29)</span>: <span style="color: #e6a64d;">«Ayant appris cela, les disciples de Jean vinrent prendre son corps et le déposèrent dans un tombeau»</span>.<br>
Celle-ci aurait été emmené loin des territoires contrôlés par Hérode Antipas, en Cisjordanie à <ruby style="color:#e6a64d;" lang="fr">Sébastée<rp>(</rp><rt style="color:#e6a64d;font-size: 70%;letter-spacing: 2px;" lang="grc">Σεβαστή</rt><rp>)</rp></ruby>, l'actuel village de <a href="https://fr.wikipedia.org/wiki/Sebastia" title="https://fr.wikipedia.org/wiki/Sebastia" id="sebastia" class="yellow"><ruby lang="fr">Sebastia<rp>(</rp><rt lang="ar">سبسطية</rt><rp>)</rp></ruby></a> et enterré auprès des prophètes <a href="https://fr.wikipedia.org/wiki/Élisée"title="https://fr.wikipedia.org/wiki/Élisée" id="elisee" class="yellow">Élisée</a> et <a href="https://fr.wikipedia.org/wiki/Abdias" title="https://fr.wikipedia.org/wiki/Abdias" id="abdias" class="yellow">Abdias</a>.</p
<p>Sur la gauche du panneau central, à droite, derrière Jean le Baptite, Memling a fait apparaître la dernière scène de sa légende, à savoir que pour combattre la foi chrétienne et faire cesser les miracles qui se produisait sur le lieu de sa sépulture, <a href="https://fr.wikipedia.org/wiki/Julien_(empereur_romain)" title=" https://fr.wikipedia.org/wiki/Julien_(empereur_romain)" id="julien-l-apostat" class="yellow">l'empereur Julien l'Apostat</a> ordonne de déterrer le corps, de le brûler et disperser les cendres à travers champs.</p>
<figure><picture><source sizes="(maxwidth: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/incendie-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “le corps de Jean le Baptiste déterré et brûlé sur ordre de l'empereur Julien l'Apostat”</figcaption></figure>
<p>Sa tête apparaît plus bas dans <span style="color: #e6a64d;">l'ouverture du mur</span>, derrière <span style="color: #e6a64d;">une pierre</span>.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/09.saint-jean_9/mur-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “la tête de Jean le Baptiste dans l'ouverture d'un mur”</figcaption></figure>
<p>Selon la légende, la tête aurait été ensevelie séparément par <span style="color: #e6a64d;">un potier de la ville d'Émesse</span>, l'actuelle <a href="https://fr.wikipedia.org/wiki/Homs" title="https://fr.wikipedia.org/wiki/Homs" id="homs" class="yellow"><ruby lang="fr">Homs<rp>(</rp><rt lang="ar">حمص</rt><rp>)</rp></ruby></a> en Syrie, et serait apparue à <a href="https://fr.wikipedia.org/wiki/Marcel_d'pamée" title="https://fr.wikipedia.org/wiki/Marcel_d'Apamée" id="saint-marcel" class="yellow">saint Marcel</a> qui la découvre en suivant une étoile <span style="color: #999;">(Légende dorée chap.121,III.)</span>.</p
</div>

<!-- Page 10 --><hr>

<div id="body-inner">
<h4 class="yellow" id="légende-de-jean-l’évangéliste">légende de Jean l’Évangéliste</h4>
<p>Sur le panneau central en haut et à droite de l'arrière plan apparaissent des scènes de la légende de Jean l'Évangéliste.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/paysage-droit-1920.jpg 1920w"></picture><figcaption>détails du panneau central, “ouverture sur le lointain de la moitié droite”: scènes de la légende de Jean l'Évangéliste</figcaption></figure>
<p>À la différence de Jean le Baptiste, sur le plan historique, <span style="color: #e6a64d;">il n'existe aucun document historique</span> autre que ceux issus de la foi chrétienne.<br>
Selon ces documents et les spécialistes modernes, <span style="color: #e6a64d;">Jean l'Évangéliste peut désigner</span>:</p>
<ol>
<li><a href="https://fr.wikipedia.org/wiki/Jean_(apôtre)" title="https://fr.wikipedia.org/wiki/Jean_(apôtre)" id="jean-l-apotre" class="yellow">Jean «l'Apôtre»</a> qui apparaît dans les évangiles de Marc, Luc, Mathieu et les Actes des Apôtres,</li
<li><a href="https://fr.wikipedia.org/wiki/Évangile_selon_Jean#Le_«_disciple_bien-aimé_»" title="https://fr.wikipedia.org/wiki/Évangile_selon_Jean#Le_«_disciple_bien-aimé_»" id="disciple-que-jesus-aimait" class="yellow">le disciple que Jésus aimait</a> rédacteur de l'évangile dit «de Jean»,</li>
<li><a href="https://fr.wikipedia.org/wiki/ean_de_Patmos" title="https://fr.wikipedia.org/wiki/Jean_de_Patmos" id="jean-de-patmos" class="yellow">Jean «de Patmos»</a> rédacteur de l'Apocalypse.  </li>
</ol
<h5 id="jean-l-apotre-2" class="yellow">Jean «l'Apôtre»</h5>
<p><a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:8#aristodeme" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:8#aristodeme" id="jean-l-apotre-3" class="yellow">Jean «l'Apôtre»</a> est l'<span style="color: #e6a64d;">un des deux «fils de <a href="https://fr.wikipedia.org/wiki/Zébédée" title="https://fr.wikipeia.org/wiki/Zébédée" id="zebedee" class="yellow">Zébédée</a>»</span> <span style="color: #999;">(Marc 3.16-19, Mathieu 10.2-5 et Luc 6.13-16)</span>.
Son frère est <a href="htps://fr.wikipedia.org/wiki/Jacques_de_Zébédée" title="https://fr.wikipedia.org/wiki/https://fr.wikipedia.org/wiki/Jacques_de_Zébédée" id="jacques-le-majeur" class="yellow">Jacques dit «le Majeur»</a>.
Jésus les appellent les <span style="color: #e6a64d;">«ils du tonnerre»</span> <span style="color: #999;">(Marc 3.17)</span>.
Comme son frère et deux autres apôtres, <a href="https://fr.wikipedia.org/wiki/Pierre_(apôtre)" title="https://fr.wikipedia.org/wiki/Pierre_(apôtre)" id="simon-pierre" class="yellow">Simon-Pierre</a> et <a href="https://fr.wikipedia.org/wiki/André_(apôtre)" title="https://fr.wikipedia.org/wiki/André_(apôtre)" id="simon-pierre" clss="yellow">André</a>, c'est <span style="color: #e6a64d;">un des pêcheurs du lac de Tibériade</span> qui abandonne ses filets pour suivre Jésus.<br
À partir de là, il est témoin de la <a href="https://fr.wikipedia.org/wiki/Transfiguration_(christianisme)" title="https://fr.wikipedia.org/wiki/Transfiguration_(christianisme)" id="transfiguration" class="yellow">transfiguration de Jésus</a> <span style="color: #999;">(Marc 9.2, Mathieu 17.1 et Luc 9.28)</span>, de la <a href="https://fr.wikipedia.org/wiki/Guériso_de_la_belle-mère_de_Pierre" title="https://fr.wikipedia.org/wiki/Guérison_de_la_belle-mère_de_Pierre" id="guerison-de-la-belle-mere-de-pierre" class="yellow">guérison de la belle-mère de Simon-Pierre</a> <span style="color: #999;">(Marc 1.29)</span>, de la guérison de la <a href="https://fr.wikipedia.org/wiki/File_de_Jaïre" title="https://fr.wikipedia.org/wiki/Fille_de_Jaïre" id="fille-de-jaire" class="yellow">fille de Jaïre</a> le chef de la synagogue <span style="color: #999;">(Marc 5.37 et Luc 8.51)</span>, est présent avec son frère au moment où Jésus est tené de renoncer dans le <a href="https://fr.wikipedia.org/wiki/Agonie_dans_le_jardin_des_oliviers" title="https://fr.wikipedia.org/wiki/Agonie_dans_le_jardin_des_oliviers" id="agonie-dans-le-jardin-des-oliviers" class="yellow">jardin des Oliviers</a> <span style="color: #999;">(Marc 13.3)</span>, mais il s'endort <span style="color: #999;">(Marc 14.33)</span>.</p
<h5 id="disciple-que-jesus-aimait-2" class="yellow">le disciple que Jésus aimait</h5>
<p><a href="https://fr.wikipedia.org/wiki/Évangile_selon_Jean#Le_«_disciple_bien-aimé_»" title="https://fr.wikipedia.org/wiki/Évangile_selon_Jean#Le_«_disciple_bien-aimé_»" id="disciple-que-jesus-aimait-3" class="yellow">Le disciple que Jésus aimait</a> apparaît à la fin de l'évangile dit «de Jean» <span style="color: #999;">(Jean 21.20;24-25)</span>:<br
«s’étant retourné, Pierre aperçoit, marchant à leur suite, <span style="color: #e6a64d;">le disciple que Jésus aimait</span>. <span style="color: #999;">(…)</span>
C’est <span style="color: #e6a64d;">ce disciple qui témoigne</span> de ces choses <span style="color: #e6a64d;">et qui les a écrites</span>».<br>
Aucun élément du texte ne permet de le nommer «Jean» donc l'apellation «évangile de Jean» ne peut être juste: ce devrait être l' «évangile du disciple que Jésus aimait».<br>
C'est un personnage tout à fait extraordinaire: c'est un disciple de Jésus parmi d'autres auquel tout lecteur peut s'identifier, il est aimé de Jésus lui-même et se trouve donc plus proche de lui que n'importe qui d'autre.<br>
Il n'hésite d'ailleurs pas, juste après l'extrait précédent, à donner son opinion:<br>
«Il y a encore beaucoup d’autres choses que Jésus a faites; et s’il fallait écrire chacune d’elles, <span style="color: #e6a64d;"><span style="text-decoration: underline;">je</span> pense que</span> le monde entier ne suffirait pas pour contenir les livres que l’on écrirait» <span style="color: #999;">(Jean 21.25)</span>.<br>
Jésus lui-même, à l'occasion d'une question de Pierre, émet un souhait quant à son destin lors de la Cène <span style="color: #999;">(Jean 21.21-23)</span>:
«Pierre, voyant donc ce disciple, dit à Jésus:
“Et lui, Seigneur, que lui arrivera-t-il?”
Jésus lui répond:
“Si <span style="color: #e6a64d;">je veux qu’il demeure jusqu’à ce que je vienne</span>, que t’importe?».<br>
C'est également lui qui «couché sur le sein de Jésus», il lui demande qui va le trahir <span style="color: #999;">(Jean 13.23-26)</span>.<br>
Lors de la crucifixion, Jésus lui confie sa propre mère, en disant: «Femme, voici ton fils», puis à lui: «Voici ta mère» <span style="color: #999;">(Jean 19.26-27)</span>.<br>
Quand Marie-Madeleine découvre le tombeau vide, elle court le dire au «disciple bien-aimé» et à Pierre; il est le premier à atteindre le tombeau <span style="color: #999;">(Jean 20.2-8)</span>.<br>
C'est encore lui qui le premier reconnaît Jésus au lac de Tibériade après sa résurrection <span style="color: #999;">(Jean 21.7)</span>.</p>
<h5 id="jean-de-patmos-2" class="yellow">Jean de Patmos</h5>
<p><a href="https://fr.wikipedia.org/wiki/Jean_de_Patmos" title="https://fr.wikipedia.org/wiki/Jean_de_Patmos" id="jean-de-patmos-3" class="yellow">Jean de Patmos</a> apparaît au début du texte de l'Apocalypse <span style="color: #999;">(Ap 1.1-9)</span> qui le présente comme <span style="color: #e6a64d">«serviteur» à qui dieu a fait connaître</span> <span style="color: #999;">(…)</span> «par l'envoi de son ange» <span style="color: #999;">(…)</span> <span style="color: #e6a64d;">«ce qui doit bientôt advenir»</span> <span style="color: #999;">(…)</span> «aux sept Églises qui sont en Asie Mineure».</p>
<h5 id="jean-de-patmos-2" class="yellow">Jean l'Évangéliste par rapport à la Légende dorée</h5>
<p>La représentation de Jean l'Évangéliste suit globalement le récit établit par Jacques de Voragine dans les <span style="color: #e6a64d;">chapîtres 9</span> et <span style="color: #e6a64d;">65</span> de la Légende dorée, textes que nous reproduisons pour information <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:8#aristodeme" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:8#aristodeme" class="yellow">ici</a>.<br>
Toutefois, à la différence de Jacques de Voragine qui considére les trois Jean <span style="color: #999;">(Jean l'Apôtre, le disciple que Jéus aimait, Jean de Patmos)</span> comme une seule et même personne, Memling donne une apparence physique distingue à Jean l'Apôtre <span style="color: #999;">(volet intérieur gauche)</span> par rapport à Jean l'Évangéliste.</p>
<h5 id="jean-a-la-porte-latine" class="yellow">Jean l'Évangéliste ébouillanté sur ordre de l'empereur Domitien devant la Porte Latine à Rome</h5>
<p>Le récit débute sur le panneau central:<br>
«<span style="color: #e6a64d;">Jean</span> préchait à Éphèse lorsqu'il est arrêté par le proconsul et invité à sacrifier aux dieux.
Comme il refuse, il est jeté en prison; on envoie alors à <span style="color: #e6a64d;">l'empereur Domitien</span> une lettre le désignant comme magicien sacrilège, contempteur des dieux et adorateur du crucifié.
Sur ordre de Domitien, Jean est ensuite conduit à Rome où, après lui avoir coupé les cheveux par dérision, devant la <span style="color: #e6a64d;">porte</span> de la ville qu'on appelle «<span style="color: #e6a64d;">latine</span>», on le flagelle et on le jette dans un chaudron d'huile bouillante sous lequel brûlait un feu ardent» <span style="color: #999;">(chap. 65)</span> <sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">1</a></sup> .</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/rome-1920.jpg 1920w"></picture><figcaption>détails du panneau central, “Ébouillantement de Jean l'Évangéliste sur ordre de l'empereur Domitien devant la Porte Latine à Rome et départ en l'exil sur l'île de Patmos”</figcaption></figure>
<p>«Mais Jean ne ressentit aucune douleur et en sortit tout à fait indemne, non pas brûlé mais oint.
À cette vue, Domitien fut stupéfié et craignit de le mettre à mort.
Aussi, à cet endroit, les chrétiens ont-ils construit une église, et ce jour est-il fêté solennellement comme celui du martyre de Jean».<br>
La représentation de Memling fait apparaître à l'horizon à gauche, cette <span style="color: #e6a64d;">église</span>, à droite, le <span style="color: #e6a64d;">Colisée de Rome</span> et la <span style="color: #e6a64d;">Porte Latine</span>.<br>
«L'empereur, constatant qu'il ne renonçait pas à la prédication, l'exila dans <span style="color: #e6a64d;">l'île de Patmos</span>», <span style="color: #999;">(le départ pour Patmos apparaît au milieu: quelques hommes montent dans un bateau)</span> «où, dans la solitude, il écrivit <span style="color: #e6a64d;">l'Apocalypse</span>» <span style="color: #999;">(chap. 9)</span>.</p>
<p>Le volet intérieur droit est entièrement consacré aux visions que Jean eut à Patmos <sup id="fnref1:2"><a href="#fn:2" class="footnote-ref">2</a></sup>.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/saint-jean-sans-cadre-2-1920.jpg 1920w"></picture><figcaption>le volet intérieur droit, “Jean l'Évangéliste à Patmos”.<br>«Aussitôt je fus saisi en esprit. 
Voici qu’un trône était là dans le ciel (…) Devant le trône, il y a comme une mer, aussi transparente que du cristal» (Apocalypse 4.2;6)</figcaption></figure>
<p>Memling représente l'apôtre, assis sur un rocher de forme circulaire, l'île de Patmos au milieu de la mer Égée.<br>
Il tient dans sa main une plume et un canif, sur ses genoux on voit un cahier.
Jean est représenté alors qu'il n'a encore même commencé d'écrire, <span style="color: #e6a64d;">sur le vif</span>, dans le moment même où il est saisi par l'<span style="color: #e6a64d;">«Apocalypse»</span>, qui signifie en grec ancien <span style="color: #e6a64d;">«dévoilement»</span>: ces visions apparaissent au-dessus de lui dans le ciel, sur l'eau et sur la terre toute proche sur tout le reste du volet.  </p>
<p>Nous faisons le choix de suivre le récit <sup id="fnref1:3"><a href="#fn:3" class="footnote-ref">3</a></sup> que Jean lui-même fait du dévoilement dans le texte <span style="color: #999;">(Apocalypse 4.2-6)</span> et qui débute sur le haut à gauche du volet: ainsi il est possible de confronter le texte à la représentation qu'en fait Memling.</p>
<p><sup>02</sup>
«je fus saisi en <span style="color: #e6a64d;">esprit</span>.
Voici qu’un <span style="color: #e6a64d;">trône</span> était là dans le <span style="color: #e6a64d;">ciel</span>, et sur le trône siégeait <span style="color: #e6a64d;">quelqu’un</span>.<br>
<sup>03</sup>
Celui qui siège a l’aspect d’une pierre de jaspe ou de cornaline;
il y a, tout autour du trône, <span style="color: #e6a64d;">un arc-en-ciel</span>, avec des reflets d’émeraude <sup id="fnref1:4"><a href="#fn:4" class="footnote-ref">4</a></sup>.<br>
<sup>04</sup>
Tout autour de ce trône, vingt-quatre trônes, où siègent <span style="color: #e6a64d;">vingt-quatre anciens</span> portant des vêtements blancs et, sur leurs têtes, des couronnes d’or.<br>
<sup>05</sup>
Et du trône sortent des éclairs, des fracas, des coups de tonnerre, et sept torches enflammées brûlent devant le trône:
ce sont les sept esprits de dieu.<br>
<sup>06</sup>
Devant le trône, il y a comme une mer, aussi transparente que du cristal.» </p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/10.saint-jean_10/chose-divine-1920.jpg 1920w"></picture><figcaption>le volet intérieur droit, “vision du trône de dieu, de la cour céleste et de l'agneau”</figcaption></figure>
<p><sup>07</sup>
Le premier vivant ressemble à un <span style="color: #e6a64d;">lion</span>, le deuxième vivant ressemble à un <span style="color: #e6a64d;">jeune taureau</span>, le troisième vivant a comme un <span style="color: #e6a64d;">visage d’homme</span>, le quatrième vivant ressemble à un <span style="color: #e6a64d;">aigle</span> en plein vol.<br>
<sup>08</sup>
Les quatre vivants ont chacun <span style="color: #e6a64d;">six ailes</span>, avec des yeux innombrables tout autour et au-dedans.
Jour et nuit, ils ne cessent de dire: «Saint! saint! saint, le seigneur dieu, le souverain de l’univers, celui qui était, qui est et qui vient.» <span style="color: #999;">(…)</span><br>
<sup>chap.5</sup><br>
<sup>01</sup>
«J’ai vu, dans la main droite de celui qui siège sur le trône, un <span style="color: #e6a64d;">livre</span> en forme de rouleau, écrit au-dedans et à l’extérieur, scellé de <span style="color: #e6a64d;">sept sceaux</span>.» <span style="color: #999;">(…)</span><br>
<sup>06</sup>
«Et j’ai vu, entre le trône, les quatre vivants et les anciens, un <span style="color: #e6a64d;">agneau debout</span>, comme égorgé; ses cornes étaient au nombre de sept, ainsi que ses yeux, qui sont les sept esprits de dieu envoyés sur toute la terre.<br>
<sup>07</sup>
Il s’avança et prit le livre dans la main droite de celui qui siégeait sur le trône.» <span style="color: #999;">(…)</span><br>
Le récit se poursuit entre l'arc-en-ciel et Jean.<br>
<sup>chap.6</sup><br>
<sup>01</sup>
Alors j’ai vu: quand l’agneau ouvrit l’un des sept sceaux, j’entendis l’un des quatre vivants dire d’une voix de tonnerre: «Viens!»</p>
<p>
</p></div>

<div class="footnotes">
<hr>
<ol>
<li id="fn:1">
<p>la citation qui suit est au passé; pour information, je la transpose ici au présent.&nbsp;<a href="#fnref1:1" rev="footnote" class="footnote-backref">↩</a></p>
</li>
<li id="fn:2">
<p>les passages du texte de l'Apocalypse qui se rapporte au volet de droite se trouve <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:10#apocalypse" title="https://francois-vidit.com/docs/fr/bruges/hopital-saint-jean/saint-jean/page:10#apocalypse">ici</a>&nbsp;<a href="#fnref1:2" rev="footnote" class="footnote-backref">↩</a></p>
</li>
<li id="fn:3">
<p>Le texte de l'Apocalypse s'adresse aux «sept églises qui sont en Asie Mineure» («Éphèse, Smyrne, Pergame, Thyatire, Sardes, Philadelphie et Laodicée», Apocalypse 1.4) dans le langage symbolique des Écritures judaïques.<br>
Il exhorte à une réalité transcendante devant leurs permettre de surmonter non seulement les persécutions, quelles soient romaines ou judaïques, mais aussi leurs propres insuffisance <span style="color: #999;">(Apocalypse chap.2-3)</span> grâce à l'espérance nouvelle dans le christ à la fin des temps.&nbsp;<a href="#fnref1:3" rev="footnote" class="footnote-backref">↩</a></p>
</li>
<li id="fn:4">
<p>nous faisons le choix de remplacer le terme «halo de lumière» par «arc-en-ciel» qui correspond à la représentation de Memling étant donné la note de la traduction œuménique de la bible (Édition avril 1989, p.1799, note w.) «le même mot grec désigne aussi l'arc-en-ciel, ou encore une auréole.&nbsp;<a href="#fnref1:4" rev="footnote" class="footnote-backref">↩</a></p>
</li>
</ol>
</div>

<!-- Page 11 --><hr>

<div id="body-inner">
<p><sup>chap.6</sup><br>
<sup>02</sup>
Alors j’ai vu: et voici un <span style="color: #e6a64d;">cheval blanc</span>; celui qui le montait tenait un <span style="color: #e6a64d;">arc</span>, une <span style="color: #e6a64d;">couronne</span> lui fut donnée, et il sortit vainqueur, pour vaincre à nouveau.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
«celui qui le montait tenait un arc, une couronne lui fut donnée, et il sortit vainqueur, pour vaincre à nouveau» (Apocalypse 4.2)</figcaption></figure>
<p><sup>03</sup>
Et quand il ouvrit le deuxième sceau, j’entendis le deuxième vivant qui disait: «Viens!»
<sup>04</sup>
Alors sortit un autre <span style="color: #e6a64d;">cheval</span>, <span style="color: #e6a64d;">rouge feu</span>; à celui qui le montait il fut donné d’enlever la paix à la terre, pour que les gens s’entretuent, et une grande <span style="color: #e6a64d;">épée</span> lui fut donnée.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
«celui qui le montait il fut donné d’enlever la paix à la terre, pour que les gens s’entretuent, et une grande épée lui fut donnée» (Apocalypse 4.4)</figcaption></figure>
<p><sup>05</sup>
Et quand il ouvrit le troisième sceau, j’entendis le troisième vivant qui disait: «Viens!»
Alors j’ai vu: et voici un <span style="color: #e6a64d;">cheval noir</span>; celui qui le montait tenait à la main une <span style="color: #e6a64d;">balance</span>.
<sup>06</sup>
Et j’entendis comme une voix au milieu des quatre vivants; elle disait: «Un denier, la mesure de blé!
Un denier, les trois mesures d’orge! Ne fraude pas sur l’huile et sur le vin!»</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/3eme-cavalier-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “le cheval noir”.<br>«celui qui le montait tenait à la main une balance» (Apocalypse 4.5)</figcaption></figure>
<p><sup>07</sup>
Et quand il ouvrit le quatrième sceau, j’entendis la voix du quatrième vivant qui disait: «Viens!»
<sup>08</sup>
Alors j’ai vu: et voici un <span style="color: #e6a64d;">cheval verdâtre</span>; celui qui le montait se nomme <span style="color: #e6a64d;">la mort</span>, et le <span style="color: #e6a64d;">séjour des morts</span> l’accompagnait.
Et il leur fut donné pouvoir sur un quart de la terre pour tuer par le glaive, par la famine et par la peste, et par les fauves de la terre. <span style="color: #999;">(…)</span></p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/4eme-cavalier-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “le cheval verdâtre, la mort, le séjour des morts”.<br>«celui qui le montait se nomme la mort, et le séjour des morts l’accompagnait» (Apocalypse 4.5)</figcaption></figure>
<p><sup>14</sup>
Le ciel se retira comme un livre qu’on referme; toutes les montagnes et les îles furent déplacées.<br>
<sup>15</sup>
<span style="color: #e6a64d;">Les rois de la terre et les grands, les chefs d’armée, les riches et les puissants, tous les esclaves et les hommes libres allèrent se cacher dans les cavernes et les rochers des montagnes</span>.<br>
<sup>16</sup>
Et ils disaient aux montagnes et aux rochers: «Tombez sur nous, et cachez-nous du regard de celui qui siège sur le trône et aussi de la colère de l’agneau.<br>
<sup>17</sup>
Car il est venu, le grand jour de leur colère, et qui pourrait tenir?»</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “les quatre cavaliers”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “les quatre cavaliers”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-80-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/11.saint-jean_11/cavaliers-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “les quatre cavaliers”</figcaption></figure>
</div>

<!-- Page 12 --><hr>

<div id="body-inner">
				<p><sup>chap.8</sup><br>
<sup>01</sup>
Quand il ouvrit le septième sceau, il y eut dans le ciel un silence d’environ une demi-heure.<br>
<sup>02</sup>
Et j’ai vu les <span style="color: #e6a64d;">sept anges</span> qui se tiennent devant dieu: il leur fut donné <span style="color: #e6a64d;">sept trompettes</span>.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/7-anges-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “les anges du septième sceau”</figcaption></figure>
<p><sup>03</sup>
Un autre ange vint se placer près de l’autel; il portait un <span style="color: #e6a64d;">encensoir d’or</span>; il lui fut donné quantité de parfums pour les offrir, avec les prières de tous les saints, sur <span style="color: #e6a64d;">l’autel d’or</span> qui est devant le trône.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/autel-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “l'ange de l'autel”</figcaption></figure>
<p><sup>04</sup>
Et par la main de l’ange monta devant dieu la fumée des parfums, avec les prières des saints.<br>
<sup>05</sup>
Puis l’ange prit l’encensoir et le remplit du feu de l’autel; il le jeta sur la terre: il y eut des coups de tonnerre, des fracas, des éclairs et un tremblement de terre.</p>
<p><sup>06</sup>
Puis les sept anges qui avaient les sept trompettes se préparèrent à en sonner.<br>
<sup>07</sup>
Le premier sonna de la trompette: il y eut de la grêle et du feu mêlés de sang, qui furent jetés sur la terre, et le tiers de la terre brûla, le tiers des arbres brûlèrent, toute l’herbe verte brûla.<br>
<sup>08</sup>
Le deuxième ange sonna de la trompette: dans la mer fut jetée comme <span style="color: #e6a64d;">une grande montagne embrasée</span>, et le tiers de la mer fut changé en sang;
<sup>09</sup>
dans la mer, le tiers des créatures vivantes mourut, et <span style="color: #e6a64d;">le tiers des bateaux fut détruit</span>.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/bateaux-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “chute de la grande montagne embrasée, le tiers des bateaux détruits”</figcaption></figure>
<p><sup>10</sup>
Le troisième ange sonna de la trompette: du ciel tomba <span style="color: #e6a64d;">une grande étoile qui flambait comme une torche</span>; elle tomba sur le tiers des fleuves et sur les sources des eaux.<br>
<sup>11</sup>
L’étoile se nomme «<span style="color: #e6a64d;">absinthe</span>», et le tiers des eaux devint de l’absinthe: beaucoup de gens moururent à cause des eaux devenues amères.<br>
<sup>12</sup>
Le quatrième ange sonna de la trompette: le tiers du soleil fut frappé, et le tiers de la lune et le tiers des étoiles; ainsi chacun d’entre eux fut obscurci d’un tiers, le jour perdit le tiers de sa clarté et, de même, la nuit.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/absinthe-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “la chute de l'étoile «absinthe»”.<br>«du ciel tomba une grande étoile qui flambait comme une torche» (…) «le tiers des eaux devint de l’absinthe: beaucoup de gens moururent à cause des eaux devenues amères»</figcaption></figure>
<p><sup>13</sup>
Alors j’ai vu: et j’entendis <span style="color: #e6a64d;">un aigle</span> qui volait en plein ciel, disant d’une voix forte: «Malheur! Malheur! Malheur pour ceux qui habitent la terre, car la trompette, encore, doit retentir quand les trois anges sonneront!».</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/12.saint-jean_12/aigle-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “le vol de l'aigle”</figcaption></figure>
</div>

<!-- Page 13 --><hr>

<div id="body-inner">
<p><sup>chap.9</sup><br>
<sup>01</sup>
Le cinquième ange sonna de la trompette, et j’ai vu une étoile qui était tombée du ciel sur la terre: c’est à elle que fut donnée la clé du <span style="color: #e6a64d;">puits de l’abîme</span>.<br>
<sup>02</sup>
Elle ouvrit le puits de l’abîme, et du puits monta <span style="color: #e6a64d;">une fumée comme celle d’une grande fournaise</span>; le soleil et l’air furent obscurcis par la fumée du puits,<br>
<sup>03</sup>
Et de la fumée sortirent vers la terre des <span style="color: #e6a64d;">sauterelles</span>; un pouvoir leur fut donné, pareil au pouvoir des scorpions de la terre.<br>
<sup>04</sup>
Il leur fut dit de ne pas faire de mal à l’herbe de la terre, ni à la verdure, ni à aucun arbre, mais seulement aux hommes, ceux qui n’ont pas sur le front la marque du sceau de dieu.<br>
<sup>05</sup>
Il leur fut donné, non pas de les tuer, mais de les tourmenter pendant cinq mois d’un tourment comme celui qu’inflige le scorpion quand il pique un homme.<br>
<sup>06</sup>
En ces jours-là, les hommes chercheront la mort et ne la trouveront pas; ils désireront mourir et la mort les fuira.  </p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/sauterelles-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “la sortie vers la terre des sauterelles”</figcaption></figure>
<p><sup>07</sup>
Ces sortes de <span style="color: #e6a64d;">sauterelles</span> ressemblent à des chevaux équipés pour la guerre; elles ont comme des couronnes d’or sur la tête, et un visage comme un visage humain,<br>
<sup>08</sup>
Elles ont des cheveux comme des cheveux de femmes, leurs dents sont comme celles des lions.<br>
<sup>09</sup>
Elles ont des poitrails comme des cuirasses de fer, et le bruit de leurs ailes est comme celui de chars à plusieurs chevaux courant au combat.<br>
<sup>10</sup>
Elles ont des queues comme des scorpions, et des dards venimeux.
Dans leur queue se trouve le pouvoir de faire du mal aux hommes pendant cinq mois.<br>
<sup>11</sup>
Elles ont comme roi l’ange de l’abîme; il se nomme en hébreu Abaddôn et en grec Apollyôn (c’est-à-dire: Destructeur). <span style="color: #999;">(…)</span><br>
<sup>chap.10</sup><br>
<sup>01</sup>
Et j’ai vu un autre <span style="color: #e6a64d;">ange</span>, plein de force, descendre du ciel, ayant <span style="color: #e6a64d;">une nuée pour manteau</span>, et sur la tête <span style="color: #e6a64d;">un arc-en-ciel</span>; son visage était comme <span style="color: #e6a64d;">le soleil</span>, et ses jambes comme <span style="color: #e6a64d;">des colonnes de feu</span>.<br>
<sup>02</sup>
Il tenait à la main <span style="color: #e6a64d;">un petit livre ouvert</span>.
Il posa le pied droit sur la mer, et le gauche sur la terre;</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/ange-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “l'ange descendu du ciel”<br>«une nuée pour manteau, et sur la tête un arc-en-ciel; son visage était comme le soleil, et ses jambes comme des colonnes de feu. Il tenait à la main un petit livre ouvert. Il posa le pied droit sur la mer, et le gauche sur la terre» (Apocalypse 10.1-2)</figcaption></figure>
<p><sup>03</sup>
il cria d’une voix forte, comme un lion qui rugit.
Et quand il cria, les sept tonnerres parlèrent, faisant résonner leur voix.<br>
<sup>04</sup>
Et quand les sept tonnerres eurent parlé, j’allais me mettre à écrire; mais j’entendis une voix venant du ciel qui disait: «Ce que viennent de dire les sept tonnerres, garde-le scellé, ne l’écris pas!»<br>
<sup>05</sup>
Et l’ange que j’avais vu debout sur la mer et sur la terre leva la main droite vers le ciel;
<sup>06</sup>
il fit un serment par celui qui est vivant pour les siècles des siècles, celui qui a créé le ciel et tout ce qu’il contient, la terre et tout ce qu’elle contient, la mer et tout ce qu’elle contient. Il déclara: «Du temps, il n’y en aura plus!»</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/bataille-celeste-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “le ciel de l'Apocalypse” (Apocalypse 12)</figcaption></figure>
<p><sup>chap.12</sup><br>
<sup>01</sup>
Un grand signe apparut dans le ciel: <span style="color: #e6a64d;">une femme</span>, ayant le soleil pour manteau, la lune sous les pieds, et sur la tête une couronne de douze étoiles.<br>
<sup>02</sup>
Elle est enceinte, elle crie, dans les douleurs et la torture d’un enfantement.<br>
<sup>03</sup>
Un autre signe apparut dans le ciel: <span style="color: #e6a64d;">un grand dragon</span>, rouge feu, avec sept têtes et dix cornes, et, sur chacune des sept têtes, un diadème.<br>
<sup>04</sup>
Sa queue, entraînant le tiers des étoiles du ciel, les précipita sur la terre. Le dragon vint se poster devant la femme qui allait enfanter, afin de dévorer l’enfant dès sa naissance.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/femme-et-dragon-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “la femme et le dragon” (Apocalypse 12.1-5)</figcaption></figure>
<p><sup>05</sup>
Or, elle mit au monde un fils, un enfant mâle, celui qui sera le berger de toutes les nations, les conduisant avec un sceptre de fer. L’enfant fut enlevé jusqu’auprès de dieu et de son trône,
<sup>06</sup>
et la femme s’enfuit au désert, où dieu lui a préparé une place, pour qu’elle y soit nourrie pendant mille deux cent soixante jours.<br>
<sup>07</sup>
Il y eut alors un combat dans le ciel: Michel, avec ses anges, dut combattre le dragon.
Le dragon, lui aussi, combattait avec ses anges,
<sup>08</sup>
mais il ne fut pas le plus fort; pour eux désormais, nulle place dans le ciel.<br>
<sup>09</sup>
Oui, il fut rejeté, le grand dragon, le serpent des origines, celui qu’on nomme diable et Satan, le séducteur du monde entier.
Il fut jeté sur la terre, et ses anges furent jetés avec lui.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/13.saint-jean_13/saint-michel-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “combat de saint michel, du dragon et de leurs anges: chute du dragon et de ses anges” (Apocalypse 12.7-9)</figcaption></figure>
</div>

<!-- Page 14 --><hr>

<div id="body-inner">
<p><sup>10</sup>
Alors j’entendis dans le ciel une voix forte, qui proclamait: «Maintenant voici le salut, la puissance et le règne de notre dieu, voici le pouvoir de son christ!
Car il est rejeté, l’accusateur de nos frères, lui qui les accusait, jour et nuit, devant notre dieu.<br>
<sup>11</sup>
Eux-mêmes l’ont vaincu par le sang de l’agneau, par la parole dont ils furent les témoins; détachés de leur propre vie, ils sont allés jusqu’à mourir.<br>
<sup>12</sup>
Cieux, soyez donc dans la joie, et vous qui avez aux cieux votre demeure!
Malheur à la terre et à la mer: le diable est descendu vers vous, plein d’une grande fureur; il sait qu’il lui reste peu de temps.»<br>
<sup>13</sup>
Et quand le <span style="color: #e6a64d;">dragon</span> vit qu’il était jeté sur la terre, il se mit à poursuivre la <span style="color: #e6a64d;">femme</span> qui avait mis au monde l’enfant mâle.<br>
<sup>14</sup>
Alors furent données à la femme les <span style="color: #e6a64d;">deux ailes du grand aigle</span> pour qu’elle s’envole au désert, à la place où elle doit être nourrie pour un temps, deux temps et la moitié d’un temps, loin de la présence du Serpent.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “la femme reçoit deux aîles de grand ailes pour échapper au dragon”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du volet intérieur droit, “la femme reçoit deux aîles de grand ailes pour échapper au dragon”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/poursuite-1920.jpg 1920w"></picture><figcaption>détail du volet intérieur droit, “la femme reçoit deux aîles de grand ailes pour échapper au dragon” (Apocalypse 12.7-9)</figcaption></figure>
<p>Voilà pour les visions de l'Apocalypse. Selon la Légende Dorée, Jean retourne ensuite à à Éphèse, où il ressuscite Drusiane ainsi que Memling le représente sur un chapiteau.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-3-1920.jpg 1920w"></picture><figcaption>détail du panneau central, chapiteau de colonne, “résurrection de Drusiane”</figcaption></figure>
<p>Il baptise le philosophe converti Craton dans le petit édifice à coupole tout à fait à l'arrière.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “baptème de Craton”</figcaption></figure>
<p>Il boit la coupe empoisonnée sans subir le moindre mal.</p>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/chapiteau-4-1920.jpg 1920w"></picture><figcaption>détail du panneau central, chapiteau de colonne, “chapiteau du miracle de la coupe de poison”</figcaption></figure>
</div>

<!-- Page 15 --><hr>

<div id="body-inner">
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/15.saint-jean_15/triptyque-ferme-1280.webp 1280w"></picture><figcaption>le triptyque fermé</figcaption></figure>
<h3 id="position-fermee" class="yellow">présentation des donateurs: le triptyque fermé</h3>
<p>Les revers des volets s'ornent des portraits des donateurs agenouillés et accompagnés de leurs saints patrons.<br>
Ils sont représentés dans des niches peu profondes.<br>
Ils ont tous été identifiés.<br>
On reconnaît, de gauche à droite:</p>
<ul>
<li><span style="color: #e6a64d;">Agnès CASEMBROOD</span> est agenouillée devant <span style="color: #e6a64d;">sainte Agnès</span>, reconnaissable à l'agneau.  </li>
<li><span style="color: #e6a64d;">sainte Claire</span>, enfin, qui porte l'encensoir, protège sœur <span style="color: #e6a64d;">Claire VAN HULSEN</span>.  </li>
<li><span style="color: #e6a64d;">Jacob DE KEUNINC</span> et <span style="color: #e6a64d;">saint Jacques de Compostelle</span> vêtu en pélerin,</li>
<li><span style="color: #e6a64d;">saint Antoine abbé</span>, que l'on reconnaît grâce à sa crosse et au porcelet, patron d'<span style="color: #e6a64d;">Antoine SEGHERS</span>, maître de l'hôpital.</li>
</ul>
<p>Le triptyque fut probablement commandé avant 1475, puisque c'est au cours de cette année-là que mourut Antoine SEGHERS.<br>
Il fut placé au-dessus du maître-autel en 1479.  </p>
</div>

<!-- Page 16 --><hr>

<div id="body-inner">
<h2 id="mise-en-relation" class="yellow">différents textes à l'origine des scènes représentées</h2>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/catherine-d-alexandrie-1920.jpg 1920w"></picture><figcaption>Catherine d'Alexandrie</figcaption></figure>
<h3 id="cath-selon-legende" class="yellow">Catherine d'Alexandrie selon la Légende dorée</h3>
<p>Chapître 166 Sainte Catherine</p>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
Catherine, fille du roi Costus, fut instruite en tous les <a href="#note_artsliberaux" title="les sept arts libéraux" id="artsliberaux" class="yellow">arts libéraux</a>.<br>
Un jour, l'empereur <a href="#note_maxentius" title="Maxence" id="maxentius" class="yello">Maxence</a> convoqua à Alexandrie tous les habitants, aussi bien les riches que les pauvres, afin qu'ils pratiquent l'immolation aux idoles et pour pouvoirainsi punir les chrétiens qui refuseraient d'immoler.<br>
Catherine, âgée de dix-huit ans, qui se trouvait seule dans un palais rempli de richesses et d'esclaves, entendit le mugissement de divers animaux et les chants de jubilation.
Elle ordonna à un messager d'aller promptement s'informer de ce qui se passait.<br>
Quand elle l'eut appris, elle s'entoura de quelques personnes, se protégea par un signe de croix, sortit du palais et s'approcha.<br>
Là, elle vit de nombreux chrétiens poussés à sacrifier par crainte de la mort.<br>
Frappée au cœur par une forte douleur, elle s'avança avec audace vers l'empereur et lui dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«La dignité de ton ordre et la voie de la raison me conseilleraient de te présenter mes salutations, si tu reconnaissais le Créateur des cieux et si tu détournais ton esprit des dieux.»</span></td>
</tr>
</tbody>
</table>
<p>Et, debout devant la porte du temple, elle disputa longuement avec l'empereur, en utilisant les diverses démonstrations des syllogismes, en utilisant l'allégorie, la métonymie, en parlant de claire et mystique façon.<br>
Ensuite, revenant au langage commun, elle dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Je me suis efforcée de m'adresser à toi comme à un savant.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Pourquoi donc as-tu rassemblé en vain cette foule en vue l'honorer la stupidité des idoles?</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Tu admires ce temple fait de la main des artisans, tu admires des ornements précieux qui seront comme de la poussière face au vent.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Admire plutôt le ciel et la terre, la mer et tout ce qu'elle contient.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Admire les ornements des cieux: le soleil, la lune et les étoiles.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Admire leur docilité: depuis le commencement du monde jusqu'à sa fin, ils courent nuit et jour vers l'Occident, pour revenir, infatigablement, vers l'Orient.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Et quand tu auras observé tout cela, interroge-toi et apprends qui est plus puissant qu'eux.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Quand tu auras compris, par le don de sa grâce, de qui il s'agit, et que tu ne pourras trouver personne qui lui soit analogue, alors, adore-le, glorifie-le, car il est le Dieu des dieux, le Seigneur des dominateurs.»</span></td>
</tr>
</tbody>
</table>
<p>Et quand elle eut savamment et longuement disputé de <a href="#note_incarnation" title="l'Incarnation" id="incarnation" class="yellow">l’Incarnation du Fils</a>, l'empereur, stupéfié, ne sut que répondre.<br>
Enfin, il reint à lui et lui dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«Femme, laisse-nous achever le sacrifice et ensuite, nous te rendrons réponse.»</span></td>
</tr>
</tbody>
</table>
<p>Il ordonna alors de l'emmener visiter le palais et de la recevoir avec le plus grand soin, parce qu'il admirait beaucoup sa sagesse et la beauté de son corps.<br>
En effet, elle était très jolie et, par sa beauté incroyable, elle paraissait admirable aux yeux de tous.<br>
L'empereur revint au palais et dit à Catherine:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«Nous avons entendu ton éloquence et admiré ta sagesse, </span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">mais, occupés à sacrifier aux dieux, nous n'avons pu comprendre pleinement toutes tes paroles.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">Maintenant, pour reprendre au début, nous te demandons de quelle famille tu viens.»</span></td>
</tr>
</tbody>
</table>
<p>La sainte répondit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Il est écrit: “Ne te vante pas, ni ne te méprise toi-même.”</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">C'est ce que font les sots que tourmente la vaine gloire.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Cependant je déclare mon origine familiale, poussée non par l'enflure de la vanité, mais par l'amour de la vérité.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Je suis Catherine, fille du roi Costus; bien que née dans la pourpre et assez bien instruite dans les savoirs libéraux, pourtant j'ai méprisé tout cela pour me réfugier auprès du Seigneur Jésus-Christ.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Les dieux que tu honores ne peuvent t'aider ni toi, ni les autres.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Ils sont bien malheureux, les adorateurs de telles divinités qui, appelées en cas de nécessité, font défaut, qui n'apportent aucun secours dans les tourments, qui ne procurent aucune défense au milieu des périls!»</span></td>
</tr>
</tbody>
</table>
<p>Le roi lui répondit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«S'il en est comme tu le dis, alors le monde entier est dans l'erreur et tu es la seule à dire vrai, alors que toute parole doit être confirmée par la bouche de deux ou trois témoins. </span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">Même si tu étais un ange, même si tu étais une vertu céleste, personne n'aurait alors l'obligation de te croire. </span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">Et on doit te croire d'autant moins que tu te trouves être une fragile femme.»</span></td>
</tr>
</tbody>
</table>
<p>Elle rétorqua:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Je t'en conjure, empereur, ne te laisse pas vaincre par ta fureur.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Un funeste trouble ne doit pas envahir l'âme du sage.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Et comme le poète le dit: “Si tu gouvernes par l'esprit, tu es un roi; si tu gouvernes par le corps, tu es un esclave.”</span></td>
</tr>
</tbody>
</table>
<p>L'empereur dit alors:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">À ce que je vois, tu t'apprêtes à nous embobiner par ton astuce pernicieuse, en t'efforçant de faire ces longs discours appuyés sur les exemples des philosophes.»</span></td>
</tr>
</tbody>
</table>
<p>Mais l'empereur, constatant qu'il ne pourrait trouver de parade à sa sagesse, s'empressa de convoquer secrètement par lettres au prétoire d'Alexandrie tous les grammairiens et rhéteurs: ils obtiendraient d'immenses récompenses s'ils triomphaient par leurs raisonnements de la vierge argumentatrice.<br>
On amena donc, de diverses provinces, cinquante orateurs,
qui l'emportaient sur tous les mortels en toute science de ce monde.<br>
Quand ils demandèrent pourquoi ils avaient été appelés de lieux aussi éloignés,
l'empereur leur dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«Il y a auprès de nous une jeune fille incomparable de bon sens et de sagesse, qui réfute tous les savants et affirme que nos dieux sont des démons.  </span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">Si vous arrivez à l'emporter sur elle, vous rentrerez chez vous avec de grands honneurs.»</span></td>
</tr>
</tbody>
</table>
<p>En entendant cela, l'un d'eux, indigné, répondit d'une voix pleine de colère:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&nbsp;</span></td>
<td><span style="color: #165493;">«Belle décision pour un empereur!</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">Pour un différend avec une seule jeune fille, il a fait venir de pays lointains les savants de ce monde, alors qu'un seul de nos jeunes élèves pourrait très aisément la confondre!»</span></td>
</tr>
</tbody>
</table>
<p>Le roi répondit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«Je pouvais certes la contraindre par la force à sacrifier,</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">mais j'ai jugé meilleur de la confondre totalement à l'aide de vos arguments.»</span></td>
</tr>
</tbody>
</table>
<p>Alors les autres lui dirent:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&nbsp;</span></td>
<td><span style="color: #165493;">«Qu'on nous amène cette jeune fille et que, convaincue de sa témérité, elle reconnaisse qu'elle n'avait pas encore rencontré de savants.»</span></td>
</tr>
</tbody>
</table>
<p>Mais cette vierge, quand elle eut pris connaissance de la dispute à venir, se recommanda tout entière à Dieu;
et voici qu'un ange du Seigneur apparut et lui conseilla de résister avec constance, en affirmant que non seulement elle ne pourrait pas être vaincue par ses adversaires, mais qu'en outre, elle les convertirait et les guiderait vers la palme du martyre.<br>
Alors, quand elle fut conduite devant les orateurs, elle dit à l'empereur:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Par quelle décision peux-tu placer une seule jeune fille devant cinquante orateurs à qui, en outre, tu as promis salaire en cas de victoire, alors que tu m'obliges à combattre sans espoir de récompense?</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Pourtant, ma récompense sera le Seigneur Jésus-Christ, qui est l'espérance et la couronne de ceux qui combattent pour lui.»</span></td>
</tr>
</tbody>
</table>
<p>Mais quand les orateurs dirent qu'il était impossible que Dieu se fasse homme et qu'il souffre, la vierge montra que la chose avait été predite même par les païens:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«En effet Platon a affirmé que Dieu était une figure circulaire coupée par une sécante. La <a href="#note_sybille" title="la Sibylle" id="sybille" class="yellow">Sibylle</a> a dit aussi: “Heureux est ce Dieu suspendu à du bois”.»</span></td>
</tr
</tbody>
</table>
<p>La vierge disputa donc avec beaucoup de sagesse contre les orateurs et confondit les dieux par des raisons évidentes; les orateurs en furent stupéfiés et, ne trouvant quoi répondre, ils devinrent totalement muets.<br>
Alors l'empereur, rempli d'une grande colère à leur egard, commença à leur adresser des reproches: pourquoi se laissaient-ils si honteusement vaincre par une seule jeune fille!<br>
Alors l'un d'eux, qui était leur maître dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&nbsp;</span></td>
<td><span style="color: #165493;">«Tu sais, empereur, que jamais personne n'a pu paraître devant nous sans être immédiatement vaincu.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">Mais cette jeune fille, en qui parle l'Esprit de Dieu, nous a frappés d'admiration, au point que dire quoi que ce soit contre le Christ est pour nous une tâche tout à fait impossible ou très redoutable.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">C'est pourquoi nous déclarons fermement, empereur, qu'à moins que tu ne produises une argumentation plus convaincante sur les dieux que nous avons honorés jusqu'à présent, nous nous convertissons tous au Christ.»</span></td>
</tr>
</tbody>
</table>
<p>À ces mots le tyran, enflammé par une violente colère, ordonna de les faire tous brûler au milieu de la cité.<br>
La vierge les réconforta, leur donna de la constance pour le martyre et les instruisit soigneusement dans la foi.<br>
Et quand ils se lamentèrent de mourir sans baptême, la vierge leur répondit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Ne craignez rien, car le sang répandu vous sera compté comme baptême et comme couronne.»</span></td>
</tr>
</tbody>
</table>
<p>Après qu'ils se furent protégés par le signe de croix, ils furent jetés dans les flammes et ils rendirent leur âme au Seigneur,
sans que leurs cheveux ni leurs vêtements fussent aucunement atteints par le feu...<br>
Quand ils eurent été ensevelis par les chrétiens, le tyran dit à la vierge:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«Généreuse vierge, pense à ta jeunesse et tu recevras le second rang après la reine dans mon palais et, grâce à une statue de toi érigée au milieu de la cité, tu seras adorée par tous comme une déesse.»</span></td>
</tr>
</tbody>
</table>
<p>Elle dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Cesse de tenir de tels propos, qu'il est criminel de simplement envisager par la pensée. </span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Je me suis donnée comme <a href="#note_fiancee" title="Je le déclare, je suis une femme qui a dédié son corps comme fiancée au Christ" id="fiancee" class="yellow">épouse au Christ</a>. </span></td>
</tr
<tr>
<td></td>
<td><span style="color: #df8f20;">Il est ma gloire, il est mon amour, il est ma douceur et mon affection. </span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Ni les caresses ni les tourments ne pourront m'éloigner de l'amour que j'ai pour lui.»</span></td>
</tr>
</tbody>
</table>
<p>Alors, rempli de fureur, l'empereur ordonna qu'elle soit dévêtue, frappée à coups de croc de fer,
et, une fois déchirée, jetée dans une prison obscure pour y être torturée par la faim durant douze jours.</p>
<p>Le roi, pour certaines affaires urgentes, dut quitter la région.<br>
La reine, vivement éprise du général des armées, nommé Porphyre, se rendit vers minuit dans la prison de la vierge.<br>
Quand elle y entra, elle vit que la prison resplendissait d'une incroyable clarté et que des anges pansaient les blessures de la vierge.<br>
La vierge commença à lui prêcher les joies éternelles, la convertit à la foi et lui prédit la couronne du martyre et ainsi, ils poursuivirent leur entretien jusqu'au milieu de la nuit.<br>
Porphyre, qui avait entendu tout cela, se jeta aux pieds de la vierge et reçut la foi en même temps que deux cents soldats.<br>
Et, comme le tyran avait ordonné qu'elle soit laissée sans nourriture durant douze jours,
le Christ, pendant tout ce temps, envoyant du ciel une colombe blanche, la nourrissait d'un aliment céleste.<br>
Puis le Seigneur lui apparut au milieu d'une foule d'anges et de vierges et lui dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #7070c2;">—&nbsp;</span></td>
<td><span style="color: #7070c2;">«Reconnais, ma fille, ton Créateur pour le nom de qui tu as subi un dur combat. </span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #7070c2;">Sois constante, car je suis avec toi.»</span></td>
</tr>
</tbody>
</table>
<p>À son retour, l'empereur se la fit amener
et constata aussi qu'elle était tout aussi florissante qu'il pensait la trouver exténuée par un tel jeûne.<br>
Il crut donc que quelqu'un l'avait nourrie en prison et, rempli de fureur, il fit torturer les gardiens.<br>
Mais Catherine lui dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Je n'ai pas reçu de nourriture de main d'homme: c'est le Christ qui m'a nourrie par l'intermédiaire de son ange.»</span></td>
</tr>
</tbody>
</table>
<p>L'empereur dit alors:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«Recueille en ton cœur, je t'en prie, mes conseils et ne réponds pas par des paroles ambiguës.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">Nous ne désirons pas t'avoir comme esclave: reine puissante et choisie pour ta beauté, tu triompheras en mon royaume.»</span></td>
</tr>
</tbody>
</table>
<p>La vierge rétorqua:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Fais attention, toi aussi, je t'en supplie, et après un jugement délibéré, au terme d'une décision véridique, décide qui je dois choisir: un être puissant, éternel, glorieux et beau, ou bien un être faible, mortel, bas et laid.»</span></td>
</tr>
</tbody>
</table>
<p>Alors, l'empereur, indigné, lui dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«Choisis, pour ton sort, de deux choses l'une: ou de sacrifier pour vivre, ou de subir des tourments raffinés pour périr.»</span></td>
</tr>
</tbody>
</table>
<p>Catherine lui répondit: </p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Quels que soient les tourments que tu peux imaginer, ne les diffère pas, car je veux offrir ma chair et mon sang au Christ, comme il s'est offert pour moi. Car il est mon Dieu, mon amour, mon berger et mon époux unique.»</span></td>
</tr>
</tbody>
</table>
<p>Alors un préfet conseilla au roi furieux de faire préparer dans les trois jours quatre roues entourées de scies de fer et de clous très pointus, en sorte que ce terrible supplice découpe la vierge et que l'exemple de cette mort atroce effraye les autres chrétiens.<br>
Les dispositions suivantes furent prises:
deux roues tournaient dans un sens et deux autres dans un sens contraire,
celles de dessous tiraient en déchirant et celles de dessus, qui s'opposaient à ce mouvement, repoussaient en broyant.<br>
Alors la sainte vierge pria le Seigneur de détruire cette machine pour l'exaltation de son propre nom et pour la conversion du peuple qui l'entourait.</p>
<p>Et voilà qu'un ange du Seigneur frappa et brisa cette meule avec tant de force qu'il tua quatre mille païens.<br>
La reine, qui regardait la scène d'un lieu élevé et qui, jusque-là, s'était cachée, descendit aussitôt et reprocha très durement à l'empereur cette si grande cruauté.<br>
Mais le roi, rempli de fureur, après qu'elle eut refusé avec hauteur de sacrifier, lui fit arracher les seins, puis trancher la tête.<br>
Conduite au martyre, elle demanda à Catherine de prier le Seigneur pour elle.<br>
La sainte répondit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Ne crains rien, reine aimée de Dieu, car aujourd'hui, tu obtiendras le royaume éternel en échange d'un royaume transitoire, et, à la place d'un époux mortel, tu en obtiendras un immortel.»</span></td>
</tr>
</tbody>
</table>
<p>Alors la reine, affermie,
demanda aux tortionnaires de ne pas différer ce qui leur avait été ordonné.<br>
Ces serviteurs la conduisirent hors de la cité, lui arrachèrent les seins avec des fers de lance et, ensuite, lui coupèrent la tête.<br>
Porphyre prit son corps et l'ensevelit.</p>
<p>Le lendemain, comme on cherchait le corps de la reine
et que le tyran faisait traîner au supplice beaucoup de gens à cause de cette disparition, Porphyre s'avança tout à coup au milieu de la place
et s'écria:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #93836c;">—&nbsp;</span></td>
<td><span style="color: #93836c;">«C'est moi qui ai enseveli la servante du Christ, qui m'a donné foi dans le Christ.»</span></td>
</tr>
</tbody>
</table>
<p>Alors Maxence, rendu fou, poussa un rugissement terrible et s'écria:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«Ah, que je suis malheureux et digne de pitié!</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">Voilà que Porphyre, qui était l'unique gardien de mon âme et la consolation de toutes mes peines, m'a trahi!»</span></td>
</tr>
</tbody>
</table>
<p>Et, quand il rapporta cela à ses soldats, ces derniers répondirent aussitôt:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #936c93;">—&nbsp;</span></td>
<td><span style="color: #936c93;">«Nous aussi, nous sommes chrétiens et nous sommes prêts à mourir.»</span></td>
</tr>
</tbody>
</table>
<p>Alors l'empereur, ivre de fureur, ordonna que tous soient décapités en compagnie de Porphyre et que leurs corps soient jetés aux chiens.</p>
<p>Ensuite, il fit appeler Catherine et lui dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«Bien que tu aies fait mourir la reine par ton art de la magie, pourtant, si tu te repens, tu seras la première dans mon palais. </span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #b3884d;">Aujourd'hui donc, ou bien tu offriras des sacrifices aux dieux, ou bien tu perdras ta tête.»</span></td>
</tr>
</tbody>
</table>
<p>Elle répondit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Fais tout ce que tu as décidé, car tu me trouveras prête à tout subir.»</span></td>
</tr>
</tbody>
</table>
<p>Il donna alors sa sentence sur le sort de Catherine et ordonna qu'elle soit décapitée.<br>
Quand elle fut conduite sur le lieu d'exécution, elle leva les yeux vers le ciel et fit cette prière:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Ô toi, espérance et salut des croyants, toi, beauté et gloire des vierges, Jésus, bon roi, je t'en supplie: que tous ceux qui garderont mémoire de ma passion et m'invoqueront, soit au moment du départ de leur âme, soit en cas de nécessité, obtiennent l'effet de ta protection.»</span></td>
</tr>
</tbody>
</table>
<p>Une voix se fit entendre qui lui disait:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #6c936c;">—&nbsp;</span></td>
<td><span style="color: #6c936c;">«Viens, ma bien-aimée, ma belle!</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #6c936c;">Voilà: la porte du ciel t’est ouverte.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #6c936c;">Et, en effet, à ceux qui auront célébré ta passion, je promets, du ciel, les secours demandés.»</span></td>
</tr>
</tbody>
</table>
<p>Puis, quand elle fut décapitée,
en guise de sang, du lait sortit de son corps.<br>
Alors des anges prirent son corps, <a href="#note_sinai" title="l'emportèrent jusqu'au mont Sinaï et l'ensevelirent là" id="note_sinai" class="yellow">l'emportèrent</a> depuis ce lieu <a href="#note_sinai" title="l'emportèrent jusqu'au mont Sinaï et l'ensevelirent là" class="yello">jusqu'au mont Sinaï</a>, à plus de vingt journées de voyage, et <a href="#note_sinai" title="l'emportèrent jusqu'au mont Sinaï et l'ensevelirent là" class="yllow">l'ensevelirent là</a> avec beaucoup d'honneurs.<br>
De ses ossements s'écoule sans cesse de l'huile qui guérit les corps de tous les malades.</p
<p>Elle souffrit sous le tyran Maxence ou <a href="#note_maximinus" title="Maximin" id="maximinus" class="yellow">Maximin</a>, qui commença à régner vers l'an du Seigneur 310.<br>
On peut trouver dans le récit sur l'Inventin de la Croix la façon dont Maxence fut puni pour ce crime et pour les autres qu'il avait commis.</p>
<p><br></p>
<p>On rapporte qu'un moine de <a href="#note_rouen" title="Rothomagus" id="rouen" class="yellow">Rothomagus</a> se rendit au mont Sinaï et qu'il demeura là pendant sept ans en se vouant au service de <span style="color: #df8f20;">sainte Catherne</span>.<br>
Comme il lui demandait avec beaucoup d'ardeur de mériter de posséder quelque fragment de son corps, aussitôt une phalange se détacha d'un de ses doigts.<br>
Tout heureux, il reçut ce don de Dieu et l'emporta vers son monastère.</p>
<p>On raconte aussi qu'un homme s'était voué à <span style="color: #df8f20;">sainte Catherine</span> et l'invoquait souvent pour être secouru;
mais, avec le cours du temps, il se relâcha par négligence, perdit sa dévotion d'esprit et cessa de l'invoquer.<br>
Un jour qu'il était en prière, il vit passer devant lui une foule de vierges, dont l'une paraissait plus resplendissante que les autres.<br>
Mais quand elle approcha de lui, elle se cacha le visage et, ainsi joilée, passa devant lui.<br>
Comme il admirait fort son éclat
et demandait qui elle était, l'une des vierges lui répondit:<br>
<span style="color: #577575;">«C'est Catherine, que tu connaissais bien jadis;
elle est passée devant toi avec la face voilée, parce qu'elle t'était désormais inconnue.»</span></p>
<p><br></p>
<p>Il faut relever que <span style="color: #df8f20;">sainte Catherine</span> manifeste son caractère admirable par cinq qualités:
<span style="color: #936c93;">la sagesse</span>, <span style="color: #936c93;">l'éloquence</span>, <span style="color: #936c93;">la constance</span>, <span style="color: #936c93;">la pureté de sa chasteté</span>, <span style="color: #936c93;">le privilège de sa dignité</span>.</p>
<p>En <span style="color: #936c93;">premier lieu</span>, elle manifeste son caractère admirable par sa <span style="color: #936c93;">sagesse</span>.<br>
En elle, en effet, on trouve toutes les sortes de philosophie.
Car la philosophie ou sagesse se divise en <span style="color: #6c8993;">philosophies théorique</span>, <span style="color: #6c8993;">pratique</span> et <span style="color: #6c8993;">logique</span>.<br>
Pour certains, la <span style="color: #6c8993;">philosophie théorique</span> se divise en <span style="color: #93896c;">trois philosophies</span>: <span style="color: #93896c;">intellectuelle</span>, <span style="color: #93896c;">naturelle</span> et <span style="color: #93896c;">mathématique</span>.</p>
<p><span style="color: #df8f20;">Sainte Catherine</span> a joui de <span style="color: #93896c;">la sagesse intellectuelle dans la connaissance des choses divines</span>,
dont elle fit usage surtout dans la dispute contre les rhéteurs, leur prouvant qu'il n'existait qu'un seul Dieu véritable,
et les convainquant que les autres dieux étaient de faux dieux.</p>
<p>Deuxièmement, elle a joui de <span style="color: #93896c;">la sagesse naturelle dans la connaissance de tous les êtres inférieurs</span>, dont elle fit usage dans la dispute contre l'empereur, comme on l'a vu au même lieu.</p>
<p>Troisièmement, elle a joui de <span style="color: #936c93;">la sagesse mathématique</span>, en méprisant les choses terrestres, car, selon <a href="#note_boece" title="Boèce" id="boece" class="yellow">Boèce</a>, cette science considère les formes sans la matière.<br>
<span style="color: #df8f20;">Sainte Catherine</span> a oui de cette science quand elle a tiré son esprit de tout attachement matériel.<br>
Elle a manifesté la possession de cette sagesse quand elle a répondu à l'empereur qui l'interrogeait:<br>
<span style="color: #577575;">«Je suis Catherine, fille du roi Costus;
bien que née dans la pourpre, etc.»</span><br>
Elle a surtout usé de cette sagesse avec la reine,
qu'elle a poussée au rejet du monde, au mépris de soi et au désir du Royaume.  </p>
<p>La <span style="color: #93896c;">philosophie pratique</span> se divise en trois:
les <span style="color: #93896c;">philosophies éthique</span>, <span style="color: #93896c;">économique</span> et <span style="color: #93896c;">publique ou politique</span>.
La première enseigne comment réformer ses mœurs, s'orner de vertus, et elle s'adresse à tous.<br>
La deuxième enseigne la bonne direction de la famille et s'adresse aux pères de famille.<br>
La troisième apprend à bien gouverner les villes, les peuples et l'État.</p>
<p><span style="color: #df8f20;">Sainte Catherine</span> a joui aussi de cette triple science:
elle a joui de la première quand elle a su se conduire avec toute l'honnêteté possible de ses mœurs.<br>
Elle a joui de la deuxième quand elle a dirigé de louable façon la maison nombreuse qui lui avait été laissée.<br>
Elle a joui de la troisième quand elle a donné un sage enseignement à l'empereur.</p>
<p>La <span style="color: #93896c;">philosophie logique</span> se divise en trois:
les <span style="color: #93896c;">logiques démonstrative</span>, <span style="color: #93896c;">rhétorique</span> et <span style="color: #93896c;">sophistique</span>.</p>
<p>La première s'adresse aux philosophes, la deuxième aux rhéteurs et dialecticiens, la troisième aux sophistes.
Elle semble avoir joui de cette triple science,
puisqu'on dit d'elle:<br>
<span style="color: #577575;">«Elle disputa longuement avec l'empereur, en utilisant les diverses démonstrations des syllogismes, en utilisant l'allégorie, la métonymie, en parlant de claire et mystique façon.»</span> |</p>
<p>En <span style="color: #936c93;">deuxième lieu</span>, elle fut admirable d'<span style="color: #936c93;">éloquence</span>.<br>
Elle a joui, en effet, d'une éloquence qui était très abondante dans la prédication,
comme on le voit dans ses sermons, très claire dans la démonstration rationnelle,
comme on le voit dans ses paroles à l'empereur:<br>
«Tu admires ce temple fait de la main des artisans, etc.»<br>
Son éloquence fut aussi très douce dans la persuasion,
comme le montre son action sur Porphyre et sur la reine,
qu'elle attira vers la foi par la douceur de son discours,
et très efficace dans la conviction,
comme le montre son action sur les rhéteurs,
qu'elle sut si puissamment convaincre.</p>
<p>En <span style="color: #936c93;">troisième lieu</span>, elle fut admirable de <span style="color: #936c93;">constance</span>.<br>
Elle se montra en effet très constante devant les menaces,
puisqu'elle les méprisa, en répondant ainsi à l'empereur qui la menaçait:<br>
<span style="color: #577575;">«Quels que soient les tourments que tu peux imaginer,
ne les diffère pas,
car je veux offrir ma chair et mon sang au Christ»</span> |,<br>
et<br>
<span style="color: #577575;">«Fais tout ce que tu as décidé,
car tu me trouveras prête à tout subir»</span> |.</p>
<p>Deuxièmement, elle rejeta les dons qu'on lui faisait
et quand l'empereur lui promit qu'elle tiendrait le second rang au palais,
elle répondit:<br>
<span style="color: #577575;">«Cesse de tenir de tels propos,
qu'il est criminel de simplement envisager par la pensée, etc.»</span> |</p>
<p>Troisièmement, elle surmonta les supplices infligés,
comme on l'a vu quand elle fut placée en prison, puis sur la roue.</p>
<p>En <span style="color: #936c93;">quatrième lieu</span>, elle fut admirable par la <span style="color: #936c93;">pureté de sa chasteté</span>.<br>
En effet, elle conserva sa chasteté en des circonstances où, d'habitude, la chasteté faiblit.<br>
Il y a en effet cinq circonstances
où la chasteté faiblit: </p>
<ul>
<li><span style="color: #93896c;">l'abondance qui amollit</span>, </li>
<li><span style="color: #93896c;">l'occasion qui suggère</span>, </li>
<li><span style="color: #93896c;">la jeunesse qui enflamme</span>, </li>
<li><span style="color: #93896c;">la liberté qui relâche</span>, </li>
<li><span style="color: #93896c;">la beauté qui provoque</span>.  </li>
</ul>
<p>Or, en ces cinq circonstances, <span style="color: #df8f20;">sainte Catherine</span> conserva sa chasteté.  </p>
<ul>
<li>En effet en ayant hérité de parents aussi riches, elle jouissait d'une très grande abondance.  </li>
<li>Maîtresse d'elle-même et vivant tout le jour parmi ses serviteurs, elle jouissait d'occasions.  </li>
<li>Elle jouissait aussi de sa jeunesse et de sa liberté, </li>
<li>car elle demeurait seule et libre dans son palais.</li>
</ul>
<p>Sur ces quatre circonstances, il a été dit, plus haut:<br>
«Catherine, âgée de dix-huit ans, se trouvait seule dans un palais rempli de richesses et d'esclaves.»<br>
Elle jouissait aussi de la beauté,
puisqu'on a dit qu'
«elle était très jolie
et, par sa beauté incroyable, elle paraissait admirable aux yeux de tous».</p>
<p>En <span style="color: #936c93;">cinquième lieu</span>, elle fut admirable par le <span style="color: #936c93;">privilège de sa dignité</span>.<br>
En effet,
certains privilèges particuliers se manifestent chez quelques saints au moment de leur mort: </p>
<ul>
<li>la visite du Christ pour <a href="#note_jean" title="福音書記者ヨハネ" id="jean" class="yellow">Jean l'Évangéliste</a>, </li>
<li>l'écoulement d'huile pour saint Nicolas <span style="color: #ccc;">(chapître 19 de la Légende Dorée</span>, </li>
<li>le ruissellement de lait pour saint Paul, </li>
<li>la préparation du tombeau pour saint Clément <span style="color: #ccc;">(chapître 20 de la Légende Dorée)</span>, </li>
<li>l'efficacité des demandes d'intercession pour sainte Marguerite <span style="color: #ccc;">(chapître 88 de la Légende Dorée)</span>, quand elle pria pour ceux qui entretiendraient sa mémoire.</li>
</ul>
<p>Or tous ces privilèges se trouvèrent réunis en <span style="color: #df8f20;">sainte Catherine</span>, comme le montre sa légende.</p>
<p><br></p>
<p>On remarque une hésitation chez certains auteurs:
fut-elle martyrisée sous Maxence ou sous Maximin?<br>
À cette époque trois hommes gouvernaient l'Empire: </p>
<ul>
<li>Constantin, qui avait recueilli l'Empire par succession de son père; </li>
<li>Maxence, fils de Maximin, nommé Auguste par les soldats prétoriens de Rome; </li>
<li>et Maximin, qui obtint l'autorité de César en Orient.</li>
</ul>
<p>D'après les chroniques, Maxence exerçait sa tyrannie contre les chrétiens à Rome et Maximin en Orient.</p>
<p>Il semble donc à certains auteurs que c'est par l'erreur d'un copiste que Maxence a été mis à la place de Maximin.
<span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
<p>
</p></div>

<div id="body-inner">
<h3 id="note_rouen" class="yellow">Rothomagus</h3>
<div class="notices yellow">
<p>Rothomagus est l'ancien nom de Rouen. S'y trouvait un monastère appelé à l'origine «Sainte-Trinité-du-Mont», aujourd'hui «Sainte-Catherine-du-Mont».<br>
retour à la note: <a href="#rouen" title="Rothomagus">Rothomagus↑</a></p>
</div>
<h3 id="note_jean" class="yellow">Jean l'Évangéliste</h3>
<div class="notices yellow">
<p>Voir le <a href="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#jean9-selon-legende" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:18#jean9-selon-legende">chapître 18</a> de la Légende Dorée.<br>
retour à la note: <a href="#jean" title="福音書記者ヨハネ">Jean l'Évangéliste↑</a></p>
</div>
<h3 id="note_artsliberaux" class="yellow">Les sept arts libéraux</h3>
<div class="notices yellow">
<p>Dans les écoles moyennes et secondaires de la période médiévale, outre la théologie, sept arts libéraux ont été imposés comme matières d'enseignement général. comprenant trois enseignements (grammaire, rhétorique, droit de la défense) et quatre apprentissages (arithmétique, géométrie, astronomie, mathématiques).
renvoi au texte　<a href="#artsliberaux" title="les sept arts libéraux">les sept arts libéraux↑</a></p>
</div>
<h3 id="note_maxentius" class="yellow">Maxence</h3>
<div class="notices yellow">
<p>Empereur romain (285 - 305 - 305 - 308) Il a été nommé vice-empereur (César) par Dioclétien, puis empereur d'occident (Auguste), persécuteur de chrétiens (303) puis démissionnaire. Il revînt pour aider son fils, Maxence, à lever une armée, et entra ensuite en conflit avec les uns avec les autres, s'est enfui à Galia (France), où il se confronte avec son beau-fils, Constantin, puis se suicide.<br>
renvoi au texte　<a href="#maxentius" title="Maxence">Maxence↑</a></p>
</div>
<h3 id="note_sybille" class="yellow">la Sibylle</h3>
<div class="notices yellow">
<p>Elle était une ancienne prophétesse païenne. On dit qu'il y en une ou dix. Le plus ancien est le Sibylle à Elytrie, en Asie Mineure, mais c'est le Sibyla de Cumes (une cité antique à l'ouest de Naples). Elle a écrit son oracle en neuf volumes, l'a vendu au roi de Rome, et ce "Livre de Sibylle" a été conservé dans le temple de Jupiter jusqu'à ce qu'il soit brûlé dans un incendie sur la colline Pictor au 1er siècle avant J-C. "L'Oracle de Sibylle", qui a été inclus dans le copus des textes apocryphes de l'Ancien puis du Nouveau Testament, est un faux document juif qui a été écrit en Egypte vers le deuxième siècle avant J-C, et qui inclut des altérations et des insertions chrétiennes plus tard.<br>
renvoi au texte　<a href="#sybille" title="la Sibylle">la Sibylle</a></p>
</div>
<h3 id="note_maximinus" class="yellow">Maximin</h3>
<div class="notices yellow">
<p>Il n'y avait pas d'empereur nommé Maximinus à cette époque. On peut aussi la confondre avec l'empereur Maximinus, neveu de l'empereur Relius, devenu vice-empereur en 305 et empereur du Trône impérial plus tard (308-314).<br>
renvoi au texte　<a href="#maximinus" title="Maximin">Maximin↑</a></p>
</div>
<h3 id="note_rouen" class="yellow">Rothomagus</h3>
<div class="notices yellow">
<p>Rothomagus. Ancien nom de la ville actuelle de Rouen. L'histoire d'un moine qui vivait dans le monastère de Sainte-Trinité-du-Mont près de Rouen (aujourd'hui monastère Sainte-Catherine-du-Mont), et la relique sacrée de la prêtresse, qui serait revenue du monastère de Sainte-Catherine au Sinaï au début du 10e siècle, et qui suscita quelques miracles, ont fait de Trinite-Aux-Mont l'un des cœurs du culte de sainte Catherin en Europe occidentale.<br>
renvoi au texte　<a href="#rouen" title="Rothomagus">Rothomagus↑</a></p>
</div>
<h3 id="note_fiancee" class="yellow">Je le déclare, je suis une femme qui a dédié son corps comme fiancée au Christ</h3>
<div class="notices yellow">
<p>Selon la tradition, Catherine, qui lui a été proposée par le fils de l'empereur, a vu du miroir que le prétendant ne lui convenait pas en termes de famille, de beauté, de richesse et d'apprentissage. Un ermite lui a enseigné que le Christ était le meilleur marié et qu'elle devait épouser le Christ, et elle a enseigné qu'elle ne pouvait être l'épouse du Christ à moins qu'elle ne soit vue deux fois et baptisée. Quand elle fut baptisée, le Christ nourrisson apparut dans son rêve et mit une bague de fiançailles sur son doigt.<br>
renvoi au texte　<a href="#fiancee" title="Je le déclare, je suis une femme qui a dédié son corps comme fiancée au Christ">Je le déclare, je suis une femme qui a dédié son corps comme fiancée au Christ↑</a></p>
</div>
<h3 id="note_sinai" class="yellow">le mont Sinaï et le culte de sainte Catherine</h3>
<div class="notices yellow">
<p>Cependant, on dit que le mont Sinaï ne connaissait pas du tout Sainte-Catherine et sa tombe. Le célèbre monastère Sainte-Catherine au pied de la montagne a été construit au milieu du sixième siècle. Ce monastère, qui était supposé avoir la relique, n'était ni le lieu de naissance ni le centre du culte de sainte Catherine.<br>
renvoi au texte　<a href="#sinai" title="l'emportèrent jusqu'au mont Sinaï et l'ensevelirent là">l'emportèrent jusqu'au mont Sinaï et l'ensevelirent là↑</a></p>
</div>
<h3 id="note_boece" class="yellow">Boèce</h3>
<div class="notices yellow">
<p>Boèce est un philosophe et homme d'État italien qui vivait dans la Rome antique tardive.<br>
Né dans la famille des nobles romaines, il est devenu orphelin à un jeune âge et a été élevé par l'aristocrate Shinmacus.<br>
Il a étudié à Athènes, et après son retour, il a passé ses études dans "un studio décoré de cristal et d'ivoire".
Vers cette époque, il épousa la fille de son bienfaiteur, Shinmacus. Il était alors le souverain de l'Italie, le roi Théodoric du Royaume du Goth oriental, et a participé à la réforme du système monétaire. Il s'élève peu à peu à un rang supérieur et devient administrateur de l'Empire romain occidental en 510. En 522, ses deux fils ont aussi gagné la confiance du roi pour devenir administrateur, mais ont été emprisonnés et exécutés à Pavie, soupçonnés d'avoir été impliqués dans la rébellion par l'ancien administrateur, Albinus.<br>
Il a écrit "Consolation de philosophie" en prose avec la rime en prison et a cherché le réconfort de la philosophie ancienne.<br>
Les idées de Boèce reposent sur Platon et les Stoïciens, qui tentent par raison de surmonter les obstacles émotionnels et externes. Il traduisit la logique d'Aristote en latin, qui fut le début de l'étude médiévale d'Aristote. Il a également traduit des oeuvres littéraires comme Nicomaques, Euclide, Archimède et Ptoléemé, qui ont eu une grande influence sur la philosophie médiévale en tant qu'introduction à la philosophie et à la science grecques.<br>
renvoi au texte　<a href="#boece" title="Boèce">Boèce↑</a></p>
</div>
<h3 id="note_constantin" class="yellow">Constantin</h3>
<div class="notices yellow">
<p>Empereur Romain appelé Constantin Ier le Grand. Il a été la première personne à oeuvrer officiellement à la protection et à la formation reconnue de la religion chrétienne et s'est nommé "le 13ème apôtre" pour protéger l'Arianisme par le premier Conseil de Nicée. En 330, il déménagea la capitale de Rome à Byzance et la changea en Constantinople. Il avait toujours été croyant en Sol Invictus, mais il s'est converti sur son lit de mort (voir chapitre 12 de la Légende d'Or).<br>
renvoi au texte　<a href="#constantin" title="Constantin">Constantin↑</a></p>
</div>
<h3 id="note_incarnation" class="yellow">l'Incarnation</h3>
<div class="notices yellow">
<p>Est appelé incarnation le fait que pour sauver l'humanité vienne dans le monde l'unique enfant de Dieu en recevant chair dans les entrailles de Marie du travail de l'Esprit Saint.<br>
renvoi au texte　<a href="#incarnation" title="l'Incarnation">l'Incarnation↑</a></p>
</div>
</div>

<!-- Page 17 --><hr>

<div id="body-inner">
				<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/03.saint-jean_3/barbe-la-grande-martyre-1920.jpg 1920w"></picture><figcaption>Barbe la grande martyre</figcaption></figure>
<h3 id="barbe-selon-legende" class="yellow">Barbe la grande martyre selon la Légende dorée</h3>
<p>Il y avait à <a href="#note_nicomedie" title="Nicomédie" id="nicomedie" class="yellow">Nicomédie</a>, du temps de l'empereur <a href="#note_maximien" title="Maximien" id="maximien" class="yellow">Maximien</a>, un païen du nom de <span style=color: #99713d;">Dioscore</span>, qui était d'une famille très distinguée et qui possédait de grandes richsses.<br>
Il avait une fille d'une grande beauté, qui se nommait <span style="color: #994c3d;">Barbe</span>.<br>
Son père l'aimait beaucoup;
et afin que nul homme ne pût la voir, il la renferma dans une tour très-haute qu'il fit élever.<br>
Dès son plus jeune âge, <span style="color: #994c3d;">Barbe</span>, sentant le néant des choses terrestres, commença à s'appliquer à la méditation des choses du ciel.<br>
Étant une fois entrée dans un temple, et voyant le long des murailles les statues des idoles, elle demanda à ses parents:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Qu'est-ce que signifient ces images de personnes humaines?»</span></td>
</tr>
</tbody>
</table>
<p>Ses parents lui répondirent:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«Tais-toi; ce ne sont pas des hommes, mais des dieux, et ils veulent être adorés.»</span></td>
</tr>
</tbody>
</table>
<p><span style="color: #994c3d;">Barbe</span> dit:  </p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Autrefois furent-ils des hommes?»</span></td>
</tr>
</tbody>
</table>
<p>Et on lui répondit qu'oui.<br>
Et elle réfléchissait là-dessus le jour et la nuit, se disant en elle-même:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Si nos dieux ont été des hommes, ils sont donc nés comme des hommes, ils sont morts comme des hommes; s'ils étaient dieux, ils ne seraient point nés et ils ne seraient point morts; car la Divinité, à ce qu'il me semble, ne commence point et ne peut cesser.»</span></td>
</tr>
</tbody>
</table>
<p>Elle en vint donc à mépriser ces prétendus dieux de bois ou de pierre;
mais il lui manquait encore la connaissance du vrai Dieu.<br>
Sur ces entrefaites, la renommée se répandit à Nicomédie qu'il y avait à Alexandrie un homme d'une sagesse prodigieuse, nommé <a href="#note_origene" title="Origène" id="origene" class="yellow">Origène</a>, qui démontrait l'existence du vrai Dieu et la vanité des idoles.<br>
En apprenant cela, <span style="color: #94c3d;">Barbe</span> fut remplie de joie, et elle songeait comment elle pourrait faire pour aller l'entendre;
mais elle n'osa pas en parler à son père, et elle adopta l'idée d'écrire à Origène;
ce qu'elle fit en ces termes:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="visibility:hidden;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«À Origène d'Alexandrie, dont la gloire est universellement répandue, moi, Barbe, de Nicomédie. </span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Dès la première lueur de ma raison, j'ai éprouvé dans tout mon cœur le plus vif désir d'arriver à cette connaissance, et j'ai toujours pensé que la Divinité ne pouvait être dans des images, œuvre de nos mains, incapables de parler et d'entendre.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">J'ai pensé aussi que ceux qui avaient été des hommes, et qu'on représentait comme des dieux, ne pouvaient pas l'être; car l'homme commence et finit, mais Dieu est avant tous les temps et après tous les temps.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Et j'ai mis ma confiance en ce Dieu qui m'est inconnu, mais qui a créé toutes choses; je lui ai voué mon amour, et je n'épargnerai rien pour arriver à le connaître.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">La renommée de tes talents est venue jusqu'à moi, et j'ai pensé, père vénérable, que tu m'amènerais à la science de ce Dieu que tu prêches.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Et j'espère que tu dissiperas les ténèbres de mon ignorance et que tu me conduiras à la lumière de la vraie foi.»</span></td>
</tr>
</tbody>
</table>
<p>Ayant envoyé sa lettre à Origène, elle pria le Seigneur en versant des larmes et en disant:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Seigneur, affermissez le pied de celui que j'ai envoyé à votre serviteur, afin que la lumière que j'ai réclamée m'arrive.»</span></td>
</tr>
</tbody>
</table>
<p>Le messager arriva à Alexandrie,
et il trouva Origène dans le palais de la mère de l'empereur Alexandre, Mamée,
et il était occupé à prêcher la doctrine de Jésus-Christ.<br>
Il reçut avec grande joie la lettre de <span style="color: #994c3d;">Barbe</span>,
et il loua Dieu de ce qu'il suscitait une pareille ferveur,
et il s'empressa de lui répondre ainsi:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="visibility:hidden;">—&nbsp;</span></td>
<td><span style="color: #165493;">«Origène, indigne prêtre de Jésus-Christ, et peut-être son prédicateur, demeurant encore à Alexandrie, à Barbe, de la race des gentils, mais par adoption de la race des enfants de Dieu et de Jésus-Christ.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">Je vais t'enseigner, ainsi que tu me le demandes, quel est le vrai Dieu.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">Sache qu'il est un en substance et trois en personnes: le Père, le Fils et le Saint-Esprit.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">Celui qui croit en cette doctrine a ce qu'il faut pour parvenir à Dieu.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">Ajoutes-y donc créance pour compléter ce qui manque à la plénitude de ton désir; consulte mon envoyé, il t'informera de la loi de Dieu et il te lira les livres saints qu'il porte avec lui.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">Ne redoute pas d'être exposée à de grands tourments pour le nom de Jésus-Christ.</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">Il a dit: “Celui qui perd pour moi son âme en ce monde, la gardera dans la vie éternelle”.»</span></td>
</tr>
</tbody>
</table>
<p>Origène envoya un de ses disciples pour conférer avec <span style="color: #994c3d;">Barbe</span>,<br>
et quand on lui dit qu'il était arrivé,
elle dit aussitôt de le faire entrer.<br>
Le serviteur de Dieu la salua au nom de Jésus-Christ.<br>
Et voilà que son père survint,
et, voyant un inconnu,
il s'effraya et il dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«Quel est cet homme et que vient-il faire?»</span></td>
</tr>
</tbody>
</table>
<p>L'Alexandrin répondit qu'il était instruit de la science de la médecine, et qu'il avait un maître qui, contre l'usage des médecins, guérissait aussi les âmes.<br>
Le père de <span style="color: #994c3d;">Barbe</span>, entendant cela, se retira et les laissa converser.<br>
Et le chrétien, qui se nommait Valentin, expliqua à <span style="color: #994c3d;">Barbe</span> les mystères sacrés de la religion,
et il la baptisa dans cette même tour où son père l'avait mise,
et il lui remit les livres envoyés par Origène.<br>
Elle s'appliqua beaucoup à les lire,
et elle fit, quoique sans maître, de très grands progrès dans la science des choses divines.</p>
<p>On dit qu'à cause de sa beauté des nobles du pays s'éprirent d'amour pour elle,
et ils parlèrent à son père afin qu'elle prit un époux.<br>
Et son père, allant la trouver dans la tour, cherchait à l'y décider, en disant:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«Ma fille, des personnages puissants se sont souvenus de toi, et m'ont dit qu'ils te prendraient en mariage; qu'est-ce que tu veux faire?»</span></td>
</tr>
</tbody>
</table>
<p>Elle répondit à son père en le regardant avec courroux:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Ne me force pas à agir ainsi, mon père.»</span></td>
</tr>
</tbody>
</table>
<p>II la quitta,
et, se séparant d'elle, il fit venir un grand nombre d'ouvriers,
et il leur ordonna de construire une maison de bains, et il s'en alla dans un pays éloigné.<br>
<span style="color: #994c3d;">Barbe</span> descendit de la tour pour voir ce que l'on avait fait,
et elle vit que du côté du nord il n'y avait que deux fenêtres,
et elle dit aux ouvriers:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Pourquoi avez-vous fait ces deux fenêtres?»</span></td>
</tr>
</tbody>
</table>
<p>Et ils répondirent:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Votre père l'a ainsi commandé.»</span></td>
</tr>
</tbody>
</table>
<p>Elle répondit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Faites-moi une autre fenêtre.»</span></td>
</tr>
</tbody>
</table>
<p>Et ils répliquèrent:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Nous craignons que votre père ne s'irrite contre nous.»</span></td>
</tr>
</tbody>
</table>
<p>Elle leur dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Faites ce que je vous dis, et j'amènerai mon père à donner son approbation.»</span></td>
</tr>
</tbody>
</table>
<p>Ils firent donc une autre fenêtre.<br>
<span style="color: #994c3d;">Barbe</span> plaça de sa propre main, du côté de l'orient, dans cet édifice, une croix précieuse;
et, remontant dans la tour, elle vit les idoles qu'adorait son père.<br>
Obéissant à l'inspiration de l'Esprit saint, elle leur cracha à la figure et elle dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Qu'ils deviennent semblables à vous, ceux qui vous font et ceux qui mettent en vous leur confiance».</span></td>
</tr>
</tbody>
</table>
<p>Quand la bâtisse fut finie, son père revint de son voyage, et lorsqu'il vit les trois fenêtres, il dit aux ouvriers:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«Pourquoi avez-vous fait trois fenêtres?»</span></td>
</tr>
</tbody>
</table>
<p>Ils répondirent:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Votre fille nous l'a ordonné.»</span></td>
</tr>
</tbody>
</table>
<p>Il dit alors à sa fille:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Est-ce toi qui as commandé de faire trois fenêtres?»</span></td>
</tr>
</tbody>
</table>
<p>Elle répondit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«J'ai eu de bonnes raisons pour agir ainsi; car trois fenêtres illuminent l'homme entier».</span></td>
</tr>
</tbody>
</table>
<p>Et son père la mena avec lui dans la salle des bains, et lui dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«Pourquoi trois fenêtres éclairent-elles plus que deux?»</span></td>
</tr>
</tbody>
</table>
<p>Elle répondit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Il y en a trois qui illuminent le monde et qui règlent le cours des étoiles: le Père, le Fils et le Saint-Esprit, et ils sont un en essence.»</span></td>
</tr>
</tbody>
</table>
<p>Alors son père, rempli de fureur, tira son épée pour la tuer.<br>
Mais la sainte fit sa prière à Dieu,
et les murailles s'entr'ouvrirent,
et elle fut transportée sur une montagne où étaient deux bergers qui faisaient paître leurs brebis.<br>
Son père se mit à sa recherche, et il alla vers ces bergers et il leur demanda s'ils avaient vu sa fille.<br>
L'un d'eux, voyant combien le père était irrité parce qu'il ne savait point où elle était, se tut; l'autre l'indiqua du doigt.<br>
<span style="color: #994c3d;">Sainte Barbe</span> maudit celui qui l'avait trahie,
et sur-le-champ il fut changé en statue de marbre,
et ses brebis furent métamorphosées en sauterelles;
mais ce récit est apocryphe.<br>
Son père, la trouvant, la battit, la traina par les cheveux
et la chargea de chaînes.<br>
Il l'enferma dans un cachot
et y mit des gardes,
et il s'en alla prévenir de tout ce qui s'était passé le proconsul <a href="#note_marcien" title="Marcien" id="marcien" class="yellow">Marcien</a>.<br>
Le proconsul voulut que <span style="color: #994c3d;">Barbe</span> fût amenée devant lui.<br
Quand il la vit, il fut frappé de sa grande beauté, et il lui dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&nbsp;</span></td>
<td><span style="color: #165493;">«Si tu veux te sauver, sacrifie aux dieux immortels, ou tu mourras dans les plus grands tourments.»</span></td>
</tr>
</tbody>
</table>
<p>Elle répondit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Je veux m'offrir en sacrifice à mon Dieu Jésus-Christ, qui a fait le ciel et la terre et tout ce qui y est contenu. </span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Quant aux démons que tu adores, le prophète a dit: </span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Ils ont une bouche et ne parlent point; ils ont des yeux et ne voient point; ceux qui leur rendent hommage leur ressembleront.»</span></td>
</tr>
</tbody>
</table>
<p>Le proconsul, furieux, ordonna de la dépouiller et de la frapper sans ménagement à coups de nerf de boeuf;
et quand tout son corps fut en sang, il prescrivit de la ramener en prison, jusqu'à ce qu'il eût décidé quel tourment il lui infligerait.<br>
Au milieu de la nuit, une grande clarté entoura la martyre, et Jésus-Christ lui apparut et lui dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #6c936c;">—&nbsp;</span></td>
<td><span style="color: #6c936c;">«Prends courage, ma fille; il y aura grande joie dans le ciel et sur la terre lors de ta passion; ne redoute point les menaces du tyran; je suis avec toi pour te préserver de tous maux.»</span></td>
</tr>
</tbody>
</table>
<p><span style="color: #994c3d;">Sainte Barbe</span> ressentit une joie extrême des paroles du Seigneur,
et le matin elle reparut devant le proconsul, qui, voyant qu'il ne restait sur elle nulle trace des coups qu'elle avait reçus la veille, lui dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&nbsp;</span></td>
<td><span style="color: #165493;">«Vois combien les dieux te sont favorables et combíen ils t'aiment, puisqu'ils ont guéri tes plaies.»</span></td>
</tr>
</tbody>
</table>
<p><span style="color: #994c3d;">Barbe</span> lui répliqua:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Tes dieux sont comme toi, sourds, aveugles et muets; comment auraient-ils pu me guérir? </span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Celui qui m'a guérie, c'est Jésus-Christ, le Fils du Dieu vivant; mais tu ne le vois pas, parce que ton cœur est endurci par le diable.»</span></td>
</tr>
</tbody>
</table>
<p>Le proconsul, frémissant comme un lion irrité, ordonna qu'on lui brûlat les côtes avec des torches allumées et qu'on lui frappât la tête à coups de marteau.<br>
La sainte, regardant le ciel, dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Vous savez, Seigneur, que je souffre pour l'amour de vous; ne m'abandonnez pas.»</span></td>
</tr>
</tbody>
</table>
<p>L'impie proconsul commanda qu'on lui coupat les mamelles;
et elle dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Ne me rejetez pas hors de votre présence, Seigneur, et ne m'otez pas l'Esprit saint.»</span></td>
</tr>
</tbody>
</table>
<p>Il prescrivit ensuite qu'on la menât nue dans la ville, en la frappant;
et elle dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Seigneur, vous qui êtes mon soutien et qui couvrez le ciel de nuages, couvrez mon corps, afin qu'il ne soit pas exposé aux regards des impies.»</span></td>
</tr>
</tbody>
</table>
<p>Et il descendit du ciel un ange qui lui apporta une tunique blanche.<br>
Le proconsul ordonna alors qu'on lui coupât la tête;
mais son père se saisit d'elle et la mena dans la montagne,
et elle fit cette prière:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Seigneur Jésus, à qui toutes choses obéissent, accordez que ceux qui invoqueront votre saint nom en se souvenant de mon martyre, trouvent leurs péchés mis en oubli au jour du jugement.»</span></td>
</tr>
</tbody>
</table>
<p>Et elle entendit une voix qui venait du ciel et qui répondit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #6c936c;">—&nbsp;</span></td>
<td><span style="color: #6c936c;">«Viens, ma bien-aimée; repose-toi dans la demeure de mon père qui est dans le ciel; ce que tu demandes t'est accordé.»</span></td>
</tr>
</tbody>
</table>
<p>Et la martyre eut la tête tranchée des mains de son propre père.
Et lorsqu'il redescendit de la montagne, le feu du ciel tomba sur lui et le consuma,
et il ne resta pas même vestige de lui.</p>
<p>Il y eut un homme puissant, un comte de <a href="#note_saxe" title="Saxe" id="saxe" class="yellow">Saxe</a>,
qui fit prisonnier son ennemi et qui l'enferma dans une tour, en défendant, sous les peines les plus grndes, que personne lui donnat à boire ni à manger.<br>
Après qu'il y fut resté quelques jours,
il pria, en gémissant, le gardien de la tour, de lui donner, pour l'amour de <span style="color: #994c3d;">sainte Barbe</span>, un peu de pain, afin qu'il ne mourat pas;
le gardien ne fit pas attention à ses plaintes,
et il gisait par terre défaillant;
le gardien le crut mort,
et demanda au comte la permission d'enlever le cadavre avant qu'il répandit une mauvaise odeur;
on attacha donc une corde au cou de celui que l'on croyait mort,
et on le précipita du haut du rocher;
aussitôt qu'il eût touché le sol il se releva,
et tous ceux qui étaient présents s'enfuirent, saisis de crainte.<br>
Il les rappela et leur dit de ne point avoir peur;
et ils s'approchèrent de lui, et ils demandèrent comment il avait pu soutenir son existence,
et il leur répondit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&nbsp;</span></td>
<td><span style="color: #165493;">«Sainte Barbe m'a assisté dans toutes mes peines; </span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">c'est elle qui m'a soutenu dans ma chute, et je ne peux mourir avant de m'être confessé et d'être muni de la sainte communion,»</span></td>
</tr>
</tbody>
</table>
<p>Interrogé pourquoi il avait obtenu cette grâce, il répondit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&nbsp;</span></td>
<td><span style="color: #165493;">«Je n'ai manqué aucune année de jeûner et de prier le jour de la fête de sainte Barbe pour lui faire bonheur, et c'est pourquoi elle a demandé à Dieu que je ne mourusse pas sans avoir reçu les sacrements.»</span></td>
</tr>
</tbody>
</table>
<p>Et dès qu'il les eut reçus, il expira.<br>
Nous lisons aussi que du temps du roi des Romains, Adolphe, un comte fut mis à la tête du gouvernement des provinces de l'Orient, et un soldat fut accusé d'avoir fait violence à une jeune fille.<br>
Tandis qu'il était en prison, attendant son jugement, il demanda à se confesser,
et son confesseur ayant reconnu qu'il était innocent, l'engagea à se vouer au service de <span style="color: #994c3d;">sainte Barbe</span>, et à promettre de ne pas revenir chez lui avant d'avoir fait un pèlerinage en son honneur.<br>
La femme réclamait à grands cris un jugement, et les juges s'étant réunis et ayant fait comparaître devant eux l'accusé, le condamnèrent à mort;
alors il se présenta quelqu'un que personne ne connaissait, et qui, ayant demandé la parole, prouva, par des raisons pertinentes et irrécusables, que le soldat n'était point coupable et que la sentence était injuste.<br>
Et les juges le révoquèrent;
et le soldat, rendu à la liberté , finit ses jours au service de <span style="color: #994c3d;">sainte Barbe</span>,
et l'inconnu qui lui avait servi d'avocat disparut sans qu'on sût qui il était.</p>
<p>
</p></div>

<div id="body-inner">
				<p></p>
<h3 id="note_nicomedie" class="yellow">Nicomédie</h3>
<div class="notices yellow">
<p><a href="https://fr.wikipedia.org/wiki/Nicomédie" title="https://fr.wikipedia.org/wiki/Nicomédie"><ruby lang="fr">Nicomédie<rp>(</rp><rt lang="grc">Νικομήδεια</rt><rp>)</rp></ruby></a> est une ville d'Asie Mineure, capitale du royaume de <a href="https://fr.wikipedia.org/wiki/Bithynie" title="https://fr.wikipedia.org/wiki/Bithynie">Bithynie</a>. Elle se trouve aujourd’hui en Turquie et est appelée Izmit. Elle fut la capitale des empereurs <a href="https://fr.wikipedia.org/wiki/Dioclétien" title="https://fr.wikipedia.org/wiki/Dioclétien">Dioclétien</a> et <a href="https://fr.wikipedia.org/wiki/Constantin_Ier_(empereur_romain)" title="https://fr.wikipedia.org/wiki/Constantin_Ier_(empereur_romain)">Constantin</a>.<br>
retour à la note: <a href="#maximien" title="Maximien">Nicomédie↑</a></p>
</div>
<h3 id="note_maximien" class="yellow">Maximien</h3>
<div class="notices yellow">
<p><a href="https://fr.wikipedia.org/wiki/Maximien_Hercule" title="https://fr.wikipedia.org/wiki/Maximien_Hercule">Maximien Hercule</a>. Coempereur de l'empire romain de 286 à 305 avec <a href="https://fr.wikipedia.org/wiki/Dioclétien" title="https://fr.wikipedia.org/wiki/Dioclétien">Dioclétien</a> pour l'orient. Père de <a href="https://fr.wikipedia.org/wiki/Maxence_(empereur_romain)" title="https://fr.wikipedia.org/wiki/Maxence_(empereur_romain)">Maxence</a>.<br>
retour à la note: <a href="#nicomedie" title="Nicomédie">Maximien↑</a></p>
</div>
<h3 id="note_origene" class="yellow">Origène</h3>
<div class="notices yellow">
<p><a href="https://fr.wikipedia.org/wiki/Origène" title="https://fr.wikipedia.org/wiki/Origène"><ruby lang="fr">Origène<rp>(</rp><rt lang="grc">Ὠριγένης</rt><rp>)</rp></ruby></a> est un théologien chrétien, reconnu Père de l'Église mais non saint, né à Alexandrie vers 185 et mort à Tyr vers 253.<br>
retour à la note: <a href="#origene" title="Origène">Origène↑</a></p>
</div>
<h3 id="note_marcien" class="yellow">Marcien</h3>
<div class="notices yellow">
<p>Aucune trace de ce proconsul hors la Légende Dorée.<br>
retour à la note: <a href="#marcien" title="Marcien">Marcien↑</a></p>
</div>
<h3 id="note_saxe" class="yellow">Saxe</h3>
<div class="notices yellow">
<p>Région d'Allemagne dont la délimitation a varié au cours de l'histoire; le Comté palatin de Saxe était une principauté du Saint-Empire romain germanique. Fondée par l'empereur Otton Ier au xe siècle, elle s'étendait sur l'actuelle région de Saale-Unstrut dans le sud-est du duché de Saxe.<br>
retour à la note: <a href="#saxe" title="Saxe">Saxe↑</a></p>
</div>
</div>

<!-- Page 18 --><hr>

<div id="body-inner">
				<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Jean l'Évangéliste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Jean l'Évangéliste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>Jean l'Évangéliste</figcaption></figure>
<h3 id="jean-selon-legende" class="yellow">Jean l'évangéliste selon la Légende dorée</h3>
<p>Chapître 9. saint jean l'évangéliste</p>
<p>Le <a href="#note_nomdejean" title="nom de Jean" id="nomdejean" class="yellow">nom de Jean</a>, <span style="color: #994c3d;">Johannes</span>, se comprend comme <span style="color: #994c3d;">«grâce du Seigneur»</span>, ou comme <span tyle="color: #994c3d;">«celui en qui se trouve la grâce»</span>, ou <span style="color: #994c3d;">«celui à qui on a fait un don»</span>, ou encore <span style="color: #994c3d;">«celui qui a reçu une donation de Dieu»</span>.<br>
Ces quatre significations expriment les quatre privilèges dont a joui <span style="color: #994c3d;">saint Jean</span>.</p>
<p>Le <span style="color: #994c3d;">premier</span> privilège a consisté dans l'<span style="color: #994c3d;">amour particulier que lui a porté le Christ</span>.<br>
En effet, le Christ l'a aimé plus que les autres apôtres et lui a montré de plus grands signes d'amour et d'intimité.<br>
C'est pour cela qu'il est nommé «grâce du Seigneur»: il a plu au Seigneur.<br>
Dieu semble même l'avoir plus aimé que Pierre.<br>
Mais on distingue l'amour de cœur et l'amour exprimé.<br>
Cet amour exprimé se déclare soit dans la manifestation d'une intimité, soit dans la distribution de bienfaits.<br>
Or, pour ce qui est de l'amour de cœur, Dieu aima également Pierre et <span style="color: #994c3d;">Jean</span>; pour ce qui est de la manifestation de l'intimité, il aima plus <span style="color: #994c3d;">Jean</span> que Pierre, et, pour la distribution des bienfaits, il préféra Pierre.</p>
<p>Le <span style="color: #994c3d;">deuxième</span> privilège tient à la <span style="color: #994c3d;">pureté de la chair</span>:
c'est un homme vierge qui fut choisi par le Seigneur;
voilà pourquoi il est nommé «celui en qui se trouve la grâce».
Car en lui se trouva la grâce de la pudeur virginale.<br>
Il fut appelé par le Seigneur au moment où il voulait se marier.</p>
<p>Le <span style="color: #994c3d;">troisième</span> privilège réside dans la <span style="color: #994c3d;">révélation des secrets</span>.<br>
C'est ce qui le fait nommer «celui à qui l'on a fait un don».<br>
Car il lui a été donné de connaître de profonds et nombreux secrets, comme ceux qui concernent la divinité du Verbe et la fin des temps.</p>
<p>Le <span style="color: #994c3d;">quatrième</span> privilège, c'est d'<span style="color: #994c3d;">avoir reçu la charge de la mère de Dieu</span>.<br>
C'est ce qui le fait nommer «celui qui a reçu une donation de Dieu».<br>
Et le Seigneur lui a bien fait une donation considérable en lui confiant la garde de la mère de Dieu (Jean 19, 26-27).<br>
L'évêque Milet de Laodicée a rédigé sa Vie, qu'Isidore a abrégée dans son livre «Sur la naissance, la vie et la mort des saints Pères».</p>
<h3 class="yellow" id="persécutés-pour-sa-foi-par-domitien">persécutés pour sa foi par Domitien</h3>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, “Ébouillantement de Jean l'Évangéliste sur ordre de l'empereur Domitien devant la Porte Latine à Rome et départ en l'exil sur l'île de Patmos”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détails du panneau central, “Ébouillantement de Jean l'Évangéliste sur ordre de l'empereur Domitien devant la Porte Latine à Rome et départ en l'exil sur l'île de Patmos”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/rome-1920.jpg 1920w"></picture><figcaption>détails du panneau central, “Ébouillantement de Jean l'Évangéliste sur ordre de l'empereur Domitien devant la Porte Latine à Rome et départ en l'exil sur l'île de Patmos”</figcaption></figure>
<p><span style="color: #994c3d;">Jean</span>, apôtre et évangéliste, le bien-aimé du Seigneur l'homme vierge élu, partit pour l’Asie quand les apôtres séparèrent après la Pentecôte. Il y fonda de nombreuses églises.<br>
L'empereur Domitien entendit parler de lui, le convoqua et le fit jeter dans une cuve d'huile bouillante, devant la porte Latine.<br>
Il en sortit aussi indemne qu'il avait été étranger à la corruption de la chair.<br>
L'empereur, constatant qu'il ne renonçait pas à la prédication, l'exila dans l'île de Patmos où, dans la solitude, il écrivit l’Apocalypse. </p>
<h3 class="yellow" id="la-résurrection-de-drusiane">la résurrection de Drusiane</h3>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, chapiteau de colonne, “résurrection de Drusiane”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, chapiteau de colonne, “résurrection de Drusiane”, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-70-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/chapiteau-3-1920.jpg 1920w"></picture><figcaption>détail du panneau central, chapiteau de colonne, “résurrection de Drusiane”</figcaption></figure>
<p>La même année, l'empereur fut tué en châtiment de son extrême cruauté, et le Sénat annula tout ce qu'il avait fait;
et c'est ainsi qu'il arriva que <span style="color: #994c3d;">saint Jean</span>, qui avait été injustement déporté dans cette île, put revenir à Éphèse avec tous les honneurs.<br>
Toute une foule vint à sa rencontre en criant:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&nbsp;</span></td>
<td><span style="color: #165493;">«Béni soit celui qui vient au nom du Seigneur!» </span></td>
</tr>
</tbody>
</table>
<p>Au moment où il entrait dans la ville, on portait en terre Drusiane, qui l'avait beaucoup aimé et qui avait tant souhaité sa venue.<br>
Les parents de Drusiane, les veuves et les orphelins dirent à <span style="color: #994c3d;">Jean</span>:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&nbsp;</span></td>
<td><span style="color: #165493;">«Vénérable Jean, c'est Drusiane que nous portons en terre, elle qui a toujours suivi tes instructions, qui nous nourrissait et qui, aussi, désirait tant ta venue en répétant: </span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #165493;">“Ah, si je pouvais voir l'apôtre de Dieu avant de mourir!”»</span></td>
</tr>
</tbody>
</table>
<p>Alors <span style="color: #994c3d;">Jean</span> fit déposer le cercueil et découvrir le corps en disant:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Drusiane, que mon Seigneur Jésus-Christ te ressuscite! </span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">Lève-toi, va à la maison et prépare-moi à manger!»</span></td>
</tr>
</tbody>
</table>
<p>Elle se leva aussitôt et entreprit d'aller accomplir ce que l'apôtre avait ordonné, comme si elle avait été tirée non pas de la mort mais d'un sommeil.</p>
<h3 class="yellow" id="le-baptème-de-craton">le baptème de Craton</h3>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/14.saint-jean_14/craton-1920.jpg 1920w"></picture><figcaption>détail du panneau central, “baptème de Craton”</figcaption></figure>
<p>Le lendemain, le philosophe Craton convoqua le peuple sur la place du marché, afin de lui montrer comment il fallait mépriser le monde.<br>
Il avait fait acheter des pierres très précieuses par deux frères très riches qui avaient liquidé leur patrimoine à cette fin;
et, à la vue de tous, il fit briser ces pierres.</p>
<p>L'apôtre se trouvait passer par là; il appela le philosophe près de lui et lui reprocha ce genre de mépris du monde pour <span style="color: #994c3d;">trois raisons</span>:</p>
<p><span style="color: #994c3d;">d'abord</span>, <span style="color: #994c3d;">ce refus du monde était loué par les hommes, mais rejeté par le jugement divin</span>;</p>
<p><span style="color: #994c3d;">ensuite</span>, <span style="color: #994c3d;">ce geste, qui ne soigne pas le vice, est vain, comme est vain tout remède qui ne soigne pas une maladie</span>.</p>
<p><span style="color: #994c3d;">Enfin</span>, <span style="color: #994c3d;">le mépris du monde est méritoire chez celui qui distribue ses biens aux pauvres</span>, en suivant ce que disait le Seigneur à un jeune homme: <a href="#note_mathieu" title="Si tu veux être parfait" id="mathieu" class="yellow">«Si tu veux être parfait, va, etc.»</a>  </p>
<p>Craton répondit:</p>
<table
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #b3884d;">—&nbsp;</span></td>
<td><span style="color: #b3884d;">«Si ton maître est véritablement Dieu et s'il veut que le prix de ces pierres soit donné aux pauvres, fais qu'elles soient reconstituées: tu pourras ainsi tourner à sa gloire ce que j'ai fait pour obtenir l'éloge des hommes.»</span></td>
</tr>
</tbody>
</table>
<p>Alors <span style="color: #994c3d;">saint Jean</span> rassembla en sa main les fragments des pierres et se mit en prière;
les pierres furent restituées à leur état premier.<br>
Aussitôt le philosophe et les deux jeunes gens se mirent à croire, vendirent les pierres et en distribuèrent le prix aux pauvres.</p>
<h3 id="sermons-de-saint-jean-contre-la-richesse-matérielle" class="yellow">sermons de saint Jean contre la richese matérielle</h3>
<p>Là-dessus, à leur exemple, deux autres jeunes gens de bonne famille vendirent tous leurs biens, en donnèrent le produit aux pauvres et suivirent <span style="color: #994c3d;">Jean</span>.<br>
Mais un jour, ils virent leurs serviteurs resplendissants d'atours précieux, alors qu'eux-mêmes ne disposaient que d'un seul manteau et ils s'en attristèrent.<br>
<span style="color: #994c3d;">Saint Jean</span> remarqua leur triste mine; il fit alors apporter, depuis le rivage de la mer, des branches et des petits cailloux et les transforma en or et en pierres précieuses.<br>
Sur ordre de l'apôtre, les jeunes gens se mirent en quête, durant sept jours, de tous les experts en or et pierres précieuses et revinrent en disant que ceux-ci avaient témoigné n'avoir jamais vu or si pur, ni pierres si précieuses.<br>
<span style="color: #994c3d;">Jean</span> leur dit alors:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Allez et rachetez les terres que vous avez vendues, puisque vous avez perdu le bénéfice céleste; fleurissez afin de pourrir, jouissez des richesses temporelles, afin de mendier dans l'éternité.»</span></td>
</tr>
</tbody>
</table>
<p>Et alors l'apôtre se mit à disserter fort longuement contre les richesses en montrant que six causes doivent nous détourner de les désirer immodérément.</p>
<p>La <span style="color: #994c3d;">première</span> est l'<span style="color: #994c3d;">Écriture</span>:<br>
il raconta l'<a href="#note_hoteriche" title="histoire de l'hôte riche" id="hoteriche" class="yellow">histoire de l'hôte riche que le Seigneur réprouva et du pauvre Lazare qu'il choisit</a>.</p>
<p>La <span style="color: #94c3d;">seconde</span> cause est la nature, car l'homme naît sans richesses ni vêtements et meurt sans richesses.</p>
<p>La <span style="color: #994c3d;">troisième</span> est la <span style="color: #994c3d;">création</span>, car le soleil, la lune, les étoiles, la pluie, l'air sont communs à tous et distribuent leurs bienfaits en commun: de la même façon, toutes choses devraient être communes à tous.</p>
<p>La <span style="color: #994c3d;">quatrième cause</span> est la <span style="color: #994c3d;">fortune</span>, parce que le riche se fait l'esclave de l'argent et du diable: esclave de l'argent, il ne possède pas les richesses, mais il est plutôt possédé par les richesses; esclave du diable, l'amoureux de l'argent, selon l'Évangile, sert Mammon (Matthieu 6, 24; Luc 16, 13).</p>
<p>La <span style="color: #994c3d;">cinquième</span> est le <span style="color: #994c3d;">souci</span>, car les riches éprouvent, de jour comme de nuit, le souci et l'obsession d'acquérir et la crainte de perdre. En effet, ils éprouvent de la peine à acquérir, et de la crainte à conserver.</p>
<p>La <span style="color: #994c3d;">sixième cause</span> est la <span style="color: #994c3d;">perte</span>:<br>
il montra que les richesses causent une perte qui réside dans l'acquisition de deux maux: un mal dans la vie présente, la vanité, et un mal dans la vie future, la damnation éternelle.<br>
Elles causent, dans la perdition éternelle, une autre perte, celle de deux biens, la grâce dans la vie présente et la gloire éternelle dans la vie future.</p>
<h3 class="yellow" id="la-résurrection-du-jeune-marié">la résurrection du jeune marié</h3>
<p>Or, pendant que <span style="color: #994c3d;">Jean</span> était en train d'ainsi disserter contre les richesses, voici qu'on apporta le corps d'un jeune homme qui était marié depuis trente jours.<br>
Arrivèrent sa mère, sa veuve et tous ceux qui le pleuraient; ils se jetèrent à ses pieds en l'implorant de ressusciter le jeune homme au nom du Seigneur, comme il l'avait fait pour Drusiane.<br>
Alors, aussitôt après s'être longuement abîmé dans les pleurs et les prières, il le ressuscita et lui commanda de raconter aux deux disciples quelle peine ils pouvaient encourir et quelle gloire ils pouvaient perdre.<br>
Le jeune homme raconta bien des choses sur la gloire du paradis et sur les peines de l'enfer, qu'il avait vues, et il dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Ô malheureux, j'ai vu vos anges pleurer et les démons se réjouir.»</span></td>
</tr>
</tbody>
</table>
<p>Il leur raconta qu'ils pouvaient perdre des palais éternels, construits d'étincelantes pierres précieuses, illuminés d'une clarté prodigieuse, abondants en riches banquets, pleins de délices, glorifiés par les joies et destinés à durer toujours.<br>
De l'enfer, il présenta huit supplices ainsi versifiés:<br>
«Vers et ténèbres, supplice, froid et brûlure Regard du démon, remords, douleur».<br>
Alors, le jeune homme ressuscité et les deux disciples se jetèrent aux pieds de l'apôtre en lui demandant miséricorde.<br>
L'apôtre leur dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Faites pénitence pendant trente jours en priant pour obtenir que les branches et les pierres retournent à leur nature première.»</span></td>
</tr>
</tbody>
</table>
<p>Quand cela fut fait, il leur dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Allez porter ces branches et ces pierres là où vous les avez prises.»</span></td>
</tr>
</tbody>
</table>
<p>Quand ils se furent exécutés et que les branches et les pierres se furent retrouvées dans leur nature première, ils reçurent toute la grâce des vertus qu'ils avaient possédée auparavant.</p>
<h3 class="yellow" id="la-destruction-du-temple-de-diane">la destruction du temple de Diane</h3>
<p>Saint <span style="color: #994c3d;">Jean</span> avait prêché à toute l'Asie.<br>
Un jour, les adorateurs des idoles fomentèrent une sédition populaire
et l'emmenèrent au temple de Diane pour l'obliger à offrir un sacrifice.<br>
<span style="color: #994c3d;">Jean</span> leur proposa cette alternative: </p>
<ul>
<li>ou bien ils réussiraient à convaincre l'Église du Christ d’invoquer Diane
et alors il offrirait lui-même un sacrifice aux idoles;</li>
<li>ou bien il réussirait lui-même à faire invoquer le Christ au temple de Diane
et alors ils devraient croire au Christ.</li>
</ul>
<p>La majorité du peuple en fut d'accord; tout le monde sortit du temple, l'apôtre se mit en prière et le temple s'écroula;
la statue de Diane se brisa en mille morceaux.</p>
<h3 class="yellow" id="la-coupe-de-poison">la coupe de poison</h3>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.jpg" title="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Jean l'Évangéliste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Hans MEMLING, “Triptyque de Jean-Baptiste et de Jean l'Évangéliste”, détail du panneau central, Jean l'Évangéliste, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-60-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/01.saint-jean/18.saint-jean_18/jean-l-evangeliste-1920.jpg 1920w"></picture><figcaption>Jean l'Évangéliste tenant une coupe de poison</figcaption></figure>
<p>Alors <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#renvoi-aristodeme" title="https://francois-vidit.com/docs/fr/saint-jean/page:3#renvoi-aristodeme" id="aristodeme" class="yellow">Aristodème</a>, prêtre des idoles, fit naître une forte dispute parmi le peuple, si bien qu'une partie de ce peuple se préparait à affronter l'autre. L'apôtr dit alors:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Que veux-tu faire? Dis-le et je ferai ce qui te plaira.»</span></td>
</tr>
</tbody>
</table>
<p>L'autre répondit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&nbsp;</span></td>
<td><span style="color: #165493;">«Si tu veux que je croie en ton Dieu, je te donnerai à boire du poison et s'il ne te fait aucun mal, ton seigneur apparaîtra comme le vrai Dieu.»</span></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Fais comme tu le dis»</span>, dit l'apôtre.</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&nbsp;</span></td>
<td><span style="color: #165493;">«Je veux d'abord</span>, dit le prêtre, <span style="color: #165493;">que tu voies des gens mourir, pour ta plus grande crainte.»</span></td>
</tr>
</tbody>
</table>
<p>Aristodème alla donc trouver le proconsul pour se faire confier deux hommes destinés à la décapitation et,
devant la foule, leur donna du poison.<br>
Dès qu'ils l'eurent bu,
ils rendirent l'âme.<br>
Alors l'apôtre prit le calice et,
en se protégeant par un signe de croix,
but tout le poison, qui fut sans aucun effet.<br>
Tous se mirent alors à louer Dieu.<br>
Mais Aristodème ajouta:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&nbsp;</span></td>
<td><span style="color: #165493;">«J'ai encore un doute; mais si tu ressuscites ces deux morts, je croirai véritablement et sans le moindre doute.»</span></td>
</tr>
</tbody>
</table>
<p>L'apôtre lui donna alors sa tunique. L'autre demanda:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&nbsp;</span></td>
<td><span style="color: #165493;">«Pourquoi m’as-tu donné ta tunique?»</span></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Pour qu'ainsi tu sois confondu et que tu abandonnes tes fausses croyances»</span>, rétorqua l'apôtre.</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #165493;">—&nbsp;</span></td>
<td><span style="color: #165493;">«Penses-tu vraiment que ta tunique me fera croire?» dit l'autre.</span></td>
</tr>
</tbody>
</table>
<p>L'apôtre dit:</p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span style="color: #df8f20;">—&nbsp;</span></td>
<td><span style="color: #df8f20;">«Va et jette-la sur le corps des défunts en disant:</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #df8f20;">“L'apôtre du Christ m'a envoyé vers vous pour que vous ressuscitiez au nom du Christ”.»</span></td>
</tr>
</tbody>
</table>
<p>Le prêtre s'exécuta et les morts ressuscitèrent aussitôt.<br>
Alors l'apôtre baptisa au nom du Christ le prêtre et le proconsul, qui se convertirent avec toute leur famille et firent ensuite construire une église en l'honneur de <span style="color: #994c3d;">saint Jean</span>.</p>
<p>
</p></div>

<div id="body-inner">
				<p></p>
<h2 id="notes" class="yellow">　notes</h2>
<h3 id="note_nomdejean" class="yellow">nom de Jean</h3>
<div class="notices yellow">
<p>À propos du sens du nom de Jean en hébreu, voir aussi <a href="/docs/fr/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean" title="https://francois-vidit.com/docs/ja/bruges/hopital-saint-jean/saint-jean/page:3#le-nom-de-jean">«le nom “jean”, son lien avec l'institution, son étymologie»</a>.<br>
retour à la note: <a href="#nomdejean" title="nom de Jean">nom de Jean ↑</a></p>
</div>
<h3 id="note_mathieu" class="yellow">Si tu veux être parfait</h3>
<div class="notices yellow">
<p>Cette citation se rapporte à un passage de l'évangile selon Mathieu, chapître 19, verset 21:<br>
<sup>21</sup> «Jésus lui répondit: “Si tu veux être parfait, va, vends ce que tu possèdes, donne-le aux pauvres, et tu auras un trésor dans les cieux. Puis viens, suis-moi”.»</p>
<p>En complément, le texte complet:<br>
<sup>16</sup> «Et voici que quelqu’un s’approcha de Jésus et lui dit: “Maître, que dois-je faire de bon pour avoir la vie éternelle ?”<br>
<sup>17</sup> Jésus lui dit: “Pourquoi m’interroges-tu sur ce qui est bon? Celui qui est bon, c’est Dieu, et lui seul! Si tu veux entrer dans la vie, observe les commandements.”<br>
<sup>18</sup> Il lui dit: “Lesquels?” Jésus reprit: “Tu ne commettras pas de meurtre. Tu ne commettras pas d’adultère. Tu ne commettras pas de vol. Tu ne porteras pas de faux témoignage.<br>
<sup>19</sup> Honore ton père et ta mère. Et aussi: Tu aimeras ton prochain comme toi-même.”<br>
<sup>20</sup> Le jeune homme lui dit: “Tout cela, je l’ai observé: que me manque-t-il encore?”<br>
<sup>21</sup> Jésus lui répondit: “Si tu veux être parfait, va, vends ce que tu possèdes, donne-le aux pauvres, et tu auras un trésor dans les cieux. Puis viens, suis-moi.”<br>
<sup>22</sup> À ces mots, le jeune homme s’en alla tout triste, car il avait de grands biens.<br>
<sup>23</sup> Et Jésus dit à ses disciples: “Amen, je vous le dis: un riche entrera difficilement dans le royaume des Cieux.<br>
<sup>24</sup> Je vous le répète: il est plus facile à un chameau de passer par un trou d’aiguille qu’à un riche d’entrer dans le royaume des Cieux”.»<br>
Cette histoire est également racontée par Jean, plus en détail: voir <a href="https://www.aelf.org/bible/Jn/11" title="https://www.aelf.org/bible/Jn/11">Jean chapitre 11, verset 1-46</a>
retour à la note: <a href="#mathieu" title="Si tu veux être parfait">Si tu veux être parfait ↑</a></p>
</div>
<h3 id="note_hoteriche" class="yellow">histoire de l'hôte riche</h3>
<div class="notices yellow">
<p>Ce passage se rapporte à l'évangile selon Luc, chapître 16, verset 19 et suivants:<br>
<sup>19</sup> «Il y avait un homme riche, vêtu de pourpre et de lin fin, qui faisait chaque jour des festins somptueux.<br>
<sup>20</sup> Devant son portail gisait un pauvre nommé Lazare, qui était couvert d’ulcères.<br>
<sup>21</sup> Il aurait bien voulu se rassasier de ce qui tombait de la table du riche; mais les chiens, eux, venaient lécher ses ulcères.<br>
<sup>22</sup> Or le pauvre mourut, et les anges l’emportèrent auprès d’Abraham. Le riche mourut aussi, et on l’enterra.<br>
<sup>23</sup> Au séjour des morts, il était en proie à la torture; levant les yeux, il vit Abraham de loin et Lazare tout près de lui.<br>
<sup>24</sup> Alors il cria: “Père Abraham, prends pitié de moi et envoie Lazare tremper le bout de son doigt dans l’eau pour me rafraîchir la langue, car je souffre terriblement dans cette fournaise”.<br>
<sup>25</sup> – “Mon enfant, répondit Abraham, rappelle-toi: tu as reçu le bonheur pendant ta vie, et Lazare, le malheur pendant la sienne. Maintenant, lui, il trouve ici la consolation, et toi, la souffrance”.»<br>
Cette histoire est également racontée par Jean, plus en détail: voir <a href="https://www.aelf.org/bible/Jn/11" title="https://www.aelf.org/bible/Jn/11">Jean chapitre 11, verset 1-46</a>.
retour à la note: <a href="#mathieu" title="Si tu veux être parfait">histoire de l'hôte riche ↑</a></p>
</div>
</div>

<!-- Page 19 --><hr>

<div id="body-inner">
<h2 id="jean-selon-legende-2" class="yellow">Jean l'évangéliste selon la Légende dorée</h2>
<ol start="65">
<li>saint jean devant la porte latine</li>
</ol>
<p>Jean, apộtre et évangéliste, prêchait à Ephèse, lorsqu'il fut arrêté par le proconsul et invité à sacrifier aux dieux.<br>
Comme il refusait, il est jeté en prison; on envoie alors à l'empereur Domitien une lettre le désignant comme un magicien sacrilège, contempteur des dieux et adorateur du Crucifié.<br>
Sur ordre de Domitien, Jean est ensuite conduit à Rome où, après lui avoir coupé tous les cheveux par dérision, devant la porte de la ville qu'on appelle Latine, on le flagelle et on le jette dans un chaudron d'huile bouillante sous lequel brûlait un feu ardent.<br>
Mais Jean ne ressentit aucune douleur et en sortit tout à fait indemne, non pas brûlé mais oint.<br>
À cette vue, Domitien fut stupéfié et craignit de le mettre à mort. Aussi, à cet endroit, les chrétiens ont-ils construit une église, et ce jour est-il fêté solennellement comme celui du martyre de Jean. Or, comme il n'avait pas renoncé à prêcher le Christ, Domitien ordonna de le reléguer dans l'île de Patmos. </p>
</div>

<!-- Page 20 --><hr>

<h3 id="apocalypse" class="yellow">Vision du trône du dieu et de la cour céleste: le vivant sur le trône et l'Agneau</h3>

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
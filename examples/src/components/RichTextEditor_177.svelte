<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<!-- Page 1 -->

<article>

<hgroup>
<h1 class="green"><ruby style="color:#555;" lang="fr">La Châsse de Sainte Ursule<rt style="color:#999;" lang="nl">Het Ursulaschrijn</rt></ruby></h1>
<h2 class="green">de l'hopital Saint Jean Musée Memling de Bruges</h2>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1_700x1037.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1_700x1037.jpg" title="Châsse de Sainte Ursule, vue générale, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="Châsse de Sainte Ursule, vue générale, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1_700x1037.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule1-1920.jpg 1920w"></picture><figcaption>Châsse de Sainte Ursule, vue générale</figcaption>
</figure>

<div class="notices green">
<p>La <cite>Châsse de sainte Ursule</cite> est une <a href="https://fr.wikipedia.org/wiki/Châsse title="Châsse">châsse</a> destinée à conserver les reliques des Onze Mille Vierges et d'un certain nombre de saints, ainsi que quelques souvenirs rapportés de Terre Sainte, dont le peintre <a href="https://fr.wikipedia.org/wiki/Hans_Memling" title="Hans Memling">Hans Memling</a> a décoré les quatre faces d'un ensemble de tableaux, et de six médaillons sur le toit.</p>
<p>Les peintures relatent l'histoire de <a href="https://fr.wikipedia.org/wiki/Sainte_Ursule" title="Sainte Ursule">sainte Ursule</a>. Il s'agit d'une des grandes compositions du peintre «&nbsp;miniaturiste&nbsp;». L'œuvre  date de <time datetime="1489">1489</time>. La châsse a été conçu et a été conservé pour  <a href="https://fr.wikipedia.org/wiki/Musée_Memling" title="Musée Memling">l'hopital Saint Jean Musée Memling</a>, de <a href="https://fr.wikipedia.org/wiki/Bruges" title="Bruges">Bruges</a>.</p>
<p>Memling suit pas à pas le récit <a href="https://fr.wikipedia.org/wiki/Légende_dorée" title="Légende dorée"><cite>La Légende dorée</cite></a> de <a href="https://fr.wikipedia.org/wiki/Jacques_de_Voragine" title="Jacques de Voragine">Jacques de Voragine</a> dont une traduction est parue en <time datetime="1478">1478</time></sup>.</p>
<p>Dans l'article qui suit, nous mettons directement en regard le texte de <cite>La Légende Dorée</cite> et représentations d'Hans Memling. Nous pensons qu'ainsi leur qualité ne s'en trouvera que plus éclatante.</p>
</div>

<article>
<h2 id="les-onze-milles-vierges" class="green">Les Onze Milles Vierges</h2>

<p>Voici le récit de la Passion des onze mille vierges tel qu'il a été transmis.</p>
<p>Il y avait en Bretagne un roi très chrétien qui s'appelait Notus ou Maur, qui engendra une fille qu'il appela Ursule.
La dignité de ses mœurs était admirable, sa sagesse et sa beauté remarquables, si bien que sa renommée se répandait partout.</p>
<p>Or comme le roi d'Angleterre était très puissant et qu'il avait de nombreux peuples sous son pouvoir, ayant entendu parler de la réputation de cette jeune fille, il affirma qu'il serait parfaitement heureux de la voir épouser son fils unique.</p>
<p>Le jeune homme y aspirait lui aussi fortement.</p>
<p>Ils envoient donc une ambassade solennelle au père de la jeune fille, ajoutant aux grandes promesses et aux flatteries des menaces pour le cas où ils reviendraient bredouilles auprès de leur seigneur.</p>
<p>Le roi en tira, un grand sujet d'anxiété, d'une part parce qu'il considérait comme indigne de livrer une jeune fille que distinguait sa foi chrétienne à un adorateur des idoles : d'autre part parce qu’il savait qu'elle n'y consentirait à aucun : prix, enfin parce qu’il redoutait par-dessus tout la férocité du roi.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule_700x395.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-1280.webp 1280w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule_700x395.jpg" title="“Arrivée à Cologne”, “Arrivée à Bâle”, “Arrivée à Rome”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Arrivée à Cologne”, “Arrivée à Bâle”, “Arrivée à Rome”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule_700x395.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule-1280.jpg 1280w"></picture><figcaption>“Arrivée à Cologne”, “Arrivée à Bâle”, “Arrivée à Rome”</figcaption>
</figure>

<p>Mais elle, sous l'inspiration de Dieu, conseilla à son père d'accéder à la demande du roi, à cette condition toutefois : le roi et son père lui donneraient pour la consoler dix vierges très distinguées, on leur confierait mille vierges, à elle-même et à ses compagnes, et après avoir affrété onze trirèmes, on lui donnerait trois ans de délai pour faire le sacrifice de sa virginité; le jeune homme lui-même serait baptisé et instruit dans la foi pendant ces trois années.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2_700x1071.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2_700x1071.jpg" title="“Sainte Ursule protectrice”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Sainte Ursule protectrice”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2_700x1071.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/01.sainte-ursule_1/sainte-ursule2-1920.jpg 1920w"></picture><figcaption>“Sainte Ursule protectrice”</figcaption>
</figure>

<p>Elle usait là d'une sage décision, qui soit détournerait l'esprit du jeune homme de ce projet par la difficulté de la condition posée, soit à cette occasion consacrerait à Dieu, avec elle, les vierges en question.</p>
<p>Mais le jeune homme accepta volontiers ces conditions, pressa vivement son père, et s'étant fait baptiser sans délai, il ordonna de hâter l'exécution de tout ce que la jeune fille avait ordonné.</p>
<p>Le père de la jeune fille fit aussi en sorte que sa fille, qu'il aimait de tout son cœur, ait comme escorte des hommes qui lui viendraient en aide ainsi qu'à ses compagnes.
De toutes parts, donc, des jeunes filles affluent, de toutes parts des hommes accourent à un si grand spectacle.
Et beaucoup d'évêques les rejoignirent pour partir avec elles: parmi eux se trouvait Pantulus, évêque de Bâle, qui les conduisit jusqu'à Rome et qui, à son retour, reçut avec elles le martyre.</p>
<p>Il y avait aussi sainte Gérasine, reine de Sicile qui, de loup qu’il était, avait, pour ainsi dire, transformé en agneau son mari, un roi très cruel; elle était la sœur de l'évêque Macirisius et de Darie, mère de sainte Ursule.
Informée en secret par une lettre du père de sainte Ursule, suivant l'inspiration divine, elle laissa immédiatement son royaume aux mains d'un de ses fils et navigua jusqu'en Bretagne avec ses quatre filles, Babille, Julienne, Victoire et Aurée, et aussi avec son petit Adrien, qui par amour de ses soeurs s'était joint de lui-meme au pèlerinage.</p>
</div>

<!-- Page 2 -->

<p>Sur le conseil de sainte Gérasine, des jeunes filles des différents royaumes se rassemblèrent, et, se tenant constamment à leur tête, elle souffrit finalement le martyre avec elles.</p>
<p>Suivant ce qui avait donc été convenu, des trirèmes ayant été bien approvisionnées, la reine révèle son plan aux vierges ses compagnes, et toutes prêtent serment pour constituer cette milice d'un nouveau genre.
En effet, bientôt elles commencent les préludes de la guerre : elles courent tantôt ici, tantôt là, simulant parfois l'attaque, souvent la fuite, et elles ne dédaignent aucun des jeux qui leur viennent à l'esprit pour s'exercer, rentrant parfois à midi, parfois tard le soir.
Les nobles et les princes affluaient à un si grand spectacle et tous étaient remplis d'admiration et de joie.
Enfin, après qu'Ursule eut converti toutes les jeunes filles à la foi, après un jour de traversée, elles parvinrent, grâce à un vent favorable, à un port de Gaule nommé Tiel, et de là à Cologne, où un ange du Seigneur apparut à Ursule et lui prédit qu'elles reviendraient toutes ensemble en ce lieu et que c'est là qu'elles recevraient la couronne du martyre.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3_700x1047.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3_700x1047.jpg" title="“Arrivée à Cologne”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Arrivée à Cologne”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3_700x1047.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule3-1920.jpg 1920w"></picture><figcaption>“Arrivée à Cologne”<br>
  <q cite="#les-onze-milles-vierges">où un ange du Seigneur apparut à Ursule et lui prédit qu'elles reviendraient toutes ensemble en ce lieu et que c'est là qu'elles recevraient la couronne du martyre.</q></figcaption>
</figure>

<p>Alors, sur l'avis de l'ange, elles se dirigèrent vers Rome; abordant à Bâle, elles y laissèrent leur bateau et allèrent à Rome à pied.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4_700x1063.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4_700x1063.jpg" title="“Arrivée à Bâle”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Arrivée à Bâle”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4_700x1063.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule4-1920.jpg 1920w"></picture><figcaption>“Arrivée à Bâle”<br><q cite="#les-onze-milles-vierges">elles y laissèrent leur bateau et allèrent à Rome à pied.</q></figcaption>
</figure>

<p>À leur arrivée, le pape Cyriaque fut tout joyeux, parce que lui-même était originaire de Bretagne et qu'il avait beaucoup de parentes parmi elles;</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5_700x1056.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5_700x1056.jpg" title="“Arrivée à Rome”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Arrivée à Rome”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5_700x1056.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/02.sainte-ursule_2/sainte-ursule5-1920.jpg 1920w"></picture><figcaption>“Arrivée à Rome”<br><q cite="#les-onze-milles-vierges">À leur arrivée, le pape Cyriaque fut tout joyeux, parce que lui-même était originaire de Bretagne et qu'il avait beaucoup de parentes parmi elles; il les reçut en grande pompe avec tout son clergé.</q></figcaption>
</figure>

<p>il les reçut en grande pompe avec tout son clergé.
Cependant, au cours de la nuit suivante, le pape eut la révélation divine qu'il recevrait la palme du martyre avec les vierges.
Tenant cela caché au fond de lui, il baptisa beaucoup de ces jeunes filles qui ne l'avaient pas encore été.
Mais, quand il vit que le moment était venu, après avoir dirigé l'Église pendant un an et onze semaines, comme dix-neuvième successeur de Pierre, il découvrit son projet publiquement, et devant tous renonça à sa dignité et à son office.</p>

<!-- Page 3 -->


<p>Tous eurent beau protester, et surtout les cardinaux, qui pensaient qu'il était fou pour ainsi abandonner la gloire du pontificat et suivre un petit groupe de folles bonnes femmes: il n'en tint aucun compte, et ordonna un saint homme, qui fut appelé Antéros, pour lui succéder comme pontife; mais parce qu il avait abandonné siège apostolique contre l'avis du clergé, ce clergé raya son nom du catalogue des pontifes, et le saint chœur des vierges perdit dès lors tous les égards que lui avait manifestés la curie romaine.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6_700x379.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6_700x379.jpg" title="“Retour de Bâle”, “Martyre de Onze Mille Vierges”, “Martyre de Sainte Ursule”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Retour de Bâle”, “Martyre de Onze Mille Vierges”, “Martyre de Sainte Ursule”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6_700x379.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule6-1920.jpg 1920w"></picture><figcaption>“Retour de Bâle”, “Martyre de Onze Mille Vierges”, “Martyre de Sainte Ursule”</figcaption>
</figure>

<p>Or, les deux chefs iniques de l'armée romaine, Maximus et Africanus, voyant la grande foule des vierges, et considérant en outre qu'hommes et femmes les rejoignaient en masse, se mirent à craindre que, par elles, la religion chrétienne ne s'accroisse trop.
C'est pourquoi, s'enquérant avec précision de leur itinéraire, ils envoyèrent des messagers à Jules, leur parent et prince des Huns, afin qu'ils marchent contre elles avec une armée et qu'à leur arrivée à Cologne, ils les massacrent en tant que chrétiennes.</p>
<p>Donc saint Cyriaque sortit de la ville avec cette noble foule de vierges; le cardinal-prêtre Vincent le suivit, ainsi que Jacques qui, de sa Bretagne natale, était parti à Antioche, où il exerça pendant sept ans la dignité archiépiscopale.
Alors qu'à cette époque il était en visite auprès du pape, et qu'il avait déjà quitté la ville, il entendit parler de l'arrivée des vierges; se hâtant de revenir, il se fit leur compagnon de route et de martyre.
Et Maurice aussi, évêque de Levicane, oncle de Babille et de Julienne, et Follarius, évêque de Lucques, et Sulpice, évêque de Ravenne, alors présents à Rome, se joignirent à ces vierges.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7_700x1016.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7_700x1016.jpg" title="“Retour de Bâle”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Retour de Bâle”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7_700x1016.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule7-1920.jpg 1920w"></picture><figcaption>“Retour de Bâle”</figcaption>
</figure>

<p>Quant à Éthéré, fiancé de sainte Ursule, qui était resté en Bretagne, le Seigneur, par la vision d'un ange, l'avait engagé à exhorter sa mère à se faire chrétienne.
En effet, son père était mort un an après avoir été converti à la foi, et Éthéré, son fils, lui avait succédé à la tête du royaume.
Et lorsque les saintes vierges eurent quitté Rome en compagnie des évêques cités, Éthéré fut engagé par le Seigneur à partir aussitôt à la rencontre de sa fiancée, afin de recevoir avec elle à Cologne la palme du martyre.
Obéissant aux avertissements de Dieu, il fit baptiser sa mère, et avec elle et sa toute jeune sœur nommée Florentine, qui était déjà chrétienne, et avec l’évêque Clément, il alla au-devant des vierges et s'associa à leur martyre.
Marculus aussi, un évêque de Grèce, et sa nièce Constance, fille de Dorothée, roi de Constantinople, qui avait fait vœu de chasteté après la mort de son fiancé, un fils de roi, furent prévenus par une vision et vinrent à Rome rejoindre les vierges pour avoir part à leur martyre.</p>
<p>Donc toutes ces vierges, avec ces évêques, revinrent à Cologne, et trouvèrent la ville déjà assiégée par les Huns.
À leur vue, ils se jetèrent sur elles avec force cris, et comme des loups sortant sur des brebis, ils les tuèrent toutes sans exception.
Quand elles furent toutes égorgées, on en vint à sainte Ursule.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8_700x540.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8_700x540.jpg" title="“Martyre de Onze Mille Vierges”, “Martyre de Sainte Ursule”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Martyre de Onze Mille Vierges”, “Martyre de Sainte Ursule”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-75-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8_700x540.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule8-1920.jpg 1920w"></picture><figcaption>“Martyre de Onze Mille Vierges”, “Martyre de Sainte Ursule”</figcaption>
</figure>

<p>En la voyant, le prince fut stupéfié de son admirable beauté, et voulant la consoler de la mort des vierges, il lui promit de s'attacher à elle par le mariage.
Mais comme elle avait résolument repoussé cette idée, ce dernier, se voyant outragé, la transperça aussitôt d'une flèche, et c'est ainsi qu'elle accomplit son martyre.
Une autre vierge, qui s'appelait Cordula, prise d'une peur très violente, se cacha cette nuit-là dans un navire, mais au matin elle s'offrit d'elle-même à la mort et reçut la couronne du martyre.
Mais parce qu'on ne célébrait pas sa fête, au motif qu'elle n'avait pas souffert avec les autres, elle apparut bien plus tard à une recluse et lui ordonna que son jour de fête soit célébré le lendemain de la fête des vierges.
Elles souffrirent en l'an du Seigneur <time datetime="238">238</time>.
Toutefois, d'après certains, le calcul chronologique ne permet pas de soutenir que ces faits se soient déroulés à cette époque.
En effet ni la Sicile ni Constantinople n'étaient alors des royaumes, alors qu'on dit que les «reines» de ces pays se trouvaient avec les vierges.
Il y a de meilleures raisons de croire que ce martyre se déroula après l'empereur Constantin, à ce qu'on lit dans une chronique, quand les Huns et les Goths sévissaient, c'est-à-dire à l'époque de l'empereur Marcien, qui régna en l'an du Seigneur <time datetime="452">452</time>.</p>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9_700x1050.webp 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1920.webp 1920w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9_700x1050.jpg" title="“Vierge à l'Enfant et donatrices”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" alt="“Vierge à l'Enfant et donatrices”, Châsse de Sainte Ursule, Musée Hans Memling, Hôpital Saint-Jean, Bruges (Brugge)" class="class-40-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9_700x1050.jpg 700w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/06.bruges/01.hopital-saint-jean/02.sainte-ursule/03.sainte-ursule_3/sainte-ursule9-1920.jpg 1920w"></picture><figcaption>“Vierge à l'Enfant et donatrices”</figcaption>
</figure>

<p>Un abbé avait demandé à l'abbesse de Cologne le corps d'une vierge, en lui promettant de le placer en son église dans une châsse en argent.
Mais comme il l'avait laissé une année entière sur un autel dans une châsse de bois, une nuit, tandis que l'abbé de ce monastère chantait les matines avec sa communauté, cette vierge descendit corporellement de dessus l'autel; s'inclinant avec révérence devant l'autel, elle passa au milieu du chœur, sous les regards stupéfiés des moines, et se retira.
Alors l'abbé courut à la châsse; la trouvant vide, il alla en toute hâte à Cologne et exposa la chose à l'abbesse.
Ils se rendirent à l'endroit où ils avaient pris le corps et virent qu'il y était revenu.
L'abbé demanda pardon et réclama ce corps, ou bien un autre, en promettant avec beaucoup de fermeté qu'il ferait faire aussitôt une châsse précieuse, mais il n'obtint rien.</p>
<p>Un religieux avait une grande dévotion pour ces vierges.
Un jour qu'il était gravement malade, il vt une vierge d'une grande beauté lui apparaître et lui demander s'il la connaissait.
Comme il s'étonnait de cette vision et գu'il avouait ne pas du tout la reconnaître, elle lui dit:</p>
<p>«Je suis l’une de ces vierges à qui tu voues un si grand sentiment d'affection; pour que tu en sois recompensé, si, par amour et honneur pour nous, tu prononces onze mille fois l'oraison dominicale, à l'heure de ta mort tu nous trouveras pour ta protection et ta consolation...»</p>
<p>Quand elle eut disparu, l'homme accomplit aussi vite que possible ce qu'on lui avait demandé et, aussitôt après, ayant fait appeler l'abbé, il demanda l'extrême-onction.
Et alors qu'il recevait l'onction, soudain il cria aux gens qui se trouvaient là de se retirer et de laisser la place aux vierges sacrées qui arrivaient.
Et comme l'abbé lui demandait ce qui se passait et que celui-ci racontait en détailla la promesse de la vierge à son égard, tous se retirèrent; ils revinrent peu après et constatèrent qu'il était parti vers le Seigneur.</p>

<footer>
<p><span style="color: #3d8b3d;">Jacques de Voragine, <cite>La Légende Dorée</cite>, Chapître 154, “Les Onze Milles Vierges”</span></p>
</footer>
</article>
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
<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:139 ANG:202  -->
<article>

<hgroup>
<h1 class="yellow">Persée</h1>
<h2 class="yellow">au Château de Cheverny</h2>
</hgroup>

<figure>
  <picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee_700x869.webp 700w" type="image/webp"><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee_700x869.jpg 700w"><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus_700x763.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/03.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus_700x763.jpg" alt="Jean MONIER, “Persée et Andromède”" title="Jean MONIER, “Persée et Andromède”" class="class-diane-img" width="700" height="763" loading="eager" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus_700x763.jpg 700w"></picture><figcaption>Persée <q cite="#andromede">volant à toute allure</q> secourt Andromède enchaînée à un rocher</figcaption>
</figure>

<div class="notices yellow">
<p>Il existe un petit texte à l'origine de l'un des tableaux représentant l'histoire de <a href="https://fr.wikipedia.org/wiki/Persée" title="https://fr.wikipedia.org/wiki/Persée">Persée</a> et <a href="https://fr.wikipedia.org/wiki/Andromède_(mythologie)" title="https://fr.wikipedia.org/wiki/Andromède">Andromède</a> peints par <a href="https://fr.wikipedia.org/wiki/Jean_Mosnier" title="https://fr.wikipedia.org/wiki/Jean Monier">Jean MONIER</a> sur le plafond de la chambre du Roi du deuxième étage du <a href="https://fr.wikipedia.org/wiki/Château_de_Cheverny" title="https://fr.wikipedia.org/wiki/Château_de_Cheverny">Château de Cheverny</a>.</p>
<p>Il a été écrit par <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a> , écrivain d'expression latine qui a vécu sous l'empire romain, et fait partie du livre <abbr title="quatre">IV</abbr> de son œuvre la plus connue, <a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)"><cite>Les Métamorphoses</cite></a>.</p>
<p>Il raconte comment Persée, qui passait dans le ciel d'<a href="https://fr.wikipedia.org/wiki/Éthiopie" title="https://fr.wikipedia.org/wiki/Éthiopie">Éthiopie</a> à l'improviste, s'étonna de trouver une jeune fille nue enchaînée à un rocher...</p>
</div>

<h2 id="andromede" class="yellow">Persée et Andromède selon le texte du livre <abbr title="quatre">IV</abbr> des <cite>Métamorphoses</cite></h2>

<ol class="doc">
  <li value="663">Le fils d'Hippotès avait enfermé les vents dans leur prison momentanée</li>
  <li>Et, invitant au travail, le resplendissant Lucifer</li>
  <li value="665">Avait jailli du ciel profond. Persée, ayant repris ses ailes, les attachent</li>
  <li>De part et d'autre de ses pied, se ceint de son épée recourbée</li>
  <li>Et bat de ses talonnières pour fendre l'air limpide.</li>
  <li>Après avoir laissé tout autour, au-dessous, d'innombrables nations,</li>
  <li>Il aperçoit la population éthiopienne et les champs de Céphée,</li>
  <li value="670">Où l'injuste Ammon a condamné l'innocente Andromède</li>
  <li>À être châtiée pour les paroles de sa mère.</li>
  <li>Dès que le descendant d'Abas la voit, les bras attachés</li>
  <li>Contre la roche dure - n'était la brise légère agitant ses cheveux</li>
  <li>Et les larmes tièdes qui coulaient de ses yeux,</li>
  <li value="675">Il l'eût prise pour une œuvre de marbre -, la passion s'empare de lui</li>
  <li>À son insu et le paralyse; saisi par l'apparition d'une telle beauté</li>
  <li>Il en oublie presque de battre l'air de ses ailes.</li>
  <li>À peine debout, il lui dit: 
    <p class="conversation">«Ô toi qui ne mérites pas ces chaînes</p>
  </li>
  <li>
    <p class="conversation">Mais celles qui lient l'un à l'autre les amants passionnés,</p>
  </li>
  <li value="680">
    <p class="conversation">Dis-moi, je t'en prie, le nom de cette terre, le tien</p>
  </li>
  <li>
    <p class="conversation">Et la raison de ces entraves.»</p>
    La jeune fille se tait d'abord, n'osant
  </li>
  <li>Adresser la parole à un homme; elle cacherait de ses mains</li>
  <li>Son doux visage si elle n'était enchaînée;</li>
  <li>Des larmes jaillissent - elle ne peut rien d'autre - et emplissent ses yeux.</li>
  <li value="685">Comme il se fait de plus en plus pressant, afin qu'il ne pense pas</li>
  <li>Qu'elle refuse d'avouer ses fautes, elle lui dit le nom du pays</li>
  <li>Et le sien, et combien sa mère fut trop sûre de sa beauté.</li>
  <li>Elle n'avait pas encore tout raconté que l'eau fit un grand bruit</li>
  <li>Et qu'un monstre arriva, menaçant, sur la mer immense,</li>
  <li value="690">Dominant la vaste plaine liquide de son poitrail.</li>
  <li>La jeune fille pousse un cri; son père est là, en larmes, sa mère</li>
  <li>Aussi, tous deux dans le malheur, celle-ci à plus juste titre;</li>
  <li>Ils n'apportent nulle aide mais les pleurs et les gémissements</li>
  <li>Que requiert la situation, et ils serrent son corps entravé</li>
  <li value="695">Quand l'étranger leur dit:
    <p class="conversation">«Vous pourrez vous consacrez plus tard</p>
  </li>
  <li>
    <p class="conversation">Au temps des larmes; pour la sauver vous n'avez qu'un instant.</p>
  </li>
  <li>
    <p class="conversation">Si je la demandais moi, Persée, fils de Jupiter et de celle</p>
  </li>
  <li>
    <p class="conversation">Qui, prisonnière, fut fécondée par une pluie d'or,</p>
  </li>
  <li>
    <p class="conversation">Persée, le vainqueur de la Gorgone aux cheveux vipérins,</p>
  </li>
  <li value="700">
    <p class="conversation">Moi qui, battant des ailes, ai eu l'audace de traverser les airs,</p>
  </li>
  <li>
    <p class="conversation">Je serais sûr d'être un gendre préféré à tout autre; mais à tant de mérites</p>
  </li>
  <li>
    <p class="conversation">Je veux ajouter un exploit, pourvu que les dieux me l'accordent:</p>
  </li>
  <li><p class="conversation">Qu'elle soit mienne et ma bravoure la sauvera, je le promets.»</p>
  </li>
  <li>Condition acceptée (qui donc hésiterait?); les parents le supplient</li>
  <li value="705">Et lui promettent, en outre, un royaume pour dot.</li>
  <li>Alors, tout comme un bateau rapide, l'éperon de sa proue en avant,</li>
  <li>Fend les flots sous la poussée des bras de jeunes hommes en sueur,</li>
  <li>Ainsi fait la bête, dont le puissant poitrail écarte les eaux.</li>
  <li>Elle n'était séparée des rochers que d'une distance égale à celle</li>
  <li value="710">Que traverse en plein ciel une balle de plomb lancée par un frondeur</li>
  <li>Baléare, quand soudain le jeune homme, frappant du pied sur la terre,</li>
  <li>S'élève jusqu'aux nuées. À peine son ombre est-elle apparue</li>
  <li>À la surface des eaux que la bête s'acharne avec fureur sur l'ombre.</li>
  <li>Lorsque l'oiseau de Jupiter aperçoit dans un champ dénudé</li>
  <li value="715">Un serpent qui présente à Phœbus son dos bleuâtre,</li>
  <li>Il le prend par derrière et, pour l'empécher de tourner sa gueule terrible,</li>
  <li>Il enfonce ses serres de rapace dans la nuque du reptile;</li>
  <li>De même le descendant d'Inachus, volant à toute allure</li>
  <li>À travers l'espace, s'abat sur le dos du monstre fou de rage</li>
  <li value="720">Et lui enfonce dans le flan droit sa lame courbe, jusqu'au crochet.</li>
  <li>Grièvement blessée, la bête gigantesque tantôt se dresse dans les airs</li>
  <li>Tantôt disparaît sous les eaux, tantôt s'agite à la façon d'un sanglier</li>
  <li>Farouche qu'une meute de chiens hurlants encercle et terrorise.</li>
  <li>Lui, grâce à ses ailes, esquive avec agilité les morsures voraces</li>
  <li value="725">Et, partout où il peut, que ce soit sur le dos couvert de coquillages vides,</li>
  <li>Sur les flancs ou sur la queue très mince, qui se termine</li>
  <li>Comme celle d'un poisson, frappe de son épée recourbée.</li>
  <li>La gueule du monstre vomit un flot mêlé à un sang pourpre</li>
  <li>Dont les éclaboussures mouillent et élourdissent les ailes</li>
  <li value="730">De Persée; n'osant plus se fier à ses talonnières trempées,</li>
  <li>Il avise un rocher dont la pointe se dresse au-dessus des eaux</li>
  <li>Calmes, mais que recouvre une mer agitée.</li>
  <li>Le prenant pour appui et se retenant de la main gauche aux premières</li>
  <li>Arrêtes, à trois, à quatre reprises il plonge le fer dans le ventre du monstre.</li>
  <li value="735">Des cris, des applaudissements emplissent le rivage</li>
  <li>Et les demeures supérieures des dieux; Cassiopée et Céphée, le père,</li>
  <li>Exultent, complimentent leur gendre, le déclare protecteur</li>
  <li>Et sauveur de la famille; délivrée de ses liens,</li>
  <li>S'avance la jeune fille, à la fois cause et récompense de l'exploit.</li>
  <li value="740">Persée puise de l'eau pour laver ses mains victorieuses</li>
  <li>Et, pour que la dureté du sable ne blesse pas la tête entourée de serpents,</li>
  <li>Il rend le sol plus doux par des feuillages, le couvre d'algues</li>
  <li>Marines et y déposent, de face, la tête de Méduse, fille de Phorcus.</li>
  <li>Les algues fraîches, encore vivantes et gorgées d'eau,</li>
  <li value="745">Subissent le pouvoir du monstre et, à son contact, durcissent,</li>
  <li>Communiquent aux branches et aux feuilles cette rigidités inconnue.</li>
  <li>Quant aux nymphes des eaux, elles expérimentent ce prodige</li>
  <li>Sur plusieurs autres algues, ravies d'y parvenir</li>
  <li>Et, comme elles en ont jeté dans l'eau des particules,</li>
  <li value="750">Il en résulte aujourd'hui le corail, qui a même propriété,</li>
  <li>Durcissant au contact de l'air: ainsi, ce qui dans l'eau était</li>
  <li>Plante souple devient hors de l'eau une pierre.</li>
  <li>Le héros élève trois autels de gazon à trois dieux:</li>
  <li>À gauche pour Mercure, à droite pour toi, vierge guerrière,</li>
  <li value="755">Et au milieu l'autel de Jupiter; il immole à Minerve une génisse,</li>
  <li>Un veau au dieu aux pieds ailés et à toi, roi des dieux, un taureau.</li>
  <li>Sitôt après, il prend dans ses bras Andromède - récompense,</li>
  <li>Hormis sa dot, d'un si puissant exploit; Hyménée et Amour</li>
  <li>Secouent leurs torches; on inonde les bûchers de parfums,</li>
  <li>On accroche aux toits des guirlandes et partout résonnent</li>
  <li value="760">Les lyres, les flûtes, les chants, marques joyeuses</li>
  <li>Du bonheur; les portes étant grandes ouvertes, apparaît</li>
  <li>L'atrium tout doré et les nobles Céphènes prennent place</li>
  <li>Au banquet royal devant des tables magnifiques.</li>
</ol>

<footer>
  <p><span style="color: #df8a13;">Ovide, <cite>Les Métamorphoses</cite>, Livre <abbr title="quatre">IV</abbr>, vers 663 à 764</span></p>
</footer>
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
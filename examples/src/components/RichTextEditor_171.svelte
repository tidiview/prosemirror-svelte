<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="yellow">Persée</h1>
<figure><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
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
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus_700x763.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/03.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus_700x763.jpg" alt="Jean MONIER, “Persée et Andromède”" title="Jean MONIER, “Persée et Andromède”" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus_700x763.jpg 700w"></picture><figcaption>Persée secourt Andromède enchaînée à un rocher</figcaption></figure>
<div class="notices yellow">
<p>Il existe un petit texte à l'origine de l'un des tableaux représentant l'histoire de <a href="https://fr.wikipedia.org/wiki/Persée" title="https://fr.wikipedia.org/wiki/Persée">Persée</a> et <a href="https://fr.wikipedia.org/wiki/Andromède_(mythologie)" title="https://fr.wikipedia.org/wiki/Andromède">Andromède</a> peints par <a href="https://fr.wikipedia.org/wiki/Jean_Mosnier" title="https://fr.wikipedia.org/wiki/Jean Monier">Jean MONIER</a> sur le plafond de la chambre du Roi du deuxième étage du <a href="https://fr.wikipedia.org/wiki/Château_de_Cheverny" title="https://fr.wikipedia.org/wiki/Château_de_Cheverny">Château de Cheverny</a>.<br>
Il a été écrit par <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a> , écrivain d'expression latine qui a vécu sous l'empire romain, et fait partie du livre 4 de son œuvre la plus connue, “<a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)">Les Métamorphoses</a>”.<br>
Il raconte comment Persée, qui passait dans le ciel d'<a href="https://fr.wikipedia.org/wiki/Éthiopie" title="https://fr.wikipedia.org/wiki/Éthiopie">Éthiopie</a> à l'improviste, s'étonna de trouver une jeune fille nue enchaînée à un rocher...</p>
</div>
<h2 class="yellow">Persée et Andromède selon “Les Métamorphoses”</h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
<sup>663</sup>
Le fils d'Hippotès avait enfermé les vents dans leur prison momentanée<br>
Et, invitant au travail, le resplendissant Lucifer<br>
<sup>665</sup>
Avait jailli du ciel profond. Persée, ayant repris ses ailes, les attachent<br>
De part et d'autre de ses pied, se ceint de son épée recourbée<br>
Et bat de ses talonnières pour fendre l'air limpide.<br>
Après avoir laissé tout autour, au-dessous, d'innombrables nations,<br>
Il aperçoit la population éthiopienne et les champs de Céphée,<br>
<sup>670</sup>
Où l'injuste Ammon a condamné l'innocente Andromède<br>
À être châtiée pour les paroles de sa mère.<br>
Dès que le descendant d'Abas la voit, les bras attachés<br>
Contre la roche dure - n'était la brise légère agitant ses cheveux<br>
Et les larmes tièdes qui coulaient de ses yeux,<br>
<sup>675</sup>
Il l'eût prise pour une œuvre de marbre -, la passion s'empare de lui<br>
À son insu et le paralyse; saisi par l'apparition d'une telle beauté<br>
Il en oublie presque de battre l'air de ses ailes.<br>
À peine debout, il lui dit: «Ô toi qui ne mérites pas ces chaînes<br>
Mais celles qui lient l'un à l'autre les amants passionnés,<br>
<sup>680</sup>
Dis-moi, je t'en prie, le nom de cette terre, le tien<br>
Et la raison de ces entraves.» La jeune fille se tait d'abord, n'osant<br>
Adresser la parole à un homme; elle cacherait de ses mains<br>
Son doux visage si elle n'était enchaînée;<br>
Des larmes jaillissent - elle ne peut rien d'autre - et emplissent ses yeux.<br>
<sup>685</sup>
Comme il se fait de plus en plus pressant, afin qu'il ne pense pas<br>
Qu'elle refuse d'avouer ses fautes, elle lui dit le nom du pays<br>
Et le sien, et combien sa mère fut trop sûre de sa beauté.<br>
Elle n'avait pas encore tout raconté que l'eau fit un grand bruit<br>
Et qu'un monstre arriva, menaçant, sur la mer immense,<br>
<sup>690</sup>
Dominant la vaste plaine liquide de son poitrail.<br>
La jeune fille pousse un cri; son père est là, en larmes, sa mère<br>
Aussi, tous deux dans le malheur, celle-ci à plus juste titre;<br>
Ils n'apportent nulle aide mais les pleurs et les gémissements<br>
Que requiert la situation, et ils serrent son corps entravé<br>
<sup>695</sup>
Quand l'étranger leur dit: «Vous pourrez vous consacrez plus tard<br>
Au temps des larmes; pour la sauver vous n'avez qu'un instant.<br>
Si je la demandais moi, Persée, fils de Jupiter et de celle<br>
Qui, prisonnière, fut fécondée par une pluie d'or,<br>
Persée, le vainqueur de la Gorgone aux cheveux vipérins,<br>
<sup>700</sup>
Moi qui, battant des ailes, ai eu l'audace de traverser les airs,<br>
Je serais sûr d'être un gendre préféré à tout autre; mais à tant de mérites<br>
Je veux ajouter un exploit, pourvu que les dieux me l'accordent:<br>
Qu'elle soit mienne et ma bravoure la sauvera, je le promets.»<br>
Condition acceptée (qui donc hésiterait?); les parents le supplient<br>
<sup>705</sup>
Et lui promettent, en outre, un royaume pour dot.<br>
Alors, tout comme un bateau rapide, l'éperon de sa proue en avant,<br>
Fend les flots sous la poussée des bras de jeunes hommes en sueur,<br>
Ainsi fait la bête, dont le puissant poitrail écarte les eaux.<br>
Elle n'était séparée des rochers que d'une distance égale à celle<br>
<sup>710</sup>
Que traverse en plein ciel une balle de plomb lancée par un frondeur<br>
Baléare, quand soudain le jeune homme, frappant du pied sur la terre,<br>
S'élève jusqu'aux nuées. À peine son ombre est-elle apparue<br>
À la surface des eaux que la bête s'acharne avec fureur sur l'ombre.<br>
Lorsque l'oiseau de Jupiter aperçoit dans un champ dénudé<br>
<sup>715</sup>
Un serpent qui présente à Phœbus son dos bleuâtre,<br>
Il le prend par derrière et, pour l'empécher de tourner sa gueule terrible,<br>
Il enfonce ses serres de rapace dans la nuque du reptile;<br>
De même le descendant d'Inachus, volant à toute allure<br>
À travers l'espace, s'abat sur le dos du monstre fou de rage<br>
<sup>720</sup>
Et lui enfonce dans le flan droit sa lame courbe, jusqu'au crochet.<br>
Grièvement blessée, la bête gigantesque tantôt se dresse dans les airs<br>
Tantôt disparaît sous les eaux, tantôt s'agite à la façon d'un sanglier<br>
Farouche qu'une meute de chiens hurlants encercle et terrorise.<br>
Lui, grâce à ses ailes, esquive avec agilité les morsures voraces<br>
<sup>725</sup>
Et, partout où il peut, que ce soit sur le dos couvert de coquillages vides,<br>
Sur les flancs ou sur la queue très mince, qui se termine<br>
Comme celle d'un poisson, frappe de son épée recourbée.<br>
La gueule du monstre vomit un flot mêlé à un sang pourpre<br>
Dont les éclaboussures mouillent et élourdissent les ailes<br>
<sup>730</sup>
De Persée; n'osant plus se fier à ses talonnières trempées,<br>
Il avise un rocher dont la pointe se dresse au-dessus des eaux<br>
Calmes, mais que recouvre une mer agitée.<br>
Le prenant pour appui et se retenant de la main gauche aux premières<br>
Arrêtes, à trois, à quatre reprises il plonge le fer dans le ventre du monstre.<br>
<sup>735</sup>
Des cris, des applaudissements emplissent le rivage<br>
Et les demeures supérieures des dieux; Cassiopée et Céphée, le père,<br>
Exultent, complimentent leur gendre, le déclare protecteur<br>
Et sauveur de la famille; délivrée de ses liens,<br>
S'avance la jeune fille, à la fois cause et récompense de l'exploit.<br>
<sup>740</sup>
Persée puise de l'eau pour laver ses mains victorieuses<br>
Et, pour que la dureté du sable ne blesse pas la tête entourée de serpents,<br>
Il rend le sol plus doux par des feuillages, le couvre d'algues<br>
Marines et y déposent, de face, la tête de Méduse, fille de Phorcus.<br>
Les algues fraîches, encore vivantes et gorgées d'eau,<br>
<sup>745</sup>
Subissent le pouvoir du monstre et, à son contact, durcissent,<br>
Communiquent aux branches et aux feuilles cette rigidités inconnue.<br>
Quant aux nymphes des eaux, elles expérimentent ce prodige<br>
Sur plusieurs autres algues, ravies d'y parvenir<br>
Et, comme elles en ont jeté dans l'eau des particules,<br>
<sup>750</sup>
Il en résulte aujourd'hui le corail, qui a même propriété,<br>
Durcissant au contact de l'air: ainsi, ce qui dans l'eau était<br>
Plante souple devient hors de l'eau une pierre.<br>
Le héros élève trois autels de gazon à trois dieux:<br>
À gauche pour Mercure, à droite pour toi, vierge guerrière,<br>
<sup>755</sup>
Et au milieu l'autel de Jupiter; il immole à Minerve une génisse,<br>
Un veau au dieu aux pieds ailés et à toi, roi des dieux, un taureau.<br>
Sitôt après, il prend dans ses bras Andromède - récompense,<br>
Hormis sa dot, d'un si puissant exploit; Hyménée et Amour<br>
Secouent leurs torches; on inonde les bûchers de parfums,<br>
On accroche aux toits des guirlandes et partout résonnent<br>
<sup>760</sup>
Les lyres, les flûtes, les chants, marques joyeuses<br>
Du bonheur; les portes étant grandes ouvertes, apparaît<br>
L'atrium tout doré et les nobles Céphènes prennent place<br>
Au banquet royal devant des tables magnifiques. <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
<p><span style="color: #df8a13;">Ovide, “Les Métamorphoses”, Livre 4, vers 663 à 764</span></p>
</div>
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
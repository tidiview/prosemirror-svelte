<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- EN:200 JA:137  -->
<article>

<hgroup>
<h1 class="green">Diane</h1>
<h2 class="green">au château de Chenonceau</h2>
</hgroup>

<figure><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane_700x1050.webp 700w" type="image/webp"><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane_700x1050.jpg 700w"><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus_700x1050.webp 700w"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus_700x798.jpg" alt="École du Primatice, “Portrait de Diane de Poitiers”, Château de Chenonceau" title="École du Primatice, “Portrait de Diane de Poitiers”, Château de Chenonceau" class="class-diane-img" class="class-diane-img" width="700" height="798" loading="eager" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus_700x798.jpg 700w"></picture><figcaption>Diane de Poitiers représentée en Diane, déesse de la Chasse<br>
<q cite="#acteon">Ce fut seulement lorsque tant de blessures eurent mis fin à sa vie que fut rassasiée, dit-on, la colère de Diane au carquois.</q></figcaption></figure>
<div class="notices green">

<p>Ce portrait est une œuvre que <a href="https://fr.wikipedia.org/wiki/Le_Primatice" title="https://fr.wikipedia.org/wiki/Le_Primatice">Le Primatice</a>, peintre originaire de Bologne en Italie, invité par le roi <a href="https://fr.wikipedia.org/wiki/François_Ier_(roi_de_France)" title="https://fr.wikipedia.org/wiki/François_Ier_(roi_de_France)">François <abbr title="premier">I<sup>er</sup></abbr></a> puis devenu quasi ministre de la Culture de l'époque, a peint, en <time datetime="1556">1556</time>, au <a href="https://fr.wikipedia.org/wiki/Château_de_Chenonceau" title="https://fr.wikipedia.org/wiki/Château_de_Chenonceau">Château de Chenonceau</a>.</p>
<p>En italien, la même personne est désignée par l'appellation “Il Primaticcio”.</p>
<p>L'image représente la favorite du roi <a href="https://fr.wikipedia.org/wiki/Henri_II_(roi_de_France)" title="https://fr.wikipedia.org/wiki/Henri_II_(roi_de_France)">Henri <abbr title="deux">II</abbr></a>, fils ayant succédé à François Ier, <a href="https://fr.wikipedia.org/wiki/Diane_de_Poitiers" title="https://fr.wikipedia.org/wiki/Diane_de_Poitiers">Diane de Poitiers</a>.</p>
<p>Alors, à la cour du roi de France, elle est connue pour être d'une beauté exceptionnelle.</p>
<p>À l'époque, comme il y avait une mode pour le “portrait paralèlle”, ici, on ne représente pas directement la personne mais la déesse de la chasse connue pour avoir le même nom <a href="https://fr.wikipedia.org/wiki/Diane_(mythologie)" title="https://fr.wikipedia.org/wiki/Diane_(mythologie)">Diane</a>.</p>
<p>À l'origine de ce portrait parallèle, ci-dessous, un récit, qui fait apparaître Diane déesse de la Chasse, écrit par un écrivain qui a vécu à l'époque de l'Empire Romain, <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a>. Ce récit est extrait de ses œuvres: <a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)"><cite>Les Métamorphoses</cite></a>.</p>
<p>Puisse ce récit des aventures de la déesse de la Chasse et d'Actéon vous plaire!</p>
</div>

<h2 id="acteon" class="green">Actéon selon le texte du livre <abbr title="trois">III</abbr> des <cite>Métamorphoses</cite></h2>

<ol class="doc">
  <li value="131">Ils étaient donc à Thèbes; ton exil pouvait donc, Cadmus</li>
  <li>Paraître heureux; Mars et Vénus étaient tes beaux-parents;</li>
  <li>De là une lignée issue d'une si noble épouse: tant de fils,</li>
  <li>Tant de filles et, gage de tendresse, tant de petits-enfants,</li>
  <li value="135">Déjà adolescents du reste; mais, comme chacun sait, il faut</li>
  <li>Toujours attendre à son heure dernière et nul ne doit,</li>
  <li>Avant la mort et la mise au tombeau, se dire heureux.</li>
  <li>Au milieu de tout ce bonheur, Cadmus, l'un de tes descendants</li>
  <li>Provoqua ta première souffrance, et ces cornes étranges</li>
  <li value="140">À son front, et vous aussi, les chiens repus du sang de votre maître.</li>
  <li>Mais si tu cherches bien, tu trouveras ici un coup du sort,</li>
  <li>Non un crime: y avait-il, en effet, du crime dans l'erreur?</li>
  <li>Il était une montagne pleine du sang des animaux tués;</li>
  <li>Le jour avait réduit l'ombre des choses de moitié,</li>
  <li value="145">Le soleil était à mi-course lorsque, d'une voix douce,</li>
  <li>Le jeune Béotien appela ses compagnons</li>
  <li>De travail, en différents lieux dispersés:</li>
  <li>
    <p class="conversation">«Mes amis, nos filets et nos armes ruissellent du sang des fauves</p>
  </li>
  <li>
    <p class="conversation">Et la journée a été fructueuse; lorsque l'Aurore</p>
  </li>
  <li value="150">
    <p class="conversation">Portée par son char safrané, ramènera le jour,</p>
  </li>
  <li>
    <p class="conversation">Nous nous remettrons au travail: Phœbus, pour l'heure,</p>
  </li>
  <li>
    <p class="conversation">Est au zénith, et ses exhalaisons craquellent les champs.</p>
  </li>
  <li>
    <p class="conversation">Cessez votre travail, relevez les filets noueux.»</p>
  </li>
  <li value="155">Les hommes obéissent et suspendent leurs activités.</li>
  <li>Il y avait là une vallée, du nom de Gargaphié,</li>
  <li>Consacrée à Diane la court vêtue, où pins et cyprès poussaient drus;</li>
  <li>Tout au fond de cette retraite, une grotte sacrée</li>
  <li>Qu'aucune main d'artiste jamais n'avait touchée:</li>
  <li>C'est la nature ingénieuse qui avait imité l'art,</li>
  <li value="160">Creusant à même la roche et le tuf lisse d'une voûte naturelle.</li>
  <li>À droite chante une fontaine d'eau claire et transparente,</li>
  <li>Et l'herbe borde son entrée évasée.</li>
  <li>C'est ici que la déesse des forêts, fatiguée de la chasse,</li>
  <li>Venait plonger son corp virginal dans l'eau pure.</li>
  <li value="165">Après qu'elle fut entrée là, elle donna à sa nymphe écuyère</li>
  <li>Son javelot, son carquois et son arc débandé;</li>
  <li>Elle fit glisser sa tunique qu'une deuxième ramassa;</li>
  <li>Deux autres la déchaussèrent et la plus experte d'entre elles,</li>
  <li>Crocalé la Thébaine, noua en chignon ses cheveux épars</li>
  <li>Autour de son cou; les siens, en revanche, étaient tous dénoués.</li>
  <li value="170">Néphélé, Hyalé, Rhanis, Psécas, Phialé allèrent</li>
  <li>Puiser de l'eau qu'elles versèrent dans leurs grands vases.</li>
  <li>Pendant que la Titanide se douchait là comme à l'accoutumée,</li>
  <li>Voilà que le petit-fils de Cadmus, qui s'offrait une pause</li>
  <li value="175">Et avançait sans but précis à travers ce bois inconnu,</li>
  <li>Parvint au lieu sacré: le destin en avait ainsi décidé.</li>
  <li>À peine fut-il entré dans la grotte aux eaux ruisselantes</li>
  <li>Qu'à la vue de cet homme les nymphes, qui étaient nues,</li>
  <li>Se frappèrent la poitrine et emplirent le bois entier</li>
  <li value="180">De hurlements soudains; en cercle autour de Diane,</li>
  <li>Elles la protégèrent de leurs corps. Or, la déesse,</li>
  <li>Plus grandes qu'elles toutes, les dépasse d'une bonne tête.</li>
  <li>Comme se colorent les nuages frappées de plein fouet</li>
  <li>Par le soleil, comme l'aurore vêtue de pourpre,</li>
  <li value="185">Ainsi se colora le visage de Diane surprise sans vêtements.</li>
  <li>Bien que le groupe de ses suivantes se serrât autour d'elle,</li>
  <li>Elle se pencha de côté, détourna la tête et, n'ayant pas</li>
  <li>À portée de mains les flèches qu'elle eût voulu,</li>
  <li>Elle puisa de l'eau et la jeta au visage du jeune homme.</li>
  <li value="190">Pendant qu'elle inondait ses cheveux de cette eau vengeresse,</li>
  <li>Elle ajouta ces mots, présage du malheur qui l'attendait:</li>
  <li>
    <p class="conversation">«Va donc maintenant raconter que tu m'as vu sans voiles,</p>
  </li>
  <li>
    <p class="conversation">Si tu le peux.»</p>
    Et sans autre menace, elle pose
  </li>
  <li>Sur la tête inondée les ramures d'un cerf fougueux,</li>
  <li value="195">Allonge son cou et taille en pointe ses oreilles;</li>
    <li>Change ses mains en pieds, ses bras en longues pattes,</li>
  <li>Et couvre son corps d'une peau tachetée.</li>
  <li>Elle y ajoute la panique: le héros, fils d'Autonoé, prend la fuite,</li>
  <li>Et tout en courant s'étonne de sa célérité.</li>
  <li value="200">Sitôt qu'il aperçoit ses cornes dans les eaux familières,</li>
  <li>Il va pour s'écrier:
    <p class="conversation">«Pauvre de moi!»,</p>
    mais il reste sans voix.
  </li>
  <li>Il gémit: voilà tout son langage, et ses larmes coulent</li>
  <li>Sur une face inconnue; de naguère, seule lui reste la pensée.</li>
  <li>Que faire? Rentrer chez soi, dans le palais royal,</li>
  <li value="205">Où se cacher dans les forêts? De ceci il a peur, de cela il a honte?</li>
  <li>Pendant qu'il hésite, ses chiens l'ont aperçu, et d'abord Mélampus</li>
  <li>Et le sagace Ichnobatès l'ont signalé en aboyant</li>
  <li>(Ichnobatès de Gnosse, Mélampus d'origine spartiate).</li>
  <li>D'autres accourent plus vite qu'un vent impétueux:</li>
  <li value="210">Pamphagus, Dorcéus, Oribasus, tous Arcadiens;</li>
  <li>Le robuste Nébrophonus, le farouche Théron avec Lælaps,</li>
  <li>Ptérélas utile pour sa rapidité, Agré pour son flair,</li>
  <li>Hylæus récemment blessé par un sanglier sauvage,</li>
  <li>Napé engendrée par un loup, Pœmenis gardienne des troupeaux,</li>
  <li value="215">Harpyia accompagnée de ses deux petits,</li>
  <li>Ladon de Sicyone aux flancs étroits,</li>
  <li>Et Dromas, Canacé, Sticté, Tigris, Alcé,</li>
  <li>Leucon et Absolus, poil de neige et poil noir,</li>
  <li>Le redoutable Lacon, Aello champion à la course,</li>
  <li value="220">Et Thoüs, et Lyciscé la véloce avec son frère de Chypre,</li>
  <li>Harpalos qui se distingue par du blanc au milieu de son front noir,</li>
  <li>Et Mélenéus, et Lachné au corps hirsute,</li>
  <li>Labros et Agriodus, dont le père était du Mont Dicté</li>
  <li>Et la mère de Laconie, et Hylactor à la voix perçante;</li>
  <li value="225">Et d'autres qu'il serait trop long d'énumérer: la meute</li>
  <li>Que cette proie excite dévale à travers rochers, éboulis, rocailles</li>
  <li>Impraticcables, là où le chemin est difficile et où il n'y a plus de chemin.</li>
  <li>Lui, il fuit, sur les lieux mêmes où il avait été tant de fois</li>
  <li>Poursuivant; hélas,! Il fuit ses propres serviteurs, voulant crier:</li>
  <li value="230">
    <p class="conversation">«C'est moi, Actéon! Reconaissez votre maître!»</p>
  </li>
  <li>Sa volonté n'a plus les mots; les aboiements résonnent dans l'air.</li>
  <li>Mélanchætès est la première à déchirer son dos,</li>
  <li>Suivie par Théridamas; Orésitrophos reste accroché</li>
  <li>À son épaule.</li>
  <li>Partis plus tard, ils ont pris un raccourci</li>
  <li value="235">À travers les montagnes: tandis qu'ils retiennent leur maître,</li>
  <li>Toute la meute fait masse et leurs crocs se plantent dans son corps.</li>
  <li>Il n'y a déjà plus d'endroit où le mordre; il gémit, et le son</li>
  <li>Qu'il émet, s'il n'est pas humain, n'est pas non plus</li>
  <li>Celui d'un cerf. Il remplit ces hauteurs connues de cris funèbres</li>
  <li value="240">Et, les genous fléchis, suppliant comme un homme prie,</li>
  <li>Il tourne en tous sens, de même que ses pattes, son visage muet.</li>
  <li>Or, ignorant tout, ses compagnon encouragent et excitent</li>
  <li>Comme d'habitude la troupe déchaînée; ils cherchent des yeux</li>
  <li>Actéon et appellent sans relâche le faux absent:
    <p class="conversation">«Actéon!»</p>
  </li>
  <li value="245">(Celui-ci tourne la tête à son nom) et ils déplorent son absence</li>
  <li>Et sa paresse à venir voir le spectacle d'une proie capturée.</li>
  <li>Comme il voudrait être ailleurs! Mais il est là. Comme il voudrait</li>
  <li>Voir, plutôt qu'éprouver, la sauvagerie de ses chiens!</li>
  <li>Ils l'encerclent et, enfouissant leurs gueules dans son corps,</li>
  <li value="250">Déchiquettent, sous l'apparence d'un cerf, leur propre maître.</li>
  <li>Ce fut seulement lorsque tant de blessures eurent mis</li>
  <li>Fin à sa vie que fut rassasiée, dit-on, la colère de Diane au carquois.</li>
</ol>

<footer>
  <p><span style="color: #3d8b3d;">Ovide, <cite>Les Métamorphoses</cite>, Livre <abbr title="trois">III</abbr>, vers 131 à 252</span></p>
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
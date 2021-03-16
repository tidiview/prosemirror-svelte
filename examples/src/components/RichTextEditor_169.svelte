<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="green">Diane</h1>
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
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus_700x1050.webp 700w"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus_700x798.jpg" alt="École du Primatice, “Portrait de Diane de Poitiers”, Château de Chenonceau" title="École du Primatice, “Portrait de Diane de Poitiers”, Château de Chenonceau" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus_700x798.jpg 700w"></picture><figcaption>Diane de Poitiers représentée en Diane, déesse de la Chasse</figcaption></figure>
<div class="notices green">
<p>Ce portrait est une œuvre que <a href="https://fr.wikipedia.org/wiki/Le_Primatice" title="https://fr.wikipedia.org/wiki/Le_Primatice">Le Primatice</a>, peintre originaire de Bologne en Italie, invité par le roi <a href="https://fr.wikipedia.org/wiki/François_Ier_(roi_de_France)" title="https://fr.wikipedia.org/wiki/François_Ier_(roi_de_France)">François I<sup>er</sup></a> puis devenu quasi ministre de la Culture de l'époque, a peint, en 1556, au <a href="https://fr.wikipedia.org/wiki/Château_de_Chenonceau" title="https://fr.wikipedia.org/wiki/Château_de_Chenonceau">Château de Chenonceau</a>.<br>
En italien, la même personne est désignée par l'appellation “Il Primaticcio”.<br>
L'image représente la favorite du roi <a href="https://fr.wikipedia.org/wiki/Henri_II_(roi_de_France)" title="https://fr.wikipedia.org/wiki/Henri_II_(roi_de_France)">Henri II</a>, fils ayant succédé à François Ier, <a href="https://fr.wikipedia.org/wiki/Diane_de_Poitiers" title="https://fr.wikipedia.org/wiki/Diane_de_Poitiers">Diane de Poitiers</a>.<br>
Alors, à la cour du roi de France, elle est connue pour être d'une beauté exceptionnelle.<br>
À l'époque, comme il y avait une mode pour le “portrait paralèlle”, ici, on ne représente pas directement la personne mais la déesse de la chasse connue pour avoir le même nom <a href="https://fr.wikipedia.org/wiki/Diane_(mythologie)" title="https://fr.wikipedia.org/wiki/Diane_(mythologie)">Diane</a>.<br>
À l'origine de ce portrait parallèle, ci-dessous, un récit, qui fait apparaître Diane déesse de la Chasse, écrit par un écrivain qui a vécu à l'époque de l'Empire Romain, <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a>. Ce récit est extrait de ses œuvres: “<a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)">Les Métamorphoses</a>”.<br>
Puisse ce récit des aventures de la déesse de la Chasse et d'Actéon vous plaire!</p>
</div>
<h2 class="green">Actéon selon “Les Métamorphoses”</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>136</sup></td><td>Ils étaient donc à Thèbes; ton exil pouvait donc, Cadmus<br>
Paraître heureux; Mars et Vénus étaient tes beaux-parents;<br>
De là une lignée issue d'une si noble épouse: tant de fils,<br>
Tant de filles et, gage de tendresse, tant de petits-enfants,</td></tr>
<tr><td><sup>135</sup></td>
<td>Déjà adolescents du reste; mais, comme chacun sait, il faut<br>
Toujours attendre à son heure dernière et nul ne doit,<br>
Avant la mort et la mise au tombeau, se dire heureux.<br>
Au milieu de tout ce bonheur, Cadmus, l'un de tes descendants<br>
Provoqua ta première souffrance, et ces cornes étranges</td></tr>
<tr><td><sup>140</sup></td>
<td>À son front, et vous aussi, les chiens repus du sang de votre maître.<br>
Mais si tu cherches bien, tu trouveras ici un coup du sort,<br>
Non un crime: y avait-il, en effet, du crime dans l'erreur?<br>
Il était une montagne pleine du sang des animaux tués;<br>
Le jour avait réduit l'ombre des choses de moitié,</td></tr>
<tr><td><sup>145</sup></td>
<td>Le soleil était à mi-course lorsque, d'une voix douce,<br>
Le jeune Béotien appela ses compagnons<br>
De travail, en différents lieux dispersés:<br>
«<cite>Mes amis, nos filets et nos armes ruissellent du sang des fauves<br>
Et la journée a été fructueuse; lorsque l'Aurore</cite></td></tr>
<tr><td><sup>150</sup></td>
<td><cite>Portée par son char safrané, ramènera le jour,<br>
Nous nous remettrons au travail: Phœbus, pour l'heure,<br>
Est au zénith, et ses exhalaisons craquellent les champs.<br>
Cessez votre travail, relevez les filets noueux.</cite>»</td></tr>
<tr><td><sup>155</sup></td>
<td>Les hommes obéissent et suspendent leurs activités.<br>
Il y avait là une vallée, du nom de Gargaphié,<br>
Consacrée à Diane la court vêtue, où pins et cyprès poussaient drus;<br>
Tout au fond de cette retraite, une grotte sacrée<br>
Qu'aucune main d'artiste jamais n'avait touchée:<br>
C'est la nature ingénieuse qui avait imité l'art,</td></tr>
<tr><td><sup>160</sup></td>
<td>Creusant à même la roche et le tuf lisse d'une voûte naturelle.<br>
À droite chante une fontaine d'eau claire et transparente,<br>
Et l'herbe borde son entrée évasée.<br>
C'est ici que la déesse des forêts, fatiguée de la chasse,<br>
Venait plonger son corp virginal dans l'eau pure.</td></tr>
<tr><td><sup>165</sup></td>
<td>Après qu'elle fut entrée là, elle donna à sa nymphe écuyère<br>
Son javelot, son carquois et son arc débandé;<br>
Elle fit glisser sa tunique qu'une deuxième ramassa;<br>
Deux autres la déchaussèrent et la plus experte d'entre elles,<br>
Crocalé la Thébaine, noua en chignon ses cheveux épars<br>
Autour de son cou; les siens, en revanche, étaient tous dénoués.</td></tr>
<tr><td><sup>170</sup></td>
<td>Néphélé, Hyalé, Rhanis, Psécas, Phialé allèrent<br>
Puiser de l'eau qu'elles versèrent dans leurs grands vases.<br>
Pendant que la Titanide se douchait là comme à l'accoutumée,<br>
Voilà que le petit-fils de Cadmus, qui s'offrait une pause</td></tr>
<tr><td><sup>175</sup></td>
<td>Et avançait sans but précis à travers ce bois inconnu,<br>
Parvint au lieu sacré: le destin en avait ainsi décidé.<br>
À peine fut-il entré dans la grotte aux eaux ruisselantes<br>
Qu'à la vue de cet homme les nymphes, qui étaient nues,<br>
Se frappèrent la poitrine et emplirent le bois entier</td></tr>
<tr><td><sup>180</sup></td>
<td>De hurlements soudains; en cercle autour de Diane,<br>
Elles la protégèrent de leurs corps. Or, la déesse,<br>
Plus grandes qu'elles toutes, les dépasse d'une bonne tête.<br>
Comme se colorent les nuages frappées de plein fouet<br>
Par le soleil, comme l'aurore vêtue de pourpre,</td></tr>
<tr><td><sup>185</sup></td>
<td>Ainsi se colora le visage de Diane surprise sans vêtements.<br>
Bien que le groupe de ses suivantes se serrât autour d'elle,<br>
Elle se pencha de côté, détourna la tête et, n'ayant pas<br>
À portée de mains les flèches qu'elle eût voulu,<br>
Elle puisa de l'eau et la jeta au visage du jeune homme.</td></tr>
<tr><td><sup>190</sup></td>
<td>Pendant qu'elle inondait ses cheveux de cette eau vengeresse,<br>
Elle ajouta ces mots, présage du malheur qui l'attendait:<br>
«<cite>Va donc maintenant raconter que tu m'as vu sans voiles,<br>
Si tu le peux.</cite>» Et sans autre menace, elle pose<br>
Sur la tête inondée les ramures d'un cerf fougueux,</td></tr>
<tr><td><sup>195</sup></td>
<td><cite>Allonge son cou et taille en pointe ses oreilles;<br>
Change ses mains en pieds, ses bras en longues pattes,<br>
Et couvre son corps d'une peau tachetée.<br>
Elle y ajoute la panique: le héros, fils d'Autonoé, prend la fuite,<br>
Et tout en courant s'étonne de sa célérité.</td></tr>
<tr><td><sup>200</sup></td>
<td>Sitôt qu'il aperçoit ses cornes dans les eaux familières,<br>
Il va pour s'écrier: «<cite>Pauvre de moi!</cite>», mais il reste sans voix.<br>
Il gémit: voilà tout son langage, et ses larmes coulent<br>
Sur une face inconnue; de naguère, seule lui reste la pensée.<br>
Que faire? Rentrer chez soi, dans le palais royal,</td></tr>
<tr><td><sup>205</sup></td>
<td>Où se cacher dans les forêts? De ceci il a peur, de cela il a honte?<br>
Pendant qu'il hésite, ses chiens l'ont aperçu, et d'abord Mélampus<br>
Et le sagace Ichnobatès l'ont signalé en aboyant<br>
(Ichnobatès de Gnosse, Mélampus d'origine spartiate).<br>
D'autres accourent plus vite qu'un vent impétueux:</td></tr>
<tr><td><sup>210</sup></td>
<td>Pamphagus, Dorcéus, Oribasus, tous Arcadiens;<br>
Le robuste Nébrophonus, le farouche Théron avec Lælaps,<br>
Ptérélas utile pour sa rapidité, Agré pour son flair,<br>
Hylæus récemment blessé par un sanglier sauvage,<br>
Napé engendrée par un loup, Pœmenis gardienne des troupeaux,</td></tr>
<tr><td><sup>215</sup></td>
<td>Harpyia accompagnée de ses deux petits,<br>
Ladon de Sicyone aux flancs étroits,<br>
Et Dromas, Canacé, Sticté, Tigris, Alcé,<br>
Leucon et Absolus, poil de neige et poil noir,<br>
Le redoutable Lacon, Aello champion à la course,</td></tr>
<tr><td><sup>220</sup></td>
<td>Et Thoüs, et Lyciscé la véloce avec son frère de Chypre,<br>
Harpalos qui se distingue par du blanc au milieu de son front noir,<br>
Et Mélenéus, et Lachné au corps hirsute,<br>
Labros et Agriodus, dont le père était du Mont Dicté<br>
Et la mère de Laconie, et Hylactor à la voix perçante;</td></tr>
<tr><td><sup>225</sup></td>
<td>Et d'autres qu'il serait trop long d'énumérer: la meute<br>
Que cette proie excite dévale à travers rochers, éboulis, rocailles<br>
Impraticcables, là où le chemin est difficile et où il n'y a plus de chemin.<br>
Lui, il fuit, sur les lieux mêmes où il avait été tant de fois<br>
Poursuivant; hélas,! Il fuit ses propres serviteurs, voulant crier:</td></tr>
<tr><td><sup>230</sup></td>
<td>«<cite>C'est moi, Actéon! Reconaissez votre maître!</cite>»<br>
Sa volonté n'a plus les mots; les aboiements résonnent dans l'air.<br>
Mélanchætès est la première à déchirer son dos,<br>
Suivie par Théridamas; Orésitrophos reste accroché<br>
À son épaule.<br>
Partis plus tard, ils ont pris un raccourci</td></tr>
<tr><td><sup>235</sup></td>
<td>À travers les montagnes: tandis qu'ils retiennent leur maître,<br>
Toute la meute fait masse et leurs crocs se plantent dans son corps.<br>
Il n'y a déjà plus d'endroit où le mordre; il gémit, et le son<br>
Qu'il émet, s'il n'est pas humain, n'est pas non plus<br>
Celui d'un cerf. Il remplit ces hauteurs connues de cris funèbres</td></tr>
<tr><td><sup>240</sup></td>
<td>Et, les genous fléchis, suppliant comme un homme prie,<br>
Il tourne en tous sens, de même que ses pattes, son visage muet.<br>
Or, ignorant tout, ses compagnon encouragent et excitent<br>
Comme d'habitude la troupe déchaînée; ils cherchent des yeux<br>
Actéon et appellent sans relâche le faux absent: «<cite>Actéon!</cite>»</td></tr>
<tr><td><sup>245</sup></td>
<td>(Celui-ci tourne la tête à son nom) et ils déplorent son absence<br>
Et sa paresse à venir voir le spectacle d'une proie capturée.<br>
Comme il voudrait être ailleurs! Mais il est là. Comme il voudrait<br>
Voir, plutôt qu'éprouver, la sauvagerie de ses chiens!<br>
Ils l'encerclent et, enfouissant leurs gueules dans son corps,</td></tr>
<tr><td><sup>250</sup></td>
<td>Déchiquettent, sous l'apparence d'un cerf, leur propre maître.<br>
Ce fut seulement lorsque tant de blessures eurent mis<br>
Fin à sa vie que fut rassasiée, dit-on, la colère de Diane au carquois.</td></tr>
</tbody>
</table>
<p><span style="color: #3d8b3d;">Ovide, “Les Métamorphoses”, Livre III</span></p>
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
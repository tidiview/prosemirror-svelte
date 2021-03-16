<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="yellow">Adonis</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis_700x676.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane_700x1050.jpg" alt="Jean MONIER, “La Mort d'Adonis”" title="Jean MONIER, “La Mort d'Adonis”" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis_700x676.jpg 700w"></picture><figcaption>Vénus assiste à la mort d'Adonis tué par un sanglier</figcaption></figure>
<div class="notices yellow">
<p>Il existe un petit texte à l'origine du tableau peint par <a href="https://fr.wikipedia.org/wiki/Jean_Mosnier" title="https://fr.wikipedia.org/wiki/Jean Monier">Jean MONIER</a> pour le dessus de cheminée représentant la mort d'Adonis exposé au deuxième étage du Château de <a href="https://fr.wikipedia.org/wiki/Château_de_Cheverny" title="https://fr.wikipedia.org/wiki/Château_de_Cheverny">Cheverny</a>.<br>
Il a été écrit par <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a>, écrivain d'expression latine qui a vécu sous l'empire romain, et fait partie du livre 10 de son œuvre la plus connue, “<a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)">Les Métamorphoses</a>”.<br>
Il raconte la fin tragique d'<a href="https://fr.wikipedia.org/wiki/Adonis_(mythologie)" title="https://fr.wikipedia.org/wiki/Adonis">Adonis</a>, amant de <a href="https://fr.wikipedia.org/wiki/Vénus_(mythologie)" title="https://fr.wikipedia.org/wiki/Vénus">Vénus</a>.<br>
Le voici ci-dessous.  </p>
</div>
<h2 class="yellow">Mort d'Adonis selon “Les Métamorphoses”</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>708</sup></td>
<td>Sur ce conseil, elle prend la route des airs sur son attelage<br>
de cygnes; mais la bravoure ne tient pas compte des conseils.</td></tr>
<tr><td><sup>710</sup></td>
<td>Voilà que les chiens, ayant suivis des traces sûres, débusquent<br>
De sa cachette un sanglier et, au moment où il allait sortir<br>
Du bois, le jeune fils de Cyniras lui porte un coup au flanc.<br>
Aussitôt le sanglier furieux, la hure retroussée,<br>
Secoue l'épieu trempé de sang et poursuit Adonis éperdu</td></tr>
<tr><td><sup>715</sup></td>
<td>À la recherche d'un abri; ses crocs s'enfoncent dans son ventre<br>
Et le laissent moribond sur le sable d'or.<br>
Cythérée, qui traversait les airs sur son char rapide<br>
Aux ailes de cygnes, n'était pas encore parvenue à Chypre;<br>
Elle reconnut de loin la plainte du mourant et dirigea vers lui</td></tr>
<tr><td><sup>720</sup></td>
<td>Ses oiseaux blancs; lorsqu'elle aperçut, du haut du ciel,<br>
Le corps inconscient secoué de spasmes dans son propre sang,<br>
Elle sauta à terre et, s'arrachant d'un même mouvement<br>
Les vêtements et les cheveux, se frappa la poitrine avec violence<br>
Et s'en prit aux destins en ces termes: « Non, tout ne sera pas</td></tr>
<tr><td><sup>725</sup></td>
<td>Soumis à vos lois! La marque de ma douleur demeurera<br>
à jamais, Adonis, et la scène de ta mort, représentée<br>
Chaque année, perpétuera lle souvenir de mes cris de souffrance.<br>
Ton sang versé se changera en fleur; il t'a été possible, Perséphone,</td></tr>
<tr><td><sup>730</sup></td>
<td>De transformer jadis un corps de femme en menthe parfumée<br>
Et l'on me blâmerait de métamorphoser ce héros,<br>
Le fils de Cyniras? » Sur ces mots, elle arrosa d'un liquide embaumé<br>
Le sang qui, à ce contact, se mit à bouillonner comme<br>
Lorsqu'apparaissent à la surface d'une boue jaunâtre<br>
Des bulles transparentes; et il ne fallut pas plus d'une heure</td></tr>
<tr><td><sup>735</sup></td>
<td>Pour qu'ait lieu d'éclosion d'une fleur couleur de sang<br>
Telle qu'en portent les grenadiers qui cachent leurs graines<br>
Dans une gangue tenace; une fleur don t la durée est brève<br>
Toutefois car, tenant mal, trop fragile en sa légèreté,</td></tr>
<tr><td><sup>739</sup></td>
<td>Elle est emportée par le vent et lui donne son nom<sup id="fnref1:1"><a href="#fn:1" class="footnote-ref">1</a></sup>.</td></tr>
</tbody>
</table>
<p><span style="color: #df8a13;">Ovide, “Les Métamorphoses”, Livre 10, vers 708 et suivants</span>  </p>
<div class="footnotes">
<hr>
<ol>
<li id="fn:1">
<p>Adonis est changé en anémone, la fleur qui s'ouvre au vent.&nbsp;<a href="#fnref1:1" rev="footnote" class="footnote-backref">↩</a></p>
</li>
</ol>
</div>
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
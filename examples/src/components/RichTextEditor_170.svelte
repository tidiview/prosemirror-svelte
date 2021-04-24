<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<hgroup>
<h1 class="yellow">Adonis</h1>
<h2 class="yellow">au château de Cheverny</h2>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis_700x676.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane_700x1050.jpg" alt="Jean MONIER, “La Mort d'Adonis”" title="Jean MONIER, “La Mort d'Adonis”" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis_700x676.jpg 700w"></picture><figcaption>Vénus <q cite="#adonis">aperçut, du haut du ciel, le corps inconscient secoué de spasmes dans son propre sang, elle sauta à terre</q>: Adonis vient d'être tué par un sanglier.</figcaption>
</figure>

<div class="notices yellow">
<p>Il existe un petit texte à l'origine du tableau peint par <a href="https://fr.wikipedia.org/wiki/Jean_Mosnier" title="https://fr.wikipedia.org/wiki/Jean Monier">Jean MONIER</a> pour le dessus de cheminée représentant la mort d'Adonis exposé au deuxième étage du Château de <a href="https://fr.wikipedia.org/wiki/Château_de_Cheverny" title="https://fr.wikipedia.org/wiki/Château_de_Cheverny">Cheverny</a>.</p>
<p>Il a été écrit par <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a>, écrivain d'expression latine qui a vécu sous l'empire romain, et fait partie du livre 10 de son œuvre la plus connue, “<a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)">Les Métamorphoses</a>”.</p>
<p>Il raconte la fin tragique d'<a href="https://fr.wikipedia.org/wiki/Adonis_(mythologie)" title="https://fr.wikipedia.org/wiki/Adonis">Adonis</a>, amant de <a href="https://fr.wikipedia.org/wiki/Vénus_(mythologie)" title="https://fr.wikipedia.org/wiki/Vénus">Vénus</a>.</p>
<p>Le voici ci-dessous.</p>
</div>

<h2 id="adonis" class="yellow">la Mort d'Adonis selon le texte du livre X, des <cite>Métamorphoses</cite></h2>

<ol class="doc">
  <li value="708">Sur ce conseil, elle prend la route des airs sur son attelage</li>
  <li>de cygnes; mais la bravoure ne tient pas compte des conseils.</li>
  <li value="710">Voilà que les chiens, ayant suivis des traces sûres, débusquent</li>
  <li>De sa cachette un sanglier et, au moment où il allait sortir</li>
  <li>Du bois, le jeune fils de Cyniras lui porte un coup au flanc.</li>
  <li>Aussitôt le sanglier furieux, la hure retroussée,</li>
  <li>Secoue l'épieu trempé de sang et poursuit Adonis éperdu</li>
  <li value="715">À la recherche d'un abri; ses crocs s'enfoncent dans son ventre</li>
  <li>Et le laissent moribond sur le sable d'or.</li>
  <li>Cythérée, qui traversait les airs sur son char rapide</li>
  <li>Aux ailes de cygnes, n'était pas encore parvenue à Chypre;</li>
  <li>Elle reconnut de loin la plainte du mourant et dirigea vers lui</li>
  <li value="720">Ses oiseaux blancs; lorsqu'elle aperçut, du haut du ciel,</li>
  <li>Le corps inconscient secoué de spasmes dans son propre sang,</li>
  <li>Elle sauta à terre et, s'arrachant d'un même mouvement</li>
  <li>Les vêtements et les cheveux, se frappa la poitrine avec violence</li>
  <li>Et s'en prit aux destins en ces termes:
    <p class="conversation">«Non, tout ne sera pas</p>
  </li>
  <li value="725">
    <p class="conversation">Soumis à vos lois! La marque de ma douleur demeurera</p>
  </li>
  <li>
    <p class="conversation">à jamais, Adonis, et la scène de ta mort, représentée</p>
  </li>
  <li>
    <p class="conversation">Chaque année, perpétuera lle souvenir de mes cris de souffrance.</p>
  </li>
  <li>
    <p class="conversation">Ton sang versé se changera en fleur; il t'a été possible, Perséphone,</p>
  </li>
  <li value="730">
    <p class="conversation">De transformer jadis un corps de femme en menthe parfumée</p>
  </li>
  <li>
    <p class="conversation">Et l'on me blâmerait de métamorphoser ce héros,</p>
  </li>
  <li>
    <p class="conversation">Le fils de Cyniras?»</p>
    Sur ces mots, elle arrosa d'un liquide embaumé
  </li>
  <li>Le sang qui, à ce contact, se mit à bouillonner comme</li>
  <li>Lorsqu'apparaissent à la surface d'une boue jaunâtre</li>
  <li>Des bulles transparentes; et il ne fallut pas plus d'une heure</li>
  <li value="735">Pour qu'ait lieu d'éclosion d'une fleur couleur de sang</li>
  <li>Telle qu'en portent les grenadiers qui cachent leurs graines</li>
  <li>Dans une gangue tenace; une fleur don t la durée est brève</li>
  <li>Toutefois car, tenant mal, trop fragile en sa légèreté,</li>
  <li value="739">Elle est emportée par le vent et lui donne son nom <a id="fnref1:1" href="#fn:1"><sup>1</sup></a>.</li>
</ol>

<footer>
<p><span style="color: #df8a13;">Ovide, <cite>Les Métamorphoses</cite>, Livre X, vers 708 et suivants</span></p>
</footer>

<aside>
<div class="footnotes">
  <p>Adonis est changé en anémone, la fleur qui s'ouvre au vent.</p>
</div>
<footer>
  <p class="puce"><a href="#fnref1:1">retour au texte ↩</a></p>
</footer>
</aside>

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
<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:128 EN:191  -->

<article>

<hgroup>
<h1 class="red">Latone</h1>
<h2 class="red">dans les jardins de Versailles</h2>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone_700x525.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone_700x525.jpg" alt="Le Bassin de Latone dans les Jardins du Palais de Versailles après la rénovation de 2016" title="Le Bassin de Latone dans les Jardins du Palais de Versailles après la rénovation de 2016" class="class-diane-img" width="700" height="525" loading="eager" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone_700x525.jpg 700w"></picture><figcaption>Les Paysans de Lycie transformés en animaux des étangs par la colère de Latone<br><q cite="#latone">Le vœu divin est exaucé: ils sont ravis d'être sous l'eau, de tantôt enfuir leur corps tout entier au creux du marécage puis de montrer leur tête, tantôt de se laisser flotter à la surface, et que je me poste au bord de l'étang, et que je saute à nouveau dans les eaux fraîches.</q>, <cite>Les Métamorphoses</cite>, Livre <abbr title="six">VI</abbr>, vers 370 à 374.</figcaption>
</figure>

<div class="notices red">
<p>«Il faut ensuite aller droit sur le haut de Latone et faire une pause pour considérer Latone, les lézards, les rampes, les statues, l’allée royale, l’Apollon, le canal, et puis se tourner pour voir le parterre et le château.»</p>
<p>Comme <a href="https://fr.wikipedia.org/wiki/Louis_XIV" title="https://fr.wikipedia.org/wiki/Louis XIV">Louis <abbr title="quatorze">XIV</abbr></a> l'a écrit dans sa <a href="https://fr.wikisource.org/wiki/Manière_de_montrer_les_jardins_de_Versailles" title="https://fr.wikisource.org/wiki/Mani%C3%A8re_de_montrer_les_jardins_de_Versailles"><cite>Manière de montrer les jardins de Versailles</cite></a>, depuis la façade orientale du palais, suivant son axe central, après le Parterre d' Eau, tout en appréciant l'ouverture de l'horizon, le Bassin et le Parterre de Latone apparaît.</p>
<p>Voilà une représentation inspirée de l'affrontement entre <a href="https://fr.wikipedia.org/wiki/Léto" title="https://fr.wikipedia.org/wiki/Léto">Latone</a> juste après que celle-ci ait donné naissance, malgré la persécution de <a href="https://fr.wikipedia.org/wiki/Junon" title="https://fr.wikipedia.org/wiki/Junon">Junon</a>, à ses deux jumeaux, <a href="https://fr.wikipedia.org/wiki/l’Apollon" title="https://fr.wikipedia.org/wiki/Apollon">Apollon</a>, dieu du soleil, et <a href="https://fr.wikipedia.org/wiki/Diane_(mythologie)" title="https://fr.wikipedia.org/wiki/Diane_(mythologie)">Diane</a>, déesse de la Lune, et quelques paysans de <a href="https://fr.wikipedia.org/wiki/Lycie" title="https://fr.wikipedia.org/wiki/Lycie">Lycie</a>.</p>
<p>Avec ce texte écrit par <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a> dans le livre <abbr title="six">VI</abbr> des <a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)"><cite>Métamorphoses</cite></a>, cet affrontement nous devient tout de suite bien plus significatif.</p>
</div>

<section id="latone">
<h2 class="red">Latone selon le texte du livre <abbr title="six">VI</abbr> des <cite>Métamorphoses</cite></h2>

<ol class="doc">
  <li value="333">C'est là que <mark>Latone</mark>, appuyée contre un palmier - ou l'arbre de Pallas-,</li>
  <li>Donna le jour à des jumeaux, contre le gré de leur belle-mère.</li>
  <li>On raconte aussi que la jeune accouchée dut fuir Junon</li>
  <li>En emportant contre son sein des deux divins nouveau-nés.</li>

  <li class="top-space">Déjà aux frontières de la Lycie, patrie de la Chimère,</li>
  <li value="340">Alors qu'un soleil de plomb brûlait les champs, la déesse, épuisée</li>
  <li>Par une longue marche sous une chaleur torride, eut soif;</li>
  <li>Ses nourrissons affamés avaient tari le lait de sa poitrine.</li>

  <li class="top-space">Elle vit par hasard devant elle, au fond de la vallée,</li>
  <li>Un étang de petite étendue; des paysans cueillaient là de l'osier</li>
  <li>Buissonneux, des joncs, et de l'ulve appréciée des marais.</li>
  <li value="345">La fille du Titan s'approcha et, se mettant à genoux,</li>
  <li>Se pencha vers la terre afin de ses désaltérer dans cette eau fraîche.</li>
  <li>Le groupe de cultivateurs s'y opposa; devant ce refus, la déesse leur dit :</li>

  <li class="top-space">
    <p class="conversation">«Pourquoi m'interdire cette eau? L'eau appartient à tout le monde</p>
  </li>
  <li value="350">
    <p class="conversation">Et ni le soleil, ni l'air ni les ondes limpides ne sont par nature</p>
  </li>
  <li>
    <p class="conversation">Propriété privée; je suis venue chercher un bien public</p>
  </li>
  <li>
    <p class="conversation">Et cependant, c'est à genoux que je vous prie de m'en donner.</p>
  </li>
  <li>
    <p class="conversation">Je ne m'apprétais pas à y laver mon corps, mes membres fatigués,</p>
  </li>
  <li>
    <p class="conversation">Seulement étancher ma soif. Ma bouche en vous parlant se dessèche,</p>
  </li>
  <li value="355">
    <p class="conversation">La gorge brûle et laisse à peine place à un filet de voix.</p>
  </li>
  <li>
    <p class="conversation">Une gorgée d'eau sera pour moi nectar et je dirai partout</p>
  </li>
  <li>
    <p class="conversation">Que je vous dois la vie; car vous m'aurez donné la vie avec cette eau.</p>
  </li>
  <li><p class="conversation">Laissez-vous toucher par eux qui, près ede mon sein, tendent vers vous</p></li>
  <li>
    <p class="conversation">Leurs petits bras.»</p>
    <p>Les enfants, en la circonstance, tendaient les bras.</p>
  </li>
  <li value="360">Qui m'eût été touché par les mots aimables de la déesse?</li>

  <li class="top-space">Or ils persistent, malgré ses prières, à lui opposer des menaces,</li>
  <li>Si elle ne s'en va pas, et ils y ajoutent, en outre, des invectives.</li>
  <li>Et cela ne leur suffit pas: ils font des pieds et des mains</li>
  <li value="365">Pour troubler l'eau de l'étang et méchamment sautent de-ci de-là</li>
  <li>Afin de remuer la vase molle du fond de son lit.</li>
  <li>La colère a pris le pas sur la soif et, désormais, la fille de Céus</li>
  <li>N'a plus de prières pour ces êtres indignes, la déesse ne supporte plus</li>
  <li>De s'humilier davantage en paroles; levant les mains vers les étoiles,</li>
  <li>Elle dit:
    <p class="conversation">«Vivez donc pour l'éternité dans votre étang!»</p>
  </li>

  <li value="370" class="top-space">Le vœu divin est exaucé: ils sont ravis d'être sous l'eau,</li>
  <li>De tantôt enfuir leur corps tout entier au creux du marécage</li>
  <li>Puis de montrer leur tête, tantôt de se laisser flotter à la surface,</li>
  <li>Et que je me poste au bord de l'étang, et que je saute à nouveau</li>
  <li>Dans les eaux fraîches. Mais leurs langues mauvaises n'ont de cesse</li>
  <li value="375">De récriminer et, sans aucune retenue, bien qu'ils soient sous les eaux,</li>
  <li>Sous les eaux ils tentent de lancer des injures.</li>

  <li class="top-space">Leur voix est devenue rauque, leur cou semblent s'être effacés,</li>
  <li>Leur dos verdit, leur ventre, partie principale de leur corps, blanchit</li>
  <li value="379">Et dans le bassin fangeux sautent ces nouvelles grenouilles.</li>
</ol>

<footer>
  <p><span style="color: #df8a13;">Ovide, <cite>Les Métamorphoses</cite>, Livre <abbr title="six">VI</abbr>, vers 333 à 379.</span></p>
</footer>

</section>

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
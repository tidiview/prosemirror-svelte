<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="red">Latone</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone_700x525.webp 700w" type="image/webp"><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone_700x525.jpg" alt="Le Bassin de Latone dans les Jardins du Palais de Versailles après la rénovation de 2016" title="Le Bassin de Latone dans les Jardins du Palais de Versailles après la rénovation de 2016" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone_700x525.jpg 700w"></picture><figcaption>Les Paysans de Lycie transformés en animaux des étangs par la colère de Latone</figcaption></figure>
<div class="notices red">
<p><cite>« Il faut ensuite aller droit sur le haut de Latone et faire une pause pour considérer Latone, les lézards, les rampes, les statues, l’allée royale, l’Apollon, le canal, et puis se tourner pour voir le parterre et le château. »</cite>
Comme <a href="https://fr.wikipedia.org/wiki/Louis_XIV" title="https://fr.wikipedia.org/wiki/Louis XIV">Louis XIV</a> l'a écrit dans sa “<a href="https://fr.wikisource.org/wiki/Manière_de_montrer_les_jardins_de_Versailles" title="https://fr.wikisource.org/wiki/Mani%C3%A8re_de_montrer_les_jardins_de_Versailles">Manière de montrer les jardins de Versailles</a>”, depuis la façade orientale du palais, suivant son axe central, après le Parterre d' Eau, tout en appréciant l'ouverture de l'horizon, le Bassin et le Parterre de Latone apparaît。<br>
Voilà une représentation inspirée de l'affrontement entre <a href="https://fr.wikipedia.org/wiki/Léto" title="https://fr.wikipedia.org/wiki/L%C3%A9to">Latone</a> juste après que celle-ci ait donné naissance, malgré la persécution de <a href="https://fr.wikipedia.org/wiki/Junon" title="https://fr.wikipedia.org/wiki/Junon">Junon</a>,  à ses deux jumeaux, <a href="https://fr.wikipedia.org/wiki/l’Apollon" title="https://fr.wikipedia.org/wiki/Apollon">Apollon</a>, dieu du soleil, et <a href="https://fr.wikipedia.org/wiki/Diane_(mythologie)" title="https://fr.wikipedia.org/wiki/Diane_(mythologie)">Diane</a>, déesse de la Lune, et les paysans de <a href="https://fr.wikipedia.org/wiki/Lycie" title="https://fr.wikipedia.org/wiki/Lycie">Lycie</a>.<br>
Avec ce texte écrit par <a href="https://fr.wikipedia.org/wiki/Ovide" title="https://fr.wikipedia.org/wiki/Ovide">Ovide</a> dans “<a href="https://fr.wikipedia.org/wiki/Métamorphoses_(Ovide)" title="https://fr.wikipedia.org/wiki/M%C3%A9tamorphoses_(Ovide)">Les Métamorphoses</a>”, cet affrontement nous devient sans doute plus familier.   </p>
</div>
<h2 class="red">Latone selon “Les Métamorphoses”</h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span> <sup>333</sup>
C'est là que Latone, appuyée contre un palmier - ou l'arbre de Pallas-,<br>
Donna le jour à des jumeaux, contre le gré de leur belle-mère.<br>
On raconte aussi que la jeune accouchée dut fuir Junon<br>
En emportant contre son sein des deux divins nouveau-nés.<br>
Déjà aux frontières de la Lycie, patrie de la Chimère,  </p>
<p><sup>340</sup>
Alors qu'un soleil de plomb brûlait les champs, la déesse, épuisée<br>
Par une longue marche sous une chaleur torride, eut soif;<br>
Ses nourrissons affamés avaient tari le lait de sa poitrine.<br>
Elle vit par hasard devant elle, au fond de la vallée,<br>
Un étang de petite étendue ; des paysans cueillaient là de l'osier<br>
Buissonneux, des joncs, et de l'ulve appréciée des marais.  </p>
<p><sup>345</sup>
La fille du Titan s'approcha et, se mettant à genoux,<br>
Se pencha vers la terre afin de ses désaltérer dans cette eau fraîche.<br>
Le groupe de cultivateurs s'y opposa ; devant ce refus, la déesse leur dit :<br>
« Pourquoi m'interdire cette eau ? L'eau appartient à tout le monde<br>
<sup>350</sup>
Et ni le soleil, ni l'air ni les ondes limpides ne sont par nature<br>
Propriété privée; je suis venue chercher un bien public<br>
Et cependant, c'est à genoux que je vous prie de m'en donner.<br>
Je ne m'apprétais pas à y laver mon corps, mes membres fatigués,<br>
Seulement étancher ma soif. Ma bouche en vous parlant se dessèche,<br>
<sup>355</sup>
La gorge brûle et laisse à peine place à un filet de voix.<br>
Une gorgée d'eau sera pour moi nectar et je dirai partout<br>
Que je vous dois la vie ; car vous m'aurez donné la vie avec cette eau.<br>
Laissez-vous toucher par eux qui, près ede mon sein, tendent vers vous<br>
Leurs petits bras. » Les enfants, en la circonstance, tendaient les bras.  </p>
<p><sup>360</sup>
Qui m'eût été touché par les mots aimables de la déesse ?<br>
Or ils persistent, malgré ses prières, à lui opposer des menaces,<br>
Si elle ne s'en va pas, et ils y ajoutent, en outre, des invectives.<br>
Et cela ne leur suffit pas : ils font des pieds et des mains<br>
<sup>365</sup>
Pour troubler l'eau de l'étang et méchamment sautent de-ci de-là<br>
Afin de remuer la vase molle du fond de son lit.<br>
La colère a pris le pas sur la soif et, désormais, la fille de Céus<br>
N'a plus de prières pour ces êtres indignes, la déesse ne supporte plus<br>
De s'humilier davantage en paroles; levant les mains vers les étoiles,<br>
<sup>370</sup>
Elle dit : « Vivez donc pour l'éternité dans votre étang ! »<br>
Le vœu divin est exaucé : ils sont ravis d'être sous l'eau,<br>
De tantôt enfuir leur corps tout entier au creux du marécage<br>
Puis de montrer leur tête, tantôt de se laisser flotter à la surface,<br>
Et que je me poste au bord de l'étang, et que je saute à nouveau<br>
Dans les eaux fraîches. Mais leurs langues mauvaises n'ont de cesse<br>
<sup>375</sup>
De récriminer et, sans aucune retenue, bien qu'ils soient sous les eaux,<br>
Sous les eaux ils tentent de lancer des injures.<br>
Leur voix est devenue rauque, leur cou semblent s'être effacés,<br>
Leur dos verdit, leur ventre, partie principale de leur corps, blanchit<br>
Et dans le bassin fangeux sautent ces nouvelles grenouilles. <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
<p><span style="color: #b52b27;">Ovide, “Les Métamorphoses”, Livre VI</span></p>
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
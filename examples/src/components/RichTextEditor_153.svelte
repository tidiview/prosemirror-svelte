<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<p><time datetime="2019-09-11">11 Sep. 2019</time></p>

<h1 class="red">Fontenelle, premier soir des <cite>entretiens sur la pluralité des mondes</cite></h1>

<div class="notices red">
<p>Publiés par Fontenelle en <time datetime="1686">1686</time> alors que l’astronomie était à la mode après le passage de la comète de <time datetime="1681">1681</time>,
<cite>es “entretiens sur la pluralité des mondes</cite> sont une explication des différents systèmes du monde.</p>
</div>

<div class="notices red">
<p>Pour «instruire et divertir tout ensemble», Fontenelle présente les dernières découvertes astronomiques dans un dialogue galant.</p>
<p>Au cours de six promenades effectuées dans le parc de la marquise sous un ciel étoilé,
un Philosophe, c'est-à-dire, selon la définition des dictionnaires de l'époque celui «qui s'applique à l'étude des sciences, et qui cherche à connaître les effets par leurs causes et par leurs principes» , entretient une jeune Marquise pleine d'esprit,
la fait rêver, aux mouvements des astres et à la pluralité des mondes habités, «mondes possibles» dit-il.</p>
<p>Il lui dévoile le système de Copernic encore contesté à l'époque qui fait de la Terre une planète parmi les autres, tournant autour d'un Soleil qui n'est lui-même qu’une étoile parmi une infinité d'autres semblables.</p>
<p>Le charme de ce court ouvrage tient à un mélange habile de considérations scientifiques et métaphysiques et de galanteries.</p>
<p>Nommé à l’Académie des Sciences en <time datetime="1697">1697</time>, Fontenelle actualisera son ouvrage des découvertes les plus récentes.</p>
<p>Le succès est exceptionnel:
trente-trois éditions du vivant de Fontenelle!</p>
<p>Mais son influence lui vient surtout de sa puissance critique.</p>
<p>Pour Fontenelle, il est impossible de choisir un point de vue absolu dans l'univers:
«Nous voulons juger de tout, et nous sommes toujours dans un mauvais point de vue.»</p>
<p>Pour délivrer sa première leçon, le philosophe use d'une longue métaphore filée, assimilant la nature au spectacle de l'Opéra.</p>
<p>Il s'agit de promouvoir la philosophie mécaniste de Descartes, l'Opéra étant alors essentiellement un spectacle à «machines» (c'est ainsi qu’on désignait les moyens mécaniques par lesquels étaient produits, au théâtre ou à l'opéra, les effets qui donnant aux spectateurs l'illusion du merveilleux. Mais dévoiler les «machines de l'Opéra», c'est aussi pour Fontenelle désacraliser l'univers et démystifier une textualité antérieure (Aristote, Platon...).</p>
</div>

<h2 class="red">Extrait du premier chapître: «premier soir»</h2>

<p>Ainsi les vrais philosophes passent leur vie à ne point croire ce qu'ils voient, et à tâcher de deviner ce qu'ils ne voient point, et cette condition n'est pas, ce me semble, trop à envier.</p>
<p>Sur cela je me figure toujours que la nature est un grand spectacle qui ressemble à celui de l'<a id="renvoi-opera" href="#opera" title="#opera">Opéra</a>.</p>
<p>Du lieu où vous êtes à l'Opéra, vous ne voyez pas le théâtre tout à fait comme il est; on a disposé les décorations et les machines, pour faire de loin un effet agréable, et on cache à votre vue ces roues et ces contrepoids qui font tous les mouvements.</p>
<p>Aussi ne vous embarrassez vous guère de deviner comment tout cela joue.</p>
<p>Il n'y a peut-être que quelque machiniste caché dans le <a id="renvoi-parterre" href="#parterre" title="#parterre">parterre</a>, qui s'inquiète d’un vol qui lui aura paru extraordinaire et qui veut absolument démêler comment ce vol a été exécuté.
Vous voyez bien que ce machiniste-là est assez fait comme les philosophes.</p>
<p>Mais ce qui, à l’égard des philosophes, augmente la difficulté, c'est que dans les machines que la nature présente à nos yeux, les cordes sont parfaitement bien cachées, et elles le sont si bien qu'on a été longtemps à deviner ce qui causait les mouvements de l'univers.</p>
<p>Car représentez-vous tous les sages à l'Opéra, ces Pythagore, ces Platon, ces Aristote, et tous ces gens dont le nom fait aujourd’hui tant de bruit à nos oreilles; supposons qu’ils voyaient le vol de <a id="renvoi-phaeton" href="#phaeton" title="#phaeton">Phaéton</a> que les vents enlèvent, qu'ils ne pouvaient découvrir les cordes, et qu'ils ne savaient point comment le derrière du théâtre était disposé.</p>
<p>L'un d'eux disait:</p>
<p class="conversation">«c'est une certaine vertu secrète qui enlève Phaeton».</p>
<p>L'autre:</p>
<p class="conversation">«Phaéton est composé de certains nombres qui le font monter».</p>
<p>L'autre:</p>
<p class="conversation">«Phaéton a une certaine amitié pour le haut du théâtre; il n’est point à son aise quand il n’y est pas».</p>
<p>L'autre:</p>
<p class="conversation">«Phaéton n’est pas fait pour voler, mais il aime mieux voler, que de laisser le haut du théâtre vide? et cent autres rêveries que je m'étonne qui n'aient perdu de réputation toute l'Antiquité.</p>
<p class="conversation">À la fin Descartes, et quelques autres modernes sont venus, qui ont dit: «Phaéton monte, parce qu'il est tiré par des cordes, et qu’un poids plus pesant que lui descend».</p>
<p>Ainsi on ne croit plus qu'un corps se remue, s'il n'est tiré, ou plutôt poussé par un autre corps; on ne croit plus qu’il monte ou qu’il descende, si ce n'est par l'effet d’un contrepoids ou d’un ressort; et qui verrait la nature telle qu'elle est, ne verrait que le derrière du théâtre de l'opéra.</p>
<p>À ce compte, dit la Marquise, la philosophie est devenue bien mécanique? Si mécanique, répondis-je, que je crains qu’on en ait bientôt honte.</p>
<p>On veut que l'univers ne soit en grand, que ce qu’une montre est en petit, et que tout s'y conduise par des mouvements réglés qui dépendent de l'arrangement des parties.</p>
<p>Avouez la vérité.</p>
<p>N'avez-vous pas eu quelquefois une idée plus sublime de l'univers, et ne lui avez-vous point fait plus d'honneur qu’il ne méritait?</p>
<p>J'ai vu des gens qui l'en estimaient moins, depuis qu’ils l'avaient connu.</p>
<p>Et moi, répliqua-t'elle, je l'en estime beaucoup plus, depuis que je sais qu'il ressemble à une montre.</p>
<p>Il est surprenant que l'ordre de la nature, tout admirable qu'il est, ne roule que sur des choses si simples.</p>

<aside>
  <h3 class="yellow">Notes:</h3>

  <h4 id="opera" class="yellow note">Opéra</h4>
  <p>Nom propre désignant l'Opéra de Paris, fondé en <time datetime="1669">1669</time>.</p>
  <footer>
    <p class="puce"><a href="#renvoi-opera" title="#renvoi-opera">back to text ↩</a></p>
  <footer>
  
  <h4 id="parterre" class="yellow note">Parterre</h4>
  <p>Parterre: Rez-de-chaussée d'une salle de théâtre où le public se tenait debout et où les places étaient moins chères que dans les loges.</p>
  <footer>
    <p class="puce"><a href="#renvoi-parterre" title="#renvoi-parterre">back to text ↩</a></p>
  <footer>

  <h4 id="phaeton" class="yellow note">Lulli's <cite>Phaeton</cite></h4>
  <p><cite>Phaeton</cite>, tragédie lyrique en cinq actes de Quinault, musique de Lulli créée à l'Opéra en <time datetime="1683">1683</time>, et dont le succès fut considérable. L'envol de Phaëton sur le char du Soleil a lieu à l'acte III, scène 6.</p>
  <footer>
    <p class="puce"><a href="#renvoi-phaeton" title="#renvoi-phaeton">back to text ↩</a></p>
  <footer>

</aside>

<footer>
<p>[source: édition originale de <time datetime="1686">1686</time>, consultable sur <a href="https://gallica.bnf.fr/ark:/12148/btv1b86207579/f60.item">Gallica</a>, page 20]</p>
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
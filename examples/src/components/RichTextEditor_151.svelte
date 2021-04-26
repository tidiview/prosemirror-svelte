<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<p><time datetime="2020-02-12">12 Fév. 2020</time></p>

<div class="notices blue">
<p>Dans “le Banquet” de Platon, quelques personnes assemblées à l'occasion d'une fête mondaine, échangent leurs vues sur le sens de l'<ruby lang="fr">amour<rp>(</rp><rt lang="grc">Érôs</rt><rp>)</rp></ruby lang="fr">.<br>
C'est là que <a href="/blog/fr/eros#note_socrate" title="Socrate" id="socrate">Socrate</a> déclare qu'étant jeune, la "philosophie de l'Amour" lui fut enseigné par <a href="/blog/fr/eros#note_diotime" title="Diotime" id="diotime">Diotime</a>, prétresse et prophète.<br>
Ci-dessous, Socrate pose plusieurs questions à Diotime à propos de l'amour.</p>
</div>

<div id="translation-text-rousi">
<ol class="doc-three-rows">
  <li data-id="【SOCRATE】">— Quel est son père, repris-je, et quelle est sa mère?</li>
  <li id="203b" data-id="【DIOTIME】">— C'est une assez longue histoire, répondit-elle. Je vais pourtant te la raconter.</li>
  <li data-id="【SOCRATE】">— Quel est son père, repris-je, et quelle est sa mère?</li>
  <li id="203b" data-id="【DIOTIME】">— C'est une assez longue histoire, répondit-elle. Je vais pourtant te la raconter.</li>
  <li>Il faut savoir que, le jour où naquit Aphrodite, les dieux festoyaient: parmi eux se trouvait le fils de Mètis, <a id="poros" href="/blog/ja/eros#note_poros">Poros</a>.</li>
  <li>Or, quand le banquet fut terminé arriva <a id="penia" href="/blog/ja/eros#note_penia">Pénia</a>, qui était venue mendier comme cela est naturel un jour de bombance, et elle se tenait sur le pas de la porte.</li>
  <li>Or Poros, qui s'était enivré de <a id="nectar" href="/blog/ja/eros#note_nectar">nectar</a>, car le vin n'existait pas encore à cette époque, se traîna dans le jardin de Zeus et, appesanti par l'ivresse, s'y endormit.</li>
  <li id="203c">Alors Pénia, dans sa pénurie, eut le projet de se faire faire un enfant par Poros; elle s'étendit près de lui et devint grosse d'Eros.</li>
  <li>Si Eros est devenu le suivant d'Aphrodite et son servant, c'est bien parce qu'il a été engendré lors des fêtes données en l'honneur de la naissance de la déesse; et si en même temps il est par nature amoureux du beau, c'est parce qu'Aphrodite est belle.</li>
  <li>Du fait qu'il est le fils de Poros et de Pénia, Éros se trouve dans la condition que voici.</li>
  <li id="203d">D'abord, il est toujours pauvre, et il s'en faut de beaucoup qu'il soit délicat et beau, comme le croient la plupart des gens. Au contraire, il est rude, malpropre, va-nu-pieds et il n'a pas de gîte, couchant toujours par terre et à la dure, dormant à la belle étoile sur le pas des portes et sur le bord des chemins, car, puisqu'il tient de sa mère, c'est l'indigence qu'il a en partage.</li>
  <li>À l'exemple de son père en revanche, il est à l'affût de ce qui est beau et de ce qui est bon, il est viril, résolu, ardent, c'est un chasseur redoutable; il ne cesse de tramer des ruses, il est passionné de savoir et fertile en expédients, il passe tout son temps à <a id="philosopher" href="/blog/ja/eros#note_philosopher">philosopher</a>, c'est un sorcier redoutable, un magicien et un expert.</li>
  <li id="203e">Il faut ajouter que par nature il n'est ni immortel ni mortel.</li>
  <li>En l'espace d'une même journée, tantôt il est en fleur, plein de vie, tantôt il est mourant; puis il revient à la vie quand ses expédients réussissent en vertu de la nature qu'il tient de son père;</li>
  <li>mais ce que lui procurent ses expédients sans cesse lui échappe; aussi Eros n'est-il jamais ni dans l'indigence ni dans l'opulence.</li>
  <li>par ailleurs, il se trouve à mi-chemin entre le savoir et l'ignorance.</li>
  <li id="204a" data-id="【DIOTIME】">— Voici en effet ce qu'il en est.</li>
  <li>Aucun dieu ne tend vers le savoir ni ne désire devenir savant, car il l'est;</li>
  <li>or, si l'on est savant, on n'a pas besoin de tendre vers le savoir.</li>
  <li>Les ignorants ne tendent pas davantage vers le savoir ni ne désirent devenir savants,</li>
  <li>Mais c'est justement ce qu'il y a de fâcheux dans l'ignorance: alors que l'on n'est ni beau ni bon ni savant, on croit l'être suffisamment.</li>
  <li>Non, celui qui ne s’imagine pas en être dépourvu ne désire pas ce dont il ne croit pas devoir être pourvu.</li>
  <li data-id="【SOCRATE】">— Qui donc, Diotime, demandai-je, sont ceux qui tendent vers le savoir, si ce ne sont ni les savants ni les ignorants?</li>
  <li data-id="【DIOTIME】">— D'ores et déjà, répondit-elle, il est parfaitement clair, même pour un enfant, que ce sont ceux qui se trouvent entre les deux, et qu'Éros doit être du nombre.</li>
  <li>Il va de soi, en effet, que le savoir compte parmi les choses qui sont les plus belles; or Éros est amour du beau.</li>
  <li>Par suite, Éros doit nécessairement tendre vers le savoir, et, puisqu'il tend vers le savoir, il doit tenir le milieu entre celui qui sait et l'ignorant.</li>
  <li>Et ce qui en lui explique ces traits, c'est son origine:</li>
  <li>car il est né d'un père doté de savoir et plein de ressources, et d'une mère dépourvue de savoir et de ressources.</li>
  <li>Telle est bien, mon cher Socrate, la nature de ce démon.</li>
  <li>Mais l'idée que tu te faisais d'Eros, il n'est pas surprenant que tu t'y sois laissé prendre.</li>
  <li>Cette idée qui était la tienne, dans la mesure où ce que tu dis en fournit un indice, c'est que l'amour est le bien-aimé et non l'amant.</li>
  <li>Voilà la raison pour laquelle, j'imagine, Éros te paraissait être doté d'une beauté sans bornes.</li>
  <li>Et de fait ce qui attire l'amour, c'est ce qui est réellement beau, délicat, parfait, c'est-à- dire ce qui dispense le bonheur le plus grand.</li>
  <li>Mais autre est la nature de ce qui aime, et je t'ai exposé ce qu'elle est.</li>
</ol>
</div>

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
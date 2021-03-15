<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<p><span>12</span><sup> </sup><i class="fa fa-calendar-o fa-2x"></i></p>
<p>Fév.</p>
<p><span>2020</span></p>
<div class="notices blue">
<p>Dans “le Banquet” de Platon, quelques personnes assemblées à l'occasion d'une fête mondaine, échangent leurs vues sur le sens de l'<ruby lang="fr">amour<rp>(</rp><rt lang="grc">Érôs</rt><rp>)</rp></ruby lang="fr">.<br>
C'est là que <a href="/blog/fr/eros#note_socrate" title="Socrate" id="socrate">Socrate</a> déclare qu'étant jeune, la "philosophie de l'Amour" lui fut enseigné par <a href="/blog/fr/eros#note_diotime" title="Diotime" id="diotime">Diotime</a>, prétresse et prophète.<br>
Ci-dessous, Socrate pose plusieurs questions à Diotime à propos de l'amour.</p>
</div>
<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>【SOCRATE】</td>
<td><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewbox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span> — Quel est son père, repris-je, et quelle est sa mère?</td>
</tr>
<tr>
<td><sup>203b</sup></td>
<td>【DIOTIME】</td>
<td>— C'est une assez longue histoire, répondit-elle. Je vais pourtant te la raconter.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Il faut savoir que, le jour où naquit Aphrodite, les dieux festoyaient: parmi eux se trouvait le fils de Mètis, <a id="poros" href="/blog/ja/eros#note_poros">Poros</a>.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Or, quand le banquet fut terminé arriva <a id="penia" href="/blog/ja/eros#note_penia">Pénia</a>, qui était venue mendier comme cela est naturel un jour de bombance, et elle se tenait sur le pas de la porte.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Or Poros, qui s'était enivré de <a id="nectar" href="/blog/ja/eros#note_nectar">nectar</a>, car le vin n'existait pas encore à cette époque, se traîna dans le jardin de Zeus et, appesanti par l'ivresse, s'y endormit.</td>
</tr>
<tr>
<td><sup>203c</sup></td>
<td></td>
<td>Alors Pénia, dans sa pénurie, eut le projet de se faire faire un enfant par Poros; elle s'étendit près de lui et devint grosse d'Eros.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Si Eros est devenu le suivant d'Aphrodite et son servant, c'est bien parce qu'il a été engendré lors des fêtes données en l'honneur de la naissance de la déesse; et si en même temps il est par nature amoureux du beau, c'est parce qu'Aphrodite est belle.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Du fait qu'il est le fils de Poros et de Pénia, Éros se trouve dans la condition que voici.</td>
</tr>
<tr>
<td><sup>203d</sup></td>
<td></td>
<td>D'abord, il est toujours pauvre, et il s'en faut de beaucoup qu'il soit délicat et beau, comme le croient la plupart des gens. Au contraire, il est rude, malpropre, va-nu-pieds et il n'a pas de gîte, couchant toujours par terre et à la dure, dormant à la belle étoile sur le pas des portes et sur le bord des chemins, car, puisqu'il tient de sa mère, c'est l'indigence qu'il a en partage.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>À l'exemple de son père en revanche, il est à l'affût de ce qui est beau et de ce qui est bon, il est viril, résolu, ardent, c'est un chasseur redoutable; il ne cesse de tramer des ruses, il est passionné de savoir et fertile en expédients, il passe tout son temps à <a id="philosopher" href="/blog/ja/eros#note_philosopher">philosopher</a>, c'est un sorcier redoutable, un magicien et un expert.</td>
</tr>
<tr>
<td><sup>203e</sup></td>
<td></td>
<td>Il faut ajouter que par nature il n'est ni immortel ni mortel.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>En l'espace d'une même journée, tantôt il est en fleur, plein de vie, tantôt il est mourant; puis il revient à la vie quand ses expédients réussissent en vertu de la nature qu'il tient de son père;</td>
</tr>
<tr>
<td></td>
<td></td>
<td>mais ce que lui procurent ses expédients sans cesse lui échappe; aussi Eros n'est-il jamais ni dans l'indigence ni dans l'opulence.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>par ailleurs, il se trouve à mi-chemin entre le savoir et l'ignorance. <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewbox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></td>
</tr>
<tr>
<td><sup>204a</sup></td>
<td>【DIOTIME】</td>
<td><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewbox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span> — Voici en effet ce qu'il en est.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Aucun dieu ne tend vers le savoir ni ne désire devenir savant, car il l'est ;</td>
</tr>
<tr>
<td></td>
<td></td>
<td>or, si l'on est savant, on n'a pas besoin de tendre vers le savoir.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Les ignorants ne tendent pas davantage vers le savoir ni ne désirent devenir savants,</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Mais c'est justement ce qu'il y a de fâcheux dans l'ignorance: alors que l'on n'est ni beau ni bon ni savant, on croit l'être suffisamment.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Non, celui qui ne s’imagine pas en être dépourvu ne désire pas ce dont il ne croit pas devoir être pourvu.</td>
</tr>
<tr>
<td></td>
<td>【SOCRATE】</td>
<td>— Qui donc, Diotime, demandai-je, sont ceux qui tendent vers le savoir, si ce ne sont ni les savants ni les ignorants?</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>【DIOTIME】</td>
<td>— D'ores et déjà, répondit-elle, il est parfaitement clair, même pour un enfant, que ce sont ceux qui se trouvent entre les deux, et qu'Éros doit être du nombre.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Il va de soi, en effet, que le savoir compte parmi les choses qui sont les plus belles ; or Éros est amour du beau.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Par suite, Éros doit nécessairement tendre vers le savoir, et, puisqu'il tend vers le savoir, il doit tenir le milieu entre celui qui sait et l'ignorant.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Et ce qui en lui explique ces traits, c'est son origine:</td>
</tr>
<tr>
<td></td>
<td></td>
<td>car il est né d'un père doté de savoir et plein de ressources, et d'une mère dépourvue de savoir et de ressources.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Telle est bien, mon cher Socrate, la nature de ce démon.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Mais l'idée que tu te faisais d'Eros, il n'est pas surprenant que tu t'y sois laissé prendre.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Cette idée qui était la tienne, dans la mesure où ce que tu dis en fournit un indice, c'est que l'amour est le bien-aimé et non l'amant.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Voilà la raison pour laquelle, j'imagine, Éros te paraissait être doté d'une beauté sans bornes.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Et de fait ce qui attire l'amour, c'est ce qui est réellement beau, délicat, parfait, c'est-à- dire ce qui dispense le bonheur le plus grand.</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Mais autre est la nature de ce qui aime, et je t'ai exposé ce qu'elle est. <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewbox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></td>
</tr>
</tbody>
</table>
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
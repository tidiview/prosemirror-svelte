<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="yellow">L'archange Michel dans l'Apocalypse</h1>
<h2 id="renvoi_bataille" class="yellow">l'archange saint Michel selon le livre de l'Apocalypse, Chapître 12, verset 1 à 18</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>01</sup></td>
<td>Un grand signe apparut dans le ciel: une Femme, ayant le soleil pour manteau, la lune sous les pieds, et sur la tête une couronne de douze étoiles.</td></tr>
<tr><td><sup>02</sup></td>
<td>Elle est enceinte, elle crie, dans les douleurs et la torture d’un enfantement.</td></tr>
<tr><td><sup>03</sup></td>
<td>Un autre signe apparut dans le ciel: un grand dragon, rouge feu, avec sept têtes et dix cornes, et, sur chacune des sept têtes, un diadème.</td></tr>
<tr><td><sup>04</sup></td>
<td>Sa queue, entraînant le tiers des étoiles du ciel, les précipita sur la terre. Le Dragon vint se poster devant la femme qui allait enfanter, afin de dévorer l’enfant dès sa naissance.</td></tr>
<tr><td><sup>05</sup></td>
<td>Or, elle mit au monde un fils, un enfant mâle, celui qui sera le berger de toutes les nations, les conduisant avec un sceptre de fer. L’enfant fut enlevé jusqu’auprès de Dieu et de son Trône,</td></tr>
<tr><td><sup>06</sup></td>
<td>et la Femme s’enfuit au désert, où Dieu lui a préparé une place, pour qu’elle y soit nourrie pendant mille deux cent soixante jours.</td></tr>
<tr><td><sup><a href="#renvoi_bataille" title="combat dans le ciel" id="bataille">07</a></sup></td>
<td>Il y eut alors un combat dans le ciel: Michel, avec ses anges, dut combattre le Dragon. Le Dragon, lui aussi, combattait avec ses anges,</td></tr>
<tr><td><sup>08</sup></td>
<td>mais il ne fut pas le plus fort; pour eux désormais, nulle place dans le ciel.</td></tr>
<tr><td><sup>09</sup></td>
<td>Oui, il fut rejeté, le grand Dragon, le Serpent des origines, celui qu’on nomme Diable et Satan, le séducteur du monde entier. Il fut jeté sur la terre, et ses anges furent jetés avec lui.</td></tr>
<tr><td><sup>10</sup></td>
<td>Alors j’entendis dans le ciel une voix forte, qui proclamait: «Maintenant voici le salut, la puissance et le règne de notre Dieu, voici le pouvoir de son Christ! Car il est rejeté, l’accusateur de nos frères, lui qui les accusait, jour et nuit, devant notre Dieu.</td></tr>
<tr><td><sup>11</sup></td>
<td>Eux-mêmes l’ont vaincu par le sang de l’Agneau, par la parole dont ils furent les témoins; détachés de leur propre vie, ils sont allés jusqu’à mourir.</td></tr>
<tr><td><sup>12</sup></td>
<td>Cieux, soyez donc dans la joie, et vous qui avez aux cieux votre demeure! Malheur à la terre et à la mer: le diable est descendu vers vous, plein d’une grande fureur; il sait qu’il lui reste peu de temps.»</td></tr>
<tr><td><sup>13</sup></td>
<td>Et quand le Dragon vit qu’il était jeté sur la terre, il se mit à poursuivre la Femme qui avait mis au monde l’enfant mâle.</td></tr>
<tr><td><sup>14</sup></td>
<td>Alors furent données à la Femme les deux ailes du grand aigle pour qu’elle s’envole au désert, à la place où elle doit être nourrie pour un temps, deux temps et la moitié d’un temps, loin de la présence du Serpent.</td></tr>
<tr><td><sup>15</sup></td>
<td>Puis, de sa gueule, le Serpent projeta derrière la Femme de l’eau comme un fleuve, pour qu’elle soit emportée par ce fleuve.</td></tr>
<tr><td><sup>16</sup></td>
<td>Mais la terre vint au secours de la Femme: la terre ouvrit la bouche et engloutit le fleuve projeté par la gueule du Dragon.</td></tr>
<tr><td><sup>17</sup></td>
<td>Alors le Dragon se mit en colère contre la Femme, il partit faire la guerre au reste de sa descendance, ceux qui observent les commandements de Dieu et gardent le témoignage de Jésus.</td></tr>
<tr><td><sup>18</sup></td>
<td>Et il se posta sur le sable au bord de la mer.</td></tr>
</tbody>
</table>
<p><span style="color: #df8a13;">Traduction liturgique du Nouveau Testament, Ap. 12-1～18</span></p>
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
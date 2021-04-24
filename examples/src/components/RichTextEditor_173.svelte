<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>
  
<h1 class="yellow">L'archange Michel dans l'Apocalypse</h1>

<h2 id="renvoi_bataille" class="yellow">l'archange saint Michel selon le texte de l'Apocalypse, Chapître 12, versets 1 à 18</h2>

<ol class="doc">
<li value="01">Un grand signe apparut dans le ciel: une Femme, ayant le soleil pour manteau, la lune sous les pieds, et sur la tête une couronne de douze étoiles.</li>
<li value="02">Elle est enceinte, elle crie, dans les douleurs et la torture d’un enfantement.</li>
<li value="03">Un autre signe apparut dans le ciel: un grand dragon, rouge feu, avec sept têtes et dix cornes, et, sur chacune des sept têtes, un diadème.</li>
<li value="04">Sa queue, entraînant le tiers des étoiles du ciel, les précipita sur la terre. Le Dragon vint se poster devant la femme qui allait enfanter, afin de dévorer l’enfant dès sa naissance.</li>
<li value="05">Or, elle mit au monde un fils, un enfant mâle, celui qui sera le berger de toutes les nations, les conduisant avec un sceptre de fer. L’enfant fut enlevé jusqu’auprès de Dieu et de son Trône,</li>
<li value="06">et la Femme s’enfuit au désert, où Dieu lui a préparé une place, pour qu’elle y soit nourrie pendant mille deux cent soixante jours.</li>
<li value="<a"=up></td>
<td>Il y eut alors un combat dans le ciel: Michel, avec ses anges, dut combattre le Dragon. Le Dragon, lui aussi, combattait avec ses anges,</li>
<li value="08">mais il ne fut pas le plus fort; pour eux désormais, nulle place dans le ciel.</li>
<li value="09">Oui, il fut rejeté, le grand Dragon, le Serpent des origines, celui qu’on nomme Diable et Satan, le séducteur du monde entier. Il fut jeté sur la terre, et ses anges furent jetés avec lui.</li>
<li value="10">Alors j’entendis dans le ciel une voix forte, qui proclamait:
  <p class="conversation">«Maintenant voici le salut, la puissance et le règne de notre Dieu, voici le pouvoir de son Christ! Car il est rejeté, l’accusateur de nos frères, lui qui les accusait, jour et nuit, devant notre Dieu.</p>
</li>
<li value="11">
  <p class="conversation">Eux-mêmes l’ont vaincu par le sang de l’Agneau, par la parole dont ils furent les témoins; détachés de leur propre vie, ils sont allés jusqu’à mourir.</p>
</li>
<li value="12">
  <p class="conversation">Cieux, soyez donc dans la joie, et vous qui avez aux cieux votre demeure! Malheur à la terre et à la mer: le diable est descendu vers vous, plein d’une grande fureur; il sait qu’il lui reste peu de temps.»</p>
</li>
<li value="13">Et quand le Dragon vit qu’il était jeté sur la terre, il se mit à poursuivre la Femme qui avait mis au monde l’enfant mâle.</li>
<li value="14">Alors furent données à la Femme les deux ailes du grand aigle pour qu’elle s’envole au désert, à la place où elle doit être nourrie pour un temps, deux temps et la moitié d’un temps, loin de la présence du Serpent.</li>
<li value="15">Puis, de sa gueule, le Serpent projeta derrière la Femme de l’eau comme un fleuve, pour qu’elle soit emportée par ce fleuve.</li>
<li value="16">Mais la terre vint au secours de la Femme: la terre ouvrit la bouche et engloutit le fleuve projeté par la gueule du Dragon.</li>
<li value="17">Alors le Dragon se mit en colère contre la Femme, il partit faire la guerre au reste de sa descendance, ceux qui observent les commandements de Dieu et gardent le témoignage de Jésus.</li>
<li value="18">Et il se posta sur le sable au bord de la mer.</li>
</ol>

<footer>
<p><span style="color: #df8a13;">Traduction liturgique du Nouveau Testament, Ap. 12-1～18</span></p>
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
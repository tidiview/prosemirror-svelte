<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="yellow">Saint Michel dans l'Apocalypse</h1>
<h2 id="renvoi_bataille" class="yellow">l'archange saint Michel selon le livre de l'Apocalypse, Chapître 12, verset 1 à 18</h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
<sup>01</sup> Un grand signe apparut dans le ciel : une Femme, ayant le soleil pour manteau, la lune sous les pieds, et sur la tête une couronne de douze étoiles.<br>
<sup>02</sup> Elle est enceinte, elle crie, dans les douleurs et la torture d’un enfantement.<br>
<sup>03</sup> Un autre signe apparut dans le ciel : un grand dragon, rouge feu, avec sept têtes et dix cornes, et, sur chacune des sept têtes, un diadème.<br>
<sup>04</sup> Sa queue, entraînant le tiers des étoiles du ciel, les précipita sur la terre. Le Dragon vint se poster devant la femme qui allait enfanter, afin de dévorer l’enfant dès sa naissance.<br>
<sup>05</sup> Or, elle mit au monde un fils, un enfant mâle, celui qui sera le berger de toutes les nations, les conduisant avec un sceptre de fer. L’enfant fut enlevé jusqu’auprès de Dieu et de son Trône,<br>
<sup>06</sup> et la Femme s’enfuit au désert, où Dieu lui a préparé une place, pour qu’elle y soit nourrie pendant mille deux cent soixante jours.<br>
<sup><a href="/docs/fr/mont-saint-michel/arch-michel/apocalypse#renvoi_bataille" title="combat dans le ciel" id="bataille">07</a></sup> Il y eut alors un combat dans le ciel : Michel, avec ses anges, dut combattre le Dragon. Le Dragon, lui aussi, combattait avec ses anges,<br>
<sup>08</sup> mais il ne fut pas le plus fort ; pour eux désormais, nulle place dans le ciel.<br>
<sup>09</sup> Oui, il fut rejeté, le grand Dragon, le Serpent des origines, celui qu’on nomme Diable et Satan, le séducteur du monde entier. Il fut jeté sur la terre, et ses anges furent jetés avec lui.<br>
<sup>10</sup> Alors j’entendis dans le ciel une voix forte, qui proclamait : « Maintenant voici le salut, la puissance et le règne de notre Dieu, voici le pouvoir de son Christ ! Car il est rejeté, l’accusateur de nos frères, lui qui les accusait, jour et nuit, devant notre Dieu.<br>
<sup>11</sup> Eux-mêmes l’ont vaincu par le sang de l’Agneau, par la parole dont ils furent les témoins ; détachés de leur propre vie, ils sont allés jusqu’à mourir.<br>
<sup>12</sup> Cieux, soyez donc dans la joie, et vous qui avez aux cieux votre demeure ! Malheur à la terre et à la mer : le diable est descendu vers vous, plein d’une grande fureur ; il sait qu’il lui reste peu de temps. »<br>
<sup>13</sup> Et quand le Dragon vit qu’il était jeté sur la terre, il se mit à poursuivre la Femme qui avait mis au monde l’enfant mâle.<br>
<sup>14</sup> Alors furent données à la Femme les deux ailes du grand aigle pour qu’elle s’envole au désert, à la place où elle doit être nourrie pour un temps, deux temps et la moitié d’un temps, loin de la présence du Serpent.<br>
<sup>15</sup> Puis, de sa gueule, le Serpent projeta derrière la Femme de l’eau comme un fleuve, pour qu’elle soit emportée par ce fleuve.<br>
<sup>16</sup> Mais la terre vint au secours de la Femme : la terre ouvrit la bouche et engloutit le fleuve projeté par la gueule du Dragon.<br>
<sup>17</sup> Alors le Dragon se mit en colère contre la Femme, il partit faire la guerre au reste de sa descendance, ceux qui observent les commandements de Dieu et gardent le témoignage de Jésus.<br>
<sup>18</sup> Et il se posta sur le sable au bord de la mer. <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
<p><br></p>
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
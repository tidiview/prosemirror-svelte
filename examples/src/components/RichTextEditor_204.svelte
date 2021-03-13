<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="yellow">Archangel Michael in the revelation</h1>
<h2 id="renvoi_bataille" class="yellow">Archangel Michael according to chapter 12 of the Apocalypse [Ap. 12-7]</h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span>
<sup>01</sup> Now a great sign appeared in heaven: a woman, robed with the sun, standing on the moon, and on her head a crown of twelve stars.<br>
<sup>02</sup> She was pregnant, and in labour, crying aloud in the pangs of childbirth.<br>
<sup>03</sup> Then a second sign appeared in the sky: there was a huge red dragon with seven heads and ten horns, and each of the seven heads crowned with a coronet.<br>
<sup>04</sup> Its tail swept a third of the stars from the sky and hurled them to the ground, and the dragon stopped in front of the woman as she was at the point of giving birth, so that it could eat the child as soon as it was born.<br>
<sup>05</sup> The woman was delivered of a boy, the son who was to rule all the nations with an iron sceptre, and the child was taken straight up to God and to his throne,<br>
<sup>06</sup> while the woman escaped into the desert, where God had prepared a place for her to be looked after for twelve hundred and sixty days.<br>
<sup><a href="#renvoi_bataille" title="war broke out in heaven" id="bataille">07</a></sup> And now war broke out in heaven, when Michael with his angels attacked the dragon. The dragon fought back with his angels,<br>
<sup>08</sup> but they were defeated and driven out of heaven.<br>
<sup>09</sup> The great dragon, the primeval serpent, known as the devil or Satan, who had led all the world astray, was hurled down to the earth and his angels were hurled down with him.<br>
<sup>10</sup> Then I heard a voice shout from heaven, 'Salvation and power and empire for ever have been won by our God, and all authority for his Christ, now that the accuser, who accused our brothers day and night before our God, has been brought down.<br>
<sup>11</sup> They have triumphed over him by the blood of the Lamb and by the word to which they bore witness, because even in the face of death they did not cling to life.<br>
<sup>12</sup> So let the heavens rejoice and all who live there; but for you, earth and sea, disaster is coming -- because the devil has gone down to you in a rage, knowing that he has little time left.'<br>
<sup>13</sup> As soon as the dragon found himself hurled down to the earth, he sprang in pursuit of the woman, the mother of the male child,<br>
<sup>14</sup> but she was given a pair of the great eagle's wings to fly away from the serpent into the desert, to the place where she was to be looked after for a time, two times and half a time.<br>
<sup>15</sup> So the serpent vomited water from his mouth, like a river, after the woman, to sweep her away in the current,<br>
<sup>16</sup> but the earth came to her rescue; it opened its mouth and swallowed the river spewed from the dragon's mouth.<br>
<sup>17</sup> Then the dragon was enraged with the woman and went away to make war on the rest of her children, who obey God's commandments and have in themselves the witness of Jesus.<br>
<sup>18</sup> And I took my stand on the seashore. <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></p>
<p><span style="color: #df8a13;">Liturgical Translation of the New Testament</span></p>
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
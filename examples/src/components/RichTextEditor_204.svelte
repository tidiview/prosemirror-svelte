<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>*

<hgroup>
<h1 class="yellow">Archangel Michael in <cite>the Apocalypse</cite></h1>
<h2 class="yellow">A war broke out in heaven</h2>
</hgroup>

  <h2 id="renvoi_bataille" class="yellow">Archangel Michael according to chapter 12 of <cite>the Apocalypse</cite></h2>

  <ol class="doc">
    <li value="01">Now a great sign appeared in heaven: a woman, robed with the sun, standing on the moon, and on her head a crown of twelve stars.</li>
    <li value="02">She was pregnant, and in labour, crying aloud in the pangs of childbirth.</li>
    <li value="03">Then a second sign appeared in the sky: there was a huge red dragon with seven heads and ten horns, and each of the seven heads crowned with a coronet.</li>
    <li value="04">Its tail swept a third of the stars from the sky and hurled them to the ground, and the dragon stopped in front of the woman as she was at the point of giving birth, so that it could eat the child as soon as it was born.</li>
    <li value="05">The woman was delivered of a boy, the son who was to rule all the nations with an iron sceptre, and the child was taken straight up to God and to his throne,</li>
    <li value="06">while the woman escaped into the desert, where God had prepared a place for her to be looked after <time datetime="P1260D">for twelve hundred and sixty days</time>.</li>
    <li value="07">And now <a id="bataille" href="#renvoi_bataille" title="war broke out in heaven">war broke out in heaven</a>, when <mark>Michael</mark> with his angels attacked the dragon. The dragon fought back with his angels,</li>
    <li value="08">but they were defeated and driven out of heaven.</li>
    <li value="09">The great dragon, the primeval serpent, known as the devil or Satan, who had led all the world astray, was hurled down to the earth and his angels were hurled down with him.</li>
    <li value="10">
      Then I heard a voice shout from heaven,
      <p class="conversation">'Salvation and power and empire for ever have been won by our God, and all authority for his Christ, now that the accuser, who accused our brothers day and night before our God, has been brought down.</p>
    </li>
    <li value="11">
      <p class="conversation">They have triumphed over him by the blood of the Lamb and by the word to which they bore witness, because even in the face of death they did not cling to life.</p>
    </li>
    <li value="12">
      <p class="conversation">So let the heavens rejoice and all who live there; but for you, earth and sea, disaster is coming -- because the devil has gone down to you in a rage, knowing that he has little time left.'</p>
    </li>
    <li value="13">As soon as the dragon found himself hurled down to the earth, he sprang in pursuit of the woman, the mother of the male child,</li>
    <li value="14">but she was given a pair of the great eagle's wings to fly away from the serpent into the desert, to the place where she was to be looked after for <time datetime="P1Y">a time</time>, <time datetime="P2Y">two times</time> and <time datetime="P6M">half a time</time>.</li>
    <li value="15">So the serpent vomited water from his mouth, like a river, after the woman, to sweep her away in the current,</li>
    <li value="16">but the earth came to her rescue; it opened its mouth and swallowed the river spewed from the dragon's mouth.</li>
    <li value="17">Then the dragon was enraged with the woman and went away to make war on the rest of her children, who obey God's commandments and have in themselves the witness of Jesus.</li>
    <li value="18">And I took my stand on the seashore.</li>
  </ol>

<footer>
  <p style="color: #df8a13;">Liturgical Translation of the New Testament, chapter 12 of <cite>the Apocalypse</cite>, verses 7 to 18 [Ap. 12-7].</p>
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

  onMount(() =>focusEditor());

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
  information about html <a href='https://www.w3schools.com/tags/tag_ruby.asp' rel="nofollow external" target="_blank"><code>ruby</code></a>tag.
</p>

{#if showEditorState}
<pre>{JSON.stringify(toJSON(editorState), null, 2)}</pre>
{/if}
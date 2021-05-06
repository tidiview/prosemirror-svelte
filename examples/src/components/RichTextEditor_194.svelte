<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:163 JA:131  -->
<article>

<hgroup>
<h1 class="blue">Tiresias</h1>
<h2 class="blue">at the Grand Trianon</h2>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.webp 700w" type="image/webp"><img sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.jpg" title="Peinture de René-Antoine HOUASSE, “Minerva and Tiresias”, qui se trouve au Grand Trianon au Château de Versailles" alt="Peinture de René-Antoine HOUASSE, “Minerva and Tiresias”, qui se trouve au Grand Trianon au Château de Versailles" class="class-diane-img" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.jpg 700w"></picture><figcaption><cite>Minerva and Tiresias</cite><br>Minerva at first ground, rendered Tiresias in the center, <q cite="#tiresias">sightless</q>, <cite>Bibliotheca</cite>, Book <abbr title="three">III</abbr>, chapter 6 paragraph 7.</figcaption>
</figure>

  <div class="notices blue">
  <p>At the <a href="https://en.wikipedia.org/wiki/Grand_Trianon" title="https://en.wikipedia.org/wiki/Grand_Trianon">Grand Trianon</a>, in the Salon des Seigneurs, is a painting by <a href="https://en.wikipedia.org/wiki/René-Antoine_Houasse" title="https://en.wikipedia.org/wiki/René-Antoine_Houasse">René-Antoine HOUASSE</a>, <cite>Minerva and Tiresias</cite>.</p>
  <p>This painting is a part of a serie called <cite>History of Minerva</cite> as <a href="https://francois-vidit.com/docs/en/versailles/trianon/arachnee" title="https://francois-vidit.com/docs/en/versailles/trianon/arachnee"><cite>Minerva and Arachne</cite></a>.</p>
  <p><a href="https://en.wikipedia.org/wiki/Minerva" title="https://en.wikipedia.org/wiki/Minerva">Minerva</a> at first ground makes Tiresias in the center becoming sightless, as <a href="https://en.wikipedia.org/wiki/Bibliotheca_(Pseudo-Apollodorus)#Pseudo-Apollodorus" title="https://en.wikipedia.org/wiki/Bibliotheca_(Pseudo-Apollodorus)#Pseudo-Apollodorus">Pseudo-Apollodorus</a> tells in Book <abbr title="three">III</abbr> of the <a href="https://en.wikipedia.org/wiki/Bibliotheca_(Pseudo-Apollodorus)" title="https://en.wikipedia.org/wiki/Bibliotheca_(Pseudo-Apollodorus)"><cite>Bibliotheca</cite></a>.</p>
  <p>Here's the text.</p>
  </div>

<h2 id="tiresias" class="blue"><cite>Minerva and Tiresias</cite> according to text of Book <abbr title="three">III</abbr> of the <cite>Bibliotheca</cite></h2>

<ol class="doc">
  <li value="7">But Pherecydes says that he was blinded by Minerva;</li>
  <li>for Chariclo was dear to Minerva...</li>
  <li>[as they were at the bath together]</li>
  <li>and Tiresias saw the goddess stark naked,</li>
  <li>and she covered his eyes with her hands,</li>
  <li>and so rendered him sightless.</li>
  <li>And when Chariclo asked her to restore his sight,</li>
  <li>she could not do so,</li>
  <li>but by cleansing his ears she caused him to understand every note of birds;</li>
  <li>and she gave him a staff of cornel-wood,</li>
  <li>wherewith he walked like those who see.</li>
</ol>

<footer>
  <p><span style="color: #28a1c5;">Pseudo-Apollodorus, <cite>Bibliotheca</cite>, Book <abbr title="three">III</abbr>, chapter 6 paragraph 7.</span></p>
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
<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="blue">Tiresias</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.webp 700w" type="image/webp"><img sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.jpg" title="Peinture de René-Antoine HOUASSE, “Minerve and Tiresias”, qui se trouve au Grand Trianon au Château de Versailles" alt="Peinture de René-Antoine HOUASSE, “Minerve and Tiresias”, qui se trouve au Grand Trianon au Château de Versailles" class="class-diane-img" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.jpg 700w"></picture><figcaption>Minerve at first ground makes Tiresias in the center becoming blind</figcaption></figure>
<div class="notices blue">
<p>At the <a href="https://en.wikipedia.org/wiki/Grand_Trianon" title="https://en.wikipedia.org/wiki/Grand_Trianon">Grand Trianon</a>, in the Salon des Seigneurs, is a painting painted by <a href="https://en.wikipedia.org/wiki/René-Antoine_Houasse" title="https://en.wikipedia.org/wiki/René-Antoine_Houasse">René-Antoine HOUASSE</a>, « Minerva and Tiresias ».<br>
<a href="https://en.wikipedia.org/wiki/Minerva" title="https://en.wikipedia.org/wiki/Minerva">Minerva</a> at first ground makes Tiresias in the center becoming blind, as <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid">Ovid</a> tells in Book III of “<a href="https://en.wikipedia.org/wiki/Metamorphoses" title="https://en.wikipedia.org/wiki/Metamorphoses">The Metamorphoses</a>”.<br>
Here's the text.</p>
</div>
<h2 class="blue">Tiresias according to “The Metamorphoses”</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>316</sup></td>
<td>While these events according to the laws<br>
of destiny occurred, and while the child,<br>
the twice-born Bacchus, in his cradle lay,<br>
'Tis told that Jupiter, a careless hour,<br>
indulged too freely in the nectar cup;<br>
and having laid aside all weighty cares,<br>
jested with Juno as she idled by.</td></tr>
<tr><td><sup>320</sup></td>
<td>Freely the god began; “Who doubts the truth?<br>
The female's pleasure is a great delight,<br>
much greater than the pleasure of a male.”<br>
Juno denied it; wherefore 'twas agreed<br>
to ask Tiresias to declare the truth,<br>
than whom none knew both male and female joys:<br>
for wandering in a green wood he had seen<br>
two serpents coupling; and he took his staff<br>
and sharply struck them, till they broke and fled.<br>
'Tis marvelous, that instant he became<br>
a woman from a man, and so remained<br>
while seven autumns passed. When eight were told,<br>
again he saw them in their former plight,<br>
and thus he spoke; “Since such a power was wrought,<br>
by one stroke of a staff my sex was changed—<br>
again I strike!” And even as he struck<br>
the same two snakes, his former sex returned;<br>
his manhood was restored.—<br>
as both agreed<br>
to choose him umpire of the sportive strife,<br>
he gave decision in support of Jove;<br>
from this the disappointment Juno felt<br>
surpassed all reason, and enraged, decreed<br>
eternal night should seal Tiresias' eyes.—</td></td>
<tr><td><sup>337</sup></td>
<td>immortal Deities may never turn<br>
decrees and deeds of other Gods to naught,<br>
but Jove, to recompense his loss of sight,<br>
endowed him with the gift of prophecy.</td></tr>
</tbody>
</table>
<p><span style="color: #28a1c5;">Ovid, “The Metamorphoses”, Book III, verses 316 and followings.</span></p>
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
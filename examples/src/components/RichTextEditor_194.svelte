<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
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
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.webp 700w" type="image/webp"><img sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.jpg" title="Peinture de René-Antoine HOUASSE, “Minerve and Tiresias”, qui se trouve au Grand Trianon au Château de Versailles" alt="Peinture de René-Antoine HOUASSE, “Minerve and Tiresias”, qui se trouve au Grand Trianon au Château de Versailles" class="class-diane-img" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.jpg 700w"></picture><figcaption>Minerve at first ground <q cite="#tiresias">enraged, decreed eternal night should seal</q> Tiresias in the center, <cite>The Metamorphoses</cite>, Book <abbr title="three">III</abbr>, verse 336.</figcaption>
</figure>

  <div class="notices blue">
  <p>At the <a href="https://en.wikipedia.org/wiki/Grand_Trianon" title="https://en.wikipedia.org/wiki/Grand_Trianon">Grand Trianon</a>, in the Salon des Seigneurs, is a painting by <a href="https://en.wikipedia.org/wiki/René-Antoine_Houasse" title="https://en.wikipedia.org/wiki/René-Antoine_Houasse">René-Antoine HOUASSE</a>, <cite>Minerva and Tiresias</cite>.</p>
  <p><a href="https://en.wikipedia.org/wiki/Minerva" title="https://en.wikipedia.org/wiki/Minerva">Minerva</a> at first ground makes Tiresias in the center becoming blind, as <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid">Ovid</a> tells in Book <abbr title="three">III</abbr> of <a href="https://en.wikipedia.org/wiki/Metamorphoses" title="https://en.wikipedia.org/wiki/Metamorphoses"><cite>The Metamorphoses</cite></a>.</p>
  <p>Here's the text.</p>
  </div>

<h2 id="tiresias" class="blue">Tiresias according to text of Book <abbr title="three">III</abbr> of <cite>The Metamorphoses</cite></h2>

<ol class="doc">
  <li value="316">While these events according to the laws</li>
  <li>of destiny occurred, and while the child,</li>
  <li>the twice-born Bacchus, in his cradle lay,</li>
  <li>'Tis told that Jupiter, a careless hour,</li>
  <li>indulged too freely in the nectar cup;</li>
  <li>and having laid aside all weighty cares,</li>
  <li>jested with Juno as she idled by.</li>

  <li value="320" class="top-space">Freely the god began;
    <p class="conversation">“Who doubts the truth?<br>The female's pleasure is a great delight,<br>much greater than the pleasure of a male.”</p></li>
  <li>Juno denied it; wherefore 'twas agreed</li>
  <li>to ask <mark>Tiresias</mark> to declare the truth,</li>
  <li>than whom none knew both male and female joys:</li>
  <li>for wandering in a green wood he had seen</li>
  <li>two serpents coupling; and he took his staff</li>
  <li>and sharply struck them, till they broke and fled.</li>
  <li>'Tis marvelous, that instant he became</li>
  <li>a woman from a man, and so remained</li>
  <li>while seven autumns passed. When eight were told,</li>
  <li>again he saw them in their former plight,</li>
  <li>and thus he spoke; 
    <p class="conversation">“Since such a power was wrought,</p>
  </li>
  <li>
    <p class="conversation">by one stroke of a staff my sex was changed—</p>
    <p class="conversation">again I strike!”</p>
    And even as he struck
  </li>
  <li>the same two snakes, his former sex returned;</li>
  <li>his manhood was restored.—</li>

  <li class="top-space">as both agreed</li>
  <li>to choose him umpire of the sportive strife,</li>
  <li>he gave decision in support of Jove;</li>
  <li>from this the disappointment Juno felt</li>
  <li>surpassed all reason, and enraged, decreed</li>
  <li>eternal night should seal <mark>Tiresias</mark>' eyes.—</td></td>
  <li value="337">immortal Deities may never turn</li>
  <li>decrees and deeds of other Gods to naught,</li>
  <li>but Jove, to recompense his loss of sight,</li>
  <li value="340">endowed him with the gift of prophecy.</li>
</ol>

<footer>
  <p><span style="color: #28a1c5;">Ovid, <cite>The Metamorphoses</cite>, Book <abbr title="three">III</abbr>, verses 316 to 340.</span></p>
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
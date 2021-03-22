<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<h1 class="green">name of the archangel Michael</h1>
<section>
  <div class="notices green">
  <p>In hebrew, the name of the <a href="https://en.wikipedia.org/wiki/Michael_(archangel)" title="https://en.wikipedia.org/wiki/Michael (archangel)">archangel « <span style="color:#3d8b3d;">Michael</span> »</a> writes « <span style="color:#3d8b3d;" lang="he">מיכאל</span> ».</p>
  <p>
  The pronunciation of it in hebrew is between the "Michel" in french and the "Michael" of english.</p>
  <p>
  Below is a recording of this name in hebrew, as well as a brief analysis of the ethymology of this name from its denomination in hebrew.</p>
  </div>
</section>
<section>
  <article>
  <section>
    <h2 class="green">on the meaning and pronunciation of the name of the archangel Michael in hebrew</h2>
    <h3 class="green">meaning in hebrew</h3>
    <p>In the original text of the Bible in hebrew, the name of the archangel « Michael » in english is: <ruby lang="he"><span style="background:#f1f9f1;color:#3d8b3d;" lang="he">מיכאל</span><rt><span style="background:#f1f9f1;color:#3d8b3d;">Mîḵā'ēl</span></rt></ruby>.</p>
  </section>
  <section>
    <h3 class="green">pronunciation in hebrew</h3>
    <p>The notation « Mîḵā'ēl » comes from the <a href="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet" title="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet">international phonetic alphabet</a> and represents the following sound:</p>
    <ul>
    <li list-style-type: none;><audio controls="1" title="Pronunciation of מיכאל in hebrew" alt=""><source src="/user/sites/docs/pages/01.home/05.mont-saint-michel/01.arch-michel/01.nom/prononciation_mihael.mp3">Your browser does not support the audio tag.</audio></li>
    </ul>
  </section>
  <section>
    <h2 class="green">a name that means: « who is like god? »</h2>
    <h3 class="green">analysis</h3>
    <p>« <ruby lang="he"><span style="background:#f1f9f1;color:#3d8b3d;">מיכאל</span><rt><span style="background:#f1f9f1;color:#3d8b3d;">Mîḵā’ēl</span></rt></ruby> » may decompose as follows:</p>
    <table>
    <thead>
    <tr>
    <th><span hidden="">hidden</span></th>
    <th><span hidden="">hidden</span></th>
    <th><span hidden="">hidden</span></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><span style="background:#f1f9f1;color:#3d8b3d;">mî</span></td>
    <td><span style="background:#f1f9f1;color:#3d8b3d;">ḵā’</span></td>
    <td><span style="background:#f1f9f1;color:#3d8b3d;">ēl</span></td>
    </tr>
    <tr>
    <td><span style="background:#f1f9f1;color:#3d8b3d;">who</span></td>
    <td><span style="background:#f1f9f1;color:#3d8b3d;">is like</span></td>
    <td><span style="background:#f1f9f1;color:#3d8b3d;">god</span></td>
    </tr>
    </tbody>
    </table>
  </section>
  <section>
    <h3 class="green">result</h3>
    <p>therefore the following result：</p>
    <p><span style="color: #3d8b3d;">« <span style="background:#f1f9f1;color:#3d8b3d;">who</span> <span style="background:#f1f9f1;color:#3d8b3d;">is like</span> <span style="background:#f1f9f1;color:#3d8b3d;">god</span> ? »</span></p>
  </section>
  <section>
    <h3 class="green">conclusion</h3>
    <p>The archangel Michael confronts his opponents in the name of god by asking them this terrible question.</p>
  </section>
  </article>
</section>
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
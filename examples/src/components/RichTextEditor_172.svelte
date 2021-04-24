<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<h1 class="green">nom de l'archange Michel</h1>

<div class="notices green">
<p>En hébreu, le nom de l'<a href="https://fr.wikipedia.org/wiki/Michel_(archange)" title="https://fr.wikipedia.org/wiki/Michel (archange)">archange « Michel »</a> s'écrit: « <span style="color:#3d8b3d;"><ruby lang="he">מיכאל<rp>(</rp><rt>Mîḵā’ēl</rt><rp>)</rp></ruby></span> ».</p>
<p>Sa prononciation se situe entre le « Michel » du français et le « Mikaël » de l'anglais: « Mîḵā’ēl » selon la notation phonétique internationale.</p>
<p>Ci-dessous, un enregistrement audio de cette prononciation précise les choses.</p>
<p>Une analyse succinte de l'étymologie de cette dénomination détaille la signification de cette dénomination en hébreu.</p>
</div>

<h3 id="à-propos-du-nom-de-larchange-michel" class="green">à propos du nom de l'archange Michel</h3>

<h4 id="sens-en-hébreu" class="green">sens en hébreu</h4>

<p>Dans le texte original de la Bible en hébreu, le nom de l'archange « Michel » en français est « <ruby lang="he"><rp>)</rp>מיכאל<rt>Mîḵā’ēl</rt><rp>(</rp></ruby> ».</p>
<p>La notation « Mîḵā’ēl » vient de l'<a href="https://fr.wikipedia.org/wiki/Alphabet_phonétique_international" title="https://fr.wikipedia.org/wiki/Alphabet phonétique international">alphabet phonétique international</a> et représente le son suivant:</p>
<table>
<thead>
<tr>
<th><span hidden="">hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><audio controls="1" title="Prononciation de מיכאל en hébreu"><source src="https://francois-vidit.com/user/sites/docs/pages/01.home/05.mont-saint-michel/01.arch-michel/01.nom/prononciation_mihael.mp3" type="audio/mpeg">Votre navigateur ne supporte pas la lecture des balise <code>audio</code>.</audio></td>
</tr>
</tbody>
</table>

<h3 id="un-nom-qui-signifie-«-qui-est-comme-dieu-»" class="green">un nom qui signifie « qui est comme dieu? »</h3>

<p>« <ruby><span style="background:#f1f9f1;color:#3d8b3d;">מיכאל</span><rp>(</rp><rt><span style="background:#f1f9f1;color:#3d8b3d;">Mîḵā’ēl</span></rt><rp>)</rp></ruby> » peut se décomposer comme suit:</p>
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
<td><span style="background:#f1f9f1;color:#3d8b3d;">qui</span></td>
<td><span style="background:#f1f9f1;color:#3d8b3d;">ressemble</span></td>
<td><span style="background:#f1f9f1;color:#3d8b3d;">dieu</span></td>
</tr>
</tbody>
</table>

<p>soit le résultat suivant：</p>
<p class="no-puce"><span style="color: #3d8b3d;">« <span style="background:#f1f9f1;color:#3d8b3d;">qui</span> <span style="background:#f1f9f1;color:#3d8b3d;">ressemble</span> à <span style="background:#f1f9f1;color:#3d8b3d;">dieu</span> ? »</span></p>

<p>L'archange Michel affronte ses adversaires au nom de dieu en leur posant cette question terrible.</p>

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
<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:140 ANG:203  -->

<article>

<hgroup>
<h1 class="green">nom de l'archange Michel</h1>
<h2 class="green">qui est comme dieu?</h2>
</hgroup>

<div class="notices green">
<p>En hébreu, le nom de l'<a href="https://fr.wikipedia.org/wiki/Michel_(archange)" title="https://fr.wikipedia.org/wiki/Michel (archange)">archange « Michel »</a> s'écrit: « <span style="color:#3d8b3d;"><ruby lang="he">מיכאל<rp>(</rp><rt>Mîḵā’ēl</rt><rp>)</rp></ruby></span> ».</p>
<p>Sa prononciation se situe entre le « Michel » du français et le « Mikaël » de l'anglais: « Mîḵā’ēl » selon la notation phonétique internationale.</p>
<p>Ci-dessous, un enregistrement audio de cette prononciation précise les choses.</p>
<p>Une analyse succinte de l'étymologie de cette dénomination détaille la signification de cette dénomination en hébreu.</p>
</div>

<h2 class="green">à propos du nom de l'archange Michel</h2>

<section id="sens-en-hebreu">
<h3 class="green">sens en hébreu</h3>

<p>Dans le texte original de la Bible en hébreu, le nom de l'archange « Michel » en français est « <ruby lang="he">מיכאל<rp>(</rp><rt>Mîḵā’ēl</rt><rp>)</rp></ruby> ».</p>
</section>

<h3 class="green">prononciation en hebreu</h3>

<p>La notation « Mîḵā’ēl » vient de l'<a href="https://fr.wikipedia.org/wiki/Alphabet_phonétique_international" title="https://fr.wikipedia.org/wiki/Alphabet phonétique international">alphabet phonétique international</a> et représente le son suivant:</p>

<p class="no-puce"><audio controls title="Prononciation de מיכאל en hébreu"><source src="https://francois-vidit.com/user/sites/docs/pages/01.home/05.mont-saint-michel/01.arch-michel/01.nom/prononciation_mihael.mp3" type="audio/mpeg">Votre navigateur ne supporte pas la lecture des balise <code>audio</code>.</audio></p>

<h2 class="green">un nom qui signifie « qui est comme dieu? »</h2>

<h3 class="green">analyse</h3>

<p>« <ruby><span style="background:#f1f9f1;color:#3d8b3d;">מיכאל</span><rp>(</rp><rt><span style="background:#f1f9f1;color:#3d8b3d;">Mîḵā’ēl</span></rt><rp>)</rp></ruby> » peut se décomposer comme suit:</p>

<p>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:30px;float:left;text-align:center;">mî</span>
  <span style="background:#fff;min-width:10px;float:left;">&nbsp;</span>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:90px;float:left;text-align:center;">ḵā’</span>
  <span style="background:#fff;min-width:10px;float:left;">&nbsp;</span>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:40px;float:left;text-align:center;">ēl</span>
</p>
<p>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:30px;float:left;text-align:center;">qui</span>
  <span style="background:#fff;min-width:10px;float:left;">&nbsp;</span>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:90px;float:left;text-align:center;">ressemble</span>
  <span style="background:#fff;min-width:10px;float:left;">&nbsp;</span>
  <span style="background:#f1f9f1;color:#3d8b3d;min-width:40px;float:left;text-align:center;">dieu</span>
</p>

<h3>résultat</h3>

<p>soit le résultat suivant：</p>
<p><span style="color: #3d8b3d;">« <span style="background:#f1f9f1;color:#3d8b3d;">qui</span> <span style="background:#f1f9f1;color:#3d8b3d;">ressemble</span> à <span style="background:#f1f9f1;color:#3d8b3d;">dieu</span> ? »</span></p>

<h3 class="green">conclusion</h3>

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
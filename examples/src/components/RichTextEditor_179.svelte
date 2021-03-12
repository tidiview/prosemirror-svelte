<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="accueil"></div>
<div id="bubblecontainer" class="curtain-image flush-top-curtain">
<div class="curtain-image-image">
<div class="curtain-meta">

<h1></h1>        
<p id="curtain-button"><a href="/en" class="curtain-button-side" rel="nofollow bookmark"><span title="英語"><ruby lang="en">english<rt lang="fr">anglais</rt></ruby></span></a> <a class="curtain-button-center" href="#topofpage" rel="nofollow"><ruby lang="fr"><span title="french">français</span><rt lang="ja">フランス語</rt></ruby></a> <a class="curtain-button-side" href="/ja" rel="nofollow bookmark"><ruby lang="ja"><span title="japanese">日本語</span><rt lang="fr">japonais</rt></ruby></a></p>

<div style="text-align:center;width:42px;height:64px;margin:auto;">
<a href="#topofpage" class="topofpage" rel="nofollow"><svg class="svg-topofpage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 64"><path d="M3.55 16.627l17.413 19.215.037-.04.037.04L38.45 16.627 21 35.764 3.55 16.627z" fill="none" stroke="#fff" opacity="0.6" stroke-width="5.145" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
</div>
</div>
</div></div></div>
<span id="topofpage" class="curtain-content"></span>
<div id="blogue"></div>
<div id="curtain-blogue" class="modular-row callout" style="width: 100%;margin-top: -0.8rem;margin-left: 0;margin-bottom: 0;margin-right:0;padding-top: 6vh;padding-left: 0;padding-bottom: 2vh;padding-right: 0;background-color: #000;align-items: center;justify-content: center;text-align: center;">
</div>
<div id="docs"></div>
<div id="curtain-docs" class="modular-row showcase" style="
width: 100%;
margin-top: -0.8rem;
margin-left: 0;
margin-bottom: 0;
margin-right:0;
padding-top: 5vh;
pading-left: 0;
padding-bottom: 2vh;
padding-right: 0;
background-color: #efc94d;
align-items: center;
justify-content: center;
text-align: center;">
<a href="/docs/fr" rel="bookmark preload"><p style="max-width: 7vh;height: 7vh;line-height: 6.75vh;font-size: 4vh;text-align: center;margin-left: auto;margin-right: auto;margin-top: 2vh;border: none; background-color: crimson;border-radius: 50%;color:#efc94d;">des</p></a>
</div>
<div id="profil"></div>
<div id="curtain-profil" class="modular-row showcase" style="
width: 100%;
margin-top: -0.8rem;
margin-left: 0;
margin-bottom: 0;
margin-right:0;
padding-top: 5vh;
pading-left: 0;
padding-bottom: 2vh;
padding-right: 0;
background-color: #B7E2E6;
align-items: center;
justify-content: center;
text-align: center;">

<a href= "/profile/fr" rel="author me bookmark"><p style="max-width: 7vh;height: 7vh;line-height: 6.75vh;font-size: 4vh;text-align: center;margin-left: auto;margin-right: auto;margin-top: 2vh;border: none; background-color: crimson;border-radius: 50%;color:#E7E7E8;">un</p></a>
</div>
<div id="calendrier_en_temps_réel"></div>

<div id="contact"></div>
<div id="curtain-contact" class="modular-row showcase" style="padding-bottom: 20rem;">
<p>Vous pouvez me joindre en remplissant le formulaire ci-dessous:</p>
<form name="contact2"
action="/fr/home"
method="POST"
id="contact2"
class=" "
>
<div class="form-field   ">
<div class="form-label ">
<label class="inline" for="name"  >
Nom
<span class="required">*</span>
</label>
</div>
<div class="form-data "
data-grav-field="text"
data-grav-disabled="true"
data-grav-default="null"
>
<div class="form-input-wrapper  ">
<input
name="data[name]"
value=""
type="text"
class="curtain-contact-form"                                     id="name"                                                                         placeholder="Faîtes figurer votre nom"                                                                              autocomplete="on"                                                                 required="required"                                                               
/>
</div>
</div>
</div>
<div class="form-field   ">
<div class="form-label ">
<label class="inline" for="email"  >
Adresse électronique
<span class="required">*</span>
</label>
</div>
<div class="form-data "
data-grav-field="email"
data-grav-disabled="true"
data-grav-default="null"
>
<div class="form-input-wrapper  ">
<input
name="data[email]"
value=""
type="email"
class="curtain-contact-form"                                     id="email"                                                                        placeholder="Faîtes figurer votre adresse électronique"                                                                                                                                                                                                                        required="required"                                                                                                        
/>
            </div>

</div>
</div>

<div class="form-field   ">
<div class="form-label ">
<label class="inline" for="message"  >
Message
<span class="required">*</span>
</label>
</div>
<div class="form-data "
data-grav-field="textarea"
data-grav-disabled="true"
data-grav-default="null"
>
<div class="form-textarea-wrapper ">
<textarea
name="data[message]"
class="curtain-contact-form"                 id="message"                                                 placeholder="Rédigez votre message"                                                                                required="required"                                                                                        ></textarea>
</div>

</div>
</div>

<input type="hidden" name="__form-name__" value="contact2" />

<div class="buttons">

<button
class="button "

type="submit"

>
Valider
</button>
<button
class="button "

type="reset"

>
Annuler
</button>

</div>

<input type="hidden" name="__unique_form_id__" value="p3eAJMRskhq0aVgTmHjS" />  <input type="hidden" name="form-nonce" value="28f4251f5fb4adaf6be4513e20fabb93" />
</form>
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
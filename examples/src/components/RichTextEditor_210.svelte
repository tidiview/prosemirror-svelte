<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:179 JA:146 -->

<article>

<div id="home"></div>
<div id="bubblecontainer" class="curtain-image flush-top-curtain">

  <div class="curtain-image-image">

    <div class="curtain-meta">
      <section id="landing-curtain-h1">
        <h1 title="☆ Welcome to my personal page!">☆ Welcome to my personal page!</h1>

        <p id="curtain-button">
          <a href="/ja" class="curtain-button-side" rel="nofollow bookmark">
            <span title="japonais">
              <ruby lang="ja">
                日本語
                <rp>(</rp><rt lang="en">japanese</rt><rp>)</rp>
              </ruby>
            </span>
          </a> 
          <a class="curtain-button-center" href="#topofpage" rel="nofollow">
            <ruby lang="ja">
              <span title="英語">english</span>
              <rp>(</rp><rt lang="fr">anglais</rt><rp>)</rp>
            </ruby>
          </a> 
          <a class="curtain-button-side" href="/fr" rel="nofollow bookmark">
            <ruby lang="fr">
              <span title="フランス語">français</span>
              <rp>(</rp><rt lang="en">french</rt><rp>)</rp>
            </ruby>
          </a>
        </p>

        <div style="text-align:center;width:42px;height:64px;margin:auto;">
          <a href="#topofpage" class="topofpage" rel="nofollow">
            <svg class="svg-topofpage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 64"><path d="M3.55 16.627l17.413 19.215.037-.04.037.04L38.45 16.627 21 35.764 3.55 16.627z" fill="none" stroke="#fff" opacity="0.6" stroke-width="5.145" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </section>
    </div>
  </div>
  <span id="topofpage" class="curtain-content"></span>
</div>

<div id="blog"></div>
<div id="curtain-blogue" class="modular-row callout" style="width: 100%;margin-top: -0.8rem;margin-left: 0;margin-bottom: 0;margin-right:0;padding-top: 6vh;padding-left: 0;padding-bottom: 2vh;padding-right: 0;background-color: #000;align-items: center;justify-content: center;text-align: center;">
  <p style="line-height: 5vh;font-size: 4vh; text-align: center;max-height: 5vh;min-height: 3vh;max-width: 25vw;min-width: 15vw;margin-top: 3vh;margin-right: auto;margin-bottom: 2vh;margin-left: auto;display: block;color:#E7E7E8;">it's</p>

  <a href= "/blog/en" rel="bookmark preload">
    <p style="max-width: 7vh;height: 7vh;line-height: 6.75vh;font-size: 4vh;text-align: center;margin-left: auto;margin-right: auto;margin-top: 6vh;border: none; background-color: crimson;border-radius: 50%;color:#E7E7E8;">a</p>
  </a>
</div>

<div id="docs"></div>
<div id="curtain-docs" class="modular-row showcase" style="
width: 100%;
margin-top: -0.8rem;
margin-left: 0;
margin-bottom: 0;
margin-right:0;
padding-top: 5vh;
padding-left: 0;
padding-bottom: 2vh;
padding-right: 0;
background-color: #efc94d;
align-items: center;
justify-content: center;
text-align: center;">
  <a href="/docs/en" rel="bookmark preload">
    <p style="max-width: 7vh;height: 7vh;line-height: 6.75vh;font-size: 4vh;text-align: center;margin-left: auto;margin-right: auto;margin-top: 2vh;border: none; background-color: crimson;border-radius: 50%;color:#efc94d;"> </p>
  </a>
</div>

<div id="profile"></div>
<div id="curtain-profil" class="modular-row showcase" style="
width: 100%;
margin-top: -0.8rem;
margin-left: 0;
margin-bottom: 0;
margin-right:0;
padding-top: 5vh;
padding-left: 0;
padding-bottom: 2vh;
padding-right: 0;
background-color: #B7E2E6;
align-items: center;
justify-content: center;
text-align: center;">
  <a href= "/profile/en" rel="author me bookmark">
    <p style="max-width: 7vh;height: 7vh;line-height: 6.75vh;font-size: 4vh;text-align: center;margin-left: auto;margin-right: auto;margin-top: 2vh;border: none; background-color: crimson;border-radius: 50%;color:#E7E7E8;">a</p>
  </a>
</div>

<div id="real_time_schedule"></div>

<div id="contact"></div>
<div id="curtain-contact" class="modular-row showcase" style="padding-bottom: 20rem;">
  <h4>Contact</h4>

  <p>This is a contact form for my site:</p>

  <form name="contact2" action="/en/home" method="POST" id="contact2">
    <div class="form-field">

      <div class="form-label">
        <label class="inline" for="name">Name<span class="required">*</span></label>
      </div>

      <div class="form-data" data-grav-field="text" data-grav-disabled="true" data-grav-default="null">
        <div class="form-input-wrapper">
          <input name="data[name]" value="" type="text" class="curtain-contact-form" id="name" placeholder="Enter your name" autocomplete="on" required="required" />
        </div>
      </div>
    </div>

    <div class="form-field">
      <div class="form-label"><label class="inline" for="email">Email<span class="required">*</span></label>
      </div>
      <div class="form-data" data-grav-field="email" data-grav-disabled="true" data-grav-default="null">
        <div class="form-input-wrapper">
          <input name="data[email]" value="" type="email" class="curtain-contact-form" id="email" placeholder="Enter your email address" required="required" />
        </div>
      </div>
    </div>

    <div class="form-field">
      <div class="form-label">
        <label class="inline" for="message">Message<span class="required">*</span></label>
      </div>
      <div class="form-data" data-grav-field="textarea" data-grav-disabled="true" data-grav-default="null">
        <div class="form-textarea-wrapper">
          <textarea name="data[message]" class="curtain-contact-form" id="message" placeholder="Enter your message" required="required"></textarea>
        </div>
      </div>
    </div>

    <input type="hidden" name="__unique_form_id__" value="Y7aFReCZnWvEJMxI6b9L" />

    <div class="buttons">
      <button class="button" type="submit">Submit</button>
      <button class="button" type="reset">Reset</button>
    </div>

    <input type="hidden" name="__form-name__" value="contact2" />
    <input type="hidden" name="__unique_form_id__" value="Y7aFReCZnWvEJMxI6b9L" />
    <input type="hidden" name="__form-nonce__" value="f86f4ca5eafdd0a96009549d26916d7b" />

  </form>
</div>
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
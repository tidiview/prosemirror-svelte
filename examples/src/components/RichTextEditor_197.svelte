<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:166 JA:134  -->
<article>

<h1 class="green">Marly according to Pierre-Denis MARTIN</h1>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-1920.webp 1920w" type="image/webp"><img src="/https://francois-vidit.comuser/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-840.jpg" title="Pierre-Denis MARTIN, General View of Chateau de Marly, seen from the watering pool (1724)" alt="Pierre-Denis MARTIN, General View of Chateau de Marly, seen from the watering pool (1724)" class="class-70-img" width="700" height="1140" loading="eager" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/01.pierre-denis-martin_1/marly1724-1920.jpg 1920w"></picture><figcaption>Pierre-Denis MARTIN, General View of Chateau de Marly, seen from the watering pool (<time datetime="1724">1724</time>)</figcaption>
</figure>

<!-- Page 2 -->

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-840.webp 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-1280.webp 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-1600.webp 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-1920.webp 1920w" type="image/webp"><img src="/https://francois-vidit.comuser/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-840.jpg" title="Pierre-Denis MARTIN, General View of Chateau de Marly, seen from the watering pool (1723)" alt="Pierre-Denis MARTIN, General View of Chateau de Marly, seen from the watering pool (1723)" class="class-70-img" width="840" height="761" loading="eager" decoding="async" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-840.jpg 840w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-1280.jpg 1280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-1600.jpg 1600w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/04.marly/01.pierre-denis-martin/02.pierre-denis-martin_2/marly1723-1920.jpg 1920w"></picture><figcaption>Pierre-Denis MARTIN, Vue générale du Château de Marly, prise de l’abreuvoir (<time datetime="1723">1723</time>)</figcaption>
</figure>

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
<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div class="list-blog-header">
<div class="list-blog-date">
<p><span>4</span>日<i class="fa fa-calendar-o fa-2x"></i></p>
<p>6月</p>
<p><span>2016</span></p>
</div>
<h1 lang="ja"><a href="/blog/ja/iehamotomoto" rel="bookmark">自家製</a></h1>
</div>
<div class="list-blog-padding lang-font" lang="ja">
<div class="notices red">
<p>この中国古代の文書で、「家」から「自分」を考えるのだとしているのが特徴。  </p>
</div>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"/></svg></span>
家はもともと<ruby>斉<rp>(</rp><rt>ととの</rt><rp>)</rp></ruby>っているのだ。  </p>
<p>わが身の<ruby>好<rp>(</rp><rt>こうお</rt><rp>)</rp></ruby>が<ruby>偏<rp>(</rp><rt>かたよ</rt><rp>)</rp></ruby>っているから斉わないだけのことだ。  </p>
<p>国はもともと治まっているのだ。</p>
<p>わが身の<ruby>好<rp>(</rp><rt>こうお</rt><rp>)</rp></ruby>が偏っているから治まらないだけのことだ。  </p>
<p>天下はもともと泰平なのだ。  </p>
<p>わが身の<ruby>好<rp>(</rp><rt>こうお</rt><rp>)</rp></ruby>が<ruby>偏<rp>(</rp><rt>かたよ</rt><rp>)</rp></ruby>っているから泰平でないだけのことだ。 <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"/></svg></span>  </p>

<p>（証学編）</p>
<div class="notices red">
<dl>
<dt>引用:</dt>
<dd>
小島毅、「<a href="https://www.amazon.co.jp/朱子学と陽明学-ちくま学芸文庫-小島-毅/dp/4480095691" title="https://www.amazon.co.jp/朱子学と陽明学-ちくま学芸文庫-小島-毅/dp/4480095691">朱子学と陽明学</a>」、122貢</dd>
</dl>
</div>
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
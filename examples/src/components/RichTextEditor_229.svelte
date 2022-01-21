<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:229 rimbaud -->

<article>

<header>
  <p><time datetime="2017-10-20">２０１７年１０月２０日</time></p>
</header>

<h1>自我変容</h1>

<div class="notices blue">
  <p>＜<ruby lang="ja">私<rp>(</rp><rt lang="fr">Je</rt><rp>)</rp></ruby>＞ <ruby lang="ja">は<rp>(</rp><rt lang="fr">est</rt><rp>)</rp></ruby> <ruby lang="ja">一個<rp>(</rp><rt lang="fr">un</rt><rp>)</rp></ruby> の <ruby lang="ja">他者<rp>(</rp><rt lang="fr">autre</rt><rp>)</rp></ruby> なのです</p>
  <p>この一文句を書いたのは、 詩人<a href="https://ja.wikipedia.org/wiki/アルチュール・ランボー" title="https://ja.wikipedia.org/wiki/アルテュール・ランボー"><ruby lang="ja">アルテュール<rp>(</rp><rt lang="fr">Arthur</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ランボー<rp>(</rp><rt lang="fr">Rimbaud</rt><rp>)</rp></ruby></a>です。</p>
  <p>「フランス的思考」という本の中、井石洋二郎氏がある解釈を提供しています。</p>
</div>

<h2 class="blue"><cite> « Je » est un autre </cite></h2>

<p>という一文である。</p>
<p><ruby lang="ja">ランボー<rp>(</rp><rt lang="fr">Rimbaud</rt><rp>)</rp></ruby> は続けて</p>
<p>木材がヴァイオリンになったとしてもしかたのないことです。</p>
<p>と述べているので、</p>
<p>この文は第一義的には</p>
<p>自分はもはやこれまでの自分ではない、自分はまったくの別人として生まれ変わった</p>
<p>という意味に解釈できるが、それだけのことであるならば、ここは通常の文法に従って « Je suis un autre » といえば済むところであろう。</p>
<p>しかし、彼は « Je » という主語に « est » という三人称単数形の動詞を接続させることで、あえて「私」を対象化してみせたのであり、このことの意味を <ruby>等<rp>(</rp><rt>とう</rt><rp>)</rp>閑<rp>(</rp><rt>かん</rt><rp>)</rp>視<rp>(</rp><rt>し</rt><rp>)</rp></ruby> するわけにはいかない。</p>
<p>この発想は明らかに、デカルト的な近代自我を根源的な問い直しに付すものである。</p>
<p>というのも、</p>
<p><span style="color: #28a1c5;">＜<ruby lang="ja">私<rp>(</rp><rt lang="fr">Je</rt><rp>)</rp></ruby>＞ <ruby lang="ja">は<rp>(</rp><rt lang="fr">est</rt><rp>)</rp></ruby> <ruby lang="ja">一個<rp>(</rp><rt lang="fr">un</rt><rp>)</rp></ruby> の <ruby lang="ja">他者<rp>(</rp><rt lang="fr">autre</rt><rp>)</rp></ruby> なのです </span></p>
<p>から。</p>

<aside>
  <div class="notices blue">
    <p>引用：井石洋二郎、「<a href="https://www.amazon.co.jp/フランス的思考―野生の思考者たちの系譜-中公新書-石井-洋二郎/dp/4121020871" title="https://www.amazon.co.jp/フランス的思考―野生の思考者たちの系譜-中公新書-石井-洋二郎/dp/4121020871">フランス的思考</a>」</p>
  </div>
</aside>

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
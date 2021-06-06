<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:173 ANG:204  -->
<article>

<hgroup>
<h1 class="yellow"><cite>ヨハネの黙示録</cite></h1>
<h2 class="yellow">天で戦いが起こった</h2>
</hgroup>

<div class="notices yellow">
<p>ここでは、巡礼としての<a href="https://ja.wikipedia.org/wiki/モン・サン＝ミシェル" title="https://ja.wikipedia.org/wiki/モン・サン＝ミシェル"><ruby lang="ja">モン<rp>(</rp><rt lang="fr">Mont</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>サン<rp>(</rp><rt lang="fr">Saint</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>ミシェル<rp>(</rp><rt lang="fr">Michel</rt><rp>)</rp></ruby></a>の元にある、<a href="https://ja.wikipedia.org/wiki/ミカエル" title="https://ja.wikipedia.org/wiki/ミカエル">大天使ミカエル</a>信仰の史料をご紹介します。</p>
<p><a href="https://ja.wikipedia.org/wiki/ミカエル" title="https://ja.wikipedia.org/wiki/ミカエル">大天使ミカエル</a>が<a href="https://ja.wikipedia.org/wiki/新約聖書" title="https://ja.wikipedia.org/wiki/新約聖書">新約聖書</a>に唯一表れるのは<a href="https://ja.wikipedia.org/wiki/ヨハネの黙示録" title="https://ja.wikipedia.org/wiki/ヨハネの黙示録">ヨハネ黙示録</a>の真ん中に位置付けられている。</p>
<p>この第十二章文書は、「<a href="/docs/ja/mont-saint-michel/arch-michel/apocalypse#bataille" title="天の戦い" id="renvoi_bataille">天の闘い</a>」とも呼ばれているとおり、恐ろしい戦いが起こされます。</p>
<p>間接的な語りより、<a href="https://ja.wikipedia.org/wiki/新共同訳聖書" title="https://ja.wikipedia.org/wiki/新共同訳聖書">新共同訳</a>から引用されている以下の文書を自分でお読みになることをお勧めします。</p>
</div>

<h2 class="yellow"><cite>ヨハネの黙示録</cite>の文書においての大天使</h2>

<ol class="doc">
  <li value="01">また、天に大きなしるしが現れた。
  一人の女が身に太陽をまとい、月を足の下にし、頭には十二の星の冠をかぶっていた。</li>
  <li value="02">女は身ごもっていたが、子を産む痛みと苦しみのため叫んでいた。</li>
  <li value="03">また、もう一つのしるしが天に現れた。見よ、火のように赤い大きな竜である。
  これには七つの頭と十本の角があって、その頭に七つの冠をかぶっていた。</li>
  <li value="04">竜の尾は、天の星の三分の一を<ruby>掃<rp>(</rp><rt>は</rt><rp>)</rp></ruby>き寄せて、地上に投げつけた。
  そして、竜は子を産もうとしている女の前に立ちはだかり、産んだら、その子を食べてしまおうとしていた。</li>
  <li value="05">女は男の子を産んだ。
  この子は、鉄の杖ですべての国民を治めることになっていた。
  子は神のもとへ、その玉座へ引き上げられた。</li>
  <li value="06">女は荒れ野へ逃げ込んだ。
  そこには、この女が<time datetime="P1260D">千二百六十日の間</time>養われるように、神の用意された場所があった。</li>
  <li data-id="bataille" value="07">さて、天で戦いが起こった。
  <a href="#renvoi-bataille" title="#renvoi-bataille"><mark>ミカエル</mark></a>とその使いたちが、竜に戦いを<ruby>挑<rp>(</rp><rt>いと</rt><rp>)</rp></ruby>んだのである。
  竜とその使いたちも応戦したが、</li>
  <li value="08">勝てなかった。
  そして、もはや天には彼らの居場所がなくなった。</li>
  <li value="09">この巨大な竜、年を<ruby>経<rp>(</rp><rt>へ</rt><rp>)</rp></ruby>た蛇、悪魔とかサタンとか呼ばれるもの、全人類を惑わす者は、投げ落とされた。
  地上に投げ落とされたのである。
  その使いたちも、もろともに投げ落とされた。</li>
  <li value="10">わたしは、天で大きな声が次のように言うのを、聞いた。</li>
  <li><p class="conversation">「今や、我々の神の救いと力と支配が現れた。</p></li>
  <li><p class="conversation">神のメシアの権威が現れた。</p></li>
  <li><p class="conversation">我々の兄弟たちを告発する者、</p></li>
  <li><p class="conversation">昼も夜も我々の神の御前で彼らを告発する者が、</p></li>
  <li><p class="conversation">投げ落とされたからである。</p></li>
  <li value="11"><p class="conversation">兄弟たちは、小羊の血と</p></li>
  <li><p class="conversation">自分たちの証しの言葉とで、</p></li>
  <li><p class="conversation">彼に打ち勝った。</p></li>
  <li><p class="conversation">彼らは、死に至るまで命を惜しまなかった。</p></li>
  <li value="12"><p class="conversation">このゆえに、もろもろの天と、</p></li>
  <li><p class="conversation">その中に住む者たちよ、喜べ。</p></li>
  <li><p class="conversation">地と海とは不幸である。</p></li>
  <li><p class="conversation">悪魔は怒りに燃えて、</p></li>
  <li><p class="conversation">お前たちのところへ<ruby>降<rp>(</rp><rt>くだ</rt><rp>)</rp></ruby>って行った。</p></li>
  <li><p class="conversation">残された時が少ないのを知ったからである。」</p></li>
  <li value="13">竜は、自分が地上へ投げ落とされたと分かると、男の子を産んだ女の後を追った。</li>
  <li value="14">しかし、女には大きな<ruby>鷲<rp>(</rp><rt>わし</rt><rp>)</rp></ruby>の翼が二つ与えられた。
  荒れ野にある自分の場所へ飛んで行くためである。
  女はここで、蛇から逃れて、<time datetime="P364D">一年</time>、その後<time datetime="P728D">ニ年</time>、またその後<time datetime="P183D">半年の間</time>、養われることになっていた。</li>
  <li value="15">蛇は、口から川のように水を女の後ろに吐き出して、女を押し流そうとした。</li>
  <li value="16">しかし、大地は女を助け、口を開けて、竜が口から吐き出した川を飲み<ruby>干<rp>(</rp><rt>ほ</rt><rp>)</rp></ruby>した。</li>
  <li value="17">竜は女に対して激しく怒り、その子孫の残りの者たち、すなわち、神の掟を守り、イエスの証しを守りとおしている者たちと戦おうとして出て行った。</li>
  <li value="18">そして、竜は海辺の砂の上に立った。</li>
</ol>

<footer>
  <p><span style="color: #df8a13;"><cite>黙示録</cite>、第１２章、１節～１８節、新共同訳。</span></p>
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
<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="yellow">ヨハネの黙示録</h1>
<div class="notices yellow">
<p>ここでは、巡礼としての<a href="https://ja.wikipedia.org/wiki/モン・サン＝ミシェル" title="https://ja.wikipedia.org/wiki/モン・サン＝ミシェル"><ruby lang="ja">モン<rp>(</rp><rt lang="fr">Mont</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>サン<rp>(</rp><rt lang="fr">Saint</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>ミシェル<rp>(</rp><rt lang="fr">Michel</rt><rp>)</rp></ruby></a>の元にある、<a href="https://ja.wikipedia.org/wiki/ミカエル" title="https://ja.wikipedia.org/wiki/ミカエル">大天使ミカエル</a>信仰の史料をご紹介します。<br>
<a href="https://ja.wikipedia.org/wiki/ミカエル" title="https://ja.wikipedia.org/wiki/ミカエル">大天使ミカエル</a>が<a href="https://ja.wikipedia.org/wiki/新約聖書" title="https://ja.wikipedia.org/wiki/新約聖書">新約聖書</a>に唯一表れるのは<a href="https://ja.wikipedia.org/wiki/ヨハネの黙示録" title="https://ja.wikipedia.org/wiki/ヨハネの黙示録">ヨハネ黙示録</a>の真ん中に位置付けられている。<br>
この第１２章文書は、「<a href="/docs/ja/mont-saint-michel/arch-michel/apocalypse#bataille" title="天の戦い" id="renvoi_bataille">天の闘い</a>」とも呼ばれているとおり、恐ろしい戦いが起こされます。<br>
間接的な語りより、<a href="https://ja.wikipedia.org/wiki/新共同訳聖書" title="https://ja.wikipedia.org/wiki/新共同訳聖書">新共同訳</a>から引用されている以下の文書を自分でお読みになることをお勧めします。</p></div>
<table>
<thead>
<tr><th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th></tr>
</thead>
<tbody>
<tr><td><sup>０１</sup></td>
<td>また、天に大きなしるしが現れた。
一人の女が身に太陽をまとい、月を足の下にし、頭には１２の星の冠をかぶっていた。</td>
<tr><td><sup>０２</sup></td>
<td>女は身ごもっていたが、子を産む痛みと苦しみのため叫んでいた。</td>
<tr>
<td><sup>０３</sup></td>
<td>また、もう一つのしるしが天に現れた。見よ、火のように赤い大きな竜である。
これには７つの頭と１０本の角があって、その頭に７つの冠をかぶっていた。</td>
<tr><td><sup>０４</sup></td>
<td>竜の尾は、天の星の三分の一を<ruby>掃<rp>(</rp><rt>は</rt><rp>)</rp></ruby>き寄せて、地上に投げつけた。
そして、竜は子を産もうとしている女の前に立ちはだかり、産んだら、その子を食べてしまおうとしていた。</td>
<tr><td><sup>０５</sup></td>
<td>女は男の子を産んだ。
この子は、鉄の杖ですべての国民を治めることになっていた。
子は神のもとへ、その玉座へ引き上げられた。</td>
<tr><td><sup>０６</sup></td>
<td>女は荒れ野へ逃げ込んだ。
そこには、この女が１２６０日の間養われるように、神の用意された場所があった。</td>
<tr><td><sup><a href="#renvoi_bataille" title="天の戦い" id="bataille"><span style="color: #df8a13;">０７</span></a></sup></td>
<td>さて、天で戦いが起こった。
<span style="color: #df8a13;">ミカエル</span>とその使いたちが、竜に戦いを<ruby>挑<rp>(</rp><rt>いと</rt><rp>)</rp></ruby>んだのである。
竜とその使いたちも応戦したが、</td>
<tr><td><sup>０８</sup></td>
<td>勝てなかった。
そして、もはや天には彼らの居場所がなくなった。</td>
<tr><td><sup>０９</sup></td>
<td>この巨大な竜、年を<ruby>経<rp>(</rp><rt>へ</rt><rp>)</rp></ruby>た蛇、悪魔とかサタンとか呼ばれるもの、全人類を惑わす者は、投げ落とされた。
地上に投げ落とされたのである。
その使いたちも、もろともに投げ落とされた。</td>
<tr><td><sup>１０</sup></td>
<td>わたしは、天で大きな声が次のように言うのを、聞いた。<br>
「今や、我々の神の救いと力と支配が現れた。<br>
神のメシアの権威が現れた。<br>
我々の兄弟たちを告発する者、<br>
昼も夜も我々の神の御前で彼らを告発する者が、<br>
投げ落とされたからである。</td>
<tr><td><sup>１１</sup></td>
<td>兄弟たちは、小羊の血と<br>
自分たちの証しの言葉とで、<br>
彼に打ち勝った。<br>
彼らは、死に至るまで命を惜しまなかった。</td>
<tr><td><sup>１２</sup></td>
<td>このゆえに、もろもろの天と、<br>
その中に住む者たちよ、喜べ。<br>
地と海とは不幸である。<br>
悪魔は怒りに燃えて、<br>
お前たちのところへ<ruby>降<rp>(</rp><rt>くだ</rt><rp>)</rp></ruby>って行った。<br>
残された時が少ないのを知ったからである。」</td>
<tr><td><sup>１３</sup></td>
<td>竜は、自分が地上へ投げ落とされたと分かると、男の子を産んだ女の後を追った。</td>
<tr><td><sup>１４</sup></td>
<td>しかし、女には大きな<ruby>鷲<rp>(</rp><rt>わし</rt><rp>)</rp></ruby>の翼が２つ与えられた。
荒れ野にある自分の場所へ飛んで行くためである。
女はここで、蛇から逃れて、１年、その後２年、またその後半年の間、養われることになっていた。</td>
<tr><td><sup>１５</sup></td>
<td>蛇は、口から川のように水を女の後ろに吐き出して、女を押し流そうとした。</td>
<tr><td><sup>１６</sup></td>
<td>しかし、大地は女を助け、口を開けて、竜が口から吐き出した川を飲み<ruby>干<rp>(</rp><rt>ほ</rt><rp>)</rp></ruby>した。</td>
<tr><td><sup>１７</sup></td>
<td>竜は女に対して激しく怒り、その子孫の残りの者たち、すなわち、神の掟を守り、イエスの証しを守りとおしている者たちと戦おうとして出て行った。</td>
<tr><td><sup>１８</sup></td>
<td>そして、竜は海辺の砂の上に立った。</td></tr>
</tbody>
</table>
<p><span style="color: #df8a13;">ヨハネによる福音、第１２章、１～１８節（新共同訳）</span></p>
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
<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="red">ラトナ</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone_700x525.webp 700w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone_700x525.jpg" alt="ヴェルサイユ宮殿の庭園にある、ラトナの泉水と花壇" title="ヴェルサイユ宮殿の庭園にある、ラトナの泉水と花壇" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/02.jardins/01.latone/latone_700x525.jpg 700w"></picture><figcaption>ラトナの怒りで池の生き物に変身されたリュキアの農夫たち</figcaption></figure>
<div class="notices red">
<p>「<ruby lang="ja">ラトナの噴水<rp>(</rp><rt lang="fr">la&#160;Fontaine&#160;de&#160;Latone</rt><rp>)</rp></ruby>の手前で一休みして、ラトナ、周りにある彫刻をみよ。
<ruby lang="ja">王の散歩道<rp>(</rp><rt>l&#39Allée&#160;Royale</rt><rp>)</rp></ruby>、<ruby>アポロンの噴水<rp>(</rp><rt lang="fr">La&#160;Fontaine&#160;d'Apollon</rt><rp>)</rp></ruby>、その向こうの運河を見渡そう」。<br>
「<ruby lang="ja">ヴェルサイユ庭園案内法<rp>(</rp><rt lang="fr">Manière&#160;de&#160;montrer&#160;les&#160;jardins&#160;de&#160;Versailles</rt><rp>)</rp></ruby>」の第２節で、<a href="https://ja.wikipedia.org/wiki/ルイ14世_(フランス王)" title="https://ja.wikipedia.org/wiki/ルイ１４世 (フランス王)"><ruby lang="ja">ルイ<rp>(</rp><rt lang="fr">Louis</rt><rp>)</rp>十四世<rp>(</rp><rt>XIV</rt><rp>)</rp></ruby></a> が書いた通り、宮殿の西正面から、中央軸線を沿って、<ruby lang="ja">水の花壇<rp>(</rp><rt lang="fr">le&#160;Parterre&#160;d'&#160;Eau</rt><rp>)</rp></ruby>を得て、少しづつ、地平線の展開を楽しみながら、<ruby lang="ja">ラトナの泉水と花壇<rp>(</rp><rt lang="fr">le&#160;Bassin&#160;et&#160;le&#160;Parterre&#160;de&#160;Latone</rt><rp>)</rp></ruby>が見えて来る。<br>
<a href="https://ja.wikipedia.org/wiki/ユーノー" title="https://ja.wikipedia.org/wiki/ユーノー"><ruby lang="ja">ユノー<rp>(</rp><rt lang="la">Juno</rt><rp>)</rp></ruby>女神</a>の迫害を受けながら、太陽神である<a href="https://ja.wikipedia.org/wiki/アポローン" title="https://ja.wikipedia.org/wiki/アポローン"><ruby lang="ja">アポロン<rp>(</rp><rt lang="la">Apollon</rt><rp>)</rp></ruby></a>とお月様女神の<a href="https://ja.wikipedia.org/wiki/ディアナ" title="https://ja.wikipedia.org/wiki/ディアナ"><ruby lang="ja">ディアナ<rp>(</rp><rt lang="la">Diane</rt><rp>)</rp></ruby></a>を生むことだった<a href="https://ja.wikipedia.org/wiki/レートー" title="https://ja.wikipedia.org/wiki/レートー"><ruby lang="ja">ラトナ<rp>(</rp><rt lang="la">Latone</rt><rp>)</rp></ruby></a>と<a href="https://ja.wikipedia.org/wiki/リュキア" title="https://ja.wikipedia.org/wiki/リュキア"><ruby lang="ja">リュキア<rp>(</rp><rt lang="la">Lycia</rt><rp>)</rp></ruby></a>の農夫たちで出来ている泉水である。<br>
<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス"><ruby lang="ja">オウィディウス<rp>(</rp><rt lang="la">Ovidius</rt><rp>)</rp></ruby></a> が著わした「<a href="https://ja.wikipedia.org/wiki/変身物語" title="https://ja.wikipedia.org/wiki/変身物語"><ruby lang="ja">変身物語<rp>(</rp><rt lang="la">Metamorphoseon</rt><rp>)</rp></ruby></a>」に合わせて、その対立をより身近くすることが出来るのであろう。</p>
</div>
<h2 class="red">変身物語においてのラトナ</span></h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>３３３</sup></td>
<td>これは、あのラトナ女神の祭壇です。
王妃ユノーによってこの世界から閉め出され、かつてはふわりと海に浮いていたあのデロスの浮き島が、その願いを聞いてやっと受けいれた、あの女神の祭壇です。
この島で、ラトナ女神は、オリーブと<ruby>棕<rp>(</rp><rt>しゅ</rt><rp>)</rp>櫚<rp>(</rp><rt>ろ</rt><rp>)</rp></ruby>によりかかって、ふたりのお子を生んだのです。
ユピテルの正妻ユノーからすれば、憎い恋仇の子供たちでした。
母となった女神はユノーの怒りを避けて、この島から立ち去ったといいます。
神たるふたりのお子を、しかとその胸に抱いていたとのことです。</td></tr>
<tr><td></td>
<td>
さて、怪物キマイラの故郷であるリュキアヘたどりついた女神でしたが、おりしも、堪えがたい日さしが田野を焼いています。</td></tr>
<tr><td><sup>３４０</sup></td>
<td>長い幸労に疲れはてた女神は照りつける熱さに、<ruby>喉<rp>(</rp><rt>のど</rt><rp>)</rp></ruby>の喝きを訴えました。
両の乳房も、むさぼり飲む子供たちに吸いつくされた。</td></tr>
<tr><td></td>
<td>
と、たまたま、谷底に、ほどよい大きさの潮が見えました。
そこでは、農夫たちが、茂った柳の小枝や、<ruby>藺<rp>(</rp><rt>い</rt><rp>)</rp>草<rp>(</rp><rt>ぐさ</rt><rp>)</rp></ruby>や、沼地につきものの<ruby>菅<rp>(</rp><rt>すけ</rt><rp>)</rp></ruby>を刈り集めています。
ラトナはそこヘ近づくと、地面に膝をつきました。
冷たい水をすくって飲もうとしたのです。
が、農夫たちの群が、そうはさせまいとするのです。
そんな百姓たちに、女神はこういいました。</td></tr>
<tr><td></td>
<td>
「どうして、わたしに水を飲ませないのですか。
水は、万人に共有の<ruby>賜<rp>(</rp><rt>たま</rt><rp>)</rp>物<rp>(</rp><rt>もの</rt><rp>)</rp></ruby>です。
日の光も、大気も、きよらかな水も、自然はこれらを個人の所有物とはしていないのです。
でも、お願いいたします、どうか、その恵みを受けられますように。
この水で、私の手足や疲れたからだを洗おうというのではありません。
ただ、喝きを静めたいだけなのです。
こういっているわたしの口にも、もう水分というものがありません。
<ruby>喉<rp>(</rp><rt>のど</rt><rp>)</rp></ruby>はからからになって、声も出ないありさまです。
ひと口の水が、わたしは<ruby>甘露<rp>(</rp><rt>ネクタル</rt><rp>)</rp></ruby>ともなりましょう。
水と同時に、命を授かったのだといえるのです。
ですから、どうか水と生命とを！
この子供たちのことも、お考えください！
この胸に抱かれて、かわいい腕をさしのべています」</td></tr>
<tr><td></td>
<td>
そのとき、ちょうど、みどりごたちは、腕をさし出していたのです。</td></tr>
<tr><td></td>
<td>
女神のもの柔らかな言葉に動かされないものが、ありえたでしょうか。
けれども、この農夫たちは、頑として女神の願いをはねっけました。
これでも立ち去らないのかと、威嚇を加え、おまけに、悪罵をあびせかけます。
そればかりではなく、足や手で池の水をかき乱し、意地悪くあちこちへ跳びはねて、水底から柔らかい泥をかきたてたりするのです。
女神も、いまは、渇きよりも怒りが先に立ちました。
もう、懇願する気にもなれなかったし、神にふさわしくないような言葉を口にすることにも堪えられません。
両手を高くさしあげると、こういったのです。</td></tr>
<tr><td></td>
<td>
「お前たちのその池に、いつまでも<ruby>佇<rp>(</rp><rt>ただす</rt><rp>)</rp></ruby>んでいることです！」</td></tr>
<tr><td></td>
<td>
女神の願いは実現しました。
彼らには、水のなかに住んでいることが、喜びとなったのです。
全身を水の底に沈めるかとおもうと、頭だけを突き出したり、水面を泳いたりします。
池の堤に坐りこむかとおもえば、再び冷たい水に跳びこんだりもします。
が、<ruby>忌<rp>(</rp><rt>い</rt><rp>)</rp></ruby>まわしい舌を駆使して、口論にふけっていることだけは、いまも変わりありません。
恥も外聞も捨て、水の下にいてさえ悪態をつこうとしています。
声もしがわれ、<ruby>喉<rp>(</rp><rt>のど</rt><rp>)</rp></ruby>はふくれあがっているのです。
たえず毒づいていることで、口は大きく裂けひろがっています。
醜い頭をのばしますが、頸があるとはおもえせん。
背中は緑色で、からだの大部分をなしている腹は、白いのです。
こうして泥水のなかで跳びはねている――これが、蛙という新しい生き物なのです。 <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"/></svg></span></p></td></tr>
</tbody>
</table>
<p><span style="color: #b52b27;">オウィディウス、変身物語、第６巻より</span></p>
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
<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<p><span>１２</span>日<i class="fa fa-calendar-o fa-2x"></i></p>
<p>２月</p>
<p><span>２０２０年</span></p>
<h1 class="blue"><a href="/blog/ja/diotime/page:1" rel="bookmark">ディオティマによる愛</a></h1>
<div class="notices blue">
<p>プラトンの『饗宴』において、宴に集まった人々は、<ruby>愛<rp>(</rp><rt>エロス</rt><rp>)</rp></ruby>の意義について議論を交わす。<br />
そこで<a href="#note_socrate" title="ソクラテス" id="socrate">ソクラテス</a>は、自分が若かった頃に、予言者で巫女でもあった<a href="#note_diotime" title="ディオティマ" id="diotime">ディオティマ</a>から「愛の哲学」を教えられたと述べる。<br />
以下にソクラテスはディオティマに愛についていろいろ聞こうとしている。</p>
</div>
<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>【ソクラ<wbr>テス】</td>
<td><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewbox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span> — 『彼の父と母とは誰ですか』</td>
</tr>
<tr>
<td></td>
<td></td>
<td>と私は言った。</td>
</tr>
<tr>
<td><sup>203b</sup></td>
<td>【ディオ<wbr>ティマ】</td>
<td>— 『それをお話しすると少々長くなりますが、しかしそれでもあなたのために話しましょう。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>つまり、アプロディテが誕生した時に、その他の神々と一緒に、メチスの息子の<a id="poros" href="#note_poros">ポロス</a>も誕生祝いをやっていたのです。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>食事が終った後に、<a id="penia" href="#note_penia">ペニア</a>が、たいへんな御馳走だったので、物乞いをしにやってきて、戸口のところにいたのです。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>すると、ポロスが<a id="nectar" href="#note_nectar">ネクタル</a>に酔って——というのは酒はまだありませんでしたから——ゼウスの園にはいりこんで、参っていたものだから、眠りこみました。</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><sup>203c</sup></td>
<td></td>
<td>で、ペニアは自分が貧乏なので、子どもをポロスから設けようと企んで、彼に添い寝をして、エロスをみごもったのです。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>実にこのためにまたエロスはアプロディテの従者とも下僕ともなったのです、それはあの女神の誕生日を祝う祭りに生まれたからであり、また同時に<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp>来<rp>(</rp><rt>らい</rt><rp>)</rp></ruby>美しいものの愛人であるところに、アプロディテが美しい神であるときているからなのです。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>で、ポロスとペニアとの間の息子であるから、エロスは次ぎのような運命におかれているのです。</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><sup>203d</sup></td>
<td></td>
<td>第一に常に貧乏です、そして多くの人々の思っているように、柔かくて美しいどころか、堅くて、かさかさしていて、<ruby>跳<rp>(</rp><rt>は</rt><rp>)</rp>足<rp>(</rp><rt>だし</rt><rp>)</rp></ruby>で、宿なしで、いつも大地に寝る者、寝床のない者、戸口や路上で露天の下に眠る者で、母の本性を受けて常に欠乏の同居人なのです。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>しかし他方、父に倣って美しいものや善いものを窺う者であり、勇敢で、<ruby>我<rp>(</rp><rt>む</rt><rp>)</rp>武<rp>(</rp><rt>が</rt><rp>)</rp>者<rp>(</rp><rt>しゃ</rt><rp>)</rp>羅<rp>(</rp><rt>ら</rt><rp>)</rp></ruby>で、精力的で、巧みな<ruby>狩人<rp>(</rp><rt>かりゅうど</rt><rp>)</rp></ruby>で、常に策を編み出す者です、また叡智の欲求者で、多策で、全生涯を通じて<a id="philosopher" href="#note_philosopher">知恵を愛求する</a>者、また巧みな魔術師、調剤師、専門家です。</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><sup>203e</sup></td>
<td></td>
<td>そして性来不死であるということも、可死的であるということもないと追伸しなければならない。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>一日のうちに花咲き、生きている時もあるが、死んでいる時もある、しかし父の本性によって、良策をうる時は、再び生きかえります。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>しかし手に入れられたものはいつも洩れ出ています、従ってエロスは決して貧乏でもなければ、富裕でもありません、</td>
</tr>
<tr>
<td></td>
<td></td>
<td>また他方知恵と愚味との中間にあります。』 <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewbox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></td>
</tr>
<tr>
<td><sup>204a</sup></td>
<td>【ディオ<wbr>ティマ】</td>
<td> — 『それはこういう事情があるからです。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>神々のうち誰一人知恵を愛求されはしない、また知者になることを欲されもしないのです——というのは知者なのですから——。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>また他に知者があれば、その人も知恵を愛求しはしない。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>また他方において愚味な人々は知恵を愛求しもしなければ、知者となることを欲しもしない。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>というのは愚味が始末の悪いものであるのは、ちょうとこの点すなわち美しいものでも善いものでも思慮のあるものでもないのに、自分では申分のない者だと思っている点にあるのですからね。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>だから欠けているものであると思っていない者は欠いていると思っていないものを欲することはないのです』</td>
</tr>
<tr>
<td></td>
<td>【ソクラ<wbr>テス】</td>
<td>— 『それなら、ディオティマ、知恵を愛求する者たちというのは誰ですか、もし知恵のある者たちも愚味な者たちもそうでないとすれば』</td>
</tr>
<tr>
<td></td>
<td></td>
<td>と私は言った。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>と、彼女は言った</td>
</tr>
<tr>
<td></td>
<td>【ディオ<wbr>ティマ】</td>
<td>— 『そのことなら、もう子どもにさえも明らかですよ。つまりこれら両方の者たちの中間の者たちで、エロスもまたそれらのうちの一人でしょう。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>というのは知恵は最も美しいものの一つですが、エロスは美しいものについての恋です、</td>
</tr>
<tr>
<td></td>
<td></td>
<td>従って必然にエロスは愛知者ということになり、愛知者であるがゆえに、知者と愚者との中間者であるということになりますね。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>そして彼にとってはそれらのことの原因もその生れにあるのです。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>というのは知恵があって策のある父と知恵がなくて策のない母との息子ですからね。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>ともかく、この精霊の本性は、愛するソクラテス、以上のものです。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>しかしあなたがこれこれのものだと思われたエロスについて申しますと、あなたがそう思うことになったのは何も不思議なことじゃありませんよ。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>あなたは、おっしゃったことから推測してみると、恋される者がエロスで、恋する者がではないとお思いになったようですね。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>そのためにあなたにはエロスが非常に美しい者と見えることになったのだと思います。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>というのは恋すべき者は本当に美しくて柔かで、全で、最も至福なものですからね。</td>
</tr>
<tr>
<td></td>
<td></td>
<td>けれども恋する者は私がお話し致しましたよ。他の姿を持っているのですよ』 <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewbox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></td>
</tr>
</tbody>
</table>
</div>
<h2><span style="color: #28a1c5;">注釈</span></h2>
<h3><span style="color: #28a1c5;">ソクラテス</span></h3>
<div class="notices blue">
<p><a href="#socrate" title="ソクラテス" id="note_socrate"><ruby lang="ja">ソクラテス<rp>(</rp><rt lang="grc">Σωκράτης</rt><rp>)</rp></ruby lang="ja"></a>は古代ギリシアの哲学者ではあるが、ソクラテス自身は著述を行っていないので、ここでは弟子の哲学者プラトンの著作である「<ruby>饗<rp>(</rp><rt>きょう</rt><rp>)</rp>宴<rp>(</rp><rt>えん</rt><rp>)</rp></ruby>」での人物である。 <a href="#socrate" title="ソクラテス">戻る ↑</a></p>
</div>
<h3><span style="color: #28a1c5;">ディオティマ</span></h3>
<div class="notices blue">
<p>饗宴意外で<a href="#diotime" title="ディオティマ" id="note_diotime"><ruby lang="ja">ディオティマ<rp>(</rp><rt lang="grc">Διοτίμα</rt><rp>)</rp></ruby lang="ja"></a>という名前をあげる史料は他にないが、そこではマンティネイア出身の巫女と預言者として現れる。<br />
ディオティマに伴って、<ruby lang="ja">ルック<rp>(</rp><rt lang="fr">Luc</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ブリソン<rp>(</rp><rt lang="fr">BRISSON</rt><rp>)</rp></ruby lang="ja">の言葉によると対話では舞台に「新しい次元、つまり理解出来うるのが開かれる」哲学が登場する。ソクラテスは彼女について私に「愛について教えてくれた」と言う。
愛の誕生についてをソクラテスに語る。<br />
名は、「ゼウスによって讃えられた」あるいは「ゼウスを讃えている」という意味である。<br />
彼女の出身地とされる<ruby lang="ja">マンティネイア<rp>(</rp><rt lang="grc">Μαντίνεια</rt><rp>)</rp></ruby lang="ja">は、ペロポネソス半島にあった古代ギリシアの<ruby lang="ja">アルカディア<rp>(</rp><rt lang="grc">Ἀρκαδία</rt><rp>)</rp></ruby lang="ja">の都市国家であった。マンティネイアという固有名詞が古代ギリシャ語で「占い師」という意味の<ruby lang="ja">マンティス<rp>(</rp><rt lang="grc">mántis</rt><rp>)</rp></ruby lang="ja">に類似している。 <a href="#diotime" title="ディオティマ">戻る ↑</a></p>
</div>
<h3><span style="color: #28a1c5;">ポロス</span></h3>
<div class="notices blue">
<p><a href="#poros" title="ポロス" id="note_poros"><ruby lang="ja">ポロス<rp>(</rp><rt lang="grc">Πόρος</rt><rp>)</rp></ruby lang="ja"></a>は古代ギリシャ語で「通過」、「道」と「便法」。 <a href="#poros" title="ポロス">戻る ↑</a></p>
</div>
<h3><span style="color: #28a1c5;">ぺニア</span></h3>
<div class="notices blue">
<p><a href="#penia" title="ぺニア" id="note_penia"><ruby lang="ja">ぺニア<rp>(</rp><rt lang="grc">Πενία</rt><rp>)</rp></ruby lang="ja"></a>は古代ギリシャ語で「欠乏」、「貧乏」。 <a href="#penia" title="ぺニア">戻る ↑</a></p>
</div>
<h3><span style="color: #28a1c5;">ネクタル</span></h3>
<div class="notices blue">
<p><a href="#nectar" title="ネクタル" id="note_nectar"><ruby lang="ja">ネクタル<rp>(</rp><rt lang="la">nectar</rt><rp>)</rp></ruby lang="ja"></a>はラテン語で「欠乏」、「不死」の意から、神々の飲み物、彼達の不死の元になるの飲み物。 <a href="#nectar" title="ネクタル">戻る ↑</a></p>
</div>
<h3><span style="color: #28a1c5;">哲学</span></h3>
<div class="notices blue">
<p><a href="#philosopher" title="知恵を愛求する" id="note_philosopher">知恵を愛求する</a>は同時に「<span style="color: #28a1c5;">哲学をする</span>」意も含む。 <a href="#philosopher" title="知恵を愛求する">戻る ↑</a></p>
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
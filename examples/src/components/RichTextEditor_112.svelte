<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:151 EN:185 -->

<article>

<header>
<p><time datetime="2020-02-12">２０２０年２月１２日</time></p>
</header>

<h1 class="blue">ディオティマによる愛</h1>

<div class="notices blue">
<p>プラトンの「饗宴」において、宴に集まった人々は、<ruby>愛<rp>(</rp><rt>エロス</rt><rp>)</rp></ruby>の意義について議論を交わす。</p>
<p>そこで<a href="#note_socrate" title="ソクラテス" id="socrate">ソクラテス</a>は、自分が若かった頃に、予言者で巫女でもあった<a href="#note_diotime" title="ディオティマ" id="diotime">ディオティマ</a>から「愛の哲学」を教えられたと述べる。</p>
<p>以下にソクラテスはディオティマに愛についていろいろ聞こうとしている。</p>
</div>

<div id="translation-text-rousi">
<ol class="doc-three-rows">
<li data-id="【ソクラテス】"> — 「彼の父と母とは誰ですか」と私は言った。</li>
<li id="203b" data-id="【ディオティマ】">— 「それをお話しすると少々長くなりますが、しかしそれでもあなたのために話しましょう。</li>
<li>つまり、アプロディテが誕生した時に、その他の神々と一緒に、メチスの息子の<a id="poros" href="#note_poros">ポロス</a>も誕生祝いをやっていたのです。</li>
<li>食事が終った後に、<a id="penia" href="#note_penia">ペニア</a>が、たいへんな御馳走だったので、物乞いをしにやってきて、戸口のところにいたのです。</li>
<li>すると、ポロスが<a id="nectar" href="#note_nectar">ネクタル</a>に酔って——というのは酒はまだありませんでしたから——ゼウスの園にはいりこんで、参っていたものだから、眠りこみました。</li>

<li id="203c" class="top-space">で、ペニアは自分が貧乏なので、子どもをポロスから設けようと企んで、彼に添い寝をして、エロスをみごもったのです。</li>
<li>実にこのためにまたエロスはアプロディテの従者とも下僕ともなったのです、それはあの女神の誕生日を祝う祭りに生まれたからであり、また同時に<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp>来<rp>(</rp><rt>らい</rt><rp>)</rp></ruby>美しいものの愛人であるところに、アプロディテが美しい神であるときているからなのです。</li>
<li>で、ポロスとペニアとの間の息子であるから、エロスは次ぎのような運命におかれているのです。</li>

<li id="203d" class="top-space">第一に常に貧乏です、そして多くの人々の思っているように、柔かくて美しいどころか、堅くて、かさかさしていて、<ruby>跳<rp>(</rp><rt>は</rt><rp>)</rp>足<rp>(</rp><rt>だし</rt><rp>)</rp></ruby>で、宿なしで、いつも大地に寝る者、寝床のない者、戸口や路上で露天の下に眠る者で、母の本性を受けて常に欠乏の同居人なのです。</li>
<li>しかし他方、父に倣って美しいものや善いものを窺う者であり、勇敢で、<ruby>我<rp>(</rp><rt>む</rt><rp>)</rp>武<rp>(</rp><rt>が</rt><rp>)</rp>者<rp>(</rp><rt>しゃ</rt><rp>)</rp>羅<rp>(</rp><rt>ら</rt><rp>)</rp></ruby>で、精力的で、巧みな<ruby>狩人<rp>(</rp><rt>かりゅうど</rt><rp>)</rp></ruby>で、常に策を編み出す者です、また叡智の欲求者で、多策で、全生涯を通じて<a id="philosopher" href="#note_philosopher">知恵を愛求する</a>者、また巧みな魔術師、調剤師、専門家です。</li>

<li id="203e" class="top-space">そして性来不死であるということも、可死的であるということもないと追伸しなければならない。</li>
<li>一日のうちに花咲き、生きている時もあるが、死んでいる時もある、しかし父の本性によって、良策をうる時は、再び生きかえります。</li>
<li>しかし手に入れられたものはいつも洩れ出ています、従ってエロスは決して貧乏でもなければ、富裕でもありません、</li>
<li>また他方知恵と愚味との中間にあります。」</li>
<li id="204a" data-id="【ディオティマ】"> — 「それはこういう事情があるからです。</li>
<li>神々のうち誰一人知恵を愛求されはしない、また知者になることを欲されもしないのです——というのは知者なのですから——。</li>
<li>また他に知者があれば、その人も知恵を愛求しはしない。</li>
<li>また他方において愚味な人々は知恵を愛求しもしなければ、知者となることを欲しもしない。</li>
<li>というのは愚味が始末の悪いものであるのは、ちょうとこの点すなわち美しいものでも善いものでも思慮のあるものでもないのに、自分では申分のない者だと思っている点にあるのですからね。</li>
<li>だから欠けているものであると思っていない者は欠いていると思っていないものを欲することはないのです」</li>
<li data-id="【ソクラテス】">— 「それなら、ディオティマ、知恵を愛求する者たちというのは誰ですか、もし知恵のある者たちも愚味な者たちもそうでないとすれば」と私は言った。と、彼女は言った</li>
<li data-id="【ディオティマ】">— 「そのことなら、もう子どもにさえも明らかですよ。つまりこれら両方の者たちの中間の者たちで、エロスもまたそれらのうちの一人でしょう。</li>
<li>というのは知恵は最も美しいものの一つですが、エロスは美しいものについての恋です、</li>
<li>従って必然にエロスは愛知者ということになり、愛知者であるがゆえに、知者と愚者との中間者であるということになりますね。</li>
<li>そして彼にとってはそれらのことの原因もその生れにあるのです。</li>
<li>というのは知恵があって策のある父と知恵がなくて策のない母との息子ですからね。</li>
<li>ともかく、この精霊の本性は、愛するソクラテス、以上のものです。</li>
<li>しかしあなたがこれこれのものだと思われたエロスについて申しますと、あなたがそう思うことになったのは何も不思議なことじゃありませんよ。</li>
<li>あなたは、おっしゃったことから推測してみると、恋される者がエロスで、恋する者がではないとお思いになったようですね。</li>
<li>そのためにあなたにはエロスが非常に美しい者と見えることになったのだと思います。</li>
<li>というのは恋すべき者は本当に美しくて柔かで、全で、最も至福なものですからね。</li>
<li>けれども恋する者は私がお話し致しましたよ。他の姿を持っているのですよ」</li>
</ol>
</div>

<aside>

<h3 class="blue">注釈</h3>

<h4 class="blue note">ソクラテス</h4>

<div class="notices blue">
<p><a href="#socrate" title="ソクラテス" id="note_socrate"><ruby lang="ja">ソクラテス<rp>(</rp><rt lang="grc">Σωκράτης</rt><rp>)</rp></ruby></a>は古代ギリシアの哲学者ではあるが、ソクラテス自身は著述を行っていないので、ここでは弟子の哲学者プラトンの著作である「<ruby>饗<rp>(</rp><rt>きょう</rt><rp>)</rp>宴<rp>(</rp><rt>えん</rt><rp>)</rp></ruby>」での人物である。</p>
</div>

<footer>
  <p class="puce"><a href="#socrate" title="ソクラテス">文書にに戻る&nbsp;↩</a></p>
</footer>

<h4 class="blue note">ディオティマ</h4>

<div class="notices blue">
<p>饗宴意外で<a href="#diotime" title="ディオティマ" id="note_diotime"><ruby lang="ja">ディオティマ<rp>(</rp><rt lang="grc">Διοτίμα</rt><rp>)</rp></ruby></a>という名前をあげる史料は他にないが、そこではマンティネイア出身の巫女と預言者として現れる。</p>
<p>ディオティマに伴って、<ruby lang="ja">ルック<rp>(</rp><rt lang="fr">Luc</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ブリソン<rp>(</rp><rt lang="fr">BRISSON</rt><rp>)</rp></ruby>の言葉によると対話では舞台に「新しい次元、つまり理解出来うるのが開かれる」哲学が登場する。ソクラテスは彼女について私に「愛について教えてくれた」と言う。
愛の誕生についてをソクラテスに語る。</p>
<p>名は、「ゼウスによって讃えられた」あるいは「ゼウスを讃えている」という意味である。</p>
<p>彼女の出身地とされる<ruby lang="ja">マンティネイア<rp>(</rp><rt lang="grc">Μαντίνεια</rt><rp>)</rp></ruby>は、ペロポネソス半島にあった古代ギリシアの<ruby lang="ja">アルカディア<rp>(</rp><rt lang="grc">Ἀρκαδία</rt><rp>)</rp></ruby>の都市国家であった。マンティネイアという固有名詞が古代ギリシャ語で「占い師」という意味の<ruby lang="ja">マンティス<rp>(</rp><rt lang="grc">mántis</rt><rp>)</rp></ruby>に類似している。</p>
</div>

<footer>
  <p class="puce"><a href="#diotime" title="ディオティマ">文書にに戻る&nbsp;↩</a></p>
</footer>

<h4 class="blue note">ポロス</h4>

<div class="notices blue">
<p><a href="#poros" title="ポロス" id="note_poros"><ruby lang="ja">ポロス<rp>(</rp><rt lang="grc">Πόρος</rt><rp>)</rp></ruby></a>は古代ギリシャ語で「通過」、「道」と「便法」。</p>
</div>

<footer>
  <p class="puce"><a href="#poros" title="ポロス">文書にに戻る&nbsp;↩</a></p>
</footer>

<h4 class="blue note">ぺニア</h4>

<div class="notices blue">
<p><a href="#penia" title="ぺニア" id="note_penia"><ruby lang="ja">ぺニア<rp>(</rp><rt lang="grc">Πενία</rt><rp>)</rp></ruby></a>は古代ギリシャ語で「欠乏」、「貧乏」。</p>
</div>

<footer>
  <p class="puce"><a href="#penia" title="ぺニア">文書にに戻る&nbsp;↩</a></p>
</footer>

<h4 class="blue note">ネクタル</h4>

<div class="notices blue">
<p><a href="#nectar" title="ネクタル" id="note_nectar"><ruby lang="ja">ネクタル<rp>(</rp><rt lang="la">nectar</rt><rp>)</rp></ruby></a>はラテン語で「欠乏」、「不死」の意から、神々の飲み物、彼達の不死の元になるの飲み物。</p>
</div>

<footer>
  <p class="puce"><a href="#nectar" title="ネクタル">文書にに戻る&nbsp;↩</a></p>
</footer>

<h4 class="blue note">哲学</h4>

<div class="notices blue">
<p><a href="#philosopher" title="知恵を愛求する" id="note_philosopher">知恵を愛求する</a>は同時に「<span style="color: #28a1c5;">哲学をする</span>」意も含む。</p>
</div>

<footer>
  <p class="puce"><a href="#philosopher" title="知恵を愛求する">文書にに戻る&nbsp;↩</a></p>
</footer>

</aside>

</article>
`;

let focusEditor;
let showEditorState = true;
let editorState = createExtendedThreeRichTextEditor(html);

const plugins = [];

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


<style>
  button, input {
    margin: .5em;
  }

  input {
    outline: none;
  }

  :global(.ui-editor img) {
    max-width: 300px;
  }
</style>
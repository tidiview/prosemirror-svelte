<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:153 EN:181 -->

<article>

<p><time datetime="2019-09-11">２０１９年９月１１日</time></p>

<h1 class="red">「<cite>世界の多数性についての対話</cite>」の第一の夜</h1>

<div class="notices red">
<p>天文学が<time datetime="1681">１６８１年</time>に<ruby>彗<rp>（</rp><rt>すい</rt><rp>）</rp>星<rp>（</rp><rt>せい</rt><rp>）</rp></ruby>の後に流行した時に<ruby lang="ja">フォントネル<rp>（</rp><rt lang="fr">Fontenelle</rt><rp>）</rp></ruby>に出版された
「<cite><ruby lang="ja">世界の多数性についての対話<rp>（</rp><rt lang="fr">Entretiens&#160;sur&#160;la&#160;pluralité&#160;des&#160;mondes</rt><rp>）</rp></ruby></cite>」は、世界のそれぞれの体系についての作品です。</p>
<p>「教えると同時に楽しませる」ために、フォントネルは、最新の天文学の発見を優雅なる対話で紹介している。
星空の下で伯爵夫人の庭園で行なわれる六つの散策途中、
ある「哲学者」、いわゆる、当時の辞典での定義において、「科学の勉強に入念して、原因と参考によって効果を知ることに努める人」は、才気に満ちた若い侯爵婦人と話し合って、
「可能な世界」と彼がいう、星の動きや住まわれている世界の複数性について彼女を夢見させるのです。
彼は彼女に他の無限の同類の間での星にすぎない太陽の回りに回転する地球にしている当時まだ疑問とされていたコペルニクス体系のベールを取る。
この短い本の魅力は、科学的、形而上的な考え方と気取りとが巧みに組み合わさったおかげだ。</p>
<p><time datetime="1697">１６９７年</time>に科学学士院に任命され、フォントネルは最新の発見で作品を更新した。
この成功は非常に素晴らしかった。
フォントネルの生前に三十三版が出版された。
しかし、その影響は、何よりもその批評的な力から得られている。
フォントネルにとって、宇宙の中では、絶対的視点を決めるのは不可能です。</p>
<p class="conversation">「私たちは何でも判断したいし、常に悪い視点にさせれている」。</p>
<p>第一講演を切っ掛けに、哲学者はオペラの光景と自然とを同一視しながら、長々と繰り広げています。
デカルトの機械的哲学の促進を行なうことである。当時にオペラが本質的に「<a id="renvoi-machine" href="#machine" title="#machine"><ruby>機械<rp>（</rp><rt>マシヌ</rt><rp>）</rp></ruby></a>」の芝居でしたから。</p>
</div>

<h2 class="red">「<cite>世界の多数性についての対話</cite>」の第一章から抜粋した文書、「第一の夜」</h2>

<p>というわけで、真の哲学者たちは、見えるものを決して信じず、決して見えはしないものを見抜こうと努力して生涯を過ごすのですが、こういった状態はあまり羨むべきものとは思えません。</p>
<p>私には自然というものが、いつも<a id="renvoi-opera" href="#opera" title="#opera">オペラ</a>にも似た大きな舞台のように思えるのですよ。</p>
<p>あなたがオペラ座でオペラを見ている場所からは、有りのままの舞台は全く有りのままには見えないのでして、舞台装置や機械を配置して、遠くから見れば心よい効果を与えるようにしてありますが、すべてを動かしている歯車や重しは、あなたの目から見えないように隠されてしまっているのです。</p>
<p>こういうわけで、あなたは、これらがすべてどんなふうに機能しているのか、ほとんど気にも掛けないでしょう。</p>
<p>多分、もし道具方でも<a id="renvoi-parterre" href="#parterre" title="#parterre">平土間</a>に潜んでいれば、観客には驚くべきものと見えるこの飛翔のことが気になって、それが一体どんな風にして行われるかを絶対に見破ってやろうと思うでしょうが、
哲学者というのは、この道具方のようなものだということがお分かりでしょう。</p>
<p>しかし哲学者のほうが困難は一層大きいのでして、それは、自然がわれわれの目に見せてくれる機械の方は、綱が完全に隠されてしまっているからです。全く、実に巧妙に隠されてしまっておりまして、そのため宇宙の運動の原因となるものを見抜くのには、長い時間がかかりました。</p>
<p>想像して御覧なさい。ピタゴラスや、プラトンや、アリストテレスや、今日その名が鳴り響いている人たちすべてが、<a id="renvoi-phaeton" href="#phaeton" title="#phaeton">パエトン</a>が風で持ち上げられて、飛ぶところを見て、綱も発見できず、舞台の裏がどうなっているかも、 全く知らないとしましょう。</p>
<p>その一人はこう申します。《パエトンを持ち上げるものは、何らかの隠れた力である》と。</p>
<p>別の一人によれば、《パエトンは若干の数で構成されており、その数が彼を上昇せしめるのである》
また他の者によれば、《パエトンは舞台の上方と、なにがしかの友情で結ばれておって、上方におらないときは、具合がよくないのじゃ》。</p>
<p>そしてまた他の者によれば、《パエトーンは飛ぶように作られておるものではないが、舞台の上方を空虚のままにしておくよりは、 飛ぶほうがよいと思うのだ。このような夢想のたぐいは、まだまだいくらでもありまして、これでもって古代全体の評判が損なわれなかったのが不思議なくらいですよ。</p>
<p>そして最後に、デカルトと何人かの現代人がやってきて、こう言ったのです。《パエトーンが上昇するのは、綱が彼を引っ張っ ていて、その代わりに、彼より重い重りが下降しているからです》。</p>
<p>こうして現在では、もはや物体は、他の物体に引っ張られる、あるいはむしろ、他の物体に押されることがなければ、動きはしないと誰もが信じています。またそれが上昇、下降するのは、ただただ、重りかバネのせいであるということもね。そして、もしあるがままの自然が見えている人があるとすれば、その人は、いわば オペラの舞台の裏を見ているようなものなのです」。</p>
<p>「とすると」と侯爵夫人が言った。「哲学は今では大へん<ruby>機械的<rp>（</rp><rt>メカニック</rt><rp>）</rp></ruby>になっているのですね」。
「とても機械的になって、そのうちみんな恥ずかしく思うようになりはしないかと思うくらいで すよ」と私は答えた。</p>
<p>「今日では、みんな宇宙は時計を大きくしたものだと思いたがっています。そこではすべてが規則正しい運動で運ばれていき、その規則正しい運動は、もろもろの部分の配列によって生まれるのだとね。</p>
<p>本当のことをおっしゃってください。</p>
<p>あなたも時には、宇宙というものを、もっと崇高なものと思っていらっしゃったのではありませんか。値打ち以上に尊敬していらっしゃったのではないでしょうか。</p>
<p>私は、宇宙の本当の姿を知った後では、宇宙をあまり高く買わなくなった人を見たことがありますよ」。</p>
<p>「いいえ私は、それが時計に似ていると知ってから、なおさら尊重するようになりましたわ。</p>
<p>だって、自然の秩序は大へん素晴らしいものですのに、それが、こんなにも単純なものによって動いて いくなんて、本当に驚きますものね」。</p>

<footer>
  <p><ruby lang="ja">フォントネル<rp>（</rp><rt lang="fr">Fontenelle</rt><rp>）</rp></ruby>、「<cite><ruby lang="ja">世界の多数性についての対話<rp>（</rp><rt lang="fr">Entretiens&#160;sur&#160;la&#160;pluralité&#160;des&#160;mondes</rt><rp>）</rp></ruby></cite>」、第一章、「第一の夜」、二十項。</p>
</footer>

<aside>

  <h3 class="yellow">注釈：</h3>

  <h4 id="opera" class="yellow note">「オペラの<ruby>機械<rp>（</rp><rt>マシヌ</rt><rp>）</rp></ruby>」</h4>

  <p>フランス語では「<ruby>Ma<rp>（</rp><rt>マ</rt><rp>）</rp>chi<rp>（</rp><rt>シ</rt><rp>）</rp>ne<rp>（</rp><rt>ヌ</rt><rp>）</rp></ruby>」。こういう風に劇所やオペラで、、観客に驚異的性の錯視を与えるそれぞれの効果によっての機械的手段が指名しされていた。しかし、「オペラの<ruby>機械<rp>（</rp><rt>マシヌ</rt><rp>）</rp></ruby>」を明らかにするには、フォントネルにとって宇宙を非神聖化させたり、アリストテレス、プラトンなどの以前の文学を迷信から覚まさせたりあうるでもある。</p>
  <footer>
    <p class="puce"><a href="#renvoi-machine" title="#renvoi-machine">文書に戻る&nbsp↩</a></p>
  <footer>

  <h4 id="parterre" class="yellow note">平土間</h4>

  <p>観客が立っていて、立ち席がボックス席より安かった劇所の観客席の一階。</p>
  <footer>
    <p class="puce"><a href="#renvoi-parterre" title="#renvoi-parterre">文書に戻る&nbsp↩</a></p>
  <footer>

  <h4 id="opera" class="yellow note">オペラ</h4>
  
  <p><time datetime="1669">１６６９年</time>に創立されたパリのオペラを指す固有名詞。</p>
  <footer>
    <p class="puce"><a href="#renvoi-opera" title="#renvoi-opera">文書に戻る&nbsp↩</a></p>
  <footer>
  
  <h4 id="parterre" class="yellow note">平土間</h4>

  <p>観客が立っていて、立ち席がボックス席より安かった劇所の観客席の一階。</p>
  <footer>
    <p class="puce"><a href="#renvoi-parterre" title="#renvoi-parterre">文書に戻る&nbsp↩</a></p>
  <footer>

  <h4 id="phaeton" class="yellow note">リュリの<cite>パエトン</cite></h4>
  
  <p>「<cite><ruby lang="ja">パエトン<rp>（</rp><rt lang="fr">Phaéton</rt><rp>）</rp></ruby></cite>」、<a href="https://ja.wikipedia.org/wiki/フィリップ・キノー" href="https://ja.wikipedia.org/wiki/フィリップ・キノー"><ruby lang="ja">キノー<rp>（</rp><rt lang="fr">Quinault</rt><rp>）</rp></ruby></a>の台本、<a href="https://ja.wikipedia.org/wiki/ジャン＝バティスト・リュリ" href="https://ja.wikipedia.org/wiki/ジャン＝バティスト・リュリ"><ruby lang="ja">リュリ<rp>（</rp><rt lang="fr">Lully</rt><rp>）</rp></ruby></a>の音楽で、オペラで<time datetime="1683">１６８３年</time>に初演した五幕叙情悲劇。パエトンの太陽の車の打ち上げは第三幕第六場に行われている。</p>
  <footer>
    <p class="puce"><a href="#renvoi-phaeton" title="#renvoi-phaeton">文書に戻る&nbsp↩</a></p>
  <footer>

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
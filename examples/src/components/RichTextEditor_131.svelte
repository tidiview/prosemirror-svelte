<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:163 EN:194  -->
<article>

<hgroup>
<h2 class="blue"><ruby lang="ja">大トリアノン宮殿<rp>（</rp><rt lang="fr">le&#160;Grand&#160;Trianon</rt><rp>）</rp></ruby>での</h2>
<h1 class="blue">ティレシアス</h1>
</hgroup>

<figure>
  <picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.webp 700w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.jpg" title="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《ミネルヴァとティレシアス》絵画" alt="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《ミネルヴァとティレシアス》絵画" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.jpg 700w"></picture><figcaption>《<cite>ミネルヴァとティレシアス</cite>》<br>手前に見えるミネルヴァが<q cite="#tiresias" style="quotes:'「' ''">気を悪くして、</q>、真ん中にいるティレシアス<q cite="#tiresias" style="quotes:'' '」'">の目を永遠の闇でおおった</q>、<cite>変身物語</cite>、第三巻、３３６行。</figcaption>
</figure>

<div class="notices blue">
<p><a href="https://ja.wikipedia.org/wiki/大トリアノン宮殿" title="https://ja.wikipedia.org/wiki/大トリアノン宮殿"><ruby lang="ja">大トリアノン宮殿<rp>（</rp><rt lang="fr">le&#160;Grand&#160;Trianon</rt><rp>）</rp></ruby></a>に展示されている <a href="https://ja.wikipedia.org/wiki/ルネ＝アントワーヌ・ウアス" title="https://ja.wikipedia.org/wiki/ルネ＝アントワーヌ・ウアス"><ruby lang="ja">ルネ<rp>（</rp><rt lang="fr">René</rt><rp>）</rp>＝<rp>（</rp><rt lang="fr">-</rt><rp>）</rp>アントワーヌ<rp>（</rp><rt lang="fr">Antoine</rt><rp>）</rp>・<rp>（</rp><rt lang="fr"></rt><rp>）</rp>ウアス<rp>（</rp><rt lang="fr">Houasse</rt><rp>）</rp></ruby></a>が描いた《<ruby lang="ja">ミネルヴァ<rp>（</rp><rt lang="fr">Minerve</rt><rp>）</rp>と<rp>（</rp><rt lang="fr">et</rt><rp>）</rp>ティレシアス<rp>（</rp><rt lang="fr">Tirésias</rt><rp>）</rp></ruby>》絵画が<ruby lang="ja">領主たちの控えの間<rp>（</rp><rt lang="fr">le&#160;Salon&#160;des&#160;Seigneurs</rt><rp>）</rp></ruby>に見られます。<br>
<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス"><ruby lang="ja">オウィディウス<rp>（</rp><rt lang="la">Ovidius</rt><rp>）</rp></ruby></a>が書いた「<a href="https://ja.wikipedia.org/wiki/変身物語" title="https://ja.wikipedia.org/wiki/変身物語"><cite><ruby lang="ja">変身物語<rp>（</rp><rt lang="la">Metamorphōseōn&#160librī</rt><rp>）</rp></ruby></cite></a>」に出て来る、賢くさの女神である<a href="https://ja.wikipedia.org/wiki/ミネルウァ" title="https://ja.wikipedia.org/wiki/ミネルウァ"><ruby lang="ja">ミネルヴァ<rp>（</rp><rt lang="la">Minerva</rt><rp>）</rp></ruby></a>と<a href="https://ja.wikipedia.org/wiki/テイレシアース" title="https://ja.wikipedia.org/wiki/テイレシアース"><ruby lang="ja">ティレシアス<rp>（</rp><rt lang="la">Tiresias</rt><rp>）</rp></ruby></a>との不思議な言い合いが語られている。</p>
</div>

<h2 id="tiresias" class="blue">「<cite>変身物語</cite>」の第三巻の文書においての《<cite>ミネルヴァとティレシアス</cite>》</h2>

<ol class="doc">
  <li value="316">地上では、運命のさだめどおり、これらの出来事が生じていた。
  二度の誕生を経験したバッコスの幼年期も、平穏無事だった。</li>
  <li>ちょうどそのころのはなしだが、たまたま、ユピテルは、<ruby>神酒<rp>（</rp><rt>ネクタル</rt><rp>）</rp></ruby>に陶然として、わずらわしい悩みを忘れ、これも<ruby>無<rp>（</rp><rt>ぶ</rt><rp>）</rp>聊<rp>（</rp><rt>りょう</rt><rp>）</rp></ruby>をかこっていたユノ一を相手に、くつろいだ冗談をとばしていたというのだ。</li>
  <li value="320">
    <p>ユピテルは</p>
    <p class="conversation">「これは確かなことだが、女の喜びのほうが、男のそれよりも大きいのだ」といった。</p>
  </li>
  <li>ユノーは、とんでもないとそれを否定する。</li>
  <li>そこで、もの知りの<mark>ティレシアス</mark>の意見を聞こうということになった。</li>
  <li>この男は、男女性の喜びを知っているからだが、それにはわけがある。</li>
  <li>あるとき、彼は、緑濃い森のなかで交尾している二匹の大きな蛇を、杖ではげしくなぐりつけたことがあった。</li>
  <li>すると、（不思議なことに！）男であった<mark>ティレシアス</mark>が女に変わり、そのまま七秋を過した。</li>
  <li>八秋目に、ふたたび同じ蛇たちに出くわして、こういった。</li>
  <li>
    <p class="conversation">「おまえたちを打つことが、その人間の性を変えるほどの力を持っているなら、もう一度おまえたちを打つことにしよう」</p>
    <p>この同じ蛇をなぐりつけると、もとの姿と自然状態 がもどって来た。</p>
  </li>
  <li>いま、冗談めいたの裁定者に選ばれると、彼はユピテルの意見のほうを正しいとした。</li>
  <li>ユノーは、もともと大した問題でもないのに、必要以上に気を悪くして、その裁定者を罰し、彼の目を永遠の闇でおおった。</li>
  <li value="337">しかし、全能の父なる神は――ある神がおこなったことを無効にすることは、どんな神にも許されないので――<mark>ティレシアス</mark>が視力を奪われたかわりに、未来を予知する能力を彼に与え、この恩典によって罰を軽くした。</li>
</ol>

<footer>
  <p><span style="color: #28a1c5;">オウィディウス、<cite>変身物語</cite>、第三巻、３１６行から３３８行まで。</span> </p>
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
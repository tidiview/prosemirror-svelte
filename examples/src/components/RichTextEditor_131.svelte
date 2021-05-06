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
  https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.jpg 700w"></picture><figcaption>《<cite>ミネルヴァとティレシアス</cite>》<br>手前に見えるミネルヴァが、真ん中にいるティレシアス<q cite="#tiresias" style="quotes:'「' '」'">すぐさまに盲目させた</q>、<cite><ruby>文庫<rp>（</rp><rt>ビブリオテーケー</rt><rp>）</rp></ruby></cite>、第三巻、六章七段六行。</figcaption>
</figure>

<div class="notices blue">
<p><a href="https://ja.wikipedia.org/wiki/大トリアノン宮殿" title="https://ja.wikipedia.org/wiki/大トリアノン宮殿"><ruby lang="ja">大トリアノン宮殿<rp>（</rp><rt lang="fr">le&#160;Grand&#160;Trianon</rt><rp>）</rp></ruby></a>に展示されている <a href="https://ja.wikipedia.org/wiki/ルネ＝アントワーヌ・ウアス" title="https://ja.wikipedia.org/wiki/ルネ＝アントワーヌ・ウアス"><ruby lang="ja">ルネ<rp>（</rp><rt lang="fr">René</rt><rp>）</rp>＝<rp>（</rp><rt lang="fr">-</rt><rp>）</rp>アントワーヌ<rp>（</rp><rt lang="fr">Antoine</rt><rp>）</rp>・<rp>（</rp><rt lang="fr"></rt><rp>）</rp>ウアス<rp>（</rp><rt lang="fr">Houasse</rt><rp>）</rp></ruby></a>が描いた《<ruby lang="ja">ミネルヴァ<rp>（</rp><rt lang="fr">Minerve</rt><rp>）</rp>と<rp>（</rp><rt lang="fr">et</rt><rp>）</rp>ティレシアス<rp>（</rp><rt lang="fr">Tirésias</rt><rp>）</rp></ruby>》絵画が<ruby lang="ja">領主たちの控えの間<rp>（</rp><rt lang="fr">le&#160;Salon&#160;des&#160;Seigneurs</rt><rp>）</rp></ruby>に見られます。この絵画は、<cite>ミネルヴァ伝</cite>というシリーズの一部です。</p>
<p><a href="https://ja.wikipedia.org/wiki/アポロドーロス" title="https://ja.wikipedia.org/wiki/アポロドーロス"><ruby lang="ja">アポロドーロス<rp>（</rp><rt lang="la">Apollodoros</rt><rp>）</rp></ruby></a>が書いた「<a href="https://ja.wikipedia.org/wiki/ビブリオテーケー" title="https://ja.wikipedia.org/wiki/ビブリオテーケー"><cite><ruby lang="ja">ビブリオテーケー<rp>（</rp><rt lang="la">Biblioteke</rt><rp>）</rp></ruby></cite></a>」に出て来る、賢くさの女神である<a href="https://ja.wikipedia.org/wiki/ミネルウァ" title="https://ja.wikipedia.org/wiki/ミネルウァ"><ruby lang="ja">ミネルヴァ<rp>（</rp><rt lang="la">Minerva</rt><rp>）</rp></ruby></a>と<a href="https://ja.wikipedia.org/wiki/テイレシアース" title="https://ja.wikipedia.org/wiki/テイレシアース"><ruby lang="ja">ティレシアス<rp>（</rp><rt lang="la">Tiresias</rt><rp>）</rp></ruby></a>との不思議な関係性が語られている。</p>
</div>

<h2 id="tiresias" class="blue">「<cite><ruby>文庫<rp>（</rp><rt>ビブリオテーケー</rt><rp>）</rp></ruby></cite>」の第三巻の文書においての《<cite>ミネルヴァとティレシアス</cite>》</h2>

<ol class="doc">
  <li value="7">しかしフェレシデスはミネルヴァによって視覚が取られたという。</li>
  <li>この女神はとてもカリクロ<ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby>が好きでした。</li>
  <li>ティレシアスがいて、</li>
  <li>［二人とも入浴していたら］</li>
  <li>彼は女神を全裸のまま直撃した。</li>
  <li>ミネルヴァは目の上に手を置いて、</li>
  <li>すぐさまに盲目にさせた。</li>
  <li>カリクロ<ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby>が彼女に視覚を返すことを願った。</li>
  <li>が、女神は出来なくて、</li>
  <li>鳥の鳴き声が通じるように彼の耳を洗って、</li>
  <li>ナナカマドの木の杖を上げた。</li>
  <li>その杖で目が見えている方々と同じように歩けていた。</li>
</ol>

<footer>
  <p><span style="color: #28a1c5;">アポロドーロス、<cite><ruby>文庫<rp>（</rp><rt>ビブリオテーケー</rt><rp>）</rp></ruby></cite>、第三巻、六章七段。</span></p>
</footer>

<aside>
  <p class="no-puce"><cite><ruby>文庫<rp>（</rp><rt>ビブリオテーケー</rt><rp>）</rp></ruby></cite>の日本語訳書の題は『<cite>ギリシア神話<cite>』だが、「文庫」は原題の意。</p>
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
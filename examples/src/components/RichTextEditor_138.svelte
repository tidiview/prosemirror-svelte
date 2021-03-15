<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="yellow">アドニス</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis_700x676.webp 700w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane_700x1050.jpg" alt="ジャン・モニエ、《アドニスの死》" title="ジャン・モニエ、《アドニスの死》" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/01.adonis/adonis_700x676.jpg 700w"></picture><figcaption>猪に殺されたアドニスの死を見ているウェヌス</figcaption></figure>
<div class="notices yellow">
<p><a href="https://ja.wikipedia.org/wiki/シュヴェルニー城" title="https://ja.wikipedia.org/wiki/シュヴェルニー城"><ruby lang="ja">シュヴェルニー城<rp>(</rp><rt lang="fr">le&#160;Château&#160;de&#160;Cheverny</rt><rp>)</rp></ruby></a>の二階にある暖炉で展示されている、<ruby lang="ja">ジャン<rp>(</rp><rt lang="fr">Jean</rt><rp>)</rp>・<rp>(</rp><rt lang="fr">&#160</rt><rp>)</rp>モニエ<rp>(</rp><rt lang="fr">Monier</rt><rp>)</rp></ruby>画家が描いた《<ruby lang="ja">アドニスの死<rp>(</rp><rt lang="fr">la&#160;Mort&#160;d&#19;Adonis</rt><rp>)</rp></ruby>》を表れる絵画がある。<br>
描かれている場面の元に、ローマ帝国時代に生きたラテン語で書いた作家の<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス"><ruby lang="ja">オウィディウス<rp>(</rp><rt lang="la">Ovidius</rt><rp>)</rp></ruby></a>による、一番有名な作品である『<a href="https://ja.wikipedia.org/wiki/変身物語" title="https://ja.wikipedia.org/wiki/変身物語"><ruby lang="ja">変身物語<rp>(</rp><rt lang="la">Metamorphōseōn&#160librī</rt><rp>)</rp></ruby></a>』の第１０巻の一部として知られている文書である。<br>
<a href="https://ja.wikipedia.org/wiki/アドニス" title="https://ja.wikipedia.org/wiki/アドニス"><ruby lang="ja">ウェヌス<rp>(</rp><rt lang="la">Venus</rt><rp>)</rp></ruby></a>の愛にさらされた<a href="https://ja.wikipedia.org/wiki/ウェヌス" title="https://ja.wikipedia.org/wiki/ウェヌス"><ruby lang="ja">アドニス<rp>(</rp><rt lang="la">Adonis</rt><rp>)</rp></ruby></a>の悲劇的な死が語られている。<br>
ご参照ください！</p>
</div>
<h2 class="yellow">「変身物語」においてのアドニスの死</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>７０８</sup></td>
<td>彼女は、このように忠告すると、白鳥たちに引かせた車で、<br>
空を渡ってゆく。
が、若者の勇気が、この忠告に逆らうのだ。<br>
たまたま、犬たちが、猪のまぎれない足跡をつけて、
ねぐらから追い出した。
そして、キニュラスの血を引く若者は
森から出ようとしているこの猪を、斜め横から、槍で貫いた。<br>
荒々しい猪は、すぐに、みずからの血で染まった投槍を、そり曲がった鼻づらで
払い落した。
うろたえて、無事に逃げおおせようとしている相手を
追うと、そのまたくらに、根元まで牙を突き立て、
瀕死の傷を負った若者を、横色い砂のうえに打ち倒した。<br>
ウェヌス女神は、軽やかな車に垂って<ruby>中<rp>(</rp><rt>なか</rt><rp>)</rp>空<rp>(</rp><rt>そら</rt><rp>)</rp></ruby>を分けていたが、
羽ばたく白鳥の翼にもかからわず、まだキュブロスには着いていなかった。<br>
遠くから、瀕死のアドニスの呻きを聞きつけて、</td></tr>
<tr><td><sup>７２０</sup></td>
<td>白鳥たちをそちらヘ向けた。
そして、息絶えようとしながら、<br>
みずからの血のなかで身もだえしている彼を見ると、
車から跳び下りた。
着物の腕元を引き裂き、髪をきかむしって、<br>
思いもかけずに胸を打ちたたく。<br>
「運命」の神々に文句をつけて、こういった。<br>
「でも、すべてがあなたたちの力に
屈するというわけでもないのです。
アドニスよ、わたしの悲しみの思い出は、<br>
いつまでも残るでしょう。
あたたの死にざまは、くり返し、舞台にのせられて、
年ごとに、わたしのこの嘆きを再現させてくれるでしょう。
いっぽう、あなたの血は、花に変わるでしょう。
むかし、冥界の女王プロルピナは、
ある女のからだをかんばしい<ruby>薄荷<rp>(</rp><rt>はっか</rt><rp>)</rp></ruby>に変えることが、
キニラスの血を引く英雄を変身させようとすることには、<ruby>けち<rp>(</rp><rt>、、</rt><rp>)</rp></ruby>がつけられるのでしょうか？」<br>
こういうと、
若者の血に、かおり高い<ruby>神酒<rp>(</rp><rt>ネクタル</rt><rp>)</rp></ruby>をふりかけた。
血は、<ruby>神酒<rp>(</rp><rt>ネクタル</rt><rp>)</rp></ruby>に触れると、
ふくらんでいた。
それは、たとえば、横色泥から
透明な泡がわきあがって来るさまをおもわせる。
そして、一時間も経たないうちに、<br>
血のなかから、同じ色の花が現われた。
<ruby>強<rp>(</rp><rt>きょう</rt><rp>)</rp>靭<rp>(</rp><rt>じん</rt><rp>)</rp></ruby>な皮の下に種子を隠し持っている、あの<ruby>石<rp>(</rp><rt>ざく</rt><rp>)</rp>榴<rp>(</rp><rt>ろ</rt><rp>)</rp></ruby>が着ける花にそっくりだが、<br>
しかし、その花を覚でる期間は短かいのだ。<br>
花の付き具合が悪く、軽すぎて落ちやすいために、<br></td></tr>
<tr><td><sup>７３９</sup></td>
<td>アネモネというその名のもとになっている<ruby>風<rp>(</rp><rt>アネモネ</rt><rp>)</rp></ruby>が、これを散らすからだ。</td></tr>
</tbody>
</table>
<p><span style="color: #df8a13;">オウィディウス、変身物語、第１０巻末、７０８～より</span></p>
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
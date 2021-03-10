<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
  <div id="body-inner">
	<h1 class="green">テオフィル・ゴーティエにおいてのモナ・リザ</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.webp 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1280.webp 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1600.webp 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.webp 1920w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.jpg" title="「ラ・ジョコンデュ」か「ジョコンダ婦人、モナ・リザ」と言われているフランテスコ・デル・ジョコンド妻であるジェラルディニーの肖像画" alt="「ラ・ジョコンデュ」か「ジョコンダ婦人、モナ・リザ」と言われているフランテスコ・デル・ジョコンド妻であるジェラルディニーの肖像画" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-840.jpg 840w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1280.jpg 1280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1600.jpg 1600w,
https://francois-vidit.com/user/sites/docs/pages/01.home/01.paris/01.louvre/01.la-joconde/01.vasari/la-joconde-1920.jpg 1920w" id="zephyr_et_flore"></picture><figcaption>「ラ・ジョコンデュ」か「ジョコンダ婦人、モナ・リザ」と言われているフランテスコ・デル・ジョコンド妻であるジェラルディニーの肖像画</figcaption></figure>
<div class="notices green">
<p>以下の<a href="https://ja.wikipedia.org/wiki/モナ・リザ" title="https://ja.wikipedia.org/wiki/モナ・リザ">モナ・リザ</a>の描写は、ロマン主義作家の<a href="https://ja.wikipedia.org/wiki/テオフィル・ゴーティエ" title="https://ja.wikipedia.org/wiki/テオフィル・ゴーティエ"><ruby lang="ja">テオフィル<rp>(</rp><rt lang="fr">Théophile</rt><rp>)</rp>・<rp>(</rp><rt lang="fr">&#160;</rt><rp>)</rp>ゴーティエ<rp>(</rp><rt lang="fr">GAUTIER</rt><rp>)</rp></ruby lang="ja"></a>によって書かれ、１８６７年にパリで出版された。<br />
この絵画の歴史にとっては極めて重要な描写である。なぜなら、その描写によって<a href="https://ja.wikipedia.org/wiki/レオナルド・ダ・ヴィンチ" title="https://ja.wikipedia.org/wiki/レオナルド・ダ・ヴィンチ">レオナルド・ダ・ヴィンチ</a>の作品が体現しているかのような神秘の名によって、同時に神話化されながら、２０世紀の作品の偏った見方の多くに影響を与えていくことになる。<br />
私たちはこの描写は女性蔑視だとしたら、この女性蔑視主義がレオナルド・ダ・ヴィンチ作品の一部でも芸術的感情の一部ほどでもなければ、モナ・リザがテオフィル・ゴーティエの空想を排除されることによくなると確信している。</p>
</div>
<p><br></p>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"/></svg></span>
この神聖なるモナ・リザ・デル・ジョコンドへの私たちの感嘆と愛が昨日今日のことではないが、それで多く実在の生物への情熱がそれより長く続きません。<br />
私たちはもしかして熱烈過ぎたしかも印象を忠実に映している以下の行を書いていたのは１２年前です。<br />
「ジョコンダ！
レオナルド・ダ・ゲインチの額縁のなかでかくも神秘的に微笑み、何世紀にもわたる賞賛に対して、いまだ解けない一個の謎を突きつけているように思われる、<span style="color: #3d8b3d;">美のスフィンクスよ</span>、抗しがたい魅力によっていつもおまえのほうに連れ戻されるのだ。<br />
ああ！実際、黄昏のような半濃淡に浸り、透き通ったヴェールに包まれたこの顔、その目鼻立ちが美しい調べにのって紫色の<ruby>靄<rp>(</rp><rt>もや</rt><rp>)</rp></ruby>にぼかされ、<span style="color: #3d8b3d;">〈眠り〉の黒いガーゼを通して〈夢〉の創造のよう</span>に現われでるこの顔を前にして、長い時間肘をつき、釘付けになることのない者がいるだろうか。<br />
<span style="color: #3d8b3d;">未知の官能を約束するそのまなぎしと、すばらしく皮肉めいた表情をもつこの不思議な生き物は、紺青の風景のただなかへ、いかなる惑星から落ちたったのか。</span><br />
レオナルド・ダ・ヴインチは自ら描く人物たちに、かくも優越性の<ruby>徴<rp>(</rp><rt>しるし</rt><rp>)</rp></ruby>を刻み込んでいるので、彼らを前にして人は動揺を感じてしまう。<br />
<span style="color: #3d8b3d;">深い瞳の<ruby style="color:#3d8b3d;">翳<rp>(</rp><rt style="color:#3d8b3d;">かげ</rt><rp>)</rp></ruby>りは俗人には禁じられた秘密を隠し、人をからかうような唇の曲がりは全てを知ろしめす神にも似て、人間の俗悪さを優しく見下している。</span><br />
ほの暗い眼のなかに、矢を放ったあとのアモールの弓のように波打つ唇のなかに、なんと不安を抱かせる揺るぎなさが、なんと人間を越えた冷笑があることか！
<span style="color: #3d8b3d;">ジョコンダは秘密の宗教のあのイシス女神、自分だけを信じ、ヴェールの<ruby style="color:#3d8b3d;">襞<rp>(</rp><rt style="color:#3d8b3d;">ひだ</rt><rp>)</rp></ruby>を半ば開けて、彼女の秘密をあばき出す軽率な男を狂気にいたらしめ、死に追いやるあのイシス女神のようではなかろうか。</span><br />
かつて、女というものの理想が、これ以上避け難く誘惑的な形態をまとっていたことはなかった。<br />
もしドン・ファンがモナ・リザと出会ったならば、彼は自分のリストに女の人３０００人の名前を書くために労をいとったでしょう。<br />
彼は一つしか書かなくて、それで彼自身の希望の羽が彼をさらに遠くまで運ぶことを拒否したでしょう。<br />
この瞳の黒い太陽で羽が溶けて抜けられたでしょう」。<br />
それから、私たちはこの崇めるべきジョコンダをまた数回お会いしまして、それでこの恋の告白は私たちにあまり灼熱すぎでないと見えません。<br />
彼女はつねにそこにいる、無数の恋人たちに嘲笑う快楽を込めた微笑みながら。<br />
彼女の額には、永遠に美しくある確信する女の穏やかさが眠っていて、ありとあらゆる詩人や芸術家の理想よりも優れているのを自ら感じているのである。<br />
<span style="color: #3d8b3d;">神聖なるレオナルドはこの肖像画を施すのに４年かかった、離れる決心はできず、完成したとは一切も見なさなかった。</span><br />
ポーズする途中では、音楽家たちは美しいモデルを陽気にさせて、魅力的な顔立ちが退屈や疲れいそうな様子をするのを妨げるために曲を演奏していました。<br />
彼が発明者だったレオナルドが使う特定の黒色が、モンナ・リザの色調の中で広まって、このうっとりする紫ばむハーモニーをにしたことを後悔するのだろうか。
この鋳造的色調は理想の色彩のようなとは。<br />
私たちはそう思わない。<br />
今では、神秘が魅力に付け加えて、絵はその新鮮さでは、もしかしてこれほど魅力的ではなかったかも。 <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"/></svg></span></p>
<p><a href="https://ja.wikipedia.org/wiki/テオフィル・ゴーティエ" title="https://ja.wikipedia.org/wiki/テオフィル・ゴーティエ" class="green"><ruby lang="ja" style="letter-spacing: 2px;color:#3d8b3d;">テオフィル<rp>(</rp><rt lang="fr" style="font-size: 70%;color:#3d8b3d;">Théophile</rt><rp>)</rp>・<rp>(</rp><rt lang="fr" style="font-size: 70%;color:#3d8b3d;">&#160;</rt><rp>)</rp>ゴーティエ<rp>(</rp><rt lang="fr" style="font-size: 70%;color:#3d8b3d;">GAUTIER</rt><rp>)</rp></ruby></a><span style="color: #3d8b3d;">、パリ１８６７年博覧会のガイドブックより抜粋</span></p>
<p><a href="https://ja.wikipedia.org/wiki/アレクサンドル・デュマ・フィス" title="https://ja.wikipedia.org/wiki/アレクサンドル・デュマ・フィス">デュマ</a>、<a href="https://ja.wikipedia.org/wiki/シャルル＝オーギュスタン・サント＝ブーヴ" title="https://ja.wikipedia.org/wiki/シャルル＝オーギュスタン・サント＝ブーヴ">サント＝ブーヴ</a>、<a href="https://ja.wikipedia.org/wiki/ウジェーヌ・エマニュエル・ヴィオレ・ル・デュク" title="https://ja.wikipedia.org/wiki/ウジェーヌ・エマニュエル・ヴィオレ・ル・デュク">ヴィオレ・ル・デュク</a>、<a href="https://ja.wikipedia.org/wiki/ジョルジュ・サンド" title="https://ja.wikipedia.org/wiki/ジョルジュ・サンド">ジョルジュ・サンド</a>、<a href="https://ja.wikipedia.org/wiki/ナダール" title="https://ja.wikipedia.org/wiki/ナダール">ナダール</a>なども参加したフランスの主な作家と芸術家によって書かれた共作して、その後（１８８２年）ゴーティエの死後、「ルーブル美術館での素人のガイドブック」題名で再板された。</p>
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
<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="green">ディアヌ</h1>
<figure><picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane_700x1050.webp 700w" type="image/webp"></source><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane_700x1050.jpg 700w"></source><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus_700x1050.webp 700w" type="image/webp"></source><img src="/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus_700x798.jpg" alt="プリマティッチオ派、《ディアーヌ・ド・ポワティエ肖像》" title="プリマティッチオ派、《ディアーヌ・ド・ポワティエ肖像》" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/02.chenonceau/01.diane/diane-focus_700x798.jpg 700w"></picture><figcaption>狩猟女神<ruby><rb>ディアーヌ<rb><rt style="font-size:60%;letter-spacing: .1rem;">Diane</rt></rb></rb></ruby>の姿で描かれている<ruby><rb>ディアーヌ・ド・ポワティエ<rb><rt style="font-size:60%;letter-spacing: .1rem;">Diane de Poitiers</rt></rb></rb></ruby></figcaption></figure>
<div class="notices green">
<p>この絵画は、当時、<a href="https://ja.wikipedia.org/wiki/フランソワ１世_（フランス国王）" title="https://ja.wikipedia.org/wiki/フランソワ１世_（フランス国王）"><ruby lang="ja">フランソワ<rp>(</rp><rt lang="fr">François</rt><rp>)</rp>１世<rp>(</rp><rt lang="fr">Ier</rt><rp>)</rp></ruby></a>に招待され、後に文化大臣に相当する人物ともなった、イタリア・ボローニャ出身の画家<a href="https://ja.wikipedia.org/wiki/フランチェスコ・プリマティッチオ" title="https://ja.wikipedia.org/wiki/フランチェスコ・プリマティッチオ"><ruby lang="ja">プリマティッチオ<rp>(</rp><rt lang="it">Primaticcio</rt><rp>)</rp></ruby></a>が、１５５６年に、<a href="https://ja.wikipedia.org/wiki/シュノンソー城" title="https://ja.wikipedia.org/wiki/シュノンソー城"><ruby lang="ja">シュノンソー<rp>(</rp><rt lang="fr">Chenonceau</rt><rp>)</rp></ruby>城</a>で描いた作品です。<br>
当時、本人は、「<ruby lang="ja">ル<rp>(</rp><rt lang="fr">Le</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>プリマティス<rp>(</rp><rt lang="fr">Primatice</rt><rp>)</rp></ruby>」と、フランス語風の名で、知られていました。<br>
この絵では、<ruby lang="ja">フランソワ<rp>(</rp><rt lang="fr">François</rt><rp>)</rp>１世<rp>(</rp><rt lang="fr">Ier</rt><rp>)</rp></ruby>の後を継いだ息子<a href="https://ja.wikipedia.org/wiki/アンリ2世_(フランス王)" title="https://ja.wikipedia.org/wiki/アンリ2世_(フランス王)"><ruby lang="ja">アンリ<rp>(</rp><rt lang="fr">Henri</rt><rp>)</rp>ニ世<rp>(</rp><rt lang="fr">II</rt><rp>)</rp></ruby></a>の愛妾だった、<a href="https://ja.wikipedia.org/wiki/ディアーヌ・ド・ポワチエ" title="https://ja.wikipedia.org/wiki/ディアーヌ・ド・ポワティエ"><ruby lang="ja">ディアーヌ<rp>(</rp><rt lang="fr">Diane</rt><rp>)</rp>・<rp>(</rp><rt lang="fr">&#160</rt><rp>)</rp>ド<rp>(</rp><rt lang="fr">de</rt><rp>)</rp>・<rp>(</rp><rt lang="fr">&#160</rt><rp>)</rp>ポワティエ<rp>(</rp><rt lang="fr">Poitiers</rt><rp>)</rp></ruby></a>が描かれている。<br>
当時、フランス王国宮廷では、最も注目された（気絶する）美人としても知られている。<br>
この時代、「並行肖像」が流行ったため、直接肖像されているのではなく、ここでは、本人とフランス語で同じ名前「<a href="https://ja.wikipedia.org/wiki/ディアーナ" title="https://ja.wikipedia.org/wiki/ディアーナ"><ruby lang="ja">ディアーヌ<rp>(</rp><rt lang="fr">Diane</rt><rp>)</rp></ruby></a>」で知られる狩猟女神の姿で、表されている。<br>
この並行肖像の元、以下に読めれる、ローマ帝国時代に生きた作家<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス"><ruby lang="ja">オウィディウス<rp>(</rp><rt lang="la">Ovidius</rt><rp>)</rp></ruby></a> が書いた「<a href="https://ja.wikipedia.org/wiki/変身物語" title="https://ja.wikipedia.org/wiki/変身物語"><ruby lang="ja">変身物語<rp>(</rp><rt lang="la">Metamorphōseōn&#160librī</rt><rp>)</rp></ruby></a>」のなかにある、日本語ではラテン語から<ruby lang="ja">ディアーナ<rp>(</rp><rt lang="la">Diana</rt><rp>)</rp></ruby>狩猟女神が現れる物語がある。<br>
<ruby lang="ja">アクタイオン<rp>(</rp><rt lang="la">Actæon</rt><rp>)</rp></ruby>王子との登場でもある。<br>
お楽しみ下さい！</p>
</div>
<h2 class="green">「変身物語」においてのティアナとアクタイオン</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td></td>
<td>力ドモスのばあい、ありあまる幸福のなかにあって、最初の悲しみのたねは、孫 アクタイオンだった。</td></tr>
<tr><td><sup>１４０</sup></td>
<td>その<ruby>額<rp>(</rp><rt>ひたい</rt><rp>)</rp></ruby>に異様な<ruby>角<rp>(</rp><rt>つの</rt><rp>)</rp></ruby>が生え、飼い犬によって存分に血をすすられたのではあったが、もとをただせば、<ruby>咎<rp>(</rp><rt>とが</rt><rp>)</rp></ruby>められるべきは「運命」であって、彼には罪はない。偶然の<ruby>過<rp>(</rp><rt>あやま</rt><rp>)</rp></ruby>ちに、何の罪があったというのであろう？</td></tr>
<tr><td></td>
<td>多くの獣たちの血で山が染まっていた。日はすでに中天にかかり、ものの影は縮められていた。</td></tr>
<tr><td><sup>１４５</sup></td>
<td>太陽はちょうど東西の両極点から等距離にあったのだ。そのとき、ボイオティアの青年 アクタイオンは、辺鄙な森を歩き回っている猟仲間たちに静かな声でこうよびかけた。</p>
<p>「おい、みんな、綱も槍も、獣たちの血で濡れている。</td></tr>
<tr><td><sup>１５０</sup></td>
<td>今日の結果は上々の首尾だった。明朝、<ruby>紅<rp>(</rp><rt>くれない</rt><rp>)</rp></ruby>馬車に乗った「<ruby>曙<rp>(</rp><rt>アウロラ</rt><rp>)</rp></ruby>」が、輝く光をよみがえらせたとき、この猟を続けるとしよう。いま、太陽神は東西の両地点に等しい距離にあって、熱気が地面にひび割れをつくっている。さしあたり仕事を中止して、猟綱をとりのけるよかろう！」</td></tr>
<tr><td><sup>１５５</sup></td>
<td>ここは帯を高く締めたディアナ女神に献げられた聖地になっている。そのいちばん奥深いところに、木々に囲まれた洞窟があり、<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp>手<rp>(</rp><rt>で</rt><rp>)</rp></ruby>はいっさい加えられていない。むしろ、自然が、巧みな技によって、人工を真似している。</td></tr>
<tr><td><sup>１６０</sup></td>
<td>出来たままの軽石と、軽凝灰岩とで、天然のアーチをつくっているのだ。右手には、透きとおった泉がせせらいでいて、水量は少ないながら、草に縁どられて、大きく開けている。</td></tr>
<tr><td></td>
<td>いつも、ここで、森の神ディアナは狩りに疲れると、初々しい<ruby>処女<rp>(</rp><rt>おとめ</rt><rp>)</rp></ruby>の身体に、きれいな水を浴びるのだった。</td></tr>
<tr><td><sup>１６５</sup></td>
<td>今もここにやって来ると、<ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby>たちのなかで、武器運びの役をしているひとりに、投げ槍と矢筒と、<ruby>弦<rp>(</rp><rt>つる</rt><rp>)</rp></ruby>を<ruby>弛<rp>(</rp><rt>ゆる</rt><rp>)</rp></ruby>めた弓とを手渡した。もうひとりが、脱いだ衣裳を手に受けとる。ふたりが、履物を<ruby>脱<rp>(</rp><rt>ぬ</rt><rp>)</rp></ruby>がせる。彼女たちよりも経験豊かな河神イスメノスの娘クロカレが、首もとに乱れる髪を束ねあげる。もっとも、自分の髪はほどけたままだ。</td></tr>
<tr><td><sup>１７０</sup></td>
<td>ネペレ、ヒュアレ、ラニスそれにプ力セカスとピアレなどの<ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby>たちが、水を汲んで、大きなかめからそれを<ruby>注<rp>(</rp><rt>そそ</rt><rp>)</rp></ruby>ぎかける。</td></tr>
<tr><td></td>
<td>ディアナが、ここで、いつもの水浴びをしている時のことだった。狩りを延期したカドモスの孫が、</td></tr>
<tr><td><sup>１７５</sup></td>
<td>見知らぬ森をおぼつかない足どりで彷徨いながら、ちょうどこの森にたどりついた。運命が、彼を招きよせたという他はない。</td></tr>
<tr><td></td>
<td>アクタイオンが、泉の水で濡れた洞窟にはいると、男の姿に気づいた<ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby>たちは、裸体のまま、胸を打ちたたいて</td></tr>
<tr><td><sup>１８０</sup></td>
<td>不意の悲鳴を森いっぱいに響かせた。わっとディアナのまわりを囲むと、自分たちの身体で女神を隠した。が、女神は彼女たちより背が高く、みんなよりも首ひとつだけ抜きんでていた。傾いたタ日を真正面から受けて、<ruby>紅<rp>(</rp><rt>くれない</rt><rp>)</rp></ruby>に染まる雲の色か、それとも、あの真っ赤な「<ruby>曙<rp>(</rp><rt>アウロラ</rt><rp>)</rp></ruby>」の色あいにか一一</td></tr>
<tr><td><sup>１８５</sup></td>
<td>そんな色が、裸を見られたディアナの顔に散った。女神は仲間の<ruby>妖精<rp>(</rp><rt>ニンフ</rt><rp>)</rp></ruby>たちの群にとり巻かれてはいたものの、わきへ身をよじって、顔をうしろへ背けた。矢が手近にあればよいと思ったが、さしあたり、そばにある水をすくいあげて、男の顔に浴びせかけた。</td></tr>
<tr><td><sup>１９０</sup></td>
<td>仕返しの水を相手の髪にふりかけながら、そのうえ、彼にさし迫った悲運をこう予言した。「裸のわたしを見たと言いふらしてもよいのですよ。ただし、そうすることができたらね」</td></tr>
<tr><td><sup>１９５</sup></td>
<td>脅しはこれだけだったが、見ると、もう長寿の生物といわれる雄鹿の<ruby>角<rp>(</rp><rt>つの</rt><rp>)</rp></ruby>が、アクタイオンの濡れた頭に生え、頭が長くなり、耳の先が尖っている。手が足と入れ替わり、腕は、長い脚に変わっている。全身が、まだらの毛皮に覆われている。それに、この動物につきものの、臆病心も与えられた。英雄アクタイオンが、一散に逃げ出したのだ。走りながら、自分がこうも速いのに驚いている。</td></tr>
<tr><td><sup>２００</sup></td>
<td>だが、水にうつった顔を見ると、「何と惨めな俺だ！」と叫ぼうとした。が声がついて来ない。呻き声をあげた。それが、彼の声のすべてだった。あふれる涙が、<ruby>頬<rp>(</rp><rt>ほお</rt><rp>)</rp></ruby>を伝いおりたがその頬も、借り物のように思える。ただ、心だけは、むかしのまま残っていた。どうしたらよいのだろう？わが家へ、王宮へ戻ったものか、</td></tr>
<tr><td><sup>２０５</sup></td>
<td>それとも、森に隠れていようか？ 恥ずかしさが前者を、恐ろしさが後者を、妨げる。</td></tr>
<tr><td></td>
<td>あれこれ迷っているうちに、犬たちに見つかってしまった。まず、メランプスと嗅覚の鋭いイクノバテスが吠え声で合図した。イクノバテスはクレタ犬でメランプスはスパルタ種だ。それから、ほかの犬たちが、<ruby>疾風<rp>(</rp><rt>はやて</rt><rp>)</rp></ruby>よりも早く駈けて来る。</td></tr>
<tr><td><sup>２１０</sup></td>
<td>パンパゴス、ドルケウス、オリバソス。これらみな、アルカディア犬だ。たくましいネプロポノス、<ruby>獰<rp>(</rp><rt>どう</rt><rp>)</rp>猛<rp>(</rp><rt>もう</rt><rp>)</rp></ruby>なテロンに、ライラプス。足の早さがとりえのプテレラス、鼻のきくアグレ、最近野猪に一撃を食ったヒュアレオス、狼の子のナペー、かつては羊の番をしていたポイメニス、</td></tr>
<tr><td><sup>２１５</sup></td>
<td>二匹の仔をつれたハルプュイア、腹の締まったシュキオン犬ラドン。ドロマス、カナケ、スティクテティグリスに、アルケ。白毛のレウコン、黒毛のアスポロス、いたって頑強なラコン、脚力無類のアエロ、</td></tr>
<tr><td><sup>２２０</sup></td>
<td>トオス。俊足のリエキスケと、その兄弟キュプリオス、黒額の真ん中だけがひときわ白いハルパロス、メラネウス、むく毛のラクネ。クレタ犬を父として、スパルタ犬母とする、ラブロスにアグリオドス、声の鋭いヒュラクトル。その他、 多くの犬がきた。</td></tr>
<tr><td><sup>２２５</sup></td>
<td>これらの犬たちが、獲物を狙って、 崖を、近づき難い岩場を、険しかろうが、道がなかろうが、おかまいなしに追いかけて来る。彼はしばしば自分が獣らを追ったところを、いま必死に逃げ走る。それも、何ということだ！自分の飼い犬に追われているのだ。大声でこう叫びたかった。「おれはアクタイオンだ。お前たちの飼い主ではないか！」が、気があせっても、言葉は出ない。犬たちの吠え声だけが、空中にこだまする。</td></tr>
<tr><td></td>
<td>最初に、メランカイテスが彼の背中を傷つけた。二番手がテロダマス。そして、オレシトロポスが肩にくらいついた。彼らは、ほかの犬たちよりは出遅れたのだが、山伝いの近道をとおって、</td></tr>
<tr><td><sup>２３５</sup></td>
<td>先回りしたのだ。彼らは、主人をつかまえている間に、残りの群が集まって来て、からだに牙の雨をふらせる。もうこれ以上、傷を与えるべき<ruby>隙<rp>(</rp><rt>すき</rt><rp>)</rp>間<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>もないほどだ。アクタイオンは、呻き苦しむ。その声は、人間の声ではなく、かといって、鹿が出しうる声でもない。ともかく、この悲しい嘆きがなつかしい山々にあふれる。</td></tr>
<tr><td><sup>２４０</sup></td>
<td>とりすがるように膝を折り、嘆願者そっくりに、さしのべるべき腕のかわりに、ものいわぬ顔を周囲にふりむける。</td></tr>
<tr><td></td>
<td>仲間たち、何も知らないで、たけりたつ犬の群を、いつものかけ声でけしかけながら、目でアクタイオンを探している。ここにはいないものと思って、われがちに大声でアクタイオンの名を呼んでいる。</td></tr>
<tr><td><sup>２４５</sup></td>
<td>本人は、名前の獲物を見物できないとは、何をぐずぐずしているのだろうというのだ。こちらは、いあわせたくもないのに、ここにいる。自分の飼い犬たちは、四方からとりかこみ、</td></tr>
<tr><td><sup>２５０</sup></td>
<td>鼻づらを彼のからだに埋め、雄鹿に変身した主人を引き裂いている。数え切れない傷を受けて息絶えるまで、矢筒を持つディアナの怒りはみたされなかったという。</td></tr>
</tbody>
</table>
<p><span style="color: #3d8b3d;">オウィディウス、変身物語、第３巻より</span>  </p>
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
<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:NONE EN:NONE -->

<article>

<p><time datetime="2017-11-21">２０１７年１１月２１日</time></p>

<h1 class="green"><cite>ラ・マルセイエーズ</cite></h1>

<div class="notices green">
<p>一般に知られている翻訳に不満がありましたので、よりフランス語本文に忠実に改めて翻訳しました。</p>
<p>比較しやすいように、本文と上・下対照的に並べて、註釈を加え新しく翻訳に当たっての自分の選択を説明しています。</p>
</div>

<h2 class="green"><cite>ラ・マルセイエーズ</cite>、新訳</h2>

<div id="display-text-rousi">
<div id="display-sub-text-rousi">

<h6>原稿文</h6>

<ol class="doc">
  <li value="1">Allons enfants de la Patrie,</li>
  <li value="2">Le jour de gloire est arrivé!</li>
  <li value="3"><a href="#contre" title="対して"><span style="color: #3d8b3d;">Contre</span></a> nous de la <a href="#tyrannie" title="僭主政治"><span style="color: #3d8b3d;">tyrannie</span></a>,</li>
  <li value="4">L'étendard sanglant est levé,</li>
  <li value="5">L'étendard sanglant est levé!</li>

  <li value="6" class="top-space">Entendez-vous <a href="#campagnes" title="我らの田舎で"><span style="color: #3d8b3d;">dans les campagnes</span></a></li>
  <li value="7"><a href="#mugir" title="咆哮"><span style="color: #3d8b3d;">Mugir</span></a> ces <a href="#feroces" title="むごたらしい"><span style="color: #3d8b3d;">féroces</span></a> soldats?</li>
  <li value="8">Ils viennent <a href="#jusque" title="まで"><span style="color: #3d8b3d;">jusque</span></a> dans nos bras</li>
  <li value="9"><a href="#egorger" title=", "><span style="color: #3d8b3d;">Égorger</span></a> nos fils<a href="#virgule" title=", "><span style="color: #3d8b3d;">, </span></a>nos compagnes!</li>

  <li value="10" class="top-space">Aux armes, citoyens,</li>
  <li value="11">Formez <a href="#bataillons" title="隊伍"><span style="color: #3d8b3d;">vos bataillons,</span></a></li>
  <li value="12"><a href="#marchons" title="歩こう"><span style="color: #3d8b3d;">Marchons, marchons!</span></a></li>
  <li value="13"><a href="#subjonctif" title="ように"><span style="color: #3d8b3d;">Qu'</span></a>un sang <a href="#impur" title="不純な"><span style="color: #3d8b3d;">impur</span></a></li>
  <li value="14"><a href="#abreuve" title="潤す"><span style="color: #3d8b3d;">Abreuve</span></a> nos sillons!</li>
</ol>

</div>

<div id="translation-text-rousi">
<h6 class="left">翻訳</h6>

<ol class="doc">
  <li value="1">行こう、祖国の子らよ、</li>
  <li value="2">栄光の日が来た<span style="color: #3d8b3d;">！</span></li>
  <li value="3">我らに<a href="#note_3" title="対す" id="contre"><span style="color: #3d8b3d;">対す</span></a><a href="#note_3" title="僭主政治" id="tyrannie"><span style="color: #3d8b3d;"><ruby>僭<rp>(</rp><rt>せん</rt><rp>)</rp>主<rp>(</rp><rt>しゅ</rt><rp>)</rp></ruby>政治</span></a>、</li>
  <li value="4">血まみれの旗が掲げられた、</li>
  <li value="5">血まみれの旗が掲げられた！</li>

  <li value="6" class="top-space">聞こえるか<span style="color: #3d8b3d;">、</span><a href="#note_6" title="我らの田舎で" id="campagnes"><span style="color: #3d8b3d;">我らの田舎で</span></a></li>
  <li value="7">この<a href="#note_7" title="むごたらしい" id="feroces"><span style="color: #3d8b3d;">むごたらしい</span></a>兵どもが<ruby>咆<rp>(</rp><rt>ほう</rt><rp>)</rp>哮<rp>(</rp><rt>こう</rt><rp>)</rp></ruby><a href="#note_7" title="咆哮" id="mugir"><span style="color: #3d8b3d;">するのを？</span></a></li>
  <li value="8">奴らは我らの元に<a href="#note_8" title="まで" id="jusque"><span style="color: #3d8b3d;">まで</span></a>来て</li>
  <li value="9">我らの子<a href="#note_9" id="virgule"><span style="color: #3d8b3d;">、</span></a>妻の喉を<ruby>掻<rp>(</rp><rt>か</rt><rp>)</rp></ruby>き<a href="#note_9" title="掻き切りに" id="egorger"><span style="color: #3d8b3d;">切りに</span></a>！</li>

  <li value="10" class="top-space">武器を取れ<span style="color: #3d8b3d;">、</span>市民らよ<span style="color: #3d8b3d;">、</span></li>
  <li value="11"><a href="#note_11" title="隊伍" id="bataillons"><span style="color: #3d8b3d;"><ruby>隊伍<rp>(</rp><rt>たいご</rt><rp>)</rp></ruby></span></a>を組め<span style="color: #3d8b3d;">、</span></li>
  <li value="12"><a href="#note_12" title="歩こう" id="marchons"><span style="color: #3d8b3d;">歩こう、歩こう！</span></a></li>
  <li value="13"><a href="#note_11" title="歩こう" id="impur"><span style="color: #3d8b3d;">不純な</span></a>血が</li>
  <li value="14">我らの<ruby>畝<rp>(</rp><rt>うね</rt><rp>)</rp></ruby>を<a href="#note_14" title="潤すように！" id="abreuve"><span style="color: #3d8b3d;">潤すように！</span></a></li>
</ol>

</div>
</div>

<footer>

<div class="notices green">
<p>参考文書：「<a href="https://ja.wikipedia.org/wiki/ラ・マルセイエーズ" title="https://ja.wikipedia.org/wiki/ラ・マルセイエーズ"><cite><ruby lang="ja">ラ<rp>(</rp><rt lang="fr">La</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>マルセイエーズ<rp>(</rp><rt lang="fr">Marseillaise</rt><rp>)</rp></ruby></cite></a>」 、ウィキペディア<time datetime="2017-11-17">２０１７年１１月１７日</time>。</p>
<p>新訳：独自</p>
<p>【文書の御使用は「<a href="#contre" title="対して"><ruby>フランソワ<rp>(</rp><rt>François</rt><rp>)</rp>・<rp>(</rp><rt></rt><rp>)</rp>ヴィディ<rp>(</rp><rt>VIDIT</rt><rp>)</rp></ruby></a> 訳」、リンクを含む、追加で可能としている。】</p>
</div>

</footer>

<aside>

<h4 id="note_3" class="green note">第一変更・僭主政治</h4>

<div id="translation-text-rousi">

<p id="3" class="single-li"><span style="color: #3d8b3d;">Contre</span> nous de la <span style="color: #3d8b3d;">tyrannie</span>、<wbr　<wbr><span style="color: grey;">フランス語本文</span></p>
<p class="no-puce">我らに向かって暴君の　<wbr><span style="color: grey;">ウィキペディア訳</span></p>
<p class="no-puce">我らに<span style="color: #3d8b3d;">対す<ruby>僭<rp>(</rp><rt>せん</rt><rp>)<rp>主<rp>(</rp><rt>しゅ</rt><rp>)</rp></ruby>政治</span>、<wbr>　<wbr><span style="color: grey;">フランソワ・ヴィディ訳</span></p>

</div>

<p><span style="color: #3d8b3d;">Contre</span> nous の「contre」は「向かう」にならず「contre」が「対立」の意を示すことから「<a href="#contre" title="対す" id="note_contre">対す</a>」に。</p>
<p>de la <span style="color: #3d8b3d;">tyrannie</span>, の「,」は次の文節との関係を示し、勝手に「の」の関係を付けることは出来ません。</p>
<p>tyrannie に「暴君」という訳を当てるのは、短絡的すぎるので、ここは革命期のローマ共和政の模範的道徳思想への愛着を含む「<a href="#tyrannie" title="僭主政治" id="note_tyrannie"><ruby>僭<rp>(</rp><rt>せん</rt><rp>)</rp>主<rp>(</rp><rt>しゅ</rt><rp>)</rp></ruby>政治</a>」に。</p>

<footer>
  <p class="puce"><a href="#contre" title="対す">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_6" class="green note">第二変更・我らの田舎で</h4>

<div id="translation-text-rousi">

<p id="6" class="single-li">Entendez-vous <span style="color: #3d8b3d;">dans les campagnes</span>　<wbr><span style="color: grey;">フランス語本文</span></p>
<p class="no-puce">聞こえるか戦場の　<wbr><span style="color: grey;">ウィキペディア訳</span></p>
<p class="no-puce">聞こえるか、<wbr><span style="color: #3d8b3d;">我らの田舎で</span>　<wbr><span style="color: grey;">フランソワ・ヴィディ訳</span></p>

</div>

<p><span style="color: #3d8b3d;">dans les campagnes</span> の「campagnes」、「戦場」にならず、「田舎」の意を示すことから、「田舎」に。</p>
<p>但し、「campagnes」は複数形である意で、一般の田舎ではなく「田舎それぞれ」と見なさなければなりません。</p>
<p>その上、祖国がある敵に侵入されている場面で「<a href="#campagnes" title="我らの田舎で" id="note_campagnes">我らの田舎で</a>」としました。</p>

<footer>
  <p class="puce"><a href="#campagnes" title="我らの田舎で">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_7" class="green note">第三変更・むごたらしい・咆哮するのを</h4>

<div id="translation-text-rousi">

<p id="7" class="single-li"><span style="color: #3d8b3d;">Mugir</span> ces <span style="color: #3d8b3d;">féroces</span> soldats ?　<wbr><span style="color: grey;">フランス語本文</span></p>
<p class="no-puce">残忍な敵兵の咆哮を?　<wbr><span style="color: grey;">ウィキペディア訳</span></p>
<p class="no-puce">このむ<span style="color: #3d8b3d;">ごたらしい</span>兵どもが<ruby>咆<rp>(</rp><rt>ほう</rt><rp>)</rp>哮<rp>(</rp><rt>こう</rt><rp>)</rp></ruby><spanstyle="color: #3d8b3d;">するのを？</span>　<wbr><span style="color: grey;">フランソワ・ヴィディ訳</span></p>

</div>

<p><span style="color: #3d8b3d;">Mugir</span> は動詞であるので、ここでは、聞こえているのはただの「<ruby>咆<rp>(</rp><rt>ほう</rt><rp>)</rp>哮<rp>(</rp><rt>こう</rt><rp>)</rp></ruby>」ではなく、大勢の兵士たちがやって来ている動きでもありますので「咆哮を聞こえる」では、少し物足りない感じがするので、より動的な感じを出して「咆哮<a href="#mugir" title="するのを？" id="note_mugir">するのを？</a>」にしました。</p>
<p><span style="color: #3d8b3d;">féroces</span> の意は「残忍」になりません。「féroces」が「当たったら、怖い」との意に過ぎませんので「<a href="#feroces" title="むごたらしい" id="note_feroces">むごたらしい</a>」にしました。</p>
<p>また、指示代名詞の ces もあって、複数を強調していますから「兵」に語尾「ども」を付け加えました。</p>

<footer>
  <p class="puce"><a href="#mugir" title="するのを？">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_8" class="green note">第四変更・我らの元にまで来て</h4>

<div id="translation-text-rousi">

<p id="8" class="single-li">Ils viennent <span style="color: #3d8b3d;">jusque</span> dans nos bras　<wbr><span style="color: grey;">フランス語本文</span></p>
<p class="no-puce">奴らは我らの元に来て　<wbr><span style="color: grey;">ウィキペディア訳</span></p>
<p class="no-puce">奴らは我らの元に<span style="color: #3d8b3d;">まで</span>来て　<wbr><span style="color: grey;">フランソワ・ヴィディ訳</span></p>

</div>

<p><span style="color: #3d8b3d;">jusque</span> dans nos bras は直訳すると「我らの腕元にまで」となります。</p>
<p>そこまでにすると日本語ではちょっと変だとなってしまいますので、そのまま「まで」の意が含まれている jusque を無視せずに「<a href="#jusques" title="我らの元にまで来て" id="note_jusques">我らの元にまで来て</a>」に。</p>

<footer>
  <p class="puce"><a href="#jusques" title="我らの元にまで来て">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_9" class="green note">第五変更・掻き切りに</h4>

<div id="translation-text-rousi">

<p id="9" class="single-li"><span style="color: #3d8b3d;">Égorger</span> nos fils<span style="color: #3d8b3d;">, </span>nos compagnes !　<wbr><span style="color: grey;">フランス語本文</span></p>
<p class="no-puce">我らの子と妻の喉を搔き切る！　<wbr><span style="color: grey;">ウィキペディア訳</span></p>
<p class="no-puce">我らの子、妻の喉を<ruby>掻<rp>(</rp><rt>か</rt><rp>)</rp></ruby>き切りに！　<wbr><span style="color: grey;">フランソワ・ヴィディ訳</span></p>

</div>

<p><span style="color: #3d8b3d;">Égorger</span> は前の文節（8）の「viennent」と関係していますので、このままだと「兵士たちは来て」から、その後、「搔き切る」のままでは合いませんので「<a href="#egorger" title="掻き切りに" id="note_egorger">掻き切りに</a>」にしました。</p>

<footer>
  <p class="puce"><a href="#egorger" title="掻き切りに">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_11" class="green note">第六変更・隊伍</h4>

<div id="translation-text-rousi">

<p id="11" class="single-li">Formez <span style="color: #3d8b3d;">vos bataillons</span>、<wbr　<wbr><span style="color: grey;">フランス語本文</span></p>
<p class="no-puce">隊列を組め　<wbr><span style="color: grey;">ウィキペディア訳</span></p>
<p class="no-puce"><span style="color: #3d8b3d;"><ruby>隊伍<rp>(</rp><rt>たいご</rt><rp>)</rp><ruby></span>を組め　<wbr><span style="color: grey;">フランソワ・ヴィディ訳</span></p>

</div>

<p><span style="color: #3d8b3d;">bataillons</span> は古代ローマの語彙であって、ただ「隊列」を組むではなりませんので「<a href="#bataillons" title="隊伍" id="note_bataillons"><ruby>隊伍<rp>(</rp><rt>たいご</rt><rp>)</rp></ruby></a>」にしました。</p>
<p>ここでは<ruby>僭主<rp>(</rp><rt>せんしゅ</rt><rp>)</rp></ruby>政治に対してローマの理想が密かに言葉に働いてると思われる。</p>

<footer>
  <p class="puce"><a href="#bataillons" title="隊伍">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_12" class="green note">第七変更・歩こう！</h4>

<div id="translation-text-rousi">

<p id="12" class="single-li"><span style="color: #3d8b3d;">Marchons, marchons !</span>　<wbr><span style="color: grey;">フランス語本文</span></p>
<p class="no-puce">進もう、進もう！　<wbr><span style="color: grey;">ウィキペディア訳</span></p>
<p class="no-puce"><span style="color: #3d8b3d;">歩こう、歩こう！</span>　<wbr><span style="color: grey;">フランソワ・ヴィディ訳</span></p>

</div>

<p><span style="color: #3d8b3d;">Marchons</span> は marcher との動詞であって「歩く」との意ですので、ここでは「進む」にまで訳す訳はないと見て「<a href="#marchons" title="歩こう、歩こう！" id="note_marchons">歩こう</a>」にしました。ここでは、特にウィキペディアの訳を評価出来なくなってしまうところとなります。</p>

<footer>
  <p class="puce"><a href="#marchons" title="歩こう、歩こう！">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_12" class="green note">第八変更・不純な</h4>

<div id="translation-text-rousi">

<p id="12" class="single-li">Qu'un sang <span style="color: #3d8b3d;">impur</span>　<wbr><span style="color: grey;">フランス語本文</span></p>
<p class="no-puce">汚れた血が　<wbr><span style="color: grey;">ウィキペディア訳</span></p>
<p class="no-puce"><span style="color: #3d8b3d;">不純な</span>血が　<wbr><span style="color: grey;">フランソワ・ヴィディ訳</span></p>

</div>

<p><span style="color: #3d8b3d;">impur</span> は「Im」という接頭語で「不」と「pur」という語幹で「純」で「不純」の意が示されています。ここでは、何に対して不純なのかということになると、その上に置いてある「<ruby>僭<rp>(</rp><rt>せん</rt><rp>)</rp>主<rp>(</rp><rt>しゅ</rt><rp>)</rp></ruby>政治」に対してだとなります。「汚れた」としますと敵対関係が強調されますが、敵だから不純ではなく、政治形態が不自然だから敵対関係になっているとの意に「<a href="#impur" title="不純な" id="note_impur">不純な</a>」にしました。</p>

<footer>
  <p class="puce"><a href="#impur" title="不純な">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_14" class="green note">第九変更・潤すように！</h4>

<div id="translation-text-rousi">

<p id="14" class="single-li"><span style="color: #3d8b3d;">Abreuve</span> nos sillons !　<wbr><span style="color: grey;">フランス語本文</span></li>
<p class="no-puce">我らの畑の畝を満たすまで！　<wbr><span style="color: grey;">ウィキペディア訳</span></p>
<p class="no-puce">我らの<ruby>畝<rp>(</rp><rt>うね</rt><rp>)</rp></ruby>を<span style="color: #3d8b3d;">潤すように！</span>、　<wbr><span style="color: grey;">フランソワ・ヴィディ訳</span></p>

</div>

<p><span style="color: #3d8b3d;">Abreuve</span> は「満たす」にならず「潤す」の意を示すことから「潤す」に。</p>
<p>その上、前の文節（13）との関係で、Que が仮定法の形を示していることから「まで」ととても訳せられにくく「<a href="#abreuve" title="不純な" id="note_abreuve">潤すように！</a>」にしました。</p>
<p>「我らの畑の畝を」と訳された「nos
sillons」には「畑の」が無いため「我らの<ruby>畝<rp>(</rp><rt>うね</rt><rp>)</rp></ruby>」に直しました。</p>
<p>ここでは、革命の視点から、<ruby>僭<rp>(</rp><rt>せん</rt><rp>)</rp>主<rp>(</rp><rt>しゅ</rt><rp>)</rp></ruby>政治が人間の自然状態を反することで「祖国の子」として、または自由の「市民」として許すことが出来はしません。</p>

<footer>
  <p class="puce"><a href="#abreuve" title="不純な">文書に戻る&nbsp↩</a></p>
</footer>

<h4 id="note_14" class="green note">ウィキペディア翻訳</h4>

<div id="translation-text-rousi">

<ol class="doc">
  <li value="1">行こう、祖国の子らよ、</li>
  <li value="2">栄光の日が来た、</li>
  <li value="3">我らに<a href="#note_3" title="向かって暴君の"><span style="color: #3d8b3d;">向かって暴君の</span></a></li>
  <li value="4">血まみれの旗が掲げられた、</li>
  <li value="5">血まみれの旗が掲げられた！</li>

  <li value="6" class="top-space">聞こえるか<a href="#note_6" title="戦場の"><span style="color: #3d8b3d;">戦場の</span></a></li>
  <li value="7"><a href="#note_7" title="残忍な敵兵の咆哮を?"><span style="color: #3d8b3d;">残忍な敵兵の咆哮を?</span></a></li>
  <li value="8">奴らは<a href="#note_8" title="我らの元に来て"><span style="color: #3d8b3d;">我らの元に来て</span></a></li>
  <li value="9">我らの<a href="#note_9" title="子と妻の喉を搔き切る！"><span style="color: #3d8b3d;">子と妻の喉を搔き切る！</span></a></li>

  <li value="10" class="top-space">武器を取れ市民らよ！</li>
  <li value="11"><a href="#note_11" title="隊列"><span style="color: #3d8b3d;">隊列</span></a>を組め</li>
  <li value="12"><a href="#note_12" title="進もう、進もう！"><span style="color: #3d8b3d;">進もう、進もう！</span></a></li>
  <li value="13"><a href="#note_13" title="汚れた"><span style="color: #3d8b3d;">汚れた</span></a>血が</li>
  <li value="14"><a href="#note_14" title="我らの畑の畝を満たすまで！"><span style="color: #3d8b3d;">我らの畑の畝を満たすまで！</span></a></li>
</ol>
</div>

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
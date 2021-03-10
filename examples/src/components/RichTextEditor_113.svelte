<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
  <p><span>２１</span>日<i class="fa fa-calendar-o fa-2x"></i></p>
  <p>１１月</p>
  <p><span>２０１７年</span></p>
  <h1 class="green"><a href="/blog/ja/la-marseillaise" rel="bookmark">ラ・マルセイエーズ</a></h1>
  <div class="notices green">
<p>一般に知られている翻訳に不満がありましたので、よりフランス語本文に忠実に改めて翻訳しました。<br />
比較しやすいように、本文と上・下対照的に並べて、註釈を加え新しく翻訳に当たっての自分の選択を説明しています。</p>
</div>
<h2 class="green">ラ・マルセイエーズ、新訳</h2>
<div id="display-text-rousi">
<div id="display-sub-text-rousi">
<h6>原稿文</h6>
<table>
<thead>
<tr><th><span hidden="">hidden</span></th></tr>
</thead>
<tbody>
<tr><td><sup>1</sup></td><td>Allons enfants de la Patrie,</td></tr>
<tr><td><sup>2</sup></td><td>Le jour de gloire est arrivé!</td></tr>
<tr><td><sup>3</sup></td><td><a href="#contre" title="対して"><span style="color: #3d8b3d;">Contre</span></a> nous de la <a href="#tyrannie" title="僭主政治"><span style="color: #3d8b3d;">tyrannie</span></a>,</td></tr>
<tr><td><sup>4</sup></td><td>L'étendard sanglant est levé,</td></tr>
<tr><td><sup>5</sup></td><td>L'étendard sanglant est levé!</td></tr>
<p><br></td></tr>
<tr><td><sup>6</sup></td><td>Entendez-vous <a href="#campagnes" title="我らの田舎で"><span style="color: #3d8b3d;">dans les campagnes</span></a></td></tr>
<tr><td><sup>7</sup></td><td><a href="#mugir" title="咆哮"><span style="color: #3d8b3d;">Mugir</span></a> ces <a href="#feroces" title="むごたらしい"><span style="color: #3d8b3d;">féroces</span></a> soldats?</td></tr>
<tr><td><sup>8</sup></td><td>Ils viennent <a href="#jusque" title="まで"><span style="color: #3d8b3d;">jusque</span></a>　dans nos bras</td></tr>
<tr><td><sup>9</sup></td><td><a href="#egorger" title=", "><span style="color: #3d8b3d;">Égorger</span></a> nos fils<a href="#virgule" title=", "><span style="color: #3d8b3d;">, </span></a>nos compagnes!</td></tr>
<p><br></td></tr>
<tr><td><sup>10</sup></td><td>Aux armes, citoyens,</td></tr>
<tr><td><sup>11</sup></td><td>Formez <a href="#bataillons" title="隊伍"><span style="color: #3d8b3d;">vos bataillons,</span></a></td></tr>
<tr><td><sup>12</sup></td><td><a href="#marchons" title="歩こう"><span style="color: #3d8b3d;">Marchons, marchons!</span></a></td></tr>
<tr><td><sup>13</sup></td><td><a href="#subjonctif" title="ように"><span style="color: #3d8b3d;">Qu'</span></a>un sang <a href="#impur" title="不純な"><span style="color: #3d8b3d;">impur</span></a></td></tr>
<tr><td><sup>14</sup></td><td><a href="#abreuve" title="潤す"><span style="color: #3d8b3d;">Abreuve</span></a> nos sillons!</td></tr>
</tbody>
</table>
</div>
<div id="translation-text-rousi">
<h6 class="left">翻訳</h6>
<p><span style="color: lightgrey;"><i class="fa fa-quote-left fa-1x fa-pull-left fa-border"></i></span>  </p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><sup>１</sup></td>
<td>行こう、祖国の子らよ、</td>
</tr>
<tr>
<td><sup>２</sup></td>
<td>栄光の日が来た<span style="color: #3d8b3d;">！</span></td>
</tr>
<tr>
<td><sup>３</sup></td>
<td>我らに<a href="#note_3" title="対す" id="contre"><span style="color: #3d8b3d;">対す</span></a><a href="#note_3" title="僭主政治" id="tyrannie"><span style="color: #3d8b3d;"><ruby>僭<rp>(</rp><rt>せん</rt><rp>)</rp>主<rp>(</rp><rt>しゅ</rt><rp>)</rp></ruby>政治</span></a>、</td>
</tr>
<tr>
<td><sup>４</sup></td>
<td>血まみれの旗が掲げられた、</td>
</tr>
<tr>
<td><sup>５</sup></td>
<td>血まみれの旗が掲げられた！</td>
</tr>
<tr>
<td><sup>６</sup></td>
<td>聞こえるか<span style="color: #3d8b3d;">、</span><a href="#note_6" title="我らの田舎で" id="campagnes"><span style="color: #3d8b3d;">我らの田舎で</span></a></td>
</tr>
<tr>
<td><sup>７</sup></td>
<td>この<a href="#note_7" title="むごたらしい" id="feroces"><span style="color: #3d8b3d;">むごたらしい</span></a>兵どもが<ruby>咆<rp>(</rp><rt>ほう</rt><rp>)</rp>哮<rp>(</rp><rt>こう</rt><rp>)</rp></ruby><a href="#note_7" title="咆哮" id="mugir"><span style="color: #3d8b3d;">するのを？</span></a></td>
</tr>
<tr>
<td><sup>８</sup></td>
<td>奴らは我らの元に<a href="#note_8" title="まで" id="jusque"><span style="color: #3d8b3d;">まで</span></a>来て</td>
</tr>
<tr>
<td><sup>９</sup></td>
<td>我らの子<a href="#note_9" id="virgule"><span style="color: #3d8b3d;">、</span></a>妻の喉を<ruby>掻<rp>(</rp><rt>か</rt><rp>)</rp></ruby>き<a href="#note_9" title="掻き切りに" id="egorger"><span style="color: #3d8b3d;">切りに</span></a>！</td>
</tr>
<tr>
<td><sup>１０</sup></td>
<td>武器を取れ<span style="color: #3d8b3d;">、</span>市民らよ<span style="color: #3d8b3d;">、</span></td>
</tr>
<tr>
<td><sup>１１</sup></td>
<td><a href="#note_11" title="隊伍" id="bataillons"><span style="color: #3d8b3d;"><ruby>隊伍<rp>(</rp><rt>たいご</rt><rp>)</rp></ruby></span></a>を組め<span style="color: #3d8b3d;">、</span></td>
</tr>
<tr>
<td><sup>１２</sup></td>
<td><a href="#note_12" title="歩こう" id="marchons"><span style="color: #3d8b3d;">歩こう、歩こう！</span></a></td>
</tr>
<tr>
<td><sup>１３</sup></td>
<td><a href="#note_11" title="歩こう" id="impur"><span style="color: #3d8b3d;">不純な</span></a>血が</td>
</tr>
<tr>
<td><sup>１４</sup></td>
<td>我らの<ruby>畝<rp>(</rp><rt>うね</rt><rp>)</rp></ruby>を<a href="#note_14" title="潤すように！" id="abreuve"><span style="color: #3d8b3d;">潤すように！</span></a></td>
</tr>
</tbody>
</table>
<p><span style="color: lightgrey;"><i class="fa fa-quote-right fa-1x fa-pull-right fa-border"></i></span>  </p>
<p><br></p>
</div>
</div>
<hr />
<h2 id="note_3">第一変更・僭主政治</h2>
<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>3</td>
<td><span style="color: #3d8b3d;">Contre</span> nous de la <span style="color: #3d8b3d;">tyrannie</span>,</td>
<td><span style="color: lightgrey;">フランス語本文</span></td>
</tr>
<tr>
<td></td>
<td>我らに向かって暴君の</td>
<td><span style="color: lightgrey;">ウィキペディア訳</span></td>
</tr>
<tr>
<td></td>
<td>我らに<span style="color: #3d8b3d;">対す<ruby>僭<rp>(</rp><rt>せん</rt><rp>)</rp>主<rp>(</rp><rt>しゅ</rt><rp>)</rp></ruby>政治</span>、</td>
<td><span style="color: lightgrey;">フランソワ・ヴィディ訳</span></td>
</tr>
</tbody>
</table>
</div>
<p><br></p>
<p><span style="color: #3d8b3d;">Contre</span> nous の「contre」は「向かう」にならず「contre」が「対立」の意を示すことから「<a href="#contre" title="対す" id="note_contre">対す</a>」に。</p>
<p>de la <span style="color: #3d8b3d;">tyrannie</span>, の「,」は次の文節との関係を示し、勝手に「の」の関係を付けることは出来ません。<br />
tyrannie に「暴君」という訳を当てるのは、短絡的すぎるので、ここは革命期のローマ共和政の模範的道徳思想への愛着を含む「<a href="#tyrannie" title="僭主政治" id="note_tyrannie"><ruby>僭<rp>(</rp><rt>せん</rt><rp>)</rp>主<rp>(</rp><rt>しゅ</rt><rp>)</rp></ruby>政治</a>」に。<span style="color: lightgrey;"><a href="#contre" title="対す">↑</a></span></p>
<hr />
<h2 id="note_6" class="green">第二変更・我らの田舎で</h2>
<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>6</td>
<td>Entendez-vous <span style="color: #3d8b3d;">dans les campagnes</span></td>
<td><span style="color: lightgrey;">フランス語本文</span></td>
</tr>
<tr>
<td></td>
<td>聞こえるか戦場の</td>
<td><span style="color: lightgrey;">ウィキペディア訳</span></td>
</tr>
<tr>
<td></td>
<td>聞こえるか、<span style="color: #3d8b3d;">我らの田舎で</span></td>
<td><span style="color: lightgrey;">フランソワ・ヴィディ訳</span></td>
</tr>
</tbody>
</table>
</div>
<p><br></p>
<p><span style="color: #3d8b3d;">dans les campagnes</span> の「campagnes」、「戦場」にならず、「田舎」の意を示すことから、田舎」に。<br />
但し、「campagnes」は複数形である意で、一般の田舎ではなく「田舎それぞれ」と見なさなければなりません。<br />
その上、祖国がある敵に侵入されている場面で「<a href="#campagnes" title="我らの田舎で" id="note_campagnes">我らの田舎で</a>」としました。<a href="#campagnes" title="我らの田舎で">↑</a></p>
<hr />
<h2 id="note_7" class="green">第三変更・むごたらしい・咆哮するのを</h2>
<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>7</td>
<td><span style="color: #3d8b3d;">Mugir</span> ces <span style="color: #3d8b3d;">féroces</span> soldats ?</td>
<td><span style="color: lightgrey;">フランス語本文</span></td>
</tr>
<tr>
<td></td>
<td>残忍な敵兵の咆哮を?</td>
<td><span style="color: lightgrey;">ウィキペディア訳</span></td>
</tr>
<tr>
<td></td>
<td>このむ<span style="color: #3d8b3d;">ごたらしい</span>兵どもが<ruby>咆<rp>(</rp><rt>ほう</rt><rp>)</rp>哮<rp>(</rp><rt>こう</rt><rp>)</rp></ruby><span style="color: #3d8b3d;">するのを？</span></td>
<td><span style="color: lightgrey;">フランソワ・ヴィディ訳</span></td>
</tr>
</tbody>
</table>
</div>
<p><br></p>
<p><span style="color: #3d8b3d;">Mugir</span> は動詞であるので、ここでは、聞こえているのはただの「<ruby>咆<rp>(</rp><rt>ほう</rt><rp>)</rp>哮<rp>(</rp><rt>こう</rt><rp>)</rp></ruby>」ではなく、大勢の兵士たちがやって来ている動きでもありますので「咆哮を聞こえる」では、少し物足りない感じがするので、より動的な感じを出して「咆哮<a href="#mugir" title="するのを？" id="note_mugir">するのを？</a>」にしました。<br />
<span style="color: #3d8b3d;">féroces</span> の意は「残忍」になりません。「féroces」が「当たったら、怖い」との意に過ぎませんので「<a href="#feroces" title="むごたらしい" id="note_feroces">むごたらしい</a>」にしました。<br />
また、指示代名詞の ces もあって、複数を強調していますから「兵」に語尾「ども」を付け加えました。<a href="#mugir" title="するのを？">↑</a></p>
<hr />
<h2 id="note_8" class="green">第四変更・我らの元にまで来て</h2>
<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>8</td>
<td>Ils viennent <span style="color: #3d8b3d;">jusque</span> dans nos bras</td>
<td><span style="color: lightgrey;">フランス語本文</span></td>
</tr>
<tr>
<td></td>
<td>奴らは我らの元に来て</td>
<td><span style="color: lightgrey;">ウィキペディア訳</span></td>
</tr>
<tr>
<td></td>
<td>奴らは我らの元に<span style="color: #3d8b3d;">まで</span>来て</td>
<td><span style="color: lightgrey;">フランソワ・ヴィディ訳</span></td>
</tr>
</tbody>
</table>
</div>
<p><br></p>
<p><span style="color: #3d8b3d;">jusque</span> dans nos bras は直訳すると「我らの腕元にまで」となります。<br />
そこまでにすると日本語ではちょっと変だとなってしまいますので、そのまま「まで」の意が含まれている jusque を無視せずに「<a href="#jusques" title="我らの元にまで来て" id="note_jusques">我らの元にまで来て</a>」に。<a href="#jusques" title="我らの元にまで来て">↑</a></p>
<hr />
<h2 id="note_9" class="green">第五変更・掻き切りに</h2>
<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>9</td>
<td><span style="color: #3d8b3d;">Égorger</span> nos fils<span style="color: #3d8b3d;">, </span>nos compagnes !</td>
<td><span style="color: lightgrey;">フランス語本文</span></td>
</tr>
<tr>
<td></td>
<td>我らの子と妻の喉を搔き切る！</td>
<td><span style="color: lightgrey;">ウィキペディア訳</span></td>
</tr>
<tr>
<td></td>
<td>我らの子、妻の喉を<ruby>掻<rp>(</rp><rt>か</rt><rp>)</rp></ruby>き切りに！</td>
<td><span style="color: lightgrey;">フランソワ・ヴィディ訳</span></td>
</tr>
</tbody>
</table>
</div>
<p><br></p>
<p><span style="color: #3d8b3d;">Égorger</span> は前の文節（8）の「viennent」と関係していますので、このままだと「兵士たちは来て」から、その後、「搔き切る」のままでは合いませんので「<a href="#egorger" title="掻き切りに" id="note_egorger">掻き切りに</a>」にしました。<a href="#egorger" title="掻き切りに">↑</a></p>
<hr />
<h2 id="note_11" class="green">第六変更・隊伍</h2>
<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>11</td>
<td>Formez <span style="color: #3d8b3d;">vos bataillons</span>,</td>
<td><span style="color: lightgrey;">フランス語本文</span></td>
</tr>
<tr>
<td></td>
<td>隊列を組め</td>
<td><span style="color: lightgrey;">ウィキペディア訳</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #3d8b3d;"><ruby>隊伍<rp>(</rp><rt>たいご</rt><rp>)</rp></ruby></span>を組め</td>
<td><span style="color: lightgrey;">フランソワ・ヴィディ訳</span></td>
</tr>
</tbody>
</table>
</div>
<p><br></p>
<p><span style="color: #3d8b3d;">bataillons</span> は古代ローマの語彙であって、ただ「隊列」を組むではなりませんので「<a href="#bataillons" title="隊伍" id="note_bataillons"><ruby>隊伍<rp>(</rp><rt>たいご</rt><rp>)</rp></ruby></a>」にしました。<br />
ここでは<ruby>僭主<rp>(</rp><rt>せんしゅ</rt><rp>)</rp></ruby>政治に対してローマの理想が密かに言葉に働いてると思われる。<a href="#bataillons" title="隊伍">↑</a></p>
<hr />
<h2 id="note_12" class="green">第七変更・歩こう！</h2>
<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>12</td>
<td><span style="color: #3d8b3d;">Marchons, marchons !</span></td>
<td><span style="color: lightgrey;">フランス語本文</span></td>
</tr>
<tr>
<td></td>
<td>進もう、進もう！</td>
<td><span style="color: lightgrey;">ウィキペディア訳</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #3d8b3d;">歩こう、歩こう！</span></td>
<td><span style="color: lightgrey;">フランソワ・ヴィディ訳</span></td>
</tr>
</tbody>
</table>
</div>
<p><br></p>
<p><span style="color: #3d8b3d;">Marchons</span> は marcher との動詞であって「歩く」との意ですので、ここでは「進む」にまで訳す訳はないと見て「<a href="#marchons" title="歩こう、歩こう！" id="note_marchons">歩こう</a>」にしました。ここでは、特にウィキペディアの訳を評価出来なくなってしまうところとなります。<a href="#marchons" title="歩こう、歩こう！">↑</a></p>
<hr />
<h2 id="note_12" class="green">第八変更・不純な</h2>
<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>12</td>
<td>Qu'un sang <span style="color: #3d8b3d;">impur</span></td>
<td><span style="color: lightgrey;">フランス語本文</span></td>
</tr>
<tr>
<td></td>
<td>汚れた血が</td>
<td><span style="color: lightgrey;">ウィキペディア訳</span></td>
</tr>
<tr>
<td></td>
<td><span style="color: #3d8b3d;">不純な</span>血が</td>
<td><span style="color: lightgrey;">フランソワ・ヴィディ訳</span></td>
</tr>
</tbody>
</table>
</div>
<p><br></p>
<p><span style="color: #3d8b3d;">impur</span> は「Im」という接頭語で「不」と「pur」という語幹で「純」で「不純」の意が示されています。ここでは、何に対して不純なのかということになると、その上に置いてある「<ruby>僭<rp>(</rp><rt>せん</rt><rp>)</rp>主<rp>(</rp><rt>しゅ</rt><rp>)</rp></ruby>政治」に対してだとなります。「汚れた」としますと敵対関係が強調されますが、敵だから不純ではなく、政治形態が不自然だから敵対関係になっているとの意に「<a href="#impur" title="不純な" id="note_impur">不純な</a>」にしました。<a href="#impur" title="不純な">↑</a></p>
<hr />
<h2 id="note_14" class="green">第九変更・潤すように！</h2>
<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>14</td>
<td><span style="color: #3d8b3d;">Abreuve</span> nos sillons !</td>
<td><span style="color: lightgrey;">フランス語本文</span></td>
</tr>
<tr>
<td></td>
<td>我らの畑の畝を満たすまで！</td>
<td><span style="color: lightgrey;">ウィキペディア訳</span></td>
</tr>
<tr>
<td></td>
<td>我らの<ruby>畝<rp>(</rp><rt>うね</rt><rp>)</rp></ruby>を<span style="color: #3d8b3d;">潤すように！</span></td>
<td><span style="color: lightgrey;">フランソワ・ヴィディ訳</span></td>
</tr>
</tbody>
</table>
</div>
<p><br></p>
<p><span style="color: #3d8b3d;">Abreuve</span> は「満たす」にならず「潤す」の意を示すことから「潤す」に。<br />
その上、前の文節（13）との関係で、Que が仮定法の形を示していることから「まで」ととても訳せられにくく「<a href="#abreuve" title="不純な" id="note_abreuve">潤すように！</a>」にしました。<br />
「我らの畑の畝を」と訳された「nos
sillons」には「畑の」が無いため「我らの<ruby>畝<rp>(</rp><rt>うね</rt><rp>)</rp></ruby>」に直しました。<br />
ここでは、革命の視点から、<ruby>僭<rp>(</rp><rt>せん</rt><rp>)</rp>主<rp>(</rp><rt>しゅ</rt><rp>)</rp></ruby>政治が人間の自然状態を反することで「祖国の子」として、または自由の「市民」として許すことが出来はしません。<a href="#abreuve" title="不純な">↑</a></p>
<hr />
<p><br></p>
<div id="translation-text-rousi">
<h6 class="left">ウィキペディア翻訳</h6>
<p><span style="color: lightgrey;"><i class="fa fa-quote-left fa-1x fa-pull-left fa-border"></i></span>  </p>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>行こう、祖国の子らよ、</td>
</tr>
<tr>
<td>2</td>
<td>栄光の日が来た、</td>
</tr>
<tr>
<td>3</td>
<td>我らに<a href="#note_3" title="向かって暴君の"><span style="color: #3d8b3d;">向かって暴君の</span></a></td>
</tr>
<tr>
<td>4</td>
<td>血まみれの旗が掲げられた、</td>
</tr>
<tr>
<td>5</td>
<td>血まみれの旗が掲げられた！</td>
</tr>
<tr>
<td></td>
<td><br></td>
</tr>
<tr>
<td>6</td>
<td>聞こえるか<a href="#note_6" title="戦場の"><span style="color: #3d8b3d;">戦場の</span></a></td>
</tr>
<tr>
<td>7</td>
<td><a href="#note_7" title="残忍な敵兵の咆哮を?"><span style="color: #3d8b3d;">残忍な敵兵の咆哮を?</span></a></td>
</tr>
<tr>
<td>8</td>
<td>奴らは<a href="#note_8" title="我らの元に来て"><span style="color: #3d8b3d;">我らの元に来て</span></a></td>
</tr>
<tr>
<td>9</td>
<td>我らの<a href="#note_9" title="子と妻の喉を搔き切る！"><span style="color: #3d8b3d;">子と妻の喉を搔き切る！</span></a></td>
</tr>
<tr>
<td></td>
<td><br></td>
</tr>
<tr>
<td>10</td>
<td>武器を取れ市民らよ！</td>
</tr>
<tr>
<td>11</td>
<td><a href="#note_11" title="隊列"><span style="color: #3d8b3d;">隊列</span></a>を組め</td>
</tr>
<tr>
<td>12</td>
<td><a href="#note_12" title="進もう、進もう！"><span style="color: #3d8b3d;">進もう、進もう！</span></a></td>
</tr>
<tr>
<td>13</td>
<td><a href="#note_13" title="汚れた"><span style="color: #3d8b3d;">汚れた</span></a>血が</td>
</tr>
<tr>
<td>14</td>
<td><a href="#note_14" title="我らの畑の畝を満たすまで！"><span style="color: #3d8b3d;">我らの畑の畝を満たすまで！</span></a></td>
</tr>
</tbody>
</table>
<p><span style="color: lightgrey;"><i class="fa fa-quote-right fa-1x fa-pull-right fa-border"></i></span>  </p>
<p><br></p>
</div>
<p><br></p>
<hr />
<div class="notices green">
<dl>
<dt>引用：</dt>
<dd>
「<a href="https://ja.wikipedia.org/wiki/ラ・マルセイエーズ" title="https://ja.wikipedia.org/wiki/ラ・マルセイエーズ"><ruby lang="ja">ラ<rp>(</rp><rt lang="fr">La</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>マルセイエーズ<rp>(</rp><rt lang="fr">Marseillaise</rt><rp>)</rp></ruby lang="ja"></a>」 、ウィキペディア（２０１７年１１月１７日）。</dd>
<dt>新訳：</dt>
<dd>独自</dd>
<dd>（文書の御使用は「<a href="#contre" title="対して"><ruby>フランソワ<rp>(</rp><rt>François</rt><rp>)</rp>・<rp>(</rp><rt></rt><rp>)</rp>ヴィディ<rp>(</rp><rt>VIDIT</rt><rp>)</rp></ruby></a> 訳」（リンクを含む）追加で可能としている）。</dd>
</dl>
</div>
<hr />
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
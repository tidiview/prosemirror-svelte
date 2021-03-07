<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<p><span>24</span>日<i class="fa fa-calendar-o fa-2x"></i></p>
<p>12月</p>
<p><span>2017</span></p>
<h1 lang="ja"><a href="/blog/ja/onnadaigaku" rel="bookmark">女大学</a></h1>
<div class="notices yellow">
<p>わたしたちが今日ふつう「女大学」と呼んでいるのは、この書の本文を受けついで編まれた教順書類である。  </p>
</div>

<h2>概要</h2>
<h3 id="renvoi_takarabako">女大学とは？</h3>
<p>具体的に、<ruby>享<rp>(</rp><rt>きょう</rt><rp>)</rp>保<rp>(</rp><rt>ほ</rt><rp>)</rp></ruby>元年（１７１６）八月、大阪の<ruby>柏<rp>(</rp><rt>カシ</rt><rp>)</rp>原<rp>(</rp><rt>ワラ</rt><rp>)</rp>清<rp>(</rp><rt>キヨ</rt><rp>)</rp>右<rp>(</rp><rt>ウ</rt><rp>)</rp>衛<rp>(</rp><rt>エ</rt><rp>)</rp>門<rp>(</rp><rt>モン</rt><rp>)</rp></ruby>と江戸の<ruby>小<rp>(</rp><rt>オ</rt><rp>)</rp>川<rp>(</rp><rt>ガワ</rt><rp>)</rp>彦<rp>(</rp><rt>ヒコ</rt><rp>)</rp>九<rp>(</rp><rt>ク</rt><rp>)</rp>郎<rp>(</rp><rt>ロウ</rt><rp>)</rp></ruby>とが合梓した教順書の題名に当たります。  </p>
<p>最古の版本は、『<a href="#takarabako" title="女大学宝箱"><ruby>女<rp>(</rp><rt>オンナ</rt><rp>)</rp>大<rp>(</rp><rt>ダイ</rt><rp>)</rp>学<rp>(</rp><rt>ガク</rt><rp>)</rp>宝<rp>(</rp><rt>タカラ</rt><rp>)</rp>箱<rp>(</rp><rt>バコ</rt><rp>)</rp></ruby></a>』と言われています。   </p>
<p>江戸中期から明治期いたるまで幅広く支持された女子教訓書。  </p>
<p>しかし、「女大学」という一般的に言われている内容になると、女として夫と家を支え、慎みを忘れずに <strong><a href="#onnanomichi" title="女の道" id="note_onnanomichi">女の道</a></strong> を極めよという倫理観のもと、親および<ruby>舅<rp>(</rp><rt>しゆうと</rt><rp>)</rp></ruby>・<ruby>姑<rp>(</rp><rt>しゆうとめ</rt><rp>)</rp></ruby>に対する孝、洗濯、裁縫等の家事労働、結納・結婚・出産・子育て、三味線などのお稽古、身だしなみのことなど多岐に渡ることをさすことになります。</p>
<h3>著者と歴史</h3>
<p><a href="https://ja.wikipedia.org/wiki/貝原益軒" title="https://ja.wikipedia.org/wiki/貝原益軒"><ruby>貝<rp>(</rp><rt>カイ</rt><rp>)</rp>原<rp>(</rp><rt>バラ</rt><rp>)</rp>益<rp>(</rp><rt>エキ</rt><rp>)</rp>軒<rp>(</rp><rt>ケン</rt><rp>)</rp></ruby></a>の「<a href="https://ja.wikipedia.org/wiki/和俗童子訓" title="https://ja.wikipedia.org/wiki/和俗童子訓"><ruby>和<rp>(</rp><rt>わ</rt><rp>)</rp>俗<rp>(</rp><rt>ぞく</rt><rp>)</rp>童<rp>(</rp><rt>どう</rt><rp>)</rp>子<rp>(</rp><rt>じ</rt><rp>)</rp>訓<rp>(</rp><rt>くん</rt><rp>)</rp></ruby></a> 」のなかの第五巻「教女子法」に依拠するが、著者を<a href="https://ja.wikipedia.org/wiki/貝原益軒" title="https://ja.wikipedia.org/wiki/貝原益軒">益軒</a>とする確証はありません。 </p>
<p>『女大学宝箱』だけでも明治初年までに１１版を重ねましたが、１８世紀後半以降になると、挿絵や頭書きを改めて「女大学」を冠した多様な改定本、『女大学<ruby>教<rp>(</rp><rt>おしえ</rt><rp>)</rp>文<rp>(</rp><rt>ぶん</rt><rp>)</rp>庫<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>』、『女大学<ruby>操<rp>(</rp><rt>みさお</rt><rp>)</rp>鑑<rp>(</rp><rt>かがみ</rt><rp>)</rp></ruby>』といった類が数多く刊行されました。  </p>
<p><a href="https://ja.wikipedia.org/wiki/貝原益軒" title="https://ja.wikipedia.org/wiki/貝原益軒">貝原益軒</a>著「女子を<ruby>教<rp>(</rp><rt>おし</rt><rp>)</rp></ruby>ゆる法」、そのなかでも第十条（<a href="https://ja.wikipedia.org/wiki/七去" title="https://ja.wikipedia.org/wiki/七去の法"><ruby>七<rp>(</rp><rt>しち</rt><rp>)</rp>去<rp>(</rp><rt>きょ</rt><rp>)</rp></ruby>の法</a>）・第十六条（嫁する娘に親が説き聞かすべき十三ヵ条）を下敷きにして、婦徳を中心に十九ヵ条の教訓文にしたてている点に特徴がみられる。  </p>
<p>結果として、「<ruby>女<rp>(</rp><rt>にょ</rt><rp>)</rp>子<rp>(</rp><rt>し</rt><rp>)</rp></ruby>を<ruby>教<rp>(</rp><rt>おし</rt><rp>)</rp></ruby>ゆる法」、に採られていた男女の価値平等観は捨象され、斉家と婦人自身の保全を目的とし、女性の心得を家庭生活内に限定して説き、具体的な作法や躾、技能や教養におよばず、もっぱら心がまえを力説したものとなっている。  </p>
<h3 id="onnanomichi">女の道とは？</h3>
<dl>
<dt>「 <a href="#renvoi_takarabako" title="女の道"><ruby>女<rp>(</rp><rt>おんな</rt><rp>)</rp></ruby>の<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby></a> 」、「夫に仕ふる道」のこと。<ruby>婦<rp>(</rp><rt>ふ</rt><rp>)</rp>人<rp>(</rp><rt>じん</rt><rp>)</rp></ruby>の道ともいう。いわゆる、夫に従う道であり、  </dt>
<dd><p>「一度嫁いりしては、其の家を出でざるを女の道とすること、<ruby>古<rp>(</rp><rt>いにしえ</rt><rp>)</rp></ruby>聖人の<ruby>訓<rp>(</rp><rt>おし</rt><rp>)</rp></ruby>えなり、<ruby>若<rp>(</rp><rt>も</rt><rp>)</rp></ruby>し女の道にそむき、去らるる時は、一生の恥なり」</p></dd>
<dt>（『<a href="#takarabako" alt="女大学宝箱"><ruby><rb>女大学宝箱</rb><rt>オンナダイガクタカラバコ</rt></ruby></a>』）、  </dt>
<dd><p>「<ruby>都<rp>(</rp><rt>すべ</rt><rp>)</rp></ruby>て婦人の道は<ruby>和<rp>(</rp><rt>やわ</rt><rp>)</rp></ruby>らぎ従うにあり、夫に対するに顔色、言葉づかい、<ruby>慇<rp>(</rp><rt>いん</rt><rp>)</rp>懃<rp>(</rp><rt>ぎん</rt><rp>)</rp></ruby>に<ruby>謙<rp>(</rp><rt>へりくだ</rt><rp>)</rp></ruby>り<ruby>遜譲<rp>(</rp><rt>ゆずる</rt><rp>)</rp></ruby>べし、<ruby>不忍<rp>(</rp><rt>しのばず</rt><rp>)</rp></ruby>して不順なるべからず、<ruby>奢<rp>(</rp><rt>おご</rt><rp>)</rp></ruby>り<ruby>驕<rp>(</rp><rt>たかぶ</rt><rp>)</rp></ruby>りて無礼なるべからず、是れ女子の第一なる努めなり」</p></dd>
</dl>
<p>（『<a href="http://dl.ndl.go.jp/info:ndljp/pid/754900" alt="新撰増補女子大学"><ruby><rb>新</rb><rt>シン</rt><rb>撰</rb><rt>セン</rt><rb>増</rb><rt>ゾウ</rt><rb>補</rb><rt>ホ</rt><rb>女子</rb><rt>オンナ</rt><rb>大</rb><rt>ダイ</rt><rb>学</rb><rt>ガク</rt></ruby></a>』）と記されているように、女＝婦人は、結婚した女性をさしている。  </p>
<dl>
<dt>それ故に、 </dt>
<dd><p>「<ruby>貞<rp>(</rp><rt>てい</rt><rp>)</rp>操<rp>(</rp><rt>そう</rt><rp>)</rp></ruby>は女の道の第一なり」</p></dd>
</dl>
<p>として、
「貞操」を守ることが第一とされた。  </p>
<p>江戸時代を通じて膳行者を表彰した<ruby>孝<rp>(</rp><rt>こう</rt><rp>)</rp>義<rp>(</rp><rt>ぎ</rt><rp>)</rp>伝<rp>(</rp><rt>でん</rt><rp>)</rp></ruby>が各地でつくられているが、そこに収められている女性の表彰事由についてみると、「女の道」を守ったことによって表彰されている事例が少なくない。  </p>
<p>「貞操」をはじめとする右に引用したような内容を含んだ「女の道」を守ることが模範的女性であるとされたのであった。  </p>
<p>だから、<ruby>貞<rp>(</rp><rt>てい</rt><rp>)</rp>操<rp>(</rp><rt>そう</rt><rp>)</rp>・<rp>(</rp><rt></rt><rp>)</rp>貞節<rp>(</rp><rt>ていせつ</rt><rp>)</rp></ruby>でない女性は「夫に仕える道」すなわち「女の道」を踏み外したものであり、「<ruby>不<rp>(</rp><rt>ふ</rt><rp>)</rp>貞<rp>(</rp><rt>てい</rt><rp>)</rp>者<rp>(</rp><rt>しゃ</rt><rp>)</rp></ruby>」として批判された。  </p>
<p>いずれにしても家制度保持のためのものであり、「女の道」は一方的に女性に課せられたくびきであった。  </p>
<p>一夫一妻の枠組みのなかで、「貞操」を守らなくてはならないのは<strong>女のみ</strong>であり、男には適応されなかったのが江戸時代であった。<br />
したがって「女の道」から外れた「不貞」は<strong>女にだけ適応する言葉</strong>である。   </p>
<h2 id="takarabako">女大学宝箱</h2>
<p><a href="#renvoi_takarabako" alt="女大学とは？">女大学とは？ ↑</a></p>
<h3>内容目次</h3>
<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>１</td>
<td><a href="#1" id="renvoi_1">女児はひとえに親のおしえひとつで育つものである。⭣</a></td>
</tr>
<tr>
<td>２</td>
<td><a href="#2" id="renvoi_2">女は<ruby>容<rp>(</rp><rt>かたち</rt><rp>)</rp></ruby>より心の勝っているのがよろしい。⭣</a></td>
</tr>
<tr>
<td>３</td>
<td><a href="#3" id="renvoi_3">男女の別を正しくして、女子は独自の徳を身につけなければいけない。⭣</a></td>
</tr>
<tr>
<td>４</td>
<td><a href="#4" id="renvoi_4">女性にとって本来の家は婚家。<br>七去の法。⭣</a></td>
</tr>
<tr>
<td>５</td>
<td><a href="#5" id="renvoi_5">生家の親より、しゅうと・しゅうとめに孝養をつくすべきである。⭣</a></td>
</tr>
<tr>
<td>６</td>
<td><a href="#6" id="renvoi_6">婦人は夫を主君としてつかえねばならない。⭣</a></td>
</tr>
<tr>
<td>７</td>
<td><a href="#7" id="renvoi_7"><ruby>兄公<rp>(</rp><rt>こじゅうと</rt><rp>)</rp></ruby>・<ruby>女公<rp>(</rp><rt>こじゅうとめ</rt><rp>)</rp></ruby>を敬いむつかじくすべきである。⭣</a></td>
</tr>
<tr>
<td>８</td>
<td><a href="#8" id="renvoi_8">嫉妬の心をおこしてはならない。<br>夫にたいするいさめかた。⭣</a></td>
</tr>
<tr>
<td>９</td>
<td><a href="#9" id="renvoi_9"><ruby>言語<rp>(</rp><rt>ことば</rt><rp>)</rp></ruby>のつつしみ。⭣</a></td>
</tr>
<tr>
<td>１０</td>
<td><a href="#10" id="renvoi_10">日常の生活での行為のしかた。⭣</a></td>
</tr>
<tr>
<td>１１</td>
<td><a href="#11" id="renvoi_11"><ruby>巫<rp>(</rp><rt>みこ</rt><rp>)</rp></ruby>・ <ruby>覡<rp>(</rp><rt>かんなぎ</rt><rp>)</rp></ruby>に迷ってはならない。⭣</a></td>
</tr>
<tr>
<td>１２</td>
<td><a href="#12" id="renvoi_12">妻はその家の分限に従って経営しなければならない。⭣</a></td>
</tr>
<tr>
<td>１３</td>
<td><a href="#13" id="renvoi_13">女は、若いとき、男性に近づいてはならない。⭣</a></td>
</tr>
<tr>
<td>１４</td>
<td><a href="#14" id="renvoi_14">衣裳を清潔に保つべし。⭣</a></td>
</tr>
<tr>
<td>１５</td>
<td><a href="#15" id="renvoi_15">夫の方の親類を大切にあつかえ。⭣</a></td>
</tr>
<tr>
<td>１６</td>
<td><a href="#16" id="renvoi_16">しゅうと・しゅうとめに、生家の親よりもあつくつかえよ。⭣</a></td>
</tr>
<tr>
<td>１７</td>
<td><a href="#17" id="renvoi_17">妻が家の中で務むべき仕事。⭣</a></td>
</tr>
<tr>
<td>１８</td>
<td><a href="#18" id="renvoi_18">下女のあつかいかた。⭣</a></td>
</tr>
<tr>
<td>１９</td>
<td><a href="#19" id="renvoi_19">女の心ざま悪しき五種の病気。<br>従順の徳をかたく身につけよ。⭣</a></td>
</tr>
</tbody>
</table>
</div>
<hr>
<h3>女大学宝箱</h3>
<h4>本文</h4>
<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span id="1">１</span></td>
<td><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewbox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span> 夫れ、<ruby>女<rp>(</rp><rt>にょ</rt><rp>)</rp>子<rp>(</rp><rt>し</rt><rp>)</rp></ruby>は成長して他人の家へ行き、<ruby>舅<rp>(</rp><rt>しゆうと</rt><rp>)</rp></ruby>・<ruby>姑<rp>(</rp><rt>しゆとめ</rt><rp>)</rp></ruby>、に<ruby>仕<rp>(</rp><rt>つか</rt><rp>)</rp></ruby>ゆるものなれば、<ruby>男<rp>(</rp><rt>なん</rt><rp>)</rp>子<rp>(</rp><rt>し</rt><rp>)</rp></ruby>よりも、親の教えゆるがせにすべがらず。</td>
</tr>
<tr>
<td></td>
<td>父母<ruby>寵<rp>(</rp><rt>ちょう</rt><rp>)</rp>愛<rp>(</rp><rt>あい</rt><rp>)</rp></ruby>して<ruby>恣<rp>(</rp><rt>ほしいまま</rt><rp>)</rp></ruby>に育てぬれば、夫の家に行きて、必ず<ruby>気<rp>(</rp><rt>き</rt><rp>)</rp>随<rp>(</rp><rt>ずい</rt><rp>)</rp></ruby>（わがまま）にて<ruby>疎<rp>(</rp><rt>うと</rt><rp>)</rp></ruby>まれ、又は舅の<ruby>誨<rp>(</rp><rt>おし</rt><rp>)</rp></ruby>え正しければ堪え<ruby>難<rp>(</rp><rt>がた</rt><rp>)</rp></ruby>く思い、舅を恨み<ruby>誹<rp>(</rp><rt>そし</rt><rp>)</rp></ruby>り、<ruby>中<rp>(</rp><rt>なか</rt><rp>)</rp></ruby>悪しくなりて<ruby>終<rp>(</rp><rt>つい</rt><rp>)</rp></ruby>には追い出だされ、恥を<ruby>曝<rp>(</rp><rt>さら</rt><rp>)</rp></ruby>す。</td>
</tr>
<tr>
<td></td>
<td>女子の父母、我が<ruby>順<rp>(</rp><rt>おし</rt><rp>)</rp></ruby>えなき事を謂わずして、舅・夫の悪しきと<ruby>而己<rp>(</rp><rt>のみ</rt><rp>)</rp></ruby>思うは誤りなり。</td>
</tr>
<tr>
<td></td>
<td>是れ皆、女子の親のおしえなき故なり。 <a href="#renvoi_1">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="2">２</span></td>
<td>女は<ruby>容<rp>(</rp><rt>かたち</rt><rp>)</rp></ruby>よりも心の<ruby>滕<rp>(</rp><rt>まさ</rt><rp>)</rp></ruby>れるを<ruby>善<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>しとすべし。</td>
</tr>
<tr>
<td></td>
<td><ruby>心<rp>(</rp><rt>こころ</rt><rp>)</rp></ruby><ruby>緒<rp>(</rp><rt>ばえ</rt><rp>)</rp></ruby><ruby>無<rp>(</rp><rt>よし</rt><rp>)</rp></ruby><ruby>美<rp>(</rp><rt>なき</rt><rp>)</rp></ruby>女は、心騒がしく、<ruby>眼<rp>(</rp><rt>まなこ</rt><rp>)</rp></ruby>恐ろしく見だして人を怒り、言葉<ruby>訇<rp>(</rp><rt>あら</rt><rp>)</rp></ruby>らかに物をいい、さがなく口<ruby>諬<rp>(</rp><rt>き</rt><rp>)</rp></ruby>きて（下品な口をきいて）人に先立ち、人を恨み<ruby>嫉<rp>(</rp><rt>ねた</rt><rp>)</rp></ruby>み、我が身に誇り、人を<ruby>謗<rp>(</rp><rt>そし</rt><rp>)</rp></ruby>り笑い、われ人に滕り<ruby>皃<rp>(</rp><rt>かお</rt><rp>)</rp></ruby>なるはみな女の道に違えるなり。</td>
</tr>
<tr>
<td></td>
<td>女は<ruby>唯<rp>(</rp><rt>ただ</rt><rp>)</rp></ruby>、<ruby>和<rp>(</rp><rt>やわ</rt><rp>)</rp></ruby>らぎ<ruby>順<rp>(</rp><rt>したが</rt><rp>)</rp></ruby>いて貞信に（心正しく操を守って）、<ruby>情<rp>(</rp><rt>なさけ</rt><rp>)</rp></ruby>深く静かなるを<ruby>淑<rp>(</rp><rt>よし</rt><rp>)</rp></ruby>とす。 <a href="#renvoi_2">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="3">３</span></td>
<td><ruby>女<rp>(</rp><rt>にょ</rt><rp>)</rp>子<rp>(</rp><rt>し</rt><rp>)</rp></ruby>は、<ruby>稚<rp>(</rp><rt>いとけな</rt><rp>)</rp></ruby>き時より、<ruby>男<rp>(</rp><rt>おとこ</rt><rp>)</rp>女<rp>(</rp><rt>おんな</rt><rp>)</rp></ruby>の<ruby>別<rp>(</rp><rt>わか</rt><rp>)</rp></ruby>ちを正しくして、<ruby>仮<rp>(</rp><rt>かり</rt><rp>)</rp>初<rp>(</rp><rt>そめ</rt><rp>)</rp></ruby>にも<ruby>戯<rp>(</rp><rt>たわぶ</rt><rp>)</rp></ruby>れたることをを見聞かしむべからず。</td>
</tr>
<tr>
<td></td>
<td><ruby>古<rp>(</rp><rt>いにしえ</rt><rp>)</rp></ruby>の『礼』に、</td>
</tr>
<tr>
<td></td>
<td>「<ruby>男<rp>(</rp><rt>なん</rt><rp>)</rp>女<rp>(</rp><rt>にょ</rt><rp>)</rp></ruby>は<ruby>席<rp>(</rp><rt>しきもの</rt><rp>)</rp></ruby>を同じくせず。衣裳をも同じ処に置かず。おなじ所にて<ruby>浴<rp>(</rp><rt>ゆあみ</rt><rp>)</rp></ruby>せず。物を<ruby>請<rp>(</rp><rt>う</rt><rp>)</rp></ruby>け取りわたすことも、手より手へ<ruby>直<rp>(</rp><rt>じき</rt><rp>)</rp></ruby>せず。夜行くときは、必ず<ruby>燭<rp>(</rp><rt>ともしび</rt><rp>)</rp></ruby>を<ruby>燈<rp>(</rp><rt>とも</rt><rp>)</rp></ruby>してゆくべし。他人はいうに及ばず、夫婦・兄弟にても、別を正しくすべし<sup><a id="renvoi_3_note_1" href="#3_note_1">(注一）</a></sup>」</td>
</tr>
<tr>
<td></td>
<td>となり。</td>
</tr>
<tr>
<td></td>
<td><ruby>今<rp>(</rp><rt>いま</rt><rp>)</rp>時<rp>(</rp><rt>どき</rt><rp>)</rp></ruby>の民家は、<ruby>此<rp>(</rp><rt>か</rt><rp>)</rp>様<rp>(</rp><rt>よう</rt><rp>)</rp></ruby>の法を知らずして、<ruby>行<rp>(</rp><rt>ぎょう</rt><rp>)</rp>規<rp>(</rp><rt>ぎ</rt><rp>)</rp></ruby>を乱りにして名を<ruby>穢<rp>(</rp><rt>よご</rt><rp>)</rp></ruby>し、親兄弟に<ruby>辱<rp>(</rp><rt>はじ</rt><rp>)</rp></ruby>をあたえ、一生身を<ruby>空<rp>(</rp><rt>いたずら</rt><rp>)</rp></ruby>にする者あり。口惜しき事にあらずや。</td>
</tr>
<tr>
<td></td>
<td>「女は、父母の<ruby>命<rp>(</rp><rt>おおせと</rt><rp>)</rp></ruby><ruby>媒妁<rp>(</rp><rt>なかだち</rt><rp>)</rp></ruby>とに非ざれば、交わらず親しまず」</td>
</tr>
<tr>
<td></td>
<td>と、『小学』にも見えたり。</td>
</tr>
<tr>
<td></td>
<td><ruby>仮令<rp>(</rp><rt>たとい</rt><rp>)</rp></ruby>命を失うとも、心を金石のごとくに堅くして、義を守るべし。 <a href="#renvoi_3">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="4">４</span></td>
<td>婦人は夫の家をわが家とする故に、<ruby>唐土<rp>(</rp><rt>もろこし</rt><rp>)</rp></ruby>には、嫁いりを「帰る」という。我が家にかえるという事なり。</td>
</tr>
<tr>
<td></td>
<td><ruby>縦<rp>(</rp><rt>たとい</rt><rp>)</rp></ruby>夫の家貧賤なりとも、夫を<ruby>怨<rp>(</rp><rt>うら</rt><rp>)</rp></ruby>むべからず。</td>
</tr>
<tr>
<td></td>
<td>天よりわれにあたえ給える家の貧しきは、我が仕合せの<ruby>凶<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>しき故なりともおもい、<ruby>一<rp>(</rp><rt>ひと</rt><rp>)</rp>度<rp>(</rp><rt>たび</rt><rp>)</rp></ruby>嫁いりしては其の家を出ざるを女の道とすること、<ruby>古<rp>(</rp><rt>いにしえ</rt><rp>)</rp></ruby>、聖人の<ruby>訓<rp>(</rp><rt>おし</rt><rp>)</rp></ruby>えまり。</td>
</tr>
<tr>
<td></td>
<td><ruby>若<rp>(</rp><rt>も</rt><rp>)</rp></ruby>し女の道にそむき、去らるる時は、一生の恥なり。されば婦人に<ruby>七去<rp>(</rp><rt>しっきょ</rt><rp>)</rp></ruby><sup><a id="renvoi_4_note_ 1" href="#4_note_1">（注一）</a></sup>として、悪しきこと七つあり。</td>
</tr>
<tr>
<td></td>
<td>　一には、<ruby>嫜<rp>(</rp><rt>しゆうとしゆうとめ</rt><rp>)</rp></ruby>に<ruby>順<rp>(</rp><rt>したが</rt><rp>)</rp></ruby>わざる女は去るべし。</td>
</tr>
<tr>
<td></td>
<td>　二には、孑なき女は去るべし。</td>
</tr>
<tr>
<td></td>
<td>　　是れ妻を<ruby>娶<rp>(</rp><rt>めと</rt><rp>)</rp></ruby>るは子孫相続の為なれば也。<ruby>然<rp>(</rp><rt>しか</rt><rp>)</rp></ruby>れ共、婦人の心正しく行儀よくして<ruby>妬<rp>(</rp><rt>ねた</rt><rp>)</rp></ruby>むこころなくば、さらずとも<ruby>同<rp>(</rp><rt>おなじ</rt><rp>)</rp>姓<rp>(</rp><rt>うじ</rt><rp>)</rp></ruby>の子を養うべし。或は<ruby>妾<rp>(</rp><rt>てかけ</rt><rp>)</rp></ruby>に子あらば、妻に子なく共、去るに及ばず。</td>
</tr>
<tr>
<td></td>
<td>　三には、<ruby>淫<rp>(</rp><rt>いん</rt><rp>)</rp>乱<rp>(</rp><rt>らん</rt><rp>)</rp></ruby>なればさる。</td>
</tr>
<tr>
<td></td>
<td>　四には、<ruby>悋<rp>(</rp><rt>りん</rt><rp>)</rp>気<rp>(</rp><rt>き</rt><rp>)</rp></ruby>ふがければさる。</td>
</tr>
<tr>
<td></td>
<td>　五に、<ruby>癩<rp>(</rp><rt>らい</rt><rp>)</rp>病<rp>(</rp><rt>びょう</rt><rp>)</rp></ruby>などの悪しき<ruby>疾<rp>(</rp><rt>やまい</rt><rp>)</rp></ruby>有ればさる。</td>
</tr>
<tr>
<td></td>
<td>　六に、<ruby>多言<rp>(</rp><rt>くちまめ</rt><rp>)</rp></ruby>にて慎みなく、物いい過ごすは、親類とも<ruby>中<rp>(</rp><rt>なか</rt><rp>)</rp></ruby>悪しくなり、家みだるるものなれば去るべし。</td>
</tr>
<tr>
<td></td>
<td>　七には、物を盗む心あるはさる。</td>
</tr>
<tr>
<td></td>
<td>此の七去は皆聖人の教えなり。</td>
</tr>
<tr>
<td></td>
<td>女は一度嫁いりして其の家を出だされては、<ruby>仮令<rp>(</rp><rt>たとい</rt><rp>)</rp></ruby>ふたたび<ruby>富<rp>(</rp><rt>ふう</rt><rp>)</rp>貴<rp>(</rp><rt>き</rt><rp>)</rp></ruby>なる夫に嫁すとも、女の道にたがいて、大いなる<ruby>辱<rp>(</rp><rt>はじ</rt><rp>)</rp></ruby>なり。 <a href="#renvoi_4">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="5">５</span></td>
<td><ruby>女<rp>(</rp><rt>にょ</rt><rp>)</rp>子<rp>(</rp><rt>し</rt><rp>)</rp></ruby>は、我が家にありては、わが父母に専ら孝を行なう<ruby>理<rp>(</rp><rt>ことわり</rt><rp>)</rp></ruby>なり。</td>
</tr>
<tr>
<td></td>
<td>されども、夫の家に行きては、専ら<ruby>嫜<rp>(</rp><rt>しゆうとしゆうとめ</rt><rp>)</rp></ruby>をわが親よりも重んじて厚く<ruby>愛<rp>(</rp><rt>いつく</rt><rp>)</rp></ruby>敬い、孝行を尽くすべし。</td>
</tr>
<tr>
<td></td>
<td>親の<ruby>方<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>を重んじ、<ruby>舅<rp>(</rp><rt>しゆうと</rt><rp>)</rp></ruby>の方を軽んずることなかれ。</td>
</tr>
<tr>
<td></td>
<td><ruby>嫜<rp>(</rp><rt>しゆうとしゆうとめ</rt><rp>)</rp></ruby>の方の朝夕の見まいを<ruby>闕<rp>(</rp><rt>か</rt><rp>)</rp></ruby>べからず。</td>
</tr>
<tr>
<td></td>
<td><ruby>嫜<rp>(</rp><rt>しゆうとしゆうとめ</rt><rp>)</rp></ruby>の方の勤むべき<ruby>業<rp>(</rp><rt>わざ</rt><rp>)</rp></ruby>を怠るべからず。</td>
</tr>
<tr>
<td></td>
<td>若し<ruby>嫜<rp>(</rp><rt>しゆうとしゆうとめ</rt><rp>)</rp></ruby>の<ruby>命<rp>(</rp><rt>おおせ</rt><rp>)</rp></ruby>あらば、慎み行ないて<ruby>背<rp>(</rp><rt>そむ</rt><rp>)</rp></ruby>くべからず。</td>
</tr>
<tr>
<td></td>
<td><ruby>万<rp>(</rp><rt>よるず</rt><rp>)</rp></ruby>のこと、<ruby>舅<rp>(</rp><rt>しゆうと</rt><rp>)</rp></ruby>・<ruby>姑<rp>(</rp><rt>しゆうとめ</rt><rp>)</rp></ruby>に問うて、其の教えに<ruby>任<rp>(</rp><rt>まか</rt><rp>)</rp></ruby>すべし。</td>
</tr>
<tr>
<td></td>
<td><ruby>舅<rp>(</rp><rt>しゆうと</rt><rp>)</rp></ruby>・<ruby>姑<rp>(</rp><rt>しゆうとめ</rt><rp>)</rp></ruby>もし我を憎み<ruby>誹<rp>(</rp><rt>そし</rt><rp>)</rp></ruby>り給うとも、怒り恨むることなかれ。</td>
</tr>
<tr>
<td></td>
<td>孝を尽くして誠をもってつかゆれば、<ruby>後<rp>(</rp><rt>のち</rt><rp>)</rp></ruby>はかならず<ruby>中<rp>(</rp><rt>なか</rt><rp>)</rp>好<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>くなるもの也。 <a href="#renvoi_5" id="5">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="6">６</span></td>
<td>婦人は別に主君なし。 夫を主人と思い、敬い慎みて<ruby>事<rp>(</rp><rt>つか</rt><rp>)</rp></ruby>うべし。<ruby>軽<rp>(</rp><rt>かろ</rt><rp>)</rp></ruby>しめ<ruby>侮<rp>(</rp><rt>あなど</rt><rp>)</rp></ruby>るべからず。総じて婦人の道は、人に従うにあり。</td>
</tr>
<tr>
<td></td>
<td>夫に対するに、顔色言葉づかい<ruby>慇<rp>(</rp><rt>いん</rt><rp>)</rp>懃<rp>(</rp><rt>ぎん</rt><rp>)</rp></ruby>に<ruby>謙<rp>(</rp><rt>へりくだ</rt><rp>)</rp></ruby>り、和順なるべし。<ruby>不忍<rp>(</rp><rt>いぶり</rt><rp>)</rp></ruby>（不平をいうこと）にして不順なるべからず。奢りて無礼なるべからず。</td>
</tr>
<tr>
<td></td>
<td>これ<ruby>女<rp>(</rp><rt>にょ</rt><rp>)</rp>子<rp>(</rp><rt>し</rt><rp>)</rp></ruby>第一勤めなり。</td>
</tr>
<tr>
<td></td>
<td>夫の教訓あらば、其の仰せを<ruby>叛<rp>(</rp><rt>そむ</rt><rp>)</rp></ruby>くべからず。</td>
</tr>
<tr>
<td></td>
<td>疑わしきことは夫に問うて、その<ruby>下<rp>(</rp><rt>げ</rt><rp>)</rp>知<rp>(</rp><rt>ち</rt><rp>)</rp></ruby>に随うべし。</td>
</tr>
<tr>
<td></td>
<td>夫問うこと有らば、正しく答うべし。</td>
</tr>
<tr>
<td></td>
<td>其の返答<ruby>疎<rp>(</rp><rt>おろそ</rt><rp>)</rp></ruby>かなるは、無礼なり。</td>
</tr>
<tr>
<td></td>
<td>夫若し腹立て怒るときは、恐れて<ruby>順<rp>(</rp><rt>したが</rt><rp>)</rp></ruby>うべし。</td>
</tr>
<tr>
<td></td>
<td>怒り<ruby>諍<rp>(</rp><rt>あらそ</rt><rp>)</rp></ruby>いてその心に<ruby>逆<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>うべからず。</td>
</tr>
<tr>
<td></td>
<td>女は夫をもって天とす。返すも夫に逆らいて天の罰を受けべからず。 <a href="#renvoi_6">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="7">７</span></td>
<td><ruby>兄公<rp>(</rp><rt>こじゆうと</rt><rp>)</rp></ruby>・<ruby>女公<rp>(</rp><rt>こじゆうとめ</rt><rp>)</rp></ruby>は、夫の兄弟なれば、敬うべし。</td>
</tr>
<tr>
<td></td>
<td>夫の親類に謗られ憎まるれば、<ruby>舅<rp>(</rp><rt>しゆうと</rt><rp>)</rp></ruby>・<ruby>姑<rp>(</rp><rt>しゆうとめ</rt><rp>)</rp></ruby>の心に<ruby>戻<rp>(</rp><rt>そむ</rt><rp>)</rp></ruby>きて、我が身の為にも宜しからず。</td>
</tr>
<tr>
<td></td>
<td>睦まじくすれば、<ruby>嫜<rp>(</rp><rt>しゆうとしゆうとめ</rt><rp>)</rp></ruby>の心にも<ruby>協<rp>(</rp><rt>かな</rt><rp>)</rp></ruby>う。又<ruby>娌<rp>(</rp><rt>あによめ</rt><rp>)</rp></ruby>を親しみ<ruby>穆<rp>(</rp><rt>むつ</rt><rp>)</rp></ruby>ま敷くすべし。</td>
</tr>
<tr>
<td></td>
<td>殊更夫の<ruby>兄<rp>(</rp><rt>あに</rt><rp>)</rp></ruby>・<ruby>嫂<rp>(</rp><rt>よめ</rt><rp>)</rp></ruby>は、厚くうやまうべし。我が<ruby>昆<rp>(</rp><rt>あに</rt><rp>)</rp></ruby>・姉と同じくすべし。 <a href="#renvoi_7">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="8">８</span></td>
<td>嫉妬の心、<ruby>努<rp>(</rp><rt>ゆめ</rt><rp>)</rp>努<rp>(</rp><rt>ゆめ</rt><rp>)</rp>発<rp>(</rp><rt>おこ</rt><rp>)</rp></ruby>すべからず。男<ruby>淫<rp>(</rp><rt>いん</rt><rp>)</rp>乱<rp>(</rp><rt>らん</rt><rp>)</rp></ruby>ならば、<ruby>諫<rp>(</rp><rt>いさ</rt><rp>)</rp></ruby>むべし。</td>
</tr>
<tr>
<td></td>
<td><ruby>妬<rp>(</rp><rt>わた</rt><rp>)</rp></ruby>み甚だしげれば、其の気色・言葉も恐ろ敷く<ruby>冷<rp>(</rp><rt>すさ</rt><rp>)</rp></ruby>まじくして、却って夫に<ruby>疎<rp>(</rp><rt>うと</rt><rp>)</rp></ruby>まれ見限らる物なり。</td>
</tr>
<tr>
<td></td>
<td>苦し夫不義<ruby>過<rp>(</rp><rt>あやま</rt><rp>)</rp></ruby>ち有らば、わが色を<ruby>和<rp>(</rp><rt>やわ</rt><rp>)</rp></ruby>うぎ声を<ruby>雅<rp>(</rp><rt>やわ</rt><rp>)</rp></ruby>らかにして、諫むべし。</td>
</tr>
<tr>
<td></td>
<td>諫めを聴かずして怒らば、先ず暫く<ruby>止<rp>(</rp><rt>とど</rt><rp>)</rp></ruby>めて、後に夫の心和らぎたる時、<ruby>復<rp>(</rp><rt>また</rt><rp>)</rp></ruby>諫むべし。</td>
</tr>
<tr>
<td></td>
<td>必ず気色を<ruby>暴<rp>(</rp><rt>あら</rt><rp>)</rp></ruby>くし、こえをいららぎて、夫に<ruby>逆<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>い叛くことなかれ。 <a href="#renvoi_8">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="9">９</span></td>
<td><ruby>言語<rp>(</rp><rt>ことば</rt><rp>)</rp></ruby>を慎みて多くすべからず。<ruby>仮<rp>(</rp><rt>かり</rt><rp>)</rp></ruby>にも人を<ruby>誹<rp>(</rp><rt>そし</rt><rp>)</rp></ruby>り、偽りを云うべからず。</td>
</tr>
<tr>
<td></td>
<td>人の<ruby>謗<rp>(</rp><rt>そし</rt><rp>)</rp></ruby>りを聞くことあらば、心に修めて人に伝え語るべからず。</td>
</tr>
<tr>
<td></td>
<td><ruby>訕<rp>(</rp><rt>そし</rt><rp>)</rp></ruby>りを云いつたうるより、親類<ruby>共間<rp>(</rp><rt>なか</rt><rp>)</rp></ruby>悪しくなり、家の内おさまらず。 <a href="#renvoi_9">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="10">１０</span></td>
<td>女は常に心遣いして、其の身を<ruby>堅<rp>(</rp><rt>かたく</rt><rp>)</rp></ruby>倶謹み護るべし。</td>
</tr>
<tr>
<td></td>
<td><ruby>朝<rp>(</rp><rt>あした</rt><rp>)</rp></ruby>は早く起き、夜は遅く<ruby>寝<rp>(</rp><rt>い</rt><rp>)</rp></ruby>ね、昼はいねずして、いえの内の事に心を用い、織り・縫い・<ruby>績<rp>(</rp><rt>う</rt><rp>)</rp></ruby>み・<ruby>緝<rp>(</rp><rt>つむ</rt><rp>)</rp></ruby>ぎ、怠るべからず。</td>
</tr>
<tr>
<td></td>
<td>亦茶・酒など多く呑むべからず。</td>
</tr>
<tr>
<td></td>
<td><ruby>歌<rp>(</rp><rt>か</rt><rp>)</rp>舞<rp>(</rp><rt>ぶ</rt><rp>)</rp>妓<rp>(</rp><rt>き</rt><rp>)</rp></ruby>・<ruby>小<rp>(</rp><rt>こ</rt><rp>)</rp>歌<rp>(</rp><rt>うえ</rt><rp>)</rp></ruby>・浄るりなどの<ruby>淫<rp>(</rp><rt>たわ</rt><rp>)</rp></ruby>れたる事を、見聴くべからず。</td>
</tr>
<tr>
<td></td>
<td>宮・寺など<ruby>都<rp>(</rp><rt>すべ</rt><rp>)</rp></ruby>ての人のおおくあつまる処へ、四十歳より内は余りに行くべからず。 <a href="#renvoi_10">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="11">１１</span></td>
<td><ruby>巫<rp>(</rp><rt>みこ</rt><rp>)</rp></ruby>・<ruby>覡<rp>(</rp><rt>かんなぎ</rt><rp>)</rp></ruby>などのことに迷いて、<ruby>神<rp>(</rp><rt>かみ</rt><rp>)</rp>仏<rp>(</rp><rt>ほとけ</rt><rp>)</rp></ruby>を<ruby>汚<rp>(</rp><rt>けが</rt><rp>)</rp></ruby>し近付き、猥にいのるべからず。</td>
</tr>
<tr>
<td></td>
<td><ruby>只<rp>(</rp><rt>ただ</rt><rp>)</rp></ruby>人間の勤めをよくする時は、<ruby>禱<rp>(</rp><rt>いの</rt><rp>)</rp></ruby>らずとても、<ruby>神<rp>(</rp><rt>かみ</rt><rp>)</rp>仏<rp>(</rp><rt>ほとけ</rt><rp>)</rp></ruby>は守り給うべし。 <a href="#renvoi_11">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="12">１２</span></td>
<td>人の妻と成りては、その家をよく保つべし。妻の行ない悪しく<ruby>放<rp>(</rp><rt>ほう</rt><rp>)</rp>埓<rp>(</rp><rt>らつ</rt><rp>)</rp></ruby>なれば、家を破る。 万事<ruby>倹<rp>(</rp><rt>つづま</rt><rp>)</rp></ruby>やかにして、<ruby>費<rp>(</rp><rt>つい</rt><rp>)</rp></ruby>えを<ruby>作<rp>(</rp><rt>な</rt><rp>)</rp></ruby>すべからず。</td>
</tr>
<tr>
<td></td>
<td>衣服・<ruby>飲<rp>(</rp><rt>いん</rt><rp>)</rp>食<rp>(</rp><rt>しい</rt><rp>)</rp></ruby>なども、身の分限にしたがい用いて、<ruby>奢<rp>(</rp><rt>おご</rt><rp>)</rp></ruby>ることなかれ。 <a href="#renvoi_12">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="13">１３</span></td>
<td>若き時は、音の親類、友達、<ruby>下<rp>(</rp><rt>しも</rt><rp>)</rp>部<rp>(</rp><rt>べ</rt><rp>)</rp></ruby>等の若き男には、打ち解けたる物語し、近付くべからず。<ruby>男<rp>(</rp><rt>なん</rt><rp>)</rp>女<rp>(</rp><rt>にょ</rt><rp>)</rp></ruby>の隔てを固くすべし。</td>
</tr>
<tr>
<td></td>
<td><ruby>如<rp>(</rp><rt>い</rt><rp>)</rp>何<rp>(</rp><rt>か</rt><rp>)</rp></ruby>なる用有りとも、若き男に<ruby>文<rp>(</rp><rt>ふみ</rt><rp>)</rp></ruby>など通わすべからず。 <a href="#renvoi_13">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="14">１４</span></td>
<td>身の<ruby>荘<rp>(</rp><rt>かざ</rt><rp>)</rp></ruby>りも衣裳の染いろ模様なども、目にたたぬようにすべし。身と衣服との穢れずして<ruby>潔<rp>(</rp><rt>きよ</rt><rp>)</rp></ruby>げなるはよし。</td>
</tr>
<tr>
<td></td>
<td><ruby>勝<rp>(</rp><rt>すぐ</rt><rp>)</rp></ruby>れて<ruby>清<rp>(</rp><rt>きよ</rt><rp>)</rp></ruby>らを尽くし、人の目に立つほどなるは悪しし。只わが身に応じたるを用ゆべし。 <a href="#renvoi_14">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="15">１５</span></td>
<td>我が郷の親の<ruby>方<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>に<ruby>私<rp>(</rp><rt>わたくし</rt><rp>)</rp></ruby>し、夫の方の親類を次にすべからず。正月・節句などにも、まず夫の方を勤めて、次に我親の方をつとむべし。</td>
</tr>
<tr>
<td></td>
<td>夫の許さざるには、<ruby>何<rp>(</rp><rt>いず</rt><rp>)</rp>方<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>へも行くべからず。私に人に<ruby>饋<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>りものすべからず。 <a href="#renvoi_15">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="16">１６</span></td>
<td>女は、我が親の家をば継がず、<ruby>舅<rp>(</rp><rt>しゅうと</rt><rp>)</rp></ruby>・<ruby>姑<rp>(</rp><rt>しゅうとめ</rt><rp>)</rp></ruby>の跡を継ぐゆえに、わが親よりも<ruby>嫜<rp>(</rp><rt>しゅうとしゅとめ</rt><rp>)</rp></ruby>を大切に思い、孝行を為すべし。</td>
</tr>
<tr>
<td></td>
<td>嫁いりしてあとは、わが親の家に行くことも<ruby>稀<rp>(</rp><rt>まれ</rt><rp>)</rp></ruby>なるべし。</td>
</tr>
<tr>
<td></td>
<td>増して、他の家へは、<ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp>形<rp>(</rp><rt>がた</rt><rp>)</rp></ruby>は使いを遣わして<ruby>音<rp>(</rp><rt>いん</rt><rp>)</rp>問<rp>(</rp><rt>もん</rt><rp>)</rp></ruby>をなすべし。</td>
</tr>
<tr>
<td></td>
<td>又我が<ruby>親<rp>(</rp><rt>おや</rt><rp>)</rp>郷<rp>(</rp><rt>さと</rt><rp>)</rp></ruby>のよきことを<ruby>侈<rp>(</rp><rt>ほこ</rt><rp>)</rp></ruby>りて<ruby>讃<rp>(</rp><rt>ほ</rt><rp>)</rp></ruby>めかたるべからず。 <a href="#renvoi_16">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="17">１７</span></td>
<td><ruby>下<rp>(</rp><rt>しも</rt><rp>)</rp>部<rp>(</rp><rt>べ</rt><rp>)</rp></ruby><ruby>余<rp>(</rp><rt>あま</rt><rp>)</rp>多<rp>(</rp><rt>た</rt><rp>)</rp></ruby>めしかうとも、<ruby>万<rp>(</rp><rt>よろず</rt><rp>)</rp></ruby>の事自ら辛労を<ruby>忍<rp>(</rp><rt>こら</rt><rp>)</rp></ruby>えて勤むること女の作法なり。</td>
</tr>
<tr>
<td></td>
<td><ruby>舅<rp>(</rp><rt>しゅうと</rt><rp>)</rp></ruby>・<ruby>姑<rp>(</rp><rt>しゅうとめ</rt><rp>)</rp></ruby>の為に<ruby>衣<rp>(</rp><rt>きもの</rt><rp>)</rp></ruby>を縫い、食を調え、夫に仕えて、<ruby>衣<rp>(</rp><rt>きぬ</rt><rp>)</rp></ruby>を畳み、<ruby>席<rp>(</rp><rt>しきもの</rt><rp>)</rp></ruby>を掃き、子を育て、汚れを洗い、常に家の内に居て、<ruby>猥<rp>(</rp><rt>みだ</rt><rp>)</rp></ruby>りにそとへ出ずべからず。 <a href="#renvoi_17">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="18">１８</span></td>
<td>下女をつかうに、心を用ゆべし。云う<ruby>甲<rp>(</rp><rt>か</rt><rp>)</rp></ruby><ruby>斐<rp>(</rp><rt>い</rt><rp>)</rp></ruby>なき<ruby>下<rp>(</rp><rt>げ</rt><rp>)</rp></ruby><ruby>﨟<rp>(</rp><rt>ろう</rt><rp>)</rp></ruby>は習わし悪しくて智慧なく、<ruby>心奸<rp>(</rp><rt>かたまく</rt><rp>)</rp></ruby><ruby>敷く<rp>(</rp><rt>心がねじけていて</rt><rp>)</rp></ruby>、物いうこと<ruby>祥<rp>(</rp><rt>さが</rt><rp>)</rp></ruby>なし。</td>
</tr>
<tr>
<td></td>
<td>夫のこと、<ruby>舅<rp>(</rp><rt>しゅうと</rt><rp>)</rp></ruby>・<ruby>姑<rp>(</rp><rt>しゅうとめ</rt><rp>)</rp></ruby>・<ruby>姨<rp>(</rp><rt>こじゅうと</rt><rp>)</rp></ruby>のなど、我が心に合わぬ事あれば<ruby>猥<rp>(</rp><rt>みだ</rt><rp>)</rp></ruby>りに<ruby>譏<rp>(</rp><rt>そし</rt><rp>)</rp></ruby>り聞かせて、それを却って<ruby>君<rp>(</rp><rt>しゅう</rt><rp>)</rp></ruby>の為と思えり（主人である妻へ忠義づらをしている）。</td>
</tr>
<tr>
<td></td>
<td>夫人もし智慧なくしてこれを信じては、必ず恨み出来安し。</td>
</tr>
<tr>
<td></td>
<td><ruby>元<rp>(</rp><rt>もと</rt><rp>)</rp>来<rp>(</rp><rt>より</rt><rp>)</rp></ruby>夫の家はみな他人なれば、恨み叛き恩愛を捨つること安し。</td>
</tr>
<tr>
<td></td>
<td>構えて下女の<ruby>詞<rp>(</rp><rt>ことば</rt><rp>)</rp></ruby>を信じて、大切なる<ruby>嫜<rp>(</rp><rt>しゅうとしゅとめ</rt><rp>)</rp></ruby>・<ruby>姨<rp>(</rp><rt>こじゅうと</rt><rp>)</rp></ruby>の親しみを薄くすべからず。</td>
</tr>
<tr>
<td></td>
<td>若し下女<ruby>勝<rp>(</rp><rt>すぐ</rt><rp>)</rp></ruby>れて<ruby>多言<rp>(</rp><rt>くちがま</rt><rp>)</rp></ruby>しくて悪しき者ならば、早く追い出すべし。</td>
</tr>
<tr>
<td></td>
<td>か様の者は、必ず親類の中をも云いさまたげ、家を乱す基いとなるもの也。恐れるべし。又卑しき者を使うには、気に合わざること多し。</td>
</tr>
<tr>
<td></td>
<td>それを怒り罵りて止まざれば、<ruby>約<rp>(</rp><rt>せわ</rt><rp>)</rp>々<rp>(</rp><rt>せわ</rt><rp>)</rp></ruby>敷く腹立つこと多くして、家の内静かならず。</td>
</tr>
<tr>
<td></td>
<td>悪しき事あらば、折々云い教えて、誤りを直すべし。少しの過ちは、<ruby>忍<rp>(</rp><rt>こら</rt><rp>)</rp></ruby>えて怒るべからず。</td>
</tr>
<tr>
<td></td>
<td>心の内にはあわれみて、<ruby>外<rp>(</rp><rt>ほか</rt><rp>)</rp></ruby>には<ruby>行<rp>(</rp><rt>ぎょう</rt><rp>)</rp>規<rp>(</rp><rt>ぎ</rt><rp>)</rp></ruby>を固く<ruby>訓<rp>(</rp><rt>いまし</rt><rp>)</rp></ruby>めて、怠らぬ様につかうべし。</td>
</tr>
<tr>
<td></td>
<td>与え恵むべき事あらば、財を惜しむべからず。</td>
</tr>
<tr>
<td></td>
<td>但し、我が気に入りたるとて、用にも立たぬ者に猥りに与うべからず。 <a href="#renvoi_18">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td><span id="19">１９</span></td>
<td>凡そ婦人の<ruby>心<rp>(</rp><rt>こころ</rt><rp>)</rp>様<rp>(</rp><rt>ざま</rt><rp>)</rp></ruby>の悪しき病は、和らぎ<ruby>順<rp>(</rp><rt>したが</rt><rp>)</rp></ruby>わざると、怒り恨むるよ、人を<ruby>謗<rp>(</rp><rt>そし</rt><rp>)</rp></ruby>ると、智慧<ruby>浅<rp>(</rp><rt>みじか</rt><rp>)</rp></ruby>きとなり。</td>
</tr>
<tr>
<td></td>
<td>此の五つの<ruby>疾<rp>(</rp><rt>やまい</rt><rp>)</rp></ruby>は、十人に七八は必ずあり。</td>
</tr>
<tr>
<td></td>
<td>是れ婦人の男に及ばざる所なり。自ら顧み戒めて改め去るべし。中にも智慧の浅きゆえに、五つの<ruby>疾<rp>(</rp><rt>やまい</rt><rp>)</rp></ruby>も<ruby>発<rp>(</rp><rt>おこ</rt><rp>)</rp></ruby>る。</td>
</tr>
<tr>
<td></td>
<td>女は<ruby>陰<rp>(</rp><rt>いん</rt><rp>)</rp>性<rp>(</rp><rt>しょう</rt><rp>)</rp></ruby>なり。陰は夜にて暗し。</td>
</tr>
<tr>
<td></td>
<td><ruby>所<rp>(</rp><rt>ゆ</rt><rp>)</rp>以<rp>(</rp><rt>え</rt><rp>)</rp></ruby>に、女は男に<ruby>比<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>ぶるに、愚かにてめの前なる<ruby>可然<rp>(</rp><rt>しかるべき</rt><rp>)</rp></ruby>ことをも知らず。</td>
</tr>
<tr>
<td></td>
<td>又人の<ruby>誹<rp>(</rp><rt>そし</rt><rp>)</rp></ruby>るべきことをも<ruby>弁<rp>(</rp><rt>わきま</rt><rp>)</rp></ruby>えず。わが夫、我が子の<ruby>災<rp>(</rp><rt>わざわい</rt><rp>)</rp></ruby>と成るべき事をも知らず。</td>
</tr>
<tr>
<td></td>
<td><ruby>科<rp>(</rp><rt>とが</rt><rp>)</rp></ruby>もなきひとを怨み、怒り<ruby>呪詛<rp>(</rp><rt>のろい</rt><rp>)</rp></ruby>、あるいは人を妬みにくみて、わが<ruby>身独<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>り立たんと思えど、人に憎まれ<ruby>疎<rp>(</rp><rt>うと</rt><rp>)</rp></ruby>まれて、みな我が身の仇となるいことを知らず、<ruby>最<rp>(</rp><rt>いと</rt><rp>)</rp></ruby>はかなく<ruby>浅<rp>(</rp><rt>あさ</rt><rp>)</rp>猿<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>し。子を育つれ共、愛に<ruby>溺<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>れて習わせ悪しし。斯く愚かなる故に、何事も我が身を<ruby>謙<rp>(</rp><rt>へりくだ</rt><rp>)</rp></ruby>りて夫に従うべし。</td>
</tr>
<tr>
<td></td>
<td><ruby>古<rp>(</rp><rt>いにしえ</rt><rp>)</rp></ruby>の法に、</td>
</tr>
<tr>
<td></td>
<td>「<ruby>女<rp>(</rp><rt>にょ</rt><rp>)</rp>子<rp>(</rp><rt>し</rt><rp>)</rp></ruby>を産めば、三日<ruby>床<rp>(</rp><rt>ゆか</rt><rp>)</rp></ruby>の下に<ruby>臥<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>さしむる」</td>
</tr>
<tr>
<td></td>
<td>といえり。</td>
</tr>
<tr>
<td></td>
<td>是れも、男は天に<ruby>仮<rp>(</rp><rt>たと</rt><rp>)</rp></ruby>え、女は地に<ruby>象<rp>(</rp><rt>かたど</rt><rp>)</rp></ruby>るゆえに、<ruby>万<rp>(</rp><rt>よろず</rt><rp>)</rp></ruby>のことにつきても、夫を先立て、我が身を後にし、我がなせる事に<ruby>能<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>きことありとても、誇る心なく、赤悪しきことありて人に云わるる<ruby>迚<rp>(</rp><rt>とて</rt><rp>)</rp></ruby>も<ruby>諍<rp>(</rp><rt>あらそ</rt><rp>)</rp></ruby>わずして、はやくあわまちをあらため、重ねて人に謂われざるように我が身を<ruby>敬<rp>(</rp><rt>たしな</rt><rp>)</rp></ruby>み、また人に<ruby>侮<rp>(</rp><rt>あなど</rt><rp>)</rp></ruby>られてもはらたら<ruby>憤<rp>(</rp><rt>いきどお</rt><rp>)</rp></ruby>ることなく、能く堪えて物をおそれ慎むべし。</td>
</tr>
<tr>
<td></td>
<td><ruby>如斯<rp>(</rp><rt>かくのごとく</rt><rp>)</rp></ruby>心得なば、夫婦も中、おのずから和らぎ、行く末ながく連れそいて、家のうち穏やかなるべし。</td>
</tr>
<tr>
<td></td>
<td>右の条々、<ruby>稚<rp>(</rp><rt>いとけな</rt><rp>)</rp></ruby>きときより、<ruby>よく訓<rp>(</rp><rt>おし</rt><rp>)</rp></ruby>ゆべし。又書き付けて、折々読ましめ、忘るることなからしめよ。</td>
</tr>
<tr>
<td></td>
<td>今の代の人、<ruby>女子<rp>(</rp><rt>むすめ</rt><rp>)</rp></ruby>に衣服道具などおおく与えて<ruby>婚<rp>(</rp><rt>よめ</rt><rp>)</rp>姻<rp>(</rp><rt>いり</rt><rp>)</rp></ruby>せしむるよりも、此の条々を<ruby>能<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>くおしゆること、一生身を保つ宝なるべし。</td>
</tr>
<tr>
<td></td>
<td><ruby>古<rp>(</rp><rt>ふるき</rt><rp>)</rp>語<rp>(</rp><rt>ことば</rt><rp>)</rp></ruby>に、</td>
</tr>
<tr>
<td></td>
<td>「ひとよく百万銭を出して<ruby>女子<rp>(</rp><rt>むすめ</rt><rp>)</rp></ruby>を<ruby>嫁<rp>(</rp><rt>か</rt><rp>)</rp></ruby>せしむることを知って、十万銭を出して子をおしゆることを知らず」</td>
</tr>
<tr>
<td></td>
<td>といえり。</td>
</tr>
<tr>
<td></td>
<td>誠なるかな。女子の親たる人、此の<ruby>理<rp>(</rp><rt>ことわり</rt><rp>)</rp></ruby>を知らずんばあるべからず。かしく。 <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewbox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span> <a href="#renvoi_19">↑</a></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td><strong>益軒貝原先生述</strong></td>
</tr>
<tr>
<td></td>
<td>享保元丙申八月吉日</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
<tr>
<td></td>
<td>江戸日本橋南一丁目</td>
</tr>
<tr>
<td></td>
<td><strong>小川 彦九郎</strong></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>書林</td>
</tr>
<tr>
<td></td>
<td>大坂心斎橋順慶町</td>
</tr>
<tr>
<td></td>
<td><strong>柏原清右衛門</strong></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
</tbody>
</table>
<p></span></p>
</div>
<h4>註釈</h4>
<div id="translation-text-rousi">
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td>3</td>
<td></td>
</tr>
<tr>
<td><span id="3_note_1">一</span></td>
<td>「七年。男女不 レ同レ席」、「男女不レ同ニ椸 枷一。不三敢懸ニ於夫之揮椸一。不三敢蔵二於夫之篋笥一。不三敢共二湢浴一（略）夜行以レ燭。無レ燭則止」などとある。 <a href="#renvoi_3_note_1">↑</a></td>
</tr>
<tr>
<td><span id="3_note_2">二</span></td>
<td>洒掃・応対・進退などの作法、嘉言・善行を古今の書から抜粋・蒐集し、中国小学の課目を示した書。内外二編。六巻。宋の劉子澄が朱子の指示を受けて編纂し、一一八七年成る。 <a href="#renvoi_3_note_2">↑</a></td>
</tr>
<tr>
<td></td>
<td><hr></td>
</tr>
</tbody>
</table>
</div>
<div class="notices yellow">
<p><a href="https://ja.wikipedia.org/wiki/福沢諭吉" alt="https://ja.wikipedia.org/wiki/福沢諭吉">福沢諭吉</a>は「女大学評論」で本書を批判し、「新女大学」を著し、新時代の女子を歩む道を示したことも知られています。  </p>
</div>
<div class="notices yellow">
<dl>
<dt>〔参考文献〕 </dt>
<dd><p>石川松太郎編『女大学集』（東洋文庫）、一九七七、平凡社。</p></dd>
<dd>菅野則子「江戸時代の「家」と女性」（『歴史と地理』四八四）、一九九五。</dd>
</dl>
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
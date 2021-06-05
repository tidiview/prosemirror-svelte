<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:NONE EN:NONE color:red -->

<article>
<header>
<p><time datetime="2017-03-03">２０１７年３月３日</time></p>
</header>

<h1 class="red">フランス革命という出来事が何であるか</h1>

<div class="notices red">
<p>〈フランス革命〉と言われている出来事は、<time datetime="1789-07-14">１７８９年７月１４日</time>の時点で、すでにフランス革命と言えるのか。</p>
</div>

<h2 class="red">現代でのフランス革命</h2>

<p><a href="https://ja.wikipedia.org/wiki/フランス革命" title="https://ja.wikipedia.org/wiki/フランス革命"><ruby lang="ja">フランス革命<rp>（</rp><rt lang="fr">la&#160;Révolution&#160;Française</rt><rp>）</rp></ruby></a>は、<a href="https://ja.wikipedia.org/wiki/人間と市民の権利の宣言" title="https://ja.wikipedia.org/wiki/人間と市民の権利の宣言"><ruby lang="ja">人権宣言<rp>（</rp><rt lang="fr">la&#160;Déclaration&#160;des&#160;Droits&#160;de&#160;l&#39;Homme</rt><rp>）</rp></ruby></a>のためであったり、<b>現代社会の元の出来事として欠かせない</b>のは否定し難いようです。</p>
<p>これだけ影響力のあるものとなっているため、または、フランス革命とよばれている出来事がいろんな次元に及ぶため、何であったかと語るのが簡単ではないと断言できます。</p>
<p>それなのに、同時に、「フランス」を省いて、親しんで、ただ、《革命》と呼ばれて来たものとして、統一しているかのように見えて来るため、語り方によって、革命の意義が真反対に異なることも不可能なことではありません。</p>
<p>一般的に、教育施設などでは、<a href="https://ja.wikipedia.org/wiki/ソフィア・コッポラ" title="https://ja.wikipedia.org/wiki/ソフィア・コッポラ"><ruby lang="ja">ソフィア<rp>（</rp><rt lang="en">Sofia</rt><rp>）</rp>・<rp>（</rp><rt lang="en"></rt><rp>）</rp>コッポラ<rp>（</rp><rt lang="en">Coppola</rt><rp>）</rp></ruby></a>が製作した<a href="https://ja.wikipedia.org/wiki/マリー・アントワネット_(映画)" title="https://ja.wikipedia.org/wiki/マリー・アントワネット_(映画)"><ruby lang="ja">マリー<rp>（</rp><rt lang="fr">Marie</rt><rp>）</rp>＝<rp>（</rp><rt lang="fr">-</rt><rp>）</rp>アントワネット<rp>（</rp><rt lang="fr">Antoinette</rt><rp>）</rp></ruby></a>映画のように、展開が決定的に省略され過ぎていて、革命を暴力としてしか位置づけてないため、国民は矛盾とあいまいの中に陥ってしまうことになります。</p>
<p>そういった意味で、<time datetime="P200Y">二百年</time>以上が経った現代でも、革命はまだ権力者たちにとって恐ろしい出来事としてしか意味づけられていません。</p>
<p>耳で、「か・く・めい」とのことばを聞くだけで、人が無意識に、密かに怖くなっているかのようで、自分からこの大きな出来事が何であったのか、と 少しも興味を寄せようとせずに、複雑すぎて、ややこしく思われているのが、一般的な見解となってしまっている傾向があります。</p>

<h2 class="red">フランス革命とは？</h2>

<h3 class="red">革命ということば</h3>

<p>指されている出来事が「革命」との言葉であって、不思議に登場して来る意を含んでいます。  </p>
<p>「革命」は、「天命が<ruby>革<rp>（</rp><rt>あらた</rt><rp>）</rp></ruby>まること」の意を表し、王はなくなられる出来事として、王を亡くす物語になりがちで、国民が思い浮かべ想像している通りである点です。</p>
<p>この出来事を「革命」と呼ぶだけで、その出来事が必然的に起こったものとなってしまいます。</p>
<p>それに対して、当時に生きた人々は、そういった必然性の意識を持っていたかと考えると、見方が変わります。</p>

<h3 class="red">革命は、いつから</h3>

<p>現代、一般的に、革命は、<time datetime="1789">１７８９年</time>に始まったといわれていますが、当時に生きた人々が現代我々が革命と呼んでいる出来事の可能性を意識していたかどうかといいますと、「<b>していなかった</b>」のは間違いありません。</p>
<p>実際、現代の歴史家たちが最近（最低<time datetime="1989">１９８９年</time>以降からでも）指摘して来た通り、<time datetime="1789">１７８９年</time>の<time datetime="P2Y">ニ年</time>前から、<a href="https://ja.wikipedia.org/wiki/ルイ十六世" title="https://ja.wikipedia.org/wiki/ルイ十六世"><ruby lang="ja">ルイ<rp>（</rp><rt lang="fr">Louis</rt><rp>）</rp>十六<rp>（</rp><rt lang="fr">seize</rt><rp>）</rp></ruby>世</a>から歴史家<ruby lang="ja">ジャン<rp>（</rp><rt lang="fr">Jean</rt><rp>）</rp>＝<rp>（</rp><rt lang="fr">-</rt><rp>）</rp>クリスチャン<rp>（</rp><rt lang="fr">Christian</rt><rp>）</rp>・<rp>（</rp><rt lang="fr"></rt><rp>）</rp>プティフィス<rp>（</rp><rt lang="fr">Petitfils</rt><rp>）</rp></ruby>によって「<a href="https://francois-vidit.com/blog/ja/roiyarukakumei" title="https://francois-vidit.com/blog/ja/roiyarukakumei"><ruby lang="ja">ロイヤル革命<rp>（</rp><rt lang="fr">la&#160;Révolution&#160;Royale</rt><rp>）</rp></ruby></a>」と呼ばれた革命もあります。</p>
<p>あくまでも人々は、<time datetime="1789">１７８９年</time>時点においても、<time datetime="P800Y">八百年</time>以上前の、いわゆるフランス王国がカペー朝を開いた<a href="https://ja.wikipedia.org/wiki/ユーグ・カペー" title="https://ja.wikipedia.org/wiki/ユーグ・カペー"><ruby lang="ja">ユーグ<rp>（</rp><rt lang="fr">Hugues</rt><rp>）</rp>・<rp>（</rp><rt lang="fr"></rt><rp>）</rp>カペー<rp>（</rp><rt lang="fr">Capet</rt><rp>）</rp></ruby></a>の治世が始まる<time datetime="987">９８７年</time>から
ずっと引き続きフランス王国は維持されているという意識で見ていただろうことを忘れてはいけません。</p>
<p>なので、<a href="https://ja.wikipedia.org/wiki/バスティーユ襲撃" title="https://ja.wikipedia.org/wiki/バスティーユ襲撃"><ruby lang="ja">バスティーユ襲撃<rp>（</rp><rt lang="fr">Prise&#160;de&#160;la&#160;Bastille</rt><rp>）</rp></ruby></a>から始まったと言われている<time datetime="1789-07-14">１７８９年７月１４日</time>の火曜日の段階では、<time datetime="P3Y6M7D">三年と六ヶ月と七日間</time>経過後、<a href="https://ja.wikipedia.org/wiki/国民公会" title="https://ja.wikipedia.org/wiki/国民公会"><ruby lang="ja">国民公会<rp>（</rp><rt lang="fr">Convention&#160;Nationale</rt><rp>）</rp></ruby></a>の議員たちに<time datetime="1793-01-21">１７９３年１月２１日</time>の月曜日に王はギロチンで斬首刑による死刑が執行される<a href="https://ja.wikipedia.org/wiki/ルイ16世_(フランス王)#.E5.9B.BD.E7.8E.8B.E8.A3.81.E5.88.A4.E3.81.8B.E3.82.89.E5.88.91.E6.AD.BB.E3.81.B8" title="https://ja.wikipedia.org/wiki/ルイ16世_(フランス王)#国王裁判から刑死へ"><ruby lang="ja">王の死<rp>（</rp><rt lang="fr">la&#160;mort&#160;du&#160;Roi</rt><rp>）</rp></ruby></a>とは誰も予想出来なかったというまでもありません。</p>

<h3 class="red">王の死は<time datetime="1792">１７９２年</time>から</h3>

<p><a href="https://ja.wikipedia.org/wiki/ルイ16世_(フランス王)#.E5.9B.BD.E7.8E.8B.E8.A3.81.E5.88.A4.E3.81.8B.E3.82.89.E5.88.91.E6.AD.BB.E3.81.B8" title="https://ja.wikipedia.org/wiki/ルイ16世_(フランス王)#国王裁判から刑死へ">王の死</a> が可能となったのは、<span style="color: #b52b27;"><time datetime="1792">１７９２年</time></span>であります。</p>
<p>回りの他の王政の国々の連合軍――主にプロイセン軍とオーストリア軍――が東北フランス国境に集中してきます。</p>
<p>同盟軍の計画が、<time datetime="1792-07-25">１７９２年７月２５日</time>発された<a href="https://ja.wikipedia.org/wiki/ブラウンシュヴァイクの宣言" title="https://ja.wikipedia.org/wiki/ブラウンシュヴァイクの宣言"><ruby lang="ja">ブラウンシュヴァイクの宣言<rp>（</rp><rt lang="fr">Manifeste&#160;de&#160;Brunswick</rt><rp>）</rp></ruby></a>で司令官<a href="https://ja.wikipedia.org/wiki/カール・ヴィルヘルム・フェルディナント_(ブラウンシュヴァイク＝ヴォルフェンビュッテル公)" title="https://ja.wikipedia.org/wiki/ブラウンシュヴァイク公"><ruby lang="ja">ブラウンシュヴァイク＝ヴォルフェンビュッテル公<rp>（</rp><rt lang="de">Herzog&#160;zu&#160;Braunschweig&#160;und&#160;Lüneburg</rt><rp>）</rp></ruby></a>が表現した通りです。</p>
<p>侵攻して、<a href="https://ja.wikipedia.org/wiki/立法議会" title="https://ja.wikipedia.org/wiki/立法議会"><ruby lang="ja">立法議会<rp>（</rp><rt lang="fr">Assemblée&#160;législative</rt><rp>）</rp></ruby></a>から王を釈放するとの内容で、恐れが突然に現れるようとさせたのです。</p>
<p>それに対して、悲劇的な選択が立法議会議員らに迫って来ます。</p>
<p>何もせずに待ってしまいますと、<a href="https://ja.wikipedia.org/wiki/立法議会" title="https://ja.wikipedia.org/wiki/立法議会">立法議会</a>が軍事でなくなってくるに違いありません。</p>
<p>軍事的な抵抗をするほかはないのです。</p>
<p>王政愛や<a href="https://ja.wikipedia.org/wiki/立法議会" title="https://ja.wikipedia.org/wiki/立法議会">立法議会</a> への不信感で裏切る名門貴族出身軍隊士官も出ている環境で、<a href="https://ja.wikipedia.org/wiki/立法議会" title="https://ja.wikipedia.org/wiki/立法議会">立法議会</a>が「<a href="https://ja.wikipedia.org/wiki/フランス革命戦争#.E7.A5.96.E5.9B.BD.E3.81.AF.E5.8D.B1.E6.A9.9F.E3.81.AB.E3.81.82.E3.82.8A.21" title="https://ja.wikipedia.org/wiki/フランス革命戦争#祖国は危機にあり!"><ruby lang="ja">祖国は危機にあり！<rp>（</rp><rt lang="fr">la&#160;Patrie&#160;en&#160;danger</rt><rp>）</rp></ruby></a>」との宣言によって、 「<ruby>ボランティアたち<rp>（</rp><rt>les&#160;volontaires</rt><rp>）</rp></ruby>」に呼びかけ、彼らはそれに応じ、徴兵に莫大な数で答えました。</p>
<p>このボランティアたちはのちに「<ruby><time datetime="1792">１７９２年</time>のボランティアたち<rp>（</rp><rt>les&#160;Volontaires&#160;de&#160;１７９２</rt><rp>）</rp></ruby>」と呼ばれるようになりました。</p>
<p>彼らが戦線に向かって歌っていた軍歌が、後で十九世紀末にフランス共和国の国歌として選ばれた「<a href="https://francois-vidit/blog/ja/la-marseillaise" title="https://francois-vidit/blog/ja/la-marseillaise"><ruby lang="ja">ラ<rp>（</rp><rt lang="fr">La</rt><rp>）</rp>・<rp>（</rp><rt lang="fr"></rt><rp>）</rp>マルセイエーズ<rp>（</rp><rt lang="fr">Marseillaise</rt><rp>）</rp></ruby></a>」です。</p>

<h3 class="red">君主制廃止としての革命</h3>

<p><time datetime="1792-09-20">１７９２年９月２０日</time>、<a href="https://ja.wikipedia.org/wiki/ヴァルミーの戦い" title="https://ja.wikipedia.org/wiki/ヴァルミーの戦い"><ruby lang="ja">ヴァルミーの戦い<rp>（</rp><rt lang="fr">Bataille&#160;de&#160;Valmy</rt><rp>）</rp></ruby></a>で、最初の勝利が決まります。</p>
<p>翌日の<time datetime="1792-09-21">２１日</time>、「国民公会」と名を改めたばかりの旧<a href="https://ja.wikipedia.org/wiki/立法議会" title="https://ja.wikipedia.org/wiki/立法議会">立法議会</a>では、新しい会期の初日で、<ruby lang="ja">王政廃止宣言<rp>（</rp><rt lang="fr">Abolition&#160;de&#160;la&#160;Royauté</rt><rp>）</rp></ruby>を宣言することになります。</p>
<p>それで王政がなくなって、<a href="https://ja.wikipedia.org/wiki/フランス第一共和政" title="https://ja.wikipedia.org/wiki/フランス第一共和政"><ruby lang="ja">第一共和政<rp>（</rp><rt lang="fr">Première&#160;République</rt><rp>）</rp></ruby></a>が戦争中に、発足しますが、王政がなくなって、そのまま、「共和政」との形は、自ら望まれた形ではなく、攻めに当たって、王政がなくなった後に成立した形として、一切余裕なく、誕生してきます。  </p>
<p>そこから、<time datetime="1792">１７９２年</time>から<time datetime="1802-03-25">１８０２年３月２５日</time>までの<time datetime="P10Y">十年間</time>、フランスに現れた革命政府が、他の王政諸国と戦争することに陥る「<a href="https://ja.wikipedia.org/wiki/フランス革命戦争" title="https://ja.wikipedia.org/wiki/フランス革命戦争"><ruby lang="ja">フランス革命戦争<rp>（</rp><rt lang="fr">les&#160;Guerres&#160;de&#160;la&#160;Révolution&#160;française</rt><rp>）</rp></ruby></a>」。</p>
<p>ただ、<time datetime="1802-05-18">１８０３年５月１８日</time>から<time datetime="1815">１８１５年</time>までもの<time datetime="P12Y">十二年間</time>、「<a href="https://ja.wikipedia.org/wiki/ナポレオン戦争" title="https://ja.wikipedia.org/wiki/ナポレオン戦争"><ruby lang="ja">ナポレオン戦争<rp>（</rp><rt lang="fr">les&#160;Guerres&#160;napoléoniennes</rt><rp>）</rp></ruby></a>」の名で《革命》と王政の対立が再開しますので、ずっと<time datetime="1792">１７９２年</time>から<a href="https://ja.wikipedia.org/wiki/ナポレオン" title="https://ja.wikipedia.org/wiki/ナポレオン"><ruby lang="ja">ナポレオン<rp>（</rp><rt lang="fr">Napoléon</rt><rp>）</rp></ruby></a>が敗北する<a href="https://ja.wikipedia.org/wiki/ワーテルローの戦い" title="https://ja.wikipedia.org/wiki/ワーテルローの戦い"><ruby lang="ja">ワーテルローの戦い<rp>（</rp><rt lang="fr">la&#160;bataille&#160;de&#160;Waterloo</rt><rp>）</rp></ruby></a>の<time datetime="1815">１８１５年</time>まで、およそ<time datetime="P22Y">二十二年間</time>も続いたのだとは十分断言できます。</p>
<p>ここでは、その対立の結果に触れないようにしますが、その時までのヨーロッパを大きく変わらせたことは明らかです。</p>

<h2 class="red"><time datetime="1789">１７８９年</time>で始まった出来事は、革命でしたか？</h2>

<p>現代から、革命は王の死刑と王政廃止に捉われるのでしたら、<time datetime="1789">１７８９年</time>の時点では、革命だとはいえる段階
ではありませんが、<time datetime="1792">１７９２年</time>のそれに導く必然的な始まりとしては、<time datetime="1789">１７８９年</time>が立っています。</p>
<p>それで、現代言われている革命が革命として、始まりは<time datetime="1789">１７８９年</time>、<a href="https://ja.wikipedia.org/wiki/バスティーユ襲撃" title="https://ja.wikipedia.org/wiki/バスティーユ襲撃">バスティーユ襲撃</a>と終わりは<time datetime="1793">１７９３年</time>、<a href="https://ja.wikipedia.org/wiki/ルイ16世_(フランス王)#.E5.9B.BD.E7.8E.8B.E8.A3.81.E5.88.A4.E3.81.8B.E3.82.89.E5.88.91.E6.AD.BB.E3.81.B8" title="https://ja.wikipedia.org/wiki/ルイ16世_(フランス王)#国王裁判から刑死へ">王の死</a>があって、対照的に、他の区分と違って、自立して存在することになっています。</p>
<p>当時の人たちには、明らかに王政廃止を望んではいなかったにしても、王政枠内に、根本的な変更を期待してはいなかったとは、誰も断言できません。</p>
<p>変更が期待されていたのは、明らかですが、それは、何に対しての期待だったかとなると、そこに、まだ王政は王政として問題になってはいないので、意外と曖昧で、いろんな見方があるため、非常に難しい問題となりますが、そこが、<time datetime="1792">１７９２年</time>より、出来事の意義として、興味深いでしょう。</p>
<p>フランス革命は、一つの出来事として紹介されていることが多いのですが、自分で理解しようとすると革命自体がいろんな革命から形成されていて水晶化したことが見えて来ます。</p>

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
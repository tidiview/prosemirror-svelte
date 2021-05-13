<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:NONE EN:NONE -->

<article>

<p><time datetime="2018-03-07">２０１８年３月７</time></p>

<h1 class="yellow">ロイヤル革命とは何か</h1>

<div class="notices yellow">
<p>フランス革命は、一つの出来事として紹介されていることが多いですが、自分から理解しようとすると革命自体がいろんな革命から形成されていることが見えて来ます。</p>
<p>そのなかで、ここでは、あまり知られていないロイヤル革命を紹介します。</p>
</div>

<h2>ロイヤル革命とは何か？</h2>

<h3 class="yellow">ロイヤル革命との呼称とは</h3>

<p>この間、<time datetime="2005-04">２００５年４月</time>でしたか、<ruby lang="ja">ジャン<rp>(</rp><rt lang="fr">Jean</rt><rp>)</rp>＝<rp>(</rp><rt lang="fr">-</rt><rp>)</rp>クリスチャン<rp>(</rp><rt lang="fr">Christian</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>プティフィス<rp>(</rp><rt lang="fr">Petitfils</rt><rp>)</rp></ruby lang="ja">による「<a href="https://ja.wikipedia.org/wiki/ルイ16世_(フランス王)" title="https://ja.wikipedia.org/wiki/ルイ16世_(フランス王)"><ruby lang="ja">ルイ<rp>(</rp><rt lang="fr">Louis</rt><rp>)</rp>十六<rp>(</rp><rt lang="fr">Seize</rt><rp>)</rp></ruby lang="ja">世</a>」という本が<ruby lang="ja">ペラン<rp>(</rp><rt lang="fr">Perrin</rt><rp>)</rp></ruby lang="ja">社で出版されました。</p>
<p>ソ連邦の崩壊とそれにともなう東欧諸国家の共産主義からの脱却という当時の社会情勢下で、革命歴史の解釈を見直す風潮で、著者が述べるとその沿革をより「最新情報」を取り入れて、より「均衡的」にしていると修飾しています。</p>
<p>確かに出版時点で存在していた書物と比較すれば、革命対王国の立場からいろいろ堅くしない内容として、著者が密かに王国の立場にある程度偏っているにも関わらず、大きく言えば、そうであったのではないかと認められます。</p>
<p>特に風刺では、能力がなく、革命の画期的さを理解出来なかった人間だとの強い言われに対して、当時に例えば<a href="https://ja.wikipedia.org/wiki/ラ・ペルーズ伯ジャン＝フランソワ・ド・ガロー" title="https://ja.wikipedia.org/wiki/ラ・ペルーズ伯ジャン＝フランソワ・ド・ガロー"><ruby lang="ja">ラ<rp>(</rp><rt lang="fr">La</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ペルーズ<rp>(</rp><rt lang="fr">Pérouse</rt><rp>)</rp></ruby lang="ja"></a>の太平洋における航海に関する科学情報などに熱心であったなどから一流の価値観を身につけていて、アメリカ独立戦争の成功でアメリカ合衆国の誕生に欠かせない財政的、軍事的支援などの支持する役割を果した人として思い出させるべきだと予め述べたのがよかったと断言できます。</p>
<p>革命に直面する王の姿勢に関しても、殆んど触れない時期である<time datetime="1787">１７８７年</time>から<time datetime="1789">１７８９年</time>を改革の骨太さを示すことを強調するために革命の多重性をさらに引き立てるように「<ruby lang="ja">ロイヤル革命<rp>(</rp><rt lang="fr">la&#160;Révolution&#160;Royale</rt><rp>)</rp></ruby lang="ja">」と呼ぼうとしたのも適切だったでしょう。</p>
<p>日本では、そういった努力が無視されませんでした。</p>
<p>プティフィスの著書出版から三年間掛からない<time datetime="2008">２００８年</time>に<a href="http://www.chuko.co.jp" title="www.chuko.co.jp">中央公論新社</a>の出版が出ましたが、とても残念なことに、プティフィスの出張が通らず、大切な「ロイヤル革命」の概念がいつの間にか「王政改革」にすり替えられていました！</p>
<p>きっと大手会社の下請け体系の流通経路で行方不明になったのではないでしょうか。</p>
<p>それはそれで、実際、細かく検討すると、プティフィスが語るロイヤル革命が基本的に王国伝統の解釈を改める立場を沿って、距離感が取れているとは言いにくいのか、<ruby>国<rp>(</rp><rt>こく</rt><rp>)</rp>務<rp>(</rp><rt>む</rt><rp>)</rp>諮<rp>(</rp><rt>し</rt><rp>)</rp>問<rp>(</rp><rt>もん</rt><rp>)</rp>会<rp>(</rp><rt>かい</rt><rp>)</rp>議<rp>(</rp><rt>ぎ</rt><rp>)</rp></ruby>での対立を語って、結局筋をややこしく思わせてしまうのかは明らかではないが、最初の目的であるルイ十六世の再評価が果されていることと面白い面があちこちに見受けられるにもかかわらず、読者を納得させる内容になっているとは残念ながら言えません。</p>
<p>特に<ruby lang="ja">テュイルリ<rp>(</rp><rt lang="fr">Les&#160;Tuileries</rt><rp>)</rp></ruby lang="ja">宮殿で無理矢理に済ませられてから、少しづつ状況が悪化している環境に囚われていて脱出する決意抱く王になると、話しが弱くなるとの印象をさせるようとなってしまいます。</p>
<p>よいと否定できない点としまして、今まで、そういった材料は日本語では存在してはなかったのであろうとです。</p>

<h3 class="yellow">財政問題</h3>

<h4 class="yellow">アメリカ独立戦争</h4>

<p><time datetime="1776-09-25">１７７６年９月２５日</time>、<a href="https://ja.wikipedia.org/wiki/アメリカ独立戦争" title="https://ja.wikipedia.org/wiki/アメリカ独立戦争"><ruby lang="ja">アメリカ独立戦争<rp>(</rp><rt lang="en">the&#160;American&#160;War&#160;of&#160;Independence</rt><rp>)</rp></ruby lang="ja"></a>中だった<a href="https://ja.wikipedia.org/wiki/大陸会議" title="https://ja.wikipedia.org/wiki/大陸会議"><ruby>大陸会議<rp>(</rp><rt>Continental&#160;Congress</rt><rp>)</rp></ruby></a>が<a href="https://ja.wikipedia.org/wiki/ベンジャミン・フランクリン" title="https://ja.wikipedia.org/wiki/ベンジャミン・フランクリン"><ruby lang="ja">ベンジャミン<rp>(</rp><rt lang="en">Benjamin</rt><rp>)</rp>・<rp>(</rp><rt lang="en"></rt><rp>)</rp>フランクリン<rp>(</rp><rt lang="en">Franklin</rt><rp>)</rp></ruby lang="ja"></a>、<a href="https://ja.wikipedia.org/wiki/サイラス・ディーン" title="https://ja.wikipedia.org/wiki/サイラス・ディーン"><ruby lang="ja">サイラス<rp>(</rp><rt lang="en">Silas</rt><rp>)</rp>・<rp>(</rp><rt lang="en"></rt><rp>)</rp>ディーン<rp>(</rp><rt lang="en">Deane</rt><rp>)</rp></ruby lang="ja"></a>、<a href="https://en.wikipedia.org/wiki/Arthur_Lee_(diplomat)" title="https://en.wikipedia.org/wiki/Arthur_Lee_(diplomat)"><ruby lang="ja">アーサー<rp>(</rp><rt lang="en">Arthur</rt><rp>)</rp>・<rp>(</rp><rt lang="en"></rt><rp>)</rp>リー<rp>(</rp><rt lang="en">Lee</rt><rp>)</rp></ruby lang="ja"></a>らを含む使節団がパリに発遣されます。</p>
<p>フランスの協力・参戦を求めるためにルイ十六世、<a href="https://en.wikipedia.org/wiki/Charles_Gravier,_comte_de_Vergennes" title="https://en.wikipedia.org/wiki/Charles_Gravier,_comte_de_Vergennes"><ruby lang="ja">ヴェルジェンヌ伯爵<rp>(</rp><rt lang="fr">le&#160;Comte&#160;de&#160;Vergennes</rt><rp>)</rp></ruby lang="ja"></a>外務大臣や<a href="https://ja.wikipedia.org/wiki/カロン・ド・ボーマルシェ" title="https://ja.wikipedia.org/wiki/カロン・ド・ボーマルシェ"><ruby lang="ja">ボーマルシェ<rp>(</rp><rt lang="fr">Beaumarchais</rt><rp>)</rp></ruby lang="ja"></a>と交渉が行われた。</p>
<p>結果としまして、表に、フランス政府からの軍事的援助の可能性は否定しながら、実際、<b>多くの武器や弾薬の船積み、秘密の借金と内密の軍事援助</b>が確実に行なわれるようとなりました。</p>
<p>それでイギリス軍が<a href="https://ja.wikipedia.org/wiki/サラトガの戦い" title="https://ja.wikipedia.org/wiki/サラトガの戦い"><ruby lang="ja">サラトガの戦い<rp>(</rp><rt lang="en">the&#160;Battle&#160;of&#160;Saratoga</rt><rp>)</rp></ruby lang="ja"></a>で敗北し、<a href="https://ja.wikipedia.org/wiki/仏米同盟条約" title="https://ja.wikipedia.org/wiki/仏米同盟条約"><ruby lang="ja">仏米同盟条約<rp>(</rp><rt lang="fr">le&#160;Traité&#160;d&#39;alliance&#160;franco-américaine</rt><rp>)</rp></ruby lang="ja"></a>が公に結ばれるようにして、フランスがアメリカ側に付いて参戦し、<a href="https://ja.wikipedia.org/wiki/ジャン＝バティスト・ド・ロシャンボー" title="https://ja.wikipedia.org/wiki/ジャン＝バティスト・ド・ロシャンボー"><ruby lang="ja">ロシャンボー伯爵<rp>(</rp><rt lang="fr">le&#160;Comte&#160;de&#160;Rochambeau</rt><rp>)</rp></ruby lang="ja"></a>が率いる七千人の当時世界一の兵力を持っていたフランス王国派遣軍――後で特にナポレオン戦争でのその優秀性が明らかとなる――によって、<a href="https://ja.wikipedia.org/wiki/ヨークタウンの戦い" title="https://ja.wikipedia.org/wiki/ヨークタウンの戦い"><ruby lang="ja">ヨークタウンの戦い<rp>(</rp><rt lang="en">the&#160;Battle&#160;of&#160;Yorktown</rt><rp>)</rp></ruby lang="ja"></a>でイギリス軍が降伏させられて、イギリスは<b>アメリカ合衆国の独立</b>を認める<a href="https://ja.wikipedia.org/wiki/ヴェルサイユ宮殿" title="https://ja.wikipedia.org/wiki/ヴェルサイユ宮殿">ヴェルサイユ宮殿</a>で結ばれた<a href="https://ja.wikipedia.org/wiki/パリ条約_(1783年)" title="https://ja.wikipedia.org/wiki/パリ条約_(1783年)"><ruby lang="ja">パリ条約<rp>(</rp><rt lang="fr">le&#160;Traité&#160;de&#160;Paris</rt><rp>)</rp></ruby lang="ja"></a>で終戦されます。</p>

<h4 class="yellow">ジャック・ネッケル財政</h4>

<p>フランス王国としましては、海軍、陸軍にも及ぶ、遠いアメリカで行われている軍事行動を貢ぐには、当然増税が必要だったのに、<time datetime="1776">１７７６年</time>に就任した財務長官<a href="https://ja.wikipedia.org/wiki/ジャック・ネッケル" title="https://ja.wikipedia.org/wiki/ジャック・ネッケル"><ruby lang="ja">ジャック<rp>(</rp><rt lang="fr">Jacques</rt><rp>)</rp>・<rp>(</rp><rt lang="fr"></rt><rp>)</rp>ネッケル<rp>(</rp><rt lang="fr">Necker</rt><rp>)</rp></ruby lang="ja"></a> が、王に、増税せずに、国家への信用に基づく終身定期金形の<b>借金によって出費する</b>ことが出来ると断言したため、財政が大幅に悪化します。</p>
<p>ネッケルは<time datetime="1781">１７８１年</time>にルイ十六世によって<ruby>罷<rp>(</rp><rt>ひ</rt><rp>)</rp>免<rp>(</rp><rt>めん</rt><rp>)</rp></ruby>された後、<time datetime="1787">１７８７年</time>、財務総監として就任した<a href="https://ja.wikipedia.org/wiki/シャルル・アレクサンドル・ド・カロンヌ" title="https://ja.wikipedia.org/wiki/シャルル・アレクサンドル・ド・カロンヌ"><ruby lang="ja">カロンヌ<rp>(</rp><rt lang="fr">Calonne</rt><rp>)</rp></ruby lang="ja"></a>が<time datetime="1786-08-20">１７８６年８月２０日</time>に王に<b>特権身分の免税を廃止して課税の平等を実現</b>しようとする骨太い改革を提案します。</p>
<p><time datetime="1787-02">１７８７年２月</time>、ルイ十六世はこの政策を実施するため、カロンヌの要請により、<a href="https://ja.wikipedia.org/wiki/全国三部会" title="https://ja.wikipedia.org/wiki/全国三部会"><ruby lang="ja">全国三部会<rp>(</rp><rt lang="fr">les&#160;États&#160;Généraux</rt><rp>)</rp></ruby lang="ja"></a>ではなく、<a href="https://ja.wikipedia.org/wiki/名士会" title="https://ja.wikipedia.org/wiki/名士会"><ruby lang="ja">名士会<rp>(</rp><rt lang="fr">l'Assemblée&#160;des&#160;notables</rt><rp>)</rp></ruby lang="ja"></a>を<time datetime="P160Y">百六十年</time>ぶりに召集します。</p>

<h3 class="yellow">ロイヤル革命政策内容</h3>

<p>特権身分の免税を廃止するには、特別な税金を完全になくして、既存だった資格、地位、性質などをなくしながら、農業、商業を改革させて、統一、合理的で現代的な国家を作り上げることまでが含まれていた。</p>
<p>そのため、王が、各地方の独特な伝統、習慣や特権も完全に廃止する予定でした。</p>
<p>種の商業の自由の成立のため、国内関税、塩税をなくして、数年に渡って王領を抵当に入れて、フランスの四分の三を含む身分制議会、国でも、都民議会、県議会と地方議会を作くる一方、特権を関係なく、地籍にだけ基づく所得税の均一を成し遂げる目標も含まれていました。</p>
<p>この政策によって、フランス教会の特別な資格や税金免除など完全になくす恐れを持っていました。実施されたら、各々修道会や聖職者らが地籍で測れる面積計算に従って、財産を見積もられて、皆と同じく所得税を逃れなくなります。</p>
<p>高等議会も地方議会に自分の主権の統一を成し遂げた首相に左右される政府に譲ることにも他ならないことを考えると、相当に保守的な力に抵抗していたことが明らかです。</p>
<p>そのため、まずは、王委員会で審議された時、意見が分かれてしまい．．．</p>

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
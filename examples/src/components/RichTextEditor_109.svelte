<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:155 EN:181 -->

<article>

<p><time>２０２０年３月１２日</time></p>

<h1 class="yellow"><cite>パイドロス</cite></h1>

<div class="notices yellow">
<p>この「<cite>パイドロス</cite>」対話の２４６Ａ段から２４８Ｃ段の引用文では、プラトンは魂の本質を天の行軍に参加するために家を出る、天の翼を持つニ頭立て馬車によって構成される力として描いている。</p>
<p>魂は、真理、正義、科学、知恵を裏から黙想するために、天の<ruby>穹<rp>（</rp><rt>きゅう</rt><rp>）</rp>窿<rp>（</rp><rt>りゅう</rt><rp>）</rp></ruby>に到達しようと努力する。</p>
<p>大騒ぎで傷を負った者は、多くが頂上に達しない。</p>
<p>しかし、公転の周期が終わると、各魂は家に戻り、馬たちに黙想しえられた物を与える…再び出発する前に。</p>
</div>

<ol class="doc-special">
  <li id="246a"><span style="color:#df8a13;">魂の本来の<ruby>相<rp>（</rp><rt>すがた</rt><rp>）</rp></ruby>について、</span>つぎのように語らなければならない。</li>
  <li>その実際の性格がどのようなものであるかをまともに説明するのは、あらゆる点からみて、神のみができる仕事であり、長い叙述を必要とするが、しかし、何に似ているかを<ruby>警<rp>（</rp><rt>たと</rt><rp>）</rp></ruby>えて話すことなら、人間の力でもできるし、また比較的短い話ですむ。</li>
  <li>だから、われわれは、この後のほうのやり方で話すことにしよう。</li>
  <li>そこで、<span style="color:#df8a13;">魂の似すがたを、<span style="color:#a4660e;">翼</span>を持った一組の馬と、その手綱をとる<span style="color:#a4660e;">翼</span>を持った<ruby>駅<rp>（</rp><rt>ぎょ</rt><rp>）</rp>者<rp>（</rp><rt>しゃ</rt><rp>）</rp></ruby>とが、一体になってはたらく力である</span>というふうに、思いうかべよう。</li>
  <li id="246b"><span style="color:#a4660e;">――神々の場合は、</span>その馬と駅者とは、それ自身の性質も、またその血すじからいっても、<span style="color:#a4660e;">すべて善きものばかりである</span>が、<span style="color:#a4660e;">神以外のものにおいては、善いものと悪いものとがまじり合っている。</span></li>
  <li>そして、われわれ人間の場合、まず第一に、馭者 が<ruby>手<rp>（</rp><rt>た</rt><rp>）</rp>綱<rp>（</rp><rt>づな</rt><rp>）</rp></ruby>をとるのは二頭の馬であること、しかも次に、彼の一頭の馬のほうは、資質も血すじも、これと反対の性格である馬であるけれども、これらの理由によって、われわれ人間にあっては、馭者の仕事はどうしても困難となり、<ruby>厄介<rp>（</rp><rt>やっかい</rt><rp>）</rp></ruby>なものとならざるをえないのである。</li>
  <li>それなら、いったいどのようなわけで、<span style="color:#a4660e;">生けるもの</span>が<span style="color:#df8a13;">「死すべき」</span>とか<span style="color:#df8a13;">「不死なる」</span>とか呼ばれるようになったのであろうか。</li>
  <li id="246c"><span style="color:#df8a13;">魂</span>は全体として、<span style="color:#df8a13;">魂</span>なきものの全体を配慮し、</li>
  <li>時によりところによって姿を変えながら、宇宙をくまなくめぐり歩く。</li>
  <li>その場合、<span style="color:#a4660e;">翼</span>のそろった完全な<span style="color:#df8a13;">魂</span>は、天空たかく<ruby>翔<rp>（</rp><rt>か</rt><rp>）</rp></ruby>け上って、あまねく宇宙の秩序を支配するけれども、</li>
  <li>しかし、<span style="color:#a4660e;">翼</span>を失うときは、何らかの固体にぶつかるまで下に落ち、土の要素から成る肉体をつかまえて、</li>
  <li>その個体に住みつく。</li>
  <li>つかまえられた<span style="color:#13aadd;">肉体</span>は、そこに宿った<span style="color:#df8a13;">魂</span>の力のために、自分を動かすようにみえるので、</li>
  <li>この<span style="color:#df8a13;">魂</span>と<span style="color:#13aadd;">肉体</span>とが結合された全体は<span style="color:#df8a13;">「生けるもの」</span>と呼ばれ、そしてそれに<span style="color:#df8a13;">「死すべき」</span>という名が冠せられることになったのである。</li>
  <li>けれども、これを<span style="color:#df8a13;">「不死なる」</span>と呼ぶいわれは、じゅうぶんな推理をへた根拠にもとづくかぎり、少しもない。</li>
  <li>ただしかし、われわれは、神というものを――それを見たこともじゅうぶんに考えたこともないままに――</li>
  <li id="246d"><span style="color:#df8a13;">何か不死なり生きもの</span>というかたちで、すなわち、<span style="color:#df8a13;">魂</span>を持ち、<span style="color:#13aadd;">肉体</span>を持ち、しかも両者は永遠に結合したままでいるものというかたちで、その姿を作り上げるのである。</li>
  <li>しかしながら、こういった事柄がいかにあるか、またどのように物語られるべきかは、神のみこころのままにゆだねるがよい。</li>
  <li>われわれは、こんどは、なぜ<span style="color:#df8a13;">魂</span>から<span style="color:#a4660e;">翼</span>がはなれ落ち、失われるかという理由を理解することにしよう。</li>
  <li>それは、つぎのような原因によるのである。</li>
  <li>そもそも、<span style="color:#a4660e;">翼</span>というものが本来もっている機能は、重きもの、はるかなる高み、神々の種族の<ruby>棲<rp>（</rp><rt>す</rt><rp>）</rp></ruby>まうかたへと、</li>
  <li><ruby>翔<rp>（</rp><rt>か</rt><rp>）</rp></ruby>け上らせ、連れて行くことにあり、<span style="color:#13aadd;">肉体</span>にまつわる数々のものの中でも、<span style="color:#a4660e;">翼</span>こそは最も、神にゆかりある性質を分けもっている。</li>
  <li id="246e">神にゆかりある性質――それは、美しきもの、智なるもの、善なるもの、そしてすべてこれに類するものである。</li>
  <li>したがって、<span style="color:#df8a13;">魂</span>の<span style="color:#a4660e;">翼</span>は、特にこれらのものによって、はぐくまれ、成長し、</li>
  <li>逆に、<ruby>醜<rp>（</rp><rt>みにく</rt><rp>）</rp></ruby>きもの、悪しきもの、そしていま言ったのと反対の性質をもったもろもろのものは、<span style="color:#df8a13;">魂</span>の<span style="color:#a4660e;">翼</span>を衰退させ、滅亡させる。</li>
  <li>――さて、天界においては、まずここに、偉大なる指揮者ゼウス、<span style="color:#a4660e;">翼</span>ある馬車を<ruby>駆<rp>（</rp><rt>か</rt><rp>）</rp></ruby>り、</li>
  <li>万物を秩序づけ、万物を配慮しながら、さきがけて進み行く。</li>
  <li>これにしたがうのは、十一の部隊に整列された神々とダイモーンの軍勢。</li>
  <li id="247a">これはつまり、炉をまもる女神へステイアのみはひとり、神々のすみかにとどまるからである。</li>
  <li>そのほかの神々のうちで、十二神の中に数えられ、隊長の地位に任ぜられている神々は、それぞれ自分が配置された隊列にあって指揮をとる。</li>
  <li>まことに、この天球の内側には、あまたの祝福された光景、あまたの祝福された行路があり、幸福な神々の種族は、</li>
  <li>それぞれ自らの任務をはたしつつ、この幸多き旅路をめぐり歩くのである。</li>
  <li>この行進について行くことをのぞみ、しかもついて行くことのできる者は、誰でも行進に参加する。</li>
  <li>神々の合唱隊には、嫉みというものがないのだから。</li>
  <li id="247b"><ruby>聖餐<rp>（</rp><rt>せいさん</rt><rp>）</rp></ruby>にのぞむときがくると彼らは、</li>
  <li>天空のはてを支える<ruby>穹<rp>（</rp><rt>きゅう</rt><rp>）</rp>窿<rp>（</rp><rt>りゅう</rt><rp>）</rp></ruby>のきわまるところまで、けわしい路をおかしてのぼりつめる。</li>
  <li>神々の馬車は、馬たちの力がつり合い、手綱のさばきも容易であるから、この道程を足どり軽く進んで行く。</li>
  <li>だが、神以外のものの馬車にとっては、それは苦難多き道のりではある。</li>
  <li>ほかでもない、悪い性質をもつほうの馬が、</li>
  <li>駅者によって立派に訓練されているのでないかぎり、地のほうに傾き、彼を下へと引くことによって、重荷となるからである。</li>
  <li>かくしてこのとき、<span style="color:#df8a13;">魂</span>には、世にもはげしい労苦と抗争とが課せられることになる。</li>
  <li>[その有様を話すにあたって、まずその前に、不死と呼ばれる神々の<span style="color:#df8a13;">魂</span>のほうの道行きをたどることにしよう。]</li>
  <li id="247c">不死と呼ばれるものの<span style="color:#df8a13;">魂</span>は、穹窿のきわまるところまでのぼりつめるや、天球の外側に進み出て、</li>
  <li>その背面上に立つ。</li>
  <li>回転する天球の運動は、そうして立った<span style="color:#df8a13;">魂たち</span>を乗せてめぐりはこび、</li>
  <li><span style="color:#df8a13;">魂たち</span>はその間に、天の外の世界を観照する。</li>
  <li>天のかなたのこの領域のことを、</li>
  <li>地上の詩人の誰ひとり、それにふさわしく讃えうたった者はなく、これから先もけっしてないであろう。</li>
  <li>だが、それはつぎに話すようなものである。</li>
  <li>ひとは、とくにほかならぬ真理について話そうとするとき、</li>
  <li>真実ありのままを語る勇気をもたなければならないのだから。</li>
  <li>まことに、この天のかなたの領域に位置を占めるもの、それは、真の意味において<span style="color:#df8a13;">ある</span>ところの存在――色なく、形なく、触れることもできず、ただ、<span style="color:#df8a13;">魂</span>のみちびき手である知性のみが観ることのできる、かの<span style="color:#df8a13;">《実有》</span>である。真実なる知識とはみな、この<span style="color:#df8a13;">《実有》</span>についての知識なのだ。</li>
  <li id="247d">されば、もともと神の精神は――そして、自己に本来適したものを摂取しようと心がけるかぎりのすべての<span style="color:#df8a13;">魂</span>においてもこのことは同じであるが――けがれなき智とけがれなき知識とによってはぐくまれるものであるから、いま久方ぶりに真実在を目にしてよろこびに満ち、天球の運動が一まわりして、もとのところまで運ばれるその間、もろもろの真なるものを観照し、それによってはぐくまれ、幸福を感じる。</li>
  <li>一めぐりする道すがら、<span style="color:#df8a13;">魂</span>が観得するものは、<span style="color:#df8a13;">《正義》</span>そのものであり、<span style="color:#df8a13;">《節制》</span>であり、<span style="color:#df8a13;">《知識》</span>である。この<span style="color:#df8a13;">《知識》</span>とは、生成流転するような性格をもっ知識ではなく、また、</li>
  <li id="247e">いまわれわれがふつう<span style="color:#df8a13;">ある</span>と呼んでいる事物の中にあって、その事物があれこれと異るにつれて異った知識となるごとき知識でもない。まさにこれこそほんとうの意味で<span style="color:#df8a13;">ある</span>ものだという、そういう真実在の中にある知識なのである。</li>
  <li><span style="color:#df8a13;">魂</span>はこのほかにも、さまざまの真実在を同じようにして観照し終え、その饗宴を楽しんでしまうと、ふたたび天の内側にはいって、神々のすみかへと帰って行く。</li>
  <li>そして帰りつくや、馭者は馬たちをかいば桶のところへつれて行って立たせ、彼らの前に<ruby>神食<rp>（</rp><rt>アムプロシア</rt><rp>）</rp></ruby>を投げ与え、それに添えて、<ruby>神酒<rp>（</rp><rt>ネクタル</rt><rp>）</rp></ruby>を飲ませてやる。</li>
  <li id="248a">以上が神々の生である。</li>
  <li>ではこれに対して、ほかの<span style="color:#df8a13;">魂たち</span>はどうかというと、</li>
  <li>まずその中で、最もよく神につき従い、最もよく神に<ruby>倣<rp>（</rp><rt>なら</rt><rp>）</rp></ruby>う<span style="color:#df8a13;">魂</span>は、馭者の頭をあげて天外の世界に超出させ、回転する天球の運動に神々とともに運ばれながら、</li>
  <li>馬たちにわすらわされつつも、かろうじてもろもろの真実在を観得する。</li>
  <li>また、ある<span style="color:#df8a13;">魂</span>は、ときに頭を天外にもたげ、</li>
  <li>ときには天球の中に沈み、</li>
  <li>馬たちが暴れるものだから、</li>
  <li>そのために、真実在のあるものを目にするけれども、</li>
  <li>あるものを見そこなう。</li>
  <li>しかし、そのほかの<span style="color:#df8a13;">魂たち</span>はといえば、</li>
  <li>いずれも上の世界を切なく求めないものとてはなく、神々行進について行こうとはするものの、力およばず、天の表面の下側から出られないまま一緒にめぐり運ばれ、</li>
  <li id="248b">互いに他の前に出ようともがきながら、踏み合い、つき合いする。</li>
  <li>かくしてそこに起こるのは、言語に絶した<ruby>擾<rp>（</rp><rt>じょう</rt><rp>）</rp>乱<rp>（</rp><rt>らん</rt><rp>）</rp></ruby>と抗争と辛苦の汗とであって、馭者の不手際のために、<span style="color:#df8a13;">多くの魂</span>がかたわものとなり、また<span style="color:#df8a13;">多くの魂</span>が多くの<span style="color:#a4660e;">翼</span>を傷つき折られるのは、じつにこのときなのである。</li>
  <li>これらの<span style="color:#df8a13;">魂たち</span>はみな、はなはだしい労苦に疲れはて、真実在の観照によって浄められないままに、そこを立ち去って行く。</li>
  <li>立ち去ってからのち、彼らは、<ruby>思惑<rp>（</rp><rt>ドクサ</rt><rp>）</rp></ruby>をもって身を養う権とする。</li>
  <li>しかし何のために、<span style="color:#df8a13;">《真理の野》</span>のある領域を見ようとして、このような懸命の努力が費されるのであろうか。</li>
  <li id="248c">それは、ほかでもない、その牧場からは、<span style="color:#df8a13;">魂</span>の最もすぐれた部分が本来糧とすべき牧草がとれるからであり、そして、<span style="color:#df8a13;">魂</span>を軽快にする<span style="color:#a4660e;">翼</span>の原質は、この牧草によって養われるからである。</li>
</ol>

<footer>
  <p>プラトン、「<a href="https://ja.wikipedia.org/wiki/パイドロス" title="https://ja.wikipedia.org/wiki/パイドロス"><cite>パイドロス</cite></a>」、２４６Ａ段から２４８Ｃ段まで。</p>
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
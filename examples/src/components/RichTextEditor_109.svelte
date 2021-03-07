<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div class="list-blog-date">
<p><span>12</span>日<i class="fa fa-calendar-o fa-2x"></i></p>
<p>3月</p>
<p><span>2020</span></p>
</div>
<h1 lang="ja"><a href="/blog/ja/phedre" rel="bookmark">パイドロス</a></h1>
</div>
<div class="list-blog-padding lang-font" lang="ja">
<div class="notices yellow">
<p>この『パイドロス』対話の引用文（２４６Ａ～２４８Ｃ）では、プラトンは魂の本質を天の行軍に参加するために家を出る、天の翼を持つ２頭立て馬車によって構成される力として描いている。<br />
魂は、真理、正義、科学、知恵を裏から黙想するために、天の<ruby>穹<rp>(</rp><rt>きゅう</rt><rp>)</rp>窿<rp>(</rp><rt>りゅう</rt><rp>)</rp></ruby>に到達しようと努力する。<br />
大騒ぎで傷を負った者は、多くが頂上に達しない。<br />
しかし、公転の周期が終わると、各魂は家に戻り、馬たちに黙想しえられた物を与える…再び出発する前に。</p>
</div>

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
<td><sup>２４６Ａ</sup></td>
<td><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewbox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"></path></svg></span> <span style="color:#df8a13;">魂の本来の<ruby>相<rp>(</rp><rt>すがた</rt><rp>)</rp></ruby>について、</span>つぎのように語らなければならない。<br>その実際の性格がどのようなものであるかをまともに説明するのは、あらゆる点からみて、神のみができる仕事であり、長い叙述を必要とするが、しかし、何に似ているかを<ruby>警<rp>(</rp><rt>たと</rt><rp>)</rp></ruby>えて話すことなら、人間の力でもできるし、また比較的短い話ですむ。<br>だから、われわれは、この後のほうのやり方で話すことにしよう。<br>そこで、<span style="color:#df8a13;">魂の似すがたを、<span style="color:#a4660e;">翼</span>を持った一組の馬と、その手綱をとる<span style="color:#a4660e;">翼</span>を持った<ruby>駅<rp>(</rp><rt>ぎょ</rt><rp>)</rp>者<rp>(</rp><rt>しゃ</rt><rp>)</rp></ruby>とが、一体になってはたらく力である</span>というふうに、思いうかべよう。</td>
</tr>
<tr>
<td><sup>２４６Ｂ</sup></td>
<td><span style="color:#a4660e;">――神々の場合は、</span>その馬と駅者とは、それ自身の性質も、またその血すじからいっても、<span style="color:#a4660e;">すべて善きものばかりである</span>が、<span style="color:#a4660e;">神以外のものにおいては、善いものと悪いものとがまじり合っている。</span><br>そして、われわれ人間の場合、まず第一に、馭者 が<ruby>手<rp>(</rp><rt>た</rt><rp>)</rp>綱<rp>(</rp><rt>づな</rt><rp>)</rp></ruby>をとるのは二頭の馬であること、しかも次に、彼の一頭の馬のほうは、資質も血すじも、これと反対の性格である馬であるけれども、これらの理由によって、われわれ人間にあっては、馭者の仕事はどうしても困難となり、<ruby>厄介<rp>(</rp><rt>やっかい</rt><rp>)</rp></ruby>なものとならざるをえないのである。<br>それなら、いったいどのようなわけで、<span style="color:#a4660e;">生けるもの</span>が<span style="color:#df8a13;">「死すべき」</span>とか<span style="color:#df8a13;">「不死なる」</span>とか呼ばれるようになったのであろうか。</td>
</tr>
<tr>
<td><sup>２４６Ｃ</sup></td>
<td><span style="color:#df8a13;">魂</span>は全体として、<span style="color:#df8a13;">魂</span>なきものの全体を配慮し、<br>時によりところによって姿を変えながら、宇宙をくまなくめぐり歩く。<br>その場合、<span style="color:#a4660e;">翼</span>のそろった完全な<span style="color:#df8a13;">魂</span>は、天空たかく<ruby>翔<rp>(</rp><rt>か</rt><rp>)</rp></ruby>け上って、あまねく宇宙の秩序を支配するけれども、<br>しかし、<span style="color:#a4660e;">翼</span>を失うときは、何らかの固体にぶつかるまで下に落ち、土の要素から成る肉体をつかまえて、<br>その個体に住みつく。<br>つかまえられた<span style="color:#13aadd;">肉体</span>は、そこに宿った<span style="color:#df8a13;">魂</span>の力のために、自分を動かすようにみえるので、<br>この<span style="color:#df8a13;">魂</span>と<span style="color:#13aadd;">肉体</span>とが結合された全体は<span style="color:#df8a13;">「生けるもの」</span>と呼ばれ、そしてそれに<span style="color:#df8a13;">「死すべき」</span>という名が冠せられることになったのである。<br>けれども、これを<span style="color:#df8a13;">「不死なる」</span>と呼ぶいわれは、じゅうぶんな推理をへた根拠にもとづくかぎり、少しもない。<br>ただしかし、われわれは、神というものを――それを見たこともじゅうぶんに考えたこともないままに――</td>
</tr>
<tr>
<td><sup>２４６Ｄ</sup></td>
<td><span style="color:#df8a13;">何か不死なり生きもの</span>というかたちで、すなわち、<span style="color:#df8a13;">魂</span>を持ち、<span style="color:#13aadd;">肉体</span>を持ち、しかも両者は永遠に結合したままでいるものというかたちで、その姿を作り上げるのである。<br>しかしながら、こういった事柄がいかにあるか、またどのように物語られるべきかは、神のみこころのままにゆだねるがよい。<br>われわれは、こんどは、なぜ<span style="color:#df8a13;">魂</span>から<span style="color:#a4660e;">翼</span>がはなれ落ち、失われるかという理由を理解することにしよう。<br>それは、つぎのような原因によるのである。<br>そもそも、<span style="color:#a4660e;">翼</span>というものが本来もっている機能は、重きもの、はるかなる高み、神々の種族の<ruby>棲<rp>(</rp><rt>す</rt><rp>)</rp></ruby>まうかたへと、<br><ruby>翔<rp>(</rp><rt>か</rt><rp>)</rp></ruby>け上らせ、連れて行くことにあり、<span style="color:#13aadd;">肉体</span>にまつわる数々のものの中でも、<span style="color:#a4660e;">翼</span>こそは最も、神にゆかりある性質を分けもっている。</td>
</tr>
<tr>
<td><sup>２４６Ｅ</sup></td>
<td>神にゆかりある性質――それは、美しきもの、智なるもの、善なるもの、そしてすべてこれに類するものである。<br>したがって、<span style="color:#df8a13;">魂</span>の<span style="color:#a4660e;">翼</span>は、特にこれらのものによって、はぐくまれ、成長し、<br>逆に、<ruby>醜<rp>(</rp><rt>みにく</rt><rp>)</rp></ruby>きもの、悪しきもの、そしていま言ったのと反対の性質をもったもろもろのものは、<span style="color:#df8a13;">魂</span>の<span style="color:#a4660e;">翼</span>を衰退させ、滅亡させる。<br>――さて、天界においては、まずここに、偉大なる指揮者ゼウス、<span style="color:#a4660e;">翼</span>ある馬車を<ruby>駆<rp>(</rp><rt>か</rt><rp>)</rp></ruby>り、<br>万物を秩序づけ、万物を配慮しながら、さきがけて進み行く。<br>これにしたがうのは、十一の部隊に整列された神々とダイモーンの軍勢。</td>
</tr>
<tr>
<td><sup>２４７Ａ</sup></td>
<td>これはつまり、炉をまもる女神へステイアのみはひとり、神々のすみかにとどまるからである。<br>そのほかの神々のうちで、十二神の中に数えられ、隊長の地位に任ぜられている神々は、それぞれ自分が配置された隊列にあって指揮をとる。<br>まことに、この天球の内側には、あまたの祝福された光景、あまたの祝福された行路があり、幸福な神々の種族は、<br>それぞれ自らの任務をはたしつつ、この幸多き旅路をめぐり歩くのである。<br>この行進について行くことをのぞみ、しかもついて行くことのできる者は、誰でも行進に参加する。<br>神々の合唱隊には、嫉みというものがないのだから。</td>
</tr>
<tr>
<td><sup>２４７Ｂ</sup></td>
<td><ruby>聖餐<rp>(</rp><rt>せいさん</rt><rp>)</rp></ruby>にのぞむときがくると彼らは、<br>天空のはてを支える<ruby>穹<rp>(</rp><rt>きゅう</rt><rp>)</rp>窿<rp>(</rp><rt>りゅう</rt><rp>)</rp></ruby>のきわまるところまで、けわしい路をおかしてのぼりつめる。<br>神々の馬車は、馬たちの力がつり合い、手綱のさばきも容易であるから、この道程を足どり軽く進んで行く。<br>だが、神以外のものの馬車にとっては、それは苦難多き道のりではある。<br>ほかでもない、悪い性質をもつほうの馬が、<br>駅者によって立派に訓練されているのでないかぎり、地のほうに傾き、彼を下へと引くことによって、重荷となるからである。<br>かくしてこのとき、<span style="color:#df8a13;">魂</span>には、世にもはげしい労苦と抗争とが課せられることになる。<br>[その有様を話すにあたって、まずその前に、不死と呼ばれる神々の<span style="color:#df8a13;">魂</span>のほうの道行きをたどることにしよう。]</td>
</tr>
<tr>
<td><sup>２４７Ｃ</sup></td>
<td>不死と呼ばれるものの<span style="color:#df8a13;">魂</span>は、穹窿のきわまるところまでのぼりつめるや、天球の外側に進み出て、<br>その背面上に立つ。<br>回転する天球の運動は、そうして立った<span style="color:#df8a13;">魂たち</span>を乗せてめぐりはこび、<br><span style="color:#df8a13;">魂たち</span>はその間に、天の外の世界を観照する。<br>天のかなたのこの領域のことを、<br>地上の詩人の誰ひとり、それにふさわしく讃えうたった者はなく、これから先もけっしてないであろう。<br>だが、それはつぎに話すようなものである。<br>ひとは、とくにほかならぬ真理について話そうとするとき、<br>真実ありのままを語る勇気をもたなければならないのだから。<br>まことに、この天のかなたの領域に位置を占めるもの、それは、真の意味において<span style="color:#df8a13;">ある</span>ところの存在――色なく、形なく、触れることもできず、ただ、<span style="color:#df8a13;">魂</span>のみちびき手である知性のみが観ることのできる、かの<span style="color:#df8a13;">《実有》</span>である。真実なる知識とはみな、この<span style="color:#df8a13;">《実有》</span>についての知識なのだ。</td>
</tr>
<tr>
<td><sup>２４７Ｄ</sup></td>
<td>されば、もともと神の精神は――そして、自己に本来適したものを摂取しようと心がけるかぎりのすべての<span style="color:#df8a13;">魂</span>においてもこのことは同じであるが――けがれなき智とけがれなき知識とによってはぐくまれるものであるから、いま久方ぶりに真実在を目にしてよろこびに満ち、天球の運動が一まわりして、もとのところまで運ばれるその間、もろもろの真なるものを観照し、それによってはぐくまれ、幸福を感じる。<br>一めぐりする道すがら、<span style="color:#df8a13;">魂</span>が観得するものは、<span style="color:#df8a13;">《正義》</span>そのものであり、<span style="color:#df8a13;">《節制》</span>であり、<span style="color:#df8a13;">《知識》</span>である。この<span style="color:#df8a13;">《知識》</span>とは、生成流転するような性格をもっ知識ではなく、また、</td>
</tr>
<tr>
<td><sup>２４７Ｅ</sup></td>
<td>いまわれわれがふつう<span style="color:#df8a13;">ある</span>と呼んでいる事物の中にあって、その事物があれこれと異るにつれて異った知識となるごとき知識でもない。まさにこれこそほんとうの意味で<span style="color:#df8a13;">ある</span>ものだという、そういう真実在の中にある知識なのである。<br><span style="color:#df8a13;">魂</span>はこのほかにも、さまざまの真実在を同じようにして観照し終え、その饗宴を楽しんでしまうと、ふたたび天の内側にはいって、神々のすみかへと帰って行く。<br>そして帰りつくや、馭者は馬たちをかいば桶のところへつれて行って立たせ、彼らの前に<ruby>神食<rp>(</rp><rt>アムプロシア</rt><rp>)</rp></ruby>を投げ与え、それに添えて、<ruby>神酒<rp>(</rp><rt>ネクタル</rt><rp>)</rp></ruby>を飲ませてやる。</td>
</tr>
<tr>
<td><sup>２４８Ａ</sup></td>
<td>以上が神々の生である。<br>ではこれに対して、ほかの<span style="color:#df8a13;">魂たち</span>はどうかというと、<br>まずその中で、最もよく神につき従い、最もよく神に<ruby>倣<rp>(</rp><rt>なら</rt><rp>)</rp></ruby>う<span style="color:#df8a13;">魂</span>は、馭者の頭をあげて天外の世界に超出させ、回転する天球の運動に神々とともに運ばれながら、<br>馬たちにわすらわされつつも、かろうじてもろもろの真実在を観得する。<br>また、ある<span style="color:#df8a13;">魂</span>は、ときに頭を天外にもたげ、<br>ときには天球の中に沈み、<br>馬たちが暴れるものだから、<br>そのために、真実在のあるものを目にするけれども、<br>あるものを見そこなう。<br>しかし、そのほかの<span style="color:#df8a13;">魂たち</span>はといえば、<br>いずれも上の世界を切なく求めないものとてはなく、神々行進について行こうとはするものの、力およばず、天の表面の下側から出られないまま一緒にめぐり運ばれ、</td>
</tr>
<tr>
<td><sup>２４８Ｂ</sup></td>
<td>互いに他の前に出ようともがきながら、踏み合い、つき合いする。<br>かくしてそこに起こるのは、言語に絶した<ruby>擾<rp>(</rp><rt>じょう</rt><rp>)</rp>乱<rp>(</rp><rt>らん</rt><rp>)</rp></ruby>と抗争と辛苦の汗とであって、馭者の不手際のために、<span style="color:#df8a13;">多くの魂</span>がかたわものとなり、また<span style="color:#df8a13;">多くの魂</span>が多くの<span style="color:#a4660e;">翼</span>を傷つき折られるのは、じつにこのときなのである。<br>これらの<span style="color:#df8a13;">魂たち</span>はみな、はなはだしい労苦に疲れはて、真実在の観照によって浄められないままに、そこを立ち去って行く。<br>立ち去ってからのち、彼らは、<ruby>思惑<rp>(</rp><rt>ドクサ</rt><rp>)</rp></ruby>をもって身を養う権とする。<br>しかし何のために、<span style="color:#df8a13;">《真理の野》</span>のある領域を見ようとして、このような懸命の努力が費されるのであろうか。</td>
</tr>
<tr>
<td><sup>２４８Ｃ</sup></td>
<td>それは、ほかでもない、その牧場からは、<span style="color:#df8a13;">魂</span>の最もすぐれた部分が本来糧とすべき牧草がとれるからであり、そして、<span style="color:#df8a13;">魂</span>を軽快にする<span style="color:#a4660e;">翼</span>の原質は、この牧草によって養われるからである。 <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewbox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"></path></svg></span></td>
</tr>
</tbody>
</table>
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
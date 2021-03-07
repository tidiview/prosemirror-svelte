<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
  <div class="list-blog-date">
<p><span>15</span>日<i class="fa fa-calendar-o fa-2x"></i></p>
<p>6月</p>
<p><span>2016</span></p>
</div>
<h1 lang="ja"><a href="/blog/ja/syusigaku" rel="bookmark">朱子学とは何か</a></h1>
</div>
<div class="notices yellow">
<p>ここでは、基本の基本をまとまった形で、わかりやすく紹介されている。  </p>
</div>
<p>それで、私のような、何も知らない人でもある程度朱子学を理解できるのではないかと思う。  </p>

<h2><span style="color: #df8a13;">朱子学</span></h2>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"/></svg></span> 朱子学とはどのような儒学思想なのか。</p>
<p>儒教というのは、古代中国の<ruby>堯<rp>(</rp><rt>ぎょう</rt><rp>)</rp></ruby>・<ruby>舜<rp>(</rp><rt>しゅん</rt><rp>)</rp></ruby>などという聖王の政治を理想とする復古主義的な思想で、春秋時代の孔子（紀元前五百年頃）が開いた。  </p>
<p>この儒教についての学問である儒学は、歴史的に見ると、<ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp>唐<rp>(</rp><rt>とう</rt><rp>)</rp>訓<rp>(</rp><rt>くん</rt><rp>)</rp>詁<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>の学（漢学）から宋代<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp>理<rp>(</rp><rt>り</rt><rp>)</rp></ruby>の学（宋学）へと大きく変化したと言われる。  </p>
<p>漢代から唐代にかけての儒学は、主として五経（書経・易経・詩経・春秋・礼経）や『論語』などの訓詁注釈（古字句の読みや解釈）の学問であり、いわば儒教のテキストを正しく理解するための学問であった。  </p>
<p>ところが、宋代になると仏教（とくに禅宗）の影響をうけつつ、儒教を哲学的に再編しょうとする動きが起こり、「道」「理」「気」「性」などという概念を駆使して、世界と人間のあり方を統一的に説き示そうとする「道学」「理学」としての儒学が形成されることになった。  </p>
<p>これが宋代性理の学（宋学）であり、この宋学の流れを集大成したのが<span style="color: #df8a13;"><ruby>朱熹<rp>(</rp><rt>しゅき</rt><rp>)</rp></ruby></span>（朱子）による<ruby>朱<rp>(</rp><rt>しゅ</rt><rp>)</rp>子<rp>(</rp><rt>し</rt><rp>)</rp>学<rp>(</rp><rt>がく</rt><rp>)</rp></ruby>である。</p>
<p>宋学においては従来の五経とは別に、儒教の<ruby>正典<rp>(</rp><rt>カノン</rt><rp>)</rp></ruby>として<ruby>四<rp>(</rp><rt>し</rt><rp>)</rp>書<rp>(</rp><rt>しょ</rt><rp>)</rp></ruby>（論語・孟子・大学・中庸）が定められて（大学・中庸は礼記から取り出された）、朱子は、その『<ruby>四<rp>(</rp><rt>し</rt><rp>)</rp>書<rp>(</rp><rt>しょ</rt><rp>)</rp>集注<rp>(</rp><rt>しっちゅう</rt><rp>)</rp></ruby>』を完成させて、儒学を新たに政治・道徳の学問とする朱子学を打ち立てた。  </p>
<p>宋学の集大成としての朱子学の概要を、<span style="color: #df8a13;">存在論</span>（宇宙に存在するとはどういうことかについての論）、<span style="color: #df8a13;">心性論</span>（人間の心とはどのようなものかについての論）、<span style="color: #df8a13;">修養論</span>（人間はどう生きるべきかについての論）という三つの柱を中心にして説明すると次のようになる。</p>
<p>まず朱子学の存在論は、<span style="color: #df8a13;">理気二元論</span>と称される。  </p>
<p>宇宙にあるすべての存在は、<ruby>形<rp>(</rp><rt>けい</rt><rp>)</rp>而<rp>(</rp><rt>じ</rt><rp>)</rp>上<rp>(</rp><rt>じょう</rt><rp>)</rp></ruby>の「理」と<ruby>形<rp>(</rp><rt>けい</rt><rp>)</rp>而<rp>(</rp><rt>じ</rt><rp>)</rp>下<rp>(</rp><rt>か</rt><rp>)</rp></ruby>の「気」というものからなっていて、物に常に「理」と「気」が一体化して共在しており、これらを分離することはできない。  </p>
<p>「理」とは物の秩序・法則であり、「気」とは運動のエネルギーを持ち、物を形作る物質である。  </p>
<p>宇宙にある存在はすべて「気」によって構成されているが、「気」は常に運動状態にあり、その「気」の動きの小さい状態を「陰」、動きの大きい状態を「陽」という。  </p>
<p>この「陰」と「陽」の組合せによって、物質を形作る元素ともいうべき五行（木・火・土・金・水）が生成され、さらにこの<ruby>五<rp>(</rp><rt>ご</rt><rp>)</rp>行<rp>(</rp><rt>ぎょう</rt><rp>)</rp></ruby>の配合によってさまざまな物質が生み出される（「<ruby>万<rp>(</rp><rt>ばん</rt><rp>)</rp>物<rp>(</rp><rt>ぶつ</rt><rp>)</rp>化<rp>(</rp><rt>か</rt><rp>)</rp>生<rp>(</rp><rt>しょう</rt><rp>)</rp></ruby>」）</p>
<p>しかし、このようにして生み出されたさまざま物質は、無関係・無秩序に存在しているのではなく、そこには宇宙全体を統括する統一的な物質が貫徹している。  </p>
<p>これを「理」（天の秩序）であるとともに、個々の事物に内在する個別な「物理」（物の秩序）でもあるとされる。  </p>
<p>このことを「<ruby>理<rp>(</rp><rt>り</rt><rp>)</rp>一<rp>(</rp><rt>いつ</rt><rp>)</rp>分<rp>(</rp><rt>ぶ</rt><rp>)</rp>殊<rp>(</rp><rt>しゅ</rt><rp>)</rp></ruby>」（理は、人間においては「性」として存在し（「<ruby>天<rp>(</rp><rt>てん</rt><rp>)</rp>人<rp>(</rp><rt>じん</rt><rp>)</rp>合<rp>(</rp><rt>ごう</rt><rp>)</rp>一<rp>(</rp><rt>いつ</rt><rp>)</rp></ruby>」）、これが人間の行動の規範すなわち道徳となる。</p>
<p>そして、その「理」の根拠になる、宇宙における根源的なものとして想定されたのが、「<ruby>太<rp>(</rp><rt>だい</rt><rp>)</rp>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>」という概念である。朱子はこれを「<ruby>無<rp>(</rp><rt>む</rt><rp>)</rp>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>にして太極」と規定した。  </p>
<p>無極はもともと『老子』の言葉で虚無を意味するが、朱子学では「<ruby>冲<rp>(</rp><rt>ちゅう</rt><rp>)</rp>漠<rp>(</rp><rt>ばく</rt><rp>)</rp>無<rp>(</rp><rt>む</rt><rp>)</rp>朕<rp>(</rp><rt>ちん</rt><rp>)</rp></ruby>」（<ruby>混<rp>(</rp><rt>こん</rt><rp>)</rp>沌<rp>(</rp><rt>とん</rt><rp>)</rp></ruby>として兆しのないこと、無形無象）をいうとし（『羅林先生文集』巻六十九「随筆五」）、理の根拠である太極に明確な形はないが、理はそこに存在するというのである。  </p>
<p>以上のような朱子学の存在論である理気二元論のイメージを図式化すると、おおよそ左図のようになる。</p>
<p>次に朱子学の心性論とはどのようなものか。  </p>
<p>朱子は人間の心を次のようなものとして説明する。  </p>
<p><span style="color: #df8a13;">人間は肉体とは別に心を持っている。</span>  </p>
<p>肉体は「気」によって成り立っているが、心には生まれ付きの「性」というものがあり、これは心のなかの「理」とでも言うべきもので、「天理」と繋がっている。この心のなかの「理」である「性」が外界の<ruby>刺<rp>(</rp><rt>し</rt><rp>)</rp>激<rp>(</rp><rt>げき</rt><rp>)</rp></ruby>を受けた時に、心のなかに「情」が発生する。</p>
<p>朱子は人間の心のなかの「理」を「性」とするが（「性即理」）、同時にこの「性」を<span style="color: #df8a13;">「<ruby>本<rp>(</rp><rt>ほん</rt><rp>)</rp>然<rp>(</rp><rt>ぜん</rt><rp>)</rp></ruby>の性」</span>と<span style="color: #df8a13;">「<ruby>気<rp>(</rp><rt>き</rt><rp>)</rp>質<rp>(</rp><rt>しつ</rt><rp>)</rp></ruby>の性」</span>という二重性において捉えた。  </p>
<p>「本然の性」が<ruby>即<rp>(</rp><rt>すなわち</rt><rp>)</rp></ruby>ち「理」であるが、人間の肉体が「気」によって成り立ち、心が肉体に依存している以上、「気」の状態によって「性」のあり方も一様ではなく、現実的にはさまざまな「気質の性」として「性」は個々人の心に存在するという。</p>
<p>「本然の性」は人間における「理（天理）」であるから絶対的に善であるが、「気質の性」は欲望（私欲）のために混濁し不透明であり、悪の要素を含んでいるものとされる。  </p>
<p>つまり人間の犯す悪は、欲望（私欲）に由来すると考えられた。  </p>
<p>現実の世界には善悪さまざまな人間がいるが、「気質の性」が透明で「本然の性（天理）」を実現した人間が聖人であり、「気質の性」の混濁の程度がひどく、欲望のままに行動する人間が悪人ということになる。</p>
<p>したがって、人間の倫理的な課題とは、心のなかの「気質の性」から混濁を取り去って、心を「本然の性」に回帰させるよう努力するということ、つまり心なかから悪の原因となる欲望（私欲）をなくして「理（天理）」を回復するということでなければならないとしたのである。  </p>
<p>それが<span style="color: #df8a13;">天の理</span>、天の道にかなう人の道であり、そのために人が努力しなければならない規範（基準）が道徳なのである。 <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"/></svg></span>    </p>
<p><br></p>
<div class="notices yellow">
<dl>
<dt>引用:</dt>
<dd>
<a href="https://ja.wikipedia.org/wiki/揖斐高" title="https://ja.wikipedia.org/wiki/揖斐高"><ruby>揖<rp>(</rp><rt>い</rt><rp>)</rp>斐<rp>(</rp><rt>び</rt><rp>)</rp>・<rp>(</rp><rt></rt><rp>)</rp>高<rp>(</rp><rt>たかし</rt><rp>)</rp></ruby></a>、「<a href="https://www.amazon.co.jp/江戸幕府と儒学者-林羅山・鵞峰・鳳岡三代の闘い-中公新書-揖斐-高/dp/4121022734" title="https://www.amazon.co.jp/江戸幕府と儒学者-林羅山・鵞峰・鳳岡三代の闘い-中公新書-揖斐-高/dp/4121022734">江戸幕府と儒学者</a>」、55貢</dd>
</dl>
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
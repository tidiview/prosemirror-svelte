<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<p><span>２３</span>日<i class="fa fa-calendar-o fa-2x"></i></p>
<p>２月</p>
<p><span>２０２０年</span></p>
<h1 class="green"><a href="/blog/ja/priscus" rel="bookmark">トゥールのグレゴリウスによるキルペリック１世と<wbr>プリスクスの出会い</a></h1>
  <div class="notices green">
<p>主人公の社会的位置が全く異なるにもかかわらず、譲歩を伴わない一種の霊的な戦いとして描かれている。<br>
プリスクスは自分の信仰から何も省かないので、私たちにそれで彼の信仰、特にそのキリスト教に対する既約性を理解できることにしてくれています。<br>
私たちは中世が単一のキリスト教だと簡単に想像している自分に、不意に不安定になっていることに驚いてしまいます。<br>
プリスクスは、活気、独創性、例えばトロワのラシなど、他の証人が受け入れるユダヤ教の信仰の特異点を思い起こさせる。<br>
魅力的ですもの！</p>
</div>
<h2 class="green">キルペリック１世とプリスクスの出会い</h2>
<h3 class="green">第５章</h3>
<p><ruby lang="ja">キルペリクス<rp>(</rp><rt lang="fr">Chilpéric</rt><rp>)</rp></ruby lang="ja"><span style="color: #3d778a;">王</span>がまだ上述の<a href="#note_villa" title="villa" id="villa" class="green">館</a>に滞在し、荷物を整理して搬出するよう指示し、<ruby lang="ja">パリシウス<rp>(</rp><rt lang="fr">Parisius</rt><rp>)</rp></ruby lang="ja">（パリ）へ移動する算段をしていたころ、私は別れを告げに王のもとへ赴いた。
その時、王の商品購入を任されている<span style="color: #3d638a;">プリスクスという名のユダヤ人</span>がやって来た。</p>
<p><span style="color: #3d778a;">王</span>はご機嫌を取るように手を彼の頭に乗せて、私に向って言った。<br>
「こちらへおいで下さい、神のしもべよ、<span style="color: #3d778a;">「お手をこの人の頭に置きたまわんことを」</span>（マタイ伝、９、１８）</p>
<p><span style="color: #3d638a;">ユダヤ人</span>が嫌がると<span style="color: #3d778a;">王</span>は言った。<br>
<span style="color: #3d778a;">「何と<ruby>頑<rp>(</rp><rt>かたくな</rt><rp>)</rp></ruby>な、常に不信心な民族か。この人たちは自分たちの預言者の声を通じて神の<ruby>御<rp>(</rp><rt>み</rt><rp>)</rp>子<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>が約束されたことを知ろうとせず、その神の御子の犠牲の上に教会の神秘が建てられたことを知ろうとしないのです」。</span></p>
<p>すると<span style="color: #3d638a;">ユダヤ人</span>は答えた。<br>
<span style="color: #3d638a;">「神は結婚せず、子を持たず、王国の中に自分と同等の者を必要としません。神はモーセを通じ、
『今こそは見よ、 われこそは彼なり。<br>
われの他には神なし。<br>
殺すことと生かすこと、討つことと癒すことはすべてわれこれをなす』
とおっしゃいました」</span>（出エジプト記、３２、３９）</p>
<p>そこで<span style="color: #3d778a;">王</span>は言った。<br>
<span style="color: #3d778a;">「神は霊的子宮で永遠の<ruby>御<rp>(</rp><rt>み</rt><rp>)</rp>子<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>を産みたまうたのです。<br>
年齢において等しく、全能において劣らず、自ら『暁の前
に胎より汝を産めり』（詩篇、１１０、３）と述べておられます。神はあらゆる時代に先立って御子を産み、その御 子を最新の時代の中へ、この世の救世主として送りたまうたのです。あなたがたの預言者が「み言葉をつかわして これを癒し』（詩篇、１０７、２０）と言っている通りです。
それでも神はご自分では産むことなどなさらぬ、とおっしゃるのならば、あなたがたの預言者が神の声で、「我 は産ましめる者なるにいかでか産む事なさざらんや』（イザヤ書、６６、９）と述べているのをお聞き下さい。
これ は彼を通じ信仰によって再生する民族のことを述べているのですよ」</span> </p>
<p>そこで<span style="color: #3d638a;">ユダヤ人</span>は尋ねた。<br>
<span style="color: #3d638a;">「一体、神なるものが人となり、女より生まれ、鞭打たれ、死をこうむるなんてことがあり得ますか」</span></p>
<p>この言葉に<span style="color: #3d778a;">王</span>が黙り込んだので、<span style="color: #503d8a;">私</span>が口をはさんだ。<br>
<span style="color: #503d8a;">「神の御子、すなわち神が人となりたまうたのは、神の事情によるのでなくて我々人間の側の事情によるのです。<br>
というのは、人間が罪を犯し、悪魔に従属してしまった以上、神は人の姿を取らねば人間をあがない戻すことがで きなかったのです。<br>
「私はあなたが信じない福音書や使徒の言葉ではなく、あなたの聖書（旧約聖書）の言葉を引用しましょう。<br>
ダビデがゴリアテをそうやってやっつけたと書いてあるように、あなたがたの剣で攻撃しましょう。<br>
神が人になるだろうとあなたがたの預言者が言っています。『神であり人である者、誰かこれを知らん』（エレミ ア記、１７、９）とね。<br>
また別の個所には、「これこそ我らの神にましますなれ、彼にたぐうべき者なかるべし。<br>
彼は智恵のすべての道 をしろしめし、これをそのしもべヤコブとその愛したもうイスラエルに与えたまえり。<br>
後に彼は地上に現れ、人々 のうちに住めり』（バルク書、３、３５~３７）とあります。<br>
彼が処女より生まれたこともあなたがたの預言者の言葉に聞くことができます。<br>
「見よ、おとめ孕みて子をうまん<br>
『その名をイマヌエルととなうべし』（イザヤ書、７、１４）、<br>
『この名は、神われらと共にいますという意味なり』（マタイ伝、１、２３）と。<br>
「また彼が鞭打たれ、十字架に打ち付けられねばならず、また種々の不正にさらされさいなまれることも、他の預言者が、<br>
『わが手、わが足を刺しつらぬけり、またたがいにわが衣をわかつ』（詩篇、２３、１７~１８）と述べ、また、<br>
『かれらは<ruby>苦<rp>(</rp><rt>にが</rt><rp>)</rp>草<rp>(</rp><rt>くさ</rt><rp>)</rp></ruby>をわが食物に入れ、わが<ruby>渇<rp>(</rp><rt>かわ</rt><rp>)</rp></ruby>ける時に酢を飲ませたり』（同、６９、２２）
と述べています。<br>
そして主が十字架にかかりつつ、悪魔の支配に屈して堕落したこの世を、ご自分の王国のうちに建て直したまうことをダビデは、『神は直き木 （十字架）をもてこの世を<ruby>統<rp>(</rp><rt>すべ</rt><rp>)</rp></ruby>べたまう』（同、９６、１０）
と述べています。<br>
主はそれ以前にも神の御許にあって、ともに統治の業をなしたまうてはいたのですが、ご自分の手で悪魔への隷属から解放したまうた民草を得て改めて、ご自身の王国を持ちたまったのです」</span></p>
<p>すると<span style="color: #3d638a;">ユダヤ人</span>は、<br>
<span style="color: #3d638a;">「どうして神たるものがそんな目にあう必要があったのですか」</span>
と尋ねた。</p>
<p><span style="color: #503d8a;">私</span>は言った。<br>
<span style="color: #503d8a;">「すでに申しました。<br>
神は無垢な人間を創造したまったのですが、蛇の邪知が人間をわなにかけたのです。<br>
こうして人間は罪ある者になり、楽園から追放されてこの世の労働を担うはめになったのです。<br>
人間が神と和解するためには神の一人子キリストの死が必要でした」</span></p>
<p>そこで<span style="color: #3d638a;">ユダヤ人</span>は尋ねた。<br>
<span style="color: #3d638a;">「神は自ら人間の肉をまとわずとも、預言者か使徒をつかわして、人間を正道に戻すことができたのではありま せんか」</span></p>
<p><span style="color: #503d8a;">私</span>は答えた。<br>
<span style="color: #503d8a;">二人間という種族は最初から常に間違った道を歩いていたのです。<br>
大洪水もソドムの火災もエジプトの災難も、<br>
海やヨルダン川の分裂もまったく人に畏敬の念を起こさしめませんでした。<br>
人間は常に神の掟に逆らいました。<br>
人間は預言者の言葉を信じませんでした。<br>
いや、信じなかったばかりか、悔恨を説く彼らを殺しさえしたのです。  </p>
<p>ですから、主自らあがないのために降りたまわずば、我々の救済が成就することはなかったのです。<br>
我々は主の降誕によって再生し、主の洗礼により清められ、主の傷によって癒され、主の復活によって立ち直り、主の昇天により栄光にあずかったのです。</p>
<p>主が我々の病をいやすべく降臨したまうことについてはあなたがたの預言者も、<br>
『そのうたれし<ruby>疵<rp>(</rp><rt>きず</rt><rp>)</rp></ruby>によりてわれらは癒されたり』（イザヤ書、５３、５）
と述べ、<br>
『彼は我々の罪を背負い、罪人のために祈りたり』（同、５３、 ２）
と言い、また、<br>
『彼は屠殺場にひかるる子羊のごとく毛を切る者のまえに黙す羊のごとくその口をひらかざりき。<br>
彼は虐待のうちに判決を受けたり。<br>
その代の人のうち誰が彼のために口を開きしや』（同、５３、７）、<br>
『その名は万軍の主エホバ』（同、５４、５）
などと色々述べています。</p>
<p>また、あなたがたの誇りとするご先祖のヤコブが、自分の息子のユダを祝福する言葉、まるでキリストに向けられたようなあの言葉も、このことを述べているのです。<br>
『汝の父の子らみの前にかがまん。<br>
ユダは獅子の子のごとし、わが子よ汝は萌芽より身を起こせり、獅子のごとく、獅子の子の如くに眠れり、誰か故を起こさん。<br>
汝の目はワインより甘く、汝の歯はミルクより白し。<br>
誰か汝を起こさん』（創世記、５４、５）、とね。<br>
主ご自身は、<br>
『われはわが命をみずから捨て、またこれを得る』（ヨハネ伝、１０、１８）<br>
とおっしゃいますが、 我々の方は、使徒パウロの言うように、<br>
『心にて神のこれを死人のうちよりよみがえらせたまいしことを信ぜされば、救われざる』（ロマ書、１０、９）<br>
存在なのです」</span></p>
<p>我々はその他にもまだ種々のことを話したが、この<span style="color: #3d638a;">哀れなユダヤ人</span>は決して改悛して信仰を持とうとはしなかっ た。</p>
<p><span style="color: #3d638a;">彼</span>が黙りこくってしまったので、<span style="color: #3d778a;">王</span>は言葉で彼を改宗させることはできないと見て取り、<span style="color: #503d8a;">私</span>に向い、別れの祝福をしてほしいと頼み、言った。  </p>
<p><span style="color: #3d778a;">「別れを告げる天使に向い、ヤコブが、<br>
『改われを祝福せずば去らしめず』（創世記、３２、２６）<br>
と言ったのと同じことをわしもあんたに言いたいのじゃ」</span></p>
<p>そう言いつつ<span style="color: #3d778a;">王</span>は手を洗う水を持って来るよう命じた。<br>
<span style="color: #503d8a;">私</span>は手を洗い、祝福を述べ、パンをいただくと神に感謝し、それを自分と王とに分け与え、生のワインを口にして別れを告げた。<br>
<span style="color: #3d778a;">王</span>は馬に乗り奥方と王女と従僕一同を伴ってパリシウスへ戻った。</p>
<div class="notices green">
<p>訳者紹介<br>
<ruby>杉<rp>(</rp><rt>すぎ</rt><rp>)</rp>本<rp>(</rp><rt>もと</rt><rp>)</rp>正<rp>(</rp><rt>まさ</rt><rp>)</rp>俊<rp>(</rp><rt>とし</rt><rp>)</rp></ruby>。１９４９年岐阜市に生まれる。<br>
早稲田大学第一文学部を卒業後、同大学大学院で志波一富教授に現代ドイツ文学を学ぶ。<br>
この頃教室で読んだ作家（ハインツ・リッセ）の文章から、西洋におけるラテン語の重要性を教わり独学を始める。<br>
後に古典ギリシャ語を学び、先生に就いて１年に１巻のペースで『イリアス』を読む。<br>
イラク戦争開始の前年『フランク史』の翻訳をはじめ、その後『イリアス』講読を中断。<br>
複数の大学で初修のドイツ語を教える。<br>
主要著書『ドイツ語文法・１２課』、編注『ハインツ・リッセ・神の裁き』（いずれも行人社）  </p>
</div>
<h3 class="green">註釈</h3>
<h4 id="note_villa" class="green">上述の館</h4>
<div class="notices green">
<p>原稿文書ではラテン語で「<ruby lang="ja">ノヴィゲントゥム<rp>(</rp><rt lang="la">Novigentum</rt><rp>)</rp></ruby lang="ja">」、多分現在の<a href="https://ja.wikipedia.org/wiki/ノジャン＝シュル＝マルヌ" title="https://ja.wikipedia.org/wiki/ノジャン＝シュル＝マルヌ"><ruby lang="ja">ノジャン＝シュル＝マルヌ<rp>(</rp><rt lang="fr">Nogent-sur-Marne</rt><rp>)</rp></ruby lang="ja"></a>。<br>
註１に戻る： <a href="#villa" title="villa">「上述の館に滞在し」 ↑</a></p>
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
<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<p><span>１２</span>日<i class="fa fa-calendar-o fa-2x"></i></p>
<p>２月</p>
<p><span>２０２０年</span></p>
<h1 class="red"><a href="/blog/ja/marivaux" rel="bookmark">マリヴォー、「奴隷の島」</a></h1>
<div class="notices red">
<p>幻想の古代時代で、アテネの若い貴人<ruby lang="ja">イフィクラート<rp>(</rp><rt lang="fr">Iphicrate</rt><rp>)</rp></ruby lang="ja">が召使の<ruby lang="ja">アルルカン<rp>(</rp><rt lang="fr">Arlequin</rt><rp>)</rp></ruby lang="ja">と一緒にある島の海岸に避難することになる。</p>
</div>

<div class="notices red">
<p>主人と召し使いは主人の<ruby lang="ja">エウプロシュネー<rp>(</rp><rt lang="fr">Euphrosiné</rt><rp>)</rp></ruby lang="ja">と待女の<ruby lang="ja">クレアンティス<rp>(</rp><rt lang="fr">Cléanthis</rt><rp>)</rp></ruby lang="ja">のもう一つの対に合流される。
<ruby lang="ja">トリヴラン<rp>(</rp><rt lang="fr">Trivelin</rt><rp>)</rp></ruby lang="ja">が島の法律を紹介しながら彼たちを出迎えます。権力関係が徹頭徹尾逆にされている。
新しく付いた主人たちと奴隷たちが自分の服、身分、それまで名前まで交換しなければなりません。</p>
</div>
<h2 class="red">第二場</h2>
<div id="translation-text-rousi">
<style>.list-blog-padding #translation-text-rousi tr td:first-child {width: 170px;color: #000;font-size: 1.25rem;text-align: right;vertical-align: top;} tr td {vertical-align: top;}</style>
<table>
<thead>
<tr>
<th style="text-align: right;"><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: right;"></td>
<td></td>
<td><span style="color:#b2b2b2">五、六人の島民とともに、一人の貴婦人と彼女の侍女を率き連れやって来たトリヴラン、剣をかざすイフィクラートの方へ駆けつける</span></td>
</tr>
<tr>
<td style="text-align: right;">トリヴラン:</td>
<td>—</td>
<td><span style="color:#b2b2b2">（従者にイフィクラートの剣を取り上げさせつつ）</span><br>止めたまえ、何をするのだ。</td>
</tr>
<tr>
<td style="text-align: right;">イフィクラート:</td>
<td>—</td>
<td>奴隷の無礼を罰するのだ。</td>
</tr>
<tr>
<td style="text-align: right;">トリヴラン:</td>
<td>—</td>
<td>なに、あなたの奴隷だって！それは違うでしょう。<br>あなたの間違いを正して差し上げましょう。<br><span style="color:#b2b2b2">（イフィクラートの剣を取り上げ、アルルカンに与える）</span><br>この刀はあなたのものです。</td>
</tr>
<tr>
<td style="text-align: right;">アルルカン:</td>
<td>—</td>
<td>これはまたご親切に、同志に天の祝福を。</td>
</tr>
<tr>
<td style="text-align: right;">トリヴラン:</td>
<td>—</td>
<td>お名前はなんとおっしゃるかな。</td>
</tr>
<tr>
<td style="text-align: right;">アルルカン:</td>
<td>—</td>
<td>私の「お名前」をお訊ねかい？</td>
</tr>
<tr>
<td style="text-align: right;">トリヴラン:</td>
<td>—</td>
<td>そうですよ。</td>
</tr>
<tr>
<td style="text-align: right;">アルルカン:</td>
<td>—</td>
<td>なあ同志、私には「お名前」なんてないですよ。</td>
</tr>
<tr>
<td style="text-align: right;">トリヴラン:</td>
<td>—</td>
<td>えっ、本当に名無しの権兵衛なんですか。</td>
</tr>
<tr>
<td style="text-align: right;">アルルカン:</td>
<td>—</td>
<td>まったくもってそのとおり。<br>あいつが私を呼ぶ時はいつも、あいつが勝手に付けたあだ名なんで、「アルルカン」だったり、「おい」だったり。</td>
</tr>
<tr>
<td style="text-align: right;">トリヴラン:</td>
<td>—</td>
<td>「おい」というのはあまり丁寧な言い方ではありませんね。<br>そうした言葉遣いをなさる方々の素性が私にもわかろうというものです。<br>それではあの方は何とおっしゃるのです。</td>
</tr>
<tr>
<td style="text-align: right;">アルルカン:</td>
<td>—</td>
<td>へっへっへ、あの方ならちゃあんと「お名前」をお持ちです。<br>イフィクラート若旦那様（！）です。</td>
</tr>
<tr>
<td style="text-align: right;">トリヴラン:</td>
<td>—</td>
<td>そうですか。それでは、これからあなた方のお名前を交換なさるのがよろしいでしょう。</td>
</tr>
<tr>
<td style="text-align: right;">イフィクラート:</td>
<td>—</td>
<td>若旦那様になるのはあなたの番です。<br>イフィクラートさん、あなたをこれから「アルルカン」か「おい」と呼ぶことに致します。</td>
</tr>
<tr>
<td style="text-align: right;">アルルカン:</td>
<td>—</td>
<td><span style="color:#b2b2b2">（狂喜して飛び上がりつつ、主人に）</span>ヒャーッ、こいつぁいいぜ、おい！そこにいる「おい」の若旦那。</td>
</tr>
<tr>
<td style="text-align: right;">トリヴラン:</td>
<td>—</td>
<td><span style="color:#b2b2b2">（アルルカンへ）</span>決してお忘れになってはいけませんが、ご主人の名前をいただくのは、あなたの虚栄心を満足させるためではなく、ご主人の慢心を戒めるためなのです。</td>
</tr>
<tr>
<td style="text-align: right;">アルルカン:</td>
<td>—</td>
<td>そうそう、戒めましょう、戒めましょう。</td>
</tr>
<tr>
<td style="text-align: right;">イフィクラート:</td>
<td>—</td>
<td><span style="color:#b2b2b2">（アルルカンを睨みつつ）</span>馬鹿野郎！</td>
</tr>
<tr>
<td style="text-align: right;">アルルカン:</td>
<td>—</td>
<td>おっとっと、ほらごらんなさい。またいつもの「素性」が出た。これもお芝居のうちですかね。</td>
</tr>
<tr>
<td style="text-align: right;">トリヴラン:</td>
<td>—</td>
<td><span style="color:#b2b2b2">（アルルカンへ）</span>初めのうちは勝手に言わせておきなさい。<br><span style="color:#b2b2b2">（イフィクラートに向かって）</span>アルルカンさん、とんだ冒険になってしまいましたな。<br>イフィクラートさんや私どもをさぞ恨んでいらっしゃることでしょうね。<br>よろしいですから、思う存分気の済むまで悪態をつくがよろしいでしょう。<br>あの方を卑怯者とでもなんとでも罵って結構です。<br>私どもに対してもご同様に。<br>ただ気が晴れた暁にはくれぐれもお忘れのないように、これから、あなたはアルルカンであること、そしてこの方がイフィクラート若旦那様であること。<br>昔はこの方がちょうどあなたが今置かれている境遇にあったことを。<br>それがこの国での法律なのです。<br>共和国における私の任務はこの地方で法律を守らせることなのです。</td>
</tr>
<tr>
<td style="text-align: right;">アルルカン:</td>
<td>—</td>
<td>おっ、なんというご立派な任務。</td>
</tr>
<tr>
<td style="text-align: right;">イフィクラート:</td>
<td>—</td>
<td>わ、私がこの卑怯者の奴隷だとおっしゃるのか。<br>トリヴラン同様に、以前はこの方だってあなたの奴隷だったではありませんか。</td>
</tr>
<tr>
<td style="text-align: right;">アルルカン:</td>
<td>—</td>
<td>まことにもってそのとおり。<br>私の言いつけに従う以外ありませんよ。<br>私はこいつに対してとっても思いやりが深いのです。</td>
</tr>
<tr>
<td style="text-align: right;">イフィクラート:</td>
<td>—</td>
<td>今ならこの男に言いたいこと言って「よいとおっしゃる。<br>それなら、棍棒を一丁いただきたいところだ。</td>
</tr>
<tr>
<td style="text-align: right;">アルルカン:</td>
<td>—</td>
<td>同志、あいつは棍棒で私の背中に話しかけたいらしいのですよ。<br>そんなことになったら、少なくとも私の背中を共和国の保護の下に置いてよろしいでしょうな。<br>トリヴランもちろん、ご心配には及びません。</td>
</tr>
<tr>
<td style="text-align: right;">クレアンティス:</td>
<td>—</td>
<td><span style="color:#b2b2b2">（トリヴランへ）</span>お役人様、あたしも奴隷なんです、同じ船に乗っていた。お忘れにならないでくださいね。</td>
</tr>
<tr>
<td style="text-align: right;">トリヴラン:</td>
<td>—</td>
<td>いや、お嬢さん、あなたのお召し物から察しております。<br>実は、お嬢さんにお訊ねしようとしていたところにちょうど、この男が刀をかざしているのが見えたものですから。ちょっと今、殿方の方を片付けてからにしましょう。アルルカンさん。</td>
</tr>
<tr>
<td style="text-align: right;">アルルカン:</td>
<td>—</td>
<td><span style="color:#b2b2b2">（自分が呼ばれたものと勘違いし）</span>はーい。おっとっと、おれはイフィクラート若旦那様なんだ。</td>
</tr>
<tr>
<td style="text-align: right;">トリヴラン:</td>
<td>—</td>
<td><span style="color:#b2b2b2">（続けて）</span>気を鎮めるよう心がけなさい。あなたは私どもが何者だかもうご存じですね。</td>
</tr>
<tr>
<td style="text-align: right;">アルルカン:</td>
<td>—</td>
<td>も、もっちろんですとも。愛すべき人たち。</td>
</tr>
<tr>
<td style="text-align: right;">クレアンティス:</td>
<td>—</td>
<td>ものの道理をわきまえていらっしゃる方々だわ。</td>
</tr>
<tr>
<td style="text-align: right;">トリヴラン:</td>
<td>—</td>
<td>そうひとの話に茶々を入れるものではありません。<br>あなた方は私どもが何者だかよくご存じだとは思いますが、私どもの先祖が、主人たちのあまりの横暴さに耐えかねてギリシアを離れ、この孤島に住み着いた当初、かつて主人たちから受けた虐待を怨んで定めた法律は、船の難破などで偶然この島の土を踏むことになった主人たちすべての命を奪い、奴隷たちは全員解放すべし、というものだったのです。<br>つまり復讐の感情が法律を支配していたというわけですが、二十年経た後、理性にもとづきこのような厳格な法律は廃棄され、より柔軟なものに代えられるに至ったのです。以来、私どもはあなた方に対し復讐をしようとは思いません、あなた方を善い方向へ導こうと心がけるのです。<br>あなた方の生命はいただかず、あなた方の心の内部に巣喰う非人間性に楔を打ち込みたいと願うだけです。<br>あなた方をいったん奴隷の境遇に陥れ、そうした境遇の与える苦痛に対しあなた方の理解が深まることを願うのです。私どもがあなた方を侮辱するのは、私どもの優位を実感していただくことにより、以前ご自身がそうした特権に浴していたことを反省していただくためなのです。<br>あなたを奴隷の境遇に陥めること、つまりあなたの再教育は三年間続きます。その間あなたのご主人様が進歩にご満足なさったら、あなたは解放されましょう。<br>もし反対に進歩が認められない場合には、あなたが行く先々で不幸な人々をつくってしまわないためにも、あなたはここに留まらねばなりません。そして、あなたに対する私どもの好意から島民の女性を娶られるようはからいましょう。それが私どもの法律にもとづく措置なのです。<br>こうした厳しい処置からその善意を汲み取られんことを。そしてあなたをこの地に導いた運命に感謝を捧げてください。<br>あなたは今、私どもの厳格かつ不当な、けにそして崇高な腕の中にあるというわけです。重態にあるあなたを治療して差し上げましょう。私たちにとってあなたは奴隷である以上に病人だというわけです。<br>たった三年間で全快されることは請け合います。<br>つまりそれ以後一生涯、あなたは人間的であり、理性的、そして寛容であり得ることでしょう。</td>
</tr>
<tr>
<td style="text-align: right;">アルルカン:</td>
<td>—</td>
<td>そしてすべてはロハ、灌腸もされなければ、瀉血もない。こんな安上がりな病院ってありますかね。</td>
</tr>
</tbody>
</table>
<p><br></p>
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
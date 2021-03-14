<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<p><span>６</span>日<i class="fa fa-calendar-o fa-2x"></i></p>
<p>１０月</p>
<p><span>２０１７年</span></p>
<h1 class="blue"><a href="/blog/ja/iohane" rel="bookmark">風は思いのままに吹く...</a></h1><div class="notices blue">
<p><sup>8</sup> あなたはその音を聞いても、それがどこから来て、どこへ行くかを知らない。</p>
<p>以上の文書は、素晴らしいものなのではないか。
もっと知りたい方に、引用されている文書を以下にご覧になれます。
<a href="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" title="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)">ヨハネ</a>の福音の３章で、イエスとニコデモの出会いが語られている。
福音に慣れていない方には、哲学的で、難しいかも知れないが、興味深いだとはいえる。</p>
</div>

<div id="translation-text-rousi">
<h6 class="blue">第３章１～３６節</h6>
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
<td>さて、ファリサイ派に属する、ニコデモという人がいた。ユダヤ人たちの議員であった。</td>
</tr>
<tr>
<td><sup>２</sup></td>
<td>ある夜、イエスのもとに来て言った。<br>「ラビ、わたしどもは、あなたが神のもとから来られた教師であることを知っています。神が共におられるのでなければ、あなたのなさるようなしるしを、だれも行うことはできないからです。」</td>
</tr>
<tr>
<td><sup>３</sup></td>
<td>イエスは答えて言われた。<br>「はっきり言っておく。人は、新たに生まれなければ、神の国を見ることはできない。」</td>
</tr>
<tr>
<td><sup>４</sup></td>
<td>ニコデモは言った。<br>「年をとった者が、どうして生まれることができましょう。もう一度母親の胎内に入って生まれることができるでしょうか。」</td>
</tr>
<tr>
<td><sup>５</sup></td>
<td>イエスはお答えになった。<br>「はっきり言っておく。だれでも水と霊とによって生まれなければ、神の国に入ることはできない。</td>
</tr>
<tr>
<td><sup>６</sup></td>
<td>肉から生まれたものは肉である。霊から生まれたものは霊である。</td>
</tr>
<tr>
<td><sup>７</sup></td>
<td>『あなたがたは新たに生まれねばならない』とあなたに言ったことに、驚いてはならない。</td>
</tr>
<tr>
<td><span style="color: #28a1c5;"><sup>８</sup></span></td>
<td><span style="color: #28a1c5;">「風は思いのままに吹く。あなたはその音を聞いても、それがどこから来て、どこへ行くかを知らない。」</span></td>
</tr>
<tr>
<td><sup>９</sup></td>
<td>するとニコデモは、<br>「どうして、そんなことがありえましょうか」<br>と言った。</td>
</tr>
<tr>
<td><sup>１０</sup></td>
<td>イエスは答えて言われた。<br>「あなたはイスラエルの教師でありながら、こんなことが分からないのか。</td>
</tr>
<tr>
<td><sup>１１</sup></td>
<td>はっきり言っておく。わたしたちは知っていることを語り、見たことを証ししているのに、あなたがたはわたしたちの証しを受け入れない。</td>
</tr>
<tr>
<td><sup>１２</sup></td>
<td>わたしが地上のことを話しても信じないとすれば、天上のことを話したところで、どうして信じるだろう。</td>
</tr>
<tr>
<td><sup>１３</sup></td>
<td>天から降って来た者、すなわち人の子のほかには、天に上った者はだれもいない。</td>
</tr>
<tr>
<td><sup>１４</sup></td>
<td>そして、モーセが荒れ野で蛇を上げたように、人の子も上げられねばならない。</td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td><sup>１５</sup></td>
<td>それは、信じる者が皆、人の子によって永遠の命を得るためである。</td>
</tr>
<tr>
<td><sup>１６</sup></td>
<td>神は、その独り子をお与えになったほどに、世を愛された。独り子を信じる者が一人も滅びないで、永遠の命を得るためである。</td>
</tr>
<tr>
<td><sup>１７</sup></td>
<td>神が御子を世に遣わされたのは、世を裁くためではなく、御子によって世が救われるためである。</td>
</tr>
<tr>
<td><sup>１８</sup></td>
<td>御子を信じる者は裁かれない。信じない者は既に裁かれている。神の独り子の名を信じていないからである。</td>
</tr>
<tr>
<td><sup>１９</sup></td>
<td>光が世に来たのに、人々はその行いが悪いので、光よりも闇の方を好んだ。それが、もう裁きになっている。</td>
</tr>
<tr>
<td><sup>２０</sup></td>
<td>悪を行う者は皆、光を憎み、その行いが明るみに出されるのを恐れて、光の方に来ないからである。</td>
</tr>
<tr>
<td><sup>２１</sup></td>
<td>しかし、真理を行う者は光の方に来る。その行いが神に導かれてなされたということが、明らかになるために。」</td>
</tr>
<tr>
<td><sup>２２</sup></td>
<td>その後、イエスは弟子たちとユダヤ地方に行って、そこに一緒に滞在し、洗礼を授けておられた。</td>
</tr>
<tr>
<td><sup>２３</sup></td>
<td>他方、ヨハネは、サリムの近くのアイノンで洗礼を授けていた。そこは水が豊かであったからである。人々は来て、洗礼を受けていた。</td>
</tr>
<tr>
<td><sup>２４</sup></td>
<td>ヨハネはまだ投獄されていなかったのである。</td>
</tr>
<tr>
<td><sup>２５</sup></td>
<td>ところがヨハネの弟子たちと、あるユダヤ人との間で、清めのことで論争が起こった。</td>
</tr>
<tr>
<td><sup>２６</sup></td>
<td>彼らはヨハネのもとに来て言った。<br>「ラビ、ヨルダン川の向こう側であなたと一緒にいた人、あなたが証しされたあの人が、洗礼を授けています。みんながあの人の方へ行っています。」</td>
</tr>
<tr>
<td><sup>２７</sup></td>
<td>ヨハネは答えて言った。<br>「天から与えられなければ、人は何も受けることができない。</td>
</tr>
<tr>
<td><sup>２８</sup></td>
<td>わたしは、『自分はメシアではない』と言い、『自分はあの方の前に遣わされた者だ』と言ったが、そのことについては、あなたたち自身が証ししてくれる。</td>
</tr>
<tr>
<td><sup>２９</sup></td>
<td>花嫁を迎えるのは花婿だ。花婿の介添え人はそばに立って耳を傾け、花婿の声が聞こえると大いに喜ぶ。だから、わたしは喜びで満たされている。</td>
</tr>
<tr>
<td><sup>３０</sup></td>
<td>あの方は栄え、わたしは衰えねばならない。」</td>
</tr>
<tr>
<td><sup>３１</sup></td>
<td>「上から来られる方は、すべてのものの上におられる。地から出る者は地に属し、地に属する者として語る。天から来られる方は、すべてのものの上におられる。</td>
</tr>
<tr>
<td><sup>３２</sup></td>
<td>この方は、見たこと、聞いたことを証しされるが、だれもその証しを受け入れない。</td>
</tr>
<tr>
<td><sup>３３</sup></td>
<td>の証しを受け入れる者は、神が真実であることを確認したことになる。</td>
</tr>
<tr>
<td><sup>３４</sup></td>
<td>神がお遣わしになった方は、神の言葉を話される。神が“霊”を限りなくお与えになるからである。</td>
</tr>
<tr>
<td><sup>３５</sup></td>
<td>御父は御子を愛して、その手にすべてをゆだねられた。</td>
</tr>
<tr>
<td><sup>３６</sup></td>
<td>御子を信じる人は永遠の命を得ているが、御子に従わない者は、命にあずかることがないばかりか、神の怒りがその上にとどまる。」</td>
</tr>
</tbody>
</table>
</div>
<hr>
<div class="notices blue">
<dl>
<dt>引用：</dt>
<dd>
「ヨハネによる福音」、新共同訳、第３章、１～３６節。</dd>
</dl>
</div>
<hr>
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
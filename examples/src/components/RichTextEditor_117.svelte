<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- FR:NONE EN:NONE -->

<article>

<p><time datetime="2017-10-06">２０１７年１０月６日</time></p>

<h1 class="blue">風は思いのままに吹く...</h1>

<div class="notices blue"><p class="single-li" id="8"><q cite="#johane" style="quotes:'「' '」';">あなたはその音を聞いても、それがどこから来て、どこへ行くかを知らない。</q></p>
<p>以上の文書は、素晴らしいものではありませんか。</p>
<p>もっと知りたい方に、引用されている文書を以下にご覧になれます。</p>
<p><cite><a href="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)" title="https://ja.wikipedia.org/wiki/ヨハネ_(使徒)">ヨハネ</a>の福音書</cite>の三章で、イエスとニコデモの出会いが語られている。</p>
<p>福音に慣れていない方には、哲学的で、難しいかも知れないが、興味深いだとはいえる。</p>
</div>

<div id="translation-text-rousi">

<h6 id="johane" class="blue">第３章１～３６節</h6>

<ol class="doc">
  <li value="1">さて、ファリサイ派に属する、ニコデモという人がいた。ユダヤ人たちの議員であった。<li>
  <li value="2">
    <p>ある夜、イエスのもとに来て言った。</p>
    <p class="conversation">「ラビ、わたしどもは、あなたが神のもとから来られた教師であることを知っています。神が共におられるのでなければ、あなたのなさるようなしるしを、だれも行うことはできないからです。」</p>
  <li>
  <li value="3">
    <p>イエスは答えて言われた。</p>
    <p class="conversation">「はっきり言っておく。人は、新たに生まれなければ、神の国を見ることはできない。」</p>
  <li>
  <li value="4">
    <p>ニコデモは言った。</p>
    <p class="conversation">「年をとった者が、どうして生まれることができましょう。もう一度母親の胎内に入って生まれることができるでしょうか。」</p>
  <li>
  <li value="5">
    <p>イエスはお答えになった。</p>
    <p class="conversation">「はっきり言っておく。だれでも水と霊とによって生まれなければ、神の国に入ることはできない。</p>
  <li>
  <li value="6">肉から生まれたものは肉である。霊から生まれたものは霊である。<li>
  <li value="7">『あなたがたは新たに生まれねばならない』とあなたに言ったことに、驚いてはならない。</li>
  <li value="8"><span style="color: #28a1c5;">「風は思いのままに吹く。あなたはその音を聞いても、それがどこから来て、どこへ行くかを知らない。」</span><li>
  <li value="9">
    <p>するとニコデモは、</p>
    <p class="conversation">
      <p>「どうして、そんなことがありえましょうか」と言った。</p>
  <li>
  <li value="10">
    <p>イエスは答えて言われた。</p>
    <p class="conversation">「あなたはイスラエルの教師でありながら、こんなことが分からないのか。</p>
  <li>
  <li value="11">
    <p class="conversation">はっきり言っておく。わたしたちは知っていることを語り、見たことを証ししているのに、あなたがたはわたしたちの証しを受け入れない。</p>
  <li>
  <li value="12">
    <p class="conversation">わたしが地上のことを話しても信じないとすれば、天上のことを話したところで、どうして信じるだろう。</p>
  <li>
  <li value="13">
    <p class="conversation">天から降って来た者、すなわち人の子のほかには、天に上った者はだれもいない。</p>
  <li>
  <li value="14">
    <p class="conversation">そして、モーセが荒れ野で蛇を上げたように、人の子も上げられねばならない。</p>
  <li>
  <td><li>
  <li value="15">
    <p class="conversation">それは、信じる者が皆、人の子によって永遠の命を得るためである。</p>
  <li>
  <li value="16">
    <p class="conversation">神は、その独り子をお与えになったほどに、世を愛された。独り子を信じる者が一人も滅びないで、永遠の命を得るためである。</p>
  <li>
  <li value="17">
    <p class="conversation">神が御子を世に遣わされたのは、世を裁くためではなく、御子によって世が救われるためである。</p>
  <li>
  <li value="18">
    <p class="conversation">御子を信じる者は裁かれない。信じない者は既に裁かれている。神の独り子の名を信じていないからである。</p>
  <li>
  <li value="19">
    <p class="conversation">光が世に来たのに、人々はその行いが悪いので、光よりも闇の方を好んだ。それが、もう裁きになっている。</p>
  <li>
  <li value="20">
    <p class="conversation">悪を行う者は皆、光を憎み、その行いが明るみに出されるのを恐れて、光の方に来ないからである。</p>
  <li>
  <li value="21">
    <p class="conversation">しかし、真理を行う者は光の方に来る。その行いが神に導かれてなされたということが、明らかになるために。」</p>
  <li>
  <li value="22">その後、イエスは弟子たちとユダヤ地方に行って、そこに一緒に滞在し、洗礼を授けておられた。<li>
  <li value="23">他方、ヨハネは、サリムの近くのアイノンで洗礼を授けていた。そこは水が豊かであったからである。人々は来て、洗礼を受けていた。<li>
  <li value="24">ヨハネはまだ投獄されていなかったのである。<li>
  <li value="25">ところがヨハネの弟子たちと、あるユダヤ人との間で、清めのことで論争が起こった。<li>
  <li value="26">
    <p>彼らはヨハネのもとに来て言った。</p>
    <p class="conversation">「ラビ、ヨルダン川の向こう側であなたと一緒にいた人、あなたが証しされたあの人が、洗礼を授けています。みんながあの人の方へ行っています。」</p>
  <li>
  <li value="27">
    <p>ヨハネは答えて言った。</p>
    <p class="conversation">「天から与えられなければ、人は何も受けることができない。</p>
  <li>
  <li value="28">
    <p class="conversation">わたしは、『自分はメシアではない』と言い、『自分はあの方の前に遣わされた者だ』と言ったが、そのことについては、あなたたち自身が証ししてくれる。</p>
  <li>
  <li value="29">
    <p class="conversation">花嫁を迎えるのは花婿だ。花婿の介添え人はそばに立って耳を傾け、花婿の声が聞こえると大いに喜ぶ。だから、わたしは喜びで満たされている。</p>
  <li>
  <li value="30">
    <p class="conversation">あの方は栄え、わたしは衰えねばならない。」</p>
  <li>
  <li value="31">
    <p class="conversation">「上から来られる方は、すべてのものの上におられる。地から出る者は地に属し、地に属する者として語る。天から来られる方は、すべてのものの上におられる。<li>
  <li value="32">
    <p class="conversation">この方は、見たこと、聞いたことを証しされるが、だれもその証しを受け入れない。</p>
  <li>
  <li value="33">
    <p class="conversation">の証しを受け入れる者は、神が真実であることを確認したことになる。</p>
  <li>
  <li value="34">
    <p class="conversation">神がお遣わしになった方は、神の言葉を話される。神が“霊”を限りなくお与えになるからである。</p>
  <li>
  <li value="35">
    <p class="conversation">御父は御子を愛して、その手にすべてをゆだねられた。</p>
  <li>
  <li value="36">
    <p class="conversation">御子を信じる人は永遠の命を得ているが、御子に従わない者は、命にあずかること  がないばかりか、神の怒りがその上にとどまる。」</p>
  </li>
</ol>
</div>

<footer>
<div class="notices blue">
<p>「<cite>ヨハネによる福音</cite>」、新共同訳、第三章、一節から三十六節まで。</p>
</div>
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
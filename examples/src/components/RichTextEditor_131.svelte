<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
  <div id="body-inner">
	<h1>テイレシアス</h1>
<figure><picture><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-280.webp 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-380.webp 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-480.webp 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-640.webp 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.webp 700w" type="image/webp"></source><img src="https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.jpg" title="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《ミネルヴァとテイレシアス》絵画" alt="ヴェルサイユの大トリアノン宮殿にある、ルネ＝アントワーヌ・ウアス、《ミネルヴァとテイレシアス》絵画" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-280.jpg 280w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-380.jpg 380w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-480.jpg 480w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias-640.jpg 640w,
https://francois-vidit.com/user/sites/docs/pages/01.home/02.versailles/03.trianon/02.tiresias/tiresias_700x501.jpg 700w"></picture><figcaption>手前に見えるミネルヴァが真ん中にいるテイレシアスを見えなくさせている</figcaption></figure>
<div class="notices blue">
<p><a href="https://ja.wikipedia.org/wiki/大トリアノン宮殿" title="https://ja.wikipedia.org/wiki/大トリアノン宮殿"><ruby>大トリアノン宮殿<rp>(</rp><rt>le&#160;Grand&#160;Trianon</rt><rp>)</rp></ruby></a>に展示されている <a href="https://ja.wikipedia.org/wiki/ルネ＝アントワーヌ・ウアス" title="https://ja.wikipedia.org/wiki/ルネ＝アントワーヌ・ウアス"><ruby>ルネ<rp>(</rp><rt>René</rt><rp>)</rp>＝<rp>(</rp><rt>-</rt><rp>)</rp>アントワーヌ<rp>(</rp><rt>Antoine</rt><rp>)</rp>・<rp>(</rp><rt></rt><rp>)</rp>ウアス<rp>(</rp><rt>Houasse</rt><rp>)</rp></ruby></a>が描いた「<ruby>ミネルヴァ<rp>(</rp><rt>Minerve</rt><rp>)</rp>と<rp>(</rp><rt>et</rt><rp>)</rp>テイレシアス<rp>(</rp><rt>Tirésias</rt><rp>)</rp></ruby>」絵画が<ruby>領主たちの控えの間<rp>(</rp><rt>le&#160;Salon&#160;des&#160;Seigneurs</rt><rp>)</rp></ruby>に見られます。<br />
<a href="https://ja.wikipedia.org/wiki/オウィディウス" title="https://ja.wikipedia.org/wiki/オウィディウス"><ruby>オウィディウス<rp>(</rp><rt>Ovidius</rt><rp>)</rp></ruby></a>が書いた「<a href="https://ja.wikipedia.org/wiki/変身物語" title="https://ja.wikipedia.org/wiki/変身物語"><ruby>変身物語<rp>(</rp><rt>Metamorphoseon</rt><rp>)</rp></ruby></a>」に出て来る、賢くさの女神である<a href="https://ja.wikipedia.org/wiki/ミネルウァ" title="https://ja.wikipedia.org/wiki/ミネルウァ"><ruby>ミネルヴァ<rp>(</rp><rt>Minerva</rt><rp>)</rp></ruby></a>と<a href="https://ja.wikipedia.org/wiki/テイレシアース" title="https://ja.wikipedia.org/wiki/テイレシアース"><ruby>テイレシアス<rp>(</rp><rt>Tiresias</rt><rp>)</rp></ruby></a>との不思議な言い合いが語られている。</p>
</div>
<p><span style="color: #28a1c5;"><strong>テイレシアス</strong></span> </p>
<p><span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M76.5 9.0009L57.0898 32.605c-.88226 1.10283-.88226 1.54397-.88226 1.76454 0 1.10286 1.76455 3.30857 2.8674 4.632l13.0167 14.99877L61.50123 74.9545 50.4727 59.51456c-2.87047-3.97028-10.80793-15.88413-10.80793-19.19267 0-1.76458.6617-2.4263 6.6171-9.7051C60.8395 12.74754 63.04522 10.98297 70.98575 3.0455L76.5 9.00092zm-38.16172 0L18.9281 32.605c-.88228 1.10283-.88228 1.54397-.88228 1.76454 0 1.10286 1.76457 3.30857 2.86742 4.632L33.92688 54.0003 23.3395 74.9545 12.30793 59.51456C9.44053 55.54428 1.5 43.63043 1.5 40.3219c0-1.76458.6617-2.4263 6.6171-9.7051C22.67475 12.74754 24.88043 10.98297 32.82097 3.0455l5.51732 5.9554z"/></svg></span>
<sup>３１６</sup>
地上では、運命のさだめどおり、これらの出来事が生じていた。
二度の誕生を経験したバッコスの幼年期も、平穏無事だった。
ちょうどそのころのはなしだが、たまたま、ユピテルは、<ruby>神酒<rp>(</rp><rt>ネクタル</rt><rp>)</rp></ruby>に陶然として、わずらわしい悩みを忘れ、これも<ruby>無<rp>(</rp><rt>ぶ</rt><rp>)</rp>聊<rp>(</rp><rt>りょう</rt><rp>)</rp></ruby>をかこっていたユノ一を相手に、くつろいだ冗談をとばしていたというのだ。</p>
<p><sup>３２０</sup>
ユピテルは「これは確かなことだが、女の喜びのほうが、男のそれよりも大きいのだ」といった。
ユノーは、とんでもないとそれを否定する。
そこで、もの知りのテイレシアスの意見を聞こうということになった。
この男は、男女性の喜びを知っているからだが、それにはわけがある。</p>
<p>あるとき、彼は、緑濃い森のなかで交尾している二匹の大きな蛇を、杖ではげしくなぐりつけたことがあった。
すると、（不思議なことに！）男であったテイレシアスが女に変わり、そのまま七秋を過した。
八秋目に、ふたたび同じ蛇たちに出くわして、こういった。
「おまえたちを打つことが、その人間の性を変えるほどの力を持っているなら、もう一度おまえたちを打つことにしよう」この同じ蛇をなぐりつけると、もとの姿と自然状態 がもどって来た。</p>
<p>いま、冗談めいたの裁定者に選ばれると、彼はユピテルの意見のほうを正しいとした。
ユノーは、もともと大した問題でもないのに、必要以上に気を悪くして、その裁定者を罰し、彼の目を永遠の闇でおおった。</p>
<p><sup>３３７</sup>
しかし、全能の父なる神は――ある神がおこなったことを無効にすることは、どんな神にも許されないので――テイレシアスが視力を奪われたかわりに、未来を予知する能力を彼に与え、この恩典によって罰を軽くした。 <span><svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 78 78" fill="lightgrey" opacity="1"><path d="M1.5 68.9991L20.9102 45.395c.88226-1.10283.88226-1.54397.88226-1.76454 0-1.10286-1.76455-3.30857-2.8674-4.632L5.90836 23.9997 16.49877 3.0455 27.5273 18.48544c2.87047 3.97028 10.80793 15.88413 10.80793 19.19267 0 1.76458-.6617 2.4263-6.6171 9.7051C17.1605 65.25246 14.95478 67.01703 7.01425 74.9545L1.5 68.99908zm38.16172 0L59.0719 45.395c.88228-1.10283.88228-1.54397.88228-1.76454 0-1.10286-1.76457-3.30857-2.86742-4.632L44.07312 23.9997 54.6605 3.0455l11.03157 15.43992C68.55947 22.45572 76.5 34.36957 76.5 37.6781c0 1.76458-.6617 2.4263-6.6171 9.7051C55.32526 65.25246 53.11957 67.01703 45.17904 74.9545l-5.51732-5.9554z"/></svg></span></p>
<p><span style="color: #28a1c5;">オウィディウス、変身物語、第３巻より</span> </p>
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
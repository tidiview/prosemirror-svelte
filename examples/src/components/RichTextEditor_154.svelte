<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `<!-- JA:123 EN:185 -->

<article>

<header>
<p><time datetime="2020-02-12">12 <abbr title="février">Fév.</abbr> 2020</time></p>
</header>

<h1 class="red">Marivaux, <cite>L'île des esclaves</cite></h1>

<div class="notices red">
<p>Dans une Antiquité de fantaisie, Iphicrate, un jeune noble athénien, se retrouve jeté sur le rivage d’une île avec son serviteur Arlequin.</p>
<p>Le maître et le valet sont rejoints par un autre duo formé d'une maîtresse, Euphrosine, et de sa suivante, Cléanthis.</p>
<p>Trivelin les accueille en leur expliquant les lois de l'île: les rapports de pouvoir y sont systématiquement inversés.</p>
<p>Les maîtres et les esclaves nouvellement arrivés doivent échanger leurs habits, leurs conditions et jusqu'à leurs noms.</p>
</div>

<section id="esclave">
<h2 class="red">Marivaux, <cite>L'île des esclaves</cite>, scène 2</h2>

<ol class="doc-three-rows">
  <li><span style="color:#b2b2b2">Trivelin, avec cinq ou six insulaires, arrive conduisant une Dame et la suivante, et ils accourent à Iphicrate qu’ils voient l'épée à la main.</span></li>
  <li data-name="【Trivelin】"><span style="color:#b2b2b2">faisant saisir et désarmer Iphicrate par ses gens.</span> Arrêtez, que voulez-vous faire?</li>
  <li data-name="【Iphicrate】">— Punir l'insolence de mon esclave.</li>
  <li data-name="【Trivelin】">— Votre esclave? vous vous trompez, et l'on vous apprendra à corriger vos termes.</li>
  <li><span style="color:#b2b2b2">(Il prend l'épée d'Iphicrate et la donne à Arlequin.)</span> </li>
  <li>Prenez cette épée, mon camarade, elle est à vous.</li>
  <li data-name="【Arlequin】">— Que le ciel vous tienne gaillard, brave camarade que vous êtes!</li>
  <li data-name="【Trivelin】">— Comment vous appelez-vous?</li>
  <li data-name="【Arlequin】">— Est-ce mon nom que vous demandez?</li>
  <li data-name="【Trivelin】">— Oui vraiment.</li>
  <li data-name="【Arlequin】">— Je n'en ai point, mon camarade.</li>
  <li data-name="【Trivelin】">— Quoi donc, vous n'en avez pas?</li>
  <li data-name="【Arlequin】">— Non, mon camarade; je n'ai que des sobriquets qu’il m'a donnés; il m'appelle quelquefois Arlequin, quelquefois Hé.</li>
  <li data-name="【Trivelin】">— Hé! le terme est sans façon; je reconnais ces Messieurs à de pareilles licences. Et lui, comment s'appelle-t-il?</li>
  <li data-name="【Arlequin】">— Oh, diantre! il s'appelle par un nom, lui; c'est le seigneur Iphicrate.</li>
  <li data-name="【Trivelin】">— Eh bien! changer de nom à présent; soyez le seigneur Iphicrate à votre tour; et vous, Iphicrate, appelez-vous Arlequin, ou bien Hé.</li>
  <li data-name="【Arlequin】">— <span style="color:#b2b2b2">(sautant de joie, à son maître)</span> Oh! Oh! que nous allons rire, seigneur Hé!</li>
  <li data-name="【Trivelin】">— <span style="color:#b2b2b2">(à Arlequin)</span> Souvenez-vous en prenant son nom, mon cher ami, qu’on vous le donne bien moins pour réjouir votre vanité, que pour le corriger de son orgueil.</li>
  <li data-name="【Arlequin】">— Oui, oui, corrigeons, corrigeons!</li>
  <li data-name="【Iphicrate】">— <span style="color:#b2b2b2">(regardant Arlequin)</span> Maraud!</li>
  <li data-name="【Arlequin】">— Parlez donc, mon bon ami, voilà encore une licence qui lui prend; cela est-il du jeu?</li>
  <li data-name="【Trivelin】">— <span style="color:#b2b2b2">(à Arlequin)</span> Dans ce moment-ci, il peut vous dire tout ce qu'il voudra.</li>
  <li><span style="color:#b2b2b2">(À Iphicrate:)</span> Arlequin, votre aventure vous afflige, et vous êtes outré contre Iphicrate et contre nous.</li>
  <li>Ne vous gênez point, soulagez-vous par l'emportement le plus vif; traitez-le de misérable, et nous aussi; tout vous est permis à présent; mais ce moment-ci passé, n'oubliez pas que vous êtes Arlequin, que Voici Iphicrate, et que vous êtes auprès de lui ce qu'il était auprès de vous: ce sont là nos lois, et ma charge dans la république est de les faire observer en ce canton-ci.</li>
  <li data-name="【Arlequin】">— Ah! la belle charge!</li>
  <li data-name="【Iphicrate】">— Moi, l'esclave de ce misérable!</li>
  <li data-name="【Trivelin】">— Il a bien été le vôtre.</li>
  <li data-name="【Arlequin】">— Hélas! il n’a qu’à être bien obéissant, j'aurai mille bontés pour lui.</li>
  <li data-name="【Iphicrate】">— Vous me donnez la liberté de lui dire ce qu’il me plaira; ce n'est pas assez: qu’on m’accorde encore un bâton.</li>
  <li data-name="【Arlequin】">— Camarade, il demande à parler à mon dos, et je le mets sous la protection de la république, au moins.</li>
  <li data-name="【Trivelin】">— Ne craignez rien.</li>
  <li data-name="【Cléanthis】">— <span style="color:#b2b2b2">(à Trivelin)</span> Monsieur, je suis esclave aussi, moi, et du même vaisseau; ne m’oubliez pas, s'il vous plaît.</li>
  <li data-name="【Trivelin】">— Non, ma belle enfant; j'ai bien connu votre condition à votre habit, et j'allais vous parler de ce qui vous regarde, quand je l'ai vu l'épée à la main. Laissez-moi achever ce que j'avais à dire, Arlequin!</li>
  <li data-name="【Arlequin】">— <span style="color:#b2b2b2">(croyant qu’on l'appelle.)</span> Eh!... À propos, je m'appelle Iphicrate.</li>
  <li data-name="【Trivelin】">— <span style="color:#b2b2b2">(continuant)</span> Tâchez de vous calmer; vous savez qui nous sommes, sans doute?</li>
  <li data-name="【Arlequin】">— Oh! morbleu! d’aimables gens.</li>
  <li data-name="【Cléanthis】">— Et raisonnables.</li>
  <li data-name="【Trivelin】">— Ne m'interrompez point, mes enfants.</li>
  <li>Je pense donc que vous savez qui nous sommes.</li>
  <li>Quand nos pères, irrités de la cruauté de leurs maîtres, quittèrent la Grèce et vinrent s'établir ici, dans le ressentiment des outrages qu’ils avaient reçus de leurs patrons, la première loi qu'ils y firent fut d'ôter la vie à tous les maîtres que le hasard ou le naufrage conduirait dans leur île, et conséquemment de rendre la liberté à tous les esclaves: la vengeance avait dicté cette loi; vingt ans après, la raison l’abolit, et en dicta une plus douce. Nous ne nous vengeons plus de vous, nous vous corrigeons; ce n'est plus votre vie que nous poursuivons, c'est la barbarie de vos coeurs que nous voulons détruire; nous vous jetons dans l'esclavage pour vous rendre sensibles aux maux qu’on y éprouve; nous vous humilions, afin que, nous trouvant superbes, vous vous reprochiez de l'avoir été. Votre esclavage, ou plutôt votre cours d’humanité, dure trois ans, au bout desquels on vous renvoie, si vos maîtres sont contents de vos progrès; et si vous ne devenez pas meilleurs, nous vous retenons par charité pour les nouveaux malheureux que vous iriez faire encore ailleurs, et par bonté pour vous, nous vous marions avec une de nos citoyennes. Ce sont là nos lois à cet égard; mettez à profit leur rigueur salutaire, remerciez le sort qui vous conduit ici, il vous remet en nos mains, durs, injustes et superbes; vous voilà en mauvais état, nous entreprenons de vous guérir; vous êtes moins nos esclaves que nos malades, et nous ne prenons que trois ans pour vous rendre sains, c'est-à-dire humains, raisonnables et généreux pour toute votre vie.</li>
  <li data-name="【Arlequin】">— Et le tout gratis, sans purgation ni saignée. Peut-on de la santé à meilleur compte?</li>
</ol>

<footer>
  <p>[source: édition originale de <time datetime="1725">1725</time>, consultable sur <a href="https://gallica.bnf.fr/ark:/12148/bpt6k5754427b/f12.item.texteImage">Gallica</a>, page 11]</p>
  <p>[la pièce ne comporte qu'un acte]</p>
</footer>

</section>

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
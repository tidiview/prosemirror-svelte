<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<div id="body-inner">
<h1 class="yellow">Autres sources</h1>
<h2 id="daniel-dn-12-1-3" class="yellow">Livre de Daniel, chapître 12, verset 1 à 3 [Dn 12, 1-3]</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>01</sup></td>
<td>En ce temps-là se lèvera <span style="color: #df8a13;">Michel</span>, le chef des anges, celui qui se tient auprès des fils de ton peuple. Car ce sera un temps de détresse comme il n’y en a jamais eu depuis que les nations existent, jusqu’à ce temps-ci. Mais en ce temps-ci, ton peuple sera délivré, tous ceux qui se trouveront inscrits dans le Livre.</td></tr>
<tr><td><sup>02</sup></td>
<td>Beaucoup de gens qui dormaient dans la poussière de la terre s’éveilleront, les uns pour la vie éternelle, les autres pour la honte et la déchéance éternelles.</td></tr>
<tr><td><sup>03</sup></td>
<td>Ceux qui ont l’intelligence resplendiront comme la splendeur du firmament, et ceux qui sont des maîtres de justice pour la multitude brilleront comme les étoiles pour toujours et à jamais.</td></tr>
</tbody>
</table>

<h2 id="daniel-dn-10" class="yellow">Livre de Daniel, chapître 10 [Dn 10]</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>01</sup></td>
<td>La troisième année du règne de Cyrus, roi de Perse, une parole fut révélée à Daniel, surnommé Beltassar: parole vraie et grand combat. Il comprit la parole: la compréhension lui vint dans une vision.</td></tr>
<tr><td><sup>02</sup></td>
<td>En ces jours-là, moi, Daniel, je portai le deuil pendant trois semaines entières.</td></tr>
<tr><td><sup>03</sup></td>
<td>Je ne mangeai pas de nourriture agréable; ni viande ni vin ne passèrent par ma bouche, je m’abstins de tout parfum jusqu’au terme de ces trois semaines.</td></tr>
<tr><td><sup>04</sup></td>
<td>Et le vingt-quatrième jour du premier mois, étant au bord du grand fleuve, le Tigre,</td></tr>
<tr><td><sup>05</sup></td>
<td>je levai les yeux et regardai. Voici: il y avait un homme vêtu de lin, qui portait une ceinture d’or pur autour des reins</td></tr>
<tr><td><sup>06</sup></td>
<td>son corps était comme de la chrysolithe, son visage comme un éclair, ses yeux comme des torches de feu, ses bras et ses jambes avaient l’éclat du bronze poli, et le son de ses paroles était comme la rumeur d’une multitude.</td></tr>
<tr><td><sup>07</sup></td>
<td>Moi seul, Daniel, je vis cette apparition. Les hommes qui étaient avec moi ne voyaient pas l’apparition, mais une grande terreur s’abattit sur eux, et ils s’enfuirent pour se cacher.</td></tr>
<tr><td><sup>08</sup></td>
<td>Je demeurai donc seul et regardai cette apparition impressionnante. J’étais sans force aucune, mes traits bouleversés se décomposèrent, ma force m’abandonna.</td></tr>
<tr><td><sup>09</sup></td>
<td>J’entendis le bruit de ses paroles, et lorsque je l’entendis, je fus pris de torpeur et tombai face contre terre.</td></tr>
<tr><td><sup>10</sup></td>
<td>Alors une main me toucha et me redressa sur les genoux et les paumes de mes mains.</td></tr>
<tr><td><sup>11</sup></td>
<td>Il me dit: «<cite>Daniel, homme aimé de Dieu, comprends les paroles que je vais te dire, mets-toi debout. Oui, maintenant j’ai été envoyé vers toi.</cite>» Tandis qu’il me parlait, je me mis debout en tremblant.</td></tr>
<tr><td><sup>12</sup></td>
<td>Il me dit: «<cite>N’aie pas peur, Daniel. Dès le premier jour où tu as eu à cœur de comprendre et de t’humilier devant ton Dieu, tes paroles ont été entendues: c’est à cause de tes paroles que je suis venu.</cite></td></tr>
<tr><td><sup>13</sup></td>
<td><cite>L’ange du royaume de Perse m’a résisté pendant vingt et un jours, mais <span style="color: #df8a13;">Michel</span>, l’un des premiers anges, est venu à mon aide. Moi, je l’ai laissé avec l’ange des rois de Perse.</cite></td></tr>
<tr><td><sup>14</sup></td>
<td><cite>Alors, je suis venu pour t’expliquer ce qui arrivera à ton peuple à la fin des jours. Voici une nouvelle vision pour ces jours-là.</cite>»</td></tr>
<tr><td><sup>15</sup></td>
<td><cite>Tandis qu’il me parlait, je me prosternai à terre en silence.</cite></td></tr>
<tr><td><sup>16</sup></td>
<td><cite>Voici comme une forme de fils d’homme qui me toucha les lèvres. J’ouvris la bouche et parlai. Je dis à celui qui était devant moi: «<cite>Mon seigneur, à cause de l’apparition, l’angoisse me submerge et ma force m’abandonne.</cite></td></tr>
<tr><td><sup>17</sup></td>
<td><cite>Comment le serviteur de mon seigneur pourra-t-il parler avec toi, mon seigneur, alors que je n’ai plus de force, et qu’il ne me reste pas de souffle?</cite>»</td></tr>
<tr><td><sup>18</sup></td>
<td>Celui qui avait l’apparence d’un homme me toucha de nouveau et me réconforta.</td></tr>
<tr><td><sup>19</sup></td>
<td>Il me dit: «<cite>N’aie pas peur, homme aimé de Dieu! La paix soit avec toi! Sois très fort!</cite>» Tandis qu’il parlait, je repris des forces et dit: «<cite>Que mon seigneur parle, car tu m’as rendu la force.</cite>»</td></tr>
<tr><td><sup>20</sup></td>
<td>Il dit: «<cite>Sais-tu pourquoi je suis venu vers toi? Maintenant, je vais retourner combattre l’ange de la Perse. À l’issue de ce combat, l’ange de la Grèce viendra.</cite></td></tr>
<tr><td><sup>21</sup></td>
<td><cite>Personne ne me prête main-forte contre ceux-ci, sauf Michel, votre ange. Mais je t’annonce ce qui est inscrit dans le livre de vérité.</cite>»</td></tr>
</tbody>
</table>

<h2 id="épître-de-jude-verset-9" class="yellow">Épître de Jude, verset 9 [Jd 1,9]</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>09</sup></td>
<td>Or l’archange Michel, discutant avec le démon dans la querelle au sujet du corps de Moïse, n’osa pas porter contre lui un jugement qui l’outrage; il lui dit seulement: «<cite>Que le Seigneur te blâme!</cite>»</td></tr>
</tbody>
</table>
<h2 id="1th-chapître-4-verset-16" class="yellow">Première Épître aux Thessalonissiens, chapître 4 verset 16 [1Th. 4-6]</h2>
<table>
<thead>
<tr>
<th></th>
<th><span hidden>hidden</span></th>
</tr>
</thead>
<tbody>
<tr><td><sup>16</sup></td>
<td>Au signal donné par la voix de <span style="color: #df8a13;">l’archange</span>, et par la trompette divine, le Seigneur lui-même descendra du ciel, et ceux qui sont morts dans le Christ ressusciteront d’abord.</td></tr>
</tbody>
</table>
<p><span style="color: #df8a13;">Traduction liturgique de l'Ancien Testament</span></p>
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
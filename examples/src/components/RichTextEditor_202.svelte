<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `
<article>

<hgroup>
<h1 class="yellow">Perseus</h1>
<h2 class="yellow">at the Chateau de Cheverny</h2>
</hgroup>

<figure>
  <picture><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee_700x869.webp 700w" type="image/webp"><source media="(min-width: 959px)" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee_700x869.jpg 700w"><source sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-280.webp 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-380.webp 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-480.webp 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-640.webp 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus_700x763.webp 700w" type="image/webp"><img src="/user/sites/docs/https://francois-vidit.compages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus_700x763.jpg" alt="Jean MONIER, “Perseus and Andromeda”" title="Jean MONIER, “Perseus and Andromeda”" class="class-diane-img" sizes="(max-width: 767px) 98vw, (min-width: 959px) 50vw, 86vw" srcset="
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-280.jpg 280w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-380.jpg 380w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-480.jpg 480w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus-640.jpg 640w,
  https://francois-vidit.com/user/sites/docs/pages/01.home/04.chateaux-de-la-loire/03.cheverny/02.perseus/persee-focus_700x763.jpg 700w"></picture><figcaption>Perseus <q cite="#persee">in swift flight through empty space</q> helps Andromeda chained to a rock</figcaption>
</figure>


  <div class="notices yellow">
  <p>There is a little text at the origin of one of the representations of <cite><a href="https://en.wikipedia.org/wiki/Perseus" title="https://en.wikipedia.org/wiki/Perseus">Perseus</a> and <a href="https://en.wikipedia.org/wiki/Andromeda_(mythology)" title="https://en.wikipedia.org/wiki/Andromeda">Andromeda</a></cite> painted by <a href="https://en.wikipedia.org/wiki/Jean_Monier" title="https://en.wikipedia.org/wiki/Jean Monier">Jean MONIER</a> for the ceiling of the King's bedroom and exposed on the second storey of the <a href="https://en.wikipedia.org/wiki/Château_de_Cheverny" title="https://en.wikipedia.org/wiki/Château de Cheverny">Château de Cheverny</a>.<br>
  It has been written by a latin writter that lived during the roman empire, <a href="https://en.wikipedia.org/wiki/Ovid" title="https://en.wikipedia.org/wiki/Ovid">Ovid</a>, and is part of Book 4 of his most famous work, <a href="https://en.wikipedia.org/wiki/Metamorphoses" title="https://en.wikipedia.org/wiki/Metamorphoses"><cite>the Metamorphoses</cite></a>.
  It tells how Perseus, that was passing by in the sky of <a href="https://en.wikipedia.org/wiki/Ethiopia" title="https://en.wikipedia.org/wiki/Ethiopia">Ethiopia</a>, was astonished to find a naked young girl chained to a rock....</p>
  </div>


  <h2 id="persee" class="yellow"><cite>Perseus and Andromeda</cite> according to the text of Book <abbr title="four">IV</abbr> of <cite>The Metamorphoses</cite></h2>

    <ol class="doc"><li>Aeolus, son of Hippotas, had confined the winds in their prison under Mount Etna, and Lucifer, who exhorts us to work, shone brightest of all</li>
      <li value="665">in the depths of the eastern sky.</li>
      <li><mark>Perseus</mark> strapped the winged sandals he had put to one side to his feet, armed himself with his curved sword, and cut through the clear air on beating pinions.</li>
      <li>Leaving innumerable nations behind, below and around him, he came in sight of the Ethiopian peoples, and the fields of Cepheus.</li>
      <li value="670">There Jupiter Ammon had unjustly ordered the innocent <mark>Andromeda</mark> to pay the penalty for her mother Cassiopeia’s words.</li>

      <li class="top-space">As soon as <mark>Perseus</mark>, great-grandson of Abas, saw her fastened by her arms to the hard rock,</li>
      <li value="675">he would have thought she was a marble statue, except that a light breeze stirred her hair, and warm tears ran from her eyes.</li>
      <li>He took fire without knowing it and was stunned, and seized by the vision of the form he saw, he almost forgot to flicker his wings in the air.</li>
      <li>As soon as he had touched down, he said
        <p class="conversation">‘O, you do not deserve these chains, but those that link ardent lovers together.</p>
      </li>
      <li value="680">
        <p class="conversation">Tell me your name, I wish to know it, and the name of your country, and why you are wearing these fetters.’</p>
      </li>
      <li>At first she was silent: a virgin, she did not dare to address a man, and she would have hidden her face modestly with her hands, if they had not been fastened behind her.</li>
      <li>She used her eyes instead, and they filled with welling tears.</li>
      <li value="685">At his repeated insistence, so as not to seem to be acknowledging a fault of her own, she told him her name and the name of her country, and what faith her mother had had in her own beauty.</li>

      <li class="top-space">Before she had finished speaking, all the waves resounded, and a monster menaced them, rising from the deep sea, and</li>
      <li value="690">covered the wide waters with its breadth.</li>
      <li>The girl cried out: her grieving father and mother were together nearby, both wretched, but the mother more justifiably so.</li>
      <li>They bring no help with them, only weeping and lamentations to suit the moment, and cling to her fettered body.</li>
      <li value="695">Then the stranger speaks
        <p class="conversation">‘There will be plenty of time left for tears, but only a brief hour is given us to work.</p>
      </li>
      <li>
        <p class="conversation">If I asked for this girl as <mark>Perseus</mark>, son of Jupiter and that Danaë, imprisoned in the brazen tower, whom Jupiter filled with his rich golden shower; <mark>Perseus</mark> conqueror of the Gorgon with snakes for hair, he who dared to fly, driven through the air,</p>
      </li>
      <li value="700">
        <p class="conversation">on soaring wings, then surely I should be preferred to all other suitors as a son-in-law.</p>
      </li>
      <li>
        <p class="conversation">If the gods favour me, I will try to add further merit to these great gifts. I will make a bargain.</p>
      </li>
      <li>
        <p class="conversation">Rescued by my courage, she must be mine.’</p>
      </li>
      <li>Her parents accept the contract (who would hesitate?) and, entreating him,</li>
      <li value="705">promise a kingdom, as well, for a dowry.</li>

      <li class="top-space">See how the creature comes, parting the waves with surging breast, like a fast ship with pointed prow ploughing the water, driven by the sweat-covered muscles of her crew.</li>
      <li value="710">It was as far from the rock as a Balearic sling can send a lead shot through the air, when suddenly the young hero, pushing his feet hard against the earth, shot high among the clouds.</li>
      <li>When the shadow of a man appeared on the water’ surface, the creature raged against the shadow it had seen.</li>
      <li value="715">As Jupiter’s eagle, when it sees a snake, in an open field, showing its livid body to the sun, takes it from behind, and fixes its eager talons in the scaly neck, lest it twists back its cruel fangs, so the descendant of Inachus hurling himself headlong, in swift flight, through empty space, attacked the creature’s back, and, as it roared, buried his sword, to the end of the curved blade,</li>
      <li value="720">in the right side of its neck.</li>
      <li>Hurt by the deep wound, now it reared high in the air, now it dived underwater, or turned now, like a fierce wild boar, when the dogs scare him, and the pack is baying around him.</li>
      <li value="725"><mark>Perseus</mark> evades the eager jaws on swift wings, and strikes with his curved sword wherever the monster is exposed, now at the back encrusted with barnacles, now at the sides of the body, now where the tail is slenderest, ending fishlike.</li>
      <li>The beast vomits seawater mixed with purplish blood.</li>
      <li value="730"> The pinions grow heavy, soaked with spray.</li>
      <li>Not daring to trust his drenched wings any further, he sees a rock whose highest point stands above quiet water, hidden by rough seas.</li>
      <li>Resting there, and holding on to the topmost pinnacle with his left hand, he drives his sword in three or four times, repeatedly.</li>

      <li class="top-space">The shores, and the high places of the gods,</li>
      <li value="735"> fill with the clamour of applause.</li>
      <li>Cassiope and Cepheus rejoice, and greet their son-in-law, acknowledging him as the pillar of their house, and their deliverer.</li>
      <li>Released from her chains, the girl comes forward, the prize and the cause of his efforts.</li>
      <li value="740">He washes his hands after the victory in seawater drawn for him and, so that Medusa’s head, covered with its snakes, is not bruised by the harsh sand, he makes the ground soft with leaves, spreads out plants from below the waves and places the head of that daughter of Phorcys on them.</li>
      <li>The fresh plants, still living inside, and absorbent, respond to the influence of the Gorgon’s head, and harden at its touch,</li>
      <li value="745"> acquiring a new rigidity in branches and fronds.</li>
      <li>And the ocean nymphs try out this wonder on more plants, and are delighted that the same thing happens at its touch, and repeat it by scattering the seeds from the plants through the waves.</li>
      <li value="750">Even now corals have the same nature, hardening at a touch of air, and what was alive, under the water, above water is turned to stone.</li>

      <li class="top-space">To the three gods, he builds the same number of altars out of turf, to you Mercury on the left, to you Minerva, warlike virgin, on the right,</li>
      <li value="755"> and an altar of Jupiter in the centre.</li>
      <li>He sacrifices a cow to Minerva, a calf to the wing-footed god, and a bull to you, greatest of the gods.</li>
      <li>Then he claims <mark>Andromeda</mark>, without a dowry, valuing her as the worthiest prize.</li>
      <li>Hymen and Amor wave the marriage torch, the fires are saturated with strong perfumes, garlands hang from the rafters,</li>
      <li value="760"> and everywhere flutes and pipes, and singing, sound out, the happy evidence of joyful hearts.</li>
      <li>The doors fold back to show the whole of the golden hall, and the noble Ethiopian princes enter to a richly prepared banquet already set out for them.</li>
    </ol>

  <footer>
    <p style="color: #df8a13;">Ovid, <cite>The Metamorphoses</cite>, Book <abbr title="four">IV</abbr>, verses 663 to 764.</p>
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
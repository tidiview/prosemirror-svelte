<script>
  import PlainTextEditor from "./components/PlainTextEditor.svelte";

  import RichTextEditor_101 from "./components/RichTextEditor_101.svelte";
  import RichTextEditor_102 from "./components/RichTextEditor_102.svelte";
  import RichTextEditor_103 from "./components/RichTextEditor_103.svelte";
  import RichTextEditor_104 from "./components/RichTextEditor_104.svelte";
  import RichTextEditor_105 from "./components/RichTextEditor_105.svelte";
  import RichTextEditor_106 from "./components/RichTextEditor_106.svelte";
  import RichTextEditor_107 from "./components/RichTextEditor_107.svelte";
  import RichTextEditor_108 from "./components/RichTextEditor_108.svelte";
  import RichTextEditor_109 from "./components/RichTextEditor_109.svelte";
  import RichTextEditor_110 from "./components/RichTextEditor_110.svelte";
  import RichTextEditor_111 from "./components/RichTextEditor_111.svelte";
  import RichTextEditor_112 from "./components/RichTextEditor_112.svelte";
  import RichTextEditor_113 from "./components/RichTextEditor_113.svelte";
  import RichTextEditor_114 from "./components/RichTextEditor_114.svelte";
  import RichTextEditor_115 from "./components/RichTextEditor_115.svelte";
  import RichTextEditor_116 from "./components/RichTextEditor_116.svelte";
  import RichTextEditor_117 from "./components/RichTextEditor_117.svelte";
  import RichTextEditor_118 from "./components/RichTextEditor_118.svelte";
  import RichTextEditor_119 from "./components/RichTextEditor_119.svelte";
  import RichTextEditor_120 from "./components/RichTextEditor_120.svelte";
  import RichTextEditor_121 from "./components/RichTextEditor_121.svelte";
  import RichTextEditor_122 from "./components/RichTextEditor_122.svelte";
  import RichTextEditor_123 from "./components/RichTextEditor_123.svelte";
  import RichTextEditor_124 from "./components/RichTextEditor_124.svelte";
  import RichTextEditor_125 from "./components/RichTextEditor_125.svelte";
  import RichTextEditor_126 from "./components/RichTextEditor_126.svelte";
  import RichTextEditor_127 from "./components/RichTextEditor_127.svelte";
  import RichTextEditor_128 from "./components/RichTextEditor_128.svelte";
  import RichTextEditor_129 from "./components/RichTextEditor_129.svelte";
  import RichTextEditor_130 from "./components/RichTextEditor_130.svelte";
  import RichTextEditor_131 from "./components/RichTextEditor_131.svelte";
  import RichTextEditor_132 from "./components/RichTextEditor_132.svelte";
  import RichTextEditor_133 from "./components/RichTextEditor_133.svelte";
  import RichTextEditor_134 from "./components/RichTextEditor_134.svelte";
  import RichTextEditor_135 from "./components/RichTextEditor_135.svelte";
  import RichTextEditor_136 from "./components/RichTextEditor_136.svelte";
  import RichTextEditor_137 from "./components/RichTextEditor_137.svelte";
  import RichTextEditor_138 from "./components/RichTextEditor_138.svelte";
  import RichTextEditor_139 from "./components/RichTextEditor_139.svelte";
  import RichTextEditor_140 from "./components/RichTextEditor_140.svelte";
  import RichTextEditor_141 from "./components/RichTextEditor_141.svelte";
  import RichTextEditor_142 from "./components/RichTextEditor_142.svelte";
  import RichTextEditor_143 from "./components/RichTextEditor_143.svelte";
  import RichTextEditor_144 from "./components/RichTextEditor_144.svelte";
  import RichTextEditor_145 from "./components/RichTextEditor_145.svelte";
  import RichTextEditor_146 from "./components/RichTextEditor_146.svelte";
  import RichTextEditor_147 from "./components/RichTextEditor_147.svelte";
  import RichTextEditor_148 from "./components/RichTextEditor_148.svelte";
  import RichTextEditor_149 from "./components/RichTextEditor_149.svelte";
  import RichTextEditor_150 from "./components/RichTextEditor_150.svelte";
  import RichTextEditor_151 from "./components/RichTextEditor_151.svelte";
  import RichTextEditor_152 from "./components/RichTextEditor_152.svelte";
  import RichTextEditor_153 from "./components/RichTextEditor_153.svelte";
  import RichTextEditor_154 from "./components/RichTextEditor_154.svelte";
  import RichTextEditor_155 from "./components/RichTextEditor_155.svelte";
  import RichTextEditor_156 from "./components/RichTextEditor_156.svelte";
  import RichTextEditor_157 from "./components/RichTextEditor_157.svelte";

  import ProsemirrorLogo from "./components/ProsemirrorLogo.svelte"
  import SvelteLogo from "./components/SvelteLogo.svelte"

  let selectedExample = 'richtext_157';

  const examples = {
    "plaintext": {
      name: '#0: Plain text',
      title: "Plain text editor",
      subtitle: "If you don't need rich text. Dead simple to use.",
      component: PlainTextEditor
    },
    "richtext_101": {
      name: '#1: Rich text',
      title: 'Rich text 101',
      subtitle: "Relatively minimal editor setup, to get a hang of the basics.",
      component: RichTextEditor_101
    },
    "richtext_102": {
      name: '#2: Transactions',
      title: 'Rich text 102: Transactions',
      subtitle: "Listening to the on-transaction event instead of on-change, e.g. to track changes to the current selection. Useful to track the state of menu buttons.",
      component: RichTextEditor_102
    },
    "richtext_103": {
      name: "#3: Serialization",
      title: 'Rich text 103: JSON serialization',
      subtitle: "Serializing to and from JSON (and saving your state to local storage, just for fun).",
      component: RichTextEditor_103
    },
    "richtext_104": {
      name: "#4: Plugins",
      title: 'Rich text 104: Plugins',
      subtitle: "Very basic example of how to add Prosemirror plugins to the editor",
      component: RichTextEditor_104
    },
    "richtext_105": {
      name: "#5: Images",
      title: 'Rich text 105: Insert images',
      subtitle: "How to add images to the editor",
      component: RichTextEditor_105
    },
    "richtext_106": {
      name: "#6: Extending schema to Html ruby tag",
      title: 'Rich text 106: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag to the editor",
      component: RichTextEditor_106
    },
    "richtext_107": {
      name: "#7: Extending schema to Html ruby tag and tables",
      title: 'Rich text 107: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag and tables to the editor",
      component: RichTextEditor_107
    },
    "richtext_108": {
      name: "#8: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 108: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor and coloured tables",
      component: RichTextEditor_108
    },
    "richtext_109": {
      name: "#9: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 109: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_109
    },
    "richtext_110": {
      name: "#10: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 110: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_110
    },
    "richtext_111": {
      name: "#11: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 111: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_111
    },
    "richtext_112": {
      name: "#12: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 112: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_112
    },
    "richtext_113": {
      name: "#13: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 113: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_113
    },
    "richtext_114": {
      name: "#14: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 114: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_114
    },
    "richtext_115": {
      name: "#15: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 115: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_115
    },
    "richtext_116": {
      name: "#16: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 116: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_116
    },
    "richtext_117": {
      name: "#17: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 117: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_117
    },
    "richtext_118": {
      name: "#18: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 118: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_118
    },
    "richtext_119": {
      name: "#19: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 119: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_119
    },
    "richtext_120": {
      name: "#20: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 120: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_120
    },
    "richtext_121": {
      name: "#21: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 121: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_121
    },
    "richtext_122": {
      name: "#22: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 122: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_122
    },
    "richtext_123": {
      name: "#23: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 123: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_123
    },
    "richtext_124": {
      name: "#24: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 124: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_124
    },
    "richtext_125": {
      name: "#25: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 125: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_125
    },
    "richtext_126": {
      name: "#26: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 126: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_126
    },
    "richtext_127": {
      name: "#27: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 127: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_127
    },
    "richtext_128": {
      name: "#28: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 128: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_128
    },
    "richtext_129": {
      name: "#29: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 129: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_129
    },
    "richtext_130": {
      name: "#30: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 130: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_130
    },
    "richtext_131": {
      name: "#31: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 131: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_131
    },
    "richtext_132": {
      name: "#32: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 132: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_132
    },
    "richtext_133": {
      name: "#33: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 133: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_133
    },
    "richtext_134": {
      name: "#34: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 134: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_134
    },
    "richtext_135": {
      name: "#35: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 135: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_135
    },
    "richtext_136": {
      name: "#36: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 136: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_136
    },
    "richtext_137": {
      name: "#37: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 137: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_137
    },
    "richtext_138": {
      name: "#38: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 138: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_138
    },
    "richtext_139": {
      name: "#39: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 139: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_139
    },
    "richtext_140": {
      name: "#40: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 140: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_140
    },
    "richtext_141": {
      name: "#41: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 141: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_141
    },
    "richtext_142": {
      name: "#42: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 142: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_142
    },
    "richtext_143": {
      name: "#43: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 143: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_143
    },
    "richtext_144": {
      name: "#44: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 144: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_144
    },
    "richtext_145": {
      name: "#45: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 145: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_145
    },
    "richtext_146": {
      name: "#46: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 146: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_146
    },
    "richtext_147": {
      name: "#47: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 147: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_147
    },
    "richtext_148": {
      name: "#48: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 148: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_148
    },
    "richtext_149": {
      name: "#49: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 149: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_149
    },
    "richtext_150": {
      name: "#50: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 150: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_150
    },
    "richtext_151": {
      name: "#51: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 151: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_151
    },
    "richtext_152": {
      name: "#52: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 152: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_152
    },
    "richtext_153": {
      name: "#53: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 153: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_153
    },
    "richtext_154": {
      name: "#54: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 154: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_154
    },
    "richtext_155": {
      name: "#55: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 155: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_155
    },
    "richtext_156": {
      name: "#56: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 156: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_156
    },
    "richtext_157": {
      name: "#57: Extending schema to Html ruby tag, tables, coloured blockquotes",
      title: 'Rich text 157: Extending schema',
      subtitle: "How to extend schema to parse Html ruby tag, tables to the editor, coloured tables",
      component: RichTextEditor_157
    },
  }

</script>

<main>

  <div class="header">
    <h1>Prosemirror-Svelte</h1>

    <div class="subheader">
      <ProsemirrorLogo/>
      <span style="margin-left: .5em;">ProseMirror bindings for</span>
      <SvelteLogo/>
    </div>
  </div>

  <div class="select_example">

    <h2>{examples[selectedExample].title}</h2>

    <label>
      <select bind:value={selectedExample}>
          {#each Object.keys(examples) as example (example)}
            <option value={example}>{examples[example].name}</option>
          {/each}
      </select>
    </label>

  </div>

  <h4>{examples[selectedExample].subtitle}</h4>

  <svelte:component this={examples[selectedExample].component}/>

</main>

<style>

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1em;
  }

  .subheader {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
  }

  .select_example {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  main {
    padding: 1em;
    max-width: 48em;
    margin: 0 auto;
  }

  img {
    height: 2em;
  }

  h4 {
    margin-bottom: 1em;
  }

  label {
    margin: 0 0 0 1em;
  }
</style>

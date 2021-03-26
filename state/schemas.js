import { Schema } from 'prosemirror-model';
import { nodes, marks } from 'prosemirror-schema-basic';
import { null_to_empty } from 'svelte/internal';

/**
 * Schema to represent a single line of plain text
 * @type {Schema}
 */
export const singleLineSchema = new Schema({
  nodes: {
    doc: {content: "text*"},
    text: {inline: true}
  }
});

/**
 * Schema to represent multiple lines of plain text
 * @type {Schema}
 */
export const multiLineSchema = new Schema({
  nodes: {
    doc: {
      content: "paragraph+"
    },
    paragraph: {
      content: "text*",
      parseDOM: [{tag: "p"}],
      toDOM: () => ["p", 0]
    },
    text: {
      inline: true
    }
  }
});

/**
 * Schema to represent rich text
 * @type {Schema}
 */
export const richTextSchema = new Schema({
  nodes,
  marks
});

/**
 * Schema to extend rich text, including HTML ruby tag
 * @type {Schema}
 */
export const ExtendedrichTextSchema = new Schema({
  nodes: {
    doc: {content: "block+"},
    paragraph: {
      content: "inline*",
      group: "block",
      parseDOM: [{tag: "p"},{tag: "dl dt"}],
      toDOM() { return ["p", 0] },
    },
    blockquote: {
      content: "block+",
      group: "block",
      defining: true,
      parseDOM: [{tag: "blockquote"},{tag: "dd"}],
      toDOM() { return  ["blockquote", 0]},
    },
    heading: {
      content: "inline*",
      group: "block",
      defining: true,
      attrs: {
        level: {default: 1},
        id: {default: null}},
      parseDOM: [
        {tag: "h1", getAttrs(dom) { return {level: 1, id: dom.id} }},
        {tag: "h2", getAttrs(dom) { return {level: 2, id: dom.id} }},
        {tag: "h3", getAttrs(dom) { return {level: 3, id: dom.id} }},
        {tag: "h4", getAttrs(dom) { return {level: 4, id: dom.id} }},
        {tag: "h5", getAttrs(dom) { return {level: 5, id: dom.id} }},
        {tag: "h6", getAttrs(dom) { return {level: 6, id: dom.id} }}
      ],
      toDOM(node) { let {level, id} = node.attrs; return id == "" ? ["h" + level, 0] : ["h" + level, {id}, 0] }
    },
    rubylang: {
      content: "inline*",
      group: "inline",
      inline: true,
      attrs: {lang: {default: null}},
      parseDOM: [{tag: "ruby[lang]", getAttrs(dom) { return {lang: dom.lang} }}, {tag: "rp", ignore: true}],
      toDOM(node) { let {lang} = node.attrs; return ["ruby", {lang}, 0] },
    },
    ruby: {
      content: "inline*",
      group: "inline",
      inline: true,
      parseDOM: [{tag: "ruby"}],
      toDOM() { return ["ruby", 0] },
    },
    text: {
      inline: true,
      group: "inline"
    },
    figure: {
      content: "(picture figcaption? map?)",
      inline: true,
      group: "inline",
      draggable: true,
      parseDOM: [{tag: "figure"}],
      toDOM() { {return ["figure", 0]} },
    },
    picture: {
      content: "(source* image*)",
      parseDOM: [{tag: "picture"}],
      toDOM() { {return ["picture", 0]} },
    },
    source: {
      attrs: {
        media: {default: null},
        sizes: {default: null},
        srcset: {default: null},
        type: {default: null},
      },
      parseDOM: [{tag: "source", getAttrs(dom) {
        return {
          media: dom.getAttribute("media"),
          sizes: dom.getAttribute("sizes"),
          srcset: dom.getAttribute("srcset"),
          type: dom.getAttribute("type"),
        }
      }}],
      toDOM(node) { let {media, sizes, srcset, type} = node.attrs; return ["source", {media, sizes, srcset, type}] },
    },
    image: {
      attrs: {
        src: {},
        title: {default: null},
        alt: {default: null},
        usemap: {default: null},
        sizes: {default: null},
        srcset: {default: null},
        id: {default: null},
      },
      parseDOM: [{tag: "img[src]", getAttrs(dom) {
        return {
          src: dom.getAttribute("src"),
          title: dom.getAttribute("title"),
          alt: dom.getAttribute("alt"),
          usemap: dom.getAttribute("usemap"),
          sizes: dom.getAttribute("sizes"),
          srcset: dom.getAttribute("srcset"),
          id: dom.getAttribute("id"),
        }
      }}],
      toDOM(node) { let {src, title, alt, usemap, sizes, srcset, id} = node.attrs; return ["img", {src, title, alt, usemap, sizes, srcset, id}] },
    },
    figcaption: {
      content: "inline*",
      group: "block",
      parseDOM: [{tag: "figcaption"}],
      toDOM() { {return ["figcaption", 0]} },
    },
    map: {
      attrs: {
        name: {},
        id: {default: null},
      },
      content: "area*",
      parseDOM: [{tag: "map[name]", getAttrs(dom) {
        return {
          name: dom.getAttribute("name"),
          id: dom.getAttribute("id"),
        }
      }}],
      toDOM(node) { let {name, id} = node.attrs; return ["map", {name, id}, 0] },
    },
    area: {
      attrs: {
        title: {default: null},
        alt: {default: null},
        id: {default: null},
        href: {},
        shape: {default: null},
        coords: {default: null},
      },
      parseDOM: [{tag: "area[href]", getAttrs(dom) {
        return {
          href: dom.getAttribute("href"),
          title: dom.getAttribute("title"),
          alt: dom.getAttribute("alt"),
          id: dom.getAttribute("id"),
          shape: dom.getAttribute("shape"),
          coords: dom.getAttribute("coords"),
        }
      }}],
      toDOM(node) { let {href, title, alt, id, shape, coords} = node.attrs; return ["area", {href, title, alt, id, shape, coords}] },
    },
    horizontal_rule: {
      group: "block",
      parseDOM: [{tag: "hr"}],
      toDOM() {return ["hr"]}
    },
    hard_break: {
      inline: true,
      group: "inline",
      selectable: false,
      parseDOM: [{tag: "br"}],
      toDOM() {return ["br"]}
    },
    bullet_list: {
      content: "list_item+",
      group: "block",
      parseDOM: [{tag: "ul"}],
      toDOM() { return ["ul", 0] },
    },
    list_item: {
      content: "inline*",
      defining: true,
      parseDOM: [{tag: "li"}],
      toDOM() { return ["li", 0] },
    },
  },
  marks: {
    rtlang: {
      attrs: {lang: {default: null}},
      inclusive: false,
      parseDOM: [{tag: "rt[lang]", getAttrs(dom) { return {lang: dom.lang} }}],
      toDOM(node) { let {lang} = node.attrs; return ["rt", {lang}, 0] },
    },
    rt: {
      inclusive: false,
      parseDOM: [{tag: "rt"}],
      toDOM() { return ["rt", 0] },
    },
    linkwithid: {
      attrs: {
        href: {default: null},
        title: {default: null},
        id: {}
      },
      inclusive: false,
      parseDOM: [{tag: "a[id]", getAttrs(dom) {
        return {id: dom.getAttribute("id"), href: dom.getAttribute("href"), title: dom.getAttribute("title")}
      }, priority: 60}],
      toDOM(node) { let {id, href, title} = node.attrs; return ["a", {id, href, title}, 0] }
    },
    link: {
      attrs: {
        href: {},
        title: {default: null}
      },
      inclusive: false,
      parseDOM: [{tag: "a[href]", getAttrs(dom) {
        return {href: dom.getAttribute("href"), title: dom.getAttribute("title")}
      }}],
      toDOM(node) { let {href, title} = node.attrs; return ["a", {href, title}, 0] }
    },
    strong: {
      parseDOM: [{tag: "strong"}],
      toDOM() { return ["strong", 0] },
    },
    sup: {
      parseDOM: [{tag: "sup"}],
      toDOM() { return ["sup", 0] },
    },
    spancolor: {
      attrs: {color: {default: {}}},
      parseDOM: [{tag: "span[style]", getAttrs(dom) {
        return {color: dom.style["color"] ? dom.style["color"] : "none"}
      }}],
      toDOM(node) { let {color} = node.attrs ;return ["span", {"style": "color:" + color}, 0] },
    },
  },
});

/**
 * Schema to extend rich text, including HTML ruby tag
 * @type {Schema} INCLUDING TABLES
 */
export const ExtendedTworichTextSchema = new Schema({
  nodes: {
    doc: {content: "(block | table)+"},
    table: {
      content: "table_head table_body",
      group: "table",
      tableRole: "table",
      isolating: true,
      parseDOM: [{tag: "table"}],
      toDOM() { return ["table", 0] }
    },
    table_head: {
      content: "table_row*",
      group: "table",
      isolating: true,
      parseDOM: [{tag: "thead"}],
      toDOM() { return ["thead", ["tr", 0]] }
    },
    table_body: {
      content: "table_row*",
      group: "table",
      isolating: true,
      parseDOM: [{tag: "tbody"}],
      toDOM() { return ["tbody", ["tr", 0]] }
    },
    table_row: {
      content: "(table_cell | table_header)*",
      group: "table",
      tableRole: "row",
      parseDOM: [{tag: "tr"}],
      toDOM() { return ["tr", 0] }
    },
    table_header: {
      content: "inline*",
      group: "table",
      isolating: true,
      tableRole: "header_cell",
      parseDOM: [{tag: "th"}],
      toDOM() { return ["th", 0] }
    },
    table_cell: {
      content: "inline*",
      group: "table",
      isolating: true,
      tableRole: "cell",
      parseDOM: [{tag: "td"}],
      toDOM() { return ["td", 0] }
    },
    paragraph: {
      content: "inline*",
      group: "block",
      parseDOM: [{tag: "p"},{tag: "dl dt"}],
      toDOM() { return ["p", 0] },
    },
    blockquote: {
      content: "block+",
      group: "block",
      defining: true,
      parseDOM: [{tag: "blockquote"},{tag: "dd"}],
      toDOM() { return  ["blockquote", 0]},
    },
    heading: {
      content: "inline*",
      group: "block",
      defining: true,
      attrs: {
        level: {default: 1},
        id: {default: null}},
      parseDOM: [
        {tag: "h1", getAttrs(dom) { return {level: 1, id: dom.id} }},
        {tag: "h2", getAttrs(dom) { return {level: 2, id: dom.id} }},
        {tag: "h3", getAttrs(dom) { return {level: 3, id: dom.id} }},
        {tag: "h4", getAttrs(dom) { return {level: 4, id: dom.id} }},
        {tag: "h5", getAttrs(dom) { return {level: 5, id: dom.id} }},
        {tag: "h6", getAttrs(dom) { return {level: 6, id: dom.id} }}
      ],
      toDOM(node) { let {level, id} = node.attrs; return id == "" ? ["h" + level, 0] : ["h" + level, {id}, 0] }
    },
    rubylang: {
      content: "inline*",
      group: "inline",
      inline: true,
      attrs: {lang: {default: null}},
      parseDOM: [{tag: "ruby[lang]", getAttrs(dom) { return {lang: dom.lang} }}, {tag: "rp", ignore: true}],
      toDOM(node) { let {lang} = node.attrs; return ["ruby", {lang}, 0] },
    },
    ruby: {
      content: "inline*",
      group: "inline",
      inline: true,
      parseDOM: [{tag: "ruby"}],
      toDOM() { return ["ruby", 0] },
    },
    text: {
      inline: true,
      group: "inline"
    },
    figure: {
      content: "(picture figcaption? map?)",
      inline: true,
      group: "inline*",
      draggable: true,
      parseDOM: [{tag: "figure"}],
      toDOM() { {return ["figure", 0]} },
    },
    picture: {
      content: "(source* image*)",
      parseDOM: [{tag: "picture"}],
      toDOM() { {return ["picture", 0]} },
    },
    source: {
      attrs: {
        media: {default: null},
        sizes: {default: null},
        srcset: {default: null},
        type: {default: null},
      },
      parseDOM: [{tag: "source", getAttrs(dom) {
        return {
          media: dom.getAttribute("media"),
          sizes: dom.getAttribute("sizes"),
          srcset: dom.getAttribute("srcset"),
          type: dom.getAttribute("type"),
        }
      }}],
      toDOM(node) { let {media, sizes, srcset, type} = node.attrs; return ["source", {media, sizes, srcset, type}] },
    },
    image: {
      attrs: {
        src: {},
        title: {default: null},
        alt: {default: null},
        usemap: {default: null},
        sizes: {default: null},
        srcset: {default: null},
        id: {default: null},
      },
      parseDOM: [{tag: "img[src]", getAttrs(dom) {
        return {
          src: dom.getAttribute("src"),
          title: dom.getAttribute("title"),
          alt: dom.getAttribute("alt"),
          usemap: dom.getAttribute("usemap"),
          sizes: dom.getAttribute("sizes"),
          srcset: dom.getAttribute("srcset"),
          id: dom.getAttribute("id"),
        }
      }}],
      toDOM(node) { let {src, title, alt, usemap, sizes, srcset, id} = node.attrs; return ["img", {src, title, alt, usemap, sizes, srcset, id}] },
    },
    figcaption: {
      content: "inline*",
      group: "block",
      parseDOM: [{tag: "figcaption"}],
      toDOM() { {return ["figcaption", 0]} },
    },
    map: {
      attrs: {
        name: {},
        id: {default: null},
      },
      content: "area*",
      parseDOM: [{tag: "map[name]", getAttrs(dom) {
        return {
          name: dom.getAttribute("name"),
          id: dom.getAttribute("id"),
        }
      }}],
      toDOM(node) { let {name, id} = node.attrs; return ["map", {name, id}, 0] },
    },
    area: {
      attrs: {
        title: {default: null},
        alt: {default: null},
        id: {default: null},
        href: {},
        shape: {default: null},
        coords: {default: null},
      },
      parseDOM: [{tag: "area[href]", getAttrs(dom) {
        return {
          href: dom.getAttribute("href"),
          title: dom.getAttribute("title"),
          alt: dom.getAttribute("alt"),
          id: dom.getAttribute("id"),
          shape: dom.getAttribute("shape"),
          coords: dom.getAttribute("coords"),
        }
      }}],
      toDOM(node) { let {href, title, alt, id, shape, coords} = node.attrs; return ["area", {href, title, alt, id, shape, coords}] },
    },
    horizontal_rule: {
      group: "block",
      parseDOM: [{tag: "hr"}],
      toDOM() {return ["hr"]}
    },
    hard_break: {
      inline: true,
      group: "inline",
      selectable: false,
      parseDOM: [{tag: "br"}],
      toDOM() {return ["br"]}
    },
    bullet_list: {
      content: "list_item+",
      group: "block",
      parseDOM: [{tag: "ul"}],
      toDOM() { return ["ul", 0] },
    },
    list_item: {
      content: "inline*",
      defining: true,
      parseDOM: [{tag: "li"}],
      toDOM() { return ["li", 0] },
    },
  },
  marks: {
    rtlang: {
      attrs: {lang: {default: null}},
      inclusive: false,
      parseDOM: [{tag: "rt[lang]", getAttrs(dom) { return {lang: dom.lang} }}],
      toDOM(node) { let {lang} = node.attrs; return ["rt", {lang}, 0] },
    },
    rt: {
      inclusive: false,
      parseDOM: [{tag: "rt"}],
      toDOM() { return ["rt", 0] },
    },
    linkwithid: {
      attrs: {
        href: {default: null},
        title: {default: null},
        id: {}
      },
      inclusive: false,
      parseDOM: [{tag: "a[id]", getAttrs(dom) {
        return {id: dom.getAttribute("id"), href: dom.getAttribute("href"), title: dom.getAttribute("title")}
      }, priority: 60}],
      toDOM(node) { let {id, href, title} = node.attrs; return ["a", {id, href, title}, 0] }
    },
    link: {
      attrs: {
        href: {},
        title: {default: null}
      },
      inclusive: false,
      parseDOM: [{tag: "a[href]", getAttrs(dom) {
        return {href: dom.getAttribute("href"), title: dom.getAttribute("title")}
      }}],
      toDOM(node) { let {href, title} = node.attrs; return ["a", {href, title}, 0] }
    },
    strong: {
      parseDOM: [{tag: "strong"}],
      toDOM() { return ["strong", 0] },
    },
    sup: {
      parseDOM: [{tag: "sup"}],
      toDOM() { return ["sup", 0] },
    },
    spancolor: {
      attrs: {color: {default: {}}},
      parseDOM: [{tag: "span[style]", getAttrs(dom) {
        return {color: dom.style["color"] ? dom.style["color"] : "none"}
      }}],
      toDOM(node) { let {color} = node.attrs ;return ["span", {"style": "color:" + color}, 0] },
    },
  },
});

/**
 * Schema to extend rich text, including HTML ruby tag
 * @type {Schema} INCLUDING TABLES, COULOURED BLOCKQUOTES
 */
export const ExtendedThreerichTextSchema = new Schema({
  nodes: {
    doc: {
      content: "(article | aside | section | nav | hr)*"
    }, /* (block | table | figure)+ */
    section: {
      content: "(figure | article | aside | block)+",
      group: "block",
      parseDOM: [{tag: "section"}],
      toDOM() { return ["section", 0] },
    },
    nav: {
      content: "block+",
      parseDOM: [{tag: "nav"}],
      toDOM() { return ["nav", 0] },
    },
    article: {
      content: "(section | figure | header | footer | block)+",
      group: "block",
      parseDOM: [{tag: "article"}],
      toDOM() { return ["article", 0] },
    },
    header: {
      content: "(figure | block)+",
      parseDOM: [{tag: "header"}],
      toDOM() { return ["header", 0] },
    },
    footer: {
      content: "block+",
      parseDOM: [{tag: "footer"}],
      toDOM() { return ["footer", 0] },
    },
    aside: {
      content: "(section | article | block)+",
      parseDOM: [{tag: "aside"}],
      toDOM() { return ["aside", 0] },
    },
    table: {
      content: "table_head table_body",
      group: "table",
      tableRole: "table",
      isolating: true,
      parseDOM: [{tag: "table"}],
      toDOM() { return ["table", 0] }
    },
    table_head: {
      content: "table_row*",
      group: "table",
      isolating: true,
      parseDOM: [{tag: "thead"}],
      toDOM() { return ["thead", {style: "display:none"}, ["tr", 0]] }
    },
    table_body: {
      content: "table_row*",
      group: "table",
      isolating: true,
      parseDOM: [{tag: "tbody"}],
      toDOM() { return ["tbody", ["tr", 0]] }
    },
    table_row: {
      content: "(table_cell | table_header)*",
      group: "table",
      tableRole: "row",
      parseDOM: [{tag: "tr"}],
      toDOM() { return ["tr", 0] }
    },
    table_header: {
      content: "inline*",
      group: "table",
      isolating: true,
      tableRole: "header_cell",
      parseDOM: [{tag: "th"}],
      toDOM() { return ["th", 0] }
    },
    table_cell: {
      content: "inline*",
      group: "table",
      isolating: true,
      tableRole: "cell",
      parseDOM: [{tag: "td"}],
      toDOM() { return ["td", 0] }
    },
    figure: {
      content: "(picture figcaption? map?)",
      group: "figure",
      draggable: true,
      parseDOM: [{tag: "figure"}],
      toDOM() { {return ["figure", 0]} },
    },
    picture: {
      content: "(source* image*)",
      parseDOM: [{tag: "picture"}],
      toDOM() { {return ["picture", 0]} },
    },
    source: {
      attrs: {
        media: {default: null},
        sizes: {default: null},
        srcset: {default: null},
        type: {default: null},
      },
      parseDOM: [{tag: "picture source", getAttrs(dom) {
        return {
          media: dom.getAttribute("media"),
          sizes: dom.getAttribute("sizes"),
          srcset: dom.getAttribute("srcset"),
          type: dom.getAttribute("type"),
        }
      }}],
      toDOM(node) { let {media, sizes, srcset, type} = node.attrs; return ["source", {media, sizes, srcset, type}] },
    },
    image: {
      attrs: {
        width: {default: null},
        src: {default: null},
        title: {default: null},
        alt: {default: null},
        usemap: {default: null},
        sizes: {default: null},
        srcset: {default: null},
        id: {default: null},
      },
      parseDOM: [{tag: "img[src]", getAttrs(dom) {
        return {
          width: dom.getAttribute("class"),
          src: dom.getAttribute("src"),
          title: dom.getAttribute("title"),
          alt: dom.getAttribute("alt"),
          usemap: dom.getAttribute("usemap"),
          sizes: dom.getAttribute("sizes"),
          srcset: dom.getAttribute("srcset"),
          id: dom.getAttribute("id"),
        }
      }}],
      toDOM(node) { let {width, src, title, alt, usemap, sizes, srcset, id} = node.attrs; return ["img", {"class": width, src, title, alt, usemap, sizes, srcset, id}] },
    },
    figcaption: {
      content: "inline*",
      group: "figure",
      parseDOM: [{tag: "figcaption"}],
      toDOM() { {return ["figcaption", 0]} },
    },
    map: {
      attrs: {
        name: {},
        id: {default: null},
      },
      content: "area*",
      slectable: false,
      isolating: true,
      parseDOM: [{tag: "map[name]", getAttrs(dom) {
        return {
          name: dom.getAttribute("name"),
          id: dom.getAttribute("id"),
        }
      }}],
      toDOM(node) { let {name, id} = node.attrs; return ["map", {name, id}, 0] },
    },
    area: {
      attrs: {
        title: {default: null},
        alt: {default: null},
        id: {default: null},
        href: {},
        shape: {default: null},
        coords: {default: null},
      },
      slectable: false,
      isolating: true,
      parseDOM: [{tag: "area[href]", getAttrs(dom) {
        return {
          href: dom.getAttribute("href"),
          title: dom.getAttribute("title"),
          alt: dom.getAttribute("alt"),
          id: dom.getAttribute("id"),
          shape: dom.getAttribute("shape"),
          coords: dom.getAttribute("coords"),
        }
      }}],
      toDOM(node) { let {href, title, alt, id, shape, coords} = node.attrs; return ["area", {href, title, alt, id, shape, coords}] },
    },
    paragraph: {
      content: "inline*",
      group: "block",
      attrs: {color: {default: null}},
      parseDOM: [{tag: "p", getAttrs(dom) {
        return {color: dom.style["color"]} }},{tag: "dl dt"},{tag: "dd"}],
      toDOM(node) { let {color} = node.attrs ; return color == "" ? ["p", 0] : ["p", {"style": "color:" + color}, 0] },
    },
    blockquote: {
      content: "(block | table)+",
      group: "block",
      defining: true,
      attrs: { color: {default: null}},
      parseDOM: [{tag: "blockquote", getAttrs(dom) {return {color: dom.getAttribute("class")}} }],
      toDOM(node) { let {color} = node.attrs; return color == "" ? ["blockquote", 0] : ["blockquote", {"class": color}, 0] },
    },
    heading: {
      content: "inline*",
      group: "block",
      defining: true,
      attrs: {
        level: {default: 1},
        id: {default: null},
        color: {default: null}},
      parseDOM: [
        {tag: "h1", getAttrs(dom) { return {level: 1, id: dom.id, color: dom.getAttribute("class")} }},
        {tag: "h2", getAttrs(dom) { return {level: 2, id: dom.id, color: dom.getAttribute("class")} }},
        {tag: "h3", getAttrs(dom) { return {level: 3, id: dom.id, color: dom.getAttribute("class")} }},
        {tag: "h4", getAttrs(dom) { return {level: 4, id: dom.id, color: dom.getAttribute("class")} }},
        {tag: "h5", getAttrs(dom) { return {level: 5, id: dom.id, color: dom.getAttribute("class")} }},
        {tag: "h6", getAttrs(dom) { return {level: 6, id: dom.id, color: dom.getAttribute("class")} }}
      ],
      toDOM(node) { let {level, id, color} = node.attrs; return id == "" ? color == "" ? ["h" + level, 0] : ["h" + level, {"class": color}, 0] : color == "" ? ["h" + level, {id}, 0] : ["h" + level, {"class": color, id}, 0] }
    },
    ol: {
      content: "li+",
      group: "block",
      attrs: {start: {default: null}},
      parseDOM: [{tag: "ol", getAttrs(dom) { return {start: dom.start} }}],
      toDOM(node) { let {start} = node.attrs; return start == "" ?  ["ol", 0] : ["ol", {start}, 0] },
    },
    ul: {
      content: "li+",
      group: "block",
      parseDOM: [{tag: "ul"}],
      toDOM() { return["ul", 0] },
    },
    li: {
      content: "block*", /* has to be block - can be (block | inline also */
      attrs: {value: {default: null}, doc: {default: false}},
      parseDOM: [{tag: "ol.doc li", getAttrs(dom) { return {value: dom.value, doc: true} } }, {tag: "li", getAttrs(dom) { return {value: dom.value} } }],
      toDOM(node) { let {value, doc} = node.attrs ; return value === 0 && doc == true ? ["li", {"style": "list-style-type:none"}, 0] : doc == true ? ["li", {value}, 0] : ["li", 0] },
    },
    ruby: {
      content: "inline*",
      group: "inline",
      inline: true,
      attrs: {lang: {default: null}},
      parseDOM: [{tag: "ruby", getAttrs(dom) { return {lang: dom.lang} }}, {tag: "rp", ignore: true}],
      toDOM(node) { let {lang} = node.attrs; return lang == "" ? ["ruby", 0] : ["ruby", {lang}, 0] },
    },
    text: {
      inline: true,
      group: "inline"
    },
    audio: {
      content: "audiosource*",
      group: "inline",
      inline: true,
      draggable: true,
      attrs: {title: {default: null}, alt: {default: null}, controls: {default: null}},
      parseDOM: [{tag: "audio", getAttrs(dom) { return {title: dom.title, alt: dom.title, controls: dom.controls} }}],
      toDOM(node) { { let {title, alt, controls} = node.attrs; return ["audio", {title, alt, controls}, 0]} },
    },
    audiosource: {
      attrs: {
        src: {default: null},
        type: {default: null},
      },
      parseDOM: [{tag: "audio source", getAttrs(dom) {
        return {
          src: dom.getAttribute("src"),
          type: dom.getAttribute("type"),
        }
      }}],
      toDOM(node) { let {src, type} = node.attrs; return ["source", {src, type}] }
    },
    hr: {
      group: "block",
      parseDOM: [{tag: "hr"}],
      toDOM() {return ["hr"]}
    },
    br: {
      inline: true,
      group: "inline",
      selectable: false,
      parseDOM: [{tag: "br"}],
      toDOM() {return ["br"]}
    },
    wbr: {
      inline: true,
      group: "inline",
      selectable: false,
      parseDOM: [{tag: "wbr"}],
      toDOM() {return ["wbr"]}
    },
    pre: {
      content: "table*",
      group: "block",
      parseDOM: [{tag: "pre"}],
      toDOM() { return ["pre", 0] },
    },
    code: {
      content: "inline*",
      parseDOM: [{tag: "code"}],
      toDOM() { return ["code", 0] },
    },
  },
  marks: {
    rt: {
      attrs: {lang: {default: null}},
      inclusive: false,
      parseDOM: [{tag: "rt", getAttrs(dom) { return {lang: dom.lang} }}],
      toDOM(node) { let {lang} = node.attrs; return lang == "" ? ["rt", 0] : ["rt", {lang}, 0] },
    },
    /* rp: {
      inclusive: false,
      parseDOM: [{tag: "rp"}],
      toDOM() { return ["rp", 0] },
    }, */
    link: {
      attrs: {
        href: {},
        title: {default: null},
        id: {default: null}
      },
      inclusive: false,
      parseDOM: [{tag: "a[href]", getAttrs(dom) {
        return {href: dom.getAttribute("href"), title: dom.getAttribute("title"), id: dom.getAttribute("id")}
      }}],
      toDOM(node) { let {href, title, id} = node.attrs; return id == "" ? ["a", {href, title}, 0] : ["a", {href, title, id}, 0] }
    },
    strong: {
      parseDOM: [{tag: "strong"}, {tag: "b"}],
      toDOM() { return ["strong", 0] },
    },
    mark: {
      parseDOM: [{tag: "mark"}],
      toDOM() { return ["mark", 0] },
    },
    em: {
      parseDOM: [{tag: "em"}],
      toDOM() { return ["em", 0] },
    },
    sup: {
      parseDOM: [{tag: "sup"}],
      toDOM() { return ["sup", 0] },
    },
    cite: {
      parseDOM: [{tag: "cite"}],
      toDOM() { return ["cite", 0] },
    },
    q: {
      attrs: {color: {default: null}},
      parseDOM: [{tag: "q", getAttrs(dom) {
        return {color: dom.style["color"]} } }],
      toDOM(node) { let {color} = node.attrs ; return color == "" ? ["q", 0] : ["q", {"style": "color:" + color}, 0] },
    },
    span: {
      attrs: {color: {default: null}, title: {default: null}},
      parseDOM: [{tag: "span", getAttrs(dom) {
        return {color: dom.style["color"], title: dom.title}
      }}],
      toDOM(node) { let {color, title} = node.attrs ; return color == "" ? title == "" ? ["span", 0] : ["span", {"title": title}, 0] : title == "" ? ["span", {"style": "color:" + color}, 0] : ["span", {"style": "color:" + color,"title": title}, 0]  },
    },
    time: {
      attrs: {datetime: {default: null}},
      parseDOM: [{tag: "time", getAttrs(dom) { return {datetime: dom.getAttribute("datetime")}} }],
      toDOM(node) { let {datetime} = node.attrs ; return ["time", {datetime}, 0] },
    },
  },
});
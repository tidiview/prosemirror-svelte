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
 * @type {Schema} INCLUDING TABLES, COULOURED BLOCKQUOTES
 */
export const ExtendedThreerichTextSchema = new Schema({
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
    paragraph: {
      content: "inline*",
      group: "block",
      parseDOM: [{tag: "p"},{tag: "dl dt"},{tag: "dd"}],
      toDOM() { return ["p", 0] },
    },
    blockquote: {
      content: "block+",
      group: "block",
      defining: true,
      attrs: {
        color: {default: null}},
      parseDOM: [{tag: "blockquote"},{tag: "div.notices", getAttrs(dom) {return {color: dom.getAttribute("class").split(" ")[1]}} }],
      toDOM(node) { let {color} = node.attrs; return color == "" ? ["blockquote", 0] : ["blockquote", {"class": color}, 0] },
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
    ol: {
      content: "li+",
      group: "block",
      parseDOM: [{tag: "ol"}],
      toDOM() { return ["ol", 0] },
    },
    ul: {
      content: "li+",
      group: "block",
      parseDOM: [{tag: "ul"}],
      toDOM() { return ["ul", 0] },
    },
    li: {
      content: "(block | pre)* ",
      parseDOM: [{tag: "li"}],
      toDOM() { return ["li", 0] },
    },
    pre: {
      content: "table*",
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
    rtlang: {
      attrs: {lang: {default: null}},
      inclusive: false,
      parseDOM: [{tag: "rt[lang]", getAttrs(dom) { return {lang: dom.lang} }}],
      toDOM(node) { let {lang} = node.attrs; return ["rt", {lang}, 0] },
    },
    rp: {
      inclusive: false,
      parseDOM: [{tag: "rp"}],
      toDOM() { return ["rp", 0] },
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
      parseDOM: [{tag: "strong"}, {tag: "b"}],
      toDOM() { return ["strong", 0] },
    },
    sup: {
      parseDOM: [{tag: "sup"}],
      toDOM() { return ["sup", 0] },
    },
    spancolor: {
      attrs: {color: {default: null}},
      parseDOM: [{tag: "span[style]", getAttrs(dom) {
        return {color: dom.style["color"] ? dom.style["color"] : "none"}
      }}],
      toDOM(node) { let {color} = node.attrs ;return ["span", {"style": "color:" + color}, 0] },
    },
  },
});
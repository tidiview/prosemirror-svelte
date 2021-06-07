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
      content: "(figure? | map? | section? | table? | block)*"
    }, /* (figure | section | table | block)+ */

    article: {
      content: "(figure? | map? | section? | table? | block)*",
      group: "section",
      parseDOM: [{tag: "article"}],
      toDOM() { return ["article", 0] },
    },
    aside: {
      content: "(section? | block)*",
      group: "section",
      parseDOM: [{tag: "aside"}],
      toDOM() { return ["aside", 0] },
    },
    sectionid: {
      content: "(figure? | map? | section? | block)*",
      group: "section",
      attrs: {id: {default:null}},
      parseDOM: [{tag: "section[id]", getAttrs(dom) { return { id: dom.getAttribute("id") } } }],
      toDOM(node) { let {id} = node.attrs; return ["section", {id}, 0] },
    },
    section: {
      content: "(figure? | map? | section? | block)*",
      group: "section",
      parseDOM: [{tag: "section"}],
      toDOM() { return ["section", 0] },
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
      toDOM() {return ["th", 0] }
    },
    table_cell: {
      content: "inline*",
      group: "table",
      isolating: true,
      tableRole: "cell",
      attrs: {
        styles: {default: null}
      },
      parseDOM: [{tag: "td", getAttrs(dom) { return { styles: dom.getAttribute("style")} }}],
      toDOM(node) { let {styles} = node.attrs; return styles == "" ? ["td", 0] : ["td", {"style": styles}, 0] }
    },

    figure: {
      content: "(picture figcaption?)",
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
        height: {default: null},
        width: {default: null},
        loading: {default: "eager"},
        decoding: {default: "auto"},
      },
      parseDOM: [{tag: "img[src]", getAttrs(dom) {
        return {
          classes: dom.getAttribute("class"),
          src: dom.getAttribute("src"),
          title: dom.getAttribute("title"),
          alt: dom.getAttribute("alt"),
          usemap: dom.getAttribute("usemap"),
          sizes: dom.getAttribute("sizes"),
          srcset: dom.getAttribute("srcset"),
          id: dom.getAttribute("id"),
          height: dom.getAttribute("height"),
          width: dom.getAttribute("width"),
          loading: dom.getAttribute("loading"),
          decoding: dom.getAttribute("decoding"),
        }
      }}],
      toDOM(node) { let {classes, src, title, alt, usemap, sizes, srcset, id, height, width, loading, decoding} = node.attrs; return ["img", {"class": classes, src, title, alt, usemap, sizes, srcset, id, height, width, loading, decoding, "style": "background-size: cover;background: url('data:image/svg+xml;utf8,<svg xmlns=\"https://www.w3.org/2000/svg\" width=\"" + width +"\" height=\"" + height +"\" viewBox=\"0 0 " + width + "\ " + height + "\"><rect fill=\"#ddd\" width=\"" + width + "\" height=\"" + height + "\"/><text fill=\"rgba(0,0,0,0.5)\" font-family=\"sans-serif\" font-size=\"30\" dy=\"10.5\" font-weight=\"bold\" x=\"50%\" y=\"50%\" text-anchor=\"middle\">" + width +"×" + height + "</text></svg>') center center no-repeat;"}] },
    },
    figcaption: {
      content: "inline*",
      group: "figure",
      parseDOM: [{tag: "figcaption"}],
      toDOM() { {return ["figcaption", 0]} },
    },
    map: {
      content: "area*",
      group: "map",
      selectable: false,
      isolating: true,
      attrs: {
        name: {},
        id: {default: null},
      },
      parseDOM: [{tag: "map[name]", getAttrs(dom) {
        return {
          name: dom.getAttribute("name"),
          id: dom.getAttribute("id"),
        }
      }}],
      toDOM(node) { let {name, id} = node.attrs; return ["map", {name, id}, 0] },
    },
    area: {
      content: "inline*",
      group: "map",
      selectable: false,
      isolating: true,
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

    header: {
      content: "(figure? | map? | block)*",
      group: "block",
      parseDOM: [{tag: "header"}],
      toDOM() { return ["header", 0] },
    },
    nav: {
      content: "block*",
      group: "block",
      parseDOM: [{tag: "nav"}],
      toDOM() { return ["nav", 0] },
    },
    footer: {
      content: "block*",
      group: "block",
      parseDOM: [{tag: "footer"}],
      toDOM() { return ["footer", 0] },
    },
    paragraphstyled: {
      content: "inline*",
      group: "block",
      attrs: {classes: {default: null}, styles: {default: null}, flag: {default: null}, dataid: {default: null}},
      parseDOM: [
        {tag: "p.single-li", getAttrs(dom) { return {classes: dom.getAttribute("class"), styles: dom.getAttribute("style"), flag: true, dataid: dom.getAttribute("data-id")} }},
        {tag: "p.conversation", getAttrs(dom) { return {classes: dom.getAttribute("class"), styles: dom.getAttribute("style"), flag: true, dataid: dom.getAttribute("data-id")} }},
        {tag: "p.puce", getAttrs(dom) { return {classes: dom.getAttribute("class"), styles: dom.getAttribute("style"), flag: true} }},
        {tag: "p.no-puce", getAttrs(dom) { return {classes: dom.getAttribute("class"), styles: dom.getAttribute("style"), dataid: dom.getAttribute("data-id"), flag: true} }}],
      toDOM(node) { let {classes, styles, flag, dataid} = node.attrs ; return flag == true ? styles == "" ? dataid == "" ? ["p", {"class": classes}, 0] : ["p", {"data-id": dataid, "class": classes}, 0] : dataid == "" ? ["p", {"class": classes, "style": styles}, 0] : ["p", {"data-id": dataid, "class": classes, "style": styles}, 0] : styles == "" ? ["p", 0] : ["p",{"style": styles} , 0] },
    },
    paragraph: {
      content: "inline*",
      group: "block",
      parseDOM: [{tag: "p"},{tag: "dl dt"},{tag: "dd"}],
      toDOM() { return ["p", 0] },
    },
    hgroup: {
      content: "heading+",
      group: "block",
      parseDOM: [{tag: "hgroup"}],
      toDOM() { return ["hgroup", 0] },
    },
    heading: {
      content: "inline*",
      group: "block",
      defining: true,
      attrs: {
        level: {default: 1},
        id: {default: null},
        classes: {default: null}},
      parseDOM: [
        {tag: "h1", getAttrs(dom) { return {level: 1, id: dom.id, classes: dom.getAttribute("class")} }},
        {tag: "h2", getAttrs(dom) { return {level: 2, id: dom.id, classes: dom.getAttribute("class")} }},
        {tag: "h3", getAttrs(dom) { return {level: 3, id: dom.id, classes: dom.getAttribute("class")} }},
        {tag: "h4", getAttrs(dom) { return {level: 4, id: dom.id, classes: dom.getAttribute("class")} }},
        {tag: "h5", getAttrs(dom) { return {level: 5, id: dom.id, classes: dom.getAttribute("class")} }},
        {tag: "h6", getAttrs(dom) { return {level: 6, id: dom.id, classes: dom.getAttribute("class")} }}
      ],
      toDOM(node) { let {level, id, classes} = node.attrs; return id == "" ? classes == "" ? ["h" + level, 0] : ["h" + level, {"class": classes}, 0] : classes == "" ? ["h" + level, {id}, 0] : ["h" + level, {"class": classes, id}, 0] }
    },
   blockquote: {
      content: "block*",
      group: "block",
      attrs: { classes: {default: null}, cite: {default: null}, id: {default: null}},
      parseDOM: [{tag: "blockquote", getAttrs(dom) {return {classes: dom.getAttribute("class"), cite: dom.getAttribute("cite"), id: dom.id}} }],
      toDOM(node) { let {classes, cite, id} = node.attrs; return classes == "" ? cite == "" ? ["blockquote", 0] : ["blockquote", {cite, id}, 0] : cite == "" ? ["blockquote", {"class": classes}, 0] : ["blockquote", {id, cite, "class": classes}, 0] },
    }, /* attibutes cite and id are linked: if there is cite, there is id */
    olstart: {
      content: "li+",
      group: "block",
      attrs: {start: {default: null}, classes: {default: null}},
      parseDOM: [{tag: "ol[start]", getAttrs(dom) { return {start: dom.start, classes: dom.getAttribute("class")} }}],
      toDOM(node) { let {start, classes} = node.attrs; return start == "" ? classes == "" ? ["ol", 0] : ["ol", {"class": classes}, 0] : start == "" ? ["ol", {start}, 0] : ["ol", {"class": classes, start}, 0] },
    },
    ol: {
      content: "li+",
      group: "block",
      attrs: {classes: {default: null}},
      parseDOM: [{tag: "ol", getAttrs(dom) { return {classes: dom.getAttribute("class")} }}],
      toDOM(node) { let {classes} = node.attrs; return classes == "" ? ["ol", 0] : ["ol", {"class": classes}, 0] },
    },
    ul: {
      content: "li+",
      group: "block",
      parseDOM: [{tag: "ul"}],
      toDOM() { return["ul", 0] },
    },
    li: {
      content: "(table | block)*", /* has to be block - can be (block | inline also */
      group: "block",
      attrs: {value: {default: null}, dataid: {default: null}, dataname: {default: null}, classes: {default: null}, doc: {default: false}},
      defining: true,
      parseDOM: [
        {tag: "ol.year li", getAttrs(dom) { return {value: dom.value} } },
        {tag: "ol.doc-three-rows li", getAttrs(dom) { return {value: dom.value, dataid: dom.getAttribute("data-id"), dataname: dom.getAttribute("data-name"), doc: true} } },
        {tag: "ol.doc-special li", getAttrs(dom) { return {value: dom.value, dataid: dom.getAttribute("data-id"), doc: true} } },
        {tag: "ol.doc li", getAttrs(dom) { return {value: dom.value, dataid: dom.getAttribute("data-id"), classes: dom.getAttribute("class"), doc: true} } },
        {tag: "li", getAttrs(dom) { return {value: dom.value} } }],
      toDOM(node) { let {value, dataid, dataname, classes, doc} = node.attrs ; return value === 0 && doc == true ? dataid == "" ? dataname == "" ? 
      ["li", {"style": "list-style-type:none"}, 0] : ["li", {"data-name": dataname, "style": "list-style-type:none", "class": classes}, 0] : 
      dataname == "" ? 
      ["li", {"data-id": dataid}, 0] : ["li", {"data-id": dataid, "data-name": dataname}, 0] : 
      doc == true ? dataid == "" ? classes == "" ? ["li", {value}, 0] : ["li", {value, "class": classes}, 0] : 
      classes == "" ? ["li", {value, "data-id": dataid}, 0] : ["li", {value, "id": dataid, "class": classes}, 0] : ["li", 0] },
    },
    hr: {
      group: "block",
      parseDOM: [{tag: "hr"}],
      toDOM() {return ["hr"]}
    },

    rubylang: {
      content: "inline*",
      group: "inline",
      inline: true,
      attrs: {
        lang: {default: null}, 
        color: {default: null}},
      parseDOM: [{tag: "ruby[lang]", getAttrs(dom) { return {lang: dom.lang, color: dom.style["color"]} }}, {tag: "rp", ignore: true}],
      toDOM(node) { let {lang, color} = node.attrs; return lang == "" ? color == "" ? ["ruby", 0] : ["ruby", {"style": "color:" + color}, 0] : color == "" ? ["ruby", {lang}, 0] : ["ruby", {lang, "style": "color:" + color}, 0] },
    },
    ruby: {
      content: "inline*",
      group: "inline",
      inline: true,
      parseDOM: [{tag: "ruby"}, {tag: "rp", ignore: true}],
      toDOM() { return ["ruby", 0] },
    },
    code: {
      content: "inline*",
      group: "inline",
      inline: true,
      parseDOM: [{tag: "code"}],
      toDOM() { return ["code", 0] },
    },
    dfn: {
      content: "inline*",
      group: "inline",
      inline: true,
      parseDOM: [{tag: "dfn"}],
      toDOM() { return ["dfn", 0] },
    },
    address: {
      content: "inline*",
      group: "inline",
      inline: true,
      parseDOM: [{tag: "address"}],
      toDOM() { return ["address", 0] },
    },
    time: {
      content: "inline*",
      group: "inline",
      inline: true,
      attrs: {datetime: {default: null}},
      parseDOM: [{tag: "time", getAttrs(dom) { return {datetime: dom.getAttribute("datetime")}} }],
      toDOM(node) { let {datetime} = node.attrs ; return ["time", {datetime}, 0] },
    },
    text: {
      content: "inline*",
      group: "inline",
      inline: true,
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
      content: "inline*",
      group: "inline",
      inline: true,
      selectable: false,
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

    wbr: {
      inline: true,
      group: "inline",
      selectable: false,
      parseDOM: [{tag: "wbr"}],
      toDOM() {return ["wbr"]}
    },
    br: {
      inline: true,
      group: "inline",
      selectable: false,
      parseDOM: [{tag: "br"}],
      toDOM() {return ["br"]}
    },
  },

  marks: {
    rtlang: {
      attrs: {
        lang: {default: null}, 
        color: {default: null}},
      inclusive: false,
      parseDOM: [{tag: "rt[lang]", getAttrs(dom) { return {lang: dom.lang, color: dom.style["color"]} }}],
      toDOM(node) { let {lang, color} = node.attrs; return lang == "" ? color == "" ? ["rt", 0] : ["rt", {"style": "color:" + color}, 0] : color == "" ? ["rt", {lang}, 0] : ["rt", {lang, "style": "color:" + color}, 0] },
    },
    rt: {
      inclusive: false,
      parseDOM: [{tag: "rt"}],
      toDOM() { return ["rt", 0] },
    },
    /* rp: {
      inclusive: false,
      parseDOM: [{tag: "rp"}],
      toDOM() { return ["rp", 0] },
    }, */
    linkid: {
      attrs: {
        href: {},
        title: {default: null},
        id: {default: null}
      },
      inclusive: false,
      parseDOM: [{tag: "a[id]", getAttrs(dom) {
        return {href: dom.getAttribute("href"), title: dom.getAttribute("title") == null ? dom.getAttribute("href") : dom.getAttribute("title"), id: dom.getAttribute("id")}
      }}],
      toDOM(node) { let {href, title, id} = node.attrs; return id == "" ? ["a", {href, title}, 0] : ["a", {href, title, id}, 0] }
    },
    link: {
      attrs: {
        href: {},
        title: {default: null},
      },
      inclusive: false,
      parseDOM: [{tag: "a[href]", getAttrs(dom) {
        return {href: dom.getAttribute("href"), title: dom.getAttribute("title") == null ? dom.getAttribute("href") : dom.getAttribute("title"), id: dom.getAttribute("id")}
      }}],
      toDOM(node) { let {href, title} = node.attrs; return ["a", {href, title}, 0] }
    },
    abbr: {
      attrs: { title: {default: null} },
      parseDOM: [{tag: "abbr", getAttrs(dom) { return {title: dom.getAttribute("title")} }}],
      toDOM(node) {  let {title} = node.attrs; return ["abbr", {title}, 0]},
    },
    strong: {
      parseDOM: [{tag: "strong"}],
      toDOM() { return ["strong", 0] },
    },
    b: {
      parseDOM: [{tag: "b"}],
      toDOM() { return ["b", 0] },
    },
    markhtml: {
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
      toDOM() { return ["cite", 0]},
    },
    em: {
      parseDOM: [{tag: "em"}],
      toDOM() { return ["em", 0] },
    },
    i: {
      parseDOM: [{tag: "i"}],
      toDOM() { return ["i", 0]},
    },
    q: {
      attrs: {styles: {default: null}, cite: {default: null}},
      parseDOM: [{tag: "q", getAttrs(dom) {
        return {styles: dom.getAttribute("style"), cite: dom.getAttribute("cite")} } }],
      toDOM(node) { let {styles, cite} = node.attrs ; return styles == "" ? cite == "" ? ["q", 0] : ["q", {"cite": cite}, 0] : cite == "" ? ["q", {"style": styles}, 0] : ["q", {"style": styles, "cite": cite}, 0] },
    },
    span: {
      attrs: {classes: {default: null}, styles: {default: null}, title: {default: null}},
      parseDOM: [{tag: "span", getAttrs(dom) {
        return {classes: dom.getAttribute("class") , styles: dom.getAttribute("style"), title: dom.title}
      }}],
      toDOM(node) { let {classes, styles, title} = node.attrs ; return styles == "" ? title == "" ? classes == "" ? 
      ["span", 0] : ["span", {"class": classes}, 0] : 
      classes == "" ? 
      ["span", {"title": title}, 0] : ["span", {"title": title, "class": classes}, 0] : 
      title == "" ? classes == "" ?
      ["span", {"style": styles}, 0] : ["span", {"style": styles, "class": classes}, 0] : 
      classes == "" ? 
      ["span", {"style": styles,"title": title}, 0] : ["span", {"style": styles,"title": title, "class": classes}, 0]  },
    },
    pre: {
      content: "inline*",
      parseDOM: [{tag: "pre"}],
      toDOM() { return ["pre", 0] },
    },
    samp: {
      content: "inline*",
      parseDOM: [{tag: "samp"}],
      toDOM() { return ["samp", 0] },
    },
  },
});
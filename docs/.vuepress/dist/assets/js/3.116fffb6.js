(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{312:function(t,e,a){},319:function(t,e,a){},320:function(t,e,a){},332:function(t,e,a){"use strict";a(178),a(65),a(167),a(93),a(43),a(66);var i=a(40),n=a(365);function s(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}var l={name:"NavLinks",components:{NavLink:a(309).a,DropdownLink:n.a},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var a=this.$page.path,n=this.$router.options.routes,s=this.$site.themeConfig.locales||{},l={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(i){var l,o=e[i],r=s[i]&&s[i].label||o.lang;return o.lang===t.$lang?l=a:(l=a.replace(t.$localeConfig.path,i),n.some((function(t){return t.path===l}))||(l=i)),{text:r,link:l}}))};return[].concat(Object(i.a)(this.userNav),[l])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(s(t),{items:(t.items||[]).map(s)})}))}}},o=(a(349),a(42)),r=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return this.userLinks.length||this.repoLink?e("nav",{staticClass:"nav-links"},this._l(this.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),0):this._e()}),[],!1,null,null,null);e.a=r.exports},337:function(t,e,a){"use strict";a(312)},349:function(t,e,a){"use strict";a(319)},350:function(t,e,a){"use strict";a(320)},363:function(t,e,a){"use strict";var i={name:"Home",components:{NavLink:a(309).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},n=(a(337),a(42)),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return a("div",{key:i,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),a("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?a("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},364:function(t,e,a){"use strict";a(338);var i=a(340),n=a(362),s=a(366),l=a(332);function o(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var r={name:"Navbar",components:{SidebarButton:s.a,NavLinks:l.a,SearchBox:n.a,AlgoliaSearchBox:i.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(o(this.$el,"paddingLeft"))+parseInt(o(this.$el,"paddingRight")),a=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};a(),window.addEventListener("resize",a,!1)}},c=(a(350),a(42)),u=Object(c.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar"},[a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),a("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?a("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),a("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?a("SearchBox"):t._e(),t._v(" "),a("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=u.exports}}]);
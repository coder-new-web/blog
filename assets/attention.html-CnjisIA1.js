import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as o,e as i}from"./app-Ds4AiUcn.js";const n={},a=i('<ol><li>uniapp中没有File文件对象，html5plus中的文件数据对象并不是前端中的File文件对象，需要注意区分。</li><li>uniapp中没有<code>URL.createObjectURL</code>方法。</li><li>uniapp中的<code>display:grid</code>是不起作用的，若想配置高度动画变换，需要设置定高、<code>overflow:hidden</code>，同时计算隐藏那部分的高度，当显示的时候就是设置的高度 + 计算隐藏的高度 就等于整个容器的高度，但该方法不适合用于内部高度变化比较多的地方。</li></ol><h3 id="组件实例" tabindex="-1"><a class="header-anchor" href="#组件实例"><span>组件实例</span></a></h3><p>在一些如果想通过组件实例获取webview组件的时候，同样，也不能嵌套太深，可以在跟组件实例化：<code>getCurrentInstance()</code>，然后通过<code>inject</code>、<code>provide</code></p><h3 id="弹框" tabindex="-1"><a class="header-anchor" href="#弹框"><span>弹框</span></a></h3><ol><li>弹框弹出的时候，滚动穿透问题。具体表现为：当在弹出的弹框在滑动时，页面也会随着滚动，但设置<code>@touchmove.stop.prevent=&quot;()=&gt;{}&quot;</code>后，此时滑动页面不会随着滑动了，但是如果弹框内的内容想滚动时，就会滚动不了。</li><li>一些弹框组件使用的位置组件嵌套不能太深，太深遮罩层无法覆盖整个页面。此时可以建议用<code>inject</code>和<code>provide</code>，将组件实例注入到子组件中，子组件想使用弹框可以用<code>inject</code>进行接收。</li></ol>',5),l=[a];function c(p,r){return t(),o("div",null,l)}const h=e(n,[["render",c],["__file","attention.html.vue"]]),m=JSON.parse(`{"path":"/web/mobile-dev/uni-app/attention.html","title":"开发APP注意事项","lang":"zh-CN","frontmatter":{"title":"开发APP注意事项","date":"2024-01-21T00:00:00.000Z","category":["移动开发"],"description":" uniapp中没有File文件对象，html5plus中的文件数据对象并不是前端中的File文件对象，需要注意区分。 uniapp中没有URL.createObjectURL方法。 uniapp中的display:grid是不起作用的，若想配置高度动画变换，需要设置定高、overflow:hidden，同时计算隐藏那部分的高度，当显示的时候就是设置的...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/mobile-dev/uni-app/attention.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"开发APP注意事项"}],["meta",{"property":"og:description","content":" uniapp中没有File文件对象，html5plus中的文件数据对象并不是前端中的File文件对象，需要注意区分。 uniapp中没有URL.createObjectURL方法。 uniapp中的display:grid是不起作用的，若想配置高度动画变换，需要设置定高、overflow:hidden，同时计算隐藏那部分的高度，当显示的时候就是设置的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2024-01-21T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"开发APP注意事项\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-21T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":3,"title":"组件实例","slug":"组件实例","link":"#组件实例","children":[]},{"level":3,"title":"弹框","slug":"弹框","link":"#弹框","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":1.18,"words":353},"filePathRelative":"web/mobile-dev/uni-app/attention.md","localizedDate":"2024年1月21日","autoDesc":true}`);export{h as comp,m as data};
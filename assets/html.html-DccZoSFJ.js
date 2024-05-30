import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as t,e as l}from"./app-Ds4AiUcn.js";const i={},a=l('<h2 id="无样式内容闪烁-fouc-flash-of-unstyle-content" tabindex="-1"><a class="header-anchor" href="#无样式内容闪烁-fouc-flash-of-unstyle-content"><span>无样式内容闪烁（FOUC）Flash of Unstyle Content</span></a></h2><p>  出现FOUC的原因是CSS文件中使用了<code>@import</code>关键字，在CSS文件中使用<code>@import</code>关键字会等到文档加载后再加载CSS样式表。因此，在页面DOM加载完成到CSS导入完成之间会有一段时间页面上内容是没有样式的。</p><p>  解决办法：使用link标签加载CSS样式文件，因为link是顺序加载的，这样页面会等到CSS下载完后再下载HTML文件，这样先布局好，就不会出现FOUC问题。</p><h2 id="title-和-h1-的区别" tabindex="-1"><a class="header-anchor" href="#title-和-h1-的区别"><span>title 和 h1 的区别</span></a></h2><p>  title 属性没有明确意义只表示是个标题，h1 则表示层次明确的标题，对页面信息的抓取也有很大的影响。</p><h2 id="cookies-sessionstorage-localstorage-的区别" tabindex="-1"><a class="header-anchor" href="#cookies-sessionstorage-localstorage-的区别"><span>cookies sessionStorage localStorage 的区别</span></a></h2><p>  SessionStorage， LocalStorage， Cookie 这三者都可以被用来在浏览器端存储数据，而且都是字符串类型的键值对。区别在于前两者属于 HTML5 WebStorage，创建它们的目的便于客户端存储数据。而 cookie 是网站为了标示用户身份而储存在用户本地终端上的数据（通常经过加密）。cookie 数据始终在同源（协议、主机、端口相同）的 http 请求中携带（即使不需要），会在浏览器和服务器间来回传递。</p><p><strong>存储大小：</strong>\\</p><ol><li>cookie 数据大小不超过 4k。</li><li>sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大。</li></ol><p><strong>有效时间：</strong>\\</p><ol><li>localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据。</li><li>sessionStorage 数据再页面会话结束时会被请求。页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。在新标签或窗口打开一个页面时会在顶级浏览上下文中初始化一个新的会话。</li><li>cookie 设置的 cookie 过期时间之前一直有效，即时浏览器关闭</li></ol><p><strong>作用域：</strong>\\</p><ol><li>sessionStorage 只在同源的同窗口（或标签页）中共享数据，也就是只在当前会话中共享。</li><li>localStorage 在所有同源窗口中都是共享的。</li><li>cookie 在所有同源窗口中都是共享的。</li></ol><h2 id="选择器的优先级" tabindex="-1"><a class="header-anchor" href="#选择器的优先级"><span>选择器的优先级</span></a></h2><p>!important &gt; 行内样式 &gt; id选择器 &gt; class选择器 &gt; 标签选择器 &gt; 通配符 &gt; 继承</p><p>在选择器相同的情况下，如同为id选择器，越靠下写的样式越比靠上写的样式权重大。</p><h2 id="如何进行网站优化" tabindex="-1"><a class="header-anchor" href="#如何进行网站优化"><span>如何进行网站优化</span></a></h2><p><code>content</code> 方面：</p><ol><li>减少http请求：合并文件、css精灵、inline Image</li><li>减少DNS查询：DNS缓存、将资源分布到恰当数量的主机名</li><li>减少DOM元素数量</li></ol><p><code>Server</code>方面：</p><ol><li>使用CDN加速</li><li>配置ETag</li><li>对组件使用Gzip压缩</li></ol><p><code>Cookie</code>方面：</p><ol><li>减少cookie大小</li></ol><p><code>css</code>方面</p><p>1、 将样式表放到页面顶部</p><p>2、 不使用CSS表达式</p><p>3、 使用<link>不使用@import</p><p><code>Javascript</code>方面</p><p>1、 将脚本放到页面底部</p><p>2、 将<code>javascript</code>和<code>css</code>从外部引入</p><p>3、 压缩<code>javascript</code>和<code>css</code></p><p>4、 删除不需要的脚本</p><p>5、 减少<code>DOM</code>访问</p><p>图片方面</p><p>1、 优化图片：根据实际颜色需要选择色深、压缩</p><p>2、 优化<code>css</code>精灵</p><p>3、 不要在<code>HTML</code>中拉伸图片</p>',37),n=[a];function s(c,r){return o(),t("div",null,n)}const h=e(i,[["render",s],["__file","html.html.vue"]]),g=JSON.parse(`{"path":"/interview/html.html","title":"HTML","lang":"zh-CN","frontmatter":{"title":"HTML","date":"2023-06-28T00:00:00.000Z","description":"无样式内容闪烁（FOUC）Flash of Unstyle Content 出现FOUC的原因是CSS文件中使用了@import关键字，在CSS文件中使用@import关键字会等到文档加载后再加载CSS样式表。因此，在页面DOM加载完成到CSS导入完成之间会有一段时间页面上内容是没有样式的。 解决办法：使用link标签加载CSS样式文件，因为link是...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/interview/html.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"HTML"}],["meta",{"property":"og:description","content":"无样式内容闪烁（FOUC）Flash of Unstyle Content 出现FOUC的原因是CSS文件中使用了@import关键字，在CSS文件中使用@import关键字会等到文档加载后再加载CSS样式表。因此，在页面DOM加载完成到CSS导入完成之间会有一段时间页面上内容是没有样式的。 解决办法：使用link标签加载CSS样式文件，因为link是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2023-06-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTML\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"无样式内容闪烁（FOUC）Flash of Unstyle Content","slug":"无样式内容闪烁-fouc-flash-of-unstyle-content","link":"#无样式内容闪烁-fouc-flash-of-unstyle-content","children":[]},{"level":2,"title":"title 和 h1 的区别","slug":"title-和-h1-的区别","link":"#title-和-h1-的区别","children":[]},{"level":2,"title":"cookies sessionStorage localStorage 的区别","slug":"cookies-sessionstorage-localstorage-的区别","link":"#cookies-sessionstorage-localstorage-的区别","children":[]},{"level":2,"title":"选择器的优先级","slug":"选择器的优先级","link":"#选择器的优先级","children":[]},{"level":2,"title":"如何进行网站优化","slug":"如何进行网站优化","link":"#如何进行网站优化","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":2.89,"words":866},"filePathRelative":"interview/html.md","localizedDate":"2023年6月28日","autoDesc":true}`);export{h as comp,g as data};
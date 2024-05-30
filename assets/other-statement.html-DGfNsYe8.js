import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,e as a}from"./app-Ds4AiUcn.js";const s={},i=a(`<h2 id="with" tabindex="-1"><a class="header-anchor" href="#with"><span>with</span></a></h2><p><code>with</code>混淆指定代码块的作用域指向。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">with</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//使用 user 混淆作用域，这里的 name 会被理解为 user.name</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="debugger" tabindex="-1"><a class="header-anchor" href="#debugger"><span>debugger</span></a></h2><h2 id="use-strict" tabindex="-1"><a class="header-anchor" href="#use-strict"><span>use strict</span></a></h2>`,5),o=[i];function r(c,p){return t(),n("div",null,o)}const d=e(s,[["render",r],["__file","other-statement.html.vue"]]),h=JSON.parse(`{"path":"/web/javascript/other-statement.html","title":"其它语句","lang":"zh-CN","frontmatter":{"title":"其它语句","date":"2022-02-15T00:00:00.000Z","category":["javascript"],"description":" with with混淆指定代码块的作用域指向。 debugger use strict ","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/javascript/other-statement.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"其它语句"}],["meta",{"property":"og:description","content":" with with混淆指定代码块的作用域指向。 debugger use strict "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2022-02-15T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"其它语句\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-15T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"with","slug":"with","link":"#with","children":[]},{"level":2,"title":"debugger","slug":"debugger","link":"#debugger","children":[]},{"level":2,"title":"use strict","slug":"use-strict","link":"#use-strict","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":0.2,"words":59},"filePathRelative":"web/javascript/other-statement.md","localizedDate":"2022年2月15日","autoDesc":true}`);export{d as comp,h as data};
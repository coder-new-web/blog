import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as e,c as o,a as n,d as p,b as c,e as r}from"./app-Ds4AiUcn.js";const i={},l=r(`<p>StrictMode是一个用来突出显示应用程序中潜在问题的工具。与Fragment一样，StrictMode也不会渲染任何可见的UI。它的作用是可以为后代元素触发额外的检查和警告。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>严格模式检查仅在开发模式下运行，它们并不会影响生产构建。</p></div><p>通常直接在根组件下启用严格模式：</p><details class="hint-container details"><summary>查看示例代码</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&quot;react-dom/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.jsx&quot;</span><span class="token punctuation">;</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>当然，你也可以在应用程序的任何部分启用严格模式：</p><details class="hint-container details"><summary>查看示例代码</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ExampleApplication</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>ComponentOne <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>ComponentTwo <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Footer <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>在上述示例中，不会对<code>Header</code>和<code>Footer</code>组件运行严格模式检查。但是<code>ComponentOne</code>和<code>ComponentTwo</code>以及它们所有的后代元素都将进行检查。</p><p>StrictMode具体的作用有：</p><ul><li>识别不安全的生命周期</li><li>关于使用过时字符串ref API的警告</li><li>关于使用废弃的 findDOMNode 方法的警告</li><li>检测意外的副作用</li><li>检测过时的 context API</li><li>确保可复用的 state</li></ul>`,9),d={href:"https://zh-hans.legacy.reactjs.org/docs/strict-mode.html",target:"_blank",rel:"noopener noreferrer"};function u(m,k){const a=t("ExternalLinkIcon");return e(),o("div",null,[l,n("p",null,[n("a",d,[p("关于作用的示例可点此查看"),c(a)])])])}const b=s(i,[["render",u],["__file","strictMode.html.vue"]]),h=JSON.parse(`{"path":"/web/react/strictMode.html","title":"严格模式","lang":"zh-CN","frontmatter":{"title":"严格模式","date":"2022-07-05T00:00:00.000Z","category":["React"],"description":"StrictMode是一个用来突出显示应用程序中潜在问题的工具。与Fragment一样，StrictMode也不会渲染任何可见的UI。它的作用是可以为后代元素触发额外的检查和警告。 注意 严格模式检查仅在开发模式下运行，它们并不会影响生产构建。 通常直接在根组件下启用严格模式： 查看示例代码 当然，你也可以在应用程序的任何部分启用严格模式： 查看示例代...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/react/strictMode.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"严格模式"}],["meta",{"property":"og:description","content":"StrictMode是一个用来突出显示应用程序中潜在问题的工具。与Fragment一样，StrictMode也不会渲染任何可见的UI。它的作用是可以为后代元素触发额外的检查和警告。 注意 严格模式检查仅在开发模式下运行，它们并不会影响生产构建。 通常直接在根组件下启用严格模式： 查看示例代码 当然，你也可以在应用程序的任何部分启用严格模式： 查看示例代..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2022-07-05T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"严格模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-05T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":1.07,"words":321},"filePathRelative":"web/react/strictMode.md","localizedDate":"2022年7月5日","autoDesc":true}`);export{b as comp,h as data};
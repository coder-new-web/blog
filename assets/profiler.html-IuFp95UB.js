import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-Ds4AiUcn.js";const t={},o=e(`<p>Profiler 能添加在 React 树中的任何地方来测量树中这部分渲染所带来的开销。</p><p>Profiler 需要两个 prop：第一个是 id，另一个是当组件树中的组件“提交”更新的时候被 React 调用的回调函数<code>onRender</code>。</p><p>可以用于分析单个组件、同时分析多个组件、甚至嵌套检测：</p><details class="hint-container details"><summary>查看单个组件检测示例代码</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>App<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Profiler id<span class="token operator">=</span><span class="token string">&quot;Navigation&quot;</span> onRender<span class="token operator">=</span><span class="token punctuation">{</span>callback<span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Navigation <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Profiler<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Main <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>App<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>查看多个组件检测示例代码</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>App<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Profiler id<span class="token operator">=</span><span class="token string">&quot;Navigation&quot;</span> onRender<span class="token operator">=</span><span class="token punctuation">{</span>callback<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Navigation <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Profiler<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Profiler id<span class="token operator">=</span><span class="token string">&quot;Main&quot;</span> onRender<span class="token operator">=</span><span class="token punctuation">{</span>callback<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Main <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Profiler<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>App<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>查看嵌套检测检测示例代码</summary><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>App<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Profiler id<span class="token operator">=</span><span class="token string">&quot;Panel&quot;</span> onRender<span class="token operator">=</span><span class="token punctuation">{</span>callback<span class="token punctuation">}</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Panel <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>Profiler id<span class="token operator">=</span><span class="token string">&quot;Content&quot;</span> onRender<span class="token operator">=</span><span class="token punctuation">{</span>callback<span class="token punctuation">}</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>Content <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>Profiler<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>Profiler id<span class="token operator">=</span><span class="token string">&quot;PreviewPane&quot;</span> onRender<span class="token operator">=</span><span class="token punctuation">{</span>callback<span class="token punctuation">}</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>PreviewPane <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>Profiler<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Panel<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Profiler<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>App<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="onrender回调" tabindex="-1"><a class="header-anchor" href="#onrender回调"><span>onRender回调</span></a></h2><p><code>Profiler</code> 需要一个 <code>onRender</code> 函数作为参数。 React 会在 profile 包含的组件树中任何组件 “提交” 一个更新的时候调用这个函数。 它的参数描述了渲染了什么和花费了多久。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">onRenderCallback</span><span class="token punctuation">(</span>
  id<span class="token punctuation">,</span> <span class="token comment">// 发生提交的 Profiler 树的 “id”</span>
  phase<span class="token punctuation">,</span> <span class="token comment">// &quot;mount&quot; （如果组件树刚加载） 或者 &quot;update&quot; （如果它重渲染了）之一</span>
  actualDuration<span class="token punctuation">,</span> <span class="token comment">// 本次更新 committed 花费的渲染时间</span>
  baseDuration<span class="token punctuation">,</span> <span class="token comment">// 估计不使用 memoization 的情况下渲染整棵子树需要的时间</span>
  startTime<span class="token punctuation">,</span> <span class="token comment">// 本次更新中 React 开始渲染的时间</span>
  commitTime<span class="token punctuation">,</span> <span class="token comment">// 本次更新中 React committed 的时间</span>
  interactions <span class="token comment">// 属于本次更新的 interactions 的集合</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 合计或记录渲染时间。。。</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>id: string - 发生提交的 Profiler 树的 id。 如果有多个 profiler，它能用来分辨树的哪一部分发生了“提交”。</li><li>phase: &quot;mount&quot; | &quot;update&quot; - 判断是组件树的第一次装载引起的重渲染，还是由 props、state 或是 hooks 改变引起的重渲染。</li><li>actualDuration: number - 本次更新在渲染 Profiler 和它的子代上花费的时间。 这个数值表明使用 memoization 之后能表现得多好。（例如 React.memo，useMemo，shouldComponentUpdate）。 理想情况下，由于子代只会因特定的 prop 改变而重渲染，因此这个值应该在第一次装载之后显著下降。</li><li>baseDuration: number - 在 Profiler 树中最近一次每一个组件 render 的持续时间。 这个值估计了最差的渲染时间。（例如当它是第一次加载或者组件树没有使用 memoization）。</li><li>startTime: number - 本次更新中 React 开始渲染的时间戳。</li><li>commitTime: number - 本次更新中 React commit 阶段结束的时间戳。 在一次 commit 中这个值在所有的 profiler 之间是共享的，可以将它们按需分组。</li><li>interactions: Set - 当更新被制定时，“interactions” 的集合会被追踪。（例如当 render 或者 setState 被调用时）。</li></ul>`,10),p=[o];function l(r,c){return s(),a("div",null,p)}const d=n(t,[["render",l],["__file","profiler.html.vue"]]),k=JSON.parse(`{"path":"/web/react/profiler.html","title":"Profiler","lang":"zh-CN","frontmatter":{"title":"Profiler","date":"2022-07-05T00:00:00.000Z","category":["React"],"description":"Profiler 能添加在 React 树中的任何地方来测量树中这部分渲染所带来的开销。 Profiler 需要两个 prop：第一个是 id，另一个是当组件树中的组件“提交”更新的时候被 React 调用的回调函数onRender。 可以用于分析单个组件、同时分析多个组件、甚至嵌套检测： 查看单个组件检测示例代码 查看多个组件检测示例代码 查看嵌套检...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/react/profiler.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"Profiler"}],["meta",{"property":"og:description","content":"Profiler 能添加在 React 树中的任何地方来测量树中这部分渲染所带来的开销。 Profiler 需要两个 prop：第一个是 id，另一个是当组件树中的组件“提交”更新的时候被 React 调用的回调函数onRender。 可以用于分析单个组件、同时分析多个组件、甚至嵌套检测： 查看单个组件检测示例代码 查看多个组件检测示例代码 查看嵌套检..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2022-07-05T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Profiler\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-05T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"onRender回调","slug":"onrender回调","link":"#onrender回调","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":2.43,"words":728},"filePathRelative":"web/react/profiler.md","localizedDate":"2022年7月5日","autoDesc":true}`);export{d as comp,k as data};
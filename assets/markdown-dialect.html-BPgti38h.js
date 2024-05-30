import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as r,c as m,b as l,w as a,e as c,a as n,d as s}from"./app-Ds4AiUcn.js";const v={},b=c(`<h3 id="选项卡" tabindex="-1"><a class="header-anchor" href="#选项卡"><span>选项卡</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 配置</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
      mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
        tabs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),k=n("p",null,"标题 1 的内容",-1),h=n("p",null,"标题 2 的内容",-1),g=n("p",null,"标题 3 的内容 后面跟:active会被默认激活",-1),_=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`::: tabs

@tab 标题 1

标题 1 的内容 

@tab 标题 2

标题 2 的内容 

@tab:active 标题 3


标题 3 的内容 后面跟:active会被默认激活

:::
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("p",null,[n("strong",null,"联动切换")],-1),f=n("p",null,"一个水果选项卡列表:",-1),y=n("p",null,"Apple",-1),x=n("p",null,"Banana",-1),q=n("p",null,null,-1),A=n("p",null,"另一个水果选项卡列表:",-1),T=n("p",null,"Apple",-1),M=n("p",null,"Banana",-1),C=n("p",null,"Orange",-1),D=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`一个水果选项卡列表:

::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana


:::

另一个水果选项卡列表:

::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=c(`<h3 id="gfm-警告" tabindex="-1"><a class="header-anchor" href="#gfm-警告"><span>GFM 警告</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 配置</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
      mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 启用 GFM 警告</span>
        alert<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),E=n("div",{class:"hint-container note"},[n("p",{class:"hint-container-title"},"注"),n("p",null,"注释文字")],-1),N=n("div",{class:"hint-container important"},[n("p",{class:"hint-container-title"},"重要"),n("p",null,"重要文字")],-1),F=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"提示文字")],-1),G=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,"注意文字")],-1),z=n("div",{class:"hint-container caution"},[n("p",{class:"hint-container-title"},"警告"),n("p",null,"警告文字")],-1),H=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[n("span",{class:"token blockquote punctuation"},">"),s(` [!note]
`),n("span",{class:"token blockquote punctuation"},">"),s(` 注释文字

`),n("span",{class:"token blockquote punctuation"},">"),s(` [!important]
`),n("span",{class:"token blockquote punctuation"},">"),s(` 重要文字

`),n("span",{class:"token blockquote punctuation"},">"),s(` [!tip]
`),n("span",{class:"token blockquote punctuation"},">"),s(` 提示文字

`),n("span",{class:"token blockquote punctuation"},">"),s(` [!warning]
`),n("span",{class:"token blockquote punctuation"},">"),s(` 注意文字

`),n("span",{class:"token blockquote punctuation"},">"),s(` [!caution]
`),n("span",{class:"token blockquote punctuation"},">"),s(` 警告文字
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=c(`<h3 id="属性支持" tabindex="-1"><a class="header-anchor" href="#属性支持"><span>属性支持</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 配置</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
      mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
        attrs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用语法 <code>{attrs}</code> 来为 Markdown 元素添加属性。</p><p>比如，如果你想要一个 id 为 say-hello-world，文字为 Hello World 的二级标题，你可以使用:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> Hello World {#say-hello-world}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你想要一个有 full-width Class 的图片，你可以使用:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">img</span>](<span class="token url">link/to/image.png</span>)</span> {.full-width}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同时也支持其他属性:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>一个包含文字的段落。 {#p .a .b align=center customize-attr=&quot;content with spaces&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会被渲染为：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a b<span class="token punctuation">&quot;</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">customize-attr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content with spaces<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  一个包含文字的段落。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提示容器" tabindex="-1"><a class="header-anchor" href="#提示容器"><span>提示容器</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 配置</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
      mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这就是默认选项，所以你可以直接使用此功能</span>
        hint<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),W=n("div",{class:"hint-container important"},[n("p",{class:"hint-container-title"},"重要"),n("p",null,"重要容器。")],-1),j=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"相关信息"),n("p",null,"信息容器。")],-1),O=n("div",{class:"hint-container note"},[n("p",{class:"hint-container-title"},"注"),n("p",null,"注释容器。")],-1),P=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"提示容器")],-1),X=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,"警告容器")],-1),Y=n("div",{class:"hint-container caution"},[n("p",{class:"hint-container-title"},"警告"),n("p",null,"危险容器")],-1),Z=n("details",{class:"hint-container details"},[n("summary",null,"详情"),n("p",null,"详情容器")],-1),S=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`::: important
重要容器。
:::

::: info
信息容器。
:::

::: note
注释容器。
:::

::: tip
提示容器
:::

::: warning
警告容器
:::

::: caution
危险容器
:::

::: details
详情容器
:::
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=c(`<h3 id="自定义对齐" tabindex="-1"><a class="header-anchor" href="#自定义对齐"><span>自定义对齐</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 配置</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
      mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
        align<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),J=n("div",{style:{"text-align":"left"}},[n("p",null,"左对齐的内容")],-1),R=n("div",{style:{"text-align":"center"}},[n("p",null,"居中的内容")],-1),I=n("div",{style:{"text-align":"right"}},[n("p",null,"右对齐的内容")],-1),K=n("div",{style:{"text-align":"justify"}},[n("p",null,"两端对齐的内容")],-1),L=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[n("pre",{class:"language-markdown"},[n("code",null,`::: left
左对齐的内容
:::

::: center
居中的内容
:::

::: right
右对齐的内容
:::

::: justify
两端对齐的内容
:::
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=c(`<h3 id="代码块分组" tabindex="-1"><a class="header-anchor" href="#代码块分组"><span>代码块分组</span></a></h3><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 配置</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
      mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
        codetabs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),$=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-md-enhance
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),nn=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-md-enhance
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),sn=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-md-enhance
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),an=n("div",{class:"language-markdown line-numbers-mode","data-ext":"md","data-title":"md"},[n("pre",{class:"language-markdown"},[n("code",null,[s(`::: code-tabs#shell

@tab pnpm

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"bash"),s(`
`),n("span",{class:"token code-block language-bash language-bash"},[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(" vuepress-plugin-md-enhance")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

@tab yarn

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"bash"),s(`
`),n("span",{class:"token code-block language-bash language-bash"},[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(" vuepress-plugin-md-enhance")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`

@tab:active npm

`),n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"bash"),s(`
`),n("span",{class:"token code-block language-bash language-bash"},[n("span",{class:"token function"},"npm"),s(" i "),n("span",{class:"token parameter variable"},"-D"),s(" vuepress-plugin-md-enhance")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`
:::
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function en(tn,ln){const o=p("Tabs"),i=p("MdDemo"),u=p("CodeTabs");return r(),m("div",null,[b,l(i,{title:"非联动切换",id:"md-demo-4"},{default:a(()=>[l(o,{id:"5",data:[{id:"标题 1"},{id:"标题 2"},{id:"标题 3"}],active:2},{title0:a(({value:e,isActive:t})=>[s("标题 1")]),title1:a(({value:e,isActive:t})=>[s("标题 2")]),title2:a(({value:e,isActive:t})=>[s("标题 3")]),tab0:a(({value:e,isActive:t})=>[k]),tab1:a(({value:e,isActive:t})=>[h]),tab2:a(({value:e,isActive:t})=>[g]),_:1})]),code:a(()=>[_]),_:1}),w,l(i,{title:"联动切换",id:"md-demo-27"},{default:a(()=>[f,l(o,{id:"31",data:[{id:"apple"},{id:"banana"}],"tab-id":"fruit"},{title0:a(({value:e,isActive:t})=>[s("apple")]),title1:a(({value:e,isActive:t})=>[s("banana")]),tab0:a(({value:e,isActive:t})=>[y]),tab1:a(({value:e,isActive:t})=>[x,q]),_:1}),A,l(o,{id:"49",data:[{id:"apple"},{id:"banana"},{id:"orange"}],"tab-id":"fruit"},{title0:a(({value:e,isActive:t})=>[s("apple")]),title1:a(({value:e,isActive:t})=>[s("banana")]),title2:a(({value:e,isActive:t})=>[s("orange")]),tab0:a(({value:e,isActive:t})=>[T]),tab1:a(({value:e,isActive:t})=>[M]),tab2:a(({value:e,isActive:t})=>[C]),_:1})]),code:a(()=>[D]),_:1}),B,l(i,{title:"GFM 警告",id:"md-demo-72"},{default:a(()=>[E,N,F,G,z]),code:a(()=>[H]),_:1}),V,l(i,{title:"提示容器",id:"md-demo-132"},{default:a(()=>[W,j,O,P,X,Y,Z]),code:a(()=>[S]),_:1}),U,l(i,{title:"自定义对齐",id:"md-demo-174"},{default:a(()=>[J,R,I,K]),code:a(()=>[L]),_:1}),Q,l(i,{title:"代码块分组",id:"md-demo-201"},{default:a(()=>[l(u,{id:"202",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2,"tab-id":"shell"},{title0:a(({value:e,isActive:t})=>[s("pnpm")]),title1:a(({value:e,isActive:t})=>[s("yarn")]),title2:a(({value:e,isActive:t})=>[s("npm")]),tab0:a(({value:e,isActive:t})=>[$]),tab1:a(({value:e,isActive:t})=>[nn]),tab2:a(({value:e,isActive:t})=>[sn]),_:1})]),code:a(()=>[an]),_:1})])}const pn=d(v,[["render",en],["__file","markdown-dialect.html.vue"]]),un=JSON.parse(`{"path":"/web/markdown/markdown-dialect.html","title":"Markdown 方言","lang":"zh-CN","frontmatter":{"title":"Markdown 方言","date":"2023-04-05T00:00:00.000Z","category":["Markdown"],"order":3,"description":"选项卡 联动切换 GFM 警告 属性支持 可以使用语法 {attrs} 来为 Markdown 元素添加属性。 比如，如果你想要一个 id 为 say-hello-world，文字为 Hello World 的二级标题，你可以使用: 如果你想要一个有 full-width Class 的图片，你可以使用: 同时也支持其他属性: 会被渲染为： 提示容器 ...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/markdown/markdown-dialect.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"Markdown 方言"}],["meta",{"property":"og:description","content":"选项卡 联动切换 GFM 警告 属性支持 可以使用语法 {attrs} 来为 Markdown 元素添加属性。 比如，如果你想要一个 id 为 say-hello-world，文字为 Hello World 的二级标题，你可以使用: 如果你想要一个有 full-width Class 的图片，你可以使用: 同时也支持其他属性: 会被渲染为： 提示容器 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2023-04-05T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown 方言\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-05T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":3,"title":"选项卡","slug":"选项卡","link":"#选项卡","children":[]},{"level":3,"title":"GFM 警告","slug":"gfm-警告","link":"#gfm-警告","children":[]},{"level":3,"title":"属性支持","slug":"属性支持","link":"#属性支持","children":[]},{"level":3,"title":"提示容器","slug":"提示容器","link":"#提示容器","children":[]},{"level":3,"title":"自定义对齐","slug":"自定义对齐","link":"#自定义对齐","children":[]},{"level":3,"title":"代码块分组","slug":"代码块分组","link":"#代码块分组","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":1.85,"words":554},"filePathRelative":"web/markdown/markdown-dialect.md","localizedDate":"2023年4月5日","autoDesc":true}`);export{pn as comp,un as data};

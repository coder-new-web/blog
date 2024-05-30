import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c as i,a as n,d as s,b as a,e as t}from"./app-Ds4AiUcn.js";const c={},r=t(`<p>本文介绍一般创建uniapp项目开发app时所配置的一些配置项</p><ol><li>忽略版本兼容检查提示。这个提示常会出现在打包完运行时候弹出来的提示信息，然后点击弹框上的“查看详情”，就会跳转到DCloud的网页上，可以设置以下来进行关闭，这样打包完运行时候就不会出现弹框提示了。</li></ol><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;app-plus&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;compatible&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;ignoreVersion&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=n("p",null,[s("代码分包。代码分包可以减少app首次加载启动时所耗费的时间，需要在"),n("code",null,"manifest.json"),s("和"),n("code",null,"pages.json"),s("两个文件同时配置才会生效：")],-1),u={href:"https://uniapp.dcloud.net.cn/collocation/manifest.html#app-vue-optimization",target:"_blank",rel:"noopener noreferrer"},m={href:"https://uniapp.dcloud.net.cn/collocation/pages.html#subpackages",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"pages.json",-1),k=n("code",null,"subPackages",-1),b=n("code",null,"preloadRule",-1),h=n("li",null,"代码分包不止可以运用在app上，小程序上也是可以的，具体看官方的介绍",-1),_=n("code",null,"pages.json",-1),g=n("code",null,"globalstyle/pageOrientation",-1),f={href:"https://uniapp.dcloud.net.cn/collocation/pages.html#globalstyle",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"rpxCalcBaseDeviceWidth",-1),y=n("code",null,"rpxCalcBaseDeviceWidth",-1),E=n("code",null,"rpxCalcIncludeWidth",-1),q={href:"https://uniapp.dcloud.net.cn/collocation/pages.html#globalstyle",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"rpxCalcBaseDeviceWidth",-1),w=n("code",null,"dynamicRpx",-1),j=n("code",null,"transformPx",-1),A={href:"https://uniapp.dcloud.net.cn/collocation/manifest.html#%E9%85%8D%E7%BD%AE%E9%A1%B9%E5%88%97%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"postcss-px-to-viewport",-1),D=t(`<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;postcss-px-to-viewport&quot;</span> <span class="token punctuation">{</span>
  <span class="token keyword">type</span> <span class="token class-name">Unit</span> <span class="token operator">=</span> <span class="token string">&quot;px&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;rem&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;cm&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;em&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;rpx&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">interface</span> <span class="token class-name">Options</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 需要转换的单位
     */</span>
    unitToConvert<span class="token operator">:</span> Unit<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 设计稿的视口宽度
     */</span>
    viewportWidth<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 单位转换后保留的精度
     */</span>
    unitPrecision<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 能转化为vw的属性列表
     */</span>
    propList<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     *  希望使用的视口单位
     */</span>
    viewportUnit<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 字体使用的视口单位
     */</span>
    fontViewportUnit<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
     */</span>
    selectorBlackList<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
     */</span>
    minPixelValue<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 媒体查询里的单位是否需要转换单位
     */</span>
    mediaQuery<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     *  是否直接更换属性值，而不添加备用属性
     */</span>
    replace<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 忽略某些文件夹下的文件或特定文件，例如 &#39;node_modules&#39; 下的文件
     */</span>
    exclude<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>Regexp<span class="token operator">&gt;</span> <span class="token operator">|</span> Regexp<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     *  如果设置了include，那将只有匹配到的文件才会被转换
     */</span>
    include<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>Regexp<span class="token operator">&gt;</span> <span class="token operator">|</span> Regexp<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     *  是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
     */</span>
    landscape<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 横屏时使用的单位
     */</span>
    landscapeUnit<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 横屏时使用的视口宽度
     */</span>
    landscapeWidth<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Options<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是一般看情况决定是否用这个插件，因为有些uniapp的组件，是使用到了rpx作为单位的，而rpx在uniapp里会自动转换成<code>px</code></p>`,2),P={start:"6"},V={href:"https://uniapp.dcloud.net.cn/tutorial/app-android-minsdkversion.html#%E8%AE%BE%E7%BD%AEminsdkversion",target:"_blank",rel:"noopener noreferrer"},N={href:"https://uniapp.dcloud.net.cn/collocation/pages.html#condition",target:"_blank",rel:"noopener noreferrer"},R={href:"https://uniapp.dcloud.net.cn/tutorial/app-android-abifilters.html#cpu%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"},W=n("code",null,"HBuilder2.7.0+",-1),S=n("code",null,"x86",-1),T={href:"https://uniapp.dcloud.net.cn/tutorial/app-android-abifilters.html#nox86",target:"_blank",rel:"noopener noreferrer"},U={href:"https://uniapp.dcloud.net.cn/tutorial/app-android-schemes.html#%E8%AE%BE%E7%BD%AEurlschemes",target:"_blank",rel:"noopener noreferrer"};function O(z,L){const e=l("ExternalLinkIcon");return p(),i("div",null,[r,n("ol",null,[n("li",null,[d,n("ul",null,[n("li",null,[n("a",u,[s("manifest.json参考配置"),a(e)])]),n("li",null,[n("a",m,[s("pages.json参考配置"),a(e)]),s("，注意"),v,s("是需要配置"),k,s("和"),b,s("的。")]),h])]),n("li",null,[n("p",null,[s("开发app竖屏锁定，不运行app页面跟随页面旋转而进行旋转。这个需要在"),_,s("下的"),g,s("下进行配置，"),n("a",f,[s("pageOrientation配置参考"),a(e)])])]),n("li",null,[n("p",null,[x,s("、"),y,s("、"),E,s("。"),n("a",q,[s("三个值的介绍"),a(e)]),s("，一般默认即可，或者可能设计师给的稿纸宽度不是375，此时可以设置一下"),B,s("，这三个值方便我们进行响应式的布局，另外"),w,s("根据实际情况是否设置为true，为true会根据屏幕大小变化进而重新进行页面布局")])]),n("li",null,[n("p",null,[j,s(","),n("a",A,[s("transformPx配置参考"),a(e)]),s("设为true时，方便我们将px转化为rpx，从而方便我们进行响应式的布局，当然，也可以部根据第四五点所介绍的uniapp内置的响应式布局配置，你还可以使用第三方的插件，如"),C,s("，仅在开发环境使用即可，它可以将你所指定的单位和稿纸宽度全部转换成你所期待的单位。如果你的项目是ts声明，需要手动书写声明文件，也可以参考以下声明文件:")])])]),D,n("ol",P,[n("li",null,[n("a",V,[s("minSdkVersion配置"),a(e)])]),n("li",null,[n("a",N,[s("condition启动模式配置"),a(e)])]),n("li",null,[n("a",R,[s("配置app打包后的cpu类型"),a(e)]),s("，需要注意的是从"),W,s("开始，云打包不再将"),S,s("打包进去。"),n("a",T,[s("cpu配置注意事项"),a(e)])]),n("li",null,[n("a",U,[s("设置UrlSchemes"),a(e)]),s("，配置此项可以从H5或其它app唤起我们开发的app")])])])}const Y=o(c,[["render",O],["__file","template.html.vue"]]),Z=JSON.parse(`{"path":"/web/mobile-dev/uni-app/template.html","title":"配置模板","lang":"zh-CN","frontmatter":{"title":"配置模板","date":"2024-02-21T00:00:00.000Z","category":["移动开发"],"description":"本文介绍一般创建uniapp项目开发app时所配置的一些配置项 忽略版本兼容检查提示。这个提示常会出现在打包完运行时候弹出来的提示信息，然后点击弹框上的“查看详情”，就会跳转到DCloud的网页上，可以设置以下来进行关闭，这样打包完运行时候就不会出现弹框提示了。 代码分包。代码分包可以减少app首次加载启动时所耗费的时间，需要在manifest.jso...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/mobile-dev/uni-app/template.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"配置模板"}],["meta",{"property":"og:description","content":"本文介绍一般创建uniapp项目开发app时所配置的一些配置项 忽略版本兼容检查提示。这个提示常会出现在打包完运行时候弹出来的提示信息，然后点击弹框上的“查看详情”，就会跳转到DCloud的网页上，可以设置以下来进行关闭，这样打包完运行时候就不会出现弹框提示了。 代码分包。代码分包可以减少app首次加载启动时所耗费的时间，需要在manifest.jso..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2024-02-21T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置模板\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-21T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":3.38,"words":1013},"filePathRelative":"web/mobile-dev/uni-app/template.md","localizedDate":"2024年2月21日","autoDesc":true}`);export{Y as comp,Z as data};

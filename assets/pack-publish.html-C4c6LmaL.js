import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as c,c as p,b as l,w as s,e as o,a as e,d as a}from"./app-Ds4AiUcn.js";const u={},m=o(`<h2 id="打包为-apk" tabindex="-1"><a class="header-anchor" href="#打包为-apk"><span>打包为 APK</span></a></h2><p>andoird 打包需要 android studio</p><p><strong>从项目根目录进入到android目录</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> android
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>清空andorid目录下的运行缓存</strong>：</p>`,5),h=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`gradlew clean
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`./gradlew clean
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),b=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"注意"),e("p",null,[a("mac电脑如果此时无法使用"),e("code",null,"./gradlew"),a("命令 ，在当前命令行输入"),e("code",null,"chmod +x gradlew"),a("后，重新 输入"),e("code",null,"./gradlew clean"),a("即可。")])],-1),v=e("p",null,[e("strong",null,"开始打包"),a("：")],-1),_=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`gradlew assembleRelease
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),w=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`./gradlew assembleRelease
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),k=o(`<p>  按以上步骤操作完后，此时在 android 目录下找到打包完成后的 apk 文件，将这个文件拿出来进行<strong>加密加固</strong>。通过 keystore 进行加固，目的是为了防止上线的 app 是同一个类型，以至于热更新的时候不会提示签名错误。将加固完成后的 apk 包上传至 app 上传平台，按照步骤上传审核即可。</p><h2 id="打包为-ipa" tabindex="-1"><a class="header-anchor" href="#打包为-ipa"><span>打包为 IPA</span></a></h2><p>  打包 ios 发布 APP Store 的步骤相对复杂一点，需要使用 mac 电脑上的 xcode 软件进行打包上传，没有 mac 电脑的可以在 windows 电脑上直接装黑苹果或者装一个虚拟机，然后装一个 mac，这过程需要 windows 电脑性能足够强大，否则不建议操作。</p><p><strong>首先在 package.json 里设置 bundle-ios 命令</strong></p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;script&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;bundle-ios&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>bundle-ios<span class="token string">&quot;: &quot;</span>node node_modules/react-native/local-cli/cli.js bundle --entry-file index.js --platform ios --dev <span class="token boolean">false</span> --bundle-output ./ios/bundle/index.jsbundle --assets-dest ./ios/bundle<span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在 ios 文件目录下创建 bundle 文件夹</strong></p><p><strong>创建完成后运行以下命令：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> run bundle-ios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>等待过程完成后，可以在 bundle 目录下会生成 assets 文件文件</strong></p><p><strong>选择项目中 ios 文件夹，选中该文件夹下的 xxx.xcodeproj，通过 xcode 打开该文件</strong></p>`,10);function x(y,f){const i=r("CodeTabs");return c(),p("div",null,[m,l(i,{id:"13",data:[{id:"windows"},{id:"mac"}],active:0,"tab-id":"shell"},{title0:s(({value:n,isActive:t})=>[a("windows")]),title1:s(({value:n,isActive:t})=>[a("mac")]),tab0:s(({value:n,isActive:t})=>[h]),tab1:s(({value:n,isActive:t})=>[g]),_:1}),b,v,l(i,{id:"29",data:[{id:"windows"},{id:"mac"}],active:0,"tab-id":"shell"},{title0:s(({value:n,isActive:t})=>[a("windows")]),title1:s(({value:n,isActive:t})=>[a("mac")]),tab0:s(({value:n,isActive:t})=>[_]),tab1:s(({value:n,isActive:t})=>[w]),_:1}),k])}const P=d(u,[["render",x],["__file","pack-publish.html.vue"]]),j=JSON.parse(`{"path":"/web/mobile-dev/react-native/pack-publish.html","title":"打包与发布","lang":"zh-CN","frontmatter":{"title":"打包与发布","date":"2022-07-06T00:00:00.000Z","category":["移动开发","react native"],"description":"打包为 APK andoird 打包需要 android studio 从项目根目录进入到android目录： 清空andorid目录下的运行缓存： 注意 mac电脑如果此时无法使用./gradlew命令 ，在当前命令行输入chmod +x gradlew后，重新 输入./gradlew clean即可。 开始打包： 按以上步骤操作完后，此时在 and...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/mobile-dev/react-native/pack-publish.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"打包与发布"}],["meta",{"property":"og:description","content":"打包为 APK andoird 打包需要 android studio 从项目根目录进入到android目录： 清空andorid目录下的运行缓存： 注意 mac电脑如果此时无法使用./gradlew命令 ，在当前命令行输入chmod +x gradlew后，重新 输入./gradlew clean即可。 开始打包： 按以上步骤操作完后，此时在 and..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2022-07-06T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"打包与发布\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-06T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"打包为 APK","slug":"打包为-apk","link":"#打包为-apk","children":[]},{"level":2,"title":"打包为 IPA","slug":"打包为-ipa","link":"#打包为-ipa","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":1.47,"words":440},"filePathRelative":"web/mobile-dev/react-native/pack-publish.md","localizedDate":"2022年7月6日","autoDesc":true}`);export{P as comp,j as data};
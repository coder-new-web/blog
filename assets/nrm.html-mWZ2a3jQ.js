import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as r,c as p,a as n,d as a,b as e,e as i}from"./app-Ds4AiUcn.js";const l={},c=i(`<p>一个帮助你管理npm镜像源的工具，助你省心切换镜像源。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> nrm <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令"><span>基本命令</span></a></h2><p><strong>nrm -V</strong> 查看安装版本，也看查看是否安装成功</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nrm <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可能会报错</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>D:<span class="token punctuation">\\</span>nvm<span class="token punctuation">\\</span>v16.16.0<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>nrm<span class="token punctuation">\\</span>cli.js:9
const <span class="token function">open</span> <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             ^

Error <span class="token punctuation">[</span>ERR_REQUIRE_ESM<span class="token punctuation">]</span>: require<span class="token punctuation">(</span><span class="token punctuation">)</span> of ES Module D:<span class="token punctuation">\\</span>nvm<span class="token punctuation">\\</span>v16.16.0<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>nrm<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>open<span class="token punctuation">\\</span>index.js from D:<span class="token punctuation">\\</span>nvm<span class="token punctuation">\\</span>v16.16.0<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>nrm<span class="token punctuation">\\</span>cli.js not supported.
Instead change the require of index.js <span class="token keyword">in</span> D:<span class="token punctuation">\\</span>nvm<span class="token punctuation">\\</span>v16.16.0<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>nrm<span class="token punctuation">\\</span>cli.js to a dynamic import<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token function">which</span> is available <span class="token keyword">in</span> all CommonJS modules.
    at Object.<span class="token operator">&lt;</span>anonymous<span class="token operator">&gt;</span> <span class="token punctuation">(</span>D:<span class="token punctuation">\\</span>nvm<span class="token punctuation">\\</span>v16.16.0<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>nrm<span class="token punctuation">\\</span>cli.js:9:14<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  code: <span class="token string">&#39;ERR_REQUIRE_ESM&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决办法： 命令行终端输入：<code>npm i nrm -g open@8.4.2 --save</code>，安装完成后再输入<code>nrm -V</code>就可显示版本号</p><hr><p><strong>nrm ls</strong> 列举可使用的镜像源</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ nrm <span class="token function">ls</span>

* <span class="token function">npm</span> ---------- https://registry.npmjs.org/
  <span class="token function">yarn</span> --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>nrm use</strong> 使用某一镜像源</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ nrm use cnpm  //switch registry to cnpm

    Registry has been <span class="token builtin class-name">set</span> to: http://r.cnpmjs.org/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>more command</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Usage: nrm <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span>

  Commands:

    <span class="token function">ls</span>                                    List all the registries
    current                               Show current registry name
    use <span class="token operator">&lt;</span>registry<span class="token operator">&gt;</span>                        Change registry to registry
    <span class="token function">add</span> <span class="token operator">&lt;</span>registry<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span> <span class="token punctuation">[</span>home<span class="token punctuation">]</span>           Add one custom registry
    login <span class="token operator">&lt;</span>registry<span class="token operator">&gt;</span> <span class="token punctuation">[</span>value<span class="token punctuation">]</span>              Set authorize information <span class="token keyword">for</span> a registry with a base64 encoded string or username and pasword
      <span class="token parameter variable">-a</span>  --always-auth                     Set is always auth
      <span class="token parameter variable">-u</span>  <span class="token parameter variable">--username</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>             Your user name <span class="token keyword">for</span> this registry
      <span class="token parameter variable">-p</span>  <span class="token parameter variable">--password</span> <span class="token operator">&lt;</span>password<span class="token operator">&gt;</span>             Your password <span class="token keyword">for</span> this registry
      <span class="token parameter variable">-e</span>  <span class="token parameter variable">--email</span> <span class="token operator">&lt;</span>email<span class="token operator">&gt;</span>                   Your email <span class="token keyword">for</span> this registry
    set-hosted-repo <span class="token operator">&lt;</span>registry<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>    Set hosted <span class="token function">npm</span> repository <span class="token keyword">for</span> a custom registry to publish packages
    set-scope <span class="token operator">&lt;</span>scopeName<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>         Associating a scope with a registry
    del-scope <span class="token operator">&lt;</span>scopeName<span class="token operator">&gt;</span>                 Remove a scope
    <span class="token builtin class-name">set</span> <span class="token operator">&lt;</span>registryName<span class="token operator">&gt;</span>                    Set custom registry attribute
      <span class="token parameter variable">-a</span>  <span class="token parameter variable">--attr</span> <span class="token operator">&lt;</span>attr<span class="token operator">&gt;</span>                    Set custorm registry attribute
      <span class="token parameter variable">-v</span>  <span class="token parameter variable">--value</span> <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>                  Set custorm registry value
    del <span class="token operator">&lt;</span>registry<span class="token operator">&gt;</span>                        Delete one custom registry
    <span class="token function">rename</span> <span class="token operator">&lt;</span>registryName<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>newName<span class="token operator">&gt;</span>       Set custom registry name
    home <span class="token operator">&lt;</span>registry<span class="token operator">&gt;</span> <span class="token punctuation">[</span>browser<span class="token punctuation">]</span>             Open the homepage of registry with optional browser
    publish <span class="token punctuation">[</span><span class="token operator">&lt;</span>tarball<span class="token operator">&gt;|</span><span class="token operator">&lt;</span>folder<span class="token operator">&gt;</span><span class="token punctuation">]</span>          Publish package to current registry <span class="token keyword">if</span> current registry is a custom registry. The field <span class="token string">&#39;repository&#39;</span> of current custom registry is required running this command. If you&#39;re not using custom registry, this <span class="token builtin class-name">command</span> will run <span class="token function">npm</span> publish directly
      <span class="token parameter variable">-t</span>  <span class="token parameter variable">--tag</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>                        Add tag
      <span class="token parameter variable">-a</span>  <span class="token parameter variable">--access</span> <span class="token operator">&lt;</span>public<span class="token operator">|</span>restricted<span class="token operator">&gt;</span>       Set access
      <span class="token parameter variable">-o</span>  <span class="token parameter variable">--otp</span> <span class="token punctuation">[</span>otpcode<span class="token punctuation">]</span>                    Set otpcode
      <span class="token parameter variable">-dr</span> --dry-run                          Set is dry run
    <span class="token builtin class-name">test</span> <span class="token punctuation">[</span>registry<span class="token punctuation">]</span>                       Show the response <span class="token function">time</span> <span class="token keyword">for</span> one or all registries
    <span class="token builtin class-name">help</span>                                  Print this <span class="token builtin class-name">help</span>

  Options:

    <span class="token parameter variable">-h</span>  <span class="token parameter variable">--help</span>     output usage information
    <span class="token parameter variable">-V</span>  <span class="token parameter variable">--version</span>  output the version number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充"><span>补充</span></a></h2><p>也有免安装一步到位的切换镜像源命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 使用淘宝镜像源</span>
npx nrm use taobao

<span class="token comment"># 使用npm官方镜像源</span>
npx nrm use <span class="token function">npm</span>

<span class="token comment"># 查看当前使用的镜像源</span>
<span class="token function">npm</span> config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可使用的镜像源：</p>`,20),u={href:"https://www.npmjs.org/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://cnpmjs.org/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.nodejitsu.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://npmmirror.com/",target:"_blank",rel:"noopener noreferrer"};function g(b,h){const s=o("ExternalLinkIcon");return r(),p("div",null,[c,n("ul",null,[n("li",null,[n("a",u,[a("npm"),e(s)])]),n("li",null,[n("a",d,[a("yarn"),e(s)])]),n("li",null,[n("a",m,[a("cnpm"),e(s)])]),n("li",null,[n("a",v,[a("nodejitsu"),e(s)])]),n("li",null,[n("a",k,[a("taobao"),e(s)])])])])}const _=t(l,[["render",g],["__file","nrm.html.vue"]]),w=JSON.parse(`{"path":"/web/version-management-tools/nrm.html","title":"nrm","lang":"zh-CN","frontmatter":{"title":"nrm","date":"2023-06-16T00:00:00.000Z","category":["版本管理工具"],"tag":["npm镜像管理工具"],"description":"一个帮助你管理npm镜像源的工具，助你省心切换镜像源。 安装 基本命令 nrm -V 查看安装版本，也看查看是否安装成功 可能会报错 解决办法： 命令行终端输入：npm i nrm -g open@8.4.2 --save，安装完成后再输入nrm -V就可显示版本号 nrm ls 列举可使用的镜像源 nrm use 使用某一镜像源 more comma...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/web/version-management-tools/nrm.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"nrm"}],["meta",{"property":"og:description","content":"一个帮助你管理npm镜像源的工具，助你省心切换镜像源。 安装 基本命令 nrm -V 查看安装版本，也看查看是否安装成功 可能会报错 解决办法： 命令行终端输入：npm i nrm -g open@8.4.2 --save，安装完成后再输入nrm -V就可显示版本号 nrm ls 列举可使用的镜像源 nrm use 使用某一镜像源 more comma..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:tag","content":"npm镜像管理工具"}],["meta",{"property":"article:published_time","content":"2023-06-16T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nrm\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-16T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"基本命令","slug":"基本命令","link":"#基本命令","children":[]},{"level":2,"title":"补充","slug":"补充","link":"#补充","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":1.91,"words":572},"filePathRelative":"web/version-management-tools/nrm.md","localizedDate":"2023年6月16日","autoDesc":true}`);export{_ as comp,w as data};
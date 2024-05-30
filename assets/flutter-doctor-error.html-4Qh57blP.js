import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as s,c as i,a as t,d as e,b as a,e as l}from"./app-Ds4AiUcn.js";const d="/assets/flutter-doctor-error-BcwVpf23.png",c="/assets/fvm-env-C-aoFDAN.png",p="/assets/flutter-android-sdk-manger-iYMlec_m.png",h="/assets/flutter-android-download-sdk-BWEuN-9_.png",u="/assets/flutter-android-download-sdk-error-CFMKyLQ1.png",m="/assets/flutter-doctor-download-c__-CEP_XrnE.png",_="/assets/flutter-doctor-download-c__-path-lB4gNn2w.png",g="/assets/flutter-doctor-all-success-BZgvDD68.png",f={},v=t("p",null,[e("报错截图："),t("br"),t("img",{src:d,alt:"",loading:"lazy"})],-1),b=t("h2",{id:"解决windows-version报错",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#解决windows-version报错"},[t("span",null,"解决Windows Version报错")])],-1),y=t("p",null,"无法确认安装的Windows版本是否为10或更高，解决方案：降低flutter版本（当前版本为3.3.3）",-1),k=t("p",null,"可安装fvm进行flutter版本管理",-1),w={href:"https://github.com/fluttertools/fvm/releases",target:"_blank",rel:"noopener noreferrer"},x={href:"https://d.serctl.com/?dl_start",target:"_blank",rel:"noopener noreferrer"},z=t("li",null,[e("桌面左下角搜索框输入"),t("code",null,"env"),e("后回车")],-1),V=t("li",null,[e("添加你的fvm安装目录到环境变量 "),t("img",{src:c,alt:"",loading:"lazy"})],-1),N=t("li",null,[e("cmd终端输入"),t("code",null,"fvm"),e("不报错即代表环境添加成功")],-1),B={href:"https://fvm.app/",target:"_blank",rel:"noopener noreferrer"},T=l(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy 

<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> https.proxy 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决-android-toolchain-警告" tabindex="-1"><a class="header-anchor" href="#解决-android-toolchain-警告"><span>解决 Android toolchain 警告</span></a></h2><ol><li>打开SDK管理 <img src="`+p+'" alt="" loading="lazy"></li><li>找到下图所示，然后进行下载 <img src="'+h+'" alt="" loading="lazy"> 注意：如果报以下错误，上图版本可以切换试试下载其它版本，笔者不能安装最新版本 <img src="'+u+'" alt="" loading="lazy"></li><li>终端运行<code>flutter doctor --android-licenses</code>，在提示一直输入y后回车都行。</li></ol><h2 id="解决-visual-studio-报错" tabindex="-1"><a class="header-anchor" href="#解决-visual-studio-报错"><span>解决 Visual Studio 报错</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>若flutter不是用于桌面开发，可以不解决这个问题</p></div>',5),D={href:"https://visualstudio.microsoft.com/zh-hans/downloads/",target:"_blank",rel:"noopener noreferrer"},W=t("li",null,[e("工作负荷tab页，如下操作： "),t("img",{src:m,alt:"",loading:"lazy"})],-1),E=t("li",null,[e("安装位置tab可参考设置，也可以默认路径，然后点击安装(安装按钮在窗口右下角) "),t("img",{src:_,alt:"",loading:"lazy"})],-1),S=l('<h2 id="解决-http-host-availability-报错" tabindex="-1"><a class="header-anchor" href="#解决-http-host-availability-报错"><span>解决 HTTP Host Availability 报错</span></a></h2><ol><li>打开flutter目录，如<code>flutter\\packages\\flutter_tools\\lib\\src\\http_host_validator.dart</code></li><li>打开<code>http_host_validator.dart</code>文件，将<code>https://maven.google.com/</code>修改为<code>https://dl.google.com/dl/android/maven2/</code></li><li><mark>关闭所有打开了flutterSDK的程序</mark>，找到<code>flutter\\bin\\cache</code>目录下的flutter_tools.snapshot文件，永久删除，<mark>不用删除cache文件夹，不然重新运行要下载很多东西</mark>。</li><li>重新运行终端执行flutter doctor，自动下载文件，解决问题。 <img src="'+g+'" alt="" loading="lazy"></li></ol>',2);function A(C,P){const o=r("ExternalLinkIcon");return s(),i("div",null,[v,b,y,k,t("ol",null,[t("li",null,[t("a",w,[e("下载地址"),a(o)]),e("，根据自己操作系统进行下载。下载速度慢要么搭梯子，"),t("a",x,[e("来此链接下载"),a(o)]),e("。")]),z,V,N,t("li",null,[t("a",B,[e("fvm参考文档"),a(o)])])]),T,t("ol",null,[t("li",null,[e("下载安装工具，"),t("a",D,[e("下载地址Visual Studio"),a(o)])]),W,E]),S])}const Y=n(f,[["render",A],["__file","flutter-doctor-error.html.vue"]]),Z=JSON.parse(`{"path":"/bug/flutter-doctor-error.html","title":"运行flutter doctor报错","lang":"zh-CN","frontmatter":{"title":"运行flutter doctor报错","date":"2023-05-28T00:00:00.000Z","category":["bug记录"],"description":" 报错截图： 解决Windows Version报错 无法确认安装的Windows版本是否为10或更高，解决方案：降低flutter版本（当前版本为3.3.3） 可安装fvm进行flutter版本管理 下载地址，根据自己操作系统进行下载。下载速度慢要么搭梯子，来此链接下载。 桌面左下角搜索框输入env后回车 添加你的fvm安装目录到环境变量 cmd终端...","head":[["meta",{"property":"og:url","content":"https://github.com/xinyang424/bug/flutter-doctor-error.html"}],["meta",{"property":"og:site_name","content":"XinYang"}],["meta",{"property":"og:title","content":"运行flutter doctor报错"}],["meta",{"property":"og:description","content":" 报错截图： 解决Windows Version报错 无法确认安装的Windows版本是否为10或更高，解决方案：降低flutter版本（当前版本为3.3.3） 可安装fvm进行flutter版本管理 下载地址，根据自己操作系统进行下载。下载速度慢要么搭梯子，来此链接下载。 桌面左下角搜索框输入env后回车 添加你的fvm安装目录到环境变量 cmd终端..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"XinYang's Blog"}],["meta",{"property":"article:published_time","content":"2023-05-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"运行flutter doctor报错\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XinYang's Blog\\",\\"url\\":\\"https://xinyang424.com\\"}]}"]]},"headers":[{"level":2,"title":"解决Windows Version报错","slug":"解决windows-version报错","link":"#解决windows-version报错","children":[]},{"level":2,"title":"解决 Android toolchain 警告","slug":"解决-android-toolchain-警告","link":"#解决-android-toolchain-警告","children":[]},{"level":2,"title":"解决 Visual Studio 报错","slug":"解决-visual-studio-报错","link":"#解决-visual-studio-报错","children":[]},{"level":2,"title":"解决  HTTP Host Availability 报错","slug":"解决-http-host-availability-报错","link":"#解决-http-host-availability-报错","children":[]}],"git":{"contributors":[{"name":"coder-new","email":"2578417052@qq.com","commits":1}]},"readingTime":{"minutes":1.61,"words":482},"filePathRelative":"bug/flutter-doctor-error.md","localizedDate":"2023年5月28日","autoDesc":true}`);export{Y as comp,Z as data};
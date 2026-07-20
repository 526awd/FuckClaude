export const languages = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  fr: 'Français',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.title': 'Fuck Claude | Are You a Claude "China User"?',
    'meta.description':
      'One-click check of your browser timezone, language, Chinese fonts and locale to see if Claude Code would flag you as a China user. 100% local, nothing uploaded.',

    'nav.title': 'Fuck Claude',
    'credit': 'Built with Claude Fable 5',

    'hero.title': 'Are you a Claude “China user”?',
    'hero.badge.local': '100% local scan',
    'hero.badge.noUpload': 'Results never uploaded',
    'hero.badge.openSource': 'Open source',
    'hero.scoreOutOf': '/ 100',

    'band.low.title': 'Low risk',
    'band.low.desc': '🐶You are not a “Claude China user”🐶',
    'band.medium.title': 'Medium risk',
    'band.medium.desc': '🐶You are probably a “Claude China user”🐶',
    'band.high.title': 'High risk',
    'band.high.desc': '🐶You are definitely a “Claude China user”🐶',
    'signal.timezone.name': 'System timezone',
    'signal.timezone.desc':
      'Intl.DateTimeFormat exposes the same OS timezone Claude Code reads; compared against Asia/Shanghai, Asia/Urumqi and other China zones.',
    'signal.language.name': 'Browser language',
    'signal.language.desc':
      'navigator.languages — zh-CN / Simplified Chinese at the top of the list scores highest.',
    'signal.fonts.name': 'Installed Chinese fonts',
    'signal.fonts.desc':
      'Canvas width-probing for Simplified / Traditional Chinese fonts such as Microsoft YaHei and PingFang SC.',
    'signal.vendorFonts.name': 'Chinese vendor fonts',
    'signal.vendorFonts.desc':
      'Canvas probing for fonts shipped by Chinese vendors or software — MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder faces. Any hit is a strong tell.',
    'signal.cnBrowser.name': 'Chinese browser / WebView',
    'signal.cnBrowser.desc':
      'User agent and UA-CH brands matched against WeChat, QQ, Quark, UC, Baidu and other Chinese browsers or in-app WebViews.',
    'signal.deviceVendor.name': 'Chinese-brand device',
    'signal.deviceVendor.desc':
      'UA-CH device model (navigator.userAgentData) and UA matched against HarmonyOS, Huawei, Xiaomi, OPPO, vivo and other Chinese brands.',
    'signal.intlLocale.name': 'Intl locale',
    'signal.intlLocale.desc':
      'The locale your browser resolves for date and number formatting.',
    'signal.timezoneOffset.name': 'Timezone offset',
    'signal.timezoneOffset.desc': 'Whether getTimezoneOffset() equals UTC+8.',
    'signal.emoji.name': 'Emoji rendering style',
    'signal.emoji.desc':
      'OS vendor guessed from the user agent; a weak, loosely correlated signal.',

    'scan.detecting': 'Checking',
    'scan.ready': 'Ready to scan',
    'result.hitsTitle': 'Matched signals',
    'result.noHits': 'No strong China signals matched. Low risk.',

    'signals.title': 'What gets scanned',
    'signals.sub': 'Nine locale fingerprints, weighted to a 0–100 risk score.',

    'how.title': 'How the check works',
    'how.p1':
      'When Claude Code is pointed at a proxy endpoint via ANTHROPIC_BASE_URL, public reverse-engineering reports found it reads your operating-system timezone and the proxy hostname, then hides the verdict inside the system prompt with Unicode steganography — the date separator and four look-alike apostrophes in the “Today’s date” line encode whether you look like a China user.',
    'how.p2':
      'A web page cannot read everything Claude Code can, but the key signal is identical: this tool reads the same OS timezone, then adds eight more browser-visible fingerprints — UI language, Chinese fonts, Chinese vendor fonts, Chinese browsers, device brand, Intl locale, UTC+8 offset and emoji style — into a weighted score. Signals scoring ≥0.25 count as hits; bands are Low 0–30, Medium 31–60, High 61–100.',
    'ui.weight': 'Weight',

    'faq.title': 'FAQ',
    'faq.q1': 'Does Claude really check my timezone?',
    'faq.a1':
      'According to public reverse-engineering reports, when Claude Code talks to a non-official endpoint it reads the OS timezone and proxy hostname, and steganographically encodes the result into its system prompt. The timezone this page reads via Intl.DateTimeFormat is the very same OS timezone.',
    'faq.q2': 'Is this score the exact check Claude runs?',
    'faq.a2':
      'No. Only the system timezone maps one-to-one onto Claude’s reported mechanism. The other eight signals are common Chinese-environment fingerprints that correlate with it, so treat the score as an estimate, not a verdict.',
    'faq.q3': 'How do I lower my score?',
    'faq.a3':
      'Switch your OS timezone away from China zones such as Asia/Shanghai, move zh-CN off the top of your browser language list, and avoid routing Claude Code through proxies whose hostnames contain flagged domains or AI-lab keywords.',
    'faq.q4': 'Is any data uploaded?',
    'faq.a4':
      'No. Every check runs locally in your browser and none of the detected signals are ever sent anywhere. The site only loads standard Google Analytics for anonymous page-view stats.',

    'privacy.title': 'Privacy',
    'privacy.body':
      'Every check runs locally in your browser — your scan results never leave your device. The site only loads Google Analytics for anonymous page-view stats; none of the detected signals are ever sent.',

    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'Scan with the app, or click to open',

    'footer.disclaimer':
      'For reference only, based on public reverse-engineering reports. Not an official statement or advice.',
    'footer.license':
      'Open sourced under the MIT License — redistributions must keep the original project notice.',
    'footer.repo': 'Original project',

    'share.label': 'Share your result',
    'share.native': 'Share',
    'share.copy': 'Copy link',
    'share.copied': 'Copied!',
    'share.save': 'Save result image',
    'share.saved': 'Saved!',
    'share.text':
      'I scored {score}/100 on the “Am I a Claude China User?” test — {verdict}! 🐶 Check yours:',
    'share.to.x': 'Share on X',
    'share.to.weibo': 'Share on Weibo',
    'share.to.telegram': 'Share on Telegram',
    'share.to.facebook': 'Share on Facebook',
    'share.to.linkedin': 'Share on LinkedIn',
    'share.to.reddit': 'Share on Reddit',

    'api.title': 'Also available over curl',
    'api.desc':
      'Prefer the terminal? Hit the endpoint below — it estimates your risk from your IP geo + request headers, and replies in the language of your Accept-Language header.',
    'api.ex1': '# Text report — follows your Accept-Language',
    'api.ex2': '# Force a language via header',
    'api.ex3': '# JSON output',

    'ui.claudeBadge': 'Claude Same',
    'ui.retest': 'Scan again',
    'ui.start': 'Start scan',
  },

  zh: {
    'meta.title': 'Fuck Claude ｜ 你是「Claude 中国用户」吗',
    'meta.description':
      '一键检测浏览器时区、语言、中文字体与 locale 等信号,评估你是否会被 Claude Code 判定为中国用户并有封号风险。纯本地运行,零数据上传。',

    'nav.title': 'Fuck Claude',
    'credit': '此网站使用 Claude Fable 5 开发',

    'hero.title': '你是「Claude 中国用户」吗',
    'hero.badge.local': '纯本地检测',
    'hero.badge.noUpload': '结果零上传',
    'hero.badge.openSource': '开源代码',
    'hero.scoreOutOf': '/ 100',

    'band.low.title': '低风险',
    'band.low.desc': '🐶你不是「Claude 中国用户」🐶',
    'band.medium.title': '中等风险',
    'band.medium.desc': '🐶你可能是「Claude 中国用户」🐶',
    'band.high.title': '高风险',
    'band.high.desc': '🐶你绝对是「Claude 中国用户」🐶',
    'signal.timezone.name': '系统时区',
    'signal.timezone.desc':
      'Intl.DateTimeFormat 读到的就是 Claude Code 读取的同一个系统时区,与 Asia/Shanghai、Asia/Urumqi 等中国时区比对。',
    'signal.language.name': '浏览器语言',
    'signal.language.desc': '检查 navigator.languages;首选 zh-CN / 简体中文得分最高。',
    'signal.fonts.name': '已安装中文字体',
    'signal.fonts.desc': '用 canvas 宽度探测微软雅黑、苹方等简繁中文字体。',
    'signal.vendorFonts.name': '国产厂商字体',
    'signal.vendorFonts.desc':
      '用 canvas 探测 MiSans、鸿蒙黑体、OPPO Sans、WPS 方正字体等国产厂商 / 软件字体,命中即为强信号。',
    'signal.cnBrowser.name': '国产浏览器 / WebView',
    'signal.cnBrowser.desc':
      '用 UA 与 UA-CH brands 匹配微信、QQ、夸克、UC、百度等国产浏览器或应用内 WebView。',
    'signal.deviceVendor.name': '国产品牌设备',
    'signal.deviceVendor.desc':
      '用 UA-CH 设备型号(navigator.userAgentData)与 UA 匹配鸿蒙、华为、小米、OPPO、vivo 等国产品牌。',
    'signal.intlLocale.name': 'Intl 区域设置',
    'signal.intlLocale.desc': '浏览器用于日期 / 数字格式化的 locale。',
    'signal.timezoneOffset.name': '时区偏移',
    'signal.timezoneOffset.desc': 'getTimezoneOffset() 是否为 UTC+8。',
    'signal.emoji.name': 'Emoji 渲染风格',
    'signal.emoji.desc': '由 UA 推断操作系统厂商,弱相关信号。',

    'scan.detecting': '检测中',
    'scan.ready': '待检测',
    'result.hitsTitle': '命中的信号',
    'result.noHits': '没有命中明显的中国信号,风险较低。',

    'signals.title': '检测哪些信号',
    'signals.sub': '九项区域指纹,加权得出 0–100 风险分。',

    'how.title': '检测原理',
    'how.p1':
      '当 Claude Code 通过 ANTHROPIC_BASE_URL 指向中转端点时,据公开逆向分析,它会读取操作系统时区与中转 hostname,再把结果用 Unicode 隐写术藏进 system prompt:「Today’s date」那一行的日期分隔符和 4 种几乎一样的撇号变体,编码了你是否像中国用户。',
    'how.p2':
      '网页读不到 Claude Code 能读的全部信息,但关键信号完全一致:本工具读取同一个系统时区,再叠加浏览器语言、中文字体、国产厂商字体、国产浏览器、设备品牌、Intl locale、UTC+8 偏移与 emoji 风格八项指纹,加权得分。得分 ≥0.25 计为命中;分档:低 0–30、中 31–60、高 61–100。',
    'ui.weight': '权重',

    'faq.title': '常见问题',
    'faq.q1': 'Claude 真的会检查我的时区吗?',
    'faq.a1':
      '据公开逆向分析,Claude Code 连接非官方端点时会读取系统时区与中转 hostname,并把结果隐写进 system prompt。本页通过 Intl.DateTimeFormat 读到的,正是同一个系统时区。',
    'faq.q2': '这个分数就是 Claude 的真实判定吗?',
    'faq.a2':
      '不是。只有系统时区能与 Claude 被披露的机制一一对应,其余八项是与之相关的「中文环境指纹」。分数是估计,不是定论。',
    'faq.q3': '怎么降低分数?',
    'faq.a3':
      '把系统时区改出 Asia/Shanghai 等中国时区,把 zh-CN 从浏览器语言列表首位移除,并避免让 Claude Code 走 hostname 含敏感域名 / AI 实验室关键词的中转。',
    'faq.q4': '会上传我的数据吗?',
    'faq.a4':
      '不会。所有检测都在浏览器本地完成,检测到的任何信号都不会被发送。网站仅加载 Google Analytics 统计匿名访问量。',

    'privacy.title': '隐私说明',
    'privacy.body':
      '所有检测都在你的浏览器本地完成,扫描结果不会离开你的设备。网站仅加载 Google Analytics 统计匿名页面访问量,检测到的信号不会被发送。',

    'social.x': 'X(推特)',
    'social.xiaohongshu': '小红书',
    'social.douyin': '抖音',
    'social.jike': '即刻',
    'social.scan': '用 App 扫码关注,或点击直达',

    'footer.disclaimer': '本工具仅供参考,基于公开逆向分析,不构成任何官方结论或建议。',
    'footer.license': '基于 MIT 协议开源 —— 二次发布请保留原项目署名。',
    'footer.repo': 'GitHub 原项目',

    'share.label': '分享你的结果',
    'share.native': '分享',
    'share.copy': '复制链接',
    'share.copied': '已复制！',
    'share.save': '保存结果图片',
    'share.saved': '已保存！',
    'share.text': '我在「你是 Claude 中国用户吗」测试里得了 {score}/100 —— {verdict}！🐶 快来测测你的:',
    'share.to.x': '分享到 X',
    'share.to.weibo': '分享到微博',
    'share.to.telegram': '分享到 Telegram',
    'share.to.facebook': '分享到 Facebook',
    'share.to.linkedin': '分享到 LinkedIn',
    'share.to.reddit': '分享到 Reddit',

    'api.title': '也支持 curl 命令行',
    'api.desc':
      '喜欢终端?请求下面的接口 —— 它会根据你的 IP 归属地 + 请求头估算风险,并按你的 Accept-Language 请求头返回对应语言。',
    'api.ex1': '# 文本报告 —— 跟随 Accept-Language',
    'api.ex2': '# 通过请求头指定语言',
    'api.ex3': '# JSON 输出',

    'ui.claudeBadge': 'Claude 同款',
    'ui.retest': '重新扫描',
    'ui.start': '开始检测',
  },

  ja: {
    'meta.title': 'Fuck Claude | あなたはClaudeの「中国ユーザー」ですか？',
    'meta.description':
      'ブラウザのタイムゾーン、言語、中国語フォント、ロケールをワンクリックでチェック。Claude Codeがあなたを中国ユーザーと判定するかを確認。100%ローカル実行、データはアップロードされません。',

    'nav.title': 'Fuck Claude',
    'credit': 'Claude Fable 5 で構築',

    'hero.title': 'あなたはClaudeの「中国ユーザー」ですか？',
    'hero.badge.local': '100%ローカル検査',
    'hero.badge.noUpload': '結果はアップロードなし',
    'hero.badge.openSource': 'オープンソース',
    'hero.scoreOutOf': '/ 100',

    'band.low.title': '低リスク',
    'band.low.desc': '🐶あなたは「Claude中国ユーザー」ではありません🐶',
    'band.medium.title': '中リスク',
    'band.medium.desc': '🐶あなたはおそらく「Claude中国ユーザー」です🐶',
    'band.high.title': '高リスク',
    'band.high.desc': '🐶あなたは間違いなく「Claude中国ユーザー」です🐶',
    'signal.timezone.name': 'システムタイムゾーン',
    'signal.timezone.desc':
      'Intl.DateTimeFormatがClaude Codeと同じOSタイムゾーンを取得。Asia/Shanghai、Asia/Urumqiなどの中国タイムゾーンと比較。',
    'signal.language.name': 'ブラウザ言語',
    'signal.language.desc':
      'navigator.languages — zh-CN / 簡体字中国語が最上位にあると最高スコア。',
    'signal.fonts.name': 'インストール済み中国語フォント',
    'signal.fonts.desc':
      'Canvas幅測定でMicrosoft YaHeiやPingFang SCなどの簡体字/繁体字中国語フォントを検出。',
    'signal.vendorFonts.name': '中国ベンダーフォント',
    'signal.vendorFonts.desc':
      'CanvasでMiSans、HarmonyOS Sans、OPPO Sans、WPS Founderフォントなどを検出。ヒットは強力なシグナル。',
    'signal.cnBrowser.name': '中国ブラウザ / WebView',
    'signal.cnBrowser.desc':
      'User-AgentとUA-CH brandsをWeChat、QQ、Quark、UC、Baiduなどと照合。',
    'signal.deviceVendor.name': '中国ブランド端末',
    'signal.deviceVendor.desc':
      'UA-CHデバイスモデルとUAをHarmonyOS、Huawei、Xiaomi、OPPO、vivoなどと照合。',
    'signal.intlLocale.name': 'Intlロケール',
    'signal.intlLocale.desc': 'ブラウザが日付/数値フォーマットに使用するロケール。',
    'signal.timezoneOffset.name': 'タイムゾーンオフセット',
    'signal.timezoneOffset.desc': 'getTimezoneOffset()がUTC+8と一致するか。',
    'signal.emoji.name': '絵文字レンダリングスタイル',
    'signal.emoji.desc': 'User-Agentから推測されたOSベンダー。弱い相関のシグナル。',

    'scan.detecting': '検査中',
    'scan.ready': 'スキャン準備完了',
    'result.hitsTitle': '一致したシグナル',
    'result.noHits': '強い中国シグナルは見つかりませんでした。低リスク。',

    'signals.title': '検査対象',
    'signals.sub': '9つのロケールフィンガープリントを重み付けし、0–100のリスクスコアに。',

    'how.title': '仕組み',
    'how.p1':
      'Claude CodeがANTHROPIC_BASE_URL経由でプロキシエンドポイントを指すと、公開リバースエンジニアリングレポートによれば、OSタイムゾーンとプロキシホスト名を読み取り、Unicodeステガノグラフィーでsystem promptに判定結果を隠します。「Today\'s date」行の日付区切り文字と4種類の類似したアポストロフで、あなたが中国ユーザーかどうかをエンコードします。',
    'how.p2':
      'WebページはClaude Codeの全てを読めませんが、主要シグナルは同一です。本ツールは同じOSタイムゾーンを読み取り、さらに8つのブラウザ可視フィンガープリント（UI言語、中国語フォント、中国ベンダーフォント、中国ブラウザ、端末ブランド、Intlロケール、UTC+8オフセット、絵文字スタイル）を加重スコアに加算。スコア≥0.25をヒットとしてカウント。',
    'ui.weight': '重み',

    'faq.title': 'よくある質問',
    'faq.q1': 'Claudeは本当にタイムゾーンをチェックするのですか？',
    'faq.a1':
      '公開リバースエンジニアリングレポートによると、Claude Codeが非公式エンドポイントと通信する際、OSタイムゾーンとプロキシホスト名を読み取り、結果をsystem promptにステガノグラフィーで埋め込みます。このページがIntl.DateTimeFormatで読み取るタイムゾーンは、まさに同じOSタイムゾーンです。',
    'faq.q2': 'このスコアはClaudeが実行する正確なチェックですか？',
    'faq.a2':
      'いいえ。システムタイムゾーンのみがClaudeの報告されたメカニズムと一対一で対応します。他の8つのシグナルは一般的な中国環境のフィンガープリントであり、相関関係はありますが推定値として扱ってください。',
    'faq.q3': 'スコアを下げるにはどうすればいいですか？',
    'faq.a3':
      'OSタイムゾーンをAsia/Shanghaiなどの中国ゾーンから変更し、ブラウザ言語リストの先頭からzh-CNを移動し、ホスト名にフラグ付きドメインやAIラボキーワードを含むプロキシを経由しないようにしてください。',
    'faq.q4': 'データはアップロードされますか？',
    'faq.a4':
      'いいえ。すべての検査はブラウザ内でローカルに実行され、検出されたシグナルが外部に送信されることはありません。サイトは匿名のページビュー統計のため標準的なGoogle Analyticsのみを読み込みます。',

    'privacy.title': 'プライバシー',
    'privacy.body':
      'すべての検査はブラウザ内でローカルに実行されます。スキャン結果がデバイス外に出ることはありません。サイトは匿名ページビュー統計のためGoogle Analyticsのみを読み込みます。',

    'social.x': 'X（Twitter）',
    'social.xiaohongshu': 'Xiaohongshu（RED）',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'アプリでスキャン、またはクリックして開く',

    'footer.disclaimer': '参考用です。公開リバースエンジニアリングレポートに基づき、公式見解や助言ではありません。',
    'footer.license': 'MITライセンスで公開 — 再配布時は元のプロジェクト表示を保持してください。',
    'footer.repo': '元のプロジェクト',

    'share.label': '結果をシェア',
    'share.native': 'シェア',
    'share.copy': 'リンクをコピー',
    'share.copied': 'コピー完了！',
    'share.save': '結果画像を保存',
    'share.saved': '保存完了！',
    'share.text':
      '「Claude中国ユーザー」テストで {score}/100 を獲得 — {verdict}！🐶 あなたもチェック:',
    'share.to.x': 'Xでシェア',
    'share.to.weibo': 'Weiboでシェア',
    'share.to.telegram': 'Telegramでシェア',
    'share.to.facebook': 'Facebookでシェア',
    'share.to.linkedin': 'LinkedInでシェア',
    'share.to.reddit': 'Redditでシェア',

    'api.title': 'curlでも利用可能',
    'api.desc':
      'ターミナルがお好みですか？以下のエンドポイントにアクセス — IPジオロケーションとリクエストヘッダーからリスクを推定し、Accept-Languageヘッダーの言語で応答します。',
    'api.ex1': '# テキストレポート — Accept-Languageに従う',
    'api.ex2': '# ヘッダーで言語を指定',
    'api.ex3': '# JSON出力',

    'ui.claudeBadge': 'Claude同様',
    'ui.retest': '再スキャン',
    'ui.start': 'スキャン開始',
  },

  ko: {
    'meta.title': 'Fuck Claude | 당신은 Claude "중국 사용자"입니까?',
    'meta.description':
      '브라우저 시간대, 언어, 중국어 폰트, 로케일을 원클릭으로 확인하여 Claude Code가 당신을 중국 사용자로 간주하는지 알아보세요. 100% 로컬 실행, 데이터 업로드 없음.',

    'nav.title': 'Fuck Claude',
    'credit': 'Claude Fable 5로 제작',

    'hero.title': '당신은 Claude "중국 사용자"입니까?',
    'hero.badge.local': '100% 로컬 검사',
    'hero.badge.noUpload': '결과 업로드 없음',
    'hero.badge.openSource': '오픈 소스',
    'hero.scoreOutOf': '/ 100',

    'band.low.title': '낮은 위험',
    'band.low.desc': '🐶당신은 "Claude 중국 사용자"가 아닙니다🐶',
    'band.medium.title': '중간 위험',
    'band.medium.desc': '🐶당신은 아마 "Claude 중국 사용자"입니다🐶',
    'band.high.title': '높은 위험',
    'band.high.desc': '🐶당신은 확실히 "Claude 중국 사용자"입니다🐶',
    'signal.timezone.name': '시스템 시간대',
    'signal.timezone.desc':
      'Intl.DateTimeFormat이 Claude Code와 동일한 OS 시간대를 노출합니다. Asia/Shanghai, Asia/Urumqi 등 중국 시간대와 비교합니다.',
    'signal.language.name': '브라우저 언어',
    'signal.language.desc':
      'navigator.languages — zh-CN / 간체 중국어가 목록 상위에 있을수록 높은 점수.',
    'signal.fonts.name': '설치된 중국어 폰트',
    'signal.fonts.desc':
      'Canvas 너비 측정으로 Microsoft YaHei, PingFang SC 등 간체/번체 중국어 폰트 탐지.',
    'signal.vendorFonts.name': '중국 벤더 폰트',
    'signal.vendorFonts.desc':
      'Canvas로 MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder 폰트 등 탐지. 하나라도 발견되면 강력한 신호.',
    'signal.cnBrowser.name': '중국 브라우저 / WebView',
    'signal.cnBrowser.desc':
      'User-Agent 및 UA-CH 브랜드를 WeChat, QQ, Quark, UC, Baidu 등과 매칭.',
    'signal.deviceVendor.name': '중국 브랜드 기기',
    'signal.deviceVendor.desc':
      'UA-CH 기기 모델 및 UA를 HarmonyOS, Huawei, Xiaomi, OPPO, vivo 등과 매칭.',
    'signal.intlLocale.name': 'Intl 로케일',
    'signal.intlLocale.desc': '브라우저가 날짜/숫자 형식에 사용하는 로케일.',
    'signal.timezoneOffset.name': '시간대 오프셋',
    'signal.timezoneOffset.desc': 'getTimezoneOffset()이 UTC+8과 일치하는지 여부.',
    'signal.emoji.name': '이모지 렌더링 스타일',
    'signal.emoji.desc': 'User-Agent에서 추측한 OS 벤더. 약한 상관관계의 신호.',

    'scan.detecting': '확인 중',
    'scan.ready': '스캔 준비 완료',
    'result.hitsTitle': '일치한 신호',
    'result.noHits': '강한 중국 신호가 없습니다. 낮은 위험.',

    'signals.title': '검사 항목',
    'signals.sub': '9가지 로케일 지문을 가중치로 0–100 위험 점수 산출.',

    'how.title': '작동 방식',
    'how.p1':
      'Claude Code가 ANTHROPIC_BASE_URL을 통해 프록시 엔드포인트를 가리키면, 공개 리버스 엔지니어링 보고서에 따르면 OS 시간대와 프록시 호스트명을 읽고 Unicode 스테가노그래피로 system prompt에 결과를 숨깁니다. "Today\'s date" 행의 날짜 구분자와 4가지 유사한 아포스트로피가 중국 사용자 여부를 인코딩합니다.',
    'how.p2':
      '웹 페이지가 Claude Code가 읽는 모든 것을 읽을 수는 없지만, 핵심 신호는 동일합니다. 이 도구는 동일한 OS 시간대를 읽고, 8가지 브라우저 가시 지문(UI 언어, 중국어 폰트, 중국 벤더 폰트, 중국 브라우저, 기기 브랜드, Intl 로케일, UTC+8 오프셋, 이모지 스타일)을 가중 점수에 추가합니다. 점수 ≥0.25는 히트로 간주됩니다.',
    'ui.weight': '가중치',

    'faq.title': '자주 묻는 질문',
    'faq.q1': 'Claude가 정말 제 시간대를 확인하나요?',
    'faq.a1':
      '공개 리버스 엔지니어링 보고서에 따르면, Claude Code가 비공식 엔드포인트와 통신할 때 OS 시간대와 프록시 호스트명을 읽고 결과를 system prompt에 스테가노그래피로 인코딩합니다. 이 페이지가 Intl.DateTimeFormat으로 읽는 시간대는 동일한 OS 시간대입니다.',
    'faq.q2': '이 점수가 Claude가 실행하는 정확한 검사인가요?',
    'faq.a2':
      '아니요. 시스템 시간대만이 Claude의 알려진 메커니즘과 일대일로 매핑됩니다. 나머지 8개 신호는 중국 환경 지문으로 상관관계가 있지만 추정치로 취급해야 합니다.',
    'faq.q3': '점수를 낮추려면 어떻게 해야 하나요?',
    'faq.a3':
      'OS 시간대를 Asia/Shanghai 등 중국 시간대에서 변경하고, 브라우저 언어 목록 상단에서 zh-CN을 제거하며, 호스트명에 플래그된 도메인이나 AI 연구소 키워드가 포함된 프록시를 통해 Claude Code를 라우팅하지 마세요.',
    'faq.q4': '데이터가 업로드되나요?',
    'faq.a4':
      '아니요. 모든 검사는 브라우저에서 로컬로 실행되며, 감지된 신호가 외부로 전송되지 않습니다. 사이트는 익명 페이지뷰 통계를 위해 표준 Google Analytics만 로드합니다.',

    'privacy.title': '개인정보 보호',
    'privacy.body':
      '모든 검사는 브라우저에서 로컬로 실행됩니다. 스캔 결과가 기기를 벗어나지 않습니다. 사이트는 익명 페이지뷰 통계를 위해 Google Analytics만 로드합니다.',

    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': '앱으로 스캔하거나 클릭하여 열기',

    'footer.disclaimer': '참고용입니다. 공개 리버스 엔지니어링 보고서에 기반하며 공식 진술이나 조언이 아닙니다.',
    'footer.license': 'MIT 라이선스로 오픈 소스 — 재배포 시 원본 프로젝트 표시를 유지해야 합니다.',
    'footer.repo': '원본 프로젝트',

    'share.label': '결과 공유',
    'share.native': '공유',
    'share.copy': '링크 복사',
    'share.copied': '복사됨!',
    'share.save': '결과 이미지 저장',
    'share.saved': '저장됨!',
    'share.text':
      '"Claude 중국 사용자" 테스트에서 {score}/100점을 받았습니다 — {verdict}! 🐶 여러분도 확인해보세요:',
    'share.to.x': 'X에 공유',
    'share.to.weibo': 'Weibo에 공유',
    'share.to.telegram': 'Telegram에 공유',
    'share.to.facebook': 'Facebook에 공유',
    'share.to.linkedin': 'LinkedIn에 공유',
    'share.to.reddit': 'Reddit에 공유',

    'api.title': 'curl로도 사용 가능',
    'api.desc':
      '터미널을 선호하시나요? 아래 엔드포인트를 호출하세요 — IP 지리 정보와 요청 헤더로 위험을 추정하고 Accept-Language 헤더의 언어로 응답합니다.',
    'api.ex1': '# 텍스트 보고서 — Accept-Language 따름',
    'api.ex2': '# 헤더로 언어 지정',
    'api.ex3': '# JSON 출력',

    'ui.claudeBadge': 'Claude 동일',
    'ui.retest': '다시 스캔',
    'ui.start': '스캔 시작',
  },

  fr: {
    'meta.title': 'Fuck Claude | Êtes-vous un « utilisateur chinois » de Claude ?',
    'meta.description':
      'Vérifiez en un clic le fuseau horaire, la langue, les polices chinoises et les paramètres régionaux de votre navigateur pour voir si Claude Code vous considérerait comme un utilisateur chinois. 100% local, rien n\'est téléchargé.',

    'nav.title': 'Fuck Claude',
    'credit': 'Construit avec Claude Fable 5',

    'hero.title': 'Êtes-vous un « utilisateur chinois » de Claude ?',
    'hero.badge.local': 'Analyse 100% locale',
    'hero.badge.noUpload': 'Résultats jamais téléchargés',
    'hero.badge.openSource': 'Open source',
    'hero.scoreOutOf': '/ 100',

    'band.low.title': 'Risque faible',
    'band.low.desc': '🐶Vous n\'êtes pas un « utilisateur chinois » Claude🐶',
    'band.medium.title': 'Risque moyen',
    'band.medium.desc': '🐶Vous êtes probablement un « utilisateur chinois » Claude🐶',
    'band.high.title': 'Risque élevé',
    'band.high.desc': '🐶Vous êtes définitivement un « utilisateur chinois » Claude🐶',
    'signal.timezone.name': 'Fuseau horaire système',
    'signal.timezone.desc':
      'Intl.DateTimeFormat expose le même fuseau horaire OS que Claude Code lit ; comparé à Asia/Shanghai, Asia/Urumqi et autres fuseaux chinois.',
    'signal.language.name': 'Langue du navigateur',
    'signal.language.desc':
      'navigator.languages — zh-CN / chinois simplifié en tête de liste donne le score le plus élevé.',
    'signal.fonts.name': 'Polices chinoises installées',
    'signal.fonts.desc':
      'Détection par largeur Canvas pour les polices chinoises simplifiées/traditionnelles comme Microsoft YaHei et PingFang SC.',
    'signal.vendorFonts.name': 'Polices de fournisseurs chinois',
    'signal.vendorFonts.desc':
      'Détection Canvas des polices des fournisseurs chinois — MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder. Tout résultat est un indicateur fort.',
    'signal.cnBrowser.name': 'Navigateur / WebView chinois',
    'signal.cnBrowser.desc':
      'User-Agent et marques UA-CH comparés à WeChat, QQ, Quark, UC, Baidu et autres navigateurs chinois ou WebViews intégrés.',
    'signal.deviceVendor.name': 'Appareil de marque chinoise',
    'signal.deviceVendor.desc':
      'Modèle d\'appareil UA-CH et UA comparés à HarmonyOS, Huawei, Xiaomi, OPPO, vivo et autres marques chinoises.',
    'signal.intlLocale.name': 'Paramètres régionaux Intl',
    'signal.intlLocale.desc':
      'Les paramètres régionaux que votre navigateur utilise pour le formatage des dates et des nombres.',
    'signal.timezoneOffset.name': 'Décalage horaire',
    'signal.timezoneOffset.desc': 'Si getTimezoneOffset() est égal à UTC+8.',
    'signal.emoji.name': 'Style de rendu des emojis',
    'signal.emoji.desc':
      'Fournisseur OS deviné à partir du user-agent ; un signal faible et peu corrélé.',

    'scan.detecting': 'Vérification',
    'scan.ready': 'Prêt à analyser',
    'result.hitsTitle': 'Signaux correspondants',
    'result.noHits': 'Aucun signal chinois fort détecté. Risque faible.',

    'signals.title': 'Ce qui est analysé',
    'signals.sub': 'Neuf empreintes de paramètres régionaux, pondérées en un score de risque de 0 à 100.',

    'how.title': 'Comment ça fonctionne',
    'how.p1':
      'Lorsque Claude Code est pointé vers un endpoint proxy via ANTHROPIC_BASE_URL, des rapports de rétro-ingénierie publique ont révélé qu\'il lit le fuseau horaire de votre OS et le nom d\'hôte du proxy, puis cache le verdict dans le prompt système avec de la stéganographie Unicode — le séparateur de date et quatre apostrophes similaires dans la ligne « Today\'s date » encodent si vous ressemblez à un utilisateur chinois.',
    'how.p2':
      'Une page web ne peut pas lire tout ce que Claude Code peut voir, mais le signal clé est identique : cet outil lit le même fuseau horaire OS, puis ajoute huit autres empreintes visibles par le navigateur — langue UI, polices chinoises, polices de fournisseurs chinois, navigateurs chinois, marque de l\'appareil, locale Intl, décalage UTC+8 et style d\'emoji — dans un score pondéré. Les signaux avec un score ≥0,25 comptent comme des correspondances.',
    'ui.weight': 'Poids',

    'faq.title': 'FAQ',
    'faq.q1': 'Claude vérifie-t-il vraiment mon fuseau horaire ?',
    'faq.a1':
      'Selon des rapports de rétro-ingénierie publique, lorsque Claude Code communique avec un endpoint non officiel, il lit le fuseau horaire OS et le nom d\'hôte du proxy, puis encode le résultat dans son prompt système par stéganographie. Le fuseau horaire que cette page lit via Intl.DateTimeFormat est exactement le même fuseau horaire OS.',
    'faq.q2': 'Ce score est-il la vérification exacte que Claude exécute ?',
    'faq.a2':
      'Non. Seul le fuseau horaire système correspond directement au mécanisme rapporté de Claude. Les huit autres signaux sont des empreintes courantes d\'environnement chinois qui corrèlent avec lui, donc traitez le score comme une estimation, pas un verdict.',
    'faq.q3': 'Comment puis-je réduire mon score ?',
    'faq.a3':
      'Changez votre fuseau horaire OS des fuseaux chinois comme Asia/Shanghai, retirez zh-CN du haut de votre liste de langues de navigateur, et évitez d\'acheminer Claude Code via des proxys dont les noms d\'hôte contiennent des domaines signalés ou des mots-clés de laboratoires d\'IA.',
    'faq.q4': 'Des données sont-elles téléchargées ?',
    'faq.a4':
      'Non. Chaque vérification s\'exécute localement dans votre navigateur et aucun des signaux détectés n\'est jamais envoyé. Le site charge uniquement Google Analytics standard pour des statistiques anonymes de pages vues.',

    'privacy.title': 'Confidentialité',
    'privacy.body':
      'Chaque vérification s\'exécute localement dans votre navigateur — vos résultats d\'analyse ne quittent jamais votre appareil. Le site charge uniquement Google Analytics pour des statistiques anonymes de pages vues.',

    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'Scannez avec l\'appli, ou cliquez pour ouvrir',

    'footer.disclaimer': 'Pour référence uniquement, basé sur des rapports de rétro-ingénierie publique. Ni déclaration officielle ni conseil.',
    'footer.license': 'Distribué sous licence MIT — les redistributions doivent conserver la notice du projet original.',
    'footer.repo': 'Projet original',

    'share.label': 'Partagez votre résultat',
    'share.native': 'Partager',
    'share.copy': 'Copier le lien',
    'share.copied': 'Copié !',
    'share.save': 'Enregistrer l\'image',
    'share.saved': 'Enregistré !',
    'share.text':
      'J\'ai obtenu {score}/100 au test « Suis-je un utilisateur chinois Claude ? » — {verdict} ! 🐶 Faites le vôtre :',
    'share.to.x': 'Partager sur X',
    'share.to.weibo': 'Partager sur Weibo',
    'share.to.telegram': 'Partager sur Telegram',
    'share.to.facebook': 'Partager sur Facebook',
    'share.to.linkedin': 'Partager sur LinkedIn',
    'share.to.reddit': 'Partager sur Reddit',

    'api.title': 'Également disponible via curl',
    'api.desc':
      'Vous préférez le terminal ? Appelez l\'endpoint ci-dessous — il estime votre risque à partir de votre géolocalisation IP et de vos en-têtes de requête, et répond dans la langue de votre en-tête Accept-Language.',
    'api.ex1': '# Rapport texte — suit votre Accept-Language',
    'api.ex2': '# Forcer une langue via l\'en-tête',
    'api.ex3': '# Sortie JSON',

    'ui.claudeBadge': 'Claude identique',
    'ui.retest': 'Analyser à nouveau',
    'ui.start': 'Lancer l\'analyse',
  },

  de: {
    'meta.title': 'Fuck Claude | Sind Sie ein Claude "China-Benutzer"?',
    'meta.description':
      'Überprüfen Sie mit einem Klick Ihre Browser-Zeitzone, Sprache, chinesische Schriftarten und Gebietsschema, um zu sehen, ob Claude Code Sie als China-Benutzer einstufen würde. 100% lokal, nichts wird hochgeladen.',

    'nav.title': 'Fuck Claude',
    'credit': 'Erstellt mit Claude Fable 5',

    'hero.title': 'Sind Sie ein Claude "China-Benutzer"?',
    'hero.badge.local': '100% lokaler Scan',
    'hero.badge.noUpload': 'Ergebnisse werden nie hochgeladen',
    'hero.badge.openSource': 'Open Source',
    'hero.scoreOutOf': '/ 100',

    'band.low.title': 'Niedriges Risiko',
    'band.low.desc': '🐶Sie sind kein „Claude China-Benutzer"🐶',
    'band.medium.title': 'Mittleres Risiko',
    'band.medium.desc': '🐶Sie sind wahrscheinlich ein „Claude China-Benutzer"🐶',
    'band.high.title': 'Hohes Risiko',
    'band.high.desc': '🐶Sie sind definitiv ein „Claude China-Benutzer"🐶',
    'signal.timezone.name': 'Systemzeitzone',
    'signal.timezone.desc':
      'Intl.DateTimeFormat zeigt dieselbe OS-Zeitzone an, die Claude Code liest; verglichen mit Asia/Shanghai, Asia/Urumqi und anderen China-Zonen.',
    'signal.language.name': 'Browsersprache',
    'signal.language.desc':
      'navigator.languages — zh-CN / vereinfachtes Chinesisch an erster Stelle ergibt die höchste Punktzahl.',
    'signal.fonts.name': 'Installierte chinesische Schriftarten',
    'signal.fonts.desc':
      'Canvas-Breitenmessung für vereinfachte/traditionelle chinesische Schriftarten wie Microsoft YaHei und PingFang SC.',
    'signal.vendorFonts.name': 'Chinesische Hersteller-Schriftarten',
    'signal.vendorFonts.desc':
      'Canvas-Erkennung von Schriftarten chinesischer Hersteller/Software — MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder. Jeder Treffer ist ein starkes Indiz.',
    'signal.cnBrowser.name': 'Chinesischer Browser / WebView',
    'signal.cnBrowser.desc':
      'User-Agent und UA-CH-Marken abgeglichen mit WeChat, QQ, Quark, UC, Baidu und anderen chinesischen Browsern oder In-App-WebViews.',
    'signal.deviceVendor.name': 'Chinesisches Markengerät',
    'signal.deviceVendor.desc':
      'UA-CH-Gerätemodell und UA abgeglichen mit HarmonyOS, Huawei, Xiaomi, OPPO, vivo und anderen chinesischen Marken.',
    'signal.intlLocale.name': 'Intl-Gebietsschema',
    'signal.intlLocale.desc':
      'Das Gebietsschema, das Ihr Browser für Datums- und Zahlenformatierung verwendet.',
    'signal.timezoneOffset.name': 'Zeitzonen-Offset',
    'signal.timezoneOffset.desc': 'Ob getTimezoneOffset() gleich UTC+8 ist.',
    'signal.emoji.name': 'Emoji-Darstellungsstil',
    'signal.emoji.desc':
      'OS-Anbieter vom User-Agent abgeleitet; ein schwaches, lose korreliertes Signal.',

    'scan.detecting': 'Prüfe',
    'scan.ready': 'Bereit zum Scannen',
    'result.hitsTitle': 'Übereinstimmende Signale',
    'result.noHits': 'Keine starken China-Signale gefunden. Niedriges Risiko.',

    'signals.title': 'Was wird gescannt',
    'signals.sub': 'Neun Gebietsschema-Fingerabdrücke, gewichtet zu einem Risikowert von 0–100.',

    'how.title': 'Wie die Prüfung funktioniert',
    'how.p1':
      'Wenn Claude Code über ANTHROPIC_BASE_URL auf einen Proxy-Endpunkt zeigt, hat die öffentliche Reverse-Engineering-Analyse ergeben, dass es Ihre OS-Zeitzone und den Proxy-Hostnamen liest und das Ergebnis dann per Unicode-Steganographie im System-Prompt versteckt — das Datumstrennzeichen und vier ähnliche Apostrophe in der Zeile "Today\'s date" kodieren, ob Sie wie ein China-Benutzer aussehen.',
    'how.p2':
      'Eine Webseite kann nicht alles lesen, was Claude Code kann, aber das Schlüsselsignal ist identisch: Dieses Tool liest dieselbe OS-Zeitzone und fügt acht weitere browser-sichtbare Fingerabdrücke — UI-Sprache, chinesische Schriftarten, chinesische Hersteller-Schriftarten, chinesische Browser, Gerätemarke, Intl-Gebietsschema, UTC+8-Offset und Emoji-Stil — zu einem gewichteten Score hinzu. Signale mit ≥0,25 zählen als Treffer.',
    'ui.weight': 'Gewicht',

    'faq.title': 'FAQ',
    'faq.q1': 'Überprüft Claude wirklich meine Zeitzone?',
    'faq.a1':
      'Laut öffentlichen Reverse-Engineering-Berichten liest Claude Code bei der Kommunikation mit einem nicht-offiziellen Endpunkt die OS-Zeitzone und den Proxy-Hostnamen und kodiert das Ergebnis per Steganographie in seinen System-Prompt. Die Zeitzone, die diese Seite über Intl.DateTimeFormat liest, ist genau dieselbe OS-Zeitzone.',
    'faq.q2': 'Ist dieser Score die exakte Prüfung, die Claude durchführt?',
    'faq.a2':
      'Nein. Nur die Systemzeitzone bildet eins-zu-eins auf Claudes berichteten Mechanismus ab. Die anderen acht Signale sind häufige chinesische Umgebungs-Fingerabdrücke, die damit korrelieren, also behandeln Sie den Score als Schätzung, nicht als Urteil.',
    'faq.q3': 'Wie kann ich meinen Score senken?',
    'faq.a3':
      'Ändern Sie Ihre OS-Zeitzone von China-Zonen wie Asia/Shanghai, entfernen Sie zh-CN von der Spitze Ihrer Browsersprachenliste und vermeiden Sie es, Claude Code über Proxys zu leiten, deren Hostnamen markierte Domains oder AI-Labore-Schlüsselwörter enthalten.',
    'faq.q4': 'Werden Daten hochgeladen?',
    'faq.a4':
      'Nein. Jede Prüfung läuft lokal in Ihrem Browser und keines der erkannten Signale wird jemals irgendwohin gesendet. Die Seite lädt nur standardmäßiges Google Analytics für anonyme Seitenaufruf-Statistiken.',

    'privacy.title': 'Datenschutz',
    'privacy.body':
      'Jede Prüfung läuft lokal in Ihrem Browser — Ihre Scan-Ergebnisse verlassen niemals Ihr Gerät. Die Seite lädt nur Google Analytics für anonyme Seitenaufruf-Statistiken.',

    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'Mit der App scannen oder klicken zum Öffnen',

    'footer.disclaimer': 'Nur zu Referenzzwecken, basierend auf öffentlichen Reverse-Engineering-Berichten. Keine offizielle Stellungnahme oder Beratung.',
    'footer.license': 'Unter der MIT-Lizenz veröffentlicht — Weiterverbreitungen müssen den ursprünglichen Projektvermerk enthalten.',
    'footer.repo': 'Original-Projekt',

    'share.label': 'Teilen Sie Ihr Ergebnis',
    'share.native': 'Teilen',
    'share.copy': 'Link kopieren',
    'share.copied': 'Kopiert!',
    'share.save': 'Ergebnisbild speichern',
    'share.saved': 'Gespeichert!',
    'share.text':
      'Ich habe {score}/100 beim „Bin ich ein Claude China-Benutzer?"-Test erreicht — {verdict}! 🐶 Machen Sie den Test:',
    'share.to.x': 'Auf X teilen',
    'share.to.weibo': 'Auf Weibo teilen',
    'share.to.telegram': 'Auf Telegram teilen',
    'share.to.facebook': 'Auf Facebook teilen',
    'share.to.linkedin': 'Auf LinkedIn teilen',
    'share.to.reddit': 'Auf Reddit teilen',

    'api.title': 'Auch über curl verfügbar',
    'api.desc':
      'Lieber das Terminal? Rufen Sie den Endpunkt unten auf — er schätzt Ihr Risiko anhand Ihrer IP-Geodaten und Request-Header und antwortet in der Sprache Ihres Accept-Language-Headers.',
    'api.ex1': '# Textbericht — folgt Ihrem Accept-Language',
    'api.ex2': '# Sprache per Header erzwingen',
    'api.ex3': '# JSON-Ausgabe',

    'ui.claudeBadge': 'Claude gleich',
    'ui.retest': 'Erneut scannen',
    'ui.start': 'Scan starten',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  const table = ui[lang] ?? ui[defaultLang];
  return function t(key: string): string {
    return (
      (table as Record<string, string>)[key] ??
      (ui[defaultLang] as Record<string, string>)[key] ??
      key
    );
  };
}

export function localePath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg && seg in languages) return seg as Lang;
  return defaultLang;
}

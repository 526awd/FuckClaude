export const languages = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  pt: 'Português',
  ru: 'Русский',
  ar: 'العربية',
  hi: 'हिन्दी',
  it: 'Italiano',
  nl: 'Nederlands',
  pl: 'Polski',
  tr: 'Türkçe',
  vi: 'Tiếng Việt',
  th: 'ไทย',
  id: 'Bahasa Indonesia',
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

  es: {
    'meta.title': 'Fuck Claude | ¿Eres un "usuario chino" de Claude?',
    'meta.description':
      'Verifica con un clic la zona horaria, idioma, fuentes chinas y configuración regional de tu navegador para saber si Claude Code te marcaría como usuario chino. 100% local, nada se sube.',
    'nav.title': 'Fuck Claude',
    'credit': 'Construido con Claude Fable 5',
    'hero.title': '¿Eres un "usuario chino" de Claude?',
    'hero.badge.local': 'Escaneo 100% local',
    'hero.badge.noUpload': 'Resultados nunca subidos',
    'hero.badge.openSource': 'Código abierto',
    'hero.scoreOutOf': '/ 100',
    'band.low.title': 'Riesgo bajo',
    'band.low.desc': '🐶No eres un "usuario chino de Claude"🐶',
    'band.medium.title': 'Riesgo medio',
    'band.medium.desc': '🐶Probablemente eres un "usuario chino de Claude"🐶',
    'band.high.title': 'Riesgo alto',
    'band.high.desc': '🐶Definitivamente eres un "usuario chino de Claude"🐶',
    'signal.timezone.name': 'Zona horaria del sistema',
    'signal.timezone.desc':
      'Intl.DateTimeFormat expone la misma zona horaria del SO que lee Claude Code; comparada con Asia/Shanghai, Asia/Urumqi y otras zonas chinas.',
    'signal.language.name': 'Idioma del navegador',
    'signal.language.desc':
      'navigator.languages — zh-CN / Chino simplificado en la parte superior obtiene la puntuación más alta.',
    'signal.fonts.name': 'Fuentes chinas instaladas',
    'signal.fonts.desc':
      'Detección por ancho de Canvas para fuentes chinas simplificadas/tradicional como Microsoft YaHei y PingFang SC.',
    'signal.vendorFonts.name': 'Fuentes de proveedores chinos',
    'signal.vendorFonts.desc':
      'Detección Canvas de fuentes de proveedores chinos — MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder. Cualquier coincidencia es una señal fuerte.',
    'signal.cnBrowser.name': 'Navegador / WebView chino',
    'signal.cnBrowser.desc':
      'User-Agent y marcas UA-CH comparados con WeChat, QQ, Quark, UC, Baidu y otros navegadores chinos o WebViews integrados.',
    'signal.deviceVendor.name': 'Dispositivo de marca china',
    'signal.deviceVendor.desc':
      'Modelo de dispositivo UA-CH y UA comparados con HarmonyOS, Huawei, Xiaomi, OPPO, vivo y otras marcas chinas.',
    'signal.intlLocale.name': 'Configuración regional Intl',
    'signal.intlLocale.desc':
      'La configuración regional que tu navegador usa para formatear fechas y números.',
    'signal.timezoneOffset.name': 'Desfase horario',
    'signal.timezoneOffset.desc': 'Si getTimezoneOffset() es igual a UTC+8.',
    'signal.emoji.name': 'Estilo de renderizado de emojis',
    'signal.emoji.desc':
      'Proveedor del SO deducido del user-agent; una señal débil y poco correlacionada.',
    'scan.detecting': 'Verificando',
    'scan.ready': 'Listo para escanear',
    'result.hitsTitle': 'Señales coincidentes',
    'result.noHits': 'No se encontraron señales fuertes de China. Riesgo bajo.',
    'signals.title': 'Qué se escanea',
    'signals.sub': 'Nueve huellas de configuración regional, ponderadas en un puntaje de riesgo de 0–100.',
    'how.title': 'Cómo funciona la verificación',
    'how.p1':
      'Cuando Claude Code apunta a un endpoint proxy a través de ANTHROPIC_BASE_URL, informes públicos de ingeniería inversa encontraron que lee la zona horaria del SO y el nombre del proxy, luego oculta el veredicto dentro del prompt del sistema con esteganografía Unicode — el separador de fecha y cuatro apóstrofos similares en la línea "Today\'s date" codifican si pareces un usuario chino.',
    'how.p2':
      'Una página web no puede leer todo lo que Claude Code puede, pero la señal clave es idéntica: esta herramienta lee la misma zona horaria del SO, luego agrega ocho huellas más visibles por el navegador — idioma UI, fuentes chinas, fuentes de proveedores chinos, navegadores chinos, marca del dispositivo, configuración regional Intl, desfase UTC+8 y estilo de emoji — en un puntaje ponderado. Señales con puntaje ≥0.25 cuentan como coincidencias.',
    'ui.weight': 'Peso',
    'faq.title': 'Preguntas frecuentes',
    'faq.q1': '¿Claude realmente verifica mi zona horaria?',
    'faq.a1':
      'Según informes públicos de ingeniería inversa, cuando Claude Code se comunica con un endpoint no oficial, lee la zona horaria del SO y el nombre del proxy, y codifica el resultado en su prompt del sistema mediante esteganografía. La zona horaria que esta página lee a través de Intl.DateTimeFormat es exactamente la misma zona horaria del SO.',
    'faq.q2': '¿Esta puntuación es la verificación exacta que ejecuta Claude?',
    'faq.a2':
      'No. Solo la zona horaria del sistema corresponde uno a uno con el mecanismo reportado de Claude. Las otras ocho señales son huellas comunes del entorno chino que se correlacionan con ella, así que trata la puntuación como una estimación, no como un veredicto.',
    'faq.q3': '¿Cómo puedo reducir mi puntuación?',
    'faq.a3':
      'Cambia tu zona horaria del SO fuera de zonas chinas como Asia/Shanghai, mueve zh-CN de la parte superior de tu lista de idiomas del navegador, y evita enrutar Claude Code a través de proxies cuyos nombres de dominio contengan dominios marcados o palabras clave de laboratorios de IA.',
    'faq.q4': '¿Se suben datos?',
    'faq.a4':
      'No. Cada verificación se ejecuta localmente en tu navegador y ninguna de las señales detectadas se envía nunca. El sitio solo carga Google Analytics estándar para estadísticas anónimas de visitas.',
    'privacy.title': 'Privacidad',
    'privacy.body':
      'Cada verificación se ejecuta localmente en tu navegador — tus resultados de escaneo nunca salen de tu dispositivo. El sitio solo carga Google Analytics para estadísticas anónimas de visitas.',
    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'Escanea con la app o haz clic para abrir',
    'footer.disclaimer':
      'Solo para referencia, basado en informes públicos de ingeniería inversa. No es una declaración oficial ni consejo.',
    'footer.license':
      'Distribuido bajo licencia MIT — las redistribuciones deben mantener el aviso del proyecto original.',
    'footer.repo': 'Proyecto original',
    'share.label': 'Comparte tu resultado',
    'share.native': 'Compartir',
    'share.copy': 'Copiar enlace',
    'share.copied': '¡Copiado!',
    'share.save': 'Guardar imagen del resultado',
    'share.saved': '¡Guardado!',
    'share.text':
      'Obtuve {score}/100 en la prueba "¿Soy un usuario chino de Claude?" — ¡{verdict}! 🐶 Comprueba el tuyo:',
    'share.to.x': 'Compartir en X',
    'share.to.weibo': 'Compartir en Weibo',
    'share.to.telegram': 'Compartir en Telegram',
    'share.to.facebook': 'Compartir en Facebook',
    'share.to.linkedin': 'Compartir en LinkedIn',
    'share.to.reddit': 'Compartir en Reddit',
    'api.title': 'También disponible con curl',
    'api.desc':
      '¿Prefieres la terminal? Usa el endpoint a continuación — estima tu riesgo a partir de tu geolocalización IP + cabeceras de solicitud, y responde en el idioma de tu cabecera Accept-Language.',
    'api.ex1': '# Informe de texto — sigue tu Accept-Language',
    'api.ex2': '# Forzar idioma mediante cabecera',
    'api.ex3': '# Salida JSON',
    'ui.claudeBadge': 'Claude Same',
    'ui.retest': 'Escanear de nuevo',
    'ui.start': 'Iniciar escaneo',
  },

  pt: {
    'meta.title': 'Fuck Claude | Você é um "usuário chinês" do Claude?',
    'meta.description':
      'Verifique com um clique o fuso horário, idioma, fontes chinesas e configuração regional do seu navegador para saber se o Claude Code o marcaria como usuário chinês. 100% local, nada é enviado.',
    'nav.title': 'Fuck Claude',
    'credit': 'Construído com Claude Fable 5',
    'hero.title': 'Você é um "usuário chinês" do Claude?',
    'hero.badge.local': 'Verificação 100% local',
    'hero.badge.noUpload': 'Resultados nunca enviados',
    'hero.badge.openSource': 'Código aberto',
    'hero.scoreOutOf': '/ 100',
    'band.low.title': 'Risco baixo',
    'band.low.desc': '🐶Você não é um "usuário chinês do Claude"🐶',
    'band.medium.title': 'Risco médio',
    'band.medium.desc': '🐶Você provavelmente é um "usuário chinês do Claude"🐶',
    'band.high.title': 'Risco alto',
    'band.high.desc': '🐶Você definitivamente é um "usuário chinês do Claude"🐶',
    'signal.timezone.name': 'Fuso horário do sistema',
    'signal.timezone.desc':
      'Intl.DateTimeFormat expõe o mesmo fuso horário do SO que o Claude Code lê; comparado com Asia/Shanghai, Asia/Urumqi e outros fuseos chineses.',
    'signal.language.name': 'Idioma do navegador',
    'signal.language.desc':
      'navigator.languages — zh-CN / Chinês simplificado no topo da lista obtém a pontuação mais alta.',
    'signal.fonts.name': 'Fontes chinesas instaladas',
    'signal.fonts.desc':
      'Detecção por largura de Canvas para fontes chinesas simplificadas/tradicional como Microsoft YaHei e PingFang SC.',
    'signal.vendorFonts.name': 'Fontes de fornecedores chineses',
    'signal.vendorFonts.desc':
      'Detecção Canvas de fontes de fornecedores chineses — MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder. Qualquer correspondência é um sinal forte.',
    'signal.cnBrowser.name': 'Navegador / WebView chinês',
    'signal.cnBrowser.desc':
      'User-Agent e marcas UA-CH comparados com WeChat, QQ, Quark, UC, Baidu e outros navegadores chineses ou WebViews integrados.',
    'signal.deviceVendor.name': 'Dispositivo de marca chinesa',
    'signal.deviceVendor.desc':
      'Modelo de dispositivo UA-CH e UA comparados com HarmonyOS, Huawei, Xiaomi, OPPO, vivo e outras marques chinesas.',
    'signal.intlLocale.name': 'Configuração regional Intl',
    'signal.intlLocale.desc':
      'A configuração regional que seu navegador usa para formatação de datas e números.',
    'signal.timezoneOffset.name': 'Deslocamento de fuso horário',
    'signal.timezoneOffset.desc': 'Se getTimezoneOffset() é igual a UTC+8.',
    'signal.emoji.name': 'Estilo de renderização de emojis',
    'signal.emoji.desc':
      'Fornecedor do SO deduzido do user-agent; um sinal fraco e pouco correlacionado.',
    'scan.detecting': 'Verificando',
    'scan.ready': 'Pronto para escanear',
    'result.hitsTitle': 'Sinais correspondentes',
    'result.noHits': 'Nenhum sinal forte da China encontrado. Risco baixo.',
    'signals.title': 'O que é escaneado',
    'signals.sub': 'Nove impressões de configuração regional, ponderadas em uma pontuação de risco de 0–100.',
    'how.title': 'Como a verificação funciona',
    'how.p1':
      'Quando o Claude Code aponta para um endpoint proxy através do ANTHROPIC_BASE_URL, relatórios públicos de engenharia reversa descobriram que ele lê o fuso horário do SO e o nome do proxy, depois esconde o veredito dentro do prompt do sistema com esteganografia Unicode — o separador de data e quatro apóstrofos semelhantes na linha "Today\'s date" codificam se você parece um usuário chinês.',
    'how.p2':
      'Uma página web não pode ler tudo que o Claude Code pode, mas o sinal chave é idêntico: esta ferramenta lê o mesmo fuso horário do SO, depois adiciona oito impressões mais visíveis pelo navegador — idioma UI, fontes chinesas, fontes de fornecedores chineses, navegadores chineses, marca do dispositivo, configuração regional Intl, deslocamento UTC+8 e estilo de emoji — em uma pontuação ponderada. Sinais com pontuação ≥0.25 contam como correspondências.',
    'ui.weight': 'Peso',
    'faq.title': 'Perguntas frequentes',
    'faq.q1': 'O Claude realmente verifica meu fuso horário?',
    'faq.a1':
      'De acordo com relatórios públicos de engenharia reversa, quando o Claude Code se comunica com um endpoint não oficial, lê o fuso horário do SO e o nome do proxy, e codifica o resultado em seu prompt do sistema mediante esteganografia. O fuso horário que esta página lê através do Intl.DateTimeFormat é exatamente o mesmo fuso horário do SO.',
    'faq.q2': 'Esta pontuação é a verificação exata que o Claude executa?',
    'faq.a2':
      'Não. Apenas o fuso horário do sistema corresponde um a um com o mecanismo reportado do Claude. Os outros oito sinais são impressões comuns do ambiente chinês que se correlacionam com ele, então trate a pontuação como uma estimativa, não como um veredito.',
    'faq.q3': 'Como posso reduzir minha pontuação?',
    'faq.a3':
      'Mude o fuso horário do SO para fora de zonas chinas como Asia/Shanghai, mova zh-CN do topo da sua lista de idiomas do navegador, e evite rotear o Claude Code por proxies cujos nomes de domínio contenham domínios sinalizados ou palavras-chave de laboratórios de IA.',
    'faq.q4': 'Dados são enviados?',
    'faq.a4':
      'Não. Cada verificação é executada localmente no navegador e nenhum dos sinais detectados é enviado. O site apenas carrega o Google Analytics padrão para estatísticas anônimas de visitas.',
    'privacy.title': 'Privacidade',
    'privacy.body':
      'Cada verificação é executada localmente no seu navegador — seus resultados de escaneamento nunca saem do seu dispositivo. O site apenas carrega o Google Analytics para estatísticas anônimas de visitas.',
    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'Escaneie com o app ou clique para abrir',
    'footer.disclaimer':
      'Apenas para referência, baseado em relatórios públicos de engenharia reversa. Não é uma declaração oficial nem conselho.',
    'footer.license':
      'Distribuído sob licença MIT — redistribuições devem manter o aviso do projeto original.',
    'footer.repo': 'Projeto original',
    'share.label': 'Compartilhe seu resultado',
    'share.native': 'Compartilhar',
    'share.copy': 'Copiar link',
    'share.copied': 'Copiado!',
    'share.save': 'Salvar imagem do resultado',
    'share.saved': 'Salvo!',
    'share.text':
      'Obtive {score}/100 no teste "Sou um usuário chinês do Claude?" — {verdict}! 🐶 Verifique o seu:',
    'share.to.x': 'Compartilhar no X',
    'share.to.weibo': 'Compartilhar no Weibo',
    'share.to.telegram': 'Compartilhar no Telegram',
    'share.to.facebook': 'Compartilhar no Facebook',
    'share.to.linkedin': 'Compartilhar no LinkedIn',
    'share.to.reddit': 'Compartilhar no Reddit',
    'api.title': 'Também disponível com curl',
    'api.desc':
      'Prefere o terminal? Use o endpoint abaixo — estima seu risco a partir da geolocalização do IP + cabeçalhos da requisição, e responde no idioma do seu cabeçalho Accept-Language.',
    'api.ex1': '# Relatório de texto — segue seu Accept-Language',
    'api.ex2': '# Forçar idioma via cabeçalho',
    'api.ex3': '# Saída JSON',
    'ui.claudeBadge': 'Claude Same',
    'ui.retest': 'Escanear novamente',
    'ui.start': 'Iniciar verificação',
  },

  ru: {
    'meta.title': 'Fuck Claude | Вы «китайский пользователь» Claude?',
    'meta.description':
      'Проверьте за один клик часовой пояс, язык, китайские шрифты и региональные настройки вашего браузера, чтобы узнать, пометит ли Claude Code вас как китайского пользователя. 100% локально, ничего не загружается.',
    'nav.title': 'Fuck Claude',
    'credit': 'Создано с Claude Fable 5',
    'hero.title': 'Вы «китайский пользователь» Claude?',
    'hero.badge.local': '100% локальное сканирование',
    'hero.badge.noUpload': 'Результаты никогда не загружаются',
    'hero.badge.openSource': 'Открытый код',
    'hero.scoreOutOf': '/ 100',
    'band.low.title': 'Низкий риск',
    'band.low.desc': '🐶Вы не «китайский пользователь Claude»🐶',
    'band.medium.title': 'Средний риск',
    'band.medium.desc': '🐶Вы, вероятно, «китайский пользователь Claude»🐶',
    'band.high.title': 'Высокий риск',
    'band.high.desc': '🐶Вы определённо «китайский пользователь Claude»🐶',
    'signal.timezone.name': 'Часовой пояс системы',
    'signal.timezone.desc':
      'Intl.DateTimeFormat показывает тот же часовой пояс ОС, который читает Claude Code; сравнивается с Asia/Shanghai, Asia/Urumqi и другими китайскими часовыми поясами.',
    'signal.language.name': 'Язык браузера',
    'signal.language.desc':
      'navigator.languages — zh-CN / Упрощённый китайский в начале списка даёт наивысший балл.',
    'signal.fonts.name': 'Установленные китайские шрифты',
    'signal.fonts.desc':
      'Определение по ширине Canvas для упрощённых/традиционных китайских шрифтов, таких как Microsoft YaHei и PingFang SC.',
    'signal.vendorFonts.name': 'Шрифты китайских производителей',
    'signal.vendorFonts.desc':
      'Определение Canvas шрифтов китайских производителей — MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder. Любое совпадение является сильным сигналом.',
    'signal.cnBrowser.name': 'Китайский браузер / WebView',
    'signal.cnBrowser.desc':
      'User-Agent и бренды UA-CH сравниваются с WeChat, QQ, Quark, UC, Baidu и другими китайскими браузерами или встроенными WebView.',
    'signal.deviceVendor.name': 'Устройство китайского бренда',
    'signal.deviceVendor.desc':
      'Модель устройства UA-CH и UA сравниваются с HarmonyOS, Huawei, Xiaomi, OPPO, vivo и другими китайскими брендами.',
    'signal.intlLocale.name': 'Региональные настройки Intl',
    'signal.intlLocale.desc':
      'Региональные настройки, которые ваш браузер использует для форматирования дат и чисел.',
    'signal.timezoneOffset.name': 'Смещение часового пояса',
    'signal.timezoneOffset.desc': 'Равен ли getTimezoneOffset() UTC+8.',
    'signal.emoji.name': 'Стиль отображения эмодзи',
    'signal.emoji.desc':
      'Поставщик ОС, определённый по user-agent; слабый, слабо коррелированный сигнал.',
    'scan.detecting': 'Проверка',
    'scan.ready': 'Готово к сканированию',
    'result.hitsTitle': 'Совпавшие сигналы',
    'result.noHits': 'Сильные китайские сигналы не обнаружены. Низкий риск.',
    'signals.title': 'Что сканируется',
    'signals.sub': 'Девять отпечатков региональных настроек, взвешенных в оценку риска 0–100.',
    'how.title': 'Как работает проверка',
    'how.p1':
      'Когда Claude Code указывает на прокси-эндпоинт через ANTHROPIC_BASE_URL, публичные отчёты реверс-инженерии обнаружили, что он читает часовой пояс ОС и имя прокси, затем скрывает вердикт в системном промпте с помощью стеганографии Unicode — разделитель даты и четыре похожих апострофа в строке «Today\'s date» кодируют, похожи ли вы на китайского пользователя.',
    'how.p2':
      'Веб-страница не может прочитать всё, что может Claude Code, но ключевой сигнал идентичен: этот инструмент читает тот же часовой пояс ОС, затем добавляет восемь других отпечатков, видимых браузером — язык интерфейса, китайские шрифты, шрифты китайских производителей, китайские браузеры, бренд устройства, региональные настройки Intl, смещение UTC+8 и стиль эмодзи — в взвешенную оценку. Сигналы с оценкой ≥0.25 считаются совпадениями.',
    'ui.weight': 'Вес',
    'faq.title': 'Часто задаваемые вопросы',
    'faq.q1': 'Действительно ли Claude проверяет мой часовой пояс?',
    'faq.a1':
      'Согласно публичным отчётам реверс-инженерии, когда Claude Code взаимодействует с неофициальным эндпоинтом, он читает часовой пояс ОС и имя прокси, а затем кодирует результат в системном промпте с помощью стеганографии. Часовой пояс, который эта страница читает через Intl.DateTimeFormat, — это тот же часовой пояс ОС.',
    'faq.q2': 'Является ли эта оценка точной проверкой, которую выполняет Claude?',
    'faq.a2':
      'Нет. Только часовой пояс системы соответствует один к одному с описанным механизмом Claude. Остальные восемь сигналов — это распространённые отпечатки китайской среды, которые коррелируют с ним, поэтому воспринимайте оценку как приблизительную, а не как окончательный вердикт.',
    'faq.q3': 'Как снизить свою оценку?',
    'faq.a3':
      'Переключите часовой пояс ОС на другой, не связанный с китайскими зонами, такими как Asia/Shanghai, переместите zh-CN из начала списка языков браузера и избегайте маршрутизации Claude Code через прокси, имена которых содержат заблокированные домены или ключевые слова лабораторий ИИ.',
    'faq.q4': 'Загружаются ли данные?',
    'faq.a4':
      'Нет. Каждая проверка выполняется локально в вашем браузере, и обнаруженные сигналы никогда не отправляются. Сайт загружает только стандартный Google Analytics для анонимной статистики посещений.',
    'privacy.title': 'Конфиденциальность',
    'privacy.body':
      'Каждая проверка выполняется локально в вашем браузере — результаты сканирования никогда не покидают ваше устройство. Сайт загружает только Google Analytics для анонимной статистики посещений.',
    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'Отсканируйте приложением или нажмите, чтобы открыть',
    'footer.disclaimer':
      'Только для справки, основано на публичных отчётах реверс-инженерии. Не является официальным заявлением или рекомендацией.',
    'footer.license':
      'Распространяется под лицензией MIT — при перераспределении необходимо сохранить уведомление об оригинальном проекте.',
    'footer.repo': 'Оригинальный проект',
    'share.label': 'Поделитесь результатом',
    'share.native': 'Поделиться',
    'share.copy': 'Копировать ссылку',
    'share.copied': 'Скопировано!',
    'share.save': 'Сохранить изображение результата',
    'share.saved': 'Сохранено!',
    'share.text':
      'Я получил {score}/100 в тесте «Я китайский пользователь Claude?» — {verdict}! 🐶 Проверьте свой:',
    'share.to.x': 'Поделиться в X',
    'share.to.weibo': 'Поделиться в Weibo',
    'share.to.telegram': 'Поделиться в Telegram',
    'share.to.facebook': 'Поделиться в Facebook',
    'share.to.linkedin': 'Поделиться в LinkedIn',
    'share.to.reddit': 'Поделиться в Reddit',
    'api.title': 'Также доступно через curl',
    'api.desc':
      'Предпочитаете терминал? Используйте эндпоинт ниже — он оценивает ваш риск на основе геолокации IP + заголовков запроса и отвечает на языке вашего заголовка Accept-Language.',
    'api.ex1': '# Текстовый отчёт — следует вашему Accept-Language',
    'api.ex2': '# Принудительный язык через заголовок',
    'api.ex3': '# JSON вывод',
    'ui.claudeBadge': 'Claude Same',
    'ui.retest': 'Сканировать снова',
    'ui.start': 'Начать сканирование',
  },

  ar: {
    'meta.title': 'Fuck Claude | هل أنت "مستخدم صيني" لـ Claude؟',
    'meta.description':
      'تحقق بنقرة واحدة من المنطقة الزمنية واللغة والخطوط الصينية وإعدادات اللغة في متصفحك لمعرفة ما إذا كان Claude Code سيعلمك كمستخدم صيني. 100% محلي، لا يتم رفع أي شيء.',
    'nav.title': 'Fuck Claude',
    'credit': 'تم الإنشاء باستخدام Claude Fable 5',
    'hero.title': 'هل أنت "مستخدم صيني" لـ Claude؟',
    'hero.badge.local': 'فحص 100% محلي',
    'hero.badge.noUpload': 'النتائج لا يتم رفعها أبداً',
    'hero.badge.openSource': 'كود مفتوح',
    'hero.scoreOutOf': '/ 100',
    'band.low.title': 'منخفض المخاطر',
    'band.low.desc': '🐶أنت لست "مستخدم صيني لـ Claude"🐶',
    'band.medium.title': 'مخاطر متوسطة',
    'band.medium.desc': '🐶أنت على الأرجح "مستخدم صيني لـ Claude"🐶',
    'band.high.title': 'مخاطر عالية',
    'band.high.desc': '🐶أنت بالتأكيد "مستخدم صيني لـ Claude"🐶',
    'signal.timezone.name': 'المنطقة الزمنية للنظام',
    'signal.timezone.desc':
      'Intl.DateTimeFormat يكشف نفس المنطقة الزمنية لنظام التشغيل التي يقرأها Claude Code؛ مقارنة مع Asia/Shanghai و Asia/Urumqi ومناطق صينية أخرى.',
    'signal.language.name': 'لغة المتصفح',
    'signal.language.desc':
      'navigator.languages — zh-CN / الصينية المبسطة في أعلى القائمة تحصل على أعلى درجة.',
    'signal.fonts.name': 'الخطوط الصينية المثبتة',
    'signal.fonts.desc':
      'الكشف عن عرض Canvas للخطوط الصينية المبسطة/التقليدية مثل Microsoft YaHei و PingFang SC.',
    'signal.vendorFonts.name': 'خطوط الموردين الصينيين',
    'signal.vendorFonts.desc':
      'كشف Canvas لخطوط الموردين الصينيين — MiSans و HarmonyOS Sans و OPPO Sans و WPS Founder. أي تطابق هو إشارة قوية.',
    'signal.cnBrowser.name': 'متصفح / WebView صيني',
    'signal.cnBrowser.desc':
      'User-Agent وعلامات UA-CH مطابقة مع WeChat و QQ و Quark و UC و Baidu ومتصفحات صينية أخرى أو WebViews مدمجة.',
    'signal.deviceVendor.name': 'جهاز من علامة تجارية صينية',
    'signal.deviceVendor.desc':
      'نموذج الجهاز UA-CH و UA مطابقة مع HarmonyOS و Huawei و Xiaomi و OPPO و vivo وعلامات تجارية صينية أخرى.',
    'signal.intlLocale.name': 'إعدادات اللغة Intl',
    'signal.intlLocale.desc':
      'إعدادات اللغة التي يستخدمها متصفحك لتنسيق التاريخ والأرقام.',
    'signal.timezoneOffset.name': 'إزاحة المنطقة الزمنية',
    'signal.timezoneOffset.desc': 'ما إذا كان getTimezoneOffset() يساوي UTC+8.',
    'signal.emoji.name': 'نمط عرض الرموز التعبيرية',
    'signal.emoji.desc':
      'مزود نظام التشغيل المستنتج من user-agent؛ إشارة ضعيفة وغير مرتبطة بشكل وثيق.',
    'scan.detecting': 'جاري التحقق',
    'scan.ready': 'جاهز للمسح',
    'result.hitsTitle': 'الإشارات المتطابقة',
    'result.noHits': 'لم يتم العثور على إشارات صينية قوية. منخفض المخاطر.',
    'signals.title': 'ما الذي يتم فحسه',
    'signals.sub': 'تسعة بصمات إعدادات اللغة، مرجحة في درجة مخاطر من 0–100.',
    'how.title': 'كيف تعمل الفحصة',
    'how.p1':
      'عندما يشير Claude Code إلى نقطة نهاية عبر ANTHROPIC_BASE_URL، وجدت تقارير الهندسة العكسية العامة أنه يقرأ المنطقة الزمنية لنظام التشغيل واسم مضيف الوكيل، ثم يخفي الحكم في موجه النظام باستخدام 스테가노غرافيا Unicode — فاصل التاريخ وأربعة علامات اقتباس متشابهة في سطر "Today\'s date" ترمزان ما إذا كنت تبدو كمستخدم صيني.',
    'how.p2':
      'لا يمكن لصفحة الويب قراءة كل ما يمكن لـ Claude Code قراءته، لكن الإشارة الرئيسية متطابقة: هذه الأداة تقرأ نفس المنطقة الزمنية لنظام التشغيل، ثم تضيف ثمانية بصمات أخرى مرئية للمتصفح — لغة واجهة المستخدم، الخطوط الصينية، خطوط الموردين الصينيين، المتصفحات الصينية، العلامة التجارية للجهاز، إعدادات اللغة Intl، إزاحة UTC+8 ونمط الرموز التعبيرية — في درجة مرجحة. الإشارات بدرجة ≥0.25 تُحسب كتطابقات.',
    'ui.weight': 'الوزن',
    'faq.title': 'الأسئلة الشائعة',
    'faq.q1': 'هل Claude حقاً يتحقق من المنطقة الزمنية؟',
    'faq.a1':
      'وفقاً لتقارير الهندسة العكسية العامة، عندما يتواصل Claude Code مع نقطة نهاية غير رسمية، يقرأ المنطقة الزمنية لنظام التشغيل واسم مضيف الوكيل، ثم يرمّز النتيجة في موجه النظام باستخدام الاستeganografia. المنطقة الزمنية التي تقرأها هذه الصفحة عبر Intl.DateTimeFormat هي نفس المنطقة الزمنية لنظام التشغيل بالضبط.',
    'faq.q2': 'هل هذه الدرجة هي التحقق الدقيق الذي يجريه Claude؟',
    'faq.a2':
      'لا. فقط المنطقة الزمنية للنظام تتوافق واحداً لواحد مع الآلية المبلّغ عنها لـ Claude. الإشارات الثمانية الأخرى هي بصمات بيئة صينية شائعة ترتبط بها، لذا تعامل مع الدرجة كتقدير وليس حكماً.',
    'faq.q3': 'كيف أخفض درجتي؟',
    'faq.a3':
      'قم بتغيير المنطقة الزمنية لنظام التشغيل بعيداً عن المناطق الصينية مثل Asia/Shanghai، وانقل zh-CN من أعلى قائمة لغات المتصفح، وتجنب توجيه Claude Code عبر وكلاء أسماء مضيفاتهم تحتوي على نطاقات معلمة أو كلمات مفتاحية لمختبرات الذكاء الاصطناعي.',
    'faq.q4': 'هل يتم رفع بيانات؟',
    'faq.a4':
      'لا. كل تحقق يتم تشغيله محلياً في متصفحك وأي إشارة مكتشفة لا يتم إرسالها أبداً. الموقع يحمّل فقط Google Analytics العادي لإحصائيات زيارات مجهولة الهوية.',
    'privacy.title': 'الخصوصية',
    'privacy.body':
      'كل تحقق يتم تشغيله محلياً في متصفحك — نتائج الفحص لا تغادر جهازك أبداً. الموقع يحمّل فقط Google Analytics لإحصائيات زيارات مجهولة الهوية.',
    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'امسح بالتطبيق أو انقر للفتح',
    'footer.disclaimer':
      'للمراجع فقط، مبني على تقارير الهندسة العكسية العامة. ليس بياناً رسمياً أو نصيحة.',
    'footer.license':
      'مرخّص تحت رخصة MIT — يجب على إعادة التوزيع الحفاظ على إشعار المشروع الأصلي.',
    'footer.repo': 'المشروع الأصلي',
    'share.label': 'شارك نتيجتك',
    'share.native': 'مشاركة',
    'share.copy': 'نسخ الرابط',
    'share.copied': 'تم النسخ!',
    'share.save': 'حفظ صورة النتيجة',
    'share.saved': 'تم الحفظ!',
    'share.text':
      'حصلت على {score}/100 في اختبار "هل أنا مستخدم صيني لـ Claude؟" — {verdict}! 🐶 تحقق من نتيجتك:',
    'share.to.x': 'مشاركة على X',
    'share.to.weibo': 'مشاركة على Weibo',
    'share.to.telegram': 'مشاركة على Telegram',
    'share.to.facebook': 'مشاركة على Facebook',
    'share.to.linkedin': 'مشاركة على LinkedIn',
    'share.to.reddit': 'مشاركة على Reddit',
    'api.title': 'متاح أيضاً عبر curl',
    'api.desc':
      'تفضل الطرفية؟ استخدم نقطة النهاية أدناه — تقدر المخاطر من الموقع الجغرافي للعنوان IP + رؤوس الطلبات، وترد بلغة رأس Accept-Language الخاص بك.',
    'api.ex1': '# تقرير نصي — يتبع Accept-Language الخاص بك',
    'api.ex2': '# فرض اللغة عبر الرأس',
    'api.ex3': '# مخرجات JSON',
    'ui.claudeBadge': 'Claude Same',
    'ui.retest': 'مسح مرة أخرى',
    'ui.start': 'بدء الفحص',
  },

  hi: {
    'meta.title': 'Fuck Claude | क्या आप Claude के "चीनी उपयोगकर्ता" हैं?',
    'meta.description':
      'अपने ब्राउज़र का टाइमज़ोन, भाषा, चीनी फ़ॉन्ट और लोकेल एक क्लिक में जांचें ताकि पता चले कि Claude Code आपको चीनी उपयोगकर्ता के रूप में चिह्नित करेगा या नहीं। 100% स्थानीय, कुछ अपलोड नहीं होता।',
    'nav.title': 'Fuck Claude',
    'credit': 'Claude Fable 5 से बनाया गया',
    'hero.title': 'क्या आप Claude के "चीनी उपयोगकर्ता" हैं?',
    'hero.badge.local': '100% स्थानीय स्कैन',
    'hero.badge.noUpload': 'परिणाम कभी अपलोड नहीं होते',
    'hero.badge.openSource': 'ओपन सोर्स',
    'hero.scoreOutOf': '/ 100',
    'band.low.title': 'कम जोखिम',
    'band.low.desc': '🐶आप Claude के "चीनी उपयोगकर्ता" नहीं हैं🐶',
    'band.medium.title': 'मध्यम जोखिम',
    'band.medium.desc': '🐶आप संभवतः Claude के "चीनी उपयोगकर्ता" हैं🐶',
    'band.high.title': 'उच्च जोखिम',
    'band.high.desc': '🐶आप निश्चित रूप से Claude के "चीनी उपयोगकर्ता" हैं🐶',
    'signal.timezone.name': 'सिस्टम टाइमज़ोन',
    'signal.timezone.desc':
      'Intl.DateTimeFormat वही OS टाइमज़ोन उजागर करता है जो Claude Code पढ़ता है; Asia/Shanghai, Asia/Urumqi और अन्य चीनी ज़ोन से तुलना की जाती है।',
    'signal.language.name': 'ब्राउज़र भाषा',
    'signal.language.desc':
      'navigator.languages — zh-CN / सरलीकृत चीनी सूची के शीर्ष पर होने पर सबसे अधिक स्कोर।',
    'signal.fonts.name': 'इंस्टॉल किए गए चीनी फ़ॉन्ट',
    'signal.fonts.desc':
      'Canvas चौड़ाई-प्रोबिंग द्वारा Microsoft YaHei और PingFang SC जैसे सरलीकृत/पारंपरिक चीनी फ़ॉन्ट का पता लगाना।',
    'signal.vendorFonts.name': 'चीनी विक्रेता फ़ॉन्ट',
    'signal.vendorFonts.desc':
      'Canvas द्वारा MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder जैसे चीनी विक्रेताओं के फ़ॉन्ट का पता लगाना। कोई भी मिलान एक मजबूत संकेत है।',
    'signal.cnBrowser.name': 'चीनी ब्राउज़र / WebView',
    'signal.cnBrowser.desc':
      'User-Agent और UA-CH ब्रांड WeChat, QQ, Quark, UC, Baidu और अन्य चीनी ब्राउज़र या इन-ऐप WebView से मिलान।',
    'signal.deviceVendor.name': 'चीनी ब्रांड डिवाइस',
    'signal.deviceVendor.desc':
      'UA-CH डिवाइस मॉडल और UA HarmonyOS, Huawei, Xiaomi, OPPO, vivo और अन्य चीनी ब्रांड से मिलान।',
    'signal.intlLocale.name': 'Intl लोकेल',
    'signal.intlLocale.desc':
      'आपका ब्राउज़र तिथि और संख्या प्रारूपण के लिए जिस लोकेल का उपयोग करता है।',
    'signal.timezoneOffset.name': 'टाइमज़ोन ऑफ़सेट',
    'signal.timezoneOffset.desc': 'क्या getTimezoneOffset() UTC+8 के बराबर है।',
    'signal.emoji.name': 'इमोजी रेंडरिंग शैली',
    'signal.emoji.desc':
      'User-agent से अनुमानित OS विक्रेता; एक कमज़ोर, कम सहसंबद्ध संकेत।',
    'scan.detecting': 'जांच हो रही है',
    'scan.ready': 'स्कैन के लिए तैयार',
    'result.hitsTitle': 'मिलान संकेत',
    'result.noHits': 'कोई मजबूत चीनी संकेत नहीं मिला। कम जोखिम।',
    'signals.title': 'क्या स्कैन होता है',
    'signals.sub': 'नौ लोकेल फ़िंगरप्रिंट, 0–100 जोखिम स्कोर में वज़न दिया गया।',
    'how.title': 'जांच कैसे काम करती है',
    'how.p1':
      'जब Claude Code ANTHROPIC_BASE_URL के माध्यम से प्रॉक्सी एंडपॉइंट की ओर इशारा करता है, तो सार्वजनिक रिवर्स इंजीनियरिंग रिपोर्ट में पाया गया कि यह OS टाइमज़ोन और प्रॉक्सी होस्टनेम पढ़ता है, फिर Unicode स्टेग्नोग्राफ़ी से सिस्टम प्रॉम्प्ट में फ़ैसला छिपाता है — "Today\'s date" लाइन में दिनांक विभाजक और चार समान एपोस्ट्रोफ़ एन्कोड करते हैं कि क्या आप चीनी उपयोगकर्ता जैसे दिखते हैं।',
    'how.p2':
      'वेब पेज Claude Code जो कुछ पढ़ सकता है वह सब नहीं पढ़ सकता, लेकिन मुख्य संकेत समान है: यह टूल वही OS टाइमज़ोन पढ़ता है, फिर आठ और ब्राउज़र-दृश्य फ़िंगरप्रिंट जोड़ता है — UI भाषा, चीनी फ़ॉन्ट, चीनी विक्रेता फ़ॉन्ट, चीनी ब्राउज़र, डिवाइस ब्रांड, Intl लोकेल, UTC+8 ऑफ़सेट और इमोजी शैली — एक वज़न वाले स्कोर में। स्कोर ≥0.25 वाले संकेत मिलान के रूप में गिने जाते हैं।',
    'ui.weight': 'वज़न',
    'faq.title': 'अक्सर पूछे जाने वाले प्रश्न',
    'faq.q1': 'क्या Claude वास्तव में मेरा टाइमज़ोन जांचता है?',
    'faq.a1':
      'सार्वजनिक रिवर्स इंजीनियरिंग रिपोर्ट के अनुसार, जब Claude Code गैर-आधिकारिक एंडपॉइंट से बात करता है, तो यह OS टाइमज़ोन और प्रॉक्सी होस्टनेम पढ़ता है, और स्टेग्नोग्राफ़ी द्वारा अपने सिस्टम प्रॉम्प्ट में परिणाम एन्कोड करता है। यह पेज Intl.DateTimeFormat के माध्यम से जो टाइमज़ोन पढ़ता है वह ठीक वही OS टाइमज़ोन है।',
    'faq.q2': 'क्या यह स्कोर Claude द्वारा चलाई गई सटीक जांच है?',
    'faq.a2':
      'नहीं। केवल सिस्टम टाइमज़ोन Claude की रिपोर्ट की गई मैकेनिज़्म के साथ एक-से-एक मैप होता है। अन्य आठ संकेत चीनी वातावरण के सामान्य फ़िंगरप्रिंट हैं जो इससे सहसंबद्ध हैं, इसलिए स्कोर को अनुमान मानें, निर्णय नहीं।',
    'faq.q3': 'मैं अपना स्कोर कैसे कम करूं?',
    'faq.a3':
      'अपने OS टाइमज़ोन को Asia/Shanghai जैसे चीनी ज़ोन से बदलें, अपनी ब्राउज़र भाषा सूची के शीर्ष से zh-CN हटाएं, और Claude Code को ऐसे प्रॉक्सी से रूट करने से बचें जिनके होस्टनेम में फ़्लैग किए गए डोमेन या AI लैब कीवर्ड हों।',
    'faq.q4': 'क्या कोई डेटा अपलोड होता है?',
    'faq.a4':
      'नहीं। हर जांच आपके ब्राउज़र में स्थानीय रूप से चलती है और कोई भी पता लगाया गया संकेत कभी नहीं भेजा जाता। साइट केवल गुमनाम पेज-व्यू आंकड़ों के लिए मानक Google Analytics लोड करती है।',
    'privacy.title': 'गोपनीयता',
    'privacy.body':
      'हर जांच आपके ब्राउज़र में स्थानीय रूप से चलती है — आपके स्कैन परिणाम कभी आपके डिवाइस से बाहर नहीं जाते। साइट केवल गुमनाम पेज-व्यू आंकड़ों के लिए Google Analytics लोड करती है।',
    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'ऐप से स्कैन करें या खोलने के लिए क्लिक करें',
    'footer.disclaimer':
      'केवल संदर्भ के लिए, सार्वजनिक रिवर्स इंजीनियरिंग रिपोर्ट पर आधारित। कोई आधिकारिक बयान या सलाह नहीं।',
    'footer.license':
      'MIT लाइसेंस के तहत ओपन सोर्स — पुनर्वितरण को मूल परियोजना सूचना बनाए रखनी होगी।',
    'footer.repo': 'मूल परियोजना',
    'share.label': 'अपना परिणाम साझा करें',
    'share.native': 'साझा करें',
    'share.copy': 'लिंक कॉपी करें',
    'share.copied': 'कॉपी हो गया!',
    'share.save': 'परिणाम छवि सहेजें',
    'share.saved': 'सहेजा गया!',
    'share.text':
      'मैंने "क्या मैं Claude का चीनी उपयोगकर्ता हूं?" परीक्षा में {score}/100 प्राप्त किया — {verdict}! 🐶 अपनी जांच करें:',
    'share.to.x': 'X पर साझा करें',
    'share.to.weibo': 'Weibo पर साझा करें',
    'share.to.telegram': 'Telegram पर साझा करें',
    'share.to.facebook': 'Facebook पर साझा करें',
    'share.to.linkedin': 'LinkedIn पर साझा करें',
    'share.to.reddit': 'Reddit पर साझा करें',
    'api.title': 'curl से भी उपलब्ध',
    'api.desc':
      'टर्मिनल पसंद है? नीचे दिए गए एंडपॉइंट का उपयोग करें — यह आपके IP जियोलोकेशन + अनुरोध हेडर से आपके जोखिम का अनुमान लगाता है, और आपके Accept-Language हेडर की भाषा में उत्तर देता है।',
    'api.ex1': '# टेक्स्ट रिपोर्ट — आपके Accept-Language का पालन करती है',
    'api.ex2': '# हेडर के माध्यम से भाषा बाध्य करें',
    'api.ex3': '# JSON आउटपुट',
    'ui.claudeBadge': 'Claude Same',
    'ui.retest': 'फिर से स्कैन करें',
    'ui.start': 'स्कैन शुरू करें',
  },

  it: {
    'meta.title': 'Fuck Claude | Sei un "utente cinese" di Claude?',
    'meta.description':
      'Verifica con un clic il fuso orario, la lingua, i caratteri cinesi e le impostazioni locali del tuo browser per vedere se Claude Code ti contrassegnerebbe come utente cinese. 100% locale, niente viene caricato.',
    'nav.title': 'Fuck Claude',
    'credit': 'Costruito con Claude Fable 5',
    'hero.title': 'Sei un "utente cinese" di Claude?',
    'hero.badge.local': 'Scansione 100% locale',
    'hero.badge.noUpload': 'Risultati mai caricati',
    'hero.badge.openSource': 'Open source',
    'hero.scoreOutOf': '/ 100',
    'band.low.title': 'Rischio basso',
    'band.low.desc': '🐶Non sei un "utente cinese di Claude"🐶',
    'band.medium.title': 'Rischio medio',
    'band.medium.desc': '🐶Probabilmente sei un "utente cinese di Claude"🐶',
    'band.high.title': 'Rischio alto',
    'band.high.desc': '🐶Sei decisamente un "utente cinese di Claude"🐶',
    'signal.timezone.name': 'Fuso orario del sistema',
    'signal.timezone.desc':
      'Intl.DateTimeFormat espone lo stesso fuso orario OS che legge Claude Code; confrontato con Asia/Shanghai, Asia/Urumqi e altre zone cinesi.',
    'signal.language.name': 'Lingua del browser',
    'signal.language.desc':
      'navigator.languages — zh-CN / Cinese semplificato in cima alla lista ottiene il punteggio più alto.',
    'signal.fonts.name': 'Caratteri cinesi installati',
    'signal.fonts.desc':
      'Rilevamento per larghezza Canvas di caratteri cinesi semplificati/tradizionali come Microsoft YaHei e PingFang SC.',
    'signal.vendorFonts.name': 'Caratteri di fornitori cinesi',
    'signal.vendorFonts.desc':
      'Rilevamento Canvas di caratteri di fornitori cinesi — MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder. Qualsiasi corrispondenza è un segnale forte.',
    'signal.cnBrowser.name': 'Browser / WebView cinese',
    'signal.cnBrowser.desc':
      'User-Agent e marchi UA-CH confrontati con WeChat, QQ, Quark, UC, Baidu e altri browser cinesi o WebViews integrati.',
    'signal.deviceVendor.name': 'Dispositivo di marchio cinese',
    'signal.deviceVendor.desc':
      'Modello dispositivo UA-CH e UA confrontati con HarmonyOS, Huawei, Xiaomi, OPPO, vivo e altri marchi cinesi.',
    'signal.intlLocale.name': 'Impostazioni locali Intl',
    'signal.intlLocale.desc':
      'Le impostazioni locali che il tuo browser utilizza per la formattazione di date e numeri.',
    'signal.timezoneOffset.name': 'Offset fuso orario',
    'signal.timezoneOffset.desc': 'Se getTimezoneOffset() è uguale a UTC+8.',
    'signal.emoji.name': 'Stile di rendering delle emoji',
    'signal.emoji.desc':
      'Fornitore OS dedotto dal user-agent; un segnale debole e poco correlato.',
    'scan.detecting': 'Verifica in corso',
    'scan.ready': 'Pronto per la scansione',
    'result.hitsTitle': 'Segnali corrispondenti',
    'result.noHits': 'Nessun forte segnale cinese trovato. Rischio basso.',
    'signals.title': 'Cosa viene scansionato',
    'signals.sub': 'Nove impronte delle impostazioni locali, pesate in un punteggio di rischio da 0 a 100.',
    'how.title': 'Come funziona la verifica',
    'how.p1':
      'Quando Claude Code punta a un endpoint proxy tramite ANTHROPIC_BASE_URL, rapporti pubblici di reverse engineering hanno scoperto che legge il fuso orario OS e il nome host del proxy, poi nasconde il verdetto nel prompt di sistema con steganografia Unicode — il separatore di data e quattro apostrofi simili nella riga "Today\'s date" codificano se sembri un utente cinese.',
    'how.p2':
      'Una pagina web non può leggere tutto ciò che Claude Code può, ma il segnale chiave è identico: questo strumento legge lo stesso fuso orario OS, poi aggiunge otto altre impronte visibili dal browser — lingua UI, caratteri cinesi, caratteri di fornitori cinesi, browser cinesi, marchio del dispositivo, impostazioni locali Intl, offset UTC+8 e stile emoji — in un punteggio ponderato. I segnali con punteggio ≥0,25 contano come corrispondenze.',
    'ui.weight': 'Peso',
    'faq.title': 'Domande frequenti',
    'faq.q1': 'Claude controlla davvero il mio fuso orario?',
    'faq.a1':
      'Secondo rapporti pubblici di reverse engineering, quando Claude Code comunica con un endpoint non ufficiale, legge il fuso orario OS e il nome host del proxy, e codifica il risultato nel suo prompt di sistema tramite steganografia. Il fuso orario che questa pagina legge tramite Intl.DateTimeFormat è esattamente lo stesso fuso orario OS.',
    'faq.q2': 'Questo punteggio è la verifica esatta che Claude esegue?',
    'faq.a2':
      'No. Solo il fuso orario del sistema corrisponde uno a uno con il meccanismo riportato da Claude. Gli altri otto segnali sono impronte comuni dell\'ambiente cinese che si correlano con esso, quindi tratta il punteggio come una stima, non come un verdetto.',
    'faq.q3': 'Come posso ridurre il mio punteggio?',
    'faq.a3':
      'Cambia il fuso orario OS lontano da zone cinesi come Asia/Shanghai, sposta zh-CN dalla cima della lista delle lingue del browser, e evita di instradare Claude Code tramite proxy i cui nomi host contengono domini segnalati o parole chiave di laboratori AI.',
    'faq.q4': 'Vengono caricate dei dati?',
    'faq.a4':
      'No. Ogni verifica viene eseguita localmente nel tuo browser e nessuno dei segnali rilevati viene mai inviato. Il site carica solo Google Analytics standard per statistiche anonime delle pagine visitate.',
    'privacy.title': 'Privacy',
    'privacy.body':
      'Ogni verifica viene eseguita localmente nel tuo browser — i risultati della scansione non lasciano mai il tuo dispositivo. Il sito carica solo Google Analytics per statistiche anonime delle pagine visitate.',
    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'Scansiona con l\'app o clicca per aprire',
    'footer.disclaimer':
      'Solo a scopo di riferimento, basato su rapporti pubblici di reverse engineering. Non è una dichiarazione ufficiale né un consiglio.',
    'footer.license':
      'Distribuito sotto licenza MIT — le ridistribuzioni devono mantenere l\'avviso del progetto originale.',
    'footer.repo': 'Progetto originale',
    'share.label': 'Condividi il tuo risultato',
    'share.native': 'Condividi',
    'share.copy': 'Copia link',
    'share.copied': 'Copiato!',
    'share.save': 'Salva immagine del risultato',
    'share.saved': 'Salvato!',
    'share.text':
      'Ho ottenuto {score}/100 nel test "Sono un utente cinese di Claude?" — {verdict}! 🐶 Controlla il tuo:',
    'share.to.x': 'Condividi su X',
    'share.to.weibo': 'Condividi su Weibo',
    'share.to.telegram': 'Condividi su Telegram',
    'share.to.facebook': 'Condividi su Facebook',
    'share.to.linkedin': 'Condividi su LinkedIn',
    'share.to.reddit': 'Condividi su Reddit',
    'api.title': 'Disponibile anche con curl',
    'api.desc':
      'Preferisci il terminale? Usa l\'endpoint qui sotto — stima il tuo rischio dalla geolocalizzazione IP + intestazioni della richiesta, e risponde nella lingua della tua intestazione Accept-Language.',
    'api.ex1': '# Rapporto di testo — segue il tuo Accept-Language',
    'api.ex2': '# Forza lingua tramite intestazione',
    'api.ex3': '# Output JSON',
    'ui.claudeBadge': 'Claude Same',
    'ui.retest': 'Scansiona di nuovo',
    'ui.start': 'Avvia scansione',
  },

  nl: {
    'meta.title': 'Fuck Claude | Ben je een "Chinese gebruiker" van Claude?',
    'meta.description':
      'Controleer met één klik je browser tijdzone, taal, Chinese lettertypen en locale om te zien of Claude Code je als een Chinese gebruiker zou markeren. 100% lokaal, er wordt niets geüpload.',
    'nav.title': 'Fuck Claude',
    'credit': 'Gebouwd met Claude Fable 5',
    'hero.title': 'Ben je een "Chinese gebruiker" van Claude?',
    'hero.badge.local': '100% lokale scan',
    'hero.badge.noUpload': 'Resultaten worden nooit geüpload',
    'hero.badge.openSource': 'Open source',
    'hero.scoreOutOf': '/ 100',
    'band.low.title': 'Laag risico',
    'band.low.desc': '🐶Je bent geen "Chinese gebruiker van Claude"🐶',
    'band.medium.title': 'Gemiddeld risico',
    'band.medium.desc': '🐶Je bent waarschijnlijk een "Chinese gebruiker van Claude"🐶',
    'band.high.title': 'Hoog risico',
    'band.high.desc': '🐶Je bent zeker een "Chinese gebruiker van Claude"🐶',
    'signal.timezone.name': 'Systeem tijdzone',
    'signal.timezone.desc':
      'Intl.DateTimeFormat onthult dezelfde OS tijdzone die Claude Code leest; vergeleken met Asia/Shanghai, Asia/Urumqi en andere Chinese zones.',
    'signal.language.name': 'Browsertaal',
    'signal.language.desc':
      'navigator.languages — zh-CN / Vereenvoudigd Chinees bovenaan de lijst geeft de hoogste score.',
    'signal.fonts.name': 'Geïnstalleerde Chinese lettertypen',
    'signal.fonts.desc':
      'Canvas-breedte detectie voor vereenvoudigde/traditionele Chinese lettertypen zoals Microsoft YaHei en PingFang SC.',
    'signal.vendorFonts.name': 'Chinese leveranciers lettertypen',
    'signal.vendorFonts.desc':
      'Canvas detectie van lettertypen van Chinese leveranciers — MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder. Elke hit is een sterk signaal.',
    'signal.cnBrowser.name': 'Chinese browser / WebView',
    'signal.cnBrowser.desc':
      'User-Agent en UA-CH merken vergeleken met WeChat, QQ, Quark, UC, Baidu en andere Chinese browsers of ingebouwde WebViews.',
    'signal.deviceVendor.name': 'Apparaat van Chinees merk',
    'signal.deviceVendor.desc':
      'UA-CH apparaatmodel en UA vergeleken met HarmonyOS, Huawei, Xiaomi, OPPO, vivo en andere Chinese merken.',
    'signal.intlLocale.name': 'Intl locale',
    'signal.intlLocale.desc':
      'De locale die je browser gebruikt voor datum- en nummeropmaak.',
    'signal.timezoneOffset.name': 'Tijdzone offset',
    'signal.timezoneOffset.desc': 'Of getTimezoneOffset() gelijk is aan UTC+8.',
    'signal.emoji.name': 'Emoji weergavestijl',
    'signal.emoji.desc':
      'OS leverancier afgeleid van user-agent; een zwak, los gecorrigeerd signaal.',
    'scan.detecting': 'Controleren',
    'scan.ready': 'Klaar om te scannen',
    'result.hitsTitle': 'Overeenkomende signalen',
    'result.noHits': 'Geen sterke Chinese signalen gevonden. Laag risico.',
    'signals.title': 'Wat er wordt gescand',
    'signals.sub': 'Negen locale vingerafdrukken, gewogen tot een risicoscore van 0–100.',
    'how.title': 'Hoe de controle werkt',
    'how.p1':
      'Wanneer Claude Code wijst naar een proxy endpoint via ANTHROPIC_BASE_URL, hebben openbare reverse-engineering rapportages ontdekt dat het de OS tijdzone en proxy hostnaam leest, en het oordeel dan verbergt in het systeem prompt met Unicode steganografie — de datum scheidingsteken en vier vergelijkbare apostroffen in de "Today\'s date" regel coderen of je lijkt op een Chinese gebruiker.',
    'how.p2':
      'Een webpagina kan niet alles lezen wat Claude Code kan, maar de kernsignaal is identiek: deze tool leest dezelfde OS tijdzone, voegt dan acht andere browser-zichtbare vingerafdrukken toe — UI taal, Chinese lettertypen, Chinese leveranciers lettertypen, Chinese browsers, apparaatmerk, Intl locale, UTC+8 offset en emoji stijl — in een gewogen score. Signalen met score ≥0,25 tellen als overeenkomsten.',
    'ui.weight': 'Gewicht',
    'faq.title': 'Veelgestelde vragen',
    'faq.q1': 'Controleert Claude echt mijn tijdzone?',
    'faq.a1':
      'Volgens openbare reverse-engineering rapportages, wanneer Claude Code communiceert met een niet-officieel endpoint, leest het de OS tijdzone en proxy hostnaam, en codeert het resultaat in zijn systeem prompt via steganografie. De tijdzone die deze pagina leest via Intl.DateTimeFormat is precies dezelfde OS tijdzone.',
    'faq.q2': 'Is deze score de exacte controle die Claude uitvoert?',
    'faq.a2':
      'Nee. Alleen de systeem tijdzone komt een-op-een overeen met het gerapporteerde mechanisme van Claude. De andere acht signalen zijn veelvoorkomende Chinese omgevingsvingerafdrukken die ermee gecorrigeerd zijn, dus behandel de score als een schatting, niet als een oordeel.',
    'faq.q3': 'Hoe kan ik mijn score verlagen?',
    'faq.a3':
      'Wissel je OS tijdzone weg van Chinese zones zoals Asia/Shanghai, verplaats zh-CN van de bovenkant van je browsertaal lijst, en vermijd het routeren van Claude Code door proxies wiens hostnamen gemarkeerde domeinen of AI-lab trefwoorden bevatten.',
    'faq.q4': 'Worden er gegevens geüpload?',
    'faq.a4':
      'Nee. Elke controle draait lokaal in je browser en geen van de gedetecteerde signalen wordt ooit verzonden. De site laadt alleen standaard Google Analytics voor anonieme paginaweergave statistieken.',
    'privacy.title': 'Privacy',
    'privacy.body':
      'Elke controle draait lokaal in je browser — je scanresultaten verlaten nooit je apparaat. De site laadt alleen Google Analytics voor anonieme paginaweergave statistieken.',
    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'Scan met de app of klik om te openen',
    'footer.disclaimer':
      'Alleen ter referentie, gebaseerd op openbare reverse-engineering rapportages. Geen officiële verklaring of advies.',
    'footer.license':
      'Gepubliceerd onder de MIT-licentie — herdistributies moeten het originele projectbericht behouden.',
    'footer.repo': 'Origineel project',
    'share.label': 'Deel je resultaat',
    'share.native': 'Delen',
    'share.copy': 'Link kopiëren',
    'share.copied': 'Gekopieerd!',
    'share.save': 'Resultaatafbeelding opslaan',
    'share.saved': 'Opgeslagen!',
    'share.text':
      'Ik heb {score}/100 gescoord op de "Ben ik een Chinese gebruiker van Claude?" test — {verdict}! 🐶 Controleer het jouwe:',
    'share.to.x': 'Delen op X',
    'share.to.weibo': 'Delen op Weibo',
    'share.to.telegram': 'Delen op Telegram',
    'share.to.facebook': 'Delen op Facebook',
    'share.to.linkedin': 'Delen op LinkedIn',
    'share.to.reddit': 'Delen op Reddit',
    'api.title': 'Ook beschikbaar via curl',
    'api.desc':
      'Liever de terminal? Gebruik het endpoint hieronder — het schat je risico op basis van je IP geolocatie + verzoek headers, en antwoordt in de taal van je Accept-Language header.',
    'api.ex1': '# Tekstrapport — volgt je Accept-Language',
    'api.ex2': '# Forceer taal via header',
    'api.ex3': '# JSON uitvoer',
    'ui.claudeBadge': 'Claude Same',
    'ui.retest': 'Opnieuw scannen',
    'ui.start': 'Scan starten',
  },

  pl: {
    'meta.title': 'Fuck Claude | Czy jesteś "chińskim użytkownikiem" Claude?',
    'meta.description':
      'Sprawdź jednym kliknięciem strefę czasową, język, chińskie czcionki i ustawienia regionalne przeglądarki, aby zobaczyć, czy Claude Code oznaczyłby Cię jako chińskiego użytkownika. 100% lokalnie, nic nie jest przesyłane.',
    'nav.title': 'Fuck Claude',
    'credit': 'Zbudowane z Claude Fable 5',
    'hero.title': 'Czy jesteś "chińskim użytkownikiem" Claude?',
    'hero.badge.local': '100% lokalne skanowanie',
    'hero.badge.noUpload': 'Wyniki nigdy nie są przesyłane',
    'hero.badge.openSource': 'Otwarty kod',
    'hero.scoreOutOf': '/ 100',
    'band.low.title': 'Niskie ryzyko',
    'band.low.desc': '🐶Nie jesteś "chińskim użytkownikiem Claude"🐶',
    'band.medium.title': 'Średnie ryzyko',
    'band.medium.desc': '🐶Prawdopodobnie jesteś "chińskim użytkownikiem Claude"🐶',
    'band.high.title': 'Wysokie ryzyko',
    'band.high.desc': '🐶Zdecydowanie jesteś "chińskim użytkownikiem Claude"🐶',
    'signal.timezone.name': 'Strefa czasowa systemu',
    'signal.timezone.desc':
      'Intl.DateTimeFormat ujawnia tę samą strefę czasową systemu, którą czyta Claude Code; porównywana z Asia/Shanghai, Asia/Urumqi i innymi chińskimi strefami.',
    'signal.language.name': 'Język przeglądarki',
    'signal.language.desc':
      'navigator.languages — zh-CN / Chiński uproszczony na górze listy daje najwyższy wynik.',
    'signal.fonts.name': 'Zainstalowane chińskie czcionki',
    'signal.fonts.desc':
      'Wykrywanie szerokością Canvas dla uproszczonych/tradycyjnych chińskich czcionek takich jak Microsoft YaHei i PingFang SC.',
    'signal.vendorFonts.name': 'Chińskie czcionki dostawców',
    'signal.vendorFonts.desc':
      'Wykrywanie Canvas czcionek chińskich dostawców — MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder. Każde trafienie jest silnym sygnałem.',
    'signal.cnBrowser.name': 'Chińska przeglądarka / WebView',
    'signal.cnBrowser.desc':
      'User-Agent i marki UA-CH dopasowane do WeChat, QQ, Quark, UC, Baidu i innych chińskich przeglądarek lub wbudowanych WebView.',
    'signal.deviceVendor.name': 'Urządzenie chińskiej marki',
    'signal.deviceVendor.desc':
      'Model urządzenia UA-CH i UA dopasowane do HarmonyOS, Huawei, Xiaomi, OPPO, vivo i innych chińskich marek.',
    'signal.intlLocale.name': 'Ustawienia regionalne Intl',
    'signal.intlLocale.desc':
      'Ustawienia regionalne, których przeglądarka używa do formatowania dat i liczb.',
    'signal.timezoneOffset.name': 'Przesunięcie strefy czasowej',
    'signal.timezoneOffset.desc': 'Czy getTimezoneOffset() jest równe UTC+8.',
    'signal.emoji.name': 'Styl renderowania emoji',
    'signal.emoji.desc':
      'Dostawca systemu operacyjnego wywnioskowany z user-agent; słabo skorelowany sygnał.',
    'scan.detecting': 'Sprawdzanie',
    'scan.ready': 'Gotowy do skanowania',
    'result.hitsTitle': 'Dopasowane sygnały',
    'result.noHits': 'Nie znaleziono silnych sygnałów chińskich. Niskie ryzyko.',
    'signals.title': 'Co jest skanowane',
    'signals.sub': 'Dziewięć odcisków ustawień regionalnych, ważonych w wynik ryzyka 0–100.',
    'how.title': 'Jak działa sprawdzanie',
    'how.p1':
      'Gdy Claude Code wskazuje na endpoint proxy przez ANTHROPIC_BASE_URL, publiczne raporty inżynierii wstecznej wykryły, że czyta strefę czasową systemu i nazwę hosta proxy, a następnie ukrywa werdykt w prompt systemowym za pomocą steganografii Unicode — separator daty i cztery podobne apostrofy w wierszu "Today\'s date" kodują, czy wyglądasz jak chiński użytkownik.',
    'how.p2':
      'Strona internetowa nie może przeczytać wszystkiego, co może Claude Code, ale kluczowy sygnał jest identyczny: to narzędzie czyta tę samą strefę czasową systemu, dodaje następnie osiem innych odcisków widocznych dla przeglądarki — język interfejsu, chińskie czcionki, chińskie czcionki dostawców, chińskie przeglądarki, markę urządzenia, ustawienia regionalne Intl, przesunięcie UTC+8 i styl emoji — w ważony wynik. Sygnały z wynikiem ≥0,25 liczone są jako trafienia.',
    'ui.weight': 'Waga',
    'faq.title': 'Często zadawane pytania',
    'faq.q1': 'Czy Claude naprawdę sprawdza moją strefę czasową?',
    'faq.a1':
      'Zgodnie z publicznymi raportami inżynierii wstecznej, gdy Claude Code komunikuje się z nieoficjalnym endpointem, czyta strefę czasową systemu i nazwę hosta proxy, a następnie koduje wynik w swoim prompt systemowym za pomocą steganografii. Strefa czasowa, którą ta strona czyta przez Intl.DateTimeFormat, jest dokładnie tą samą strefą czasową systemu.',
    'faq.q2': 'Czy ten wynik to dokładne sprawdzanie wykonywane przez Claude?',
    'faq.a2':
      'Nie. Tylko strefa czasowa systemu odpowiada jeden do jednego z opublikowanym mechanizmem Claude. Pozostałe osiem sygnałów to typowe odciski środowiska chińskiego, które z nim korelują, więc traktuj wynik jako szacunek, nie werdykt.',
    'faq.q3': 'Jak mogę obniżyć swój wynik?',
    'faq.a3':
      'Przełącz strefę czasową systemu z chińskich stref takich jak Asia/Shanghai, przenieść zh-CN z góry listy języków przeglądarki i unikać kierowania Claude Code przez proxy, których nazwy hostów zawierają zaznaczone domeny lub słowa kluczowe laboratoriów AI.',
    'faq.q4': 'Czy jakieś dane są przesyłane?',
    'faq.a4':
      'Nie. Każde sprawdzanie odbywa się lokalnie w przeglądarce i żadne z wykrytych sygnałów nigdy nie jest wysyłane. Strona ładuje tylko standardowe Google Analytics do anonimowych statystyk odwiedzin.',
    'privacy.title': 'Prywatność',
    'privacy.body':
      'Każde sprawdzanie odbywa się lokalnie w przeglądarce — wyniki skanowania nigdy nie opuszczają Twojego urządzenia. Strona ładuje tylko Google Analytics do anonimowych statystyk odwiedzin.',
    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'Skanuj aplikacją lub kliknij, aby otworzyć',
    'footer.disclaimer':
      'Tylko do referencji, oparte na publicznych raportach inżynierii wstecznej. Nie jest oficjalnym oświadczeniem ani poradą.',
    'footer.license':
      'Dystrybuowane na licencji MIT — redystrybucje muszą zachować oryginalne oświadczenie projektu.',
    'footer.repo': 'Oryginalny projekt',
    'share.label': 'Udostępnij swój wynik',
    'share.native': 'Udostępnij',
    'share.copy': 'Kopiuj link',
    'share.copied': 'Skopiowano!',
    'share.save': 'Zapisz obraz wyniku',
    'share.saved': 'Zapisano!',
    'share.text':
      'Uzyskałem {score}/100 w teście "Czy jestem chińskim użytkownikiem Claude?" — {verdict}! 🐶 Sprawdź swój:',
    'share.to.x': 'Udostępnij na X',
    'share.to.weibo': 'Udostępnij na Weibo',
    'share.to.telegram': 'Udostępnij na Telegram',
    'share.to.facebook': 'Udostępnij na Facebook',
    'share.to.linkedin': 'Udostępnij na LinkedIn',
    'share.to.reddit': 'Udostępnij na Reddit',
    'api.title': 'Dostępne również przez curl',
    'api.desc':
      'Wolisz terminal? Użyj poniższego endpointu — szacuje ryzyko na podstawie geolokalizacji IP + nagłówków żądania i odpowiada w języku nagłówka Accept-Language.',
    'api.ex1': '# Raport tekstowy — podąża za Accept-Language',
    'api.ex2': '## Wymuś język przez nagłówek',
    'api.ex3': '# Wyjście JSON',
    'ui.claudeBadge': 'Claude Same',
    'ui.retest': 'Skanuj ponownie',
    'ui.start': 'Rozpocznij skanowanie',
  },

  tr: {
    'meta.title': 'Fuck Claude | Claude\'nun "Çin Kullanıcısı" mısınız?',
    'meta.description':
      'Tarayıcınızın saat dilimini, dilini, Çince yazı tiplerini ve yerel ayarlarını tek tıkla kontrol ederek Claude Code\'un sizi Çin kullanıcısı olarak işaretleyip işaretlemeyeceğini görün. %100 yerel, hiçbir şey yüklenmez.',
    'nav.title': 'Fuck Claude',
    'credit': 'Claude Fable 5 ile oluşturuldu',
    'hero.title': 'Claude\'nun "Çin Kullanıcısı" mısınız?',
    'hero.badge.local': '%100 yerel tarama',
    'hero.badge.noUpload': 'Sonuçlar asla yüklenmez',
    'hero.badge.openSource': 'Açık kaynak',
    'hero.scoreOutOf': '/ 100',
    'band.low.title': 'Düşük risk',
    'band.low.desc': '🐶Claude\'nun "Çin Kullanıcısı" değilsiniz🐶',
    'band.medium.title': 'Orta risk',
    'band.medium.desc': '🐶Muhtemelen Claude\'nun "Çin Kullanıcısı"sınız🐶',
    'band.high.title': 'Yüksek risk',
    'band.high.desc': '🐶Kesinlikle Claude\'nun "Çin Kullanıcısı"sınız🐶',
    'signal.timezone.name': 'Sistem saat dilimi',
    'signal.timezone.desc':
      'Intl.DateTimeFormat, Claude Code\'un okuduğu aynı işletim sistemi saat dilimini gösterir; Asia/Shanghai, Asia/Urumqi ve diğer Çin dilimleriyle karşılaştırılır.',
    'signal.language.name': 'Tarayıcı dili',
    'signal.language.desc':
      'navigator.languages — listede en üstte zh-CN / Basitleştirilmiş Çince en yüksek puanı alır.',
    'signal.fonts.name': 'Yüklü Çince yazı tipleri',
    'signal.fonts.desc':
      'Microsoft YaHei ve PingFang SC gibi basitleştirilmiş/geleneksel Çince yazı tipleri için Canvas genişlik algılama.',
    'signal.vendorFonts.name': 'Çinli satıcı yazı tipleri',
    'signal.vendorFonts.desc':
      'MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder gibi Çinli satıcıların yazı tipleri için Canvas algılama. Herhangi bir eşleşme güçlü bir işarettir.',
    'signal.cnBrowser.name': 'Çin tarayıcısı / WebView',
    'signal.cnBrowser.desc':
      'User-Agent ve UA-CH markaları WeChat, QQ, Quark, UC, Baidu ve diğer Çin tarayıcılarıyla veya uygulama içi WebView\'larla eşleştirilir.',
    'signal.deviceVendor.name': 'Çin markalı cihaz',
    'signal.deviceVendor.desc':
      'UA-CH cihaz modeli ve UA, HarmonyOS, Huawei, Xiaomi, OPPO, vivo ve diğer Çin markalarıyla eşleştirilir.',
    'signal.intlLocale.name': 'Intl yerel ayarı',
    'signal.intlLocale.desc':
      'Tarayıcınızın tarih ve sayı biçimlendirmesi için kullandığı yerel ayar.',
    'signal.timezoneOffset.name': 'Saat dilimi ofseti',
    'signal.timezoneOffset.desc': 'getTimezoneOffset()\'un UTC+8\'e eşit olup olmadığı.',
    'signal.emoji.name': 'Emoji işleme stili',
    'signal.emoji.desc':
      'User-agent\'tan tahmin edilen işletim sistemi satıcısı; zayıf, gevşek korelasyonlu bir işaret.',
    'scan.detecting': 'Kontrol ediliyor',
    'scan.ready': 'Taramaya hazır',
    'result.hitsTitle': 'Eşleşen işaretler',
    'result.noHits': 'Güçlü Çin işareti bulunamadı. Düşük risk.',
    'signals.title': 'Tarama yapılan şeyler',
    'signals.sub': 'Dokuz yerel ayar parmak izi, 0–100 risk puanına ağırlıklandırılmış.',
    'how.title': 'Kontrol nasıl çalışır',
    'how.p1':
      'Claude Code ANTHROPIC_BASE_URL üzerinden bir proxy uç noktasını gösterdiğinde, kamu tersine mühendislik raporları onun işletim sistemi saat dilimini ve proxy ana bilgisayar adını okuduğunu, ardından Unicode steganografi ile sistem isteminde sonucu gizlediğini ortaya koyuyor — "Today\'s date" satırındaki tarih ayırıcısı ve dört benzer kesme işareti, Çin kullanıcısı görünüp görünmediğinizi kodlar.',
    'how.p2':
      'Bir web sayfası Claude Code\'un okuyabileceği her şeyi okuyamaz, ancak temel işaret özdeştir: bu araç aynı işletim sistemi saat dilimini okur, ardından sekiz tarayıcı görünür parmak izi ekler — arayüz dili, Çince yazı tipleri, Çinli satıcı yazı tipleri, Çin tarayıcıları, cihaz markası, Intl yerel ayarı, UTC+8 ofseti ve emoji stili — ağırlıklı bir puanda. Puanı ≥0,25 olan işaretler eşleşme olarak sayılır.',
    'ui.weight': 'Ağırlık',
    'faq.title': 'Sıkça Sorulan Sorular',
    'faq.q1': 'Claude gerçekten saat dilimimi kontrol ediyor mu?',
    'faq.a1':
      'Kamu tersine mühendislik raporlarına göre, Claude Code resmi olmayan bir uç noktayla iletişim kurduğunda işletim sistemi saat dilimini ve proxy ana bilgisayar adını okur ve sonucu steganografi ile sistem istemine kodlar. Bu sayfanın Intl.DateTimeFormat aracılığıyla okuduğu saat dilimi tam olarak aynı işletim sistemi saat dilimidir.',
    'faq.q2': 'Bu puan, Claude\'un çalıştırdığı kesin kontrol mü?',
    'faq.a2':
      'Hayır. Sadece sistem saat dilimi, Claude\'un bildirilen mekanizmasıyla bire bir eşleşir. Diğer sekiz işaret, bununla korele olan yaygın Çin ortamı parmak izleridir, bu yüzden puanı tahmin olarak değerlendirin, hüküm olarak değil.',
    'faq.q3': 'Puanımı nasıl düşürebilirim?',
    'faq.a3':
      'İşletim sistemi saat diliminizi Asia/Shanghai gibi Çin dilimlerinden değiştirin, tarayıcı dil listenizin en üstünden zh-CN\'i kaldırın ve proxy\'lerin ana bilgisayar adlarında bayraklı alan adları veya AI laboratuvarı anahtar kelimeleri içerenler üzerinden Claude Code\'u yönlendirmekten kaçının.',
    'faq.q4': 'Veri yükleniyor mu?',
    'faq.a4':
      'Hayır. Her kontrol tarayıcınızda yerel olarak çalıştırılır ve algulanan işaretler asla gönderilmez. Site, anonim sayfa görüntüleme istatistikleri için yalnızca standart Google Analytics yükler.',
    'privacy.title': 'Gizlilik',
    'privacy.body':
      'Her kontrol tarayıcınızda yerel olarak çalıştırılır — tarama sonuçlarınız cihazınızdan asla ayrılmaz. Site, anonim sayfa görüntüleme istatistikleri için yalnızca Google Analytics yükler.',
    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'Uygulamayla tarayın veya açmak için tıklayın',
    'footer.disclaimer':
      'Yalnızca referans amaçlı, kamu tersine mühendislik raporlarına dayanmaktadır. Resmi bir beyan veya tavsiye değildir.',
    'footer.license':
      'MIT Lisansı altında yayınlanmıştır — yeniden dağıtımlar orijinal proje bildirimini korumalıdır.',
    'footer.repo': 'Orijinal proje',
    'share.label': 'Sonucunuzu paylaşın',
    'share.native': 'Paylaş',
    'share.copy': 'Bağlantıyı kopyala',
    'share.copied': 'Kopyalandı!',
    'share.save': 'Sonuç resmini kaydet',
    'share.saved': 'Kaydedildi!',
    'share.text':
      '"Çin Kullanıcısı mıyım?" testinde {score}/100 puan aldım — {verdict}! 🐶 Sizinkini kontrol edin:',
    'share.to.x': 'X\'te paylaş',
    'share.to.weibo': 'Weibo\'da paylaş',
    'share.to.telegram': 'Telegram\'da paylaş',
    'share.to.facebook': 'Facebook\'ta paylaş',
    'share.to.linkedin': 'LinkedIn\'de paylaş',
    'share.to.reddit': 'Reddit\'te paylaş',
    'api.title': 'curl ile de mevcut',
    'api.desc':
      'Terminal mi tercih ediyorsunuz? Aşağıdaki uç noktayı kullanın — IP coğrafi konumu + istek başlıklarından riskinizi tahmin eder ve Accept-Language başlığınızın dilinde yanıt verir.',
    'api.ex1': '# Metin raporu — Accept-Language\'inizi takip eder',
    'api.ex2': '# Başlıkla dil zorla',
    'api.ex3': '# JSON çıkışı',
    'ui.claudeBadge': 'Claude Same',
    'ui.retest': 'Yeniden tara',
    'ui.start': 'Taramayı başlat',
  },

  vi: {
    'meta.title': 'Fuck Claude | Bạn có phải "người dùng Trung Quốc" của Claude không?',
    'meta.description':
      'Kiểm tra bằng một cú nhấp múi giờ, ngôn ngữ, phông chữ Trung Quốc và vùng cục bộ của trình duyệt để xem Claude Code có đánh dấu bạn là người dùng Trung Quốc hay không. 100% cục bộ, không có gì được tải lên.',
    'nav.title': 'Fuck Claude',
    'credit': 'Được xây dựng với Claude Fable 5',
    'hero.title': 'Bạn có phải "người dùng Trung Quốc" của Claude không?',
    'hero.badge.local': 'Quét 100% cục bộ',
    'hero.badge.noUpload': 'Kết quả không bao giờ được tải lên',
    'hero.badge.openSource': 'Mã nguồn mở',
    'hero.scoreOutOf': '/ 100',
    'band.low.title': 'Rủi ro thấp',
    'band.low.desc': '🐶Bạn không phải "người dùng Trung Quốc của Claude"🐶',
    'band.medium.title': 'Rủi ro trung bình',
    'band.medium.desc': '🐶Bạn có thể là "người dùng Trung Quốc của Claude"🐶',
    'band.high.title': 'Rủi ro cao',
    'band.high.desc': '🐶Bạn chắc chắn là "người dùng Trung Quốc của Claude"🐶',
    'signal.timezone.name': 'Múi giờ hệ thống',
    'signal.timezone.desc':
      'Intl.DateTimeFormat hiển thị cùng múi giờ OS mà Claude Code đọc; so sánh với Asia/Shanghai, Asia/Urumqi và các múi giờ Trung Quốc khác.',
    'signal.language.name': 'Ngôn ngữ trình duyệt',
    'signal.language.desc':
      'navigator.languages — zh-CN / Tiếng Trung giản thể ở đầu danh sách đạt điểm cao nhất.',
    'signal.fonts.name': 'Phông chữ Trung Quốc đã cài đặt',
    'signal.fonts.desc':
      'Phát hiện bằng chiều rộng Canvas cho các phông chữ Trung Quốc giản thể/truyền thống như Microsoft YaHei và PingFang SC.',
    'signal.vendorFonts.name': 'Phông chữ nhà cung cấp Trung Quốc',
    'signal.vendorFonts.desc':
      'Phát hiện Canvas phông chữ từ các nhà cung cấp Trung Quốc — MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder. Bất kỳ khớp nào đều là tín hiệu mạnh.',
    'signal.cnBrowser.name': 'Trình duyệt / WebView Trung Quốc',
    'signal.cnBrowser.desc':
      'User-Agent và thương hiệu UA-CH được so sánh với WeChat, QQ, Quark, UC, Baidu và các trình duyệt Trung Quốc khác hoặc WebView tích hợp.',
    'signal.deviceVendor.name': 'Thiết bị thương hiệu Trung Quốc',
    'signal.deviceVendor.desc':
      'Mẫu thiết bị UA-CH và UA được so sánh với HarmonyOS, Huawei, Xiaomi, OPPO, vivo và các thương hiệu Trung Quốc khác.',
    'signal.intlLocale.name': 'Vùng cục bộ Intl',
    'signal.intlLocale.desc':
      'Vùng cục bộ mà trình duyệt của bạn sử dụng để định dạng ngày và số.',
    'signal.timezoneOffset.name': 'Bù múi giờ',
    'signal.timezoneOffset.desc': 'Liệu getTimezoneOffset() có bằng UTC+8 không.',
    'signal.emoji.name': 'Phong cách hiển thị emoji',
    'signal.emoji.desc':
      'Nhà cung cấp OS suy ra từ user-agent; tín hiệu yếu và ít tương quan.',
    'scan.detecting': 'Đang kiểm tra',
    'scan.ready': 'Sẵn sàng quét',
    'result.hitsTitle': 'Tín hiệu khớp',
    'result.noHits': 'Không tìm thấy tín hiệu Trung Quốc mạnh. Rủi ro thấp.',
    'signals.title': 'Những gì được quét',
    'signals.sub': 'Chín vân tay vùng cục bộ, được cân nhắc thành điểm rủi ro 0–100.',
    'how.title': 'Cách kiểm tra hoạt động',
    'how.p1':
      'Khi Claude Code trỏ đến endpoint proxy qua ANTHROPIC_BASE_URL, các báo cáo reverse engineering công khai phát hiện nó đọc múi giờ OS và tên host proxy, sau đó giấu phán quyết trong system prompt bằng steganography Unicode — dấu phân tách ngày và bốn dấu nháy đơn giống nhau trong dòng "Today\'s date" mã hóa liệu bạn có trông giống người dùng Trung Quốc không.',
    'how.p2':
      'Trang web không thể đọc mọi thứ Claude Code có thể, nhưng tín hiệu khóa giống nhau: công cụ này đọc cùng múi giờ OS, sau đó thêm tám vân tay khác hiển thị bởi trình duyệt — ngôn ngữ UI, phông chữ Trung Quốc, phông chữ nhà cung cấp Trung Quốc, trình duyệt Trung Quốc, thương hiệu thiết bị, vùng cục bộ Intl, bù UTC+8 và phong cách emoji — vào điểm có trọng số. Tín hiệu có điểm ≥0,25 được tính là khớp.',
    'ui.weight': 'Trọng số',
    'faq.title': 'Câu hỏi thường gặp',
    'faq.q1': 'Claude có thực sự kiểm tra múi giờ của tôi không?',
    'faq.a1':
      'Theo các báo cáo reverse engineering công khai, khi Claude Code giao tiếp với endpoint không chính thức, nó đọc múi giờ OS và tên host proxy, mã hóa kết quả vào system prompt bằng steganography. Múi giờ mà trang này đọc qua Intl.DateTimeFormat chính là múi giờ OS đó.',
    'faq.q2': 'Điểm số này có phải là kiểm tra chính xác mà Claude thực hiện không?',
    'faq.a2':
      'Không. Chỉ múi giờ hệ thống tương ứng một-một với cơ chế được báo cáo của Claude. Tám tín hiệu còn lại là các vân tay môi trường Trung Quốc phổ biến tương quan với nó, vì vậy coi điểm số là ước tính, không phải phán quyết.',
    'faq.q3': 'Làm thế nào để hạ điểm số của tôi?',
    'faq.a3':
      'Đổi múi giờ OS ra khỏi các múi giờ Trung Quốc như Asia/Shanghai, di chuyển zh-CN khỏi đầu danh sách ngôn ngữ trình duyệt, và tránh định tuyến Claude Code qua proxy có tên host chứa tên miền bị đánh dấu hoặc từ khóa phòng thí nghiệm AI.',
    'faq.q4': 'Dữ liệu có được tải lên không?',
    'faq.a4':
      'Không. Mỗi kiểm tra chạy cục bộ trong trình duyệt của bạn và bất kỳ tín hiệu nào được phát hiện đều không bao giờ được gửi đi. Trang chỉ tải Google Analytics tiêu chuẩn cho thống kê lượt xem ẩn danh.',
    'privacy.title': 'Quyền riêng tư',
    'privacy.body':
      'Mỗi kiểm tra chạy cục bộ trong trình duyệt của bạn — kết quả quét không bao giờ rời khỏi thiết bị của bạn. Trang chỉ tải Google Analytics cho thống kê lượt xem ẩn danh.',
    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'Quét bằng ứng dụng hoặc nhấp để mở',
    'footer.disclaimer':
      'Chỉ để tham khảo, dựa trên các báo cáo reverse engineering công khai. Không phải tuyên bố chính thức hay lời khuyên.',
    'footer.license':
      'Phân phối theo giấy phép MIT — phân phối lại phải giữ thông báo dự án gốc.',
    'footer.repo': 'Dự án gốc',
    'share.label': 'Chia sẻ kết quả của bạn',
    'share.native': 'Chia sẻ',
    'share.copy': 'Sao chép liên kết',
    'share.copied': 'Đã sao chép!',
    'share.save': 'Lưu hình ảnh kết quả',
    'share.saved': 'Đã lưu!',
    'share.text':
      'Tôi đạt {score}/100 trong bài kiểm tra "Tôi có phải người dùng Trung Quốc của Claude?" — {verdict}! 🐶 Kiểm tra của bạn:',
    'share.to.x': 'Chia sẻ trên X',
    'share.to.weibo': 'Chia sẻ trên Weibo',
    'share.to.telegram': 'Chia sẻ trên Telegram',
    'share.to.facebook': 'Chia sẻ trên Facebook',
    'share.to.linkedin': 'Chia sẻ trên LinkedIn',
    'share.to.reddit': 'Chia sẻ trên Reddit',
    'api.title': 'Cũng có sẵn qua curl',
    'api.desc':
      'Thích terminal? Sử dụng endpoint bên dưới — ước tính rủi ro từ vị trí IP + header yêu cầu và trả lời bằng ngôn ngữ header Accept-Language của bạn.',
    'api.ex1': '# Báo cáo văn bản — theo Accept-Language của bạn',
    'api.ex2': '# Bắt buộc ngôn ngữ qua header',
    'api.ex3': '# Xuất JSON',
    'ui.claudeBadge': 'Claude Same',
    'ui.retest': 'Quét lại',
    'ui.start': 'Bắt đầu quét',
  },

  th: {
    'meta.title': 'Fuck Claude | คุณเป็น "ผู้ใช้จีน" ของ Claude หรือไม่?',
    'meta.description':
      'ตรวจสอบโซนเวลา ภาษา ฟอนต์จีน และ locale ของเบราว์เซอร์ด้วยการคลิกเดียว เพื่อดูว่า Claude Code จะระบุคุณเป็นผู้ใช้จีนหรือไม่ 100% ท้องถิ่น ไม่มีการอัปโหลดข้อมูล',
    'nav.title': 'Fuck Claude',
    'credit': 'สร้างด้วย Claude Fable 5',
    'hero.title': 'คุณเป็น "ผู้ใช้จีน" ของ Claude หรือไม่?',
    'hero.badge.local': 'สแกน 100% ท้องถิ่น',
    'hero.badge.noUpload': 'ผลลัพธ์ไม่เคยถูกอัปโหลด',
    'hero.badge.openSource': 'โอเพนซอร์ส',
    'hero.scoreOutOf': '/ 100',
    'band.low.title': 'ความเสี่ยงต่ำ',
    'band.low.desc': '🐶คุณไม่ใช่ "ผู้ใช้จีนของ Claude"🐶',
    'band.medium.title': 'ความเสี่ยงปานกลาง',
    'band.medium.desc': '🐶คุณอาจเป็น "ผู้ใช้จีนของ Claude"🐶',
    'band.high.title': 'ความเสี่ยงสูง',
    'band.high.desc': '🐶คุณเป็น "ผู้ใช้จีนของ Claude" อย่างแน่นอน🐶',
    'signal.timezone.name': 'โซนเวลาของระบบ',
    'signal.timezone.desc':
      'Intl.DateTimeFormat เผยแพร่โซนเวลา OS เดียวกับที่ Claude Code อ่าน เปรียบเทียบกับ Asia/Shanghai, Asia/Urumqi และโซนจีนอื่นๆ',
    'signal.language.name': 'ภาษาเบราว์เซอร์',
    'signal.language.desc':
      'navigator.languages — zh-CN / ภาษาจีนตัวย่ออยู่ด้านบนสุดของรายการจะได้คะแนนสูงสุด',
    'signal.fonts.name': 'ฟอนต์จีนที่ติดตั้ง',
    'signal.fonts.desc':
      'การตรวจจับความกว้าง Canvas สำหรับฟอนต์จีนตัวย่อ/ตัวเต็ม เช่น Microsoft YaHei และ PingFang SC',
    'signal.vendorFonts.name': 'ฟอนต์จากผู้ผลิตจีน',
    'signal.vendorFonts.desc':
      'การตรวจจับ Canvas ฟอนต์จากผู้ผลิตจีน — MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder การตรงกันใดๆ เป็นสัญญาณที่แข็งแกร่ง',
    'signal.cnBrowser.name': 'เบราว์เซอร์ / WebView จีน',
    'signal.cnBrowser.desc':
      'User-Agent และแบรนด์ UA-CH ตรงกับ WeChat, QQ, Quark, UC, Baidu และเบราว์เซอร์จีนอื่นๆ หรือ WebView ในแอป',
    'signal.deviceVendor.name': 'อุปกรณ์แบรนด์จีน',
    'signal.deviceVendor.desc':
      'โมเดลอุปกรณ์ UA-CH และ UA ตรงกับ HarmonyOS, Huawei, Xiaomi, OPPO, vivo และแบรนด์จีนอื่นๆ',
    'signal.intlLocale.name': 'Locale ของ Intl',
    'signal.intlLocale.desc':
      'Locale ที่เบราว์เซอร์ของคุณใช้สำหรับการจัดรูปแบบวันที่และตัวเลข',
    'signal.timezoneOffset.name': 'ออฟเซตโซนเวลา',
    'signal.timezoneOffset.desc': 'getTimezoneOffset() เท่ากับ UTC+8 หรือไม่',
    'signal.emoji.name': 'สไตล์การเรนเดอร์อิโมจิ',
    'signal.emoji.desc':
      'ผู้ให้บริการ OS ที่คาดเดาจาก user-agent สัญญาณที่อ่อนและเกี่ยวข้องน้อย',
    'scan.detecting': 'กำลังตรวจสอบ',
    'scan.ready': 'พร้อมสแกน',
    'result.hitsTitle': 'สัญญาณที่ตรงกัน',
    'result.noHits': 'ไม่พบสัญญาณจีนที่แข็งแกร่ง ความเสี่ยงต่ำ',
    'signals.title': 'สิ่งที่ถูกสแกน',
    'signals.sub': 'ลายนิ้วมือ locale เก้ารายการ ชั่งน้ำหนักเป็นคะแนนความเสี่ยง 0–100',
    'how.title': 'วิธีการทำงานของการตรวจสอบ',
    'how.p1':
      'เมื่อ Claude Code ชี้ไปที่ endpoint ผ่าน ANTHROPIC_BASE_URL รายงาน reverse engineering สาธารณะพบว่ามันอ่านโซนเวลา OS และชื่อโฮสต์ proxy แล้วซ่อนคำตัดสินไว้ใน system prompt ด้วย Unicode steganography — ตัวคั่นวันที่และเครื่องหมายอัญประกาศสี่ตัวที่คล้ายกันในบรรทัด "Today\'s date" endcode ว่าคุณดูเหมือนผู้ใช้จีนหรือไม่',
    'how.p2':
      'เว็บเพจไม่สามารถอ่านทุกอย่างที่ Claude Code อ่านได้ แต่สัญญาณหลักเหมือนกัน: เครื่องมือนี้อ่านโซนเวลา OS เดียวกัน แล้วเพิ่มลายนิ้วมืออื่นๆ อีกแปดรายการที่เบราว์เซอร์มองเห็น — ภาษา UI, ฟอนต์จีน, ฟอนต์ผู้ผลิตจีน, เบราว์เซอร์จีน, แบรนด์อุปกรณ์, locale Intl, ออฟเซต UTC+8 และสไตล์อิโมจิ — ในคะแนนที่มีน้ำหนัก สัญญาณที่มีคะแนน ≥0.25 นับเป็นการตรงกัน',
    'ui.weight': 'น้ำหนัก',
    'faq.title': 'คำถามที่พบบ่อย',
    'faq.q1': 'Claude ตรวจสอบโซนเวลาของฉันจริงหรือ?',
    'faq.a1':
      'ตามรายงาน reverse engineering สาธารณะ เมื่อ Claude Code สื่อสารกับ endpoint ที่ไม่เป็นทางการ มันอ่านโซนเวลา OS และชื่อโฮสต์ proxy แล้วendcode ผลลัพธ์ใน system prompt ด้วย steganography โซนเวลาที่หน้านี้อ่านผ่าน Intl.DateTimeFormat คือโซนเวลา OS เดียวกัน',
    'faq.q2': 'คะแนนนี้เป็นการตรวจสอบที่แน่นอนที่ Claude ดำเนินการหรือ?',
    'faq.a2':
      'ไม่ โซนเวลาของระบบเท่านั้นที่ตรงกับกลไกที่รายงานของ Claude 1:1 สัญญาณอื่นอีกแปดรายการเป็นลายนิ้วมือสภาพแวดล้อมจีนทั่วไปที่เกี่ยวข้องกัน ดังนั้นให้พิจารณาคะแนนเป็นการประมาณ ไม่ใช่คำตัดสิน',
    'faq.q3': 'ฉันจะลดคะแนนได้อย่างไร?',
    'faq.a3':
      'เปลี่ยนโซนเวลา OS ออกจากโซนจีน เช่น Asia/Shanghai ย้าย zh-CN ออกจากด้านบนสุดของรายการภาษาเบราว์เซอร์ และหลีกเลี่ยงการกำหนดเส้นทาง Claude Code ผ่าน proxy ที่ชื่อโฮสต์มีโดเมนที่ถูกทำเครื่องหมายหรือคำสำคัญจากห้องปฏิบัติการ AI',
    'faq.q4': 'มีการอัปโหลดข้อมูลหรือไม่?',
    'faq.a4':
      'ไม่ การตรวจสอบทุกครั้งทำงานในท้องถิ่นในเบราว์เซอร์ของคุณและสัญญาณที่ตรวจจับได้จะไม่ถูกส่งไปที่ใดเลย เว็บไซต์โหลดเฉพาะ Google Analytics สำหรับสถิติการเข้าชมแบบ.anonymous',
    'privacy.title': 'ความเป็นส่วนตัว',
    'privacy.body':
      'การตรวจสอบทุกครั้งทำงานในท้องถิ่นในเบราว์เซอร์ของคุณ ผลการสแกนไม่เคยออกจากอุปกรณ์ของคุณ เว็บไซต์โหลดเฉพาะ Google Analytics สำหรับสถิติการเข้าชมแบบ.anonymous',
    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'สแกนด้วยแอปหรือคลิกเพื่อเปิด',
    'footer.disclaimer':
      'สำหรับอ้างอิงเท่านั้น อ้างอิงจากรายงาน reverse engineering สาธารณะ ไม่ใช่คำแถลงการณ์หรือคำแนะนำอย่างเป็นทางการ',
    'footer.license':
      'เผยแพร่ภายใต้สัญญาอนุญาต MIT — การแจกจ่ายซ้ำต้องคงการแจ้งเตือนโปรเจกต์เดิมไว้',
    'footer.repo': 'โปรเจกต์เดิม',
    'share.label': 'แชร์ผลลัพธ์ของคุณ',
    'share.native': 'แชร์',
    'share.copy': 'คัดลอกลิงก์',
    'share.copied': 'คัดลอกแล้ว!',
    'share.save': 'บันทึกรูปภาพผลลัพธ์',
    'share.saved': 'บันทึกแล้ว!',
    'share.text':
      'ฉันได้ {score}/100 จากการทดสอบ "ฉันเป็นผู้ใช้จีนของ Claude หรือไม่" — {verdict}! 🐶 ตรวจสอบของคุณ:',
    'share.to.x': 'แชร์บน X',
    'share.to.weibo': 'แชร์บน Weibo',
    'share.to.telegram': 'แชร์บน Telegram',
    'share.to.facebook': 'แชร์บน Facebook',
    'share.to.linkedin': 'แชร์บน LinkedIn',
    'share.to.reddit': 'แชร์บน Reddit',
    'api.title': 'มีให้ใช้งานผ่าน curl ด้วย',
    'api.desc':
      'ชอบเทอร์มินัล? ใช้ endpoint ด้านล่าง — ประมาณความเสี่ยงจากตำแหน่ง IP + headers ของคำขอ และตอบกลับตามภาษาของ Accept-Language header',
    'api.ex1': '# รายงานข้อความ — ตาม Accept-Language ของคุณ',
    'api.ex2': '# บังคับภาษาผ่าน header',
    'api.ex3': '# JSON output',
    'ui.claudeBadge': 'Claude Same',
    'ui.retest': 'สแกนอีกครั้ง',
    'ui.start': 'เริ่มสแกน',
  },

  id: {
    'meta.title': 'Fuck Claude | Apakah Anda "pengguna China" Claude?',
    'meta.description':
      'Periksa dengan satu klik zona waktu, bahasa, font Cina, dan locale browser Anda untuk melihat apakah Claude Code akan menandai Anda sebagai pengguna China. 100% lokal, tidak ada yang diunggah.',
    'nav.title': 'Fuck Claude',
    'credit': 'Dibangun dengan Claude Fable 5',
    'hero.title': 'Apakah Anda "pengguna China" Claude?',
    'hero.badge.local': 'Pemindaian 100% lokal',
    'hero.badge.noUpload': 'Hasil tidak pernah diunggah',
    'hero.badge.openSource': 'Sumber terbuka',
    'hero.scoreOutOf': '/ 100',
    'band.low.title': 'Risiko rendah',
    'band.low.desc': '🐶Anda bukan "pengguna China Claude"🐶',
    'band.medium.title': 'Risiko sedang',
    'band.medium.desc': '🐶Anda mungkin adalah "pengguna China Claude"🐶',
    'band.high.title': 'Risiko tinggi',
    'band.high.desc': '🐶Anda pasti adalah "pengguna China Claude"🐶',
    'signal.timezone.name': 'Zona waktu sistem',
    'signal.timezone.desc':
      'Intl.DateTimeFormat mengekspos zona waktu OS yang sama dengan yang dibaca Claude Code; dibandingkan dengan Asia/Shanghai, Asia/Urumqi dan zona China lainnya.',
    'signal.language.name': 'Bahasa browser',
    'signal.language.desc':
      'navigator.languages — zh-CN / Tionghoa Sederhana di daftar paling atas mendapat skor tertinggi.',
    'signal.fonts.name': 'Font Tionghoa yang terpasang',
    'signal.fonts.desc':
      'Deteksi lebar Canvas untuk font Tionghoa sederhana/tradisional seperti Microsoft YaHei dan PingFang SC.',
    'signal.vendorFonts.name': 'Font vendor Tionghoa',
    'signal.vendorFonts.desc':
      'Deteksi Canvas font dari vendor Tionghoa — MiSans, HarmonyOS Sans, OPPO Sans, WPS Founder. Setiap kecocokan adalah sinyal kuat.',
    'signal.cnBrowser.name': 'Browser / WebView Tionghoa',
    'signal.cnBrowser.desc':
      'User-Agent dan merek UA-CH dibandingkan dengan WeChat, QQ, Quark, UC, Baidu dan browser Tionghoa lainnya atau WebView bawaan.',
    'signal.deviceVendor.name': 'Perangkat merek Tionghoa',
    'signal.deviceVendor.desc':
      'Model perangkat UA-CH dan UA dibandingkan dengan HarmonyOS, Huawei, Xiaomi, OPPO, vivo dan merek Tionghoa lainnya.',
    'signal.intlLocale.name': 'Locale Intl',
    'signal.intlLocale.desc':
      'Locale yang digunakan browser Anda untuk format tanggal dan angka.',
    'signal.timezoneOffset.name': 'Offset zona waktu',
    'signal.timezoneOffset.desc': 'Apakah getTimezoneOffset() sama dengan UTC+8.',
    'signal.emoji.name': 'Gaya rendering emoji',
    'signal.emoji.desc':
      'Vendor OS dugaan dari user-agent; sinyal lemah dan berkorelasi rendah.',
    'scan.detecting': 'Memeriksa',
    'scan.ready': 'Siap memindai',
    'result.hitsTitle': 'Sinyal yang cocok',
    'result.noHits': 'Tidak ada sinyal China kuat yang ditemukan. Risiko rendah.',
    'signals.title': 'Apa yang dipindai',
    'signals.sub': 'Sembilan sidik jari locale, diboboti menjadi skor risiko 0–100.',
    'how.title': 'Cara kerja pemeriksaan',
    'how.p1':
      'Ketika Claude Code menunjuk ke endpoint proxy melalui ANTHROPIC_BASE_URL, laporan reverse engineering publik menemukan bahwa ia membaca zona waktu OS dan nama host proxy, lalu menyembunyikan keputusan di dalam system prompt dengan steganografi Unicode — pemisah tanggal dan empat tanda kutip serupa di baris "Today\'s date" mengenkripsi apakah Anda tampak seperti pengguna China.',
    'how.p2':
      'Halaman web tidak dapat membaca semua yang bisa dibaca Claude Code, tetapi sinyal utama identik: alat ini membaca zona waktu OS yang sama, lalu menambahkan delapan sidik jari lain yang terlihat oleh browser — bahasa UI, font Tionghoa, font vendor Tionghoa, browser Tionghoa, merek perangkat, locale Intl, offset UTC+8 dan gaya emoji — ke dalam skor berbobot. Sinyal dengan skor ≥0,25 dihitung sebagai kecocokan.',
    'ui.weight': 'Bobot',
    'faq.title': 'Pertanyaan yang Sering Diajukan',
    'faq.q1': 'Apakah Claude benar-benar memeriksa zona waktu saya?',
    'faq.a1':
      'Menurut laporan reverse engineering publik, ketika Claude Code berkomunikasi dengan endpoint non-resmi, ia membaca zona waktu OS dan nama host proxy, dan mengenkripsi hasilnya ke dalam system prompt-nya menggunakan steganografi. Zona waktu yang dibaca halaman ini melalui Intl.DateTimeFormat adalah zona waktu OS yang sama persis.',
    'faq.q2': 'Apakah skor ini adalah pemeriksaan pasti yang dilakukan Claude?',
    'faq.a2':
      'Tidak. Hanya zona waktu sistem yang sesuai satu-ke-satu dengan mekanisme yang dilaporkan Claude. Delapan sinyal lainnya adalah sidik jari lingkungan China umum yang berkorelasi dengannya, jadi perlakukan skor sebagai perkiraan, bukan keputusan.',
    'faq.q3': 'Bagaimana saya bisa menurunkan skor saya?',
    'faq.a3':
      'Alihkan zona waktu OS dari zona China seperti Asia/Shanghai, pindahkan zh-CN dari daftar bahasa browser, dan hindari merutekan Claude Code melalui proxy yang nama host-nya berisi domain yang ditandai atau kata kunci laboratorium AI.',
    'faq.q4': 'Apakah ada data yang diunggah?',
    'faq.a4':
      'Tidak. Setiap pemeriksaan berjalan secara lokal di browser Anda dan tidak ada sinyal yang terdeteksi yang pernah dikirim. Situs hanya memuat Google Analytics standar untuk statistik kunjungan anonim.',
    'privacy.title': 'Privasi',
    'privacy.body':
      'Setiap pemeriksaan berjalan secara lokal di browser Anda — hasil pemindaian Anda tidak pernah meninggalkan perangkat Anda. Situs hanya memuat Google Analytics untuk statistik kunjungan anonim.',
    'social.x': 'X (Twitter)',
    'social.xiaohongshu': 'Xiaohongshu (RED)',
    'social.douyin': 'Douyin',
    'social.jike': 'Jike',
    'social.scan': 'Pindai dengan aplikasi atau klik untuk membuka',
    'footer.disclaimer':
      'Hanya untuk referensi, berdasarkan laporan reverse engineering publik. Bukan pernyataan resmi atau saran.',
    'footer.license':
      'Didistribusikan di bawah lisensi MIT — distribusi ulang harus mempertahankan pemberitahuan proyek asli.',
    'footer.repo': 'Proyek asli',
    'share.label': 'Bagikan hasil Anda',
    'share.native': 'Bagikan',
    'share.copy': 'Salin tautan',
    'share.copied': 'Disalin!',
    'share.save': 'Simpan gambar hasil',
    'share.saved': 'Tersimpan!',
    'share.text':
      'Saya mendapat {score}/100 dalam tes "Apakah Saya Pengguna China Claude?" — {verdict}! 🐶 Periksa milik Anda:',
    'share.to.x': 'Bagikan di X',
    'share.to.weibo': 'Bagikan di Weibo',
    'share.to.telegram': 'Bagikan di Telegram',
    'share.to.facebook': 'Bagikan di Facebook',
    'share.to.linkedin': 'Bagikan di LinkedIn',
    'share.to.reddit': 'Bagikan di Reddit',
    'api.title': 'Juga tersedia melalui curl',
    'api.desc':
      'Lebih suka terminal? Gunakan endpoint di bawah — memperkirakan risiko dari geolokasi IP + header permintaan, dan membalas dalam bahasa header Accept-Language Anda.',
    'api.ex1': '# Laporan teks — mengikuti Accept-Language Anda',
    'api.ex2': '# Paksa bahasa melalui header',
    'api.ex3': '# Output JSON',
    'ui.claudeBadge': 'Claude Same',
    'ui.retest': 'Pindai lagi',
    'ui.start': 'Mulai pemindaian',
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

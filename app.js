const routes = [
  "home",
  "collections",
  "designer",
  "gallery",
  "gems",
  "materials",
  "guide",
  "care",
  "articles",
  "reviews",
  "faq",
  "contact",
];

const collections = [
  {
    slug: "moon-ritual",
    name: "Moon Ritual",
    type: "守护",
    price: "¥980 起",
    basePrice: 980,
    views: 2480,
    remixes: 186,
    beads: 22,
    designer: "Atelier 02",
    tags: ["生日", "清透", "新阶段", "低饱和"],
    colors: ["月光石", "白水晶", "银隔珠"],
    style: "清透、轻盈、适合日常叠戴",
    bestFor: "生日、新阶段、刚入门的天然石礼物",
    story: "用月光石的柔光和白水晶的干净感做主线，适合想表达陪伴但不希望过度隆重的礼物。",
    a: "#f6f6f1",
    b: "#cbd8d7",
  },
  {
    slug: "rose-compass",
    name: "Rose Compass",
    type: "礼物",
    price: "¥1,280 起",
    basePrice: 1280,
    views: 3920,
    remixes: 341,
    beads: 24,
    designer: "Mia",
    tags: ["伴侣", "礼物", "温柔", "玫瑰金"],
    colors: ["粉晶", "石榴石", "玫瑰金"],
    style: "温柔、偏暖、上手有气色",
    bestFor: "伴侣、闺蜜、母亲生日",
    story: "粉晶建立亲近感，石榴石增加成熟浓度，玫瑰金隔珠让整体更像轻珠宝。",
    a: "#f9e5e8",
    b: "#c98b95",
  },
  {
    slug: "forest-signal",
    name: "Forest Signal",
    type: "通勤",
    price: "¥1,580 起",
    basePrice: 1580,
    views: 2140,
    remixes: 148,
    beads: 23,
    designer: "Studio Green",
    tags: ["通勤", "森绿", "中性", "低调"],
    colors: ["绿幽灵", "青金石", "银隔珠"],
    style: "克制、自然、适合中性色衣橱",
    bestFor: "通勤、长期目标、低调礼物",
    story: "用绿色和深蓝形成稳定感，适合不喜欢甜美风、想要更沉静表达的人。",
    a: "#dcebe2",
    b: "#557869",
  },
  {
    slug: "sun-archive",
    name: "Sun Archive",
    type: "纪念日",
    price: "¥1,880 起",
    basePrice: 1880,
    views: 3012,
    remixes: 255,
    beads: 22,
    designer: "Jade",
    tags: ["纪念日", "暖金", "事业", "男性礼物"],
    colors: ["黄水晶", "虎眼石", "金隔珠"],
    style: "明亮、稳重、适合秋冬搭配",
    bestFor: "纪念日、事业节点、男性礼物",
    story: "暖金色系更有仪式感，也能兼顾日常佩戴的稳重度。",
    a: "#f7dda5",
    b: "#b88436",
  },
  {
    slug: "quiet-tide",
    name: "Quiet Tide",
    type: "生日",
    price: "¥1,680 起",
    basePrice: 1680,
    views: 1768,
    remixes: 119,
    beads: 24,
    designer: "Atelier 01",
    tags: ["生日", "清爽", "旅行", "夏季"],
    colors: ["海蓝宝", "拉长石", "银隔珠"],
    style: "清爽、柔和、带一点冷光泽",
    bestFor: "夏季生日、旅行、清淡衣橱",
    story: "海蓝宝做明亮主调，拉长石增加天然石的层次感，整体清冷但不疏离。",
    a: "#e5f3f2",
    b: "#6b9aa4",
  },
  {
    slug: "ember-line",
    name: "Ember Line",
    type: "能量",
    price: "¥1,480 起",
    basePrice: 1480,
    views: 2296,
    remixes: 204,
    beads: 21,
    designer: "Noir",
    tags: ["能量", "自购", "浓郁", "利落"],
    colors: ["红玛瑙", "黑尖晶", "金隔珠"],
    style: "浓郁、有力量、适合利落穿搭",
    bestFor: "自购、阶段目标、节日礼物",
    story: "红黑金的对比更有存在感，适合想要一条明确表达状态的珠宝。",
    a: "#f2d0c7",
    b: "#7c3f38",
  },
];

const serviceTiers = [
  ["Starter", "¥680-1,200", "适合第一次定制、简洁手串", ["1 次需求梳理", "2 个搭配方向", "基础礼盒与保养卡"]],
  ["Signature", "¥1,200-2,800", "主推服务，适合礼物和纪念日", ["3 个搭配方向", "主石实拍确认", "尺寸微调与 90 天复检"]],
  ["Heirloom", "¥3,000+", "适合重要节点和高预算材质", ["专属石材采购", "金属吊牌/刻字", "完整设计档案与长期改款"]],
];

const gems = [
  ["粉晶", "温柔、关系、日常礼物", "莫氏 7", "避免长时间暴晒，温水软布清洁"],
  ["月光石", "新阶段、生日、轻婚礼感", "莫氏 6-6.5", "避免碰撞，单独收纳"],
  ["黄水晶", "事业、庆祝、明亮穿搭", "莫氏 7", "可日常佩戴，远离强酸碱"],
  ["绿幽灵", "成长、长期目标、自然气质", "莫氏 7", "用微湿软布擦拭"],
  ["海蓝宝", "沟通、旅行、清爽造型", "莫氏 7.5-8", "可短时接触清水，避免高温"],
  ["石榴石", "纪念日、承诺、浓郁色系", "莫氏 6.5-7.5", "避免剧烈温差"],
  ["虎眼石", "力量、男性礼物、中性色", "莫氏 7", "减少香水和汗液残留"],
  ["拉长石", "灵感、低调光泽、叠戴", "莫氏 6-6.5", "轻拿轻放，避免硬物摩擦"],
  ["黑尖晶", "利落、保护感、晚间搭配", "莫氏 7.5-8", "耐用度好，注意金属件氧化"],
  ["白水晶", "干净、平衡、百搭叠戴", "莫氏 7", "定期擦拭汗液与护肤品残留"],
];

const articles = [
  ["第一次定制手串前要准备什么？", "预算、手围、佩戴场景和禁忌材质，是沟通效率最高的四件事。", "6 分钟阅读"],
  ["天然石颜色为什么每颗都不一样？", "色带、棉絮、冰裂和包体不是缺陷，而是天然材质的身份证。", "4 分钟阅读"],
  ["送礼怎么选不容易出错？", "从关系浓度、对方衣橱颜色和佩戴习惯判断，而不是只看寓意。", "5 分钟阅读"],
  ["珠宝售后和改圈怎么说明才专业？", "把保养、线材更换、复检和二次设计写清楚，信任感会明显提升。", "7 分钟阅读"],
  ["如何量手围更准确？", "用软尺贴合手腕最细处，再根据喜欢的松紧度加 0.5-1.5cm。", "3 分钟阅读"],
  ["礼盒里应该放什么？", "保养卡、备用线、材质说明和祝福卡能显著提高礼物完整度。", "4 分钟阅读"],
];

const reviews = [
  ["给妈妈的生日礼物从聊天到出图只用了两天，顾问会把每颗石头的意义讲得很清楚。", "Lina", "生日礼物", "Signature"],
  ["我不喜欢过度玄学，他们按穿搭和手围做了三版方案，最后成品很日常。", "Chen", "通勤佩戴", "Starter"],
  ["纪念日款里面刻了小银牌，包装和保养卡都很完整，收到的人很喜欢。", "Mia", "纪念日", "Signature"],
  ["给伴娘做了 6 条不同手围的同色系，交付清单很细，分装也清楚。", "Yuki", "婚礼伴手礼", "Heirloom"],
];

const designState = {
  purpose: "生日礼物",
  wrist: "15-16 cm",
  palette: "柔粉",
  metal: "银色",
  budget: "1200-1800",
  accent: "小吊牌",
  beadSize: "8mm",
  fit: "舒适",
  packaging: "礼盒",
  timeline: "常规 5-9 天",
};

const palettes = {
  "柔粉": ["#f1c7cf", "#f8eff0", "#b65361", "#f7dedf", "#d7969e", "#ffffff"],
  "清透": ["#e8f6f6", "#ffffff", "#b7d7d7", "#d9eef0", "#eef9f8", "#c3d0c6"],
  "森绿": ["#b7ccb9", "#4f7c67", "#dfeade", "#8ca894", "#f7fbf4", "#2f5648"],
  "暖金": ["#e0b45d", "#f6e5bd", "#9f7032", "#fff5d8", "#c6923c", "#f8f1df"],
  "浓红": ["#762d31", "#d9a19b", "#2f2523", "#b74d4d", "#f7ded7", "#c39248"],
};

const budgetBase = {
  "600-1000": 860,
  "1200-1800": 1480,
  "2000-3500": 2680,
  "3500+": 4200,
};

const galleryState = {
  filter: "全部",
  query: "",
  sort: "热门",
  tag: "全部",
};

const materialAdvice = {
  "柔粉": {
    stones: "粉晶 / 石榴石 / 白水晶",
    words: "温柔、亲近、有纪念感",
    avoid: "不建议搭配过多冷色金属，否则礼物感会变弱。",
  },
  "清透": {
    stones: "月光石 / 白水晶 / 海蓝宝",
    words: "清爽、轻盈、新阶段",
    avoid: "珠径不宜过大，过大会显得笨重。",
  },
  "森绿": {
    stones: "绿幽灵 / 青金石 / 拉长石",
    words: "稳定、自然、通勤友好",
    avoid: "建议减少高亮金色，保留低调感。",
  },
  "暖金": {
    stones: "黄水晶 / 虎眼石 / 茶晶",
    words: "明亮、事业、成熟礼物",
    avoid: "肤色偏冷的人可降低黄色占比。",
  },
  "浓红": {
    stones: "红玛瑙 / 黑尖晶 / 石榴石",
    words: "力量、明确、存在感",
    avoid: "日常通勤可加入透明石降低浓度。",
  },
};

function getCurrentRoute() {
  return location.hash.replace("#", "") || "home";
}

function setRoute(route) {
  const current = routes.includes(route) ? route : route.startsWith("case-") ? route : "home";
  document.querySelectorAll(".nav a").forEach((link) => {
    const target = link.getAttribute("href").replace("#", "");
    link.classList.toggle("active", target === current || (current.startsWith("case-") && target === "gallery"));
  });
  document.getElementById("app").innerHTML = renderRoute(current);
  bindPage(current);
  window.scrollTo({ top: 0, behavior: "instant" });
}

function renderRoute(route) {
  if (route.startsWith("case-")) return renderCaseDetail(route.replace("case-", ""));
  const pages = {
    home: renderHome,
    collections: renderCollections,
    designer: renderDesigner,
    gallery: renderGallery,
    gems: renderGems,
    materials: renderMaterials,
    guide: renderGuide,
    care: renderCare,
    articles: renderArticles,
    reviews: renderReviews,
    faq: renderFaq,
    contact: renderContact,
  };
  return pages[route] ? pages[route]() : pages.home();
}

function renderHome() {
  return `
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Custom gemstone jewelry</p>
        <h1>为某个特别的人，设计一件真正只属于 TA 的珠宝。</h1>
        <p class="hero-copy">从灵感问卷、宝石搭配、在线预览到成品售后，把定制手串和轻珠宝做成清晰、安心、可参与的体验。</p>
        <div class="actions">
          <a class="button" href="#designer">开始在线设计</a>
          <a class="button secondary" href="#collections">查看服务套餐</a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="trust-row">
        ${[
          ["1 对 1", "顾问沟通材质、寓意、预算和佩戴场景"],
          ["3 版", "每个订单默认提供方向方案和修改建议"],
          ["7 天", "成品交付后支持尺寸微调与复检"],
          ["天然石", "每颗珠子拍照建档，保留差异与纹理"],
        ].map(([k, v]) => `<div class="trust-item"><strong>${k}</strong><p>${v}</p></div>`).join("")}
      </div>
    </section>
    ${renderServicePreview()}
    <section class="section split">
      <div class="split-copy">
        <p class="eyebrow">Atelier standard</p>
        <h2>把“定制感”拆成用户看得懂的承诺。</h2>
        <p>所有方案都需要说明主石、辅石、金属件、手围、佩戴松紧、预算构成和售后边界。用户不是只买一条手串，而是在买一套放心的决策流程。</p>
        <div class="mini-list">
          <span>材质实拍确认</span><span>预算分层报价</span><span>礼盒与保养卡</span><span>长期改款入口</span>
        </div>
      </div>
      <img src="./assets/atelier-workbench.png" alt="定制珠宝工坊材料台" />
    </section>
    ${renderGalleryPreview()}
    <section class="section green">
      <div class="contact-wrap">
        <div>
          <p class="eyebrow">Concierge</p>
          <h2>不知道从哪开始，也可以直接让顾问帮你判断。</h2>
          <p>告诉我们预算、关系、对方日常风格和希望表达的心意，我们会先给出一份低压力的方向建议。</p>
        </div>
        ${renderMiniForm()}
      </div>
    </section>
  `;
}

function renderServicePreview() {
  return `
    <section class="section soft">
      <div class="section-head">
        <div><p class="eyebrow">Service tiers</p><h2>先把服务边界讲清楚。</h2></div>
        <a class="button ghost" href="#collections">看全部系列</a>
      </div>
      <div class="grid three">${serviceTiers.map(renderTierCard).join("")}</div>
    </section>
  `;
}

function renderTierCard([name, price, text, items]) {
  return `
    <article class="card price-card">
      <span class="metric">${price}</span>
      <h3>${name}</h3>
      <p>${text}</p>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
      <a class="button ghost" href="#contact">咨询 ${name}</a>
    </article>
  `;
}

function renderCollections() {
  return `
    <section class="section">
      <div class="section-head">
        <div><p class="eyebrow">Collections</p><h2>成品方向与服务套餐</h2></div>
        <p>这些不是固定 SKU，而是用户进入定制前最容易理解的风格入口。</p>
      </div>
      <div class="grid three">${serviceTiers.map(renderTierCard).join("")}</div>
    </section>
    <section class="section soft">
      <div class="section-head">
        <div><p class="eyebrow">Signature routes</p><h2>六个可快速复用的设计方向</h2></div>
        <a class="button ghost" href="#designer">打开设计器</a>
      </div>
      <div class="gallery-grid">${collections.map(renderJewelCard).join("")}</div>
    </section>
  `;
}

function renderGalleryPreview() {
  return `
    <section class="section">
      <div class="section-head">
        <div><p class="eyebrow">Inspiration</p><h2>先从风格和场景选，不从石头名词选。</h2></div>
        <a class="button ghost" href="#gallery">进入图库</a>
      </div>
      <div class="gallery-grid">${collections.slice(0, 3).map(renderJewelCard).join("")}</div>
    </section>
  `;
}

function renderDesigner() {
  const advice = materialAdvice[designState.palette];
  return `
    <section class="section soft">
      <div class="section-head">
        <div><p class="eyebrow">Design studio</p><h2>在线设计器</h2></div>
        <p>像填一张顾问需求单一样完成定制方向，实时生成搭配建议、预算拆分和可复制方案。</p>
      </div>
      <div class="designer-layout">
        <aside class="designer-panel">
          <div class="step-tabs">
            <span>1 场景</span><span>2 材质</span><span>3 细节</span><span>4 预算</span>
          </div>
          ${control("purpose", "定制用途", ["生日礼物", "纪念日", "日常通勤", "能量守护", "婚礼伴手礼"])}
          ${control("wrist", "手围", ["14-15 cm", "15-16 cm", "16-17 cm", "17-18 cm"])}
          ${control("palette", "主色系", Object.keys(palettes))}
          ${control("metal", "隔珠金属", ["银色", "玫瑰金", "暖金", "无金属"])}
          ${control("beadSize", "珠径", ["6mm", "8mm", "10mm"])}
          ${control("fit", "佩戴松紧", ["贴手", "舒适", "宽松"])}
          ${control("accent", "细节", ["小吊牌", "刻字牌", "无吊牌", "双圈叠戴"])}
          ${control("packaging", "包装", ["简装", "礼盒", "礼盒+手写卡"])}
          ${control("timeline", "交付时间", ["常规 5-9 天", "加急 3-5 天", "婚礼批量"])}
          ${control("budget", "预算", ["600-1000", "1200-1800", "2000-3500", "3500+"])}
          <div class="result-box" id="designSummary"></div>
          <div class="designer-actions">
            <button class="button" id="sendDesign" type="button">带着方案咨询</button>
            <button class="button ghost" id="copyDesign" type="button">复制方案</button>
            <button class="button ghost" id="resetDesign" type="button">重置</button>
          </div>
        </aside>
        <div>
          <div class="designer-preview">
            <div class="bracelet-stage"><div class="bead-ring" id="beadRing"></div></div>
          </div>
          <div class="estimate-panel">
            <div><span>建议主石</span><strong id="stoneAdvice"></strong></div>
            <div><span>预估价格</span><strong id="priceEstimate"></strong></div>
            <div><span>交付周期</span><strong id="timelineAdvice">${designState.timeline}</strong></div>
          </div>
          <div class="designer-insights">
            <article>
              <span>搭配语言</span>
              <strong>${advice.words}</strong>
              <p>建议材料：${advice.stones}</p>
            </article>
            <article>
              <span>顾问提醒</span>
              <strong>${designState.fit}佩戴 · ${designState.beadSize}</strong>
              <p>${advice.avoid}</p>
            </article>
            <article>
              <span>预算拆分</span>
              <strong id="priceBreakdown"></strong>
              <p>含主石、辅石、金属件、包装与交付时间的前端估算。</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  `;
}

function control(key, title, options) {
  return `
    <div class="control-group" data-control="${key}">
      <label>${title}</label>
      <div class="option-row">
        ${options.map((option) => `<button class="chip ${designState[key] === option ? "active" : ""}" data-key="${key}" data-value="${option}">${option}</button>`).join("")}
      </div>
    </div>
  `;
}

function renderGallery(filter) {
  if (filter) galleryState.filter = filter;
  const items = getGalleryItems();
  const tags = ["全部", ...new Set(collections.flatMap((item) => item.tags))];
  const queryValue = escapeHtml(galleryState.query);
  return `
    <section class="section">
      <div class="section-head">
        <div><p class="eyebrow">Design gallery</p><h2>灵感图库</h2></div>
        <p>按场景、颜色、材料和热度筛选案例。用户可以查看详情、复制方向或带着案例直接咨询。</p>
      </div>
      <div class="gallery-toolbar">
        <label class="search-box">
          <span>搜索</span>
          <input id="gallerySearch" value="${queryValue}" placeholder="搜宝石、场景、颜色，例如 粉晶 / 通勤 / 纪念日" />
        </label>
        <label class="search-box compact">
          <span>排序</span>
          <select id="gallerySort">
            ${["热门", "预算从低到高", "预算从高到低", "最多复制"].map((item) => `<option ${galleryState.sort === item ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="filters">
        ${["全部", ...new Set(collections.map((item) => item.type))].map((item) => `<button class="chip gallery-filter ${item === galleryState.filter ? "active" : ""}" data-filter="${item}">${item}</button>`).join("")}
      </div>
      <div class="tag-row">
        ${tags.map((tag) => `<button class="tag-chip ${tag === galleryState.tag ? "active" : ""}" data-tag="${tag}" type="button">${tag}</button>`).join("")}
      </div>
      <div class="gallery-meta">${items.length} 个方向 · 可继续按真实案例扩展</div>
      ${items.length ? `<div class="gallery-grid">${items.map(renderJewelCard).join("")}</div>` : `<div class="empty">没有找到匹配案例，试试减少关键词或切换标签。</div>`}
    </section>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("\"", "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderJewelCard(item) {
  return `
    <article class="jewel-card">
      <div class="jewel-art" style="--art-a:${item.a};--art-b:${item.b}"><div class="mini-bracelet"></div></div>
      <div class="jewel-body">
        <p class="eyebrow">${item.type} · ${item.price}</p>
        <h3>${item.name}</h3>
        <p>${item.colors.join(" / ")}</p>
        <p>${item.style}</p>
        <div class="jewel-stats">
          <span>${item.views.toLocaleString("zh-CN")} views</span>
          <span>${item.remixes} remixes</span>
          <span>${item.beads} beads</span>
        </div>
        <div class="tag-row small">${item.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <div class="card-actions">
          <a class="button ghost" href="#case-${item.slug}">看详情</a>
          <button class="button ghost use-case" data-slug="${item.slug}" type="button">用这个方向咨询</button>
        </div>
      </div>
    </article>
  `;
}

function getGalleryItems() {
  const query = galleryState.query.trim().toLowerCase();
  return collections
    .filter((item) => galleryState.filter === "全部" || item.type === galleryState.filter)
    .filter((item) => galleryState.tag === "全部" || item.tags.includes(galleryState.tag))
    .filter((item) => {
      if (!query) return true;
      return [item.name, item.type, item.style, item.bestFor, item.story, item.designer, ...item.colors, ...item.tags]
        .join(" ")
        .toLowerCase()
        .includes(query);
    })
    .sort((a, b) => {
      if (galleryState.sort === "预算从低到高") return a.basePrice - b.basePrice;
      if (galleryState.sort === "预算从高到低") return b.basePrice - a.basePrice;
      if (galleryState.sort === "最多复制") return b.remixes - a.remixes;
      return b.views - a.views;
    });
}

function renderCaseDetail(slug) {
  const item = collections.find((entry) => entry.slug === slug) || collections[0];
  return `
    <section class="section case-hero">
      <div class="case-art" style="--art-a:${item.a};--art-b:${item.b}"><div class="mini-bracelet large"></div></div>
      <div class="case-copy">
        <p class="eyebrow">${item.type} · ${item.price}</p>
        <h1>${item.name}</h1>
        <p>${item.story}</p>
        <div class="spec-grid">
          <div><span>适合场景</span><strong>${item.bestFor}</strong></div>
          <div><span>搭配材料</span><strong>${item.colors.join(" / ")}</strong></div>
          <div><span>风格关键词</span><strong>${item.style}</strong></div>
          <div><span>服务建议</span><strong>${item.price.includes("1,880") ? "Heirloom" : "Signature"}</strong></div>
          <div><span>手围建议</span><strong>15-17 cm 可按需重排珠数</strong></div>
          <div><span>案例数据</span><strong>${item.beads} beads · ${item.views.toLocaleString("zh-CN")} views · ${item.remixes} remixes</strong></div>
        </div>
        <div class="price-breakdown-card">
          <h3>参考报价拆分</h3>
          <div><span>主石与辅石</span><strong>约 ¥${Math.round(item.basePrice * 0.58).toLocaleString("zh-CN")}</strong></div>
          <div><span>金属件与细节</span><strong>约 ¥${Math.round(item.basePrice * 0.22).toLocaleString("zh-CN")}</strong></div>
          <div><span>设计、制作与包装</span><strong>约 ¥${Math.round(item.basePrice * 0.2).toLocaleString("zh-CN")}</strong></div>
        </div>
        <div class="actions">
          <button class="button use-case" data-slug="${item.slug}" type="button">用这个案例咨询</button>
          <a class="button secondary" href="#gallery">返回图库</a>
        </div>
      </div>
    </section>
    <section class="section soft">
      <div class="grid three">
        <article class="card"><h3>可改颜色</h3><p>保留主石气质，替换成更冷、更暖或更低饱和的同预算搭配。</p></article>
        <article class="card"><h3>可改预算</h3><p>通过主石等级、珠径、隔珠金属和吊牌细节控制最终价格。</p></article>
        <article class="card"><h3>可改场景</h3><p>同一方向可以调整成日常佩戴、生日礼物、伴手礼或纪念日版本。</p></article>
      </div>
    </section>
  `;
}

function renderGems() {
  return `
    <section class="section soft">
      <div class="section-head">
        <div><p class="eyebrow">Gem library</p><h2>宝石库</h2></div>
        <p>把寓意、硬度和保养讲清楚，降低用户对天然材质的疑虑。</p>
      </div>
      <table class="gems-table">
        <thead><tr><th>宝石</th><th>适合表达</th><th>硬度</th><th>保养建议</th></tr></thead>
        <tbody>${gems.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </section>
  `;
}

function renderMaterials() {
  return `
    <section class="section split soft">
      <div class="split-copy">
        <p class="eyebrow">Materials</p>
        <h2>材料页要解决“我为什么相信你”的问题。</h2>
        <p>天然石会有色带、棉絮、冰裂和包体。页面需要提前说明哪些属于天然特征、哪些不会进入成品，并展示实拍确认流程。</p>
        <div class="mini-list">
          <span>天然石分拣</span><span>主石实拍</span><span>线材与金属件说明</span><span>成品复检</span>
        </div>
      </div>
      <img src="./assets/atelier-workbench.png" alt="天然石材质分拣与工坊工具" />
    </section>
    <section class="section">
      <div class="section-head">
        <div><p class="eyebrow">Quality checklist</p><h2>质检清单</h2></div>
      </div>
      <div class="grid four">
        ${["珠径一致性", "孔道与裂纹", "金属件氧化", "线结强度"].map((title, index) => `<article class="card"><span class="metric">0${index + 1}</span><h3>${title}</h3><p>${["同一条作品尽量统一珠径，保留天然纹理差异。", "影响结构的裂损剔除，天然冰裂提前说明。", "银色、玫瑰金、暖金分别说明材质和保养边界。", "出货前做拉力和佩戴松紧复检。"][index]}</p></article>`).join("")}
      </div>
    </section>
    <section class="section split green">
      <img src="./assets/gift-packaging.png" alt="定制珠宝礼盒与保养卡" />
      <div class="split-copy">
        <p class="eyebrow">Gift ready</p>
        <h2>包装不是装饰，是礼物体验的一部分。</h2>
        <p>建议标配礼盒、绒袋、保养卡、材质说明和可手写祝福卡。高阶套餐可加入备用线、测量尺和专属设计档案。</p>
        <a class="button" href="#contact">咨询礼盒方案</a>
      </div>
    </section>
  `;
}

function renderGuide() {
  return `
    <section class="section">
      <div class="section-head">
        <div><p class="eyebrow">Buying guide</p><h2>定制指南</h2></div>
        <p>让用户知道下一步发生什么，是高客单定制网站的关键。</p>
      </div>
      <div class="timeline">
        ${[
          ["提交需求", "填写用途、预算、手围、色系、忌讳和预计送达日期。"],
          ["初步方案", "顾问根据库存、寓意和佩戴习惯，给出 2-3 个方向。"],
          ["确认设计", "确认主石、隔珠、线材、吊牌、包装和最终价格。"],
          ["制作交付", "制作前后拍照确认，顺丰或同城闪送交付。"],
          ["售后复检", "7 天内尺寸微调，90 天线材复检，长期可付费改款。"],
        ].map(([title, text], index) => `<div class="step" data-step="${index + 1}"><h3>${title}</h3><p>${text}</p></div>`).join("")}
      </div>
    </section>
  `;
}

function renderCare() {
  const sizeRows = [
    ["贴手", "手围 + 0.5cm", "适合喜欢固定、不晃动的人"],
    ["舒适", "手围 + 1cm", "最常见，适合大多数礼物"],
    ["宽松", "手围 + 1.5cm", "适合叠戴或不喜欢束缚的人"],
  ];
  return `
    <section class="section soft">
      <div class="section-head">
        <div><p class="eyebrow">Size & care</p><h2>尺寸、保养与售后</h2></div>
        <a class="button ghost" href="#contact">提交手围咨询</a>
      </div>
      <table class="gems-table">
        <thead><tr><th>佩戴松紧</th><th>建议尺寸</th><th>说明</th></tr></thead>
        <tbody>${sizeRows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </section>
    <section class="section">
      <div class="grid three">
        <article class="card"><h3>7 天尺寸微调</h3><p>收到后发现过紧或过松，可在保留珠子的前提下调整线长。</p></article>
        <article class="card"><h3>90 天线材复检</h3><p>常规佩戴情况下可检查线材和结口状态，减少断线风险。</p></article>
        <article class="card"><h3>长期改款</h3><p>纪念日、风格变化或旧款升级时，可保留主石重新设计。</p></article>
      </div>
    </section>
  `;
}

function renderArticles() {
  return `
    <section class="section soft">
      <div class="section-head">
        <div><p class="eyebrow">Journal</p><h2>文章与百科</h2></div>
        <a class="button ghost" href="#gems">查看宝石库</a>
      </div>
      <div class="grid two">
        ${articles.map(([title, text, time]) => `<article class="card"><span class="metric">${time}</span><h3>${title}</h3><p>${text}</p><a class="button ghost" href="#contact">咨询相关问题</a></article>`).join("")}
      </div>
    </section>
  `;
}

function renderReviews() {
  return `
    <section class="section">
      <div class="section-head">
        <div><p class="eyebrow">Reviews</p><h2>客户评价</h2></div>
        <p>评价页可以继续接入真实买家图、订单标签和平台截图。</p>
      </div>
      <div class="grid two">
        ${reviews.map(([text, name, scene, tier]) => `<blockquote class="quote"><p>“${text}”</p><strong>${name}</strong><p>${scene} · ${tier}</p></blockquote>`).join("")}
      </div>
    </section>
  `;
}

function renderFaq() {
  const faqs = [
    ["多久可以收到？", "常规手串 5-9 个工作日，急单需要先确认库存和排期。"],
    ["天然石有瑕疵怎么办？", "天然纹理、棉絮、冰裂会提前拍照说明；影响结构的损伤不会使用。"],
    ["可以退换吗？", "定制品确认制作后不支持无理由退换；尺寸和线材问题按售后政策处理。"],
    ["可以做品牌名吗？", "可以。当前站点里的 Lumea Atelier 是占位品牌，后续可替换为你的品牌。"],
    ["能不能批量做伴手礼？", "可以，建议提前 3-4 周确认数量、手围区间、包装和交付地址。"],
    ["能指定某种宝石吗？", "可以。若库存没有合适等级，会给出采购周期或替代方案。"],
  ];
  return `
    <section class="section soft">
      <div class="section-head"><div><p class="eyebrow">FAQ</p><h2>常见问题</h2></div></div>
      <div class="grid two">${faqs.map(([q, a]) => `<article class="card"><h3>${q}</h3><p>${a}</p></article>`).join("")}</div>
    </section>
  `;
}

function renderContact() {
  const saved = localStorage.getItem("lumea-design-summary") || "";
  return `
    <section class="section green">
      <div class="contact-wrap">
        <div>
          <p class="eyebrow">Book a consult</p>
          <h2>预约顾问咨询</h2>
          <p>这里先做成前端表单原型。后续可接入微信、飞书、Notion、邮箱或 Shopify/独立站订单系统。</p>
          <div class="card">
            <h3>建议你准备</h3>
            <p>预算区间、送礼对象、手围、喜欢/不喜欢的颜色、送达时间、是否需要礼盒或刻字。</p>
          </div>
          ${saved ? `<div class="result-box">已带入设计器方案：${saved}</div>` : ""}
        </div>
        ${renderMiniForm(true, saved)}
      </div>
    </section>
  `;
}

function renderMiniForm(full = false, saved = "") {
  return `
    <form class="form" id="leadForm">
      <label class="field"><span>姓名</span><input required name="name" placeholder="怎么称呼你" /></label>
      <label class="field"><span>联系方式</span><input required name="contact" placeholder="微信 / 手机 / 邮箱" /></label>
      <label class="field"><span>预算</span><select name="budget"><option>600-1000</option><option>1200-1800</option><option>2000-3500</option><option>3500+</option></select></label>
      ${full ? `<label class="field"><span>用途</span><select name="purpose"><option>生日礼物</option><option>纪念日</option><option>日常佩戴</option><option>婚礼/伴手礼</option></select></label>` : ""}
      <label class="field"><span>需求描述</span><textarea name="message" placeholder="例如：送女朋友，喜欢绿色，预算 1500 左右，希望显得轻盈。">${saved}</textarea></label>
      <button class="button" type="submit">生成咨询摘要</button>
      <div class="result-box" id="formResult" hidden></div>
    </form>
  `;
}

function bindPage(route) {
  if (route === "designer") bindDesigner();
  if (route === "gallery") bindGallery();
  bindCaseButtons();
  bindForms();
}

function bindDesigner() {
  document.querySelectorAll(".chip[data-key]").forEach((chip) => {
    chip.addEventListener("click", () => {
      designState[chip.dataset.key] = chip.dataset.value;
      setRoute("designer");
    });
  });
  const sendButton = document.getElementById("sendDesign");
  if (sendButton) {
    sendButton.addEventListener("click", () => {
      localStorage.setItem("lumea-design-summary", getDesignSummary());
      location.hash = "contact";
    });
  }
  const copyButton = document.getElementById("copyDesign");
  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const summary = getDesignSummary();
      try {
        await navigator.clipboard.writeText(summary);
        copyButton.textContent = "已复制";
      } catch {
        localStorage.setItem("lumea-design-summary", summary);
        copyButton.textContent = "已保存";
      }
    });
  }
  const resetButton = document.getElementById("resetDesign");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      Object.assign(designState, {
        purpose: "生日礼物",
        wrist: "15-16 cm",
        palette: "柔粉",
        metal: "银色",
        budget: "1200-1800",
        accent: "小吊牌",
        beadSize: "8mm",
        fit: "舒适",
        packaging: "礼盒",
        timeline: "常规 5-9 天",
      });
      setRoute("designer");
    });
  }
  drawBracelet();
  updateSummary();
}

function drawBracelet() {
  const ring = document.getElementById("beadRing");
  if (!ring) return;
  const colors = palettes[designState.palette];
  const beads = 24;
  const width = ring.clientWidth || 620;
  const height = ring.clientHeight || 496;
  const radiusX = width * 0.34;
  const radiusY = height * 0.28;
  const beadSize = Math.max(24, Math.min(38, width * 0.065));
  const spacerSize = Math.max(18, beadSize * 0.58);
  ring.innerHTML = Array.from({ length: beads }, (_, index) => {
    const angle = (Math.PI * 2 * index) / beads;
    const x = Math.cos(angle) * radiusX;
    const y = Math.sin(angle) * radiusY;
    const isSpacer = index % 6 === 0 && designState.metal !== "无金属";
    return `<span class="bead ${isSpacer ? "spacer" : ""}" style="--x:${x}px;--y:${y}px;--size:${isSpacer ? spacerSize : beadSize}px;--color:${colors[index % colors.length]}"></span>`;
  }).join("");
}

function getDesignSummary() {
  return `${designState.purpose} / 手围 ${designState.wrist} / ${designState.fit}佩戴 / ${designState.palette} / ${designState.beadSize} / ${designState.metal} / ${designState.accent} / ${designState.packaging} / ${designState.timeline} / 预算 ${designState.budget} / 预估 ¥${estimatePrice().toLocaleString("zh-CN")}`;
}

function estimatePrice() {
  const base = budgetBase[designState.budget] || 1480;
  const metalAdd = designState.metal === "暖金" || designState.metal === "玫瑰金" ? 160 : 0;
  const accentAdd = designState.accent === "刻字牌" ? 220 : designState.accent === "双圈叠戴" ? 460 : 0;
  const sizeAdd = designState.beadSize === "10mm" ? 260 : designState.beadSize === "6mm" ? -120 : 0;
  const packagingAdd = designState.packaging === "礼盒+手写卡" ? 88 : designState.packaging === "简装" ? -60 : 0;
  const timelineAdd = designState.timeline === "加急 3-5 天" ? 220 : designState.timeline === "婚礼批量" ? 520 : 0;
  return Math.max(580, base + metalAdd + accentAdd + sizeAdd + packagingAdd + timelineAdd);
}

function getPriceParts() {
  const total = estimatePrice();
  const stone = Math.round(total * 0.56);
  const detail = Math.round(total * 0.24);
  return {
    stone,
    detail,
    service: total - stone - detail,
  };
}

function updateSummary() {
  const target = document.getElementById("designSummary");
  if (!target) return;
  const parts = getPriceParts();
  target.textContent = getDesignSummary();
  document.getElementById("priceEstimate").textContent = `约 ¥${estimatePrice().toLocaleString("zh-CN")}`;
  document.getElementById("timelineAdvice").textContent = designState.timeline;
  document.getElementById("priceBreakdown").textContent = `石材 ¥${parts.stone.toLocaleString("zh-CN")} · 细节 ¥${parts.detail.toLocaleString("zh-CN")} · 服务 ¥${parts.service.toLocaleString("zh-CN")}`;
  document.getElementById("stoneAdvice").textContent = {
    "柔粉": "粉晶 / 石榴石",
    "清透": "月光石 / 白水晶",
    "森绿": "绿幽灵 / 青金石",
    "暖金": "黄水晶 / 虎眼石",
    "浓红": "红玛瑙 / 黑尖晶",
  }[designState.palette];
}

function bindGallery() {
  const search = document.getElementById("gallerySearch");
  if (search) {
    search.addEventListener("input", () => {
      galleryState.query = search.value;
      document.getElementById("app").innerHTML = renderGallery();
      bindGallery();
      bindCaseButtons();
    });
  }
  const sort = document.getElementById("gallerySort");
  if (sort) {
    sort.addEventListener("change", () => {
      galleryState.sort = sort.value;
      document.getElementById("app").innerHTML = renderGallery();
      bindGallery();
      bindCaseButtons();
    });
  }
  document.querySelectorAll(".gallery-filter").forEach((button) => {
    button.addEventListener("click", () => {
      galleryState.filter = button.dataset.filter;
      document.getElementById("app").innerHTML = renderGallery();
      bindGallery();
      bindCaseButtons();
    });
  });
  document.querySelectorAll(".tag-chip[data-tag]").forEach((button) => {
    button.addEventListener("click", () => {
      galleryState.tag = button.dataset.tag;
      document.getElementById("app").innerHTML = renderGallery();
      bindGallery();
      bindCaseButtons();
    });
  });
}

function bindCaseButtons() {
  document.querySelectorAll(".use-case").forEach((button) => {
    button.addEventListener("click", () => {
      const item = collections.find((entry) => entry.slug === button.dataset.slug);
      if (!item) return;
      localStorage.setItem("lumea-design-summary", `参考案例 ${item.name}：${item.colors.join(" / ")}，${item.bestFor}，预算 ${item.price}`);
      location.hash = "contact";
    });
  });
}

function bindForms() {
  document.querySelectorAll("#leadForm").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const result = form.querySelector("#formResult");
      result.hidden = false;
      result.textContent = `已生成咨询摘要：${data.get("name")}，预算 ${data.get("budget")}，需求「${data.get("message") || "待补充"}」。`;
    });
  });
}

document.getElementById("menuButton").addEventListener("click", (event) => {
  const nav = document.querySelector(".nav");
  const open = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

document.querySelector(".nav").addEventListener("click", () => {
  document.querySelector(".nav").classList.remove("open");
  document.getElementById("menuButton").setAttribute("aria-expanded", "false");
});

window.addEventListener("hashchange", () => setRoute(getCurrentRoute()));
window.addEventListener("resize", () => {
  if (getCurrentRoute() === "designer") drawBracelet();
});
setRoute(getCurrentRoute());

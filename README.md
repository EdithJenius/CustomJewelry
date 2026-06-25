# Lumea Atelier 定制珠宝网站原型

这是一个面向定制天然宝石珠宝服务的静态网站底稿，包含首页、在线设计器、灵感图库、宝石库、定制指南、文章、评价、FAQ 和咨询表单。

## 本地预览

```bash
python3 -m http.server 4173
```

打开 `http://localhost:4173`。

## 主要可改位置

- 品牌名和导航：`index.html`
- 页面数据、文案、宝石资料、图库卡片：`app.js`
- 颜色、排版、响应式布局：`styles.css`
- 首屏图片：`assets/hero-bracelet.png`
- 素材与信息清单：`CONTENT_ASSET_BRIEF.md`

## 后续接入建议

- 咨询表单可接入微信企微、飞书表格、Notion、邮箱或 CRM。
- 图库可替换为真实成品图，并加入订单标签、价格区间和客户评价。
- 在线设计器可继续扩展为真实 SKU、库存、报价和购物车逻辑。

import puppeteer from "puppeteer";

const browser = await puppeteer.launch({ protocolTimeout: 60000 });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

await page.goto("http://localhost:5173/Portfolio/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 2000));

// 强制所有 Framer Motion 元素变为可见
await page.evaluate(() => {
    // 1. 注入全局 CSS 禁掉所有动画和过渡
    const style = document.createElement("style");
    style.textContent = `
    *, *::before, *::after {
      animation: none !important;
      transition: none !important;
    }
  `;
    document.head.appendChild(style);

    // 2. 强制所有有 style 的元素：清除 opacity/transform/visibility
    document.querySelectorAll("[style]").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.visibility = "visible";
        el.style.pointerEvents = "auto";
    });

    // 3. 用 MutationObserver 拦截 Framer Motion 后续写入的样式
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "attributes" && mutation.attributeName === "style") {
                const el = mutation.target;
                const style = el.style;
                if (style.opacity === "0" || style.opacity === "") {
                    style.opacity = "1";
                }
                if (style.transform && style.transform !== "none") {
                    style.transform = "none";
                }
            }
        });
    });

    observer.observe(document.body, {
        attributes: true,
        subtree: true,
        attributeFilter: ["style"],
    });
});

// 等 Framer Motion 完成它的 whileInView 检测周期
await new Promise((r) => setTimeout(r, 3000));

// 再次强制一遍，确保没有漏网之鱼
await page.evaluate(() => {
    document.querySelectorAll("[style]").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.visibility = "visible";
    });
});

await new Promise((r) => setTimeout(r, 1000));

// 获取完整页面高度并导出
const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
await page.setViewport({ width: 1440, height: bodyHeight });
await new Promise((r) => setTimeout(r, 500));

await page.pdf({
    path: "portfolio.pdf",
    format: "A4",
    printBackground: true,
    displayHeaderFooter: false,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
});

await browser.close();
console.log("Done: portfolio.pdf");
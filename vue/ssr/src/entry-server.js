// 主要用于首屏渲染
import { createApp } from "./main";

// renderer传入一个url地址，及首屏地址
export default (context) => {
    // 返回一个Promise 确保路由中可能有异步操作
    return new Promise((resolve, reject) => {
        const { app, router } = createApp();

        // 获取首屏地址
        router.push(context.url);

        router.onReady(() => {
            resolve(app);
        }, reject);
    });
};

// express server-> remderer -> entry-server -> main -> router

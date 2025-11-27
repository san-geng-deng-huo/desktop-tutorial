// 按钮点击事件
const btn = document.getElementById('clickBtn');
let clickCount = 0;

btn.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 1) {
        btn.textContent = `已点击 ${clickCount} 次，再点一次试试！`;
    } else {
        btn.textContent = `已点击 ${clickCount} 次，继续加油～`;
    }
    // 控制台输出日志
    console.log(`按钮被点击了 ${clickCount} 次`);
});

// 页面加载完成提示
window.addEventListener('load', () => {
    console.log('网页加载完成！可以正常预览和部署～');
});  
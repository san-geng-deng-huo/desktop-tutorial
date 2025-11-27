// 获取所有屏幕和按钮
const screens = document.querySelectorAll('.screen');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const btnNext2 = document.getElementById('btn-next2');
const groupBtns = document.querySelectorAll('.group-btn');
const btnSubmit = document.getElementById('btn-submit');
const nameInput = document.getElementById('name-input');
const screenWarning = document.getElementById('screen-warning');

// 切换屏幕的函数（隐藏所有，显示指定屏幕）
function showScreen(screenId) {
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// 步骤1：是否烟科同学
btnNo.addEventListener('click', () => {
    btnNo.style.display = 'none'; // 点击“否”后隐藏“否”按钮
});

btnYes.addEventListener('click', () => {
    showScreen('screen2'); // 点击“是”跳转到步骤2
});

// 步骤2：输入专业后跳转步骤3
btnNext2.addEventListener('click', () => {
    showScreen('screen3');
});

// 步骤3：选择任意小组跳转步骤4
groupBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        showScreen('screen4');
    });
});

// 步骤4：输入姓名逻辑
btnSubmit.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name === '王韵泽') {
        // 播放警告音效
        const warningSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
        warningSound.play().catch(err => console.log('音效播放失败:', err));
        
        // 显示警告屏幕3秒后跳转到欢迎页
        showScreen('screen-warning');
        setTimeout(() => {
            showScreen('screen-final');
        }, 3000);
    } else {
        // 其他姓名直接跳欢迎页
        showScreen('screen-final');
    }
});

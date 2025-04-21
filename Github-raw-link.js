(() => {
    'use strict';

    // 配置参数
    const CONFIG = {
        buttonId: 'surge-github-raw-btn',
        buttonText: 'Raw',
        buttonPosition: {
            bottom: '20px',
            right: '20px'
        },
        buttonStyle: {
            backgroundColor: '#238636',
            hoverColor: '#2ea043',
            textColor: '#ffffff',
            border: '1px solid rgba(240,246,252,0.1)',
            padding: '5px 16px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
            boxShadow: '0 1px 0 rgba(27,31,36,0.04), inset 0 1px 0 rgba(255,255,255,0.25)',
            transition: 'background-color 80ms cubic-bezier(0.33, 1, 0.68, 1)'
        },
        iconSVG: '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" style="margin-right:6px;vertical-align:-2px;"><path fill="currentColor" d="M10.604 1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.75.75 0 0 1-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1zM3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-5.5a.75.75 0 0 1 1.5 0v5.5a3.25 3.25 0 0 1-3.25 3.25h-8.5A3.25 3.25 0 0 1 0 12.25v-8.5A3.25 3.25 0 0 1 3.25 1h5.5a.75.75 0 0 1 0 1.5h-5.5z"></path></svg>'
    };

    // 主功能函数
    function init() {
        if (!isFilePage() || document.getElementById(CONFIG.buttonId)) return;
        
        const button = createButton();
        document.body.appendChild(button);
        setupPjaxListener();
    }

    // 判断是否为文件页面
    function isFilePage() {
        return window.location.pathname.includes('/blob/') && 
               document.querySelector('.blob-wrapper');
    }

    // 创建按钮元素
    function createButton() {
        const button = document.createElement('button');
        button.id = CONFIG.buttonId;
        button.innerHTML = `${CONFIG.iconSVG}${CONFIG.buttonText}`;
        
        // 应用样式
        Object.assign(button.style, {
            position: 'fixed',
            bottom: CONFIG.buttonPosition.bottom,
            right: CONFIG.buttonPosition.right,
            backgroundColor: CONFIG.buttonStyle.backgroundColor,
            color: CONFIG.buttonStyle.textColor,
            border: CONFIG.buttonStyle.border,
            padding: CONFIG.buttonStyle.padding,
            borderRadius: CONFIG.buttonStyle.borderRadius,
            fontSize: CONFIG.buttonStyle.fontSize,
            fontWeight: CONFIG.buttonStyle.fontWeight,
            fontFamily: CONFIG.buttonStyle.fontFamily,
            boxShadow: CONFIG.buttonStyle.boxShadow,
            transition: CONFIG.buttonStyle.transition,
            cursor: 'pointer',
            zIndex: '9999',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        });

        // 添加交互效果
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = CONFIG.buttonStyle.hoverColor;
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = CONFIG.buttonStyle.backgroundColor;
        });
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.98)';
        });
        button.addEventListener('mouseup', () => {
            button.style.transform = '';
        });

        // 点击事件
        button.addEventListener('click', openRawUrl);
        
        return button;
    }

    // 打开Raw链接
    function openRawUrl() {
        const rawUrl = window.location.href
            .replace('/blob/', '/raw/')
            .replace('github.com', 'raw.githubusercontent.com');
        window.open(rawUrl, '_blank');
    }

    // 处理GitHub的PJAX页面切换
    function setupPjaxListener() {
        document.addEventListener('pjax:end', () => {
            setTimeout(() => {
                if (isFilePage() && !document.getElementById(CONFIG.buttonId)) {
                    const button = createButton();
                    document.body.appendChild(button);
                }
            }, 300);
        });
    }

    // 初始化执行
    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('load', init);
    }
})();

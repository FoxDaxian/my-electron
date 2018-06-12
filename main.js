const { app, BrowserWindow } = require('electron');

function createWindow() {
    // 创建浏览器窗口
    win = new BrowserWindow({ width: 800, height: 600 });

    // 然后加载应用的 index.html。
    win.loadFile('index.html');
    win.webContents.openDevTools();

    win.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        alert('123123');
        win = null;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (win === null) {
        createWindow();
    }
});

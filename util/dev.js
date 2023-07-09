// module.export = {
//     toggleDevTools() {
//         window.addEventListener(
//           'keydown',
//           (e) => {
//             const { altKey, ctrlKey, keyCode } = e;
//             //  alt + ctrl + (Command | Windows) + l
//             if (altKey && ctrlKey && keyCode === 76) {
//               //获取当前窗体
//               const currentWindow = require('electron').remote.getCurrentWindow();
//               currentWindow && currentWindow.toggleDevTools();
//               e.preventDefault();
//             }
//           },
//           false
//         );
//       }
    
// }
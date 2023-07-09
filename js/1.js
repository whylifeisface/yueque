






// space_ul_tri.addEventListener('mouseover',function () {
//     space_ul.style.display = ' block '
// })
//
// space_ul.addEventListener('mouseleave',function () {
//         space_ul.style.display = ' none '
// })

// let add_icon = document.getElementById('add_icon');
// add_icon.addEventListener()


let mulu = document.getElementById('mulu');
let liList = mulu.getElementsByClassName('displayFlex pos_r');
console.log(liList)
// 标识正在选中的
const activeIndex = "1";
//防抖实现标志位
let add_icon_Boolean = false;
//防抖实现标志位
let overIndex = "0";
let act = "0"
let ul = document.getElementsByClassName('add_icon_ul');

for (let li in liList) {
    if (activeIndex === li) {
        liList[li].style.backgroundColor = '#ccc'
    }
    liList[li].onmouseover = function () {
        overIndex = li
        add_icon_Boolean = true
        //TODO 防抖实现 只是延迟实现 未能防抖return
        setTimeout(() => {
            if (overIndex === li) {
                this.lastElementChild.classList.remove('inVis')
            }
        }, 800)
    }

    liList[li].onmouseout = function (event) {
        event.stopPropagation()
        //移除icon_add
        this.lastElementChild.classList.add('inVis')
        //移除 新建ul
        // console.log(this.children[1])
        // console.log(this.childNodes[3].visibility)
        let int = Number(act)
        if (int !== undefined && int == null) {
            // TODO remove ul
            ul[int].style.visibility = 'none'
        }
        // setTimeout(()=>{
        //     this.children[1].style.visibility = 'none'
        //
        // },800)
        // console.log(this.children[1])

        add_icon_Boolean = false
    }
    //悬停add_icon 超过1800 出现行健ul
    liList[li].lastElementChild.onmouseover = function () {

        // let date = new Date();
        // console.log()
        let ul = this.previousSibling.previousElementSibling;
        // console.log(ul.classList)
        // console.log(ul.classList)
        setTimeout(function () {
            if (add_icon_Boolean) {
                // console.log(ul.style.visibility)
                ul.style.visibility = 'visible'
                act = li
            }
        }, 1800)
    }
}


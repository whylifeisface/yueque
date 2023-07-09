/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

// const information = document.getElementById('info')
// information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`






const WIDTH = 20
const canvas = document.getElementById('tutorial')

if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath()
    ctx.arc(WIDTH / 2, WIDTH / 2, WIDTH / 2, 0, Math.PI * 2, false)
    ctx.fillStyle = 'rgb(0,255,0)'
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(WIDTH / 2, 0)
    ctx.lineTo(WIDTH / 2, WIDTH)
    ctx.moveTo(0, WIDTH / 2)
    ctx.lineTo(WIDTH, WIDTH / 2)
    ctx.strokeStyle = 'rgb(255,255,255)'
    ctx.stroke()
}

let newSpan = document.getElementById('new');

function setInVis(showOne, one) {
    showOne.onmouseover = function () {
        one.classList.remove('inVis')
    }
    one.onmouseleave = function () {
        one.classList.add('inVis')
    }
}

let create = document.getElementById('create');
let create_to_be_show = document.getElementById('create_to_be_show');
setInVis(create,create_to_be_show)

let typeThe = document.getElementById('type');
let typeToBeShow = document.getElementById('typeToBeShow');
setInVis(typeThe, typeToBeShow)

let right_top_div_show = document.getElementById('right_top_div_show');
let right_top_div = document.getElementById('right_top_div');
setInVis(right_top_div, right_top_div_show)

let space_ul = document.getElementById('space_ul');
let space_ul_tri = document.getElementById('space_ul_tri');
setInVis(space_ul_tri, space_ul)

let add_icon = document.getElementById('add_icon');
let add_icon_toBeShow = document.getElementById('add_icon_toBeShow');
setInVis(add_icon, add_icon_toBeShow)
let liebiao = document.getElementById('liebiao');
let liebiao_hidden = document.getElementById('liebiao_hidden')
setInVis(liebiao, liebiao_hidden)
// set(canvas,newSpan)
setInVis(canvas, newSpan)

let mul = document.getElementById('mul')
let mul_hidden = document.getElementById('mul_hidden')
setInVis(mul, mul_hidden)
let belong = document.getElementById('belong');
let belongTOBeShow = document.getElementById('belong_to_be_show')

setInVis(belong,belongTOBeShow)

let pos__center = document.getElementById('pos__center');
let pos__replace = document.getElementById('pos__replace');
let pos_div = document.getElementById('pos__div')
let section_center = document.getElementById('section_center');
let section_replace = document.getElementById('section_replace');


const space = document.getElementById('space')
const showSpace = document.getElementById('showSpace')
const up = document.getElementById('up')
const showUp = document.getElementById('showUp')
const more = document.getElementById('more')
const showMore = document.getElementById('showMore')
setInVis(showMore, more)
setInVis(showSpace, space)
setInVis(showUp, up)

up.style.visibility = 'hidden'
space.style.display = 'hidden'
more.style.display = 'hidden'

function setInVis_section(section, section_) {
    section.onmouseover = function () {
        section_.style.visibility = 'visible'
    }
    section.onmouseleave = function () {
        section_.style.visibility = 'hidden'
    }
    section_.onclick = function () {
        section.style.display = 'none'
    }
}

setInVis_section(section_center, pos__center)
setInVis_section(section_replace, pos__replace)
let right_middle_right_index = 0

let right_middle_right = document.getElementById('right_middle_right');
right_middle_right[right_middle_right_index].style.backgroundColor = '#d3d3d3'
for (let i = 0; i < 3; i++) {
    right_middle_right[i].onclick = function () {
        right_middle_right_index = i
        right_middle_right[right_middle_right_index].style.backgroundColor = '#d3d3d3'
    }
}


class Section_State {
    state = "EXPAND_SHOW"

    // EXPAND_SHOW HIDDEN_SHOW  NONE  EXPAND_NONE
    constructor(str) {
        this.state = str

    }
}

let state = new Section_State("LEFT_RIGHT")


pos_div.addEventListener('click', function () {
    if (state.state === 'NONE') {
        state.state = "LEFT_RIGHT"
        section_center.style.display = 'block'
        section_replace.style.display = 'block'
        pos_div.style.display = 'none'
    }
})



pos__center.addEventListener('click', function () {

    state.state = 'NONE'
    section_center.style.display = 'none'
    section_replace.style.display = 'none'
    pos_div.style.display = 'inline-block'

}, false)
// EXPAND_SHOW HIDDEN_SHOW  NONE  EXPAND_NONE HIDDEN_NONE
const color_display_none_list = [3,4,9,10]
const color_width_list = [1,2,5,6,7,8]
 function contain(list,i){
     for (const listKey in list) return i === listKey;
 }
let ul = document.getElementsByClassName('color')[0].getElementsByTagName('ul')[0];
let li = ul.getElementsByTagName('li');
function ExpandWidth() {

    for (const liKey in li) {
            if (contain(color_width_list,liKey)) li[liKey].classList.add('width')
            if (contain(color_display_none_list,liKey)) li[liKey].classList.remove('display_none')
    }
}
function HiddenWidth() {
    for (const liKey in li) {
        if (contain(color_width_list,liKey)) li[liKey].classList.remove('width')
        if (contain(color_display_none_list,liKey)) li[liKey].classList.add('display_none')
    }
}

pos__replace.addEventListener('click', function () {
    if (state.state === "HIDDEN_NONE") {
        state.state = "EXPAND_NONE"
        pos__replace.children[0].innerText = ">"
        ExpandWidth()
    }
    if (state.state === "EXPAND_NONE") {
        state.state = "HIDDEN_NONE"
        pos__replace.children[0].innerText = "<"
        HiddenWidth()
    }

}, false)

let search_show = document.getElementById('search_show');
// document.getElementById('search_show').getElementsByTagNameNS( "http://www.w3.org/1999/xhtml",'input')[0]
search_show.addEventListener('click', function () {
    if (search_show.style.visibility !== 'hidden')
        search_show.style.visibility = 'hidden'
}, false)
let input = search_show.getElementsByTagName('input')[0];
input.addEventListener('input', function () {
    input.value
})

function showSearch() {
    search_show.style.visibility = 'visible'
    setTimeout(() => {
        input.focus()
    }, 0)
}

let right_bottom = document.getElementById('right_bottom');
let date = new  Date();
console.log(date.getMilliseconds())
const list = [
    {name:'Electron',type:'soup',ku:'默认知识库',time:date.getTime() - Math.round(10000)},
    {name:'redis',type:'soup',ku:'默认知识库',time:date.getTime() - Math.round(10000)},
    {name:'无标题',type:'soup',ku:'默认知识库',time:date.getTime() - Math.round(10000)},
    {name:'android 自定义view',type:'soup',ku:'默认知识库',time:date.getTime() - Math.round(10000)},
    {name:'ListenableFuture',type:'soup',ku:'默认知识库',time:date.getTime() - Math.round(10000)},
    {name:'数据库和文件存储概览',type:'soup',ku:'默认知识库',time:date.getTime() - Math.round(10000)},
    {name:'线程安全',type:'soup',ku:'默认知识库',time:date.getTime() - Math.round(10000)},
    {name:'音视频',type:'soup',ku:'默认知识库',time:date.getTime() - Math.round(10000)},
    {name:'后台任务',type:'soup',ku:'默认知识库',time:date.getTime() - Math.round(10000)},
    {name:'无标题',type:'soup',ku:'默认知识库',time:date.getTime() - Math.round(10000)},
    {name:'mybatis plus',type:'soup',ku:'默认知识库',time:date.getTime() - Math.round(10000)},
    {name:'💡 1 分钟玩转语雀文档',type:'soup',ku:'默认知识库',time:date.getTime() - Math.round(10000)},
]
for (let i = 0; i < list.length; i++) {
    let element = list[i];
    let li = createLi(element.name,element.type,element.ku,element.time);
    right_bottom.append(li)
}
function createLi(name="无标题", type, ku, time) {
    const t = `${type} / ${ku}`

    let li = document.createElement('li');
    let i = document.createElement('i');
    i.classList.add('iconfont')
    i.innerText = "";

    let spanName = document.createElement('span');
    spanName.style.marginLeft = '10px'
    spanName.innerText = name;

    let spanType = document.createElement('span');
    spanType.style.marginLeft = '10px'
    spanType.innerText = t
    let date = new Date(time);
    let ti = `${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
    let spanTime = document.createElement('span');
    spanTime.innerText = ti
    li.append(i)
    li.append(spanName)
    li.append(spanType)
    li.append(spanTime)

    return li
}

document.addEventListener('keydown',function (event) {
    if (event.ctrlKey && event.code==="65"){

    }
})

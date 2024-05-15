onload = main;

function main () {
    const dragarea = document.querySelector(".formaddphoto .dropimgbox");
    const fileelement = document.querySelector(".formaddphoto input[type='file']");
    // click
    dragarea.addEventListener('click', areaclick);
    // drag
    dragarea.addEventListener('dragover', areaddragovr);
    dragarea.addEventListener('dragleave', areaddragout);
    // drop
    dragarea.addEventListener('drop', areadrop);
    fileelement.addEventListener('change',filechange);
}
// drop handler
let areadrop        = e=> {
    const dragarea = document.querySelector(".formaddphoto .dropimgbox");
    const fileelement = document.querySelector(".formaddphoto input[type='file']");
    e.preventDefault();
    let file = e.dataTransfer.files[0];
    if(isImg(file.type) && file.size <=1_000_000) {
        let fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onload = _=> {
            let furl = fr.result;
            rightaction(dragarea, furl);
            fileelement.files[0] = furl;
        }
    }
    else {
        wrongaction(file,dragarea);
    }
}
// click handler
let areaclick       = e=> {
    const fileelement = document.querySelector(".formaddphoto input[type='file']");
    e.preventDefault();
    fileelement.click();
}
// drag over handler
let areaddragovr    = e=> {
    e.preventDefault();
    e.target.classList.add("active")
}
// drag left handler
let areaddragout    = e=> {
    e.preventDefault();
    e.target.classList.remove("active");
}
// file change handler
let filechange = function(e) {
    const fileelement = document.querySelector(".formaddphoto input[type='file']");
    const dragarea = document.querySelector(".formaddphoto .dropimgbox");
    e.preventDefault();
    let file = this.files[0];
    if(isImg(file.type) && file.size <=1_000_000) {
        let fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onload = _=> {
            let furl = fr.result;
            rightaction(dragarea, furl);
        }
    }
    else {
        wrongaction(file,dragarea);
    }
}
// img type verification
let isImg = type=> {
    switch(type) {
        case 'image/jpg':
        case 'image/jpeg':
        case 'image/png':
        case 'image/gif':
            return true;
        default:
            return false;
    }
}
// display when file is wrong
let wrongaction = (file, dragarea)=> {
    let el = document.createElement('div');
    let el2 = document.createElement('div');
    el.classList.add("mssg");
    let text;
    if(!file.type) text = document.createTextNode("type is not correct");
    else if(file.size >= 1_000_000)  text = document.createTextNode("size is bigger than we need");
    el2.append(text);
    el.append(el2);
    document.body.append(el);
    el.onclick = e=> el.parentNode.removeChild(el);
    dragarea.classList.remove('active');
}
// display when file is success
let rightaction = (d, furl)=> {
    d.classList.add("active")
    let el = document.createElement('img');
    let el2 = document.createElement('div');
    el2.classList.add("close" , "far" , "fa-window-close");
    el.src = furl;
    d.append(el);
    d.append(el2);
    d.removeEventListener('click', areaclick);
    d.removeEventListener('drop', areadrop);
    d.removeEventListener('dragleave', areaddragout);
    el2.onclick = e=> {
        d.classList.remove('active');
        e.target.previousSibling.remove();
        e.target.remove();
        setTimeout(_=>{
            d.addEventListener('click',areaclick);
            d.addEventListener('drop',areadrop);
            d.addEventListener('dragleave',areaddragout);
        },300);
    }
}
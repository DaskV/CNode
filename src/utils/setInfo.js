/*
消息中心
修改回复内容的展现形式
<img>=[图片],<a href=""> =[链接]*/

export function setInfo(info){
    
    let noA = info.replace(new RegExp("<a.+?href=\"(.+?)\".*>(.+)</a>","[链接]"));
    console.log(noA);
    let noImg = noA.replace(new RegExp("<img(.*?)>","[图片]"));
    return noImg
}
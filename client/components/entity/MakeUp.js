export const MakeUp = (text,search,change) => {
    let newtext = ''
    text.split(search).map((item,index) => {
        if(index){
            newtext += change
        }
        newtext += item
    })
    return newtext
}

export const EmojiShow = (text, height) => {
    let newtext = text
    const emoji = [
        [':D','<img height='+ height +' src="/images/emoji/haha.svg"/>'],
        [':-D','<img height='+ height +' src="/images/emoji/haha.svg"/>'],
        ['8)','<img height='+ height +' src="/images/emoji/pro.svg"/>'],
        ['&lt;3','<img height='+ height +' src="/images/emoji/love.svg"/>'],
        ['<3','<img height='+ height +' src="/images/emoji/love.svg"/>'],
        [':o','<img height='+ height +' src="/images/emoji/wow.svg"/>'],
        [':O','<img height='+ height +' src="/images/emoji/wow.svg"/>'],
        [': )','<img height='+ height +' src="/images/emoji/smile.svg"/>'],
        ['::))','<img height='+ height +' src="/images/emoji/smile.svg"/>'],
        [':))','<img height='+ height +' src="/images/emoji/smile.svg"/>'],
    ]
    emoji.map((item,index) => {
        newtext = MakeUp(newtext, item[0], item[1])
    })
    return newtext
}

export const Emoji = (text) => {
    let newtext = text
    const emoji = [
        [':D','<img width="14" src="/images/emoji/haha.svg"/>'],
        [':-D','<img height="16" width="18.65625" src="/images/emoji/haha.svg"/>'],
        ['8)','<img width="14" src="/images/emoji/pro.svg"/>'],
        ['&lt;3','<img width="15.953125" src="/images/emoji/love.svg"/>'],
        ['<3','<img width="15.953125" src="/images/emoji/love.svg"/>'],
        [':o','<img width="11.671875" src="/images/emoji/wow.svg"/>'],
        [':O','<img width="14.765625" src="/images/emoji/wow.svg"/>'],
        [': )','<img width="12.4375" src="/images/emoji/smile.svg"/>'],
        ['::))','<img height="16" width="17.09375" src="/images/emoji/smile.svg"/>'],
        [':))','<img width="13.203125" src="/images/emoji/smile.svg"/>'],
    ]
    emoji.map((item,index) => {
        newtext = MakeUp(newtext, " "+item[0]+" ", " "+item[1]+" ")
    })
    emoji.map((item,index) => {
        newtext = MakeUp(newtext, " "+item[0]+" ", " "+item[1]+" ")
    })
    emoji.map((item,index) => {
        newtext = MakeUp(newtext, ">"+item[0]+" ", ">"+item[1]+" ")
    })
    newtext = MakeUp(newtext, "  ", " &nbsp;")
    return newtext
}

const Urlify = (text) => {
    let newtext = ''
    text.split(/(https?:\/\/[^\s]+)/g).map((item,index) => {
        if(/(https?:\/\/[^\s]+)/.test(item))
            newtext += '<a key='+index+' style="color:#365899" href='+item+' target="_blank">'+item+'</a>'
        else
            newtext += item
    })
    return newtext
}

export const EndLine = (text) => {
    let newtext = ''
    text.split('\n').map((item,index) => {
        if(item)
            newtext += '<div>'+item+'</div>'
        else newtext += '<br\>'
    })
    return newtext
}

export const MixMakeUp = (text) => {
    if(!text) return ""
    let newtext = text
    newtext = Urlify(newtext)
    newtext = EndLine(newtext)
    newtext = Emoji(newtext)
    return newtext
}

export const FilterText = (text) => {
    let newtext = ''
    text.split('>').map((item) =>{
        item.split('<')[0]
    })
}

export const MixMakeUpShow = (text, height) => {
    if(!text) return ""
    let newtext = text
    newtext = Urlify(newtext)
    newtext = EndLine(newtext)
    newtext = EmojiShow(newtext, height)
    return newtext
}

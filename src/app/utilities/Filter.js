export const RemoveDublicate=(tag,value,FilterObj)=>{
    var temp= FilterObj.filter(item=>{
    
        return item.name!=tag
      })
      temp.push({name:tag,value:value})
        return temp
}

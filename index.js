function specific(exp,name,times,bdArgs){
    //powered by Ar-Sr-Na
    //概率,保留小数位,友好名称,次数,保底参数{time:次数}
    var num=0
    for(var i1=0;i1<times;i1++){
        var rds=parseFloat((Math.random()*100));
        if(rds<=exp){
            num++
        }else if(num==0 && (i1+1)==bdArgs.times){
            num++
        }
    }
    return({
        "name":name,
        "times":num,
        "probable":parseFloat(num/times)
    })
 }
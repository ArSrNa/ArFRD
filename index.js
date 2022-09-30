//随机数留俩位小数
// function random(min,max){
// 　　return (Math.random()*(max-min) + min).toFixed(2);    
// }
//(1)10000代表总概率，小于9900时代表概率为99%;
//(2)10000代表总概率，小于9990时代表概率为0.9%;
//(2)10000代表总概率，小于9990时代表概率为0.01%;

var s=['薪炎之律者角色卡'],
    a=['午夜苦艾角色卡','白夜执事角色卡','黯蔷薇角色卡','蓝莓特攻角色卡','午夜苦艾碎片','白夜执事碎片','黯蔷薇碎片','蓝莓特攻碎片'],
    other=['高级技能材料','相转移镜面','装甲残晶'],
    p=[1.50,4.50,3.00,3.00,3.00,15.00,3.33,3.33,3.33,17.50,6.00,36.50];

function num(){
var sA=0,sB=0;
 for(var i=0;i<100;i++){
    var rds=(Math.random()*100).toFixed(2);
    switch(true){
        case rds<1.5:
            return(s[parseInt(Math.random()*s.length)]);
        break;

        case rds>0.7&&rds<1:
            sB++
        break;
    }
  }
return(`A:${sA/100} B:${sB/100}`)
}


function elysia(){
var result={
    S级角色卡:0,
    A级角色卡:0,
    A级碎片:0,
    材料:0,
}
 for(var i=0;i<1000;i++){
    var rds=(Math.random()).toFixed(3);
    switch(true){
        case rds<=0.015:
            result.S级角色卡++
        break;
        case rds<=0.135:
            result.A级角色卡++
        break;
        case rds<=0.25:
            result.A级碎片++
        break;
        case rds<=0.6:
            result.材料++
        break;
    }
  }
  return result
}

function batch(exp,name,fixed){
    var rds=(Math.random()).toFixed(fixed);
    for(var i1=0;i1<exp.length;i1++){
        if(rds<=exp[i1]){
            return(i1)
        }
    }
 }

 function specific(exp,fixed,name,times,bdArgs){
    //arg pwd by Ar-Sr-Na
    //概率,保留小数位,友好名称,次数,保底参数{time:次数}
    var num=0
    for(var i1=0;i1<times;i1++){
        var rds=parseFloat((Math.random()*100).toFixed(fixed));
        if(rds<=exp){
            num++
        }else if(num==0 && i1+1==bdArgs){
            num++
        }
    }
    return({name:name,times:num,probable:parseFloat((num/times).toFixed(fixed+2))})
 }

    var rname=['薪炎之律者角色卡','午夜苦艾角色卡','白夜执事角色卡','黯蔷薇角色卡','蓝莓特攻角色卡','午夜苦艾碎片','白夜执事碎片','黯蔷薇碎片','蓝莓特攻碎片','高级技能材料','相转移镜面','装甲残晶'],
    exp=[1.50,4.50,3.00,3.00,3.00,15.00,3.33,3.33,3.33,1.50,6.00,36.50],
    bd=[100,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    res=[];
    for(var i=0;i<exp.length;i++){
        console.log(specific(exp[i],2,rname[i],100,bd[i]));
    }
    //console.log(res);
    debugger;

// var ress=[]
// for(var i=0;i<10;i++){
//    ress.push(elysia())
// }
// console.log(ress)

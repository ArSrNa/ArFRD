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
    var result=[];
    var rds=(Math.random()).toFixed(fixed);
    for(var i1=0;i1<exp.length;i1++){
        if(rds<=exp[i1]){
            result.push(name[i])
            //这里要对应 name:value 形式
            //搞不懂怎么搞了，现在已经完成foreach查找每一个名称对应概率了
        }
    }
      return result
    }

    var exp=[0.015,0.135,0.25,0.6],
        name=['S级角色卡','A级角色卡','A级碎片','材料'];



var ress=[]
for(var i=0;i<10;i++){
   ress.push(elysia())
}
console.log(ress)

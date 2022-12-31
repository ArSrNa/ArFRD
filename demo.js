function demo(){
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


    function test(){
        var rname=['薪炎之律者角色卡','午夜苦艾角色卡','白夜执事角色卡','黯蔷薇角色卡','蓝莓特攻角色卡','午夜苦艾碎片','白夜执事碎片','黯蔷薇碎片','蓝莓特攻碎片','高级技能材料','相转移镜面','装甲残晶'],
        exp=[1.50,4.50,3.00,3.00,3.00,15.00,3.33,3.33,3.33,1.50,6.00,36.50],
        bd=[100,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        res=[];
        for(var i=0;i<exp.length;i++){
            res.push(specific(exp[i],rname[i],10000,{times:bd[i]}))
        }
        console.log(res);
    }
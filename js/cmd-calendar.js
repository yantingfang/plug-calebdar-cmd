//Author:闫亭芳
define(function(require,exports,module){
       	require("jquery-1.5.1");
        // var $=require("jquery-2.1.4");
       	// exports.$=require("jquery-2.1.4");
       	exports.eed=function(){
//$.fn.extend({
    jQuery.fn.extend({
	calinitFrame:function(){
		//"#"+this[0].id,input框的ID
		var k='<div id="'+this[0].id+'calendar" class="calcont"><div class="calHead"><a class="preMonth" href=javascript:$().calmoveLastMonth("#'+this[0].id+'");></a><span class="currentYearText"><a href=javascript:$().calshowYear("#'+this[0].id+'"); class="currentYear"></a>年</span><span class="currentMonthText"><a href=javascript:$().calshowMonth("#'+this[0].id+'"); class="currentMonth"></a>月</span><a class="nextMonth" href=javascript:$().calmoveNextMonth("#'+this[0].id+'");></a></div><div class="Content"><table class="calContent"><thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody class="monthDate"></tbody></table><table class="yemonthDate"><tbody><tr class="tr"><td><a class="curM">一月</a></td><td><a class="curM">二月</a></td><td><a class="curM">三月</a></td><td><a class="curM">四月</a></td></tr><tr class="tr"><td><a class="curM">五月</a></td><td><a class="curM">六月</a></td><td><a class="curM">七月</a></td><td><a class="curM">八月</a></td></tr><tr class="tr"><td><a class="curM">九月</a></td><td><a class="curM">十月</a></td><td><a class="curM">十一月</a></td><td><a class="curM">十二月</a></td></tr></tbody></table><table class="yearDate"></table></div></div>';
        $("body").append(k);
		var nowdate=new Date();
		var curYear=nowdate.getFullYear();
		var curMonth=nowdate.getMonth()+1;
		$(".currentYear").text(curYear);
		var curYear=nowdate.getFullYear();
		$(".currentMonth").text(curMonth);
		$("#"+this[0].id).bind("click focus",function(){
			$("#"+this.id+"calendar").slideDown("slow");
		});	
		//获得某个元素(input)在页面上的偏移量，并给日历定位
		var actualLeft=$("#"+this[0].id)[0].offsetLeft;
    	var current=$("#"+this[0].id)[0].offsetParent;
    	while(current!==null){
    		actualLeft+=current.offsetLeft;
    		current=current.offsetParent;
    	}
    	var actualTop=$("#"+this[0].id)[0].offsetTop;
    	var current=$("#"+this[0].id)[0].offsetParent;
    	while(current!==null){
    		actualTop+=current.offsetTop;
    		current=current.offsetParent;
    	}
    	var heig=$("#"+this[0].id)[0].offsetHeight;
    	$("#"+this[0].id+"calendar").css("left",actualLeft);
		$("#"+this[0].id+"calendar").css("top",actualTop+heig);
		
		$().calfillMonth("#"+this[0].id);
	},
	//根据当前选择的年月填充日期
    calfillMonth:function (aa){
    	var curYear=$(aa+"calendar"+" .currentYear").text(),
    	curMonth=$(aa+"calendar"+" .currentMonth").text(),
    	weekDay=(new Date(curYear,curMonth-1,1)).getDay();
    	monthLength=((new Date(curYear,curMonth,1))-(new Date(curYear,curMonth-1,1)))/1000/60/60/24,
    	lastMonthLength=((new Date(curYear,curMonth-1,1))-(new Date(curYear,curMonth-2,1)))/1000/60/60/24,
    	k='';
    	if(weekDay==0){
    		weekDay=7;
    	}
    	var inputdates=$(aa).val().split("-");
    	switch(weekDay){
    		case 1:{
    			for(var i=0;i<weekDay;i++){
    				//如果输入框中的日期等于当前日历中的日期，那就把此日期标记出来
    				if(inputdates[0]==curYear&&inputdates[1]==curMonth-1&&(lastMonthLength-weekDay+i+1)==inputdates[2]){k+='<td><a class="preD tdaclick">'+(lastMonthLength+1-weekDay+i)+'</a></td> /';}
    				else{k+='<td><a class="preD">'+(lastMonthLength+1-weekDay+i)+'</a></td> /';}
    				
    			}
    		}
    		break;
    		case 2:{
    			for(var i=0;i<weekDay;i++){
    				if(inputdates[0]==curYear&&inputdates[1]==curMonth-1&&(lastMonthLength-weekDay+i+1)==inputdates[2]){k+='<td><a class="preD tdaclick">'+(lastMonthLength+1-weekDay+i)+'</a></td> /';}
    				else{k+='<td><a class="preD">'+(lastMonthLength+1-weekDay+i)+'</a></td> /';}
    				
    			}
    		}
    		break;
    		case 3:{
    			for(var i=0;i<weekDay;i++){
    				if(inputdates[0]==curYear&&inputdates[1]==curMonth-1&&(lastMonthLength+1-weekDay+i)==inputdates[2]){k+='<td><a class="preD tdaclick">'+(lastMonthLength+1-weekDay+i)+'</a></td> /';}
    				else{k+='<td><a class="preD">'+(lastMonthLength+1-weekDay+i)+'</a></td> /';}
    				
    			}
    		}
    		break;
    		case 4:{
    			for(var i=0;i<weekDay;i++){
    				if(inputdates[0]==curYear&&inputdates[1]==curMonth-1&&(lastMonthLength+1-weekDay+i)==inputdates[2]){k+='<td><a class="preD tdaclick">'+(lastMonthLength+1-weekDay+i)+'</a></td> /';}
    				else{k+='<td><a class="preD">'+(lastMonthLength+1-weekDay+i)+'</a></td> /';}
    				
    			}
    		}
    		break;
    		case 5:{
    			for(var i=0;i<weekDay;i++){
    				if(inputdates[0]==curYear&&inputdates[1]==curMonth-1&&(lastMonthLength+1-weekDay+i)==inputdates[2]){k+='<td><a class="preD tdaclick">'+(lastMonthLength+1-weekDay+i)+'</a></td> /';}
    				else{k+='<td><a class="preD">'+(lastMonthLength+1-weekDay+i)+'</a></td> /';}
    				
    			}
    		}
    		break;
    		case 6:{
    			for(var i=0;i<weekDay;i++){
    				if(inputdates[0]==curYear&&inputdates[1]==curMonth-1&&(lastMonthLength+1-weekDay+i)==inputdates[2]){k+='<td><a class="preD tdaclick">'+(lastMonthLength+1-weekDay+i)+'</a></td> /';}
    				else{k+='<td><a class="preD">'+(lastMonthLength+1-weekDay+i)+'</a></td> /';}
    				
    			}
    		}
    		break;
    		case 7:{
    			for(var i=0;i<weekDay;i++){
    				if(inputdates[0]==curYear&&inputdates[1]==curMonth-1&&(lastMonthLength+1-weekDay+i)==inputdates[2]){
    					k+='<td><a class="preD tdaclick">'+(lastMonthLength+1-weekDay+i)+'</a></td> /';
    				}
    				else{k+='<td><a class="preD">'+(lastMonthLength+1-weekDay+i)+'</a></td> /';}
    				
    			}
    		}
    		break;
    	}
    	//填充当前月的数据
        for(var i=0;i<monthLength;i++){
    		
    		if(inputdates[0]==curYear&&inputdates[1]==curMonth&&(i+1)==inputdates[2]){
    		 	k+='<td><a class="curD tdaclick">'+(i+1)+'</a></td> /';
    	    }
    		else{
    		k+='<td><a class="curD">'+(i+1)+'</a></td> /';}
    	}
    	for(var i=0,n=(42-monthLength-weekDay);i<n;i++){
    		if(inputdates[0]==curYear&&inputdates[1]==Number(curMonth)+1&&(i+1)==inputdates[2]){k+='<td><a class="nextD tdaclick">'+(i+1)+'</a></td> /';}
    		else{k+='<td><a class="nextD">'+(i+1)+'</a></td> /';}
    		
    	}
    	var monthArray=k.split(" /");
    	var ks="<tr>";
    	for(var i=0;i<monthArray.length-1;i++){
    			ks+=monthArray[i];
    			if(i%7==6) ks+="</tr><tr>";	
    	}
    	ks+="</tr>";
        $(aa+"calendar"+" .monthDate").html(ks);//填充这个日历下面的.MONTHDATE
        $().calmonthBind(aa);
    },
    //根据当前日历中年填充10年
    calfillYear:function (aa){
       var curYear=parseInt(Number($(aa+"calendar"+" .currentYear").text())/10)*10-1;
       var k='<tbody><tr class="tr"><td><a class="curY preD">'+curYear+'</a></td>';
       for(var i=curYear+1;i<(curYear+4);i++){
        k+='<td><a class="curY">'+i+'</a></td>';
       }
       k+='</tr><tr class="tr">';
       for(var i=curYear+4;i<(curYear+8);i++){
        k+='<td><a class="curY">'+i+'</a></td>';
       }
       k+='</tr><tr class="tr">';
       for(var i=curYear+8;i<(curYear+11);i++){
        k+='<td><a class="curY">'+i+'</a></td>';
       }
       k+='<td><a class="curY nextD">'+i+'</a></td></tr></tbody>';
       $(aa+"calendar"+" .yearDate").html(k);
       $().calyearBind(aa);
    },
    //给日期绑定点击事件
    calmonthBind:function(aa){
		$(aa+"calendar"+" .curD,.preD,.nextD").bind("click",function(){//在给定的祖先元素下匹配所有的后代元素
			var yearin=$(aa+"calendar"+" .currentYear").text();
			var monthin=$(aa+"calendar"+" .currentMonth").text();
			var dayin=$(this).text();
			var classs=$(this).attr("class");
			switch(classs){
				case 'preD':{
					var datein=new Date(yearin,monthin-2,dayin);
					yearin=datein.getFullYear();
			        monthin=datein.getMonth()+1;//以上三句是为了从14年1月到13年12月
					$(aa).val(yearin+"-"+monthin+"-"+dayin);
					//$(".preD").removeClass("tdaclick");
					$().calchangeYandM(yearin,monthin,aa);
				} 
				break;
				case 'curD':{
					$(aa).val(yearin+"-"+monthin+"-"+dayin);
					$(".curD,.preD,.nextD").removeClass("tdaclick");
					$(this).addClass("tdaclick");
					//移除其他日期的样式，为被选中日期添加样式
					$("#"+aa.slice(1)+"calendar").hide();
				} 
				break;
				case 'nextD':{
					var datein=new Date(yearin,monthin,dayin);
					yearin=datein.getFullYear();
			        monthin=datein.getMonth()+1;//以上三句是为了从13年12月到14年1月
					$(aa).val(yearin+"-"+monthin+"-"+dayin);
					//$(".nextD").removeClass("tdaclick");
					$().calchangeYandM(yearin,monthin,aa);//更改日历中的年月
				} 
				break;
			}	
		});
	},
    //给月份绑定点击事件
    calyemonthBind:function(aa){
        $(aa+"calendar"+" .curM").bind("click",function(){
            var yearin=$(aa+"calendar"+" .currentYear").text();
            var monthin=$(this).text();
            switch(monthin){
                case '一月':{monthin=1;} break;
                case '二月':{monthin=2;} break;
                case '三月':{monthin=3;} break;
                case '四月':{monthin=4;} break;
                case '五月':{monthin=5;} break;
                case '六月':{monthin=6;} break;
                case '七月':{monthin=7;} break;
                case '八月':{monthin=8;} break;
                case '九月':{monthin=9;} break;
                case '十月':{monthin=10;} break;
                case '十一月':{monthin=11;} break;
                case '十二月':{monthin=12;} break;
            }
           $(aa+"calendar"+" .currentMonth").text(monthin);
           $().calfillMonth(aa);
           //显示什么，就给箭头做相应的绑定
           $(aa+"calendar"+" .calContent").css("display","table");
        $(aa+"calendar"+" .yemonthDate").css("display","none");
        $(aa+"calendar"+" .yearDate").css("display","none");
        $(aa+"calendar"+" .preMonth").attr("href","javascript:$().calmoveLastMonth('"+aa+"')");
        $(aa+"calendar"+" .nextMonth").attr("href","javascript:$().calmoveNextMonth('"+aa+"')");});
    },
    //给年份绑定点击事件
    calyearBind:function (aa){
        $(aa+"calendar"+" .curY").bind("click",function(){
            $(aa+"calendar"+" .currentYear").text($(this).text());
            $().calfillMonth(aa);
           $(aa+"calendar"+" .calContent").css("display","table");
        $(aa+"calendar"+" .yemonthDate").css("display","none");
        $(aa+"calendar"+" .yearDate").css("display","none");
        $(aa+"calendar"+" .preMonth").attr("href","javascript:$().calmoveLastMonth('"+aa+"')");
        $(aa+"calendar"+" .nextMonth").attr("href","javascript:$().calmoveNextMonth('"+aa+"')")
        });
    },
    //改变为当前想要的月和年，并重新填写月的数据；
    calchangeYandM:function (year,month,aa){
    	$(aa+"calendar"+" .currentYear").text(year);
	    $(aa+"calendar"+" .currentMonth").text(month);
	    $().calfillMonth(aa);
	    $(aa+"calendar").hide();
    },
    calmoveLastMonth:function (aa){
    	var year=$(aa+"calendar"+" .currentYear").text();
		var month=$(aa+"calendar"+" .currentMonth").text()-1;
    	var date=new Date(year,month-1,1);
    	var curYear=date.getFullYear();
    	var curMonth=date.getMonth()+1;
    	$(aa+"calendar"+" .currentYear").text(curYear);
    	$(aa+"calendar"+" .currentMonth").text(curMonth);
		$().calfillMonth(aa);	  
    },
    calmoveNextMonth:function (aa){
    	var year=$(aa+"calendar"+" .currentYear").text();
		var month=$(aa+"calendar"+" .currentMonth").text();
    	var date=new Date(year,month,1);
    	var curYear=date.getFullYear();
    	var curMonth=date.getMonth()+1;
    	$(aa+"calendar"+" .currentYear").text(curYear);
    	$(aa+"calendar"+" .currentMonth").text(curMonth);
		$().calfillMonth(aa);
    },
    calmoveLastYear:function (aa){
        $(aa+"calendar"+" .currentYear").text($(aa+"calendar"+" .currentYear").text()-1);
    },
    calmoveNextYear:function (aa){
        $(aa+"calendar"+" .currentYear").text(Number($(aa+"calendar"+" .currentYear").text())+1);
    },
    calmovepTenMonth:function (aa){
        $(aa+"calendar"+" .currentYear").text($(aa+"calendar"+" .currentYear").text()-10);
        $().calfillYear(aa);
    },
    calmovenTenMonth:function (aa){
        $(aa+"calendar"+" .currentYear").text(Number($(aa+"calendar"+" .currentYear").text())+10);
        $().calfillYear();
    },
    calshowYear:function (aa){
        $().calfillYear(aa);
        $(aa+"calendar"+" .calContent").css("display","none");
        $(aa+"calendar"+" .yemonthDate").css("display","none");
        $(aa+"calendar"+" .yearDate").css("display","table");
        //把箭头绑定改变10年的函数
        $(aa+"calendar"+" .preMonth").attr("href","javascript:$().calmovepTenMonth('"+aa+"')");
        $(aa+"calendar"+" .nextMonth").attr("href","javascript:$().calmovenTenMonth('"+aa+"')");
    },
    calshowMonth:function (aa){
        $(aa+"calendar"+" .calContent").css("display","none");
        $(aa+"calendar"+" .yemonthDate").css("display","table");
        $(aa+"calendar"+" .yearDate").css("display","none");
        //把箭头绑定改变年的函数
        $(aa+"calendar"+" .preMonth").attr("href","javascript:$().calmoveLastYear('"+aa+"')");
        $(aa+"calendar"+" .nextMonth").attr("href","javascript:$().calmoveNextYear('"+aa+"')");
        $().calyemonthBind(aa);
    }
});}
});

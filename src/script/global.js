"use strict";
//月份
var months=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
//公历节日
  var sFestival = ["0101","元旦","0202", "世界湿地日","0214","情人节","0308", "国际妇女节","0312","植树节","0401","愚人节","0422","世界地球日",
	"0501","劳动节","0504","青年节","0512","国际护士节","0518","国际博物馆日","0601","儿童节","0605", "世界环境日","0701", "建党节","0801","建军节",
	"0910","教师节", "1001","国庆节","1117","世界学生日","1201","世界艾滋病日","1224","平安夜","1225", "圣诞节"];

//农历节日
var lFestival = ["0101","春节","0115","元宵节","0202","龙头节","0505","端午节","0707","七夕","0715","中元节","0815","中秋节","0909","重阳节",
	"1001","寒衣节","1223","小年","除夕"];
//农历每年闰月大小月表
var lunarInfo=[0x4bd8, 0x4ae0, 0xa570, 0x54d5, 0xd260, 0xd950, 0x5554, 0x56af, 0x9ad0, 0x55d2,
        		0x4ae0, 0xa5b6, 0xa4d0, 0xd250, 0xd255, 0xb54f, 0xd6a0, 0xada2, 0x95b0, 0x4977,
        		0x497f, 0xa4b0, 0xb4b5, 0x6a50, 0x6d40, 0xab54, 0x2b6f, 0x9570, 0x52f2, 0x4970,
        		0x6566, 0xd4a0, 0xea50, 0x6a95, 0x5adf, 0x2b60, 0x86e3, 0x92ef, 0xc8d7, 0xc95f,
        		0xd4a0, 0xd8a6, 0xb55f, 0x56a0, 0xa5b4, 0x25df, 0x92d0, 0xd2b2, 0xa950, 0xb557,
       		    0x6ca0, 0xb550, 0x5355, 0x4daf, 0xa5b0, 0x4573, 0x52bf, 0xa9a8, 0xe950, 0x6aa0,
      		    0xaea6, 0xab50, 0x4b60, 0xaae4, 0xa570, 0x5260, 0xf263, 0xd950, 0x5b57, 0x56a0,
        		0x96d0, 0x4dd5, 0x4ad0, 0xa4d0, 0xd4d4, 0xd250, 0xd558, 0xb540, 0xb6a0, 0x95a6,
        		0x95bf, 0x49b0, 0xa974, 0xa4b0, 0xb27a, 0x6a50, 0x6d40, 0xaf46, 0xab60, 0x9570,
       		    0x4af5, 0x4970, 0x64b0, 0x74a3, 0xea50, 0x6b58, 0x5ac0, 0xab60, 0x96d5, 0x92e0,
        		0xc960, 0xd954, 0xd4a0, 0xda50, 0x7552, 0x56a0, 0xabb7, 0x25d0, 0x92d0, 0xcab5,
        		0xa950, 0xb4a0, 0xbaa4, 0xad50, 0x55d9, 0x4ba0, 0xa5b0, 0x5176, 0x52bf, 0xa930,
        		0x7954, 0x6aa0, 0xad50, 0x5b52, 0x4b60, 0xa6e6, 0xa4e0, 0xd260, 0xea65, 0xd530,
        		0x5aa0, 0x76a3, 0x96d0, 0x4afb, 0x4ad0, 0xa4d0, 0xd0b6, 0xd25f, 0xd520, 0xdd45,
        		0xb5a0, 0x56d0, 0x55b2, 0x49b0, 0xa577, 0xa4b0, 0xaa50, 0xb255, 0x6d2f, 0xada0,
        		0x4b63, 0x937f, 0x49f8, 0x4970, 0x64b0, 0x68a6, 0xea5f, 0x6b20, 0xa6c4, 0xaaef,
        		0x92e0, 0xd2e3, 0xc960, 0xd557, 0xd4a0, 0xda50, 0x5d55, 0x56a0, 0xa6d0, 0x55d4,
        		0x52d0, 0xa9b8, 0xa950, 0xb4a0, 0xb6a6, 0xad50, 0x55a0, 0xaba4, 0xa5b0, 0x52b0,
        		0xb273, 0x6930, 0x7337, 0x6aa0, 0xad50, 0x4b55, 0x4b6f, 0xa570, 0x54e4, 0xd260,
        		0xe968, 0xd520, 0xdaa0, 0x6aa6, 0x56df, 0x4ae0, 0xa9d4, 0xa4d0, 0xd150, 0xf252,
        		0xd520];
  //生肖
  var   Animals=["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"];   
  //节气
  var   solarTerm   =  ["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"];
  var   sTermInfo   =  [0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758];  
  var   lunarmonthStr1   =  [" ","一","二","三","四","五","六","七","八","九","十"];   
  var   lunarmonthStr2   =   ["初","十","廿"]; 

function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload !== "function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		};
	}
}
//设置当前时间时分秒
function setCurrenttime(){
	if(!document.getElementById) {return false;} 
	if(!document.getElementById("time")) {return false;}
	var times=document.getElementById("time");
	var  date=new Date();
	var  hours=date.getHours();
	var minus=date.getMinutes();
	var s=date.getSeconds();
	if(hours<10) {hours="0"+hours;}
	if(minus<10) {minus="0" + minus;}
	if(s<10) {s="0" +s;}
	times.innerHTML="<span class='timetext'>"+"北京时间  "+"</span>"+ hours+":"+minus+":"+s;
	var t=setTimeout(function(){setCurrenttime();},500);
}

addLoadEvent(setCurrenttime);
//设置年下拉菜单以及事件处理
 var calendarlistliarr=[];  //用于保存日期显示列表中li的dom节点
 var calparr=[]; //用于保存日期显示列表中li下p的节点
var selectyear=document.getElementById("yearid");
var selectmonth=document.getElementById("month");
function setYearList(){
	selectyear.onchange=function(){
		 clearoutlineupdate();
		 return false;
	};
	var yearcount=1901;
	var date=new Date();
	var currentyear=date.getFullYear();
	for(var i=0;i<200;i++){
		var options=document.createElement("option");
		options.setAttribute("value",i.toString());
		if(yearcount===currentyear){
			options.setAttribute("selected","selected");
		}
		var nodevalues=yearcount+"年";
		var optionstext=document.createTextNode(nodevalues);
		options.appendChild(optionstext);
		selectyear.appendChild(options);
		yearcount++;
	}
}
addLoadEvent(setYearList);
function clearoutlineupdate(){
	updateCalenderDayList();
    for(var i=0;i<calendarlistliarr.length;i++){
	   calendarlistliarr[i].style.outlineColor="rgb(240,240,240)";    //消除点击后的边框
	}
}
//设置月下拉菜单以及事件处理
function setMonthsList(){
	selectmonth.onchange=function(){
	    clearoutlineupdate();
		return false;
	};
	// selectmonth.addEventListener('change',clearoutlineupdate,false);
	var date=new Date();
	var currentmonth=date.getMonth();
	for(var i=0;i<12;i++){
		var options=document.createElement("option");
		options.setAttribute("value",i.toString());
		if(i===currentmonth){
			options.setAttribute("selected","selected");
		}
		var optionstext=document.createTextNode(months[i]);		
		options.appendChild(optionstext);
		selectmonth.appendChild(options);
	}
}
addLoadEvent(setMonthsList);
//下拉选项向前向后和返回今天点击后事件处理
function linkResp(){
	if(!document.getElementById) {return false;}
	if(!document.getElementsByTagName) {return false;}
	var year = document.getElementById("select_year");
	var ylinks=year.getElementsByTagName("a");
	ylinks[0].innerHTML="&lt;";                      //显示<
	ylinks[1].innerHTML="&gt;";		         //显示>
	ylinks[0].onclick=function(){
	   updateYearSect(-1);
	    clearoutlineupdate();
	   return false;
	};
	ylinks[1].onclick=function(){
	   updateYearSect(1);
	    clearoutlineupdate();
	   return false;
	};

	var month = document.getElementById("select_month");
	var mlinks=month.getElementsByTagName("a");
	mlinks[0].innerHTML="&lt;";
	mlinks[1].innerHTML="&gt;";
	mlinks[0].onclick=function(){
		updateMonthSect(-1);
		 clearoutlineupdate();
		return false;
	};
	mlinks[1].onclick=function(){
		updateMonthSect(1);
		 clearoutlineupdate();
		return false;
	};

	var back = document.getElementById("backtoday");
	var blinks=back.getElementsByTagName("a");
	blinks[0].onclick=function(){
		returntoday();
		 clearoutlineupdate();
		return false;
	};

}
addLoadEvent(linkResp);
//更新年下拉菜单，传入点击前后标志，-1为向前1为向后

function updateYearSect(flag){
	var selectindex=selectyear.selectedIndex;
	var indexs=selectindex+flag;
	if(indexs<0||indexs>199) {
		selectyear.selectedIndex =selectindex;
	}else{
		selectyear.selectedIndex =indexs;	
	}
}
//更新月下拉菜单，传入点击前后标志，-1为向前1为向后
function updateMonthSect(flag){
	var selectindex=selectmonth.selectedIndex;
	var indexs=selectindex+flag;
	if(indexs<0||indexs>11) {
		selectmonth.selectedIndex =selectindex;
	}else{
		selectmonth.selectedIndex =indexs;	
	}
}

//点击返回今天选项菜单的处理
function returntoday(){
	var date=new Date();
	var years=date.getFullYear();
	var yearindex=years-1901;
	var month=date.getMonth();
	var today=date.getDate();
	rightdispayday(years,month,today) ; 
	selectyear.selectedIndex=yearindex;
	selectmonth.selectedIndex=month;
}


//农历计算 ,传入阳历年月日对象， 返回农历日期对象，属性有 .year .month .day.
//
function Lunarcacular(objDate,lunarInfo){
	this.year=0;
	this.month=0;
	this.day=0;
	this.lunarInfo=lunarInfo;
    this.clunar(objDate);
}
//返回农历 y年的总天数
Lunarcacular.prototype.lunarYearDays = function(y) {
	var i, sum = 348;
	for(i=0x8000; i>0x8; i>>=1) {sum += (this.lunarInfo[y-1900] & i)? 1: 0;}
	return(sum+this.leapDays(y));
}
//返回农历 y年闰月的天数
Lunarcacular.prototype.leapDays = function(y) {
    if (this.leapMonth(y)) {return( (this.lunarInfo[y - 1899] & 0xf) === 0xf ? 30 : 29);}
    else {return(0);}
}
// 返回农历 y年闰哪个月 1-12 , 没闰返回 0
Lunarcacular.prototype.leapMonth = function(y) {
    var lm = this.lunarInfo[y - 1900] & 0xf;
    return(lm === 0xf ? 0 : lm);
}
//计算 农历y年m月的总天数
Lunarcacular.prototype.monthDays = function(y,m) {
	return( (this.lunarInfo[y-1900] & (0x10000>>m))? 30: 29 );
}
Lunarcacular.prototype.clunar=function (objDate) {
	var i,yearindex, leap=0, temp=0;
	var offset = (Date.UTC(objDate.getFullYear(),objDate.getMonth(),objDate.getDate()) - Date.UTC(1900,0,31))/86400000;
	for(yearindex=1900; yearindex<2100 && offset>0; yearindex++) { 
		temp=this.lunarYearDays(yearindex);     //某年农历天数
		offset-=temp;                   
	}
	if(offset<0) { 
		offset+=temp;                  
		yearindex--; 
	}
	this.year = yearindex;              //当前农历年
	leap = this.leapMonth(yearindex);       //当前农历年闰月情况
	var isLeap = false;             
	for(i=1; i<13 && offset>0; i++) {
		if(leap>0 && i===(leap+1) && isLeap===false){ 
			--i;                               //多计算一个月
			isLeap = true; 
			temp = this.leapDays(this.year);   //闰月天数
		}
		else{ 
			temp = this.monthDays(this.year, i); //农历天数
		}

	if(isLeap===true && i===(leap+1)){isLeap = false;}
		offset -= temp;
	}
	if(offset==0 && leap>0 && i==leap+1){
		if(isLeap){                      //如果在闰月标志有效跳出循环，i即为月，否则循环i多加一
			isLeap = false; 
		}
		else{ 
			isLeap = true; 
			--i; 
		}
	}

	if(offset<0){ 
		offset += temp;       
		--i; 
	}
	this.month = i;             //当前农历月
	this.day = offset + 1;      //当前农历日
}
//返回农历中文日期
Lunarcacular.prototype.getLunarDay = function(lunarmonthStr1,lunarmonthStr2){   
        var s;   
        switch(this.day){   
              case 10:   
                    s = '初十';   
                    break;   
              case 20:   
                    s = '二十';  
                    break;   
              case 30:   
                    s = '三十';  
                    break;   
              default:   
                    s = lunarmonthStr2[Math.floor(this.day/10)];   
                    s += lunarmonthStr1[this.day%10];
                    break;   
        }   
        return(s);   
  }   
// 返回农历中文月份   
Lunarcacular.prototype.getLunarMonth = function(){   
      var str;    
      switch(this.month){   
           case 1:   
                 str = "正月";   
                 break;   
           case 2:   
                 str = "二月";   
                 break;   
           case 3:   
                 str = "三月";   
                 break;   
            case 4:   
                 str = "四月";   
                 break;   
            case 5:   
                 str = "五月";   
                 break;   
            case 6:   
                 str = "六月";   
                 break;   
            case 7:   
                 str = "七月";   
                 break;   
            case 8:   
                 str = "八月";   
                 break;   
            case 9:   
                 str = "九月";   
                 break;   
            case 10:   
                 str = "十月";   
                 break;   
            case 11:   
                 str = "十一月";   
                 break;   
            case 12:   
                 str = "十二月";   
                 break;   
            default:
                console.log(this.month);   
                 break;   
       }   
       return(str);   
  }
//农历节日判断
Lunarcacular.prototype.isLunarFestival = function(){
    var y=this.year;
	var m=this.month;
	var d=this.day;
	var mondays=this.monthDays(y,m);  //计算该月农历天数
	if(m===12&&d===mondays){
		return lFestival[lFestival.length-1];       //判断除夕农历最后一天
	}
	var str;
	if(m<10){
	   str="0"+m;
	}else{
	   str=m.toString();
	}
	if(d<10){
		str=str+"0"+d;
	}else{
		str=str+d;
	}
	var index=-1;
	if(typeof lFestival.indexOf !=="function"){                                          //判断是否有indexOf函数
		for(var i=0;i<lFestival.length;i++){
			if(lFestival[i]===str){
			   index=i;
			   break;
			}
		}
	}else{
		 index=lFestival.indexOf(str);
	}
	if(index>=0){
		return lFestival[index+1];
	}else{
		return "nofestive";
	}
}
 //阴历节日节气计算
// 某年的第n个节气为几日
function sTerm(y,n) {
	var offDate = new Date( ( 31556925974.7*(y-1900) + sTermInfo[n]*60000  ) + Date.UTC(1900,0,6,2,5) );
	return(offDate.getUTCDate());
}
//阳历节日判断
function isFestival(m,d){
	var str;
	if(m<10){
	   str="0"+m;
	}else{
	   str=m.toString();
	}
	if(d<10){
		str=str+"0"+d;
	}else{
		str=str+d;
	}
	var index=-1;
	if(typeof sFestival.indexOf !=="function"){                                          //判断是否有indexOf函数
		for(var i=0;i<sFestival.length;i++){
			if(sFestival[i]===str){
			   index=i;
			   break;
			}
		}
	}else{
		 index=sFestival.indexOf(str);
	}

	if(index>=0){
		return sFestival[index+1];
	}else{
		return "nofestive";
	}
}

var caldetailarry=null; //用于存储日历列表相关信息
//日期点击框处理
function dateListClick(event){
    var target = window.event.srcElement||event.target||event.srcElement;
	var clicktarget=target.parentNode;
	var classname=clicktarget.getAttribute("class");
	if(classname!=="calendarli"&&classname!=="calendarlitoday")
	{
		return false;
	}
	var clickposition=parseInt(clicktarget.getAttribute("indexid"));
	var clickyear=caldetailarry[clickposition].newyear;                           //保存更新之前的信息
	var clickmoth=caldetailarry[clickposition].newmonth;
	var clickdate=caldetailarry[clickposition].newday;
	if(clickposition<7&&clickdate>20){
		changeSelection(-1);
		updateCalenderDayList();
	}else if(clickposition>28&&clickdate<20){
		changeSelection(1);
		updateCalenderDayList();
	}
	// var upElementImfor=new CalenderCons();
	//显示点击的位置
	for(var j=0;j<42;j++){
		if(caldetailarry[j].newyear===clickyear&&caldetailarry[j].newmonth===clickmoth&&caldetailarry[j].newday===clickdate){
			calendarlistliarr[j].style.outlineColor="rgb(0,155,0)";
		}else{
			calendarlistliarr[j].style.outlineColor="rgb(240,240,240)";    //恢复框的边距
		}
	}   
	//显示右边的日期
	rightdispayday(clickyear,clickmoth,clickdate) ;                          
}

function changeSelection(flag){                                                                                                  //点击上个月日期改变下拉菜单的显示
	if(!document.getElementById) {return false;}
	if(!document.getElementById("yearid")) {return false;}
	if(!document.getElementById("month")) {return false;}
	var selectindex=selectmonth.selectedIndex;
	var selectindexyear=selectyear.selectedIndex;
	selectindex=selectindex+flag;
	if(selectindex<0){
		if(selectindexyear===0){
			selectmonth.selectedIndex=0;
			selectyear.selectedIndex=selectindexyear;
		}else{
			selectmonth.selectedIndex=11;
			selectyear.selectedIndex=selectindexyear-1;
		}
	}else if(selectindex>11){
		if(selectindexyear===199){
			selectmonth.selectedIndex=11;
			selectyear.selectedIndex=selectindexyear;
		}else{
			selectmonth.selectedIndex=0;
			selectyear.selectedIndex=selectindexyear+1;
		}
	}else{
			selectmonth.selectedIndex=selectindex;
			selectyear.selectedIndex=selectindexyear;
	}
}

//右边年月日显示
function rightdispayday(year,month,day){
	var daydetail=document.getElementById("daydetail");
	var date=new Date(year,month,day);
	var week=date.getDay();
	var weekcn;
	switch(week){
		case 0:weekcn="星期日";
		break;
		case 1:weekcn="星期一";
		break;
		case 2:weekcn="星期二";
		break;
		case 3:weekcn="星期三";
		break;
		case 4:weekcn="星期四";
		break;
		case 5:weekcn="星期五";
		break;
		case 6:weekcn="星期六";
		break;
		default:
		break;
	}
	var strday=day;
	if(strday<10){
		strday="0"+strday;
	}
	if((month+1)<10){
		month="0"+(month + 1);
	}else{
		month=month+1;
	}
	var str= year+"年"+month+"月"+strday+"日"+"  "+weekcn;
	daydetail.innerHTML=str;
	var daydispay=document.getElementById("daydispay");
	var disps=daydispay.getElementsByTagName("p");
	// var   lunarcalederObj=new Lunar(date);              //返回农历信息
	var   lunarcalederObj=new Lunarcacular(date,lunarInfo);              //返回农历信息 
	var   lunarday=lunarcalederObj.getLunarDay(lunarmonthStr1,lunarmonthStr2); //计算农历中文日子
	var   lunarmonth=lunarcalederObj.getLunarMonth();
	disps[0].innerHTML= day.toString();
	disps[1].innerHTML="农历"+lunarmonth+lunarday;
	disps[2].innerHTML="【"+Animals[(year-1900)%12]+"年"+"】";      //1900为鼠年
}

//计算该月第一天星期几0-6表示日-到六
function countweek(year,mon){
	var date=new Date(year,mon,1);
	var week=date.getDay();
	return week;
}
//计算一个月有几天
function countDay(year,mon){
//判断是不是闰年
	var leapyear=false;
	if(((year%4===0)&&(year%100!==0))||(year%400===0&&(year%100===0))){
		leapyear=true;
	}else{
		leapyear=false;
	}
	var days=0;
//判断有几天
	if(mon===0||mon===2||mon===4||mon===6||mon===7||mon===9||mon===11){
		days=31;
	}
	if(mon===3||mon===5||mon===8||mon===10){
		days=30;
	}
	if(mon===1){
		if(leapyear) {
			days=29;
		}else{
			days=28;
		}
	}
	return days;
}

function completeDayList(){
	if(!document.getElementById) {return false;}
	if(!document.getElementById("calendar_list")) {return false;}
    var datelists = document.getElementById("calendar_list");
	var newdate=new Date();
	var newyear=newdate.getFullYear();  //获取当前年份
	var newmonth=newdate.getMonth();	    //获取当前月份
	var newday=newdate.getDate();    //获取当前几号
	rightdispayday(newyear,newmonth,newday);//右边显示年月日
	caldetailarry = calenderListDetail(newyear,newmonth);
	var struls="";
	for(var i=0;i<6;i++){
		var dateul=document.createElement("ul");
		var str="datelist"+i;
		var strlis="";
		var calendarli="calendarli";
		//var newdayclassname,
		 //    lunardaycalssname;
		for(var j=0;j<7;j++){
			var positionindex=i*7+j;
			var newdayclassname="newday1";
			var lunardaycalssname="lunarday1";
			if(caldetailarry[positionindex].week===0||caldetailarry[positionindex].week===6){
				if(!caldetailarry[positionindex].curmonthflag){
					newdayclassname="newday2";
					lunardaycalssname="lunarday2";
				}else{
					newdayclassname="newday21";
					lunardaycalssname="lunarday21";
				}
			}else{

				if(!caldetailarry[positionindex].curmonthflag){
					newdayclassname="newday3";
					lunardaycalssname="lunarday3";
				}else{
					newdayclassname="newday1";
					lunardaycalssname="lunarday1";
				}
			}

			var  lunarday=caldetailarry[positionindex].chineseday;
			if(caldetailarry[positionindex].lunarday===1){
				if(caldetailarry[positionindex].lunarmonthdays===30){
					lunarday=caldetailarry[i].chinesemoth+"大";
				}else{
					lunarday=caldetailarry[i].chinesemoth+"小";
				}
			}
			if(caldetailarry[positionindex].lunarterm!=="nolunarterm"){
				lunarday=caldetailarry[positionindex].lunarterm;
				if(!caldetailarry[positionindex].curmonthflag){
					lunardaycalssname="lunardaytermnocur";
				}else{
					lunardaycalssname="lunardaytermcur";
				}
			}
				
			if(caldetailarry[positionindex].newfestival !=="nofestive"){
				lunarday=caldetailarry[positionindex].newfestival;                    //阳历节日
				if(!caldetailarry[positionindex].curmonthflag){
					lunardaycalssname="lunardaynofes";

				}else{
					lunardaycalssname="lunardayfes";
				}
			}
			if(caldetailarry[positionindex].lunarfestival !=="nofestive"){   //农历节日
				lunarday=caldetailarry[positionindex].lunarfestival;
				if(!caldetailarry[positionindex].curmonthflag){
					lunardaycalssname="lunardaynofes";

				}else{
					lunardaycalssname="lunardayfes";
				}
			}
			if(caldetailarry[positionindex].newmonth===newmonth&&caldetailarry[positionindex].newyear===newyear&&
				caldetailarry[positionindex].newday===newday&&caldetailarry[positionindex].curmonthflag) {
				calendarli="calendarlitoday";               //指示今天的背景
			}else{ 
				calendarli="calendarli";	
			}
			
			strlis=strlis+"<li class= \""+calendarli+"\"  indexid=\""+positionindex+"\"><p class=\""+newdayclassname+"\">"+
			          caldetailarry[positionindex].newday+"</p>"+"<p class=\""+lunardaycalssname+"\">"+lunarday+"</p></li>";

		}
		struls=struls+"<ul class=\""+str+"\">"+strlis+"</ul>";
      	}
      	datelists.innerHTML=struls;
         datelists.onclick=dateListClick;                                  //设置日期框点击处理 
        var dateuls=datelists.getElementsByTagName("li");   //日期填充      
      //  	calendarlistliarr = Array.prototype.slice.apply(dateuls); //IE不兼容      
    	for(var j=0;j<dateuls.length;j++){
    		calendarlistliarr[j]=dateuls[j];
    	}
 	    
		for(var i=0;i<calendarlistliarr.length;i++){
	      	 calparr[i]=calendarlistliarr[i].getElementsByTagName("p");
		}  
		datelists=null; 	
}
addLoadEvent(completeDayList);
//更新日期
function getlidomelemet(){

}

addLoadEvent(getlidomelemet);
function updateCalenderDayList(){
	var year=selectyear.selectedIndex;
	var month=selectmonth.selectedIndex;
	var newdate=new Date();
	var newyear=newdate.getFullYear();  //获取当前年份
	var newmonth=newdate.getMonth();	    //获取当前月份
	var newday=newdate.getDate();    //获取当前几号
	 caldetailarry = calenderListDetail(year+1901,month);
	// var ElementImfor=new CalenderCons();
	for(var i=0;i<calendarlistliarr.length;i++){
		var newdayclassname="newday1";
		var lunardaycalssname="lunarday2";
		if(caldetailarry[i].week===0||caldetailarry[i].week===6){
			if(!caldetailarry[i].curmonthflag){
				newdayclassname="newday2";
				lunardaycalssname="lunarday2";
			}else{
				newdayclassname="newday21";
				lunardaycalssname="lunarday21";
			}
		}else{
			if(!caldetailarry[i].curmonthflag){
				newdayclassname="newday3";
				lunardaycalssname="lunarday3";
			}else{
				newdayclassname="newday1";
				lunardaycalssname="lunarday1";
			}
		}

		var  lunarday=caldetailarry[i].chineseday;
		if(caldetailarry[i].lunarday===1){
			if(caldetailarry[i].lunarmonthdays===30){
				lunarday=caldetailarry[i].chinesemoth+"大";
			}else{
				lunarday=caldetailarry[i].chinesemoth+"小";
			}
		}
		if(caldetailarry[i].lunarterm!=="nolunarterm"){ 
			lunarday=caldetailarry[i].lunarterm;
			if(!caldetailarry[i].curmonthflag){
				lunardaycalssname="lunardaytermnocur";
			}else{
				lunardaycalssname="lunardaytermcur";
			}
		}
			
		if(caldetailarry[i].newfestival!=="nofestive"){
			lunarday=caldetailarry[i].newfestival;                    //阳历节日
			if(!caldetailarry[i].curmonthflag){
				lunardaycalssname="lunardaynofes";

			}else{
				lunardaycalssname="lunardayfes";
			}
		}
		if(caldetailarry[i].lunarfestival !=="nofestive"){   //农历节日
			lunarday=caldetailarry[i].lunarfestival;
			if(!caldetailarry[i].curmonthflag){
				lunardaycalssname="lunardaynofes";

			}else{
				lunardaycalssname="lunardayfes";
			}
		}
		if(caldetailarry[i].newmonth===newmonth&&caldetailarry[i].newyear===newyear&&caldetailarry[i].newday===newday&&caldetailarry[i].curmonthflag){
			calendarlistliarr[i].setAttribute("class","calendarlitoday");
		}else{
			calendarlistliarr[i].setAttribute("class","calendarli");
		}

		calparr[i][0].innerHTML=caldetailarry[i].newday.toString();
		calparr[i][1].innerHTML=lunarday;
		calparr[i][0].className=newdayclassname;
		calparr[i][1].className=lunardaycalssname;
	}
}


function  CldElementImf(newyear,newmonth,newday,lunaryear,lunarmonth,lunarday,newfestival,lunarfestival,lunarterm,week,
	                   curmonthflag,chinesemoth,chineseday,lunarmonthdays){
		this.newday=newday;
		this.newyear=newyear;
		this.newmonth=newmonth;
		this.lunarday=lunarday;                                               //农历日期
		this.lunarmonth=lunarmonth;				     //农历月份
		this.lunaryear=lunaryear;                                             //农历年
		this.newfestival=newfestival;                                          //阳历节日
		this.lunarfestival=lunarfestival;                //农历节日
		this.lunarterm=lunarterm;	
		this.week=week;
		this.curmonthflag=curmonthflag;
		this.chinesemoth=chinesemoth;              //农历中文
		this.chineseday=chineseday;
		this.lunarmonthdays=lunarmonthdays;  //农历月天数
}

//用于更新日历信息存储总共42个对象，每个包含阳历年月日、农历年月日、节日信息。输入为阳历年月，返回数组对象
function calenderListDetail(year,month){
	var cdlistdetailarr=new Array(42);
	var firstindex=countweek(year,month);
	var curmonday=countDay(year,month);
	var lastmonth=0;
	var lastyear=0;
	var lastmonday=0;
	if(month===0){
	 	lastmonth=11;                                              
	 	lastyear=year-1;
	}else{
		lastmonth=month-1;
		lastyear=year;
	}
	if(lastyear<1901){
		lastmonday=31;
	}else{
		lastmonday=countDay(lastyear,lastmonth);
	}  
	var nextyear=(year===11)? (year+1):year;
	var nextmonth=(month===11)? 0:(month+1);
	var  firstTerm= sTerm(year,month*2);           //当月第一个节气几号
	var  term2= sTerm(year,month*2+1);            //当月第二个节气几号 
	var term3=sTerm(nextyear,nextmonth*2);   //下个月第一个节气几号
	var curmonthflag;                                       //列表中是否为当前月标志
	var listyear;
	var listmonth;
	var dayindex;
	//计算第一个位置的日期
	if(firstindex===0){
		listyear=year;
		listmonth=month;
		dayindex=1;
		curmonthflag=true;
	}else{
		listyear=lastyear;
		listmonth=lastmonth;
		dayindex=lastmonday-firstindex+1;
		curmonthflag=false;
	}

	for(var i=0;i<42;i++){						                                                                
		var   newcalederObj=new Date(listyear,listmonth,dayindex);
		var  week=newcalederObj.getDay();
		//var   lunarcalederObj=new Lunar(newcalederObj) ;                           //返回农历信息
		var lunarcalederObj=new Lunarcacular(newcalederObj,lunarInfo);
		var  lunarday=lunarcalederObj.day;                                                //农历日期
		var lunarmonth=lunarcalederObj.month;				     //农历月份
		var lunaryear=lunarcalederObj.year;                                              //农历年
		var chineseday = lunarcalederObj.getLunarDay(lunarmonthStr1,lunarmonthStr2);
		var chinesemoth = lunarcalederObj.getLunarMonth();   //农历中文月
		var lunarmonthdays = lunarcalederObj.monthDays(lunaryear,lunarmonth);
		var newfestival=isFestival(listmonth+1,dayindex);                                           //阳历节日
		var lunarfestival=lunarcalederObj.isLunarFestival();                   //农历节日
		var lunarterm;										 //节气
		if((firstTerm===dayindex)&&i<20){                              
			lunarterm=solarTerm[month*2];
		}else if((term2===dayindex)&&i>7){
			lunarterm=solarTerm[month*2+1];
		}else if((term3===dayindex)&&i>30){
			lunarterm=solarTerm[nextmonth*2];
		}else{
			lunarterm="nolunarterm";    
		}   
		var objdetail=new CldElementImf(listyear,listmonth,dayindex,lunaryear,lunarmonth,lunarday,newfestival,lunarfestival,
			                           lunarterm,week,curmonthflag,chinesemoth,chineseday,lunarmonthdays);
		cdlistdetailarr[i]=objdetail;
	   if(dayindex===lastmonday&&i<7)
		{
			curmonthflag=true;	
		}else if(dayindex===curmonday&&i>7){
			curmonthflag=false;
		}
		if((dayindex===lastmonday&&i<7) || (dayindex===curmonday&&i>7)){	
			dayindex=1;
			if(listmonth===11){
				listmonth=0;
				listyear++;
			}else{
				listmonth++;
			}
		}else{
			dayindex++;
		}

	}
	return cdlistdetailarr;
}
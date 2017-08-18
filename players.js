// 滑动条与人数控制
	numobj=document.getElementById('num');
	subobj=document.getElementById('sub');
	addobj=document.getElementById('add');
	scrollobj=document.getElementById('scroll');
	killerobj=document.getElementById('killer');
	peoobj=document.getElementById('peo');
	btnobj=document.getElementById('btn');
	s1obj=document.getElementById('s1');
	
	function set(){
		if ( numobj.value<4 || numobj.value>18 ){
					killerobj.value = '';
					peoobj.value = '';
					alert('请输入正确的玩家数量');
				}else if ( numobj.value > 3 && numobj.value < 8 ){
					killerobj.value = 1;
					peoobj.value = ( numobj.value - 1 );
				}else if ( numobj.value > 7 && numobj.value < 12 ){
					killerobj.value = 2;
					peoobj.value = ( numobj.value - 2 );			
				}else {
					killerobj.value = 3;
					peoobj.value = numobj.value - 3;
				}
	}


	numobj.onblur=function(){
		scrollobj.value=this.value;
		set();		
	};
	
	
	scrollobj.onchange=function(){
		numobj.value=this.value;
		set();
	};
	
	subobj.onclick=function(){
		scrollobj.value--;
		if(scrollobj.value<4){
			scrollobj.value=4;
		}else{
			numobj.value=scrollobj.value;
			set();
		}		
	};
	
	addobj.onclick=function(){
		scrollobj.value++;
		if(scrollobj.value>18){
			scrollobj.value=18;
		}else{
			numobj.value=scrollobj.value;
			set();
		}
		
	};
//	
	//从一个给定的数组arr中，随机返回num个不重复项
		function gerArrayItems(arr,num){
		//新建一个数组，将传入的数组复制过来，用于运算，而不要直接操作传入的数组
			var temp_array=new Array();
			for(var index in arr){
				temp_array.push(arr[index]);
			}
			//取出的数值项保存在此数组中
			var return_array=new Array();
			for(var i=0;i<num;i++){
				//判断如果数组还有可以取出的元素，以防下标越界
				if(temp_array.length>0){
					//在数组中产生一个随机索引
					var arrIndex=Math.floor(Math.random()*temp_array.length);
					//此随机索引的对应的数组元素值复制出来
					return_array[i]=temp_array[arrIndex];
					//然后删除此索引的数组元素，这时候temp_array变为新的数组
					temp_array.splice(arrIndex,1);
				}else{
					//数组中数据项取完后，退出循环，比如数组本来只有10项，但要求取出20项
					break;
				}
			}
			return return_array;
		}	


	btnobj.onclick=function(){
			
		set();
		
		var killer=[];
        var peo=[];

        var k = parseInt(killerobj.value);
        var p = parseInt(peoobj.value);
        for (var i = 0;i < k;i++){
              killer[i] = "杀手";
        }
//		alert(killer[0]+'-'+killer[1]+'-'+killer[2]);
//		alert(killer);
		
		for (var j = 0;j < p;j++){
             peo[j] = "平民";
        }
//		alert(peo[0]+'-'+peo[1]+'-'+peo[2]+'-'+peo[3]+'-'+peo[4]+'-'+peo[5]+'-'+peo[6]+'-'+peo[7]+'-'+peo[8]+'-'+peo[9]+'-'+peo[10]+'-'+peo[11]+'-'+peo[12]+'-'+peo[13]);
//		alert(peo);
		
		killer.length = k;
        peo.length = p;
        y = k+p;
//		alert(y);
//       组合数组
        var arr1 = killer.concat(peo);
		
//        定义数组长度
//        var y = arr.length;
		
//		gerArrayItems(arr1,8);
		gerArrayItems(arr1,y);
		arr1=gerArrayItems(arr1,y);
		
		alert(arr1);
		window.location.href='view.html';
	};
	
//左上角，小箭头返回到start页面，开始界面
	s1obj.onclick=function(){
//		alert(134);
		window.location.href='start.html';
	};	


	
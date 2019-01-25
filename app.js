	var v=new Vue({
		el:'#div1',
	    data:{
	    	todo:[''],
	    	newitem:'',
	    },
	    methods:{
			addItem:function(){
				if(this.newitem !=''){
		   			this.todo.push(this.newitem)
		    		this.newitem=''
		    	}
	    	},
	    	deleteItem:function(key){
		    	this.todo.splice(key,1)
	    	}
	    }
	})
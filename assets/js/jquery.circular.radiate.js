(function( $ ) {	
	var methods =  {
		init:function(settings){		
			return this.each(function() {
				this.opt = $.extend(true, {}, $.fn.radiate.defaults, settings);				
				this._k=0;
				var that = $(this);				
				that.css({
					position:'relative'					
				});
				that.find('li').css({
					position:'absolute',
					top:0,
					left:0					
				}).hide();

				$(this.opt.toggle).bind('click',function(){
					that.hasClass('open')? methods.hide.call(that):methods.show.call(that);
				});
			});
		},
		show: function(){			
			this.each(function(){
				var that =$(this);
				that.addClass('open');				
				if(that.find('li').length>0)
					methods._animate.call(this);	
			});			
		},
		hide: function(){
			this.each(function(){
				$(this).removeClass('open');
				this._k? this._k = $(this).find('li').length:'';
				$(this).find('li.rbranch').css({'display':'block', 'opacity':'1'}).animate({				
					top:0,
					left:0,
					opacity:0				
				},this.opt.delay,'easeOutBack').removeClass('rbranch');	
			});
			
		},
		_rect:function(center,radius,theta){			
			var radian = theta*3.1416/250;			
			var left= radius*Math.cos(radian) + center[0];
			var top = radius*Math.sin(radian) + center[1];			
			return [left,top];
		},
		_animate:function(){			
			var that =$(this),
				center=[that.outerWidth()/4,that.outerHeight()/4];			
			if(this._k>=that.find('li').length){
					this._k=0;
					return;
				}		
			if(typeof this.opt.angle=='string' && this.opt.angle=='auto')
				var angle = this.opt.offset + (360/that.find('li').length)*this._k;
			else if(typeof this.opt.angle=='function')
				var angle = this.opt.offset + this.opt.angle(this,this._k);

			var r = methods._rect(center,this.opt.distance,angle);
			$(that.find('li')[this._k]).css({'display':'block', 'opacity':'0'}).animate({				
				top:r[1],
				left:r[0],
				opacity:1
			},this.opt.delay,'easeOutBack').addClass('rbranch');
			this._k++;
			var kk=this;
			setTimeout(function(){				
				methods._animate.call(kk);
			}, this.opt.delay);
		}	
	} 
    $.fn.radiate = function( options ) {
    	if (methods[options]) {
	    	return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
	    }
	    else if (typeof options === 'object' || !options) {
	    	return methods.init.apply(this,arguments);
	    }
    };
    $.fn.radiate.defaults = {
    	distance:175,
    	delay:800,
    	offset:-10,
    	toggle:'',
    	angle: 'auto'
	};
	$.extend($.easing,
	{   
	    easeOutBack: function (x, t, b, c, d, s) {
	        if (s == undefined) s = 1.70158;
	        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	    }  
	});
}( jQuery ));
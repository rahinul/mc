var $=jQuery.noConflict();
$(document).ready(function(){
const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16));
$(".sas-widget").each(function(){
var apiscript = $(this); // or better regexp to get the file name..
var widget_phone= parseInt(apiscript.attr('data-phone')); 
var widget_name= parseInt(apiscript.attr('data-name')); 
var widget_buttonlabel= apiscript.attr('data-buttonlabel');
if (widget_buttonlabel == "" || widget_buttonlabel == undefined) {
	widget_buttonlabel = "Send";
}
var wshow_name="";
var wshow_phone="";




var widget_type= parseInt(apiscript.attr('data-type')); 
var pos = apiscript.attr('data-pos'); 
var widget_buttoncolor= apiscript.attr('data-buttoncolor');
if (widget_buttoncolor == "" || widget_buttoncolor == undefined) {
	widget_buttoncolor = "#FF164D";
}


var css = '.sas-widget-container-inner .sas-widget-submit {background: '+widget_buttoncolor+';-webkit-box-shadow: 0px 10px 20px 0px rgba('+hexToRgb(widget_buttoncolor).join(",")+',0.25);-moz-box-shadow: 0px 10px 20px 0px rgba('+hexToRgb(widget_buttoncolor).join(",")+',0.25);box-shadow: 0px 10px 20px 0px rgba('+hexToRgb(widget_buttoncolor).join(",")+',0.25);}',
    body = document.body || document.getElementsByTagName('body')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

body.appendChild(style);	







if(widget_name=== 2)
{
 //wshow_phone='<label><input type="text" placeholder="Phone" id="widget_phone" ><span>Phone</span></label>';
wshow_name='<div class="sas-widget-body-single-input sas-widget_name required"><div class="sas-widget-body-single-input-inner"><input type="text" name="name" id="sas-widget_name" placeholder="* Name"  required=""><span class="error"></span></div></div>';
}else if(widget_name=== 1){
  wshow_name='<div class="sas-widget-body-single-input sas-widget_name"><div class="sas-widget-body-single-input-inner"><input type="text" name="name" id="sas-widget_name" placeholder="Name"><span class="error"></span></div></div>';
}



if(widget_phone=== 2)
{
 //wshow_phone='<label><input type="text" placeholder="Phone" id="widget_phone" ><span>Phone</span></label>';
wshow_phone='<div class="sas-widget-body-single-input sas-widget_phone required"><div class="sas-widget-body-single-input-inner"><input type="text" name="phone" id="sas-widget_phone" placeholder="* Phone"  required=""><span class="error"></span></div></div>';
}else if(widget_phone=== 1){
  wshow_phone='<div class="sas-widget-body-single-input sas-widget_phone need-validate"><div class="sas-widget-body-single-input-inner"><input type="text" name="phone" id="sas-widget_phone" placeholder="Phone"><span class="error"></span></div></div>';
}








var submit_button = '';


var all_input = '<div class="sas-widget-body-single-input sas-widget-widget_url required"><div class="sas-widget-body-single-input-inner"><input type="url" name="url" id="sas-widget_url" placeholder="* Website URL" required=""><span class="error"></span></div></div><div class="sas-widget-body-single-input sas-widget_keyword required"><div class="sas-widget-body-single-input-inner"><input type="text" name="keyword" id="sas-widget_keyword" placeholder="* Keyword" required=""><span class="error"></span></div></div><div class="sas-widget-body-single-input sas-widget_email required"><div class="sas-widget-body-single-input-inner"><input type="email" id="sas-widget_email" name="email" placeholder="* Email" required=""><span class="error"></span></div></div>';
all_input = '<div id="sas-widget-body-main-sec" class="sas-widget-body-main-sec">'+all_input+wshow_name+wshow_phone+'</div>';
$(apiscript).find(".sas-widget-container-inner").append('<div class="sas-widget-form"><div class="sas-widget-form-msg"></div></div>');
$(apiscript).find(".sas-widget-form").append(all_input);
$(apiscript).find(".sas-widget-body-main-sec").append('<div class="sas-widget-submit-button"><button type="button" class="sas-widget-submit">'+widget_buttonlabel+'</button></div>');

$(apiscript).find(".sas-widget-container-inner").append('<div class="sas-widget-form-cros"><span></span><span></span></div>');

$(apiscript).find("#sas-widget-container").append('<div class="sas-widget-model"><div class="sas-widget-model-container"><div class="sas-widget-model-inner"><iframe id="sas_widget_frame" name="sas_widget_frame" src=""></iframe></div><a class="sas-widget-model-close sas-widget-model-close-button"></a></div><div class="sas-widget-model-close sas-widget-model-close-back"></div></div>');



if (widget_type > 0 && widget_type < 4) {
  if (widget_type === 1) {
  	var wpos= apiscript.attr('data-pos');
  	var widget_popup_icon = apiscript.attr('data-widget_popup_icon');
  	if (widget_popup_icon == undefined || widget_popup_icon == "") {
  		widget_popup_icon = "//seoaudit.software/wp-widget/img/default-popup-icon.png";
  	}
$(apiscript).find("#sas-widget-container").addClass("sas-widget-popup hide "+wpos); 
$(apiscript).find("#sas-widget-container").after('<div id="sas-pop-up-hide-show-btn" class="sas-pop-up-hide-show-btn"><img src="'+widget_popup_icon+'" alt="" /></div>'); 
var widget_auto_popup= parseInt(apiscript.attr('data-widget_auto_popup')); 
if (widget_auto_popup >= 0) {
setTimeout(function(){ $(apiscript).find('#sas-widget-container').removeClass("hide"); }, widget_auto_popup*1000);	
}



  }else if (widget_type === 2) {
$(apiscript).find("#sas-widget-container").addClass("sas-widget-slim");
$(window).on("load resize",function(){
	
	var height = $('#sas-widget-container.sas-widget-slim').height()+"px";
	$('html').css('margin-top', height);
});



}else if (widget_type === 3) {
$(apiscript).find("#sas-widget-container").addClass("sas-widget-fixed");
$(apiscript).find(".sas-widget-form-cros").hide();
  }


$(apiscript).find(".sas-pop-up-hide-show-btn").click(function () {
$(apiscript).find('#sas-widget-container').toggleClass("hide");
});


$(apiscript).find(".sas-widget-form-cros").click(function () {
$(apiscript).find('#sas-widget-container').addClass("hide");
if (widget_type === 2) {
$('html').css('margin-top', "");	
}

});


}


});







function setUrlParameter(url, key, value) {

var key=encodeURIComponent(key),value=encodeURIComponent(value);

var baseUrl = url.split('?')[0],
newParam = key + '=' + value,
params = '?' + newParam;

if (url.split('?')[1] == undefined){ // if there are no query strings, make urlQueryString empty
urlQueryString = "";
} else {
urlQueryString = '?' + url.split('?')[1];
}

// If the "search" string exists, then build params from it
if (urlQueryString) {
var updateRegex = new RegExp('([\?&])' + key + '=[^&]*');
var removeRegex = new RegExp('([\?&])' + key + '=[^&;]+[&;]?');
if (typeof value === 'undefined' || value === null || value === "") { // Remove param if value is empty
params = urlQueryString.replace(removeRegex, "$1");
params = params.replace(/[&;]$/, "");

} else if (urlQueryString.match(updateRegex) !== null) { // If param exists already, update it
params = urlQueryString.replace(updateRegex, "$1" + newParam);

} else if (urlQueryString== "") { // If there are no query strings
params = '?' + newParam;
} else { // Otherwise, add it to end of query string
params = urlQueryString + '&' + newParam;
}
}

// no parameter was set so we don't need the question mark
params = params === '?' ? "" : params;

return baseUrl + params;
}

function is_validate(name,value){
	if (name == "url") {
		var re = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
		if (!re.test(value)) {
			return "URL Invalid";					
		}else{
			return true;
		}
	}else if (name == "email") {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(value)) {
			return "Email invalid";					
		}else{
			return true ;
		}
	}else if (name == "keyword") {
		if (value.length < 3) {
			return "keyword must be 3 carecter";
		}else{
			return true;
		}
	}else if (name == "name") {
		if (value.length < 3) {
			return "Name must be 3 carecter";
		}else{
			return true;
		}
	}else if (name == "phone") {
		var re = /[\\A-Za-z!"£$%^&\,*_={};:'@#~,.Š\/<>?|`¬\]\[]/g;
		if (re.test(value)) {
			return "Phone invalid";					
		}else{
			return true;
		}
	}
}




$("#sas-widget-container input").on("change keyup",function(){
	$(this).parents(".sas-widget-body-single-input").first().find(".error").html("");
	$(this).parents(".sas-widget-body-single-input").first().removeClass("has-error");
});



var main_site_url = "";
var this_is2 = "";

$('.sas-widget-submit').click(function(){
	var this_is = $(this);
	var error = false;
	var params = "https://seoaudit.software/wp-json/wp-widget/v1/lead";
	$(this).parents("#sas-widget-container").first().find(".sas-widget-body-single-input input").each(function(){
		var name = $(this).attr('name');
		var value = $(this).val();
		if (typeof name != undefined && name != "") {
			if ($(this).parents(".sas-widget-body-single-input").first().hasClass("required")) {
				if (typeof value != undefined && value != "") {
					var valid_this = is_validate(name,value);
					if (valid_this === true) {
						params = setUrlParameter(params,name,value);
						if (name == "url") {
							main_site_url = value;
						}
					
					}else{
						$(this).parents(".sas-widget-body-single-input").first().find(".error").html(valid_this);
						$(this).parents(".sas-widget-body-single-input").first().addClass("has-error");
						error = true;
					}
				}else{
					$(this).parents(".sas-widget-body-single-input").first().find(".error").html("This is required");
					$(this).parents(".sas-widget-body-single-input").first().addClass("has-error");
					error = true;
				}


			}else{
				if (typeof value != undefined && value != "") {
					if ($(this).parents(".sas-widget-body-single-input").first().hasClass("need-validate")) {
						var valid_this = is_validate(name,value);
						if (valid_this === true) {
						params = setUrlParameter(params,name,value);
						}else{
							$(this).parents(".sas-widget-body-single-input").first().find(".error").html(valid_this);
							$(this).parents(".sas-widget-body-single-input").first().addClass("has-error");
							error = true;
						}
					}else{
						params = setUrlParameter(params,name,value);
					}
					
				}
				
				
			}
			
			
		}
	});
	var widget_key=$(this).parents(".sas-widget").first().attr('data-key');
	if (error === false && typeof widget_key != undefined && widget_key != "") {
		params = setUrlParameter(params,"key",widget_key);
		params = setUrlParameter(params,"reference_url",window.location.href);

		sas_widget_loader_start();







			fetch(params)
		  .then(response => {
		    return response.json()
		  })
		  .then(data => {
		  	if (data.data.params != undefined) {
		  		let k;
			    for (k in data.data.params) {
			    	var target = '.sas-widget-body-single-input input[name="'+k+'"]';
			    	if (k == "key" || k == "reference_url" || k == "other") {
			    		$(this_is).parents("#sas-widget-container").first().find(".sas-widget-form-msg").append("<span class='error'>"+data.data.params[k]+"</span>")
			    	}else{
			    		$(this_is).parents("#sas-widget-container").first().find(target).parents(".sas-widget-body-single-input").first().find(".error").html(data.data.params[k]);
			    	$(this_is).parents("#sas-widget-container").first().find(target).parents(".sas-widget-body-single-input").first().addClass('has-error');
			    	}
			    	
				}
				sas_widget_loader_end();
		  	}else if (data.data.widget_id != undefined){
		  		var src = "https://seoaudit.software/report/";
		  		src = setUrlParameter(src,"id",data.data.widget_id);
		  		src = setUrlParameter(src,"share",data.data.share_key);
		  		src = setUrlParameter(src,"type","lead");
		  		(this_is).parents("#sas-widget-container").first().find(".sas-widget-model-inner iframe").attr("src",src);
		  		setTimeout(function(){
	    			(this_is).parents("#sas-widget-container").first().find(".sas-widget-model").addClass("active");
		  			sas_widget_loader_end();
	    		}, 3000)
		  		
		  		
		  	}
		    
		  })
		  .catch(err => {

		  })

		
	}
});

$(".sas-widget-model-close").click(function(){
	$(this).parents("#sas-widget-container").find(".sas-widget-model").removeClass("active");
});



$(".sas-widget-slim .sas-widget-title").click(function(){
	if (window.innerWidth < 550) {
		$(this).parents(".sas-widget-slim").first().toggleClass("slim-form-active");
	}
});



function sas_widget_loader_start(){
	var content = '<div class="sas-audit-generate-loader" style="text-align: center;position: fixed;width: 100%;height: 100%;top: 0;left: 0;display: flex;align-items: center;justify-content: center;padding: 40px;z-index: 9999;"><div class="sas-audit-generate-loader-inner" style="width: 100%;max-width: 1200px;margin: 0 auto;background: #fff;min-height: 70vh;padding: 50px 30px;justify-content: center;border-radius: 5px;-webkit-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.75);-moz-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.75);box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.75);background: #fff;"><div class="sas-audit-generate-loader-body"><div class="text_scanning" style=" margin: 0 auto; color: #000; font-size: 33pt;">We\'re Scanning<span style=" display: block; margin-top: 22px; color: #999; font-size: 12pt; letter-spacing: 0;">(Takes about 15 seconds)</span></div><div style="width:100%;float:left;margin-top: 24px;"><div id="progress_bar" class="progress progress-success" style="max-width:400px; margin:auto;"><div class="bar" style="background-color: #ef3d2f;background-image: -moz-linear-gradient(top, #AAAAAA, #ef3d2f);background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#AAAAAA), to(#ef3d2f));background-image: -webkit-linear-gradient(top, #AAAAAA, #ef3d2f);background-image: -o-linear-gradient(top, #AAAAAA,#ef3d2f);background-image: linear-gradient(to bottom, #AAAAAA, #ef3d2f);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#ff62c462\', endColorstr=\'#ff57a957\', GradientType=0); height : 12px;"></div></div><label id="percent" style="margin:auto; font-size: 14px;"></label></div></div></div></div>';
	$('#sas-widget-container').append(content);

	    var elem = $('#sas-widget-container .sas-audit-generate-loader #progress_bar .bar')[0];
	    var elem2 = $('#sas-widget-container .sas-audit-generate-loader  #percent')[0];
	    var rand1 = Math.floor(Math.random() * 33) + 1;
	    var rand2 = Math.floor(Math.random() * 33) + rand1;
	    var rand3 = Math.floor(Math.random() * 33) + rand2;

	    var width = 0;
	    var id = setInterval(frame, 200);
	    function frame() {
	    	if (width === rand1 || width === rand2 || width === rand3) {
	    		clearInterval(id);
	    		setTimeout(function(){
	    			id = setInterval(frame, 200);
	    		}, 2000)
	    	}

	      if (width >= 100) {
	        clearInterval(id);
	      } else {
	        width++;
	        elem.style.width = width + "%";
	        elem2.innerHTML = width  + "%";
	      }
	    }


}


function sas_widget_loader_end(){
	$('.sas-audit-generate-loader').remove();
}



});












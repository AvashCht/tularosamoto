var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
class SearchForm extends HTMLElement{constructor(){super(),this.input=this.querySelector('input[type="search"]'),this.resetButton=this.querySelector('button[type="reset"]'),this.input&&(this.input.form.addEventListener("reset",this.onFormReset.bind(this)),this.input.addEventListener("input",debounce(event=>{this.onChange(event)},300).bind(this)))}toggleResetButton(){const resetIsHidden=this.resetButton.classList.contains("hidden");this.input.value.length>0&&resetIsHidden?this.resetButton.classList.remove("hidden"):this.input.value.length===0&&!resetIsHidden&&this.resetButton.classList.add("hidden")}onChange(){this.toggleResetButton()}shouldResetForm(){return!document.querySelector('[aria-selected="true"] a')}onFormReset(event){event.preventDefault(),this.shouldResetForm()&&(this.input.value="",this.input.focus(),this.toggleResetButton())}}customElements.define("search-form",SearchForm);
//# sourceMappingURL=/cdn/shop/t/14/assets/search-form.js.map?v=133129549252120666541733441097

}

/*
     FILE ARCHIVED ON 19:01:00 Jan 16, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:33:10 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.904
  exclusion.robots: 0.108
  exclusion.robots.policy: 0.091
  esindex: 0.015
  cdx.remote: 6.629
  LoadShardBlock: 84.588 (3)
  PetaboxLoader3.datanode: 83.331 (4)
  PetaboxLoader3.resolve: 89.271 (2)
  load_resource: 99.548
*/
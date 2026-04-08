var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
class MainSearch extends SearchForm{constructor(){super(),this.allSearchInputs=document.querySelectorAll('input[type="search"]'),this.setupEventListeners()}setupEventListeners(){let allSearchForms=[];this.allSearchInputs.forEach(input=>allSearchForms.push(input.form)),this.input.addEventListener("focus",this.onInputFocus.bind(this)),!(allSearchForms.length<2)&&(allSearchForms.forEach(form=>form.addEventListener("reset",this.onFormReset.bind(this))),this.allSearchInputs.forEach(input=>input.addEventListener("input",this.onInput.bind(this))))}onFormReset(event){super.onFormReset(event),super.shouldResetForm()&&this.keepInSync("",this.input)}onInput(event){const target=event.target;this.keepInSync(target.value,target)}onInputFocus(){window.innerWidth<750&&this.scrollIntoView({behavior:"smooth"})}keepInSync(value,target){this.allSearchInputs.forEach(input=>{input!==target&&(input.value=value)})}}customElements.define("main-search",MainSearch);
//# sourceMappingURL=/cdn/shop/t/14/assets/main-search.js.map?v=42397476564096725661733441097

}

/*
     FILE ARCHIVED ON 14:28:27 Dec 21, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:21:53 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.609
  exclusion.robots: 0.059
  exclusion.robots.policy: 0.049
  esindex: 0.011
  cdx.remote: 93.498
  LoadShardBlock: 167.938 (3)
  PetaboxLoader3.datanode: 203.792 (5)
  PetaboxLoader3.resolve: 166.414 (3)
  load_resource: 215.667
  loaddict: 67.164
*/
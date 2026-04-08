var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
class DetailsDisclosure extends HTMLElement{constructor(){super(),this.mainDetailsToggle=this.querySelector("details"),this.content=this.mainDetailsToggle.querySelector("summary").nextElementSibling,this.mainDetailsToggle.addEventListener("focusout",this.onFocusOut.bind(this)),this.mainDetailsToggle.addEventListener("toggle",this.onToggle.bind(this))}onFocusOut(){setTimeout(()=>{this.contains(document.activeElement)||this.close()})}onToggle(){this.animations||(this.animations=this.content.getAnimations()),this.mainDetailsToggle.hasAttribute("open")?this.animations.forEach(animation=>animation.play()):this.animations.forEach(animation=>animation.cancel())}close(){this.mainDetailsToggle.removeAttribute("open"),this.mainDetailsToggle.querySelector("summary").setAttribute("aria-expanded",!1)}}customElements.define("details-disclosure",DetailsDisclosure);class HeaderMenu extends DetailsDisclosure{constructor(){super(),this.header=document.querySelector(".header-wrapper")}onToggle(){this.header&&(this.header.preventHide=this.mainDetailsToggle.open,document.documentElement.style.getPropertyValue("--header-bottom-position-desktop")===""&&document.documentElement.style.setProperty("--header-bottom-position-desktop",`${Math.floor(this.header.getBoundingClientRect().bottom)}px`))}}customElements.define("header-menu",HeaderMenu);
//# sourceMappingURL=/cdn/shop/t/14/assets/details-disclosure.js.map?v=13653116266235556501733441095

}

/*
     FILE ARCHIVED ON 13:32:27 Dec 21, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:41:37 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.798
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.069
  esindex: 0.012
  cdx.remote: 33.625
  LoadShardBlock: 113.324 (3)
  PetaboxLoader3.datanode: 88.437 (5)
  load_resource: 222.865
  PetaboxLoader3.resolve: 167.209
  loaddict: 43.906
*/
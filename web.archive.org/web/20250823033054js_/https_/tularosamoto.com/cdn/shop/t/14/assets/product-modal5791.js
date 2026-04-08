var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
customElements.get("product-modal")||customElements.define("product-modal",class extends ModalDialog{constructor(){super()}hide(){super.hide()}show(opener){super.show(opener),this.showActiveMedia()}showActiveMedia(){this.querySelectorAll(`[data-media-id]:not([data-media-id="${this.openedBy.getAttribute("data-media-id")}"])`).forEach(element=>{element.classList.remove("active")});const activeMedia=this.querySelector(`[data-media-id="${this.openedBy.getAttribute("data-media-id")}"]`),activeMediaTemplate=activeMedia.querySelector("template"),activeMediaContent=activeMediaTemplate?activeMediaTemplate.content:null;activeMedia.classList.add("active"),activeMedia.scrollIntoView();const container=this.querySelector('[role="document"]');container.scrollLeft=(activeMedia.width-container.clientWidth)/2,activeMedia.nodeName=="DEFERRED-MEDIA"&&activeMediaContent&&activeMediaContent.querySelector(".js-youtube")&&activeMedia.loadContent()}});
//# sourceMappingURL=/cdn/shop/t/14/assets/product-modal.js.map?v=116616134454508949461733441097

}

/*
     FILE ARCHIVED ON 03:30:54 Aug 23, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:04:14 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.575
  exclusion.robots: 0.06
  exclusion.robots.policy: 0.048
  esindex: 0.011
  cdx.remote: 17.184
  LoadShardBlock: 36.748 (3)
  PetaboxLoader3.datanode: 90.629 (5)
  load_resource: 160.642
  PetaboxLoader3.resolve: 39.472
  loaddict: 74.369
*/
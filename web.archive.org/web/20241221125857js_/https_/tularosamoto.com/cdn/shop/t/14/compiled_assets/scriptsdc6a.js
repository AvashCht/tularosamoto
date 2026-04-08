var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
(function(){var __sections__={};(function(){for(var i=0,s=document.getElementById("sections-script").getAttribute("data-sections").split(",");i<s.length;i++)__sections__[s[i]]=!0})(),function(){if(__sections__.header)try{class StickyHeader extends HTMLElement{constructor(){super()}connectedCallback(){this.header=document.querySelector(".section-header"),this.headerIsAlwaysSticky=this.getAttribute("data-sticky-type")==="always"||this.getAttribute("data-sticky-type")==="reduce-logo-size",this.headerBounds={},this.setHeaderHeight(),window.matchMedia("(max-width: 990px)").addEventListener("change",this.setHeaderHeight.bind(this)),this.headerIsAlwaysSticky&&this.header.classList.add("shopify-section-header-sticky"),this.currentScrollTop=0,this.preventReveal=!1,this.predictiveSearch=this.querySelector("predictive-search"),this.onScrollHandler=this.onScroll.bind(this),this.hideHeaderOnScrollUp=()=>this.preventReveal=!0,this.addEventListener("preventHeaderReveal",this.hideHeaderOnScrollUp),window.addEventListener("scroll",this.onScrollHandler,!1),this.createObserver()}setHeaderHeight(){document.documentElement.style.setProperty("--header-height",`${this.header.offsetHeight}px`)}disconnectedCallback(){this.removeEventListener("preventHeaderReveal",this.hideHeaderOnScrollUp),window.removeEventListener("scroll",this.onScrollHandler)}createObserver(){new IntersectionObserver((entries,observer2)=>{this.headerBounds=entries[0].intersectionRect,observer2.disconnect()}).observe(this.header)}onScroll(){const scrollTop=window.pageYOffset||document.documentElement.scrollTop;if(!(this.predictiveSearch&&this.predictiveSearch.isOpen)){if(scrollTop>this.currentScrollTop&&scrollTop>this.headerBounds.bottom){if(this.header.classList.add("scrolled-past-header"),this.preventHide)return;requestAnimationFrame(this.hide.bind(this))}else scrollTop<this.currentScrollTop&&scrollTop>this.headerBounds.bottom?(this.header.classList.add("scrolled-past-header"),this.preventReveal?(window.clearTimeout(this.isScrolling),this.isScrolling=setTimeout(()=>{this.preventReveal=!1},66),requestAnimationFrame(this.hide.bind(this))):requestAnimationFrame(this.reveal.bind(this))):scrollTop<=this.headerBounds.top&&(this.header.classList.remove("scrolled-past-header"),requestAnimationFrame(this.reset.bind(this)));this.currentScrollTop=scrollTop}}hide(){this.headerIsAlwaysSticky||(this.header.classList.add("shopify-section-header-hidden","shopify-section-header-sticky"),this.closeMenuDisclosure(),this.closeSearchModal())}reveal(){this.headerIsAlwaysSticky||(this.header.classList.add("shopify-section-header-sticky","animate"),this.header.classList.remove("shopify-section-header-hidden"))}reset(){this.headerIsAlwaysSticky||this.header.classList.remove("shopify-section-header-hidden","shopify-section-header-sticky","animate")}closeMenuDisclosure(){this.disclosures=this.disclosures||this.header.querySelectorAll("header-menu"),this.disclosures.forEach(disclosure=>disclosure.close())}closeSearchModal(){this.searchModal=this.searchModal||this.header.querySelector("details-modal"),this.searchModal.close(!1)}}customElements.define("sticky-header",StickyHeader)}catch(e){console.error(e)}}()})();
//# sourceMappingURL=/cdn/shop/t/14/compiled_assets/scripts.js.map?469=

}

/*
     FILE ARCHIVED ON 12:58:57 Dec 21, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:33:20 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.609
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.059
  esindex: 0.01
  cdx.remote: 55.859
  LoadShardBlock: 294.668 (3)
  PetaboxLoader3.datanode: 284.285 (5)
  PetaboxLoader3.resolve: 135.359 (2)
  load_resource: 173.773
  loaddict: 63.223
*/
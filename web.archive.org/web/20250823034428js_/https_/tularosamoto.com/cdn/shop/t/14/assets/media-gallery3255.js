var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
customElements.get("media-gallery")||customElements.define("media-gallery",class extends HTMLElement{constructor(){super(),this.elements={liveRegion:this.querySelector('[id^="GalleryStatus"]'),viewer:this.querySelector('[id^="GalleryViewer"]'),thumbnails:this.querySelector('[id^="GalleryThumbnails"]')},this.mql=window.matchMedia("(min-width: 750px)"),this.elements.thumbnails&&(this.elements.viewer.addEventListener("slideChanged",debounce(this.onSlideChanged.bind(this),500)),this.elements.thumbnails.querySelectorAll("[data-target]").forEach(mediaToSwitch=>{mediaToSwitch.querySelector("button").addEventListener("click",this.setActiveMedia.bind(this,mediaToSwitch.dataset.target,!1))}),this.dataset.desktopLayout.includes("thumbnail")&&this.mql.matches&&this.removeListSemantic())}onSlideChanged(event){const thumbnail=this.elements.thumbnails.querySelector(`[data-target="${event.detail.currentElement.dataset.mediaId}"]`);this.setActiveThumbnail(thumbnail)}setActiveMedia(mediaId,prepend){const activeMedia=this.elements.viewer.querySelector(`[data-media-id="${mediaId}"]`)||this.elements.viewer.querySelector("[data-media-id]");if(!activeMedia)return;if(this.elements.viewer.querySelectorAll("[data-media-id]").forEach(element=>{element.classList.remove("is-active")}),activeMedia?.classList?.add("is-active"),prepend){if(activeMedia.parentElement.firstChild!==activeMedia&&activeMedia.parentElement.prepend(activeMedia),this.elements.thumbnails){const activeThumbnail2=this.elements.thumbnails.querySelector(`[data-target="${mediaId}"]`);activeThumbnail2.parentElement.firstChild!==activeThumbnail2&&activeThumbnail2.parentElement.prepend(activeThumbnail2)}this.elements.viewer.slider&&this.elements.viewer.resetPages()}if(this.preventStickyHeader(),window.setTimeout(()=>{(!this.mql.matches||this.elements.thumbnails)&&activeMedia.parentElement.scrollTo({left:activeMedia.offsetLeft});const activeMediaRect=activeMedia.getBoundingClientRect();if(activeMediaRect.top>-.5)return;const top=activeMediaRect.top+window.scrollY;window.scrollTo({top,behavior:"smooth"})}),this.playActiveMedia(activeMedia),!this.elements.thumbnails)return;const activeThumbnail=this.elements.thumbnails.querySelector(`[data-target="${mediaId}"]`);this.setActiveThumbnail(activeThumbnail),this.announceLiveRegion(activeMedia,activeThumbnail.dataset.mediaPosition)}setActiveThumbnail(thumbnail){!this.elements.thumbnails||!thumbnail||(this.elements.thumbnails.querySelectorAll("button").forEach(element=>element.removeAttribute("aria-current")),thumbnail.querySelector("button").setAttribute("aria-current",!0),!this.elements.thumbnails.isSlideVisible(thumbnail,10)&&this.elements.thumbnails.slider.scrollTo({left:thumbnail.offsetLeft}))}announceLiveRegion(activeItem,position){const image=activeItem.querySelector(".product__modal-opener--image img");image&&(image.onload=()=>{this.elements.liveRegion.setAttribute("aria-hidden",!1),this.elements.liveRegion.innerHTML=window.accessibilityStrings.imageAvailable.replace("[index]",position),setTimeout(()=>{this.elements.liveRegion.setAttribute("aria-hidden",!0)},2e3)},image.src=image.src)}playActiveMedia(activeItem){window.pauseAllMedia();const deferredMedia=activeItem.querySelector(".deferred-media");deferredMedia&&deferredMedia.loadContent(!1)}preventStickyHeader(){this.stickyHeader=this.stickyHeader||document.querySelector("sticky-header"),this.stickyHeader&&this.stickyHeader.dispatchEvent(new Event("preventHeaderReveal"))}removeListSemantic(){this.elements.viewer.slider&&(this.elements.viewer.slider.setAttribute("role","presentation"),this.elements.viewer.sliderItems.forEach(slide=>slide.setAttribute("role","presentation")))}});
//# sourceMappingURL=/cdn/shop/t/14/assets/media-gallery.js.map?v=53998976194532824491733441097

}

/*
     FILE ARCHIVED ON 03:44:28 Aug 23, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:04:17 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.613
  exclusion.robots: 0.062
  exclusion.robots.policy: 0.048
  esindex: 0.011
  cdx.remote: 10.157
  LoadShardBlock: 42.706 (3)
  PetaboxLoader3.datanode: 79.406 (5)
  load_resource: 231.055
  PetaboxLoader3.resolve: 131.176
  loaddict: 77.667
*/
var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
const SCROLL_ANIMATION_TRIGGER_CLASSNAME="scroll-trigger",SCROLL_ANIMATION_OFFSCREEN_CLASSNAME="scroll-trigger--offscreen",SCROLL_ZOOM_IN_TRIGGER_CLASSNAME="animate--zoom-in",SCROLL_ANIMATION_CANCEL_CLASSNAME="scroll-trigger--cancel";function onIntersection(elements,observer){elements.forEach((element,index)=>{if(element.isIntersecting){const elementTarget=element.target;elementTarget.classList.contains(SCROLL_ANIMATION_OFFSCREEN_CLASSNAME)&&(elementTarget.classList.remove(SCROLL_ANIMATION_OFFSCREEN_CLASSNAME),elementTarget.hasAttribute("data-cascade")&&elementTarget.setAttribute("style",`--animation-order: ${index};`)),observer.unobserve(elementTarget)}else element.target.classList.add(SCROLL_ANIMATION_OFFSCREEN_CLASSNAME),element.target.classList.remove(SCROLL_ANIMATION_CANCEL_CLASSNAME)})}function initializeScrollAnimationTrigger(rootEl=document,isDesignModeEvent=!1){const animationTriggerElements=Array.from(rootEl.getElementsByClassName(SCROLL_ANIMATION_TRIGGER_CLASSNAME));if(animationTriggerElements.length===0)return;if(isDesignModeEvent){animationTriggerElements.forEach(element=>{element.classList.add("scroll-trigger--design-mode")});return}const observer=new IntersectionObserver(onIntersection,{rootMargin:"0px 0px -50px 0px"});animationTriggerElements.forEach(element=>observer.observe(element))}function initializeScrollZoomAnimationTrigger(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const animationTriggerElements=Array.from(document.getElementsByClassName(SCROLL_ZOOM_IN_TRIGGER_CLASSNAME));if(animationTriggerElements.length===0)return;const scaleAmount=.2/100;animationTriggerElements.forEach(element=>{let elementIsVisible=!1;new IntersectionObserver(elements=>{elements.forEach(entry=>{elementIsVisible=entry.isIntersecting})}).observe(element),element.style.setProperty("--zoom-in-ratio",1+scaleAmount*percentageSeen(element)),window.addEventListener("scroll",throttle(()=>{elementIsVisible&&element.style.setProperty("--zoom-in-ratio",1+scaleAmount*percentageSeen(element))}),{passive:!0})})}function percentageSeen(element){const viewportHeight=window.innerHeight,scrollY=window.scrollY,elementPositionY=element.getBoundingClientRect().top+scrollY,elementHeight=element.offsetHeight;if(elementPositionY>scrollY+viewportHeight)return 0;if(elementPositionY+elementHeight<scrollY)return 100;let percentage=(scrollY+viewportHeight-elementPositionY)/((viewportHeight+elementHeight)/100);return Math.round(percentage)}window.addEventListener("DOMContentLoaded",()=>{initializeScrollAnimationTrigger(),initializeScrollZoomAnimationTrigger()}),Shopify.designMode&&(document.addEventListener("shopify:section:load",event=>initializeScrollAnimationTrigger(event.target,!0)),document.addEventListener("shopify:section:reorder",()=>initializeScrollAnimationTrigger(document,!0)));
//# sourceMappingURL=/cdn/shop/t/14/assets/animations.js.map?v=88693664871331136111733441095

}

/*
     FILE ARCHIVED ON 07:28:23 Dec 22, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:41:41 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.577
  exclusion.robots: 0.055
  exclusion.robots.policy: 0.045
  esindex: 0.009
  cdx.remote: 39.552
  LoadShardBlock: 151.804 (3)
  PetaboxLoader3.resolve: 602.025 (3)
  PetaboxLoader3.datanode: 148.947 (5)
  load_resource: 618.775
  loaddict: 63.925
*/
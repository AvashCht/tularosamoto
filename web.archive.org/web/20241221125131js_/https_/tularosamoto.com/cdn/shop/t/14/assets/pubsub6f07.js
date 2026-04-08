var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
let subscribers={};function subscribe(eventName,callback){return subscribers[eventName]===void 0&&(subscribers[eventName]=[]),subscribers[eventName]=[...subscribers[eventName],callback],function(){subscribers[eventName]=subscribers[eventName].filter(cb=>cb!==callback)}}function publish(eventName,data){subscribers[eventName]&&subscribers[eventName].forEach(callback=>{callback(data)})}
//# sourceMappingURL=/cdn/shop/t/14/assets/pubsub.js.map?v=158357773527763999511733441097

}

/*
     FILE ARCHIVED ON 12:51:31 Dec 21, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:41:34 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.836
  exclusion.robots: 0.089
  exclusion.robots.policy: 0.072
  esindex: 0.014
  cdx.remote: 44.183
  LoadShardBlock: 3489.012 (3)
  PetaboxLoader3.datanode: 3561.412 (5)
  PetaboxLoader3.resolve: 66.373 (2)
  load_resource: 231.866
  loaddict: 92.837
*/
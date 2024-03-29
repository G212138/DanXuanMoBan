
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/EventType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d48b48sqpEdozOnbOcVCAB', 'EventType');
// game/scripts/Data/EventType.ts

"use strict";
/**
 * 自定义事件类型
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var EventType;
(function (EventType) {
    // examp
    EventType["ON_BUTTON_CLICKED"] = "ON_BUTTON_CLICKED";
    EventType["ENTER_GAME"] = "ENTER_GAME";
    EventType["GAME_RECONNECT"] = "GAME_RECONNECT";
    EventType["GAME_OVER"] = "GAME_OVER";
    EventType["SUBMIT"] = "SUBMIT";
    EventType["GAME_REPLAY"] = "GAME_REPLAY";
    EventType["CLICK_OPTION"] = "CLICK_OPTION";
    EventType["CHANGE_ANI"] = "CHANGE_ANI";
    EventType["NEXT_LEVEL"] = "NEXT_LEVEL";
    EventType["SHOW_QUESTION"] = "SHOW_QUESTION";
    EventType["SYNC_GAME_OVER"] = "SYNC_GAME_OVER";
})(EventType = exports.EventType || (exports.EventType = {}));

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcRXZlbnRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRzs7O0FBRUgsSUFBWSxTQWVYO0FBZkQsV0FBWSxTQUFTO0lBQ2pCLFFBQVE7SUFDUixvREFBdUMsQ0FBQTtJQUV2QyxzQ0FBeUIsQ0FBQTtJQUN6Qiw4Q0FBaUMsQ0FBQTtJQUNqQyxvQ0FBdUIsQ0FBQTtJQUN2Qiw4QkFBaUIsQ0FBQTtJQUNqQix3Q0FBMkIsQ0FBQTtJQUUzQiwwQ0FBNkIsQ0FBQTtJQUM3QixzQ0FBeUIsQ0FBQTtJQUN6QixzQ0FBeUIsQ0FBQTtJQUN6Qiw0Q0FBK0IsQ0FBQTtJQUMvQiw4Q0FBaUMsQ0FBQTtBQUNyQyxDQUFDLEVBZlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFlcEIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOiHquWumuS5ieS6i+S7tuexu+Wei1xuICovXG5cbmV4cG9ydCBlbnVtIEV2ZW50VHlwZSB7XG4gICAgLy8gZXhhbXBcbiAgICBPTl9CVVRUT05fQ0xJQ0tFRCA9ICdPTl9CVVRUT05fQ0xJQ0tFRCcsXG5cbiAgICBFTlRFUl9HQU1FID0gJ0VOVEVSX0dBTUUnLFxuICAgIEdBTUVfUkVDT05ORUNUID0gXCJHQU1FX1JFQ09OTkVDVFwiLFxuICAgIEdBTUVfT1ZFUiA9IFwiR0FNRV9PVkVSXCIsXG4gICAgU1VCTUlUID0gXCJTVUJNSVRcIixcbiAgICBHQU1FX1JFUExBWSA9IFwiR0FNRV9SRVBMQVlcIixcblxuICAgIENMSUNLX09QVElPTiA9IFwiQ0xJQ0tfT1BUSU9OXCIsXG4gICAgQ0hBTkdFX0FOSSA9IFwiQ0hBTkdFX0FOSVwiLFxuICAgIE5FWFRfTEVWRUwgPSBcIk5FWFRfTEVWRUxcIixcbiAgICBTSE9XX1FVRVNUSU9OID0gXCJTSE9XX1FVRVNUSU9OXCIsXG4gICAgU1lOQ19HQU1FX09WRVIgPSBcIlNZTkNfR0FNRV9PVkVSXCIsXG59XG4iXX0=
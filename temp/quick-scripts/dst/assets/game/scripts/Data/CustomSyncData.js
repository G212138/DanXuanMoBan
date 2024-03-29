
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/CustomSyncData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6665ym0IlJNYKq4da/THmw', 'CustomSyncData');
// game/scripts/Data/CustomSyncData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSyncData = void 0;
/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
var CustomSyncData = /** @class */ (function () {
    function CustomSyncData() {
        this.curLevel = 0; // 当前关卡(第一关为0)
        // TODO 自定义
        this.isStart = false; // 是否开始游戏
        this.tureLevel = []; // 回答正确的关卡
        this.curAni = "BG"; // 当前动画
        this.aniLoop = false; // 动画是否循环
    }
    return CustomSyncData;
}());
exports.CustomSyncData = CustomSyncData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ3VzdG9tU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHO0FBQ0g7SUFBQTtRQUNXLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjO1FBQzNDLFdBQVc7UUFFSixZQUFPLEdBQVksS0FBSyxDQUFDLENBQUMsU0FBUztRQUNuQyxjQUFTLEdBQWEsRUFBRSxDQUFDLENBQUMsVUFBVTtRQUNwQyxXQUFNLEdBQVcsSUFBSSxDQUFDLENBQUMsT0FBTztRQUM5QixZQUFPLEdBQVksS0FBSyxDQUFDLENBQUMsU0FBUztJQUM5QyxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDpnIDopoHlkIzmraXnmoToh6rlrprkuYnmlbDmja5cbiAqIOa4uOaIj+S4muWKoeWxguWQjOatpeaVsOaNruWcqOi/memHjOa3u+WKoFxuICovXG5leHBvcnQgY2xhc3MgQ3VzdG9tU3luY0RhdGEge1xuICAgIHB1YmxpYyBjdXJMZXZlbDogbnVtYmVyID0gMDsgLy8g5b2T5YmN5YWz5Y2hKOesrOS4gOWFs+S4ujApXG4gICAgLy8gVE9ETyDoh6rlrprkuYlcblxuICAgIHB1YmxpYyBpc1N0YXJ0OiBib29sZWFuID0gZmFsc2U7IC8vIOaYr+WQpuW8gOWni+a4uOaIj1xuICAgIHB1YmxpYyB0dXJlTGV2ZWw6IG51bWJlcltdID0gW107IC8vIOWbnuetlOato+ehrueahOWFs+WNoVxuICAgIHB1YmxpYyBjdXJBbmk6IHN0cmluZyA9IFwiQkdcIjsgLy8g5b2T5YmN5Yqo55S7XG4gICAgcHVibGljIGFuaUxvb3A6IGJvb2xlYW4gPSBmYWxzZTsgLy8g5Yqo55S75piv5ZCm5b6q546vXG59XG4iXX0=
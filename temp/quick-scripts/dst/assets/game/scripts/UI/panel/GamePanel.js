
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/panel/GamePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '246c2OOkGlKHoa6ZJOVEHI+', 'GamePanel');
// game/scripts/UI/panel/GamePanel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var BaseGamePanel_1 = require("../../../../frame/scripts/UI/Panel/BaseGamePanel");
var EventType_1 = require("../../Data/EventType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePanel = /** @class */ (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GamePanel.prototype.start = function () {
        _super.prototype.start.call(this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_OVER, this.gameOver, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.SUBMIT, this.submit, this);
    };
    GamePanel.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_OVER, this.gameOver, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.SUBMIT, this.submit, this);
    };
    GamePanel.prototype.submit = function (isRight) {
        if (isRight) {
            this.answerRight(true);
        }
        else {
            this.answerWrong(true);
        }
    };
    /**
     * 游戏入口
     * 这里已经拿到数据
     */
    GamePanel.prototype.setPanel = function () {
        _super.prototype.setPanel.call(this);
        // TODO 业务逻辑
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ENTER_GAME);
    };
    /**
     * 心跳回调（当actionId不相等时才会触发）
     * @param recovery
     */
    GamePanel.prototype.onRecoveryData = function (recovery) {
        _super.prototype.onRecoveryData.call(this, recovery);
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_RECONNECT);
    };
    /**
     * 作答正确
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    GamePanel.prototype.answerRight = function (isCurLevelFinish) {
        _super.prototype.answerRight.call(this, isCurLevelFinish);
    };
    /**
     * 作答错误
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    GamePanel.prototype.answerWrong = function (isCurLevelFinish) {
        if (isCurLevelFinish === void 0) { isCurLevelFinish = false; }
        _super.prototype.answerWrong.call(this, isCurLevelFinish);
    };
    /**
     * 游戏结束
     * 父类实现了结算界面（游戏结束或星级评判）的弹出
     */
    GamePanel.prototype.gameOver = function () {
        _super.prototype.gameOver.call(this);
    };
    /**
     * 重玩
     */
    GamePanel.prototype.onReplay = function () {
        _super.prototype.onReplay.call(this);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel = 0;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isStart = false;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.tureLevel = [];
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_REPLAY);
    };
    GamePanel.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    GamePanel.className = 'GamePanel';
    GamePanel = __decorate([
        ccclass
    ], GamePanel);
    return GamePanel;
}(BaseGamePanel_1.default));
exports.default = GamePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxHYW1lUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLHFGQUE4RjtBQUM5RixrRkFBNkU7QUFDN0Usa0RBQWlEO0FBRTNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFhO0lBQXBEOztJQWtGQSxDQUFDO0lBL0VHLHlCQUFLLEdBQUw7UUFDSSxpQkFBTSxLQUFLLFdBQUUsQ0FBQztRQUNkLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0QsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLGlCQUFNLFNBQVMsV0FBRSxDQUFDO1FBQ2xCLGlDQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsaUNBQWUsQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU8sMEJBQU0sR0FBZCxVQUFlLE9BQU87UUFDbEIsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO2FBQU07WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNPLDRCQUFRLEdBQWxCO1FBQ0ksaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFDakIsWUFBWTtRQUNaLGlDQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7T0FHRztJQUNPLGtDQUFjLEdBQXhCLFVBQXlCLFFBQWtCO1FBQ3ZDLGlCQUFNLGNBQWMsWUFBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7OztPQUlHO0lBQ08sK0JBQVcsR0FBckIsVUFBc0IsZ0JBQXlCO1FBQzNDLGlCQUFNLFdBQVcsWUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sK0JBQVcsR0FBckIsVUFBc0IsZ0JBQWlDO1FBQWpDLGlDQUFBLEVBQUEsd0JBQWlDO1FBQ25ELGlCQUFNLFdBQVcsWUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDTyw0QkFBUSxHQUFsQjtRQUNJLGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNPLDRCQUFRLEdBQWxCO1FBQ0ksaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFDakIsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUMxRCxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQzdELGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDNUQsaUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxpQkFBTSxNQUFNLFlBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQWhGYSxtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQURyQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBa0Y3QjtJQUFELGdCQUFDO0NBbEZELEFBa0ZDLENBbEZzQyx1QkFBYSxHQWtGbkQ7a0JBbEZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBTeW5jRGF0YSwgU3luY0RhdGFNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlcic7XG5pbXBvcnQgQmFzZUdhbWVQYW5lbCBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1VJL1BhbmVsL0Jhc2VHYW1lUGFuZWwnO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vRGF0YS9FdmVudFR5cGUnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBhbmVsIGV4dGVuZHMgQmFzZUdhbWVQYW5lbCB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnR2FtZVBhbmVsJztcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfT1ZFUiwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuU1VCTUlULCB0aGlzLnN1Ym1pdCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuR0FNRV9PVkVSLCB0aGlzLmdhbWVPdmVyLCB0aGlzKTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuU1VCTUlULCB0aGlzLnN1Ym1pdCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdWJtaXQoaXNSaWdodCkge1xuICAgICAgICBpZiAoaXNSaWdodCkge1xuICAgICAgICAgICAgdGhpcy5hbnN3ZXJSaWdodCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyV3JvbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuLjmiI/lhaXlj6NcbiAgICAgKiDov5nph4zlt7Lnu4/mi7/liLDmlbDmja5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2V0UGFuZWwoKSB7XG4gICAgICAgIHN1cGVyLnNldFBhbmVsKCk7XG4gICAgICAgIC8vIFRPRE8g5Lia5Yqh6YC76L6RXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuRU5URVJfR0FNRSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b+D6Lez5Zue6LCD77yI5b2TYWN0aW9uSWTkuI3nm7jnrYnml7bmiY3kvJrop6blj5HvvIlcbiAgICAgKiBAcGFyYW0gcmVjb3ZlcnlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25SZWNvdmVyeURhdGEocmVjb3Zlcnk6IFN5bmNEYXRhKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uUmVjb3ZlcnlEYXRhKHJlY292ZXJ5KTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX1JFQ09OTkVDVCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5L2c562U5q2j56GuXG4gICAgICog54i257G75a6e546w5LqG5pWw5o2u5LiK5oqlXG4gICAgICogQHBhcmFtIGlzQ3VyTGV2ZWxGaW5pc2gg5pys5YWz5piv5ZCm5a6M5oiQXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFuc3dlclJpZ2h0KGlzQ3VyTGV2ZWxGaW5pc2g6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIuYW5zd2VyUmlnaHQoaXNDdXJMZXZlbEZpbmlzaCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5L2c562U6ZSZ6K+vXG4gICAgICog54i257G75a6e546w5LqG5pWw5o2u5LiK5oqlXG4gICAgICogQHBhcmFtIGlzQ3VyTGV2ZWxGaW5pc2gg5pys5YWz5piv5ZCm5a6M5oiQXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFuc3dlcldyb25nKGlzQ3VyTGV2ZWxGaW5pc2g6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBzdXBlci5hbnN3ZXJXcm9uZyhpc0N1ckxldmVsRmluaXNoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuLjmiI/nu5PmnZ9cbiAgICAgKiDniLbnsbvlrp7njrDkuobnu5PnrpfnlYzpnaLvvIjmuLjmiI/nu5PmnZ/miJbmmJ/nuqfor4TliKTvvInnmoTlvLnlh7pcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2FtZU92ZXIoKSB7XG4gICAgICAgIHN1cGVyLmdhbWVPdmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YeN546pXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uUmVwbGF5KCkge1xuICAgICAgICBzdXBlci5vblJlcGxheSgpO1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJMZXZlbCA9IDA7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEudHVyZUxldmVsID0gW107XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuR0FNRV9SRVBMQVkpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBzdXBlci51cGRhdGUoZHQpO1xuICAgIH1cbn1cbiJdfQ==
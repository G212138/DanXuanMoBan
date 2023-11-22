
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f73c56FnmVJYpv47A7O8GFZ', 'GameUI');
// game/scripts/UI/Item/GameUI.ts

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
var NetWork_1 = require("../../../../frame/scripts/Http/NetWork");
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var T2M_1 = require("../../../../frame/scripts/SDK/T2M");
var Tools_1 = require("../../../../frame/scripts/Utils/Tools");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var OptionKuang_1 = require("./OptionKuang");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg_ani = null;
        _this.btn_start = null;
        _this.question_node = null;
        _this.option_node = null;
        _this.option_prefab = null;
        _this.title_text = null;
        _this.question_img = null;
        _this.question_text = null;
        _this.lb_curLevel = null;
        _this.lb_levelCount = null;
        _this.gameData = null;
        _this.question_node_start_posY = 900;
        _this.question_node_posY = 90;
        _this.option_node_start_posY = -1000;
        _this.option_node_posY = -400;
        _this.eableClick = true;
        return _this;
    }
    GameUI.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.CLICK_OPTION, this.handleClickOption, this);
        T2M_1.T2M.addSyncEventListener(EventType_1.EventType.CHANGE_ANI, this.T2M_changeAni.bind(this));
        T2M_1.T2M.addSyncEventListener(EventType_1.EventType.NEXT_LEVEL, this.nextLevel.bind(this));
        T2M_1.T2M.addSyncEventListener(EventType_1.EventType.SHOW_QUESTION, this.handleShowQuestion.bind(this));
        T2M_1.T2M.addSyncEventListener(EventType_1.EventType.SYNC_GAME_OVER, this.syncGameOver.bind(this));
    };
    GameUI.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_RECONNECT, this.resetUI, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.CLICK_OPTION, this.handleClickOption, this);
        T2M_1.T2M.removeSyncEventListener(EventType_1.EventType.CHANGE_ANI);
        T2M_1.T2M.removeSyncEventListener(EventType_1.EventType.NEXT_LEVEL);
        T2M_1.T2M.removeSyncEventListener(EventType_1.EventType.SHOW_QUESTION);
        T2M_1.T2M.removeSyncEventListener(EventType_1.EventType.SYNC_GAME_OVER);
    };
    GameUI.prototype.handleEnterGame = function () {
        Tools_1.Tools.playSpine(this.bg_ani, "BG", true);
        this.gameData = EditorManager_1.EditorManager.editorData.GameData[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel];
        this.initUI();
    };
    GameUI.prototype.initUI = function () {
        var _this = this;
        console.log("initUI", this.gameData);
        this.initTitle();
        this.initLevelProgress();
        this.initQuestion();
        this.initOption();
        this.btn_start.active = true;
        this.btn_start.opacity = 0;
        this.question_node.y = this.question_node_start_posY;
        this.option_node.y = this.option_node_start_posY;
        Tools_1.Tools.playSpine(this.bg_ani, "BG1-1", true);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAni = "BG1-1";
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.aniLoop = true;
        //播放皮皮语音：“别跑！”
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["别跑"], false, false, false, function () {
            cc.tween(_this.btn_start).to(0.5, { opacity: 255 }).start();
        });
    };
    GameUI.prototype.resetUI = function () {
        this.eableClick = true;
        this.gameData = EditorManager_1.EditorManager.editorData.GameData[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel];
        this.initTitle();
        this.initLevelProgress();
        this.initQuestion();
        this.initOption();
        this.btn_start.active = !SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isStart;
        Tools_1.Tools.playSpine(this.bg_ani, SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAni, SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.aniLoop);
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isStart) {
            this.question_node.y = this.question_node_posY;
            this.option_node.y = this.option_node_posY;
            this.question_node.getChildByName("qie").x = 430;
        }
        if (SyncDataManager_1.SyncDataManager.syncData.frameSyncData.isGameOver) {
            this.question_node.y = this.question_node_start_posY;
            this.option_node.y = this.option_node_start_posY;
            this.question_node.getChildByName("qie").x = 300;
        }
    };
    GameUI.prototype.nextLevel = function () {
        this.gameData = EditorManager_1.EditorManager.editorData.GameData[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel];
        this.initTitle();
        this.initLevelProgress();
        this.initQuestion();
        this.initOption();
        this.handleShowQuestion();
    };
    GameUI.prototype.initTitle = function () {
        this.title_text.node.parent.active = false;
        // this.title_text.string = this.gameData.questionText;
        // if (this.gameData.questionText.length > 36) {
        //     this.title_text.node.width = this.title_text.fontSize * 36;
        //     this.title_text.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
        // } else {
        //     this.title_text.overflow = cc.Label.Overflow.NONE;
        // }
        // this.title_text.node.active = false;
        // this.title_text.string = this.gameData.questionText;
        // this.title_text.node.active = true;
        // this.title_text.node.parent.getComponent(cc.Layout).updateLayout();
    };
    GameUI.prototype.initLevelProgress = function () {
        this.lb_curLevel.node.parent.parent.active = EditorManager_1.EditorManager.editorData.GameData.length > 1;
        this.lb_curLevel.string = (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel + 1).toString();
        this.lb_levelCount.string = EditorManager_1.EditorManager.editorData.GameData.length.toString();
    };
    GameUI.prototype.initQuestion = function () {
        if (this.gameData.questionPic == "") {
            this.question_text.node.active = true;
            this.question_img.node.active = false;
            this.question_text.string = this.gameData.questionText;
        }
        else {
            this.question_text.node.active = false;
            this.question_img.node.active = true;
            cc.resources.load("images/" + this.gameData.questionPic, cc.SpriteFrame, function (err, img) {
                this.question_img.spriteFrame = img;
            }.bind(this));
            //this.question_img根据955*555的图片大小自适应缩放
            // let scale = 1;
            // if (this.question_img.width > 955) {
            //     scale = 955 / this.question_img.width;
            // }
            // if (this.question_img.height * scale > 555) {
            //     scale = 555 / this.question_img.height;
            // }
            // this.question_img.node.scale = scale;
        }
    };
    GameUI.prototype.initOption = function () {
        this.option_node.destroyAllChildren();
        this.option_node.removeAllChildren();
        for (var i = 0; i < this.gameData.opinion; i++) {
            var option = cc.instantiate(this.option_prefab);
            option.name = "option" + i;
            option.parent = this.option_node;
            var com = option.getComponent(OptionKuang_1.default);
            var isTrueAnswer = this.gameData.answer == i + 1;
            com.init(i, this.gameData["opinionText" + (i + 1)], this.gameData["opinionPic" + (i + 1)], isTrueAnswer);
        }
    };
    GameUI.prototype.handleClickOption = function (data) {
        var _this = this;
        if (!this.eableClick)
            return;
        this.eableClick = false;
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, data);
        cc.tween(this.question_node.getChildByName("qie")).to(0.5, { x: 300 }).call(function () {
            _this.eableClick = true;
            if (data) {
                _this.handleTrueAni();
            }
            else {
                _this.handleWrongAni();
            }
        }).start();
    };
    GameUI.prototype.handleTrueAni = function () {
        var _this = this;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.tureLevel.push(SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel + 1);
        cc.tween(this.question_node).delay(0.5).to(0.5, { y: this.question_node_start_posY }).start();
        cc.tween(this.option_node).delay(0.5).to(0.5, { y: this.option_node_start_posY }).call(function () {
            _this.handleNextLevel();
        }).start();
    };
    GameUI.prototype.handleWrongAni = function () {
        var _this = this;
        cc.tween(this.question_node).delay(0.5).to(0.5, { y: this.question_node_start_posY }).start();
        cc.tween(this.option_node).delay(0.5).to(0.5, { y: this.option_node_start_posY }).call(function () {
            _this.handleNextLevel(false);
        }).start();
    };
    GameUI.prototype.handleNextLevel = function (isTrue) {
        if (isTrue === void 0) { isTrue = true; }
        var bg_ani_name = isTrue ? "BG3" : "BG4";
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel + 1 >= EditorManager_1.EditorManager.editorData.GameData.length) {
            this.handleGameOver();
        }
        else {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel++;
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAni = bg_ani_name;
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.aniLoop = false;
            SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["滑行"]);
            this.scheduleOnce(function () {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["滑行"], true, true, false);
            }, 2.5);
            this.scheduleOnce(function () {
                SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["滑行"]);
            }, 5);
            Tools_1.Tools.playSpine(this.bg_ani, bg_ani_name, false, function () {
                if (NetWork_1.NetWork.isMaster || !NetWork_1.NetWork.isSync) {
                    T2M_1.T2M.dispatch(EventType_1.EventType.CHANGE_ANI, { name: "BG2", loop: true });
                    T2M_1.T2M.dispatch(EventType_1.EventType.NEXT_LEVEL, null);
                }
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAni = "BG2";
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.aniLoop = true;
                // Tools.playSpine(this.bg_ani, "BG2", true);
                // this.nextLevel();
            });
        }
    };
    GameUI.prototype.T2M_changeAni = function (data) {
        Tools_1.Tools.playSpine(this.bg_ani, data.name, data.loop);
    };
    GameUI.prototype.handleGameOver = function () {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.tureLevel.length / EditorManager_1.EditorManager.editorData.GameData.length >= 0.8) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAni = "BG3_win";
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.aniLoop = false;
            SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["滑行"]);
            this.scheduleOnce(function () {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["滑行"], true, true);
            }, 2.5);
            this.scheduleOnce(function () {
                SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["滑行"]);
            }, 5);
            Tools_1.Tools.playSpine(this.bg_ani, "BG3_win", false, function () {
                SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["滑行"]);
                if (NetWork_1.NetWork.isMaster || !NetWork_1.NetWork.isSync) {
                    T2M_1.T2M.dispatch(EventType_1.EventType.CHANGE_ANI, { name: "BG3_win2", loop: true });
                    // T2M.dispatch(EventType.SYNC_GAME_OVER, null);
                }
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["快节奏成功音效"], false, true, false, function () {
                    if (NetWork_1.NetWork.isMaster || !NetWork_1.NetWork.isSync) {
                        // T2M.dispatch(EventType.CHANGE_ANI, { name: "BG3_win2", loop: true });
                        T2M_1.T2M.dispatch(EventType_1.EventType.SYNC_GAME_OVER, null);
                    }
                });
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAni = "BG3_win2";
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.aniLoop = true;
                // Tools.playSpine(this.bg_ani, "BG3_win2", true);
                // ListenerManager.dispatch(EventType.GAME_OVER);
            });
        }
        else {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAni = "BG3&4_lost";
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.aniLoop = false;
            Tools_1.Tools.playSpine(this.bg_ani, "BG3&4_lost", false, function () {
                if (NetWork_1.NetWork.isMaster || !NetWork_1.NetWork.isSync) {
                    T2M_1.T2M.dispatch(EventType_1.EventType.CHANGE_ANI, { name: "BG3&4_lost2", loop: true });
                    // T2M.dispatch(EventType.SYNC_GAME_OVER, null);
                }
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["长一些的失败音效"], false, true, false, function () {
                    if (NetWork_1.NetWork.isMaster || !NetWork_1.NetWork.isSync) {
                        // T2M.dispatch(EventType.CHANGE_ANI, { name: "BG3_win2", loop: true });
                        T2M_1.T2M.dispatch(EventType_1.EventType.SYNC_GAME_OVER, null);
                    }
                });
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAni = "BG3&4_lost2";
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.aniLoop = true;
                // Tools.playSpine(this.bg_ani, "BG3&4_lost2", true);
                // ListenerManager.dispatch(EventType.GAME_OVER);
            });
        }
    };
    GameUI.prototype.syncGameOver = function () {
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
    };
    GameUI.prototype.onClickStart = function () {
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.isStart = true;
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        this.btn_start.active = false;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAni = "BG1";
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.aniLoop = false;
        Tools_1.Tools.playSpine(this.bg_ani, "BG1", false, function () {
            if (NetWork_1.NetWork.isMaster || !NetWork_1.NetWork.isSync) {
                T2M_1.T2M.dispatch(EventType_1.EventType.CHANGE_ANI, { name: "BG2", loop: true });
                T2M_1.T2M.dispatch(EventType_1.EventType.SHOW_QUESTION, null);
            }
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAni = "BG2";
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.aniLoop = true;
            // Tools.playSpine(this.bg_ani, "BG2", true);
            // this.handleShowQuestion();
        });
    };
    GameUI.prototype.handleShowQuestion = function () {
        var _this = this;
        this.question_node.getChildByName("qie").x = 300;
        cc.tween(this.question_node).to(0.5, { y: this.question_node_posY }).call(function () {
            UIHelp_1.UIHelp.closeMask();
            cc.tween(_this.question_node.getChildByName("qie")).to(0.5, { x: 430 }).start();
        }).start();
        cc.tween(this.option_node).to(0.5, { y: this.option_node_posY }).start();
    };
    __decorate([
        property(sp.Skeleton)
    ], GameUI.prototype, "bg_ani", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "btn_start", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "question_node", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "option_node", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameUI.prototype, "option_prefab", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "title_text", void 0);
    __decorate([
        property(cc.Sprite)
    ], GameUI.prototype, "question_img", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "question_text", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "lb_curLevel", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "lb_levelCount", void 0);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBaUU7QUFDakUscUZBQW9GO0FBQ3BGLCtFQUE4RTtBQUM5RSxxRkFBb0Y7QUFDcEYseURBQXdEO0FBQ3hELCtEQUE4RDtBQUM5RCxpRUFBZ0U7QUFDaEUsa0RBQWlEO0FBQ2pELDZEQUFzRTtBQUN0RSw2Q0FBd0M7QUFDeEMsNkNBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBb1RDO1FBbFRXLFlBQU0sR0FBZ0IsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFFL0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUMxQiw4QkFBd0IsR0FBVyxHQUFHLENBQUM7UUFDdkMsd0JBQWtCLEdBQVcsRUFBRSxDQUFDO1FBQ2hDLDRCQUFzQixHQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLHNCQUFnQixHQUFXLENBQUMsR0FBRyxDQUFDO1FBMEloQyxnQkFBVSxHQUFHLElBQUksQ0FBQzs7SUFnSjlCLENBQUM7SUF4UkcsdUJBQU0sR0FBTjtRQUNJLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElB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LENBQUMsS0FBSyxDQUFDOytDQUNrQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNvQjtJQXBCdEIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQW9UMUI7SUFBRCxhQUFDO0NBcFRELEFBb1RDLENBcFRtQyxFQUFFLENBQUMsU0FBUyxHQW9UL0M7a0JBcFRvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV0V29yayB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL0h0dHAvTmV0V29ya1wiO1xyXG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBUMk0gfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9TREsvVDJNXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVG9vbHNcIjtcclxuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVUlIZWxwXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyLCBHYW1lRGF0YSB9IGZyb20gXCIuLi8uLi9NYW5hZ2VyL0VkaXRvck1hbmFnZXJcIjtcclxuaW1wb3J0IE9wdGlvbkt1YW5nIGZyb20gXCIuL09wdGlvbkt1YW5nXCI7XHJcbmltcG9ydCB7IFNvdW5kQ29uZmlnIH0gZnJvbSBcIi4vU291bmRDb25maWdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgcHJpdmF0ZSBiZ19hbmk6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBidG5fc3RhcnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uX25vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG9wdGlvbl9ub2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIG9wdGlvbl9wcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHRpdGxlX3RleHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uX2ltZzogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgcXVlc3Rpb25fdGV4dDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBsYl9jdXJMZXZlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBsYl9sZXZlbENvdW50OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lRGF0YTogR2FtZURhdGEgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvbl9ub2RlX3N0YXJ0X3Bvc1k6IG51bWJlciA9IDkwMDtcclxuICAgIHByaXZhdGUgcXVlc3Rpb25fbm9kZV9wb3NZOiBudW1iZXIgPSA5MDtcclxuICAgIHByaXZhdGUgb3B0aW9uX25vZGVfc3RhcnRfcG9zWTogbnVtYmVyID0gLTEwMDA7XHJcbiAgICBwcml2YXRlIG9wdGlvbl9ub2RlX3Bvc1k6IG51bWJlciA9IC00MDA7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuRU5URVJfR0FNRSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuR0FNRV9SRUNPTk5FQ1QsIHRoaXMucmVzZXRVSSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX1JFUExBWSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuQ0xJQ0tfT1BUSU9OLCB0aGlzLmhhbmRsZUNsaWNrT3B0aW9uLCB0aGlzKTtcclxuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkNIQU5HRV9BTkksIHRoaXMuVDJNX2NoYW5nZUFuaS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLk5FWFRfTEVWRUwsIHRoaXMubmV4dExldmVsLmJpbmQodGhpcykpO1xyXG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuU0hPV19RVUVTVElPTiwgdGhpcy5oYW5kbGVTaG93UXVlc3Rpb24uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5TWU5DX0dBTUVfT1ZFUiwgdGhpcy5zeW5jR2FtZU92ZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkVOVEVSX0dBTUUsIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5HQU1FX1JFQ09OTkVDVCwgdGhpcy5yZXNldFVJLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5HQU1FX1JFUExBWSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkNMSUNLX09QVElPTiwgdGhpcy5oYW5kbGVDbGlja09wdGlvbiwgdGhpcyk7XHJcbiAgICAgICAgVDJNLnJlbW92ZVN5bmNFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5DSEFOR0VfQU5JKTtcclxuICAgICAgICBUMk0ucmVtb3ZlU3luY0V2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLk5FWFRfTEVWRUwpO1xyXG4gICAgICAgIFQyTS5yZW1vdmVTeW5jRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuU0hPV19RVUVTVElPTik7XHJcbiAgICAgICAgVDJNLnJlbW92ZVN5bmNFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5TWU5DX0dBTUVfT1ZFUik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFbnRlckdhbWUoKSB7XHJcbiAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMuYmdfYW5pLCBcIkJHXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZURhdGEgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuR2FtZURhdGFbU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyTGV2ZWxdO1xyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0VUkoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbml0VUlcIiwgdGhpcy5nYW1lRGF0YSk7XHJcbiAgICAgICAgdGhpcy5pbml0VGl0bGUoKTtcclxuICAgICAgICB0aGlzLmluaXRMZXZlbFByb2dyZXNzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0UXVlc3Rpb24oKTtcclxuICAgICAgICB0aGlzLmluaXRPcHRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5fc3RhcnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJ0bl9zdGFydC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uX25vZGUueSA9IHRoaXMucXVlc3Rpb25fbm9kZV9zdGFydF9wb3NZO1xyXG4gICAgICAgIHRoaXMub3B0aW9uX25vZGUueSA9IHRoaXMub3B0aW9uX25vZGVfc3RhcnRfcG9zWTtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5iZ19hbmksIFwiQkcxLTFcIiwgdHJ1ZSk7XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQW5pID0gXCJCRzEtMVwiO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuaUxvb3AgPSB0cnVlO1xyXG4gICAgICAgIC8v5pKt5pS+55qu55qu6K+t6Z+z77ya4oCc5Yir6LeR77yB4oCdXHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLliKvot5FcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5idG5fc3RhcnQpLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSkuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0VUkoKSB7XHJcbiAgICAgICAgdGhpcy5lYWJsZUNsaWNrID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWVEYXRhID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLkdhbWVEYXRhW1N5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckxldmVsXTtcclxuICAgICAgICB0aGlzLmluaXRUaXRsZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdExldmVsUHJvZ3Jlc3MoKTtcclxuICAgICAgICB0aGlzLmluaXRRdWVzdGlvbigpO1xyXG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYnRuX3N0YXJ0LmFjdGl2ZSA9ICFTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5pc1N0YXJ0O1xyXG4gICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLmJnX2FuaSwgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQW5pLCBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbmlMb29wKTtcclxuICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuaXNTdGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uX25vZGUueSA9IHRoaXMucXVlc3Rpb25fbm9kZV9wb3NZO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbl9ub2RlLnkgPSB0aGlzLm9wdGlvbl9ub2RlX3Bvc1k7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25fbm9kZS5nZXRDaGlsZEJ5TmFtZShcInFpZVwiKS54ID0gNDMwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuaXNHYW1lT3Zlcikge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uX25vZGUueSA9IHRoaXMucXVlc3Rpb25fbm9kZV9zdGFydF9wb3NZO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbl9ub2RlLnkgPSB0aGlzLm9wdGlvbl9ub2RlX3N0YXJ0X3Bvc1k7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25fbm9kZS5nZXRDaGlsZEJ5TmFtZShcInFpZVwiKS54ID0gMzAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5leHRMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVEYXRhID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLkdhbWVEYXRhW1N5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckxldmVsXTtcclxuICAgICAgICB0aGlzLmluaXRUaXRsZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdExldmVsUHJvZ3Jlc3MoKTtcclxuICAgICAgICB0aGlzLmluaXRRdWVzdGlvbigpO1xyXG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbigpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2hvd1F1ZXN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0VGl0bGUoKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZV90ZXh0Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMudGl0bGVfdGV4dC5zdHJpbmcgPSB0aGlzLmdhbWVEYXRhLnF1ZXN0aW9uVGV4dDtcclxuICAgICAgICAvLyBpZiAodGhpcy5nYW1lRGF0YS5xdWVzdGlvblRleHQubGVuZ3RoID4gMzYpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy50aXRsZV90ZXh0Lm5vZGUud2lkdGggPSB0aGlzLnRpdGxlX3RleHQuZm9udFNpemUgKiAzNjtcclxuICAgICAgICAvLyAgICAgdGhpcy50aXRsZV90ZXh0Lm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVDtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRpdGxlX3RleHQub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5OT05FO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLnRpdGxlX3RleHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLnRpdGxlX3RleHQuc3RyaW5nID0gdGhpcy5nYW1lRGF0YS5xdWVzdGlvblRleHQ7XHJcbiAgICAgICAgLy8gdGhpcy50aXRsZV90ZXh0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLnRpdGxlX3RleHQubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkudXBkYXRlTGF5b3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0TGV2ZWxQcm9ncmVzcygpIHtcclxuICAgICAgICB0aGlzLmxiX2N1ckxldmVsLm5vZGUucGFyZW50LnBhcmVudC5hY3RpdmUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuR2FtZURhdGEubGVuZ3RoID4gMTtcclxuICAgICAgICB0aGlzLmxiX2N1ckxldmVsLnN0cmluZyA9IChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJMZXZlbCArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5sYl9sZXZlbENvdW50LnN0cmluZyA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5HYW1lRGF0YS5sZW5ndGgudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRRdWVzdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lRGF0YS5xdWVzdGlvblBpYyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25fdGV4dC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25faW1nLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25fdGV4dC5zdHJpbmcgPSB0aGlzLmdhbWVEYXRhLnF1ZXN0aW9uVGV4dDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uX3RleHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbl9pbWcubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcImltYWdlcy9cIiArIHRoaXMuZ2FtZURhdGEucXVlc3Rpb25QaWMsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBpbWcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25faW1nLnNwcml0ZUZyYW1lID0gaW1nO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICAvL3RoaXMucXVlc3Rpb25faW1n5qC55o2uOTU1KjU1NeeahOWbvueJh+Wkp+Wwj+iHqumAguW6lOe8qeaUvlxyXG4gICAgICAgICAgICAvLyBsZXQgc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5xdWVzdGlvbl9pbWcud2lkdGggPiA5NTUpIHtcclxuICAgICAgICAgICAgLy8gICAgIHNjYWxlID0gOTU1IC8gdGhpcy5xdWVzdGlvbl9pbWcud2lkdGg7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMucXVlc3Rpb25faW1nLmhlaWdodCAqIHNjYWxlID4gNTU1KSB7XHJcbiAgICAgICAgICAgIC8vICAgICBzY2FsZSA9IDU1NSAvIHRoaXMucXVlc3Rpb25faW1nLmhlaWdodDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyB0aGlzLnF1ZXN0aW9uX2ltZy5ub2RlLnNjYWxlID0gc2NhbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRPcHRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25fbm9kZS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLm9wdGlvbl9ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVEYXRhLm9waW5pb247IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5vcHRpb25fcHJlZmFiKTtcclxuICAgICAgICAgICAgb3B0aW9uLm5hbWUgPSBcIm9wdGlvblwiICsgaTtcclxuICAgICAgICAgICAgb3B0aW9uLnBhcmVudCA9IHRoaXMub3B0aW9uX25vZGU7XHJcbiAgICAgICAgICAgIGxldCBjb20gPSBvcHRpb24uZ2V0Q29tcG9uZW50KE9wdGlvbkt1YW5nKTtcclxuICAgICAgICAgICAgbGV0IGlzVHJ1ZUFuc3dlciA9IHRoaXMuZ2FtZURhdGEuYW5zd2VyID09IGkgKyAxO1xyXG4gICAgICAgICAgICBjb20uaW5pdChpLCB0aGlzLmdhbWVEYXRhW1wib3BpbmlvblRleHRcIiArIChpICsgMSldLCB0aGlzLmdhbWVEYXRhW1wib3BpbmlvblBpY1wiICsgKGkgKyAxKV0sIGlzVHJ1ZUFuc3dlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZWFibGVDbGljayA9IHRydWU7XHJcbiAgICBwcml2YXRlIGhhbmRsZUNsaWNrT3B0aW9uKGRhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWFibGVDbGljaykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZWFibGVDbGljayA9IGZhbHNlO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuU1VCTUlULCBkYXRhKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnF1ZXN0aW9uX25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxaWVcIikpLnRvKDAuNSwgeyB4OiAzMDAgfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWFibGVDbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRydWVBbmkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlV3JvbmdBbmkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVUcnVlQW5pKCkge1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnR1cmVMZXZlbC5wdXNoKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckxldmVsICsgMSk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5xdWVzdGlvbl9ub2RlKS5kZWxheSgwLjUpLnRvKDAuNSwgeyB5OiB0aGlzLnF1ZXN0aW9uX25vZGVfc3RhcnRfcG9zWSB9KS5zdGFydCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9uX25vZGUpLmRlbGF5KDAuNSkudG8oMC41LCB7IHk6IHRoaXMub3B0aW9uX25vZGVfc3RhcnRfcG9zWSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXh0TGV2ZWwoKTtcclxuICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlV3JvbmdBbmkoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5xdWVzdGlvbl9ub2RlKS5kZWxheSgwLjUpLnRvKDAuNSwgeyB5OiB0aGlzLnF1ZXN0aW9uX25vZGVfc3RhcnRfcG9zWSB9KS5zdGFydCgpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMub3B0aW9uX25vZGUpLmRlbGF5KDAuNSkudG8oMC41LCB7IHk6IHRoaXMub3B0aW9uX25vZGVfc3RhcnRfcG9zWSB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXh0TGV2ZWwoZmFsc2UpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVOZXh0TGV2ZWwoaXNUcnVlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBiZ19hbmlfbmFtZSA9IGlzVHJ1ZSA/IFwiQkczXCIgOiBcIkJHNFwiO1xyXG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJMZXZlbCArIDEgPj0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLkdhbWVEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUdhbWVPdmVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyTGV2ZWwrKztcclxuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQW5pID0gYmdfYW5pX25hbWU7XHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuaUxvb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BTb3VuZEJ5TmFtZShTb3VuZENvbmZpZy5zb3VkbGlzdFtcIua7keihjFwiXSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5ruR6KGMXCJdLCB0cnVlLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sIDIuNSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoU291bmRDb25maWcuc291ZGxpc3RbXCLmu5HooYxcIl0pO1xyXG4gICAgICAgICAgICB9LCA1KTtcclxuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMuYmdfYW5pLCBiZ19hbmlfbmFtZSwgZmFsc2UsICgpID0+IHsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKE5ldFdvcmsuaXNNYXN0ZXIgfHwgIU5ldFdvcmsuaXNTeW5jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVDJNLmRpc3BhdGNoKEV2ZW50VHlwZS5DSEFOR0VfQU5JLCB7IG5hbWU6IFwiQkcyXCIsIGxvb3A6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgICAgICBUMk0uZGlzcGF0Y2goRXZlbnRUeXBlLk5FWFRfTEVWRUwsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQW5pID0gXCJCRzJcIjtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuaUxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gVG9vbHMucGxheVNwaW5lKHRoaXMuYmdfYW5pLCBcIkJHMlwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubmV4dExldmVsKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFQyTV9jaGFuZ2VBbmkoZGF0YSkge1xyXG4gICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLmJnX2FuaSwgZGF0YS5uYW1lLCBkYXRhLmxvb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlR2FtZU92ZXIoKSB7XHJcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnR1cmVMZXZlbC5sZW5ndGggL0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5HYW1lRGF0YS5sZW5ndGggPj0gMC44KSB7XHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckFuaSA9IFwiQkczX3dpblwiO1xyXG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbmlMb29wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoU291bmRDb25maWcuc291ZGxpc3RbXCLmu5HooYxcIl0pO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIua7keihjFwiXSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sIDIuNSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoU291bmRDb25maWcuc291ZGxpc3RbXCLmu5HooYxcIl0pO1xyXG4gICAgICAgICAgICB9LCA1KTtcclxuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMuYmdfYW5pLCBcIkJHM193aW5cIiwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoU291bmRDb25maWcuc291ZGxpc3RbXCLmu5HooYxcIl0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKE5ldFdvcmsuaXNNYXN0ZXIgfHwgIU5ldFdvcmsuaXNTeW5jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVDJNLmRpc3BhdGNoKEV2ZW50VHlwZS5DSEFOR0VfQU5JLCB7IG5hbWU6IFwiQkczX3dpbjJcIiwgbG9vcDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUMk0uZGlzcGF0Y2goRXZlbnRUeXBlLlNZTkNfR0FNRV9PVkVSLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5b+r6IqC5aWP5oiQ5Yqf6Z+z5pWIXCJdLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTmV0V29yay5pc01hc3RlciB8fCAhTmV0V29yay5pc1N5bmMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVDJNLmRpc3BhdGNoKEV2ZW50VHlwZS5DSEFOR0VfQU5JLCB7IG5hbWU6IFwiQkczX3dpbjJcIiwgbG9vcDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVDJNLmRpc3BhdGNoKEV2ZW50VHlwZS5TWU5DX0dBTUVfT1ZFUiwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJBbmkgPSBcIkJHM193aW4yXCI7XHJcbiAgICAgICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbmlMb29wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIFRvb2xzLnBsYXlTcGluZSh0aGlzLmJnX2FuaSwgXCJCRzNfd2luMlwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuR0FNRV9PVkVSKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckFuaSA9IFwiQkczJjRfbG9zdFwiO1xyXG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbmlMb29wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLmJnX2FuaSwgXCJCRzMmNF9sb3N0XCIsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTmV0V29yay5pc01hc3RlciB8fCAhTmV0V29yay5pc1N5bmMpIHtcclxuICAgICAgICAgICAgICAgICAgICBUMk0uZGlzcGF0Y2goRXZlbnRUeXBlLkNIQU5HRV9BTkksIHsgbmFtZTogXCJCRzMmNF9sb3N0MlwiLCBsb29wOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFQyTS5kaXNwYXRjaChFdmVudFR5cGUuU1lOQ19HQU1FX09WRVIsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLplb/kuIDkupvnmoTlpLHotKXpn7PmlYhcIl0sIGZhbHNlLCB0cnVlLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChOZXRXb3JrLmlzTWFzdGVyIHx8ICFOZXRXb3JrLmlzU3luYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUMk0uZGlzcGF0Y2goRXZlbnRUeXBlLkNIQU5HRV9BTkksIHsgbmFtZTogXCJCRzNfd2luMlwiLCBsb29wOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUMk0uZGlzcGF0Y2goRXZlbnRUeXBlLlNZTkNfR0FNRV9PVkVSLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckFuaSA9IFwiQkczJjRfbG9zdDJcIjtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuaUxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gVG9vbHMucGxheVNwaW5lKHRoaXMuYmdfYW5pLCBcIkJHMyY0X2xvc3QyXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX09WRVIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzeW5jR2FtZU92ZXIoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX09WRVIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja1N0YXJ0KCkge1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzU3RhcnQgPSB0cnVlO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmJ0bl9zdGFydC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJBbmkgPSBcIkJHMVwiO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuaUxvb3AgPSBmYWxzZTtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5iZ19hbmksIFwiQkcxXCIsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChOZXRXb3JrLmlzTWFzdGVyIHx8ICFOZXRXb3JrLmlzU3luYykge1xyXG4gICAgICAgICAgICAgICAgVDJNLmRpc3BhdGNoKEV2ZW50VHlwZS5DSEFOR0VfQU5JLCB7IG5hbWU6IFwiQkcyXCIsIGxvb3A6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICBUMk0uZGlzcGF0Y2goRXZlbnRUeXBlLlNIT1dfUVVFU1RJT04sIG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckFuaSA9IFwiQkcyXCI7XHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuaUxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBUb29scy5wbGF5U3BpbmUodGhpcy5iZ19hbmksIFwiQkcyXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmhhbmRsZVNob3dRdWVzdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlU2hvd1F1ZXN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25fbm9kZS5nZXRDaGlsZEJ5TmFtZShcInFpZVwiKS54ID0gMzAwO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucXVlc3Rpb25fbm9kZSkudG8oMC41LCB7IHk6IHRoaXMucXVlc3Rpb25fbm9kZV9wb3NZIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucXVlc3Rpb25fbm9kZS5nZXRDaGlsZEJ5TmFtZShcInFpZVwiKSkudG8oMC41LCB7IHg6IDQzMCB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5vcHRpb25fbm9kZSkudG8oMC41LCB7IHk6IHRoaXMub3B0aW9uX25vZGVfcG9zWSB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
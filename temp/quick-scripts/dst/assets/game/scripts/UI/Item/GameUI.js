
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
        SoundManager_1.SoundManager.stopAllEffect();
        this.gameData = EditorManager_1.EditorManager.editorData.GameData[SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curLevel];
        this.initTitle();
        this.initLevelProgress();
        this.initQuestion();
        this.initOption();
        this.handleShowQuestion();
    };
    GameUI.prototype.initTitle = function () {
        this.title_text.string = this.gameData.questionText;
        if (this.gameData.questionText.length > 36) {
            this.title_text.node.width = this.title_text.fontSize * 36;
            this.title_text.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
        }
        else {
            this.title_text.overflow = cc.Label.Overflow.NONE;
        }
        this.title_text.node.active = false;
        this.title_text.string = this.gameData.questionText;
        this.title_text.node.active = true;
        this.title_text.node.parent.getComponent(cc.Layout).updateLayout();
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
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, data);
        cc.tween(this.question_node.getChildByName("qie")).to(0.5, { x: 300 }).call(function () {
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
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["滑行"], true, true, true);
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
        SoundManager_1.SoundManager.stopAllEffect();
        Tools_1.Tools.playSpine(this.bg_ani, data.name, data.loop);
    };
    GameUI.prototype.handleGameOver = function () {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.tureLevel.length / EditorManager_1.EditorManager.editorData.GameData.length >= 0.8) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curAni = "BG3_win";
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.aniLoop = false;
            SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["滑行"]);
            this.scheduleOnce(function () {
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["滑行"], true, true, true);
            }, 2.5);
            this.scheduleOnce(function () {
                SoundManager_1.SoundManager.stopSoundByName(SoundConfig_1.SoundConfig.soudlist["滑行"]);
            }, 5);
            Tools_1.Tools.playSpine(this.bg_ani, "BG3_win", false, function () {
                if (NetWork_1.NetWork.isMaster || !NetWork_1.NetWork.isSync) {
                    T2M_1.T2M.dispatch(EventType_1.EventType.CHANGE_ANI, { name: "BG3_win2", loop: true });
                    // T2M.dispatch(EventType.SYNC_GAME_OVER, null);
                }
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["快节奏成功音效"], false, false, false, function () {
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
                SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["长一些的失败音效"], false, false, false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBaUU7QUFDakUscUZBQW9GO0FBQ3BGLCtFQUE4RTtBQUM5RSxxRkFBb0Y7QUFDcEYseURBQXdEO0FBQ3hELCtEQUE4RDtBQUM5RCxpRUFBZ0U7QUFDaEUsa0RBQWlEO0FBQ2pELDZEQUFzRTtBQUN0RSw2Q0FBd0M7QUFDeEMsNkNBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBK1NDO1FBN1NXLFlBQU0sR0FBZ0IsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFaEMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFFL0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUMxQiw4QkFBd0IsR0FBVyxHQUFHLENBQUM7UUFDdkMsd0JBQWtCLEdBQVcsRUFBRSxDQUFDO1FBQ2hDLDRCQUFzQixHQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3ZDLHNCQUFnQixHQUFXLENBQUMsR0FBRyxDQUFDOztJQXFSNUMsQ0FBQztJQW5SRyx1QkFBTSxHQUFOO1FBQ0ksaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMs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SSxDQUFDO2lEQUNvQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNrQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNvQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNpQjtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNtQjtJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNvQjtJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNrQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNvQjtJQXBCdEIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQStTMUI7SUFBRCxhQUFDO0NBL1NELEFBK1NDLENBL1NtQyxFQUFFLENBQUMsU0FBUyxHQStTL0M7a0JBL1NvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV0V29yayB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL0h0dHAvTmV0V29ya1wiO1xyXG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBUMk0gfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9TREsvVDJNXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVG9vbHNcIjtcclxuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVUlIZWxwXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyLCBHYW1lRGF0YSB9IGZyb20gXCIuLi8uLi9NYW5hZ2VyL0VkaXRvck1hbmFnZXJcIjtcclxuaW1wb3J0IE9wdGlvbkt1YW5nIGZyb20gXCIuL09wdGlvbkt1YW5nXCI7XHJcbmltcG9ydCB7IFNvdW5kQ29uZmlnIH0gZnJvbSBcIi4vU291bmRDb25maWdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgcHJpdmF0ZSBiZ19hbmk6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBidG5fc3RhcnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uX25vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG9wdGlvbl9ub2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIG9wdGlvbl9wcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHRpdGxlX3RleHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uX2ltZzogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgcXVlc3Rpb25fdGV4dDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBsYl9jdXJMZXZlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBsYl9sZXZlbENvdW50OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lRGF0YTogR2FtZURhdGEgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvbl9ub2RlX3N0YXJ0X3Bvc1k6IG51bWJlciA9IDkwMDtcclxuICAgIHByaXZhdGUgcXVlc3Rpb25fbm9kZV9wb3NZOiBudW1iZXIgPSA5MDtcclxuICAgIHByaXZhdGUgb3B0aW9uX25vZGVfc3RhcnRfcG9zWTogbnVtYmVyID0gLTEwMDA7XHJcbiAgICBwcml2YXRlIG9wdGlvbl9ub2RlX3Bvc1k6IG51bWJlciA9IC00MDA7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuRU5URVJfR0FNRSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuR0FNRV9SRUNPTk5FQ1QsIHRoaXMucmVzZXRVSSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX1JFUExBWSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuQ0xJQ0tfT1BUSU9OLCB0aGlzLmhhbmRsZUNsaWNrT3B0aW9uLCB0aGlzKTtcclxuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkNIQU5HRV9BTkksIHRoaXMuVDJNX2NoYW5nZUFuaS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLk5FWFRfTEVWRUwsIHRoaXMubmV4dExldmVsLmJpbmQodGhpcykpO1xyXG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuU0hPV19RVUVTVElPTiwgdGhpcy5oYW5kbGVTaG93UXVlc3Rpb24uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5TWU5DX0dBTUVfT1ZFUiwgdGhpcy5zeW5jR2FtZU92ZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkVOVEVSX0dBTUUsIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5HQU1FX1JFQ09OTkVDVCwgdGhpcy5yZXNldFVJLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5HQU1FX1JFUExBWSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkNMSUNLX09QVElPTiwgdGhpcy5oYW5kbGVDbGlja09wdGlvbiwgdGhpcyk7XHJcbiAgICAgICAgVDJNLnJlbW92ZVN5bmNFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5DSEFOR0VfQU5JKTtcclxuICAgICAgICBUMk0ucmVtb3ZlU3luY0V2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLk5FWFRfTEVWRUwpO1xyXG4gICAgICAgIFQyTS5yZW1vdmVTeW5jRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuU0hPV19RVUVTVElPTik7XHJcbiAgICAgICAgVDJNLnJlbW92ZVN5bmNFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5TWU5DX0dBTUVfT1ZFUik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFbnRlckdhbWUoKSB7XHJcbiAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMuYmdfYW5pLCBcIkJHXCIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZURhdGEgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuR2FtZURhdGFbU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyTGV2ZWxdO1xyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0VUkoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbml0VUlcIiwgdGhpcy5nYW1lRGF0YSk7XHJcbiAgICAgICAgdGhpcy5pbml0VGl0bGUoKTtcclxuICAgICAgICB0aGlzLmluaXRMZXZlbFByb2dyZXNzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0UXVlc3Rpb24oKTtcclxuICAgICAgICB0aGlzLmluaXRPcHRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5fc3RhcnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJ0bl9zdGFydC5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uX25vZGUueSA9IHRoaXMucXVlc3Rpb25fbm9kZV9zdGFydF9wb3NZO1xyXG4gICAgICAgIHRoaXMub3B0aW9uX25vZGUueSA9IHRoaXMub3B0aW9uX25vZGVfc3RhcnRfcG9zWTtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5iZ19hbmksIFwiQkcxLTFcIiwgdHJ1ZSk7XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQW5pID0gXCJCRzEtMVwiO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuaUxvb3AgPSB0cnVlO1xyXG4gICAgICAgIC8v5pKt5pS+55qu55qu6K+t6Z+z77ya4oCc5Yir6LeR77yB4oCdXHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLliKvot5FcIl0sIGZhbHNlLCBmYWxzZSwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5idG5fc3RhcnQpLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUgfSkuc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0VUkoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lRGF0YSA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5HYW1lRGF0YVtTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJMZXZlbF07XHJcbiAgICAgICAgdGhpcy5pbml0VGl0bGUoKTtcclxuICAgICAgICB0aGlzLmluaXRMZXZlbFByb2dyZXNzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0UXVlc3Rpb24oKTtcclxuICAgICAgICB0aGlzLmluaXRPcHRpb24oKTtcclxuICAgICAgICB0aGlzLmJ0bl9zdGFydC5hY3RpdmUgPSAhU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuaXNTdGFydDtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5iZ19hbmksIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckFuaSwgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuYW5pTG9vcCk7XHJcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzU3RhcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbl9ub2RlLnkgPSB0aGlzLnF1ZXN0aW9uX25vZGVfcG9zWTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25fbm9kZS55ID0gdGhpcy5vcHRpb25fbm9kZV9wb3NZO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uX25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxaWVcIikueCA9IDQzMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5zeW5jRGF0YS5mcmFtZVN5bmNEYXRhLmlzR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbl9ub2RlLnkgPSB0aGlzLnF1ZXN0aW9uX25vZGVfc3RhcnRfcG9zWTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25fbm9kZS55ID0gdGhpcy5vcHRpb25fbm9kZV9zdGFydF9wb3NZO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uX25vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJxaWVcIikueCA9IDMwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuZXh0TGV2ZWwoKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BBbGxFZmZlY3QoKTtcclxuICAgICAgICB0aGlzLmdhbWVEYXRhID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLkdhbWVEYXRhW1N5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckxldmVsXTtcclxuICAgICAgICB0aGlzLmluaXRUaXRsZSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdExldmVsUHJvZ3Jlc3MoKTtcclxuICAgICAgICB0aGlzLmluaXRRdWVzdGlvbigpO1xyXG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbigpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2hvd1F1ZXN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0VGl0bGUoKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZV90ZXh0LnN0cmluZyA9IHRoaXMuZ2FtZURhdGEucXVlc3Rpb25UZXh0O1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVEYXRhLnF1ZXN0aW9uVGV4dC5sZW5ndGggPiAzNikge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlX3RleHQubm9kZS53aWR0aCA9IHRoaXMudGl0bGVfdGV4dC5mb250U2l6ZSAqIDM2O1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlX3RleHQub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5SRVNJWkVfSEVJR0hUO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVfdGV4dC5vdmVyZmxvdyA9IGNjLkxhYmVsLk92ZXJmbG93Lk5PTkU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGl0bGVfdGV4dC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGl0bGVfdGV4dC5zdHJpbmcgPSB0aGlzLmdhbWVEYXRhLnF1ZXN0aW9uVGV4dDtcclxuICAgICAgICB0aGlzLnRpdGxlX3RleHQubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGl0bGVfdGV4dC5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS51cGRhdGVMYXlvdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRMZXZlbFByb2dyZXNzKCkge1xyXG4gICAgICAgIHRoaXMubGJfY3VyTGV2ZWwubm9kZS5wYXJlbnQucGFyZW50LmFjdGl2ZSA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5HYW1lRGF0YS5sZW5ndGggPiAxO1xyXG4gICAgICAgIHRoaXMubGJfY3VyTGV2ZWwuc3RyaW5nID0gKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckxldmVsICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmxiX2xldmVsQ291bnQuc3RyaW5nID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLkdhbWVEYXRhLmxlbmd0aC50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFF1ZXN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVEYXRhLnF1ZXN0aW9uUGljID09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbl90ZXh0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbl9pbWcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbl90ZXh0LnN0cmluZyA9IHRoaXMuZ2FtZURhdGEucXVlc3Rpb25UZXh0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25fdGV4dC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uX2ltZy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwiaW1hZ2VzL1wiICsgdGhpcy5nYW1lRGF0YS5xdWVzdGlvblBpYywgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIGltZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbl9pbWcuc3ByaXRlRnJhbWUgPSBpbWc7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5xdWVzdGlvbl9pbWfmoLnmja45NTUqNTU155qE5Zu+54mH5aSn5bCP6Ieq6YCC5bqU57yp5pS+XHJcbiAgICAgICAgICAgIC8vIGxldCBzY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnF1ZXN0aW9uX2ltZy53aWR0aCA+IDk1NSkge1xyXG4gICAgICAgICAgICAvLyAgICAgc2NhbGUgPSA5NTUgLyB0aGlzLnF1ZXN0aW9uX2ltZy53aWR0aDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5xdWVzdGlvbl9pbWcuaGVpZ2h0ICogc2NhbGUgPiA1NTUpIHtcclxuICAgICAgICAgICAgLy8gICAgIHNjYWxlID0gNTU1IC8gdGhpcy5xdWVzdGlvbl9pbWcuaGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMucXVlc3Rpb25faW1nLm5vZGUuc2NhbGUgPSBzY2FsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdE9wdGlvbigpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbl9ub2RlLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMub3B0aW9uX25vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZURhdGEub3BpbmlvbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm9wdGlvbl9wcmVmYWIpO1xyXG4gICAgICAgICAgICBvcHRpb24ubmFtZSA9IFwib3B0aW9uXCIgKyBpO1xyXG4gICAgICAgICAgICBvcHRpb24ucGFyZW50ID0gdGhpcy5vcHRpb25fbm9kZTtcclxuICAgICAgICAgICAgbGV0IGNvbSA9IG9wdGlvbi5nZXRDb21wb25lbnQoT3B0aW9uS3VhbmcpO1xyXG4gICAgICAgICAgICBsZXQgaXNUcnVlQW5zd2VyID0gdGhpcy5nYW1lRGF0YS5hbnN3ZXIgPT0gaSArIDE7XHJcbiAgICAgICAgICAgIGNvbS5pbml0KGksIHRoaXMuZ2FtZURhdGFbXCJvcGluaW9uVGV4dFwiICsgKGkgKyAxKV0sIHRoaXMuZ2FtZURhdGFbXCJvcGluaW9uUGljXCIgKyAoaSArIDEpXSwgaXNUcnVlQW5zd2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVDbGlja09wdGlvbihkYXRhKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5TVUJNSVQsIGRhdGEpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucXVlc3Rpb25fbm9kZS5nZXRDaGlsZEJ5TmFtZShcInFpZVwiKSkudG8oMC41LCB7IHg6IDMwMCB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlVHJ1ZUFuaSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVXcm9uZ0FuaSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVRydWVBbmkoKSB7XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEudHVyZUxldmVsLnB1c2goU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyTGV2ZWwgKyAxKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnF1ZXN0aW9uX25vZGUpLmRlbGF5KDAuNSkudG8oMC41LCB7IHk6IHRoaXMucXVlc3Rpb25fbm9kZV9zdGFydF9wb3NZIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5vcHRpb25fbm9kZSkuZGVsYXkoMC41KS50bygwLjUsIHsgeTogdGhpcy5vcHRpb25fbm9kZV9zdGFydF9wb3NZIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZU5leHRMZXZlbCgpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVXcm9uZ0FuaSgpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnF1ZXN0aW9uX25vZGUpLmRlbGF5KDAuNSkudG8oMC41LCB7IHk6IHRoaXMucXVlc3Rpb25fbm9kZV9zdGFydF9wb3NZIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5vcHRpb25fbm9kZSkuZGVsYXkoMC41KS50bygwLjUsIHsgeTogdGhpcy5vcHRpb25fbm9kZV9zdGFydF9wb3NZIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZU5leHRMZXZlbChmYWxzZSk7XHJcbiAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZU5leHRMZXZlbChpc1RydWU6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgbGV0IGJnX2FuaV9uYW1lID0gaXNUcnVlID8gXCJCRzNcIiA6IFwiQkc0XCI7XHJcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckxldmVsICsgMSA+PSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuR2FtZURhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlR2FtZU92ZXIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJMZXZlbCsrO1xyXG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJBbmkgPSBiZ19hbmlfbmFtZTtcclxuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuYW5pTG9vcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5ruR6KGMXCJdKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoU291bmRDb25maWcuc291ZGxpc3RbXCLmu5HooYxcIl0sIHRydWUsIHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICB9LCAyLjUpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcFNvdW5kQnlOYW1lKFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi5ruR6KGMXCJdKTtcclxuICAgICAgICAgICAgfSwgNSk7XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLmJnX2FuaSwgYmdfYW5pX25hbWUsIGZhbHNlLCAoKSA9PiB7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChOZXRXb3JrLmlzTWFzdGVyIHx8ICFOZXRXb3JrLmlzU3luYykge1xyXG4gICAgICAgICAgICAgICAgICAgIFQyTS5kaXNwYXRjaChFdmVudFR5cGUuQ0hBTkdFX0FOSSwgeyBuYW1lOiBcIkJHMlwiLCBsb29wOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgVDJNLmRpc3BhdGNoKEV2ZW50VHlwZS5ORVhUX0xFVkVMLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckFuaSA9IFwiQkcyXCI7XHJcbiAgICAgICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbmlMb29wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIFRvb2xzLnBsYXlTcGluZSh0aGlzLmJnX2FuaSwgXCJCRzJcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5leHRMZXZlbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBUMk1fY2hhbmdlQW5pKGRhdGEpIHtcclxuICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcEFsbEVmZmVjdCgpO1xyXG4gICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLmJnX2FuaSwgZGF0YS5uYW1lLCBkYXRhLmxvb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlR2FtZU92ZXIoKSB7XHJcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnR1cmVMZXZlbC5sZW5ndGggL0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5HYW1lRGF0YS5sZW5ndGggPj0gMC44KSB7XHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckFuaSA9IFwiQkczX3dpblwiO1xyXG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5hbmlMb29wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoU291bmRDb25maWcuc291ZGxpc3RbXCLmu5HooYxcIl0pO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIua7keihjFwiXSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sIDIuNSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5zdG9wU291bmRCeU5hbWUoU291bmRDb25maWcuc291ZGxpc3RbXCLmu5HooYxcIl0pO1xyXG4gICAgICAgICAgICB9LCA1KTtcclxuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMuYmdfYW5pLCBcIkJHM193aW5cIiwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChOZXRXb3JrLmlzTWFzdGVyIHx8ICFOZXRXb3JrLmlzU3luYykge1xyXG4gICAgICAgICAgICAgICAgICAgIFQyTS5kaXNwYXRjaChFdmVudFR5cGUuQ0hBTkdFX0FOSSwgeyBuYW1lOiBcIkJHM193aW4yXCIsIGxvb3A6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVDJNLmRpc3BhdGNoKEV2ZW50VHlwZS5TWU5DX0dBTUVfT1ZFUiwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIuW/q+iKguWlj+aIkOWKn+mfs+aViFwiXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChOZXRXb3JrLmlzTWFzdGVyIHx8ICFOZXRXb3JrLmlzU3luYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUMk0uZGlzcGF0Y2goRXZlbnRUeXBlLkNIQU5HRV9BTkksIHsgbmFtZTogXCJCRzNfd2luMlwiLCBsb29wOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUMk0uZGlzcGF0Y2goRXZlbnRUeXBlLlNZTkNfR0FNRV9PVkVSLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckFuaSA9IFwiQkczX3dpbjJcIjtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuaUxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gVG9vbHMucGxheVNwaW5lKHRoaXMuYmdfYW5pLCBcIkJHM193aW4yXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX09WRVIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQW5pID0gXCJCRzMmNF9sb3N0XCI7XHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuaUxvb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMuYmdfYW5pLCBcIkJHMyY0X2xvc3RcIiwgZmFsc2UsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChOZXRXb3JrLmlzTWFzdGVyIHx8ICFOZXRXb3JrLmlzU3luYykge1xyXG4gICAgICAgICAgICAgICAgICAgIFQyTS5kaXNwYXRjaChFdmVudFR5cGUuQ0hBTkdFX0FOSSwgeyBuYW1lOiBcIkJHMyY0X2xvc3QyXCIsIGxvb3A6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVDJNLmRpc3BhdGNoKEV2ZW50VHlwZS5TWU5DX0dBTUVfT1ZFUiwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChTb3VuZENvbmZpZy5zb3VkbGlzdFtcIumVv+S4gOS6m+eahOWksei0pemfs+aViFwiXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChOZXRXb3JrLmlzTWFzdGVyIHx8ICFOZXRXb3JrLmlzU3luYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUMk0uZGlzcGF0Y2goRXZlbnRUeXBlLkNIQU5HRV9BTkksIHsgbmFtZTogXCJCRzNfd2luMlwiLCBsb29wOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUMk0uZGlzcGF0Y2goRXZlbnRUeXBlLlNZTkNfR0FNRV9PVkVSLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckFuaSA9IFwiQkczJjRfbG9zdDJcIjtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuaUxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gVG9vbHMucGxheVNwaW5lKHRoaXMuYmdfYW5pLCBcIkJHMyY0X2xvc3QyXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX09WRVIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzeW5jR2FtZU92ZXIoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX09WRVIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja1N0YXJ0KCkge1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmlzU3RhcnQgPSB0cnVlO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmJ0bl9zdGFydC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJBbmkgPSBcIkJHMVwiO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuaUxvb3AgPSBmYWxzZTtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5iZ19hbmksIFwiQkcxXCIsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChOZXRXb3JrLmlzTWFzdGVyIHx8ICFOZXRXb3JrLmlzU3luYykge1xyXG4gICAgICAgICAgICAgICAgVDJNLmRpc3BhdGNoKEV2ZW50VHlwZS5DSEFOR0VfQU5JLCB7IG5hbWU6IFwiQkcyXCIsIGxvb3A6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICBUMk0uZGlzcGF0Y2goRXZlbnRUeXBlLlNIT1dfUVVFU1RJT04sIG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckFuaSA9IFwiQkcyXCI7XHJcbiAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmFuaUxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBUb29scy5wbGF5U3BpbmUodGhpcy5iZ19hbmksIFwiQkcyXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmhhbmRsZVNob3dRdWVzdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlU2hvd1F1ZXN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25fbm9kZS5nZXRDaGlsZEJ5TmFtZShcInFpZVwiKS54ID0gMzAwO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucXVlc3Rpb25fbm9kZSkudG8oMC41LCB7IHk6IHRoaXMucXVlc3Rpb25fbm9kZV9wb3NZIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucXVlc3Rpb25fbm9kZS5nZXRDaGlsZEJ5TmFtZShcInFpZVwiKSkudG8oMC41LCB7IHg6IDQzMCB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5vcHRpb25fbm9kZSkudG8oMC41LCB7IHk6IHRoaXMub3B0aW9uX25vZGVfcG9zWSB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
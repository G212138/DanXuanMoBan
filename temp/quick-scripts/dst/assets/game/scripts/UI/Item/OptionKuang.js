
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/OptionKuang.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f79b9wtvRRGG7bUh/bbIfSR', 'OptionKuang');
// game/scripts/UI/Item/OptionKuang.ts

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
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EventType_1 = require("../../Data/EventType");
var SoundConfig_1 = require("./SoundConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OptionKuang = /** @class */ (function (_super) {
    __extends(OptionKuang, _super);
    function OptionKuang() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = null;
        _this.img_sp = null;
        _this.img_true = null;
        _this.img_wrong = null;
        _this.icon = null;
        _this.icon_img = [];
        _this.isTrueAnswer = false;
        _this.index = 0;
        return _this;
    }
    OptionKuang.prototype.init = function (index, text, img, isTrueAnswer) {
        this.index = index;
        this.text.string = text;
        if (img == "") {
            this.text.node.active = true;
            this.img_sp.node.active = false;
        }
        else {
            this.text.node.active = false;
            this.img_sp.node.active = true;
            cc.resources.load("images/" + img, cc.SpriteFrame, function (err, img) {
                this.img_sp.spriteFrame = img;
            }.bind(this));
        }
        this.isTrueAnswer = isTrueAnswer;
        this.icon.spriteFrame = this.icon_img[this, index];
    };
    OptionKuang.prototype.onClickOption = function () {
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist["点击音效"], false, false, false);
        UIHelp_1.UIHelp.showMask();
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.CLICK_OPTION, this.isTrueAnswer);
        var soundName = this.isTrueAnswer ? "正确音效" : "错误音效";
        SoundManager_1.SoundManager.playEffect(SoundConfig_1.SoundConfig.soudlist[soundName], false, false, false);
        this.img_true.active = this.isTrueAnswer;
        this.img_wrong.active = !this.isTrueAnswer;
    };
    __decorate([
        property(cc.Label)
    ], OptionKuang.prototype, "text", void 0);
    __decorate([
        property(cc.Sprite)
    ], OptionKuang.prototype, "img_sp", void 0);
    __decorate([
        property(cc.Node)
    ], OptionKuang.prototype, "img_true", void 0);
    __decorate([
        property(cc.Node)
    ], OptionKuang.prototype, "img_wrong", void 0);
    __decorate([
        property(cc.Sprite)
    ], OptionKuang.prototype, "icon", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], OptionKuang.prototype, "icon_img", void 0);
    OptionKuang = __decorate([
        ccclass
    ], OptionKuang);
    return OptionKuang;
}(cc.Component));
exports.default = OptionKuang;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXE9wdGlvbkt1YW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFGQUFvRjtBQUNwRiwrRUFBOEU7QUFDOUUsaUVBQWdFO0FBQ2hFLGtEQUFpRDtBQUNqRCw2Q0FBNEM7QUFFdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUE4Q0M7UUEzQ1csVUFBSSxHQUFhLElBQUksQ0FBQztRQUV0QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBcUIsRUFBRSxDQUFDO1FBRWhDLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBOEI5QixDQUFDO0lBNUJVLDBCQUFJLEdBQVgsVUFBWSxLQUFhLEVBQUUsSUFBWSxFQUFFLEdBQVcsRUFBRSxZQUFxQjtRQUN2RSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ25DO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDL0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBQyxFQUFFLENBQUMsV0FBVyxFQUFDLFVBQVMsR0FBRyxFQUFFLEdBQUc7Z0JBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDakI7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sbUNBQWEsR0FBcEI7UUFDSSwyQkFBWSxDQUFDLFVBQVUsQ0FBQyx5QkFBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNFLGVBQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDcEQsMkJBQVksQ0FBQyxVQUFVLENBQUMseUJBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMvQyxDQUFDO0lBeENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ1c7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDYTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2dCO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ1c7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDZTtJQWJ2QixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBOEMvQjtJQUFELGtCQUFDO0NBOUNELEFBOENDLENBOUN3QyxFQUFFLENBQUMsU0FBUyxHQThDcEQ7a0JBOUNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9Tb3VuZE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVUlIZWxwXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBTb3VuZENvbmZpZyB9IGZyb20gXCIuL1NvdW5kQ29uZmlnXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uS3VhbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgdGV4dDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHByaXZhdGUgaW1nX3NwOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGltZ190cnVlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBpbWdfd3Jvbmc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHByaXZhdGUgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgaWNvbl9pbWc6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGlzVHJ1ZUFuc3dlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgaW5pdChpbmRleDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIGltZzogc3RyaW5nLCBpc1RydWVBbnN3ZXI6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy50ZXh0LnN0cmluZyA9IHRleHQ7XHJcbiAgICAgICAgaWYgKGltZyA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nX3NwLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nX3NwLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJpbWFnZXMvXCIgKyBpbWcsY2MuU3ByaXRlRnJhbWUsZnVuY3Rpb24oZXJyLCBpbWcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWdfc3Auc3ByaXRlRnJhbWUgPSBpbWc7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzVHJ1ZUFuc3dlciA9IGlzVHJ1ZUFuc3dlcjtcclxuICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmljb25faW1nW3RoaXMsaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsaWNrT3B0aW9uKCkge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W1wi54K55Ye76Z+z5pWIXCJdLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICBVSUhlbHAuc2hvd01hc2soKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkNMSUNLX09QVElPTiwgdGhpcy5pc1RydWVBbnN3ZXIpO1xyXG4gICAgICAgIGxldCBzb3VuZE5hbWUgPSB0aGlzLmlzVHJ1ZUFuc3dlciA/IFwi5q2j56Gu6Z+z5pWIXCIgOiBcIumUmeivr+mfs+aViFwiO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFNvdW5kQ29uZmlnLnNvdWRsaXN0W3NvdW5kTmFtZV0sIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaW1nX3RydWUuYWN0aXZlID0gdGhpcy5pc1RydWVBbnN3ZXI7XHJcbiAgICAgICAgdGhpcy5pbWdfd3JvbmcuYWN0aXZlID0gIXRoaXMuaXNUcnVlQW5zd2VyOyAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
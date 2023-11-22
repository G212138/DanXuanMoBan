import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { UIHelp } from "../../../../frame/scripts/Utils/UIHelp";
import { EventType } from "../../Data/EventType";
import { SoundConfig } from "./SoundConfig";

const { ccclass, property } = cc._decorator;

@ccclass
export default class OptionKuang extends cc.Component {

    @property(cc.Label)
    private text: cc.Label = null;
    @property(cc.Sprite)
    private img_sp: cc.Sprite = null;
    @property(cc.Node)
    private img_true: cc.Node = null;
    @property(cc.Node)
    private img_wrong: cc.Node = null;
    @property(cc.Sprite)
    private icon: cc.Sprite = null;
    @property(cc.SpriteFrame)
    private icon_img: cc.SpriteFrame[] = [];

    private isTrueAnswer: boolean = false;
    private index: number = 0;

    public init(index: number, text: string, img: string, isTrueAnswer: boolean) {
        this.index = index;
        this.text.string = text;
        if (img == "") {
            this.text.node.active = true;
            this.img_sp.node.active = false;
        } else {
            this.text.node.active = false;
            this.img_sp.node.active = true;
            cc.resources.load("images/" + img,cc.SpriteFrame,function(err, img){
                this.img_sp.spriteFrame = img;             
            }.bind(this));
        }
        this.isTrueAnswer = isTrueAnswer;
        this.icon.spriteFrame = this.icon_img[this,index];
    }

    public onClickOption() {
        SoundManager.playEffect(SoundConfig.soudlist["点击音效"], false, false, false);
        UIHelp.showMask();
        ListenerManager.dispatch(EventType.CLICK_OPTION, this.isTrueAnswer);
        let soundName = this.isTrueAnswer ? "正确音效" : "错误音效";
        SoundManager.playEffect(SoundConfig.soudlist[soundName], false, false, false);
        this.img_true.active = this.isTrueAnswer;
        this.img_wrong.active = !this.isTrueAnswer;       
    }


}

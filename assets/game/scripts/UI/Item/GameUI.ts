import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { EventType } from "../../Data/EventType";
import { EditorManager, GameData } from "../../Manager/EditorManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameUI extends cc.Component {
    
    private gameData: GameData = null;

    onLoad() {
        ListenerManager.on(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.on(EventType.GAME_RECONNECT, this.initUI, this);
        ListenerManager.on(EventType.GAME_REPLAY, this.handleEnterGame, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.off(EventType.GAME_RECONNECT, this.initUI, this);
        ListenerManager.off(EventType.GAME_REPLAY, this.handleEnterGame, this);
    }

    private handleEnterGame() {
        this.gameData = EditorManager.editorData.GameData[SyncDataManager.getSyncData().customSyncData.curLevel];
        this.initUI();
    }

    private initUI() {
        console.log("initUI", this.gameData);
    }

    

    private gameOver() {
        ListenerManager.dispatch(EventType.GAME_OVER);
    }

}

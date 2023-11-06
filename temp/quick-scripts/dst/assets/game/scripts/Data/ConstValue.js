
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/ConstValue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2ee0BC2l1Pp47nuM279OIO', 'ConstValue');
// game/scripts/Data/ConstValue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstValue = void 0;
var ConstValue = /** @class */ (function () {
    function ConstValue() {
    }
    ConstValue.IS_EDITIONS = true; //是否为发布版本，用于数据上报 及 log输出控制
    ConstValue.IS_TEACHER = true; //是否为教师端版本
    ConstValue.CoursewareKey = 'DanXuanMoBan_7ns2Eh3K6s2NB8'; //每个课件唯一的key 工程名+14位随机字符串。（脚本创建工程时自动生成）
    ConstValue.GameName = '2023_小高寒_单选题模板'; //游戏名中文描述，用于数据上报  （脚本创建工程时输入）
    ConstValue.Subject = 1; //学科（1理科 2语文 3英语）
    ConstValue.defaultLevelData = [
        {
            questionText: "以下哪位是唐朝诗人?",
            questionPic: "",
            opinion: 4,
            answer: [4],
            opinionText1: "屈原",
            opinionPic1: "",
            opinionText2: "李伯",
            opinionPic2: "",
            opinionText3: "唐国强",
            opinionPic3: "",
            opinionText4: "骆宾王",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
        {
            questionText: "在课堂里学习30秒,就等于在现实中过了半分钟。",
            questionPic: "",
            opinion: 2,
            answer: [2],
            opinionText1: "错",
            opinionPic1: "",
            opinionText2: "对",
            opinionPic2: "",
            opinionText3: "",
            opinionPic3: "",
            opinionText4: "",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
        {
            questionText: "Ledu let me happy (    )",
            questionPic: "",
            opinion: 4,
            answer: [3],
            opinionText1: "playing",
            opinionPic1: "",
            opinionText2: "reading",
            opinionPic2: "",
            opinionText3: "studying",
            opinionPic3: "",
            opinionText4: "sleeping",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
        {
            questionText: "在组织幼儿认识形状时,李老师说:“请小朋友找找教室里有圆形和正方形的物品。”李老师的做法体现了幼儿教育特点的(   )",
            questionPic: "",
            opinion: 4,
            answer: [4],
            opinionText1: "基础性",
            opinionPic1: "",
            opinionText2: "整体性",
            opinionPic2: "",
            opinionText3: "浅显性",
            opinionPic3: "",
            opinionText4: "生活性",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
    ];
    return ConstValue;
}());
exports.ConstValue = ConstValue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ29uc3RWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBeUVBLENBQUM7SUF4RTBCLHNCQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsMEJBQTBCO0lBQzlDLHFCQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVTtJQUM3Qix3QkFBYSxHQUFHLDZCQUE2QixDQUFDLENBQUMsdUNBQXVDO0lBQ3RGLG1CQUFRLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyw2QkFBNkI7SUFDMUQsa0JBQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7SUFFOUIsMkJBQWdCLEdBQUc7UUFDdEM7WUFDSSxZQUFZLEVBQUUsWUFBWTtZQUMxQixXQUFXLEVBQUUsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1gsWUFBWSxFQUFFLElBQUk7WUFDbEIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsSUFBSTtZQUNsQixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxLQUFLO1lBQ25CLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsRUFBRTtZQUNoQixXQUFXLEVBQUUsRUFBRTtTQUNsQjtRQUNEO1lBQ0ksWUFBWSxFQUFFLHlCQUF5QjtZQUN2QyxXQUFXLEVBQUUsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1gsWUFBWSxFQUFFLEdBQUc7WUFDakIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsR0FBRztZQUNqQixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsRUFBRTtZQUNoQixXQUFXLEVBQUUsRUFBRTtTQUNsQjtRQUNEO1lBQ0ksWUFBWSxFQUFFLDBCQUEwQjtZQUN4QyxXQUFXLEVBQUUsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1gsWUFBWSxFQUFFLFNBQVM7WUFDdkIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsU0FBUztZQUN2QixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxVQUFVO1lBQ3hCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLFVBQVU7WUFDeEIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsRUFBRTtZQUNoQixXQUFXLEVBQUUsRUFBRTtTQUNsQjtRQUNEO1lBQ0ksWUFBWSxFQUFFLDZEQUE2RDtZQUMzRSxXQUFXLEVBQUUsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1gsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsS0FBSztZQUNuQixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxLQUFLO1lBQ25CLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsRUFBRTtZQUNoQixXQUFXLEVBQUUsRUFBRTtTQUNsQjtLQUNKLENBQUE7SUFDTCxpQkFBQztDQXpFRCxBQXlFQyxJQUFBO0FBekVZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbnN0VmFsdWUge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSVNfRURJVElPTlMgPSB0cnVlOyAvL+aYr+WQpuS4uuWPkeW4g+eJiOacrO+8jOeUqOS6juaVsOaNruS4iuaKpSDlj4ogbG9n6L6T5Ye65o6n5Yi2XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJU19URUFDSEVSID0gdHJ1ZTsgLy/mmK/lkKbkuLrmlZnluIjnq6/niYjmnKxcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENvdXJzZXdhcmVLZXkgPSAnRGFuWHVhbk1vQmFuXzduczJFaDNLNnMyTkI4JzsgLy/mr4/kuKror77ku7bllK/kuIDnmoRrZXkg5bel56iL5ZCNKzE05L2N6ZqP5py65a2X56ym5Liy44CC77yI6ISa5pys5Yib5bu65bel56iL5pe26Ieq5Yqo55Sf5oiQ77yJXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHYW1lTmFtZSA9ICcyMDIzX+Wwj+mrmOWvkl/ljZXpgInpopjmqKHmnb8nOyAvL+a4uOaIj+WQjeS4reaWh+aPj+i/sO+8jOeUqOS6juaVsOaNruS4iuaKpSAg77yI6ISa5pys5Yib5bu65bel56iL5pe26L6T5YWl77yJXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTdWJqZWN0ID0gMTsgLy/lrabnp5HvvIgx55CG56eRIDLor63mlocgM+iLseivre+8iVxuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBkZWZhdWx0TGV2ZWxEYXRhID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBxdWVzdGlvblRleHQ6IFwi5Lul5LiL5ZOq5L2N5piv5ZSQ5pyd6K+X5Lq6P1wiLFxuICAgICAgICAgICAgcXVlc3Rpb25QaWM6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uOiA0LFxuICAgICAgICAgICAgYW5zd2VyOiBbNF0sXG4gICAgICAgICAgICBvcGluaW9uVGV4dDE6IFwi5bGI5Y6fXCIsXG4gICAgICAgICAgICBvcGluaW9uUGljMTogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25UZXh0MjogXCLmnY7kvK9cIixcbiAgICAgICAgICAgIG9waW5pb25QaWMyOiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblRleHQzOiBcIuWUkOWbveW8ulwiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzM6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uVGV4dDQ6IFwi6aqG5a6+546LXCIsXG4gICAgICAgICAgICBvcGluaW9uUGljNDogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25UZXh0NTogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25QaWM1OiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBxdWVzdGlvblRleHQ6IFwi5Zyo6K++5aCC6YeM5a2m5LmgMzDnp5Is5bCx562J5LqO5Zyo546w5a6e5Lit6L+H5LqG5Y2K5YiG6ZKf44CCXCIsXG4gICAgICAgICAgICBxdWVzdGlvblBpYzogXCJcIixcbiAgICAgICAgICAgIG9waW5pb246IDIsXG4gICAgICAgICAgICBhbnN3ZXI6IFsyXSxcbiAgICAgICAgICAgIG9waW5pb25UZXh0MTogXCLplJlcIixcbiAgICAgICAgICAgIG9waW5pb25QaWMxOiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblRleHQyOiBcIuWvuVwiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzI6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uVGV4dDM6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uUGljMzogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25UZXh0NDogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25QaWM0OiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblRleHQ1OiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzU6IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uVGV4dDogXCJMZWR1IGxldCBtZSBoYXBweSAoICAgIClcIixcbiAgICAgICAgICAgIHF1ZXN0aW9uUGljOiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvbjogNCxcbiAgICAgICAgICAgIGFuc3dlcjogWzNdLFxuICAgICAgICAgICAgb3BpbmlvblRleHQxOiBcInBsYXlpbmdcIixcbiAgICAgICAgICAgIG9waW5pb25QaWMxOiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblRleHQyOiBcInJlYWRpbmdcIixcbiAgICAgICAgICAgIG9waW5pb25QaWMyOiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblRleHQzOiBcInN0dWR5aW5nXCIsXG4gICAgICAgICAgICBvcGluaW9uUGljMzogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25UZXh0NDogXCJzbGVlcGluZ1wiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzQ6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uVGV4dDU6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uUGljNTogXCJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcXVlc3Rpb25UZXh0OiBcIuWcqOe7hOe7h+W5vOWEv+iupOivhuW9oueKtuaXtizmnY7ogIHluIjor7Q64oCc6K+35bCP5pyL5Y+L5om+5om+5pWZ5a6k6YeM5pyJ5ZyG5b2i5ZKM5q2j5pa55b2i55qE54mp5ZOB44CC4oCd5p2O6ICB5biI55qE5YGa5rOV5L2T546w5LqG5bm85YS/5pWZ6IKy54m554K555qEKCAgIClcIixcbiAgICAgICAgICAgIHF1ZXN0aW9uUGljOiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvbjogNCxcbiAgICAgICAgICAgIGFuc3dlcjogWzRdLFxuICAgICAgICAgICAgb3BpbmlvblRleHQxOiBcIuWfuuehgOaAp1wiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzE6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uVGV4dDI6IFwi5pW05L2T5oCnXCIsXG4gICAgICAgICAgICBvcGluaW9uUGljMjogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25UZXh0MzogXCLmtYXmmL7mgKdcIixcbiAgICAgICAgICAgIG9waW5pb25QaWMzOiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblRleHQ0OiBcIueUn+a0u+aAp1wiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzQ6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uVGV4dDU6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uUGljNTogXCJcIixcbiAgICAgICAgfSxcbiAgICBdXG59XG4iXX0=
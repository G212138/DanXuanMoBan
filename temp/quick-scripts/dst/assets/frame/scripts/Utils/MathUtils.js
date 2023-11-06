
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/MathUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa960SepSxHGal1p7xVIQi8', 'MathUtils');
// frame/scripts/Utils/MathUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtils = void 0;
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.getInstance = function () {
        if (this.instance == null) {
            this.instance = new MathUtils();
        }
        return this.instance;
    };
    /**
     弧度制转换为角度值
     @param radian 弧度制
     @returns {number}
     */
    MathUtils.prototype.getAngle = function (radian) {
        return (180 * radian) / Math.PI;
    };
    /**
     角度值转换为弧度制
     @param angle
     */
    MathUtils.prototype.getRadian = function (angle) {
        return (angle / 180) * Math.PI;
    };
    /**
     获取两点间弧度
     @param p1X
     @param p1Y
     @param p2X
     @param p2Y
     @returns {number}
     */
    MathUtils.prototype.getRadian2 = function (p1X, p1Y, p2X, p2Y) {
        var xdis = p2X - p1X;
        var ydis = p2Y - p1Y;
        return Math.atan2(ydis, xdis);
    };
    /**
     获取两点间距离
     @param p1
     @param p1
     * @returns {number}
     */
    MathUtils.prototype.getDistance = function (p1, p2) {
        var disX = p2.x - p1.x;
        var disY = p2.y - p1.y;
        var disQ = disX * disX + disY * disY;
        return Math.sqrt(disQ);
    };
    /**
     获取一个区间的随机数
     @param $from 最小值
     @param $end 最大值
     @returns {number}
     */
    MathUtils.prototype.limit = function ($from, $end) {
        $from = Math.min($from, $end);
        $end = Math.max($from, $end);
        var range = $end - $from;
        return $from + Math.random() * range;
    };
    /**
     获取一个区间的随机数(帧数)
     @param $from 最小值
     @param $end 最大值
     @returns {number}
     */
    MathUtils.prototype.limitInteger = function ($from, $end) {
        return Math.round(this.limit($from, $end));
    };
    /**
     在一个数组中随机获取一个元素
     @param arr 数组
     @returns {any} 随机出来的结果
     */
    MathUtils.prototype.randomArray = function (arr) {
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
    };
    /**
     点到直线的垂点
     */
    MathUtils.prototype.SagPoint = function (x, y, sp, ep) {
        var se = (sp.x - ep.x) * (sp.x - ep.x) + (sp.y - ep.y) * (sp.y - ep.y); //线段两点距离平方
        var p = (x - sp.x) * (ep.x - sp.x) + (y - sp.y) * (ep.y - sp.y); //向量点乘=|a|*|b|*cosA
        var r = p / se; //r即点到线段的投影长度与线段长度比
        var outx = sp.x + r * (ep.x - sp.x); //垂足x
        var outy = sp.y + r * (ep.y - sp.y); //垂足y
        var point = new cc.Vec3(outx, outy);
        return point;
    };
    /**
     求延长线上的某点，第一象限
     */
    MathUtils.prototype.extendedLinePoint = function (p1, p2, dis) {
        var lab = 0;
        var x;
        var y;
        // lab = Math.sqrt(Math.abs((p2.x - p1.x) * (p2.x - p1.x)) + Math.abs((p2.y - p1.y) * (p2.y - p1.y)));
        lab = this.getDistance(p1, p2);
        if (p2.x > p1.x && p2.y > p1.y) {
            x = (dis / lab) * Math.abs(p1.x - p2.x) + p2.x;
            y = (dis / lab) * Math.abs(p1.y - p2.y) + p2.y;
        }
        else if (p2.x < p1.x && p2.y > p1.y) {
            x = (-dis / lab) * Math.abs(p1.x - p2.x) + p2.x;
            y = (dis / lab) * Math.abs(p1.y - p2.y) + p2.y;
        }
        else if (p2.x < p1.x && p2.y < p1.y) {
            x = (-dis / lab) * Math.abs(p1.x - p2.x) + p2.x;
            y = (-dis / lab) * Math.abs(p1.y - p2.y) + p2.y;
        }
        else if (p2.x > p1.x && p2.y < p1.y) {
            x = (dis / lab) * Math.abs(p1.x - p2.x) + p2.x;
            y = (-dis / lab) * Math.abs(p1.y - p2.y) + p2.y;
        }
        var p = new cc.Vec3(x, y);
        return p;
    };
    /**
     获得两点的角度 1~4象限
     @param {cc.Vec3} p1
     @param {cc.Vec3} p2
     */
    MathUtils.prototype.getTwoPointsRadian1 = function (p1, p2) {
        var x = Math.abs(p1.x - p2.x);
        var y = Math.abs(p1.y - p2.y);
        var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        var cos = y / z;
        var radina = Math.acos(cos); //用反三角函数求弧度
        var angle = Math.floor(180 / (Math.PI / radina)); //将弧度转换成角度
        if (p2.x > p1.x && p2.y < p1.y) {
            //鼠标在第四象限
            angle = 180 - angle;
        }
        if (p2.x == p1.x && p2.y > p1.y) {
            //鼠标在y轴负方向上
            angle = 180;
        }
        if (p2.x > p1.x && p2.y == p1.y) {
            //鼠标在x轴正方向上
            angle = 90;
        }
        if (p2.x < p1.x && p2.y < p1.y) {
            //鼠标在第三象限
            angle = 180 + angle;
        }
        if (p2.x < p1.x && p2.y == p1.y) {
            //鼠标在x轴负方向
            angle = 270;
        }
        if (p2.x < p1.x && p2.y > p1.y) {
            //鼠标在第二象限
            angle = 360 - angle;
        }
        return angle;
    };
    /**
     获得两点的角度  无论正反旋转
     @param {cc.Vec3} p1
     @param {cc.Vec3} p2
     */
    MathUtils.prototype.getTwoPointsRadian2 = function (p1, p2) {
        var o = p1.x - p2.x;
        var a = p1.y - p2.y;
        var r = (Math.atan2(a, o) * -180) / Math.PI - 90;
        return r;
    };
    /**
     取两条直线的交点
     @param p1          // 直线1点1
     @param p2          // 直线1点2
     @param p3          // 直线2点1
     @param p4          // 直线2点2
     */
    MathUtils.prototype.fingCrossPoint = function (p1, p2, p3, p4) {
        var a1 = p2.y - p1.y;
        var b1 = p1.x - p2.x;
        var c1 = p1.x * p2.y - p2.x * p1.y;
        var a2 = p4.y - p3.y;
        var b2 = p3.x - p4.x;
        var c2 = p3.x * p4.y - p4.x * p3.y;
        var det = a1 * b2 - a2 * b1;
        if (det == 0) {
            return null;
        }
        var x = (c1 * b2 - c2 * b1) / det;
        var y = (a1 * c2 - a2 * c1) / det;
        var p = new cc.Vec3(Math.floor(x), Math.floor(y));
        return p;
    };
    /**
     * 用于浮点数相加  解决浮点数相加不准确问题
     * @param arg1
     * @param arg2
     */
    MathUtils.prototype.accAdd = function (arg1, arg2) {
        var r1 = 0, r2 = 0, m = 0, c = 0;
        try {
            r1 = arg1.toString().split('.')[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2));
        if (c > 0) {
            var cm = Math.pow(10, c);
            if (r1 > r2) {
                arg1 = Number(arg1.toString().replace('.', ''));
                arg2 = Number(arg2.toString().replace('.', '')) * cm;
            }
            else {
                arg1 = Number(arg1.toString().replace('.', '')) * cm;
                arg2 = Number(arg2.toString().replace('.', ''));
            }
        }
        else {
            arg1 = Number(arg1.toString().replace('.', ''));
            arg2 = Number(arg2.toString().replace('.', ''));
        }
        return (arg1 + arg2) / m;
    };
    /**
     * 浮点数相减
     * @param arg1
     * @param arg2
     */
    MathUtils.prototype.accSub = function (arg1, arg2) {
        var r1 = 0, r2 = 0, m = 0, n = 0;
        try {
            r1 = arg1.toString().split('.')[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
        n = r1 >= r2 ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    };
    /**
     * 浮点数相乘
     * @param arg1
     * @param arg2
     */
    MathUtils.prototype.accMul = function (arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try {
            m += s1.split('.')[1].length;
        }
        catch (e) { }
        try {
            m += s2.split('.')[1].length;
        }
        catch (e) { }
        return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
    };
    /**
     * 浮点数相除
     * @param arg1
     * @param arg2
     */
    MathUtils.prototype.accDiv = function (arg1, arg2) {
        var t1 = 0, t2 = 0, r1 = 0, r2 = 0;
        try {
            t1 = arg1.toString().split('.')[1].length;
        }
        catch (e) { }
        try {
            t2 = arg2.toString().split('.')[1].length;
        }
        catch (e) { }
        r1 = Number(arg1.toString().replace('.', ''));
        r2 = Number(arg2.toString().replace('.', ''));
        return (r1 / r2) * Math.pow(10, t2 - t1);
    };
    /**
     线段中点
     * @param {cc.Vec3} p1
     * @param {cc.Vec3} p2
     * @returns {cc.Vec3}
     * @memberof MathUtils
     */
    MathUtils.prototype.getCenterPosition = function (p1, p2) {
        var pos = cc.v3((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
        return pos;
    };
    return MathUtils;
}());
exports.MathUtils = MathUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxNYXRoVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFVSTtJQUFlLENBQUM7SUFQVCxxQkFBVyxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFJRDs7OztPQUlHO0lBQ0ksNEJBQVEsR0FBZixVQUFnQixNQUFjO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsS0FBYTtRQUMxQixPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSw4QkFBVSxHQUFqQixVQUFrQixHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVcsRUFBRSxHQUFXO1FBQ2hFLElBQUksSUFBSSxHQUFXLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDN0IsSUFBSSxJQUFJLEdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLCtCQUFXLEdBQWxCLFVBQW1CLEVBQVcsRUFBRSxFQUFXO1FBQ3ZDLElBQUksSUFBSSxHQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLElBQUksR0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENB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QUUsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQzVCLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRDthQUFNLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNuQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRDthQUFNLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNuQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ25EO2FBQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ25DLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksdUNBQW1CLEdBQTFCLFVBQTJCLEVBQVcsRUFBRSxFQUFXO1FBQy9DLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5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R0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQzdDO1FBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtRQUNkLElBQUk7WUFDQSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDN0M7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1FBQ2QsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0kscUNBQWlCLEdBQXhCLFVBQXlCLEVBQVcsRUFBRSxFQUFXO1FBQzdDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDTCxnQkFBQztBQUFELENBbFVBLEFBa1VDLElBQUE7QUFsVVksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWF0aFV0aWxzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTWF0aFV0aWxzO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1hdGhVdGlscygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIC8qKlxuICAgICDlvKfluqbliLbovazmjaLkuLrop5LluqblgLxcbiAgICAgQHBhcmFtIHJhZGlhbiDlvKfluqbliLZcbiAgICAgQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QW5nbGUocmFkaWFuOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKDE4MCAqIHJhZGlhbikgLyBNYXRoLlBJO1xuICAgIH1cblxuICAgIC8qKlxuICAgICDop5LluqblgLzovazmjaLkuLrlvKfluqbliLZcbiAgICAgQHBhcmFtIGFuZ2xlXG4gICAgICovXG4gICAgcHVibGljIGdldFJhZGlhbihhbmdsZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIChhbmdsZSAvIDE4MCkgKiBNYXRoLlBJO1xuICAgIH1cblxuICAgIC8qKlxuICAgICDojrflj5bkuKTngrnpl7TlvKfluqZcbiAgICAgQHBhcmFtIHAxWFxuICAgICBAcGFyYW0gcDFZXG4gICAgIEBwYXJhbSBwMlhcbiAgICAgQHBhcmFtIHAyWVxuICAgICBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRSYWRpYW4yKHAxWDogbnVtYmVyLCBwMVk6IG51bWJlciwgcDJYOiBudW1iZXIsIHAyWTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIHhkaXM6IG51bWJlciA9IHAyWCAtIHAxWDtcbiAgICAgICAgdmFyIHlkaXM6IG51bWJlciA9IHAyWSAtIHAxWTtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoeWRpcywgeGRpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOiOt+WPluS4pOeCuemXtOi3neemu1xuICAgICBAcGFyYW0gcDFcbiAgICAgQHBhcmFtIHAxXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RGlzdGFuY2UocDE6IGNjLlZlYzMsIHAyOiBjYy5WZWMzKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIGRpc1g6IG51bWJlciA9IHAyLnggLSBwMS54O1xuICAgICAgICB2YXIgZGlzWTogbnVtYmVyID0gcDIueSAtIHAxLnk7XG4gICAgICAgIHZhciBkaXNROiBudW1iZXIgPSBkaXNYICogZGlzWCArIGRpc1kgKiBkaXNZO1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGRpc1EpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICDojrflj5bkuIDkuKrljLrpl7TnmoTpmo/mnLrmlbBcbiAgICAgQHBhcmFtICRmcm9tIOacgOWwj+WAvFxuICAgICBAcGFyYW0gJGVuZCDmnIDlpKflgLxcbiAgICAgQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBwdWJsaWMgbGltaXQoJGZyb206IG51bWJlciwgJGVuZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgJGZyb20gPSBNYXRoLm1pbigkZnJvbSwgJGVuZCk7XG4gICAgICAgICRlbmQgPSBNYXRoLm1heCgkZnJvbSwgJGVuZCk7XG4gICAgICAgIHZhciByYW5nZTogbnVtYmVyID0gJGVuZCAtICRmcm9tO1xuICAgICAgICByZXR1cm4gJGZyb20gKyBNYXRoLnJhbmRvbSgpICogcmFuZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOiOt+WPluS4gOS4quWMuumXtOeahOmaj+acuuaVsCjluKfmlbApXG4gICAgIEBwYXJhbSAkZnJvbSDmnIDlsI/lgLxcbiAgICAgQHBhcmFtICRlbmQg5pyA5aSn5YC8XG4gICAgIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcHVibGljIGxpbWl0SW50ZWdlcigkZnJvbTogbnVtYmVyLCAkZW5kOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmxpbWl0KCRmcm9tLCAkZW5kKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOWcqOS4gOS4quaVsOe7hOS4remaj+acuuiOt+WPluS4gOS4quWFg+e0oFxuICAgICBAcGFyYW0gYXJyIOaVsOe7hFxuICAgICBAcmV0dXJucyB7YW55fSDpmo/mnLrlh7rmnaXnmoTnu5PmnpxcbiAgICAgKi9cbiAgICBwdWJsaWMgcmFuZG9tQXJyYXkoYXJyOiBBcnJheTxhbnk+KTogYW55IHtcbiAgICAgICAgdmFyIGluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGFycltpbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOeCueWIsOebtOe6v+eahOWegueCuVxuICAgICAqL1xuICAgIHB1YmxpYyBTYWdQb2ludCh4LCB5LCBzcCwgZXApOiBjYy5WZWMzIHtcbiAgICAgICAgdmFyIHNlOiBudW1iZXIgPSAoc3AueCAtIGVwLngpICogKHNwLnggLSBlcC54KSArIChzcC55IC0gZXAueSkgKiAoc3AueSAtIGVwLnkpOyAvL+e6v+auteS4pOeCuei3neemu+W5s+aWuVxuICAgICAgICB2YXIgcDogbnVtYmVyID0gKHggLSBzcC54KSAqIChlcC54IC0gc3AueCkgKyAoeSAtIHNwLnkpICogKGVwLnkgLSBzcC55KTsgLy/lkJHph4/ngrnkuZg9fGF8KnxifCpjb3NBXG4gICAgICAgIHZhciByOiBudW1iZXIgPSBwIC8gc2U7IC8vcuWNs+eCueWIsOe6v+auteeahOaKleW9semVv+W6puS4jue6v+autemVv+W6puavlFxuICAgICAgICB2YXIgb3V0eDogbnVtYmVyID0gc3AueCArIHIgKiAoZXAueCAtIHNwLngpOyAvL+Wegui2s3hcbiAgICAgICAgdmFyIG91dHk6IG51bWJlciA9IHNwLnkgKyByICogKGVwLnkgLSBzcC55KTsgLy/lnoLotrN5XG4gICAgICAgIHZhciBwb2ludCA9IG5ldyBjYy5WZWMzKG91dHgsIG91dHkpO1xuICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOaxguW7tumVv+e6v+S4iueahOafkOeCue+8jOesrOS4gOixoemZkFxuICAgICAqL1xuICAgIHB1YmxpYyBleHRlbmRlZExpbmVQb2ludChwMTogY2MuVmVjMywgcDI6IGNjLlZlYzMsIGRpczogbnVtYmVyKTogY2MuVmVjMyB7XG4gICAgICAgIHZhciBsYWIgPSAwO1xuICAgICAgICB2YXIgeDogbnVtYmVyO1xuICAgICAgICB2YXIgeTogbnVtYmVyO1xuICAgICAgICAvLyBsYWIgPSBNYXRoLnNxcnQoTWF0aC5hYnMoKHAyLnggLSBwMS54KSAqIChwMi54IC0gcDEueCkpICsgTWF0aC5hYnMoKHAyLnkgLSBwMS55KSAqIChwMi55IC0gcDEueSkpKTtcbiAgICAgICAgbGFiID0gdGhpcy5nZXREaXN0YW5jZShwMSwgcDIpO1xuICAgICAgICBpZiAocDIueCA+IHAxLnggJiYgcDIueSA+IHAxLnkpIHtcbiAgICAgICAgICAgIHggPSAoZGlzIC8gbGFiKSAqIE1hdGguYWJzKHAxLnggLSBwMi54KSArIHAyLng7XG4gICAgICAgICAgICB5ID0gKGRpcyAvIGxhYikgKiBNYXRoLmFicyhwMS55IC0gcDIueSkgKyBwMi55O1xuICAgICAgICB9IGVsc2UgaWYgKHAyLnggPCBwMS54ICYmIHAyLnkgPiBwMS55KSB7XG4gICAgICAgICAgICB4ID0gKC1kaXMgLyBsYWIpICogTWF0aC5hYnMocDEueCAtIHAyLngpICsgcDIueDtcbiAgICAgICAgICAgIHkgPSAoZGlzIC8gbGFiKSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSArIHAyLnk7XG4gICAgICAgIH0gZWxzZSBpZiAocDIueCA8IHAxLnggJiYgcDIueSA8IHAxLnkpIHtcbiAgICAgICAgICAgIHggPSAoLWRpcyAvIGxhYikgKiBNYXRoLmFicyhwMS54IC0gcDIueCkgKyBwMi54O1xuICAgICAgICAgICAgeSA9ICgtZGlzIC8gbGFiKSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSArIHAyLnk7XG4gICAgICAgIH0gZWxzZSBpZiAocDIueCA+IHAxLnggJiYgcDIueSA8IHAxLnkpIHtcbiAgICAgICAgICAgIHggPSAoZGlzIC8gbGFiKSAqIE1hdGguYWJzKHAxLnggLSBwMi54KSArIHAyLng7XG4gICAgICAgICAgICB5ID0gKC1kaXMgLyBsYWIpICogTWF0aC5hYnMocDEueSAtIHAyLnkpICsgcDIueTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcCA9IG5ldyBjYy5WZWMzKHgsIHkpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAg6I635b6X5Lik54K555qE6KeS5bqmIDF+NOixoemZkFxuICAgICBAcGFyYW0ge2NjLlZlYzN9IHAxXG4gICAgIEBwYXJhbSB7Y2MuVmVjM30gcDIgXG4gICAgICovXG4gICAgcHVibGljIGdldFR3b1BvaW50c1JhZGlhbjEocDE6IGNjLlZlYzMsIHAyOiBjYy5WZWMzKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIHggPSBNYXRoLmFicyhwMS54IC0gcDIueCk7XG4gICAgICAgIHZhciB5ID0gTWF0aC5hYnMocDEueSAtIHAyLnkpO1xuICAgICAgICB2YXIgeiA9IE1hdGguc3FydChNYXRoLnBvdyh4LCAyKSArIE1hdGgucG93KHksIDIpKTtcbiAgICAgICAgdmFyIGNvcyA9IHkgLyB6O1xuICAgICAgICB2YXIgcmFkaW5hID0gTWF0aC5hY29zKGNvcyk7IC8v55So5Y+N5LiJ6KeS5Ye95pWw5rGC5byn5bqmXG4gICAgICAgIHZhciBhbmdsZSA9IE1hdGguZmxvb3IoMTgwIC8gKE1hdGguUEkgLyByYWRpbmEpKTsgLy/lsIblvKfluqbovazmjaLmiJDop5LluqZcblxuICAgICAgICBpZiAocDIueCA+IHAxLnggJiYgcDIueSA8IHAxLnkpIHtcbiAgICAgICAgICAgIC8v6byg5qCH5Zyo56ys5Zub6LGh6ZmQXG4gICAgICAgICAgICBhbmdsZSA9IDE4MCAtIGFuZ2xlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHAyLnggPT0gcDEueCAmJiBwMi55ID4gcDEueSkge1xuICAgICAgICAgICAgLy/pvKDmoIflnKh56L206LSf5pa55ZCR5LiKXG4gICAgICAgICAgICBhbmdsZSA9IDE4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwMi54ID4gcDEueCAmJiBwMi55ID09IHAxLnkpIHtcbiAgICAgICAgICAgIC8v6byg5qCH5ZyoeOi9tOato+aWueWQkeS4ilxuICAgICAgICAgICAgYW5nbGUgPSA5MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwMi54IDwgcDEueCAmJiBwMi55IDwgcDEueSkge1xuICAgICAgICAgICAgLy/pvKDmoIflnKjnrKzkuInosaHpmZBcbiAgICAgICAgICAgIGFuZ2xlID0gMTgwICsgYW5nbGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocDIueCA8IHAxLnggJiYgcDIueSA9PSBwMS55KSB7XG4gICAgICAgICAgICAvL+m8oOagh+WcqHjovbTotJ/mlrnlkJFcbiAgICAgICAgICAgIGFuZ2xlID0gMjcwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHAyLnggPCBwMS54ICYmIHAyLnkgPiBwMS55KSB7XG4gICAgICAgICAgICAvL+m8oOagh+WcqOesrOS6jOixoemZkFxuICAgICAgICAgICAgYW5nbGUgPSAzNjAgLSBhbmdsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYW5nbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOiOt+W+l+S4pOeCueeahOinkuW6piAg5peg6K665q2j5Y+N5peL6L2sXG4gICAgIEBwYXJhbSB7Y2MuVmVjM30gcDFcbiAgICAgQHBhcmFtIHtjYy5WZWMzfSBwMiBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0VHdvUG9pbnRzUmFkaWFuMihwMTogY2MuVmVjMywgcDI6IGNjLlZlYzMpOiBudW1iZXIge1xuICAgICAgICBsZXQgbyA9IHAxLnggLSBwMi54O1xuICAgICAgICBsZXQgYSA9IHAxLnkgLSBwMi55O1xuICAgICAgICBsZXQgciA9IChNYXRoLmF0YW4yKGEsIG8pICogLTE4MCkgLyBNYXRoLlBJIC0gOTA7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8qKlxuICAgICDlj5bkuKTmnaHnm7Tnur/nmoTkuqTngrlcbiAgICAgQHBhcmFtIHAxICAgICAgICAgIC8vIOebtOe6vzHngrkxXG4gICAgIEBwYXJhbSBwMiAgICAgICAgICAvLyDnm7Tnur8x54K5MlxuICAgICBAcGFyYW0gcDMgICAgICAgICAgLy8g55u057q/MueCuTFcbiAgICAgQHBhcmFtIHA0ICAgICAgICAgIC8vIOebtOe6vzLngrkyXG4gICAgICovXG4gICAgcHVibGljIGZpbmdDcm9zc1BvaW50KHAxOiBjYy5WZWMzLCBwMjogY2MuVmVjMywgcDM6IGNjLlZlYzMsIHA0OiBjYy5WZWMzKTogY2MuVmVjMyB7XG4gICAgICAgIHZhciBhMSA9IHAyLnkgLSBwMS55O1xuICAgICAgICB2YXIgYjEgPSBwMS54IC0gcDIueDtcbiAgICAgICAgdmFyIGMxID0gcDEueCAqIHAyLnkgLSBwMi54ICogcDEueTtcbiAgICAgICAgdmFyIGEyID0gcDQueSAtIHAzLnk7XG4gICAgICAgIHZhciBiMiA9IHAzLnggLSBwNC54O1xuICAgICAgICB2YXIgYzIgPSBwMy54ICogcDQueSAtIHA0LnggKiBwMy55O1xuICAgICAgICB2YXIgZGV0ID0gYTEgKiBiMiAtIGEyICogYjE7XG4gICAgICAgIGlmIChkZXQgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHggPSAoYzEgKiBiMiAtIGMyICogYjEpIC8gZGV0O1xuICAgICAgICB2YXIgeSA9IChhMSAqIGMyIC0gYTIgKiBjMSkgLyBkZXQ7XG4gICAgICAgIHZhciBwOiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoTWF0aC5mbG9vcih4KSwgTWF0aC5mbG9vcih5KSk7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeUqOS6jua1rueCueaVsOebuOWKoCAg6Kej5Yaz5rWu54K55pWw55u45Yqg5LiN5YeG56Gu6Zeu6aKYXG4gICAgICogQHBhcmFtIGFyZzFcbiAgICAgKiBAcGFyYW0gYXJnMlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2NBZGQoYXJnMTogbnVtYmVyLCBhcmcyOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHIxID0gMCxcbiAgICAgICAgICAgIHIyID0gMCxcbiAgICAgICAgICAgIG0gPSAwLFxuICAgICAgICAgICAgYyA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByMSA9IGFyZzEudG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdLmxlbmd0aDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcjEgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByMiA9IGFyZzIudG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdLmxlbmd0aDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcjIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGMgPSBNYXRoLmFicyhyMSAtIHIyKTtcbiAgICAgICAgbSA9IE1hdGgucG93KDEwLCBNYXRoLm1heChyMSwgcjIpKTtcbiAgICAgICAgaWYgKGMgPiAwKSB7XG4gICAgICAgICAgICB2YXIgY20gPSBNYXRoLnBvdygxMCwgYyk7XG4gICAgICAgICAgICBpZiAocjEgPiByMikge1xuICAgICAgICAgICAgICAgIGFyZzEgPSBOdW1iZXIoYXJnMS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpO1xuICAgICAgICAgICAgICAgIGFyZzIgPSBOdW1iZXIoYXJnMi50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpICogY207XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyZzEgPSBOdW1iZXIoYXJnMS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpICogY207XG4gICAgICAgICAgICAgICAgYXJnMiA9IE51bWJlcihhcmcyLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmcxID0gTnVtYmVyKGFyZzEudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJycpKTtcbiAgICAgICAgICAgIGFyZzIgPSBOdW1iZXIoYXJnMi50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYXJnMSArIGFyZzIpIC8gbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmta7ngrnmlbDnm7jlh49cbiAgICAgKiBAcGFyYW0gYXJnMVxuICAgICAqIEBwYXJhbSBhcmcyXG4gICAgICovXG4gICAgcHVibGljIGFjY1N1YihhcmcxOiBudW1iZXIsIGFyZzI6IG51bWJlcikge1xuICAgICAgICB2YXIgcjEgPSAwLFxuICAgICAgICAgICAgcjIgPSAwLFxuICAgICAgICAgICAgbSA9IDAsXG4gICAgICAgICAgICBuID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHIxID0gYXJnMS50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByMSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHIyID0gYXJnMi50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByMiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgbSA9IE1hdGgucG93KDEwLCBNYXRoLm1heChyMSwgcjIpKTsgLy9sYXN0IG1vZGlmeSBieSBkZWVrYSAvL+WKqOaAgeaOp+WItueyvuW6pumVv+W6plxuICAgICAgICBuID0gcjEgPj0gcjIgPyByMSA6IHIyO1xuICAgICAgICByZXR1cm4gKChhcmcxICogbSAtIGFyZzIgKiBtKSAvIG0pLnRvRml4ZWQobik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5rWu54K55pWw55u45LmYXG4gICAgICogQHBhcmFtIGFyZzFcbiAgICAgKiBAcGFyYW0gYXJnMlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2NNdWwoYXJnMTogbnVtYmVyLCBhcmcyOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIG0gPSAwLFxuICAgICAgICAgICAgczEgPSBhcmcxLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBzMiA9IGFyZzIudG9TdHJpbmcoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG0gKz0gczEuc3BsaXQoJy4nKVsxXS5sZW5ndGg7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtICs9IHMyLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICByZXR1cm4gKE51bWJlcihzMS5yZXBsYWNlKCcuJywgJycpKSAqIE51bWJlcihzMi5yZXBsYWNlKCcuJywgJycpKSkgLyBNYXRoLnBvdygxMCwgbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5rWu54K55pWw55u46ZmkXG4gICAgICogQHBhcmFtIGFyZzFcbiAgICAgKiBAcGFyYW0gYXJnMlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2NEaXYoYXJnMTogbnVtYmVyLCBhcmcyOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHQxID0gMCxcbiAgICAgICAgICAgIHQyID0gMCxcbiAgICAgICAgICAgIHIxID0gMCxcbiAgICAgICAgICAgIHIyID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHQxID0gYXJnMS50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdDIgPSBhcmcyLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXS5sZW5ndGg7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHIxID0gTnVtYmVyKGFyZzEudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJycpKTtcbiAgICAgICAgcjIgPSBOdW1iZXIoYXJnMi50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpO1xuICAgICAgICByZXR1cm4gKHIxIC8gcjIpICogTWF0aC5wb3coMTAsIHQyIC0gdDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICDnur/mrrXkuK3ngrlcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzN9IHAxXG4gICAgICogQHBhcmFtIHtjYy5WZWMzfSBwMlxuICAgICAqIEByZXR1cm5zIHtjYy5WZWMzfVxuICAgICAqIEBtZW1iZXJvZiBNYXRoVXRpbHNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q2VudGVyUG9zaXRpb24ocDE6IGNjLlZlYzMsIHAyOiBjYy5WZWMzKTogY2MuVmVjMyB7XG4gICAgICAgIGxldCBwb3MgPSBjYy52MygocDEueCArIHAyLngpIC8gMiwgKHAxLnkgKyBwMi55KSAvIDIpO1xuICAgICAgICByZXR1cm4gcG9zO1xuICAgIH1cbn1cbiJdfQ==
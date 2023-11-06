
(function () {
var scripts = [{"deps":{"./assets/game/scripts/SkeletonExt":3,"./assets/frame/scripts/Utils/HitTest":8,"./assets/frame/scripts/Data/FrameConstValue":9,"./assets/frame/scripts/UI/AdaptiveScreen":13,"./assets/frame/scripts/Manager/ListenerManager":14,"./assets/frame/scripts/SDK/GameMsg":16,"./assets/frame/scripts/UI/BindNode":21,"./assets/game/scripts/Data/EventType":23,"./assets/frame/scripts/UI/Item/Tip":25,"./assets/frame/scripts/Utils/Tools":35,"./assets/frame/scripts/Utils/BoundingBoxHelp":39,"./assets/frame/scripts/Data/FrameMsgType":40,"./assets/frame/scripts/Utils/MathUtils":41,"./assets/game/scripts/Manager/GameManager":42,"./assets/game/scripts/Data/CustomSyncData":45,"./assets/game/scripts/Data/ConstValue":46,"./assets/game/scripts/Manager/EditorManager":48,"./assets/frame/scripts/Data/FrameSyncData":49,"./assets/game/scripts/UI/Item/SoundConfig":50,"./assets/frame/scripts/Manager/ReportManager":2,"./assets/frame/scripts/UI/Item/MaskRecover":1,"./assets/frame/scripts/Http/NetWork":4,"./assets/frame/scripts/SDK/T2M":6,"./assets/frame/scripts/Manager/SyncDataManager":10,"./assets/frame/scripts/Manager/SoundManager":11,"./assets/frame/scripts/Manager/UIManager":12,"./assets/frame/scripts/UI/BaseFrameUI":15,"./assets/game/scripts/UI/Item/GameUI":5,"./assets/frame/scripts/UI/GameMain":17,"./assets/frame/scripts/UI/BaseUI":18,"./assets/frame/scripts/UI/Panel/LoadingUI":7,"./assets/frame/scripts/Utils/AudioPlayExtension":29,"./assets/frame/scripts/Utils/UIHelp":31,"./assets/frame/scripts/Utils/BoundingBoxDemo":37,"./assets/frame/scripts/UI/Item/TitleNode":19,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":20,"./assets/frame/scripts/UI/Item/MaskGlobal":22,"./assets/frame/scripts/UI/Item/replayBtn":24,"./assets/frame/scripts/UI/Panel/ErrorPanel":26,"./assets/frame/scripts/UI/Panel/TipUI":28,"./assets/frame/scripts/UI/Panel/BaseGamePanel":27,"./assets/frame/scripts/UI/Panel/SubmissionPanel":30,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":32,"./assets/frame/scripts/UI/Panel/StarCount":33,"./assets/frame/scripts/UI/Panel/OverTips":34,"./assets/frame/scripts/UI/Panel/AffirmTips":36,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":38,"./assets/game/scripts/UI/panel/TeacherPanel":43,"./assets/game/scripts/UI/Components/ButtonSync":44,"./assets/game/scripts/UI/panel/GamePanel":47},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Data/FrameMsgType":40,"../../Manager/UIManager":12,"../../Manager/ListenerManager":14,"../BindNode":21},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":48,"../SDK/GameMsg":16,"../../../game/scripts/Data/ConstValue":46},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{"../../../game/scripts/Data/ConstValue":46,"../Manager/UIManager":12,"../SDK/GameMsg":16,"../Utils/UIHelp":31},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":14,"../../Data/EventType":23,"../../../../frame/scripts/Manager/SyncDataManager":10,"../../Manager/EditorManager":48},"path":"preview-scripts/assets/game/scripts/UI/Item/GameUI.js"},{"deps":{"../Data/FrameMsgType":40,"../Manager/SyncDataManager":10,"../Manager/ListenerManager":14,"../Http/NetWork":4,"./GameMsg":16,"../Utils/UIHelp":31},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":46,"../../../../game/scripts/UI/panel/GamePanel":47,"../../../../game/scripts/UI/panel/TeacherPanel":43,"../../Http/NetWork":4,"../../SDK/GameMsg":16,"../../Manager/SoundManager":11,"../../Manager/UIManager":12,"../BaseFrameUI":15},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{"../../../frame/scripts/Data/FrameSyncData":49,"../../../game/scripts/Data/CustomSyncData":45,"../../../frame/scripts/Manager/ReportManager":2},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"../Data/FrameConstValue":9,"../Data/FrameMsgType":40,"../SDK/GameMsg":16,"../Http/NetWork":4,"./ListenerManager":14,"./UIManager":12},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{"../UI/BaseUI":18},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"./BaseUI":18,"../Data/FrameConstValue":9},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":48,"../Data/FrameMsgType":40,"../Manager/ListenerManager":14,"../Http/NetWork":4,"../Manager/ReportManager":2,"../Manager/SoundManager":11,"../Manager/SyncDataManager":10,"../Manager/UIManager":12,"../SDK/GameMsg":16,"../SDK/T2M":6,"../Utils/UIHelp":31},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../Data/FrameConstValue":9,"./BindNode":21,"../Manager/ListenerManager":14},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{"../../Manager/ListenerManager":14,"../../Data/FrameMsgType":40},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{"../BindNode":21,"../../Manager/ListenerManager":14,"../../Data/FrameMsgType":40},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../../Manager/ListenerManager":14,"../../Utils/UIHelp":31,"../../Manager/UIManager":12,"../../Data/FrameMsgType":40,"../BindNode":21},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{"../../Data/FrameMsgType":40,"../../SDK/T2M":6},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../../Utils/UIHelp":31,"./../../Manager/SoundManager":11,"./../BaseFrameUI":15,"./../../SDK/GameMsg":16},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"../../../../game/scripts/Manager/EditorManager":48,"../../../../game/scripts/Data/ConstValue":46,"../../Data/FrameMsgType":40,"../../Manager/ListenerManager":14,"../../Http/NetWork":4,"../../Manager/ReportManager":2,"../../Manager/SoundManager":11,"../../Manager/UIManager":12,"../../SDK/GameMsg":16,"../../Manager/SyncDataManager":10,"../../SDK/T2M":6,"../../Utils/UIHelp":31,"../BaseUI":18},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"../Item/Tip":25,"../BaseFrameUI":15},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"./../Manager/SoundManager":11},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{"../../Http/NetWork":4,"../BaseFrameUI":15,"../../Utils/UIHelp":31,"../../../../game/scripts/Manager/EditorManager":48,"../../../../game/scripts/Data/ConstValue":46},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"../../../game/scripts/UI/panel/GamePanel":47,"../Manager/ListenerManager":14,"../Data/FrameMsgType":40,"../UI/Panel/AffirmTips":36,"../../../game/scripts/UI/panel/TeacherPanel":43,"../Manager/UIManager":12,"../UI/Panel/ErrorPanel":26,"../UI/Panel/SubmissionPanel":30,"../UI/Panel/TipUI":28,"../UI/Panel/StarCount":33,"../UI/Panel/UploadAndReturnPanel":38,"../UI/Panel/OverTips":34},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":46,"../../Utils/UIHelp":31,"../../Http/NetWork":4,"../../../../game/scripts/Manager/EditorManager":48,"../BaseUI":18},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{"./../../Manager/SoundManager":11,"../../Utils/Tools":35,"../../Utils/UIHelp":31,"../BaseFrameUI":15,"../../../../game/scripts/Manager/EditorManager":48,"../../../../game/scripts/Data/ConstValue":46,"../../Manager/ReportManager":2},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"../../Utils/Tools":35,"./../../Manager/SoundManager":11,"../BaseFrameUI":15,"../../SDK/T2M":6,"../../Manager/UIManager":12,"../../Utils/UIHelp":31,"../../Data/FrameMsgType":40,"../../../../game/scripts/Data/ConstValue":46},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{"../../SDK/T2M":6,"../../Data/FrameMsgType":40,"../../Utils/UIHelp":31,"../BaseFrameUI":15},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{"./BoundingBoxHelp":39},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{"./../../Manager/ListenerManager":14,"../BaseFrameUI":15,"../../Utils/UIHelp":31,"../../Data/FrameMsgType":40,"../../Manager/SoundManager":11,"../../../../game/scripts/Manager/EditorManager":48,"../../Manager/ReportManager":2,"../../SDK/T2M":6},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{"../../../../frame/scripts/Data/FrameMsgType":40,"../../../../frame/scripts/Manager/ReportManager":2,"../../../../frame/scripts/Manager/ListenerManager":14,"../../../../frame/scripts/Manager/UIManager":12,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":32,"../../Data/ConstValue":46,"../../Manager/EditorManager":48,"../../../../frame/scripts/Utils/UIHelp":31,"./GamePanel":47},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":6},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":14,"../../Data/EventType":23,"../../../../frame/scripts/UI/Panel/BaseGamePanel":27},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    

(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/ConstValue":1,"./assets/game/scripts/Manager/GameManager":48,"./assets/game/scripts/Manager/EditorManager":44,"./assets/game/scripts/SkeletonExt":4,"./assets/game/scripts/UI/Item/SoundConfig":49,"./assets/game/scripts/UI/Item/OptionKuang":43,"./assets/game/scripts/UI/Item/GameUI":50,"./assets/game/scripts/UI/panel/TeacherPanel":46,"./assets/game/scripts/UI/panel/GamePanel":51,"./assets/game/scripts/UI/Components/ButtonSync":45,"./assets/game/scripts/Data/EventType":36,"./assets/frame/scripts/Data/FrameConstValue":11,"./assets/frame/scripts/Http/NetWork":6,"./assets/frame/scripts/Manager/ListenerManager":41,"./assets/frame/scripts/Manager/SyncDataManager":12,"./assets/frame/scripts/Manager/SoundManager":10,"./assets/frame/scripts/Manager/UIManager":3,"./assets/frame/scripts/Manager/ReportManager":42,"./assets/frame/scripts/SDK/T2M":7,"./assets/frame/scripts/SDK/GameMsg":16,"./assets/frame/scripts/UI/AdaptiveScreen":22,"./assets/frame/scripts/UI/BaseUI":13,"./assets/frame/scripts/UI/BindNode":18,"./assets/frame/scripts/UI/GameMain":17,"./assets/frame/scripts/UI/BaseFrameUI":15,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":23,"./assets/frame/scripts/UI/Item/MaskRecover":2,"./assets/frame/scripts/UI/Item/TitleNode":20,"./assets/frame/scripts/UI/Item/Tip":26,"./assets/frame/scripts/UI/Item/replayBtn":25,"./assets/frame/scripts/UI/Item/MaskGlobal":19,"./assets/frame/scripts/UI/Panel/AffirmTips":35,"./assets/frame/scripts/UI/Panel/ErrorPanel":8,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":24,"./assets/frame/scripts/UI/Panel/OverTips":27,"./assets/frame/scripts/UI/Panel/StarCount":32,"./assets/frame/scripts/UI/Panel/LoadingUI":28,"./assets/frame/scripts/UI/Panel/SubmissionPanel":29,"./assets/frame/scripts/UI/Panel/TipUI":31,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":33,"./assets/frame/scripts/UI/Panel/BaseGamePanel":21,"./assets/frame/scripts/Utils/BoundingBoxHelp":34,"./assets/frame/scripts/Utils/AudioPlayExtension":39,"./assets/frame/scripts/Utils/UIHelp":40,"./assets/frame/scripts/Utils/Tools":38,"./assets/frame/scripts/Utils/HitTest":37,"./assets/frame/scripts/Utils/MathUtils":30,"./assets/frame/scripts/Utils/BoundingBoxDemo":9,"./assets/frame/scripts/Data/FrameSyncData":5,"./assets/frame/scripts/Data/FrameMsgType":14,"./assets/game/scripts/Data/CustomSyncData":47},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"../../Data/FrameMsgType":14,"../BindNode":18,"../../Manager/ListenerManager":41,"../../Manager/UIManager":3},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{"../UI/BaseUI":13},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{"../Manager/UIManager":3,"../Utils/UIHelp":40,"../SDK/GameMsg":16,"../../../game/scripts/Data/ConstValue":1},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{"../Http/NetWork":6,"../Data/FrameMsgType":14,"../Manager/SyncDataManager":12,"./GameMsg":16,"../Manager/ListenerManager":41,"../Utils/UIHelp":40},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"../../Utils/UIHelp":40,"./../../Manager/SoundManager":10,"./../BaseFrameUI":15,"./../../SDK/GameMsg":16},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"./BoundingBoxHelp":34},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{"../Http/NetWork":6,"./ListenerManager":41,"../Data/FrameMsgType":14,"../Data/FrameConstValue":11,"../SDK/GameMsg":16,"./UIManager":3},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{"../../../frame/scripts/Data/FrameSyncData":5,"../../../frame/scripts/Manager/ReportManager":42,"../../../game/scripts/Data/CustomSyncData":47},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"./BindNode":18,"../Data/FrameConstValue":11,"../Manager/ListenerManager":41},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{"./BaseUI":13,"../Data/FrameConstValue":11},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{"../Data/FrameMsgType":14,"../../../game/scripts/Manager/EditorManager":44,"../Manager/ReportManager":42,"../Manager/ListenerManager":41,"../Http/NetWork":6,"../Manager/UIManager":3,"../Manager/SyncDataManager":12,"../SDK/GameMsg":16,"../Manager/SoundManager":10,"../SDK/T2M":7,"../Utils/UIHelp":40},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../../Data/FrameMsgType":14,"../../Manager/ListenerManager":41,"../../Utils/UIHelp":40,"../BindNode":18,"../../Manager/UIManager":3},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{"../../Data/FrameMsgType":14,"../../Manager/ListenerManager":41},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":1,"../../../../game/scripts/Manager/EditorManager":44,"../../Data/FrameMsgType":14,"../../Http/NetWork":6,"../../Manager/ListenerManager":41,"../../Manager/ReportManager":42,"../../Manager/SyncDataManager":12,"../../Manager/SoundManager":10,"../../Manager/UIManager":3,"../../SDK/T2M":7,"../BaseUI":13,"../../SDK/GameMsg":16,"../../Utils/UIHelp":40},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{"../../Manager/ListenerManager":41,"../../Data/FrameMsgType":14,"../BindNode":18},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{"../../../../game/scripts/Manager/EditorManager":44,"../../Utils/UIHelp":40,"../../../../game/scripts/Data/ConstValue":1,"../../Http/NetWork":6,"../BaseUI":13},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{"../../Data/FrameMsgType":14,"../../SDK/T2M":7},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"./../../Manager/SoundManager":10,"../../Utils/UIHelp":40,"../../Utils/Tools":38,"../../SDK/T2M":7,"../BaseFrameUI":15,"../../Manager/UIManager":3,"../../Data/FrameMsgType":14,"../../../../game/scripts/Data/ConstValue":1},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":1,"../../../../game/scripts/UI/panel/TeacherPanel":46,"../../Http/NetWork":6,"../../../../game/scripts/UI/panel/GamePanel":51,"../BaseFrameUI":15,"../../Manager/SoundManager":10,"../../Manager/UIManager":3,"../../SDK/GameMsg":16},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":1,"../../Http/NetWork":6,"../BaseFrameUI":15,"../../Utils/UIHelp":40,"../../../../game/scripts/Manager/EditorManager":44},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{"../Item/Tip":26,"../BaseFrameUI":15},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"./../../Manager/SoundManager":10,"../BaseFrameUI":15,"../../Manager/ReportManager":42,"../../Utils/Tools":38,"../../../../game/scripts/Data/ConstValue":1,"../../../../game/scripts/Manager/EditorManager":44,"../../Utils/UIHelp":40},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"./../../Manager/ListenerManager":41,"../../Data/FrameMsgType":14,"../../Manager/SoundManager":10,"../../Utils/UIHelp":40,"../BaseFrameUI":15,"../../Manager/ReportManager":42,"../../SDK/T2M":7,"../../../../game/scripts/Manager/EditorManager":44},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{"../../Utils/UIHelp":40,"../../SDK/T2M":7,"../BaseFrameUI":15,"../../Data/FrameMsgType":14},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{"./../Manager/SoundManager":10},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{"../Data/FrameMsgType":14,"../../../game/scripts/UI/panel/GamePanel":51,"../Manager/ListenerManager":41,"../../../game/scripts/UI/panel/TeacherPanel":46,"../UI/Panel/AffirmTips":35,"../Manager/UIManager":3,"../UI/Panel/StarCount":32,"../UI/Panel/ErrorPanel":8,"../UI/Panel/OverTips":27,"../UI/Panel/TipUI":31,"../UI/Panel/UploadAndReturnPanel":33,"../UI/Panel/SubmissionPanel":29},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../../../game/scripts/Data/ConstValue":1,"../SDK/GameMsg":16,"../../../game/scripts/Manager/EditorManager":44},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{"../../../../frame/scripts/Utils/UIHelp":40,"../../../../frame/scripts/Manager/ListenerManager":41,"../../../../frame/scripts/Manager/SoundManager":10,"../../Data/EventType":36,"./SoundConfig":49},"path":"preview-scripts/assets/game/scripts/UI/Item/OptionKuang.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":7},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{"./GamePanel":51,"../../Data/ConstValue":1,"../../Manager/EditorManager":44,"../../../../frame/scripts/Manager/ListenerManager":41,"../../../../frame/scripts/Data/FrameMsgType":14,"../../../../frame/scripts/Utils/UIHelp":40,"../../../../frame/scripts/Manager/UIManager":3,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":24,"../../../../frame/scripts/Manager/ReportManager":42},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{"./OptionKuang":43,"./SoundConfig":49,"../../Data/EventType":36,"../../Manager/EditorManager":44,"../../../../frame/scripts/Manager/SoundManager":10,"../../../../frame/scripts/Http/NetWork":6,"../../../../frame/scripts/Utils/Tools":38,"../../../../frame/scripts/Utils/UIHelp":40,"../../../../frame/scripts/Manager/SyncDataManager":12,"../../../../frame/scripts/SDK/T2M":7,"../../../../frame/scripts/Manager/ListenerManager":41},"path":"preview-scripts/assets/game/scripts/UI/Item/GameUI.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":41,"../../../../frame/scripts/Manager/SyncDataManager":12,"../../../../frame/scripts/UI/Panel/BaseGamePanel":21,"../../Data/EventType":36},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"}];
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
    
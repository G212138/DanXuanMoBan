
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/EventType":1,"./assets/game/scripts/SkeletonExt":4,"./assets/frame/scripts/Data/FrameConstValue":7,"./assets/frame/scripts/Utils/BoundingBoxHelp":9,"./assets/frame/scripts/UI/AdaptiveScreen":11,"./assets/frame/scripts/SDK/GameMsg":12,"./assets/frame/scripts/Data/FrameMsgType":13,"./assets/frame/scripts/UI/BindNode":17,"./assets/frame/scripts/Manager/ListenerManager":19,"./assets/frame/scripts/UI/Item/Tip":26,"./assets/frame/scripts/Data/FrameSyncData":28,"./assets/frame/scripts/Utils/Tools":29,"./assets/game/scripts/Data/CustomSyncData":36,"./assets/frame/scripts/Utils/HitTest":41,"./assets/frame/scripts/Utils/MathUtils":42,"./assets/game/scripts/Manager/GameManager":45,"./assets/game/scripts/UI/Item/SoundConfig":47,"./assets/game/scripts/Manager/EditorManager":49,"./assets/game/scripts/Data/ConstValue":50,"./assets/frame/scripts/Manager/UIManager":3,"./assets/frame/scripts/UI/Item/MaskGlobal":2,"./assets/frame/scripts/Http/NetWork":5,"./assets/frame/scripts/SDK/T2M":6,"./assets/frame/scripts/Manager/ReportManager":10,"./assets/frame/scripts/UI/BaseFrameUI":14,"./assets/frame/scripts/UI/GameMain":15,"./assets/frame/scripts/UI/BaseUI":16,"./assets/frame/scripts/UI/Panel/LoadingUI":8,"./assets/frame/scripts/Utils/BoundingBoxDemo":30,"./assets/frame/scripts/Manager/SoundManager":32,"./assets/frame/scripts/Manager/SyncDataManager":33,"./assets/frame/scripts/Utils/AudioPlayExtension":39,"./assets/frame/scripts/Utils/UIHelp":40,"./assets/frame/scripts/UI/Item/TitleNode":18,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":20,"./assets/frame/scripts/UI/Item/replayBtn":22,"./assets/frame/scripts/UI/Panel/ErrorPanel":21,"./assets/frame/scripts/UI/Item/MaskRecover":23,"./assets/frame/scripts/UI/Panel/SubmissionPanel":24,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":25,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":27,"./assets/frame/scripts/UI/Panel/StarCount":31,"./assets/frame/scripts/UI/Panel/BaseGamePanel":34,"./assets/frame/scripts/UI/Panel/TipUI":35,"./assets/frame/scripts/UI/Panel/AffirmTips":37,"./assets/frame/scripts/UI/Panel/OverTips":38,"./assets/game/scripts/UI/Item/GameUI":43,"./assets/game/scripts/UI/panel/GamePanel":44,"./assets/game/scripts/UI/Components/ButtonSync":46,"./assets/game/scripts/UI/panel/TeacherPanel":48,"./assets/game/scripts/UI/Item/OptionKuang":51},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{"../../Manager/ListenerManager":19,"../../Manager/UIManager":3,"../../Data/FrameMsgType":13,"../BindNode":17,"../../Utils/UIHelp":40},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{"../UI/BaseUI":16},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{"../../../game/scripts/Data/ConstValue":50,"../SDK/GameMsg":12,"../Manager/UIManager":3,"../Utils/UIHelp":40},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{"../Data/FrameMsgType":13,"../Http/NetWork":5,"./GameMsg":12,"../Utils/UIHelp":40,"../Manager/SyncDataManager":33,"../Manager/ListenerManager":19},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":50,"../../Manager/SoundManager":32,"../../Http/NetWork":5,"../../../../game/scripts/UI/panel/TeacherPanel":48,"../../../../game/scripts/UI/panel/GamePanel":44,"../../SDK/GameMsg":12,"../BaseFrameUI":14,"../../Manager/UIManager":3},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{"../../../game/scripts/Data/ConstValue":50,"../SDK/GameMsg":12,"../../../game/scripts/Manager/EditorManager":49},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{"../Data/FrameConstValue":7,"./BaseUI":16},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{"../Data/FrameMsgType":13,"../Http/NetWork":5,"../Manager/SoundManager":32,"../Manager/ListenerManager":19,"../Manager/UIManager":3,"../Manager/ReportManager":10,"../../../game/scripts/Manager/EditorManager":49,"../SDK/T2M":6,"../Utils/UIHelp":40,"../SDK/GameMsg":12,"../Manager/SyncDataManager":33},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../Data/FrameConstValue":7,"./BindNode":17,"../Manager/ListenerManager":19},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../../Manager/ListenerManager":19,"../../Data/FrameMsgType":13},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../../Data/FrameMsgType":13,"../../Manager/ListenerManager":19,"../BindNode":17},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{"../../Utils/UIHelp":40,"./../../Manager/SoundManager":32,"./../../SDK/GameMsg":12,"./../BaseFrameUI":14},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{"../../SDK/T2M":6,"../../Data/FrameMsgType":13},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../../Manager/ListenerManager":19,"../../Data/FrameMsgType":13,"../../Manager/UIManager":3,"../BindNode":17},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{"../BaseFrameUI":14,"../../Utils/UIHelp":40,"../../../../game/scripts/Data/ConstValue":50,"../../Http/NetWork":5,"../../../../game/scripts/Manager/EditorManager":49},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"./../../Manager/ListenerManager":19,"../BaseFrameUI":14,"../../SDK/T2M":6,"../../Data/FrameMsgType":13,"../../Utils/UIHelp":40,"../../Manager/ReportManager":10,"../../../../game/scripts/Manager/EditorManager":49,"../../Manager/SoundManager":32},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../../Utils/UIHelp":40,"../../Http/NetWork":5,"../BaseUI":16,"../../../../game/scripts/Manager/EditorManager":49,"../../../../game/scripts/Data/ConstValue":50},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{"./BoundingBoxHelp":9},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{"./../../Manager/SoundManager":32,"../BaseFrameUI":14,"../../../../game/scripts/Manager/EditorManager":49,"../../Utils/Tools":29,"../../../../game/scripts/Data/ConstValue":50,"../../Utils/UIHelp":40,"../../Manager/ReportManager":10},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"../Data/FrameConstValue":7,"../Http/NetWork":5,"../SDK/GameMsg":12,"../Data/FrameMsgType":13,"./ListenerManager":19,"./UIManager":3},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{"../../../game/scripts/Data/CustomSyncData":36,"../../../frame/scripts/Data/FrameSyncData":28,"../../../frame/scripts/Manager/ReportManager":10},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":50,"../../Http/NetWork":5,"../../Manager/ListenerManager":19,"../../Manager/ReportManager":10,"../../Manager/SoundManager":32,"../../../../game/scripts/Manager/EditorManager":49,"../../SDK/GameMsg":12,"../../Manager/UIManager":3,"../../Data/FrameMsgType":13,"../../SDK/T2M":6,"../../Manager/SyncDataManager":33,"../../Utils/UIHelp":40,"../BaseUI":16},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"../Item/Tip":26,"../BaseFrameUI":14},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{"../../Utils/UIHelp":40,"../../SDK/T2M":6,"../BaseFrameUI":14,"../../Data/FrameMsgType":13},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{"../../Manager/UIManager":3,"./../../Manager/SoundManager":32,"../BaseFrameUI":14,"../../Utils/UIHelp":40,"../../Utils/Tools":29,"../../../../game/scripts/Data/ConstValue":50,"../../SDK/T2M":6,"../../Data/FrameMsgType":13},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"./../Manager/SoundManager":32},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{"../../../game/scripts/UI/panel/TeacherPanel":48,"../../../game/scripts/UI/panel/GamePanel":44,"../UI/Panel/ErrorPanel":21,"../Manager/ListenerManager":19,"../UI/Panel/AffirmTips":37,"../UI/Panel/OverTips":38,"../Data/FrameMsgType":13,"../Manager/UIManager":3,"../UI/Panel/TipUI":35,"../UI/Panel/StarCount":31,"../UI/Panel/SubmissionPanel":24,"../UI/Panel/UploadAndReturnPanel":25},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":19,"../../../../frame/scripts/Http/NetWork":5,"../../../../frame/scripts/SDK/T2M":6,"../../../../frame/scripts/Manager/SyncDataManager":33,"../../Data/EventType":1,"../../../../frame/scripts/Manager/SoundManager":32,"../../../../frame/scripts/Utils/UIHelp":40,"../../Manager/EditorManager":49,"./SoundConfig":47,"./OptionKuang":51,"../../../../frame/scripts/Utils/Tools":29},"path":"preview-scripts/assets/game/scripts/UI/Item/GameUI.js"},{"deps":{"../../../../frame/scripts/Manager/SyncDataManager":33,"../../../../frame/scripts/UI/Panel/BaseGamePanel":34,"../../../../frame/scripts/Manager/ListenerManager":19,"../../Data/EventType":1},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":6},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{"../../../../frame/scripts/Manager/ReportManager":10,"../../../../frame/scripts/Manager/ListenerManager":19,"../../../../frame/scripts/Data/FrameMsgType":13,"../../Data/ConstValue":50,"../../../../frame/scripts/Utils/UIHelp":40,"../../../../frame/scripts/Manager/UIManager":3,"../../Manager/EditorManager":49,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":27,"./GamePanel":44},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":19,"../../../../frame/scripts/Utils/UIHelp":40,"./SoundConfig":47,"../../../../frame/scripts/Manager/SoundManager":32,"../../Data/EventType":1},"path":"preview-scripts/assets/game/scripts/UI/Item/OptionKuang.js"}];
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
    
// 不同人物形象
// 黑猫
hijiki = "https://unpkg.com/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json"
// 白猫
tororo = "https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json"
// 狗狗
wanko = "https://unpkg.com/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json"
 
// 人物
koharu = "https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json"
shizuku = "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json"
z16 = "https://unpkg.com/live2d-widget-model-z16@1.0.5/assets/z16.model.json"
 
    L2Dwidget.init({
        "model": {
            // 在这里使用上面的人物名称替换“shizuku”，可以切换人物形象
            jsonPath: hijiki,
            "scale": 1
        },
        "display": {
            "position": "right",
            "width": 120,
            "height": 150,
            "hOffset": 0,
            "vOffset": -20
        },
        "mobile": {
            "show": true,
            "scale": 0.5
        },
        "react": {
            "opacityDefault": 0.7,
            "opacityOnHover": 0.2
        }
    });
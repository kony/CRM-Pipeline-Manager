function AS_Button_46e796f62d9f4b35b4c118105c6c4813(eventobject) {
    var frmId = kony.application.getCurrentForm();
    if (frmId["flxParent"].left == "0%") {
        frmId["flxParent"].animate(kony.ui.createAnimation({
            100: {
                "left": "70%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_IN_OUT
                }
            }
        }), {
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.20,
            "delay": 0.20
        }, {
            "animationEnd": function() {}
        });
    } else {
        frmId["flxParent"].animate(kony.ui.createAnimation({
            100: {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASIN_IN_OUT
                }
            }
        }), {
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.20,
            "delay": 0.20
        }, {});
    }
}
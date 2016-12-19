function AS_Button_95c8bbd9673c451c92f7c0321c2f8386(eventobject) {
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
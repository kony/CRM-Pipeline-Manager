function AS_Button_ec0767b7a4ad4b60a92e4e2e02642ad2(eventobject) {
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
            "animationEnd": function() {
                //frmId.flxCloseMenu.isVisible = false;
            }
        });
    } else {
        //frmId.flxCloseMenu.isVisible = true;
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
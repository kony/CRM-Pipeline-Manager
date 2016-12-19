function btnHamburgerOpportunityList(eventobject) {
    return AS_Button_87a44d21d5864510873ba5b06a8c23c9(eventobject);
}

function AS_Button_87a44d21d5864510873ba5b06a8c23c9(eventobject) {
    function ____0bfdc816d4384bf68d28a78295554828_Callback() {}

    function MOVE_ACTION____57e8c20a6c5b4e4fa5a1e297f62f4e0d_Callback() {}
    if ((frmOpportunityList.flxParent.left == "0%")) {
        frmOpportunityList.flxParent.animate(kony.ui.createAnimation({
            "100": {
                "left": "75%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0.2,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.2
        }, {
            "animationEnd": MOVE_ACTION____57e8c20a6c5b4e4fa5a1e297f62f4e0d_Callback
        });
    } else {
        frmOpportunityList.flxParent.animate(kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0.2,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.2
        }, {
            "animationEnd": ____0bfdc816d4384bf68d28a78295554828_Callback
        });
    }
}
function btnHamburgerAccountsList(eventobject) {
    return AS_Button_279ed9a61eb9405f8b10c3ee9e33e323(eventobject);
}

function AS_Button_279ed9a61eb9405f8b10c3ee9e33e323(eventobject) {
    function ____085400c31f814bdb9021a54ad43cd307_Callback() {}

    function MOVE_ACTION____e63817b9c55a49f396e30a70786c591f_Callback() {}
    if ((frmAccountList.flxParent.left == "0%")) {
        frmAccountList.flxParent.animate(kony.ui.createAnimation({
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
            "animationEnd": MOVE_ACTION____e63817b9c55a49f396e30a70786c591f_Callback
        });
    } else {
        frmAccountList.flxParent.animate(kony.ui.createAnimation({
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
            "animationEnd": ____085400c31f814bdb9021a54ad43cd307_Callback
        });
    }
}
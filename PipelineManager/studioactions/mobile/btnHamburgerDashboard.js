function btnHamburgerDashboard(eventobject) {
    return AS_Button_feb7cd3cc340442890dc7ab6f2d1326a(eventobject);
}

function AS_Button_feb7cd3cc340442890dc7ab6f2d1326a(eventobject) {
    function ____6c4f88df346246d89c8ebc4da1c39eda_Callback() {}

    function MOVE_ACTION____f5ff3ff54b404a3d9c8bca59467f7a16_Callback() {}
    if ((frmDashboard.flxParent.left == "0%")) {
        frmDashboard.flxParent.animate(kony.ui.createAnimation({
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
            "animationEnd": MOVE_ACTION____f5ff3ff54b404a3d9c8bca59467f7a16_Callback
        });
    } else {
        frmDashboard.flxParent.animate(kony.ui.createAnimation({
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
            "animationEnd": ____6c4f88df346246d89c8ebc4da1c39eda_Callback
        });
    }
}
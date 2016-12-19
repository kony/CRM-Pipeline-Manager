function AS_FlexContainer_b964a0a87c044c76a8d675991d32122d(eventobject) {
    var frmId = kony.application.getCurrentForm();
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
    }, {
        "animationEnd": function() {
            frmLogin.txtbxUserName.text = "";
            frmLogin.txtbxPassword.text = "";
        }
    });
    frmLogin.show();
}
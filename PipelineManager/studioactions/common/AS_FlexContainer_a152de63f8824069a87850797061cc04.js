function AS_FlexContainer_a152de63f8824069a87850797061cc04(eventobject) {
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
            frmLogin.show();
        }
    });
}
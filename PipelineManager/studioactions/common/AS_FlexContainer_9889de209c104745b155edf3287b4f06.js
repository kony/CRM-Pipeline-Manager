function AS_FlexContainer_9889de209c104745b155edf3287b4f06(eventobject) {
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
        "animationEnd": function() {}
    });
    if ((frmLogin.rememberME.selectedKeys !== null)) {
        frmLogin.show();
    } else {
        frmLogin.txtbxUserName.text = "";
        frmLogin.txtbxPassword.text = "";
        frmLogin.show();
    }
}
function btnLoginOnclick(eventobject) {
    return AS_Button_f379377414e04bff9019e9c2037f05d6(eventobject);
}

function AS_Button_f379377414e04bff9019e9c2037f05d6(eventobject) {
    function SHOW_ALERT__5590b31303cf4e3b9ca63177499d9a22_True() {}
    client = kony.sdk.getCurrentInstance();
    identityInstance = client.getIdentityService("identitySalesForce");
    if ((frmLogin.flxMainLogin.flxMain.txtbxUserName.text !== "") && (frmLogin.flxMainLogin.flxMain.txtbxUserName.text !== undefined) && (frmLogin.flxMainLogin.flxMain.txtbxPassword.text !== "") && (frmLogin.flxMainLogin.flxMain.txtbxPassword.text !== undefined)) {
        iparams = {
            "userid": frmLogin.txtbxUserName.text,
            "password": frmLogin.txtbxPassword.text + securityToken
        };
        kony.application.showLoadingScreen("loadingScreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
        //iparams= {};
        identityInstance.login(iparams, function(response) {
            kony.application.dismissLoadingScreen();
            frmDashboard.show();
        }, function(res) {
            kony.application.dismissLoadingScreen();
            var infoAlert = kony.ui.Alert({
                message: JSON.stringify(res.details.errmsg),
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Kony",
                yesLabel: "OK",
                noLabel: "Cancel",
                alertHandler: null
            }, {});
        });
    } else {
        function SHOW_ALERT__5590b31303cf4e3b9ca63177499d9a22_Callback() {
            SHOW_ALERT__5590b31303cf4e3b9ca63177499d9a22_True()
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": "Kony",
            "yesLabel": "OK",
            "message": "Please enter required fields.",
            "alertHandler": SHOW_ALERT__5590b31303cf4e3b9ca63177499d9a22_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        })
    }
}
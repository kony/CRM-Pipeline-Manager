function AS_Button_63b8b6a681734a9381dbac7802cb778c(eventobject) {
    client = kony.sdk.getCurrentInstance();
    identityInstance = client.getIdentityService("identitySalesForce");
    if ((frmLogin.txtbxUserName.text != "" && frmLogin.txtbxUserName.text != undefined) && (frmLogin.txtbxPassword.text != "" && frmLogin.txtbxPassword.text != undefined)) {
        iparams = {
            "userid": frmLogin.txtbxUserName.text,
            "password": frmLogin.txtbxPassword.text + securityToken
        };
        kony.application.showLoadingScreen("loadingScreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
        identityInstance.login(iparams, function(response) {
            kony.application.dismissLoadingScreen();
            frmDashboard.show();
        }, function(res) {
            kony.application.dismissLoadingScreen();
            var infoAlert = kony.ui.Alert({
                message: JSON.stringify(res),
                alertType: constants.ALERT_TYPE_INFO,
                alertTitle: "Kony",
                yesLabel: "OK",
                noLabel: "Cancel",
                alertHandler: null
            }, {});
        });
    } else {
        var infoAlert = kony.ui.Alert({
            message: "Please enter required fields.",
            alertType: constants.ALERT_TYPE_INFO,
            alertTitle: "Kony",
            yesLabel: "OK",
            noLabel: "Cancel",
            alertHandler: null
        }, {});
    }
}
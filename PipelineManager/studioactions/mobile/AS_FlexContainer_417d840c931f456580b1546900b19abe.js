function AS_FlexContainer_417d840c931f456580b1546900b19abe(eventobject) {
    sliderMenu.call(this);
    if ((frmLogin.flxMainLogin.flxMain.rememberME.selectedKeys !== null)) {
        frmLoginVA.show();
    } else {
        frmLoginVA.tbxCRMUserIDKA.text = "";
        frmLoginVA.tbxCRMPasswordKA.text = "";
        frmLoginVA.show();
    }
}
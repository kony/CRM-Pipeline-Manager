function AS_Segment_44da980d1b5f4be3b6571361207c19a0(eventobject, sectionNumber, rowNumber) {
    frmAccountDetails.lblAccountNameKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblAccountNameKA"].text;
    frmAccountDetails.lblStateKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblStateKA"].text;
    frmAccountDetails.lblAccountStatusKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblAccountStatusKA"].text;
    frmAccountDetails.lblIndustryValKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblIndustryValKA"].text;
    frmAccountDetails.lblPrimeAddrsKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblPrimeAddrsKA"].text;
    frmAccountDetails.lblWebsiteNameKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblWebsiteNameKA"].text;
    frmAccountDetails.lblOwnerNameKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblOwnerNameKA"].text;
    frmAccountDetails.lblPhoneNumKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblPhoneNumKA"].text;
    frmAccountDetails.lblFaxNumKA["text"] = frmAccountList.segAccountListKA.selectedItems[0]["lblFaxNumKA"].text;
    frmAccountDetails.show();
}
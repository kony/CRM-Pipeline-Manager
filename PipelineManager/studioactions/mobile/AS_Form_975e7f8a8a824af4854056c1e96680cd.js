function AS_Form_975e7f8a8a824af4854056c1e96680cd(eventobject) {
    function INVOKE_ASYNC_SERVICE__7c7d95bba94042f89ec2ce724546df6a_Callback(status, queryAllOpportunity) {
        frmOpportunityList.segOppurtunitiesListKA.setData(queryAllOpportunity["Opportunity"]);
    }

    function INVOKE_ASYNC_SERVICE__12c692f5b317461ea8e8f257999b8781_Callback(status, queryAllAccount) {
        var tempCollection286 = [];
        var tempData4278 = queryAllAccount["Account"];
        for (var each in tempData4278) {
            tempCollection286.push({
                "lblAccountNameKA": {
                    "text": tempData4278[each]["Name"]
                },
                "lblAccountLocationKA": {
                    "text": tempData4278[each]["BillingStreet"]
                },
                "lblLastActivityKA": {
                    "text": tempData4278[each]["LastModifiedDate"]
                },
                "lblStateKA": {
                    "text": tempData4278[each]["BillingState"]
                },
                "lblAccountStatusKA": {
                    "text": tempData4278[each]["Type"]
                },
                "lblIndustryValKA": {
                    "text": tempData4278[each]["Id"]
                },
                "lblPhoneNumKA": {
                    "text": tempData4278[each]["Phone"]
                },
                "lblFaxNumKA": {
                    "text": tempData4278[each]["Fax"]
                },
                "lblPrimeAddrsKA": {
                    "text": tempData4278[each]["BillingStreet"]
                },
                "lblWebsiteNameKA": {
                    "text": tempData4278[each]["Website"]
                },
                "lblOwnerNameKA": {
                    "text": tempData4278[each]["Ownership"]
                },
            });
        }
        frmAccountList.segAccountListKA.setData(tempCollection286);
        accountsTab = queryAllAccount["Account"];
    }
    kony.application.showLoadingScreen("loadingScreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    if (queryAllAccount_inputparam == undefined) {
        var queryAllAccount_inputparam = {};
    }
    queryAllAccount_inputparam["serviceID"] = "integrationSalesForce$queryAllAccount";
    queryAllAccount_inputparam["queryString"] = accountsInputParam;
    var queryAllAccount_httpheaders = {};
    queryAllAccount_inputparam["httpheaders"] = queryAllAccount_httpheaders;
    var queryAllAccount_httpconfigs = {};
    queryAllAccount_inputparam["httpconfig"] = queryAllAccount_httpconfigs;
    integrationSalesForce$queryAllAccount = mfintegrationsecureinvokerasync(queryAllAccount_inputparam, "integrationSalesForce", "queryAllAccount", INVOKE_ASYNC_SERVICE__12c692f5b317461ea8e8f257999b8781_Callback);
    if (queryAllOpportunity_inputparam == undefined) {
        var queryAllOpportunity_inputparam = {};
    }
    queryAllOpportunity_inputparam["serviceID"] = "integrationSalesForce$queryAllOpportunity";
    queryAllOpportunity_inputparam["queryString"] = oppInputParam;
    var queryAllOpportunity_httpheaders = {};
    queryAllOpportunity_inputparam["httpheaders"] = queryAllOpportunity_httpheaders;
    var queryAllOpportunity_httpconfigs = {};
    queryAllOpportunity_inputparam["httpconfig"] = queryAllOpportunity_httpconfigs;
    integrationSalesForce$queryAllOpportunity = mfintegrationsecureinvokerasync(queryAllOpportunity_inputparam, "integrationSalesForce", "queryAllOpportunity", INVOKE_ASYNC_SERVICE__7c7d95bba94042f89ec2ce724546df6a_Callback);
    kony.application.dismissLoadingScreen();
}
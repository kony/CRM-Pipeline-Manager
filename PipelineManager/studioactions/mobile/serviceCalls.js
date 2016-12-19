function serviceCalls(eventobject) {
    return AS_Form_59410b72d1934e619ccf5d0220270d86(eventobject);
}

function AS_Form_59410b72d1934e619ccf5d0220270d86(eventobject) {
    function INVOKE_ASYNC_SERVICE__e217679e93d8437aa6b9c9c301567666_Callback(status, queryAllOpportunity) {
        var tempCollection9283 = [];
        var tempData6839 = queryAllOpportunity["Opportunity"];
        for (var each in tempData6839) {
            tempCollection9283.push({
                "lblHeadingKA": {
                    "text": tempData6839[each]["Name"]
                },
                "lblProbabilityValueKA": {
                    "text": tempData6839[each]["Probability"]
                },
                "lblSizeValueKA": {
                    "text": tempData6839[each]["Amount"]
                },
                "lblMainCompetitorsKA": {
                    "text": tempData6839[each]["MainCompetitors__c"]
                },
                "lblCloseDateKA": {
                    "text": tempData6839[each]["CloseDate"]
                },
                "lblStageNameKA": {
                    "text": tempData6839[each]["StageName"]
                },
                "lblFirstDiscussiondateKA": {
                    "text": tempData6839[each]["CreatedDate"]
                },
                "lblSourceValueKA": {
                    "text": tempData6839[each]["LeadSource"]
                },
                "lblTypeValueKA": {
                    "text": tempData6839[each]["Type"]
                },
                "lblOwnerIDValueKA": {
                    "text": tempData6839[each]["OwnerId"]
                },
            });
        }
        frmOpportunityList.segOppurtunitiesListKA.setData(tempCollection9283);
    }

    function INVOKE_ASYNC_SERVICE__c26d494328544be4a2cff0f5c41e95a5_Callback(status, queryAllAccount) {
        var tempCollection8418 = [];
        var tempData9729 = queryAllAccount["Account"];
        for (var each in tempData9729) {
            tempCollection8418.push({
                "lblAccountNameKA": {
                    "text": tempData9729[each]["Name"]
                },
                "lblAccountLocationKA": {
                    "text": tempData9729[each]["BillingStreet"]
                },
                "lblLastActivityKA": {
                    "text": tempData9729[each]["LastModifiedDate"]
                },
                "lblStateKA": {
                    "text": tempData9729[each]["BillingState"]
                },
                "lblAccountStatusKA": {
                    "text": tempData9729[each]["Type"]
                },
                "lblIndustryValKA": {
                    "text": tempData9729[each]["Id"]
                },
                "lblPhoneNumKA": {
                    "text": tempData9729[each]["Phone"]
                },
                "lblFaxNumKA": {
                    "text": tempData9729[each]["Fax"]
                },
                "lblPrimeAddrsKA": {
                    "text": tempData9729[each]["BillingStreet"]
                },
                "lblWebsiteNameKA": {
                    "text": tempData9729[each]["Website"]
                },
                "lblOwnerNameKA": {
                    "text": tempData9729[each]["Ownership"]
                },
            });
        }
        frmAccountList.segAccountListKA.setData(tempCollection8418);
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
    integrationSalesForce$queryAllAccount = mfintegrationsecureinvokerasync(queryAllAccount_inputparam, "integrationSalesForce", "queryAllAccount", INVOKE_ASYNC_SERVICE__c26d494328544be4a2cff0f5c41e95a5_Callback);
    if (queryAllOpportunity_inputparam == undefined) {
        var queryAllOpportunity_inputparam = {};
    }
    queryAllOpportunity_inputparam["serviceID"] = "integrationSalesForce$queryAllOpportunity";
    queryAllOpportunity_inputparam["queryString"] = oppInputParam;
    var queryAllOpportunity_httpheaders = {};
    queryAllOpportunity_inputparam["httpheaders"] = queryAllOpportunity_httpheaders;
    var queryAllOpportunity_httpconfigs = {};
    queryAllOpportunity_inputparam["httpconfig"] = queryAllOpportunity_httpconfigs;
    integrationSalesForce$queryAllOpportunity = mfintegrationsecureinvokerasync(queryAllOpportunity_inputparam, "integrationSalesForce", "queryAllOpportunity", INVOKE_ASYNC_SERVICE__e217679e93d8437aa6b9c9c301567666_Callback);
    kony.application.dismissLoadingScreen();
}
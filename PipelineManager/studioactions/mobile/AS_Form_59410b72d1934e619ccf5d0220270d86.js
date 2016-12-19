function AS_Form_59410b72d1934e619ccf5d0220270d86(eventobject) {
    function INVOKE_ASYNC_SERVICE__e217679e93d8437aa6b9c9c301567666_Callback(status, queryAllOpportunity) {
        var tempCollection4787 = [];
        var tempData9324 = queryAllOpportunity["Opportunity"];
        for (var each in tempData9324) {
            tempCollection4787.push({
                "lblHeadingKA": {
                    "text": tempData9324[each]["Name"]
                },
                "lblProbabilityValueKA": {
                    "text": tempData9324[each]["Probability"]
                },
                "lblSizeValueKA": {
                    "text": tempData9324[each]["Amount"]
                },
                "lblMainCompetitorsKA": {
                    "text": tempData9324[each]["MainCompetitors__c"]
                },
                "lblCloseDateKA": {
                    "text": tempData9324[each]["CloseDate"]
                },
                "lblStageNameKA": {
                    "text": tempData9324[each]["StageName"]
                },
                "lblFirstDiscussiondateKA": {
                    "text": tempData9324[each]["CreatedDate"]
                },
                "lblSourceValueKA": {
                    "text": tempData9324[each]["LeadSource"]
                },
                "lblTypeValueKA": {
                    "text": tempData9324[each]["Type"]
                },
                "lblOwnerIDValueKA": {
                    "text": tempData9324[each]["OwnerId"]
                },
            });
        }
        frmOpportunityListKA.segOppurtunitiesListKA.setData(tempCollection4787);
    }
    function INVOKE_ASYNC_SERVICE__c26d494328544be4a2cff0f5c41e95a5_Callback(status, queryAllAccount) {
        accountsTab = queryAllAccount["Account"];
        frmAccountListKA.segAccountListKA.setData(queryAllAccount["Account"]);
    }
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
}
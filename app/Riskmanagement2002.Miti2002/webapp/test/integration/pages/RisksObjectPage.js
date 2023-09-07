sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'Riskmanagement2002.Miti2002',
            componentId: 'RisksObjectPage',
            entitySet: 'Risks'
        },
        CustomPageDefinitions
    );
});
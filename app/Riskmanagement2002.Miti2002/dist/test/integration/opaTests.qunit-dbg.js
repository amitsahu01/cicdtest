sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'Riskmanagement2002/Miti2002/test/integration/FirstJourney',
		'Riskmanagement2002/Miti2002/test/integration/pages/MitigationsList',
		'Riskmanagement2002/Miti2002/test/integration/pages/MitigationsObjectPage',
		'Riskmanagement2002/Miti2002/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, MitigationsList, MitigationsObjectPage, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('Riskmanagement2002/Miti2002') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMitigationsList: MitigationsList,
					onTheMitigationsObjectPage: MitigationsObjectPage,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);
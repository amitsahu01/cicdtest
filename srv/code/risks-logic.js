/**
 * 
 * @After(event = { "READ" }, entity = "Riskmanagement2002Service.Risks")
 * @param {Object} results - For the After phase only: the result of the event processing
 * @param {Object} request - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(results, request) {
	// Your code here

	const risksData = results;
	const risks = Array.isArray(risksData) ? risksData : [risksData];
	risks.forEach(risk => {
		if (risk.impact >= 100000) {
			risk.criticality = 1;
		} else {
			risk.criticality = 2;
		}
	});
}
const { google } = require("googleapis");

API_KEY = "AIzaSyDiM4hg7lP93l016Arl6HthMx3pVZhHvQg";
DISCOVERY_URL =
  "https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1";

exports.toxicityDetector=(text)=>{
    let promise = new Promise(function(resolve, reject) {
        google
        .discoverAPI(DISCOVERY_URL)
        .then((client) => {
            const analyzeRequest = {
            comment: {
                text,
            },
            requestedAttributes: {
                TOXICITY: {},
            },
            };

            client.comments.analyze(
            {
                key: API_KEY,
                resource: analyzeRequest,
            },
            (err, response) => {
                if (err) return reject(err);
                resolve(response.data.attributeScores.TOXICITY.summaryScore.value>0.9);
            }
            );
        })
        .catch((err) => {
            reject(err);
        });
    });
    
    return promise;
}

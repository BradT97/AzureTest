async function heyWorld(context, req) {
    context.log('HelloWorld requested');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hey " + (req.query.name || req.body.name) + ", how you doin'?"
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};

module.exports = heyWorld;
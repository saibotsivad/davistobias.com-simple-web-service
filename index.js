const AWS = require('aws-sdk')

module.exports.server = async (context, event) => {
	return {
		statusCode: 200,
		body: JSON.stringify({

			path: context.pathParameters,
			query: context.queryStringParameters,
			method: context.httpMethod
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	}
}

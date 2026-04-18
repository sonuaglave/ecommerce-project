exports.handler = async (event) => {
    try {
        const method = event.httpMethod;

        if (method === "GET") {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: "E-Commerce API Running"
                })
            };
        }

        if (method === "POST") {
            const body = JSON.parse(event.body || "{}");

            if (!body.name) {
                return {
                    statusCode: 400,
                    body: JSON.stringify({ error: "Name required" })
                };
            }

            return {
                statusCode: 200,
                body: JSON.stringify({
                    success: true,
                    product: body
                })
            };
        }

        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method not allowed" })
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};

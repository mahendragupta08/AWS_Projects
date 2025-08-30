def lambda_handler(event, context):
    print("Event:",event)

    return {
        "StatusCode": 200,
        "body":"Hello from Lambda"
    }
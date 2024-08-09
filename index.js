const HOST = "127.0.0.1"
const PORT = "54510"
const EMULATOR_URL = `http://127.0.0.1:54510/v1/projects/test-project:commit`

async function main() {
    const payload = {
        "mutations": [
            {
                "insert": {
                    "properties": {
                        "myProperty": {
                            "stringValue": "myValue"
                        }
                    },
                    "key": {
                        "partitionId": {
                            "namespaceId": "test",
                            "projectId": "test-project"
                        },
                        "path": [
                            {
                                "kind": "MyKind"
                            }
                        ]
                    }
                }
            }
        ],
        "mode": "NON_TRANSACTIONAL"
    }

    const response = await fetch(EMULATOR_URL, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
    const text = await response.text();

    console.log(text)
}

main()
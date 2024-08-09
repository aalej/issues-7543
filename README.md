# Repro for issue 7543

## Versions

platform: macOS Sonoma 14.5<br>
firebase-tools: v13.15.0<br>
Google Cloud SDK 487.0.0<br>
beta 2024.08.06<br>
bq 2.1.7<br>
cloud-datastore-emulator 2.3.1<br>
cloud-firestore-emulator 1.19.7<br>
core 2024.08.06<br>
gcloud-crc32c 1.0.0<br>
gsutil 5.30<br>

## Steps to reproduce

1. Open a terminal and run `gcloud emulators firestore start --host-port=127.0.0.1:54510 --database-mode=datastore-mode`
1. Open a new terminal and run `node .`
   - Prints

```json
{
  "mutationResults": [
    {
      "key": {
        "partitionId": {
          "projectId": "test-project",
          "namespaceId": "test"
        },
        "path": [
          {
            "kind": "MyKind",
            "id": "5629499534213120"
          }
        ]
      },
      "version": "1723212575189752",
      "updateTime": "2024-08-09T14:09:35.189752Z",
      "createTime": "2024-08-09T14:09:35.189752Z"
    }
  ]
}
```

## Notes

1. When using `gcloud --project=test-project beta emulators datastore start --use-firestore-in-datastore-mode --host-port=127.0.0.1:54510`
1. Run `node .`
   - Prints

```json
{
  "mutationResults": [
    {
      "key": {
        "partitionId": {
          "projectId": "test-project",
          "namespaceId": "test"
        },
        "path": [
          {
            "kind": "MyKind",
            "id": "12"
          }
        ]
      },
      "version": "2"
    }
  ],
  "indexUpdates": 3
}
```

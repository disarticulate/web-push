let privateKey = "UQfME6FJwKgSpDttnhCsKcFpqJRaAtT8_RUN5k4wVZM"
let publicKey = "BPBaeHjfgQQLvwv1EzmfUtiFJ_vGSv-hjUQcw5MhD5-DxBzlZ789FFyVUTpbbhRj7f23lCqFZXdWUod-8jXGyDw"
let options = {
  vapidDetails: {
    subject: 'mailto:eric@lorefolk.com',
    publicKey,
    privateKey
  }
}

let subscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/eFD5e7E8u-M:APA91bHCpAQFOnxxjFISFcStKAq6CdZN5otIPmxzyL7Q-01y-Tqf7jl62mZPkIlceMo-QyjPt_XecwTPIbL0PGhYPBfEVhX8EheqUs_wsEBN9EgumZ6_iLbmAKs0nsSQ6jG-MTLwXUs5",
  "expirationTime": null,
  "keys": {
    "p256dh": "BNKcfjfDWxam6BPzE6awFCf_fObumLgPwNj3N0B_H5SSfusZgIIMPcjtoF3VglcebCgA14TYxzsv8i4M8SBtMcI",
    "auth": "YDXRxavvle50WtS_GUFSmw"
  }
}
let payload = {
  hello: 'what'
}

// WebPushApi.setGCMAPIKey('BPIGRKCfWl31YhnEl86rmcGrWMW_EjOhzlGUPeGuwE4nuUMzRlUqYFU_qEPmihAYIeL8yqa3inOUuzGAW84bLOY');

WebPushApi.encrypt(subscription.keys.p256dh, subscription.keys.auth, JSON.stringify(payload), 'aes128gcm');

WebPushApi.sendNotification(subscription, JSON.stringify(payload), options)


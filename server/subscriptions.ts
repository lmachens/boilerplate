import webPush from "web-push";
import { collection } from "./db";

export const initializeWebPush = (
  vapidSubject: string,
  vapidPublicKey: string,
  vapidPrivateKey: string
) => {
  webPush.setVapidDetails(vapidSubject, vapidPublicKey, vapidPrivateKey);
  console.log("WebPush initialized 🤖");
};

const subscriptionCollection = () => collection<Subscription>("subscriptions");

type Subscription = {
  endpointURL: string;
  auth: string;
  p256dh: string;
};

export const subscribe = (newSubscription: Subscription) => {
  return subscriptionCollection().insertOne(newSubscription);
};

export const broadcastMessage = async (message: string): Promise<number> => {
  const subscriptions = await subscriptionCollection().find().toArray();
  subscriptions.forEach(async (subscription) => {
    const pushSubscription = {
      endpoint: subscription.endpointURL,
      keys: {
        p256dh: subscription.p256dh,
        auth: subscription.auth,
      },
    };

    const payload = message;

    const options = {
      TTL: 60,
    };

    await webPush.sendNotification(pushSubscription, payload, options);
  });
  return subscriptions.length;
};
